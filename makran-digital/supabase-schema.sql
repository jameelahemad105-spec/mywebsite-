-- Makran Digital student hub database setup (Supabase SQL Editor)
-- Run this script in your Supabase project. It is safe to re-run for the category constraint.
create extension if not exists pgcrypto;

create table if not exists public.opportunities (
  id uuid primary key default gen_random_uuid(),
  submitter_name text not null check (char_length(submitter_name) between 2 and 80),
  category text not null,
  title text not null check (char_length(title) between 5 and 120),
  description text not null check (char_length(description) between 10 and 1200),
  url text,
  location text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

-- Update the category constraint for the student-focused directory.
alter table public.opportunities drop constraint if exists opportunities_category_check;
alter table public.opportunities add constraint opportunities_category_check
  check (category in ('tests','scholarships','international','careers','skills','education','jobs','services','community'));

alter table public.opportunities enable row level security;

drop policy if exists "Anyone can read approved opportunities" on public.opportunities;
create policy "Anyone can read approved opportunities"
on public.opportunities for select
to anon, authenticated
using (status = 'approved');

drop policy if exists "Anyone can submit pending opportunities" on public.opportunities;
create policy "Anyone can submit pending opportunities"
on public.opportunities for insert
to anon, authenticated
with check (
  status = 'pending'
  and char_length(submitter_name) between 2 and 80
  and category in ('tests','scholarships','international','careers','skills','education','jobs','services','community')
  and char_length(title) between 5 and 120
  and char_length(description) between 10 and 1200
);

-- No public update/delete policy is intentionally provided.
-- Review submissions in Supabase Table Editor and change status to approved/rejected
-- only from your trusted owner account. Never expose a service_role key in app.js.


-- Private user profiles: rows are tied to Supabase Auth users and never publicly readable.
create table if not exists public.user_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null check (char_length(first_name) between 1 and 60),
  last_name text not null check (char_length(last_name) between 1 and 60),
  father_name text,
  email text,
  phone text,
  country text,
  province text,
  region text,
  city text,
  address text,
  education text,
  occupation text,
  skills text,
  account_types text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.user_profiles enable row level security;
drop policy if exists "Users can view their own profile" on public.user_profiles;
create policy "Users can view their own profile" on public.user_profiles
for select to authenticated using (auth.uid() = user_id);
drop policy if exists "Users can create their own profile" on public.user_profiles;
create policy "Users can create their own profile" on public.user_profiles
for insert to authenticated with check (auth.uid() = user_id);
drop policy if exists "Users can update their own profile" on public.user_profiles;
create policy "Users can update their own profile" on public.user_profiles
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Public opportunity submissions are disabled until submitters authenticate.
drop policy if exists "Anyone can submit pending opportunities" on public.opportunities;
drop policy if exists "Authenticated users can submit pending opportunities" on public.opportunities;
create policy "Authenticated users can submit pending opportunities"
on public.opportunities for insert to authenticated
with check (
  auth.uid() is not null
  and status = 'pending'
  and char_length(submitter_name) between 2 and 80
  and category in ('tests','scholarships','international','careers','skills','education','jobs','services','community')
  and char_length(title) between 5 and 120
  and char_length(description) between 10 and 1200
);

-- Do not add public policies for user_profiles update, select, or delete.
-- Never put a Supabase service_role/secret key in browser JavaScript.
