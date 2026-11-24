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
