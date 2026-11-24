-- Birthday quiz results: run this in Supabase SQL Editor.
-- Replace jameel-admin@example.com with the email you will use to sign in to the private dashboard.
create table if not exists public.birthday_results (
  id bigint generated always as identity primary key,
  visitor_name text not null check (char_length(visitor_name) between 1 and 60),
  score integer not null check (score between 0 and 10),
  created_at timestamptz not null default now()
);

alter table public.birthday_results enable row level security;

drop policy if exists "Visitors can submit birthday scores" on public.birthday_results;
create policy "Visitors can submit birthday scores"
on public.birthday_results for insert
to anon, authenticated
with check (
  char_length(visitor_name) between 1 and 60
  and score between 0 and 10
);

drop policy if exists "Only birthday owner can view scores" on public.birthday_results;
create policy "Only birthday owner can view scores"
on public.birthday_results for select
to authenticated
using ((auth.jwt() ->> 'email') = 'jameel-admin@example.com');

-- No public select, update, or delete policy is created.
-- In Supabase Auth, create/confirm a user with the same admin email and use that login in birthday-admin.html.
