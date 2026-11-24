-- Makran Digital Community: posts and user reports
-- Run this file once in Supabase SQL Editor.

create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  category text not null check (category in ('Scholarships','Education & Admissions','Jobs & Internships','Career & Skills','General Discussion')),
  title text not null check (char_length(title) between 5 and 120),
  body text not null check (char_length(body) between 10 and 2000),
  created_at timestamptz not null default now()
);

create index if not exists community_posts_created_at_idx
  on public.community_posts (created_at desc);

alter table public.community_posts enable row level security;

drop policy if exists "Signed-in users can read community posts" on public.community_posts;
create policy "Signed-in users can read community posts"
  on public.community_posts for select to authenticated
  using (true);

drop policy if exists "Users can create their own community posts" on public.community_posts;
create policy "Users can create their own community posts"
  on public.community_posts for insert to authenticated
  with check (auth.uid() = author_id);

drop policy if exists "Users can delete their own community posts" on public.community_posts;
create policy "Users can delete their own community posts"
  on public.community_posts for delete to authenticated
  using (auth.uid() = author_id);

grant select, insert, delete on public.community_posts to authenticated;
revoke all on public.community_posts from anon;

create table if not exists public.community_reports (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.community_posts(id) on delete cascade,
  reporter_id uuid not null references auth.users(id) on delete cascade,
  reason text not null check (reason in ('Spam or scam','Harassment or bullying','False or misleading information','Inappropriate content','Other')),
  details text check (details is null or char_length(details) <= 500),
  created_at timestamptz not null default now(),
  unique (post_id, reporter_id)
);

alter table public.community_reports enable row level security;

drop policy if exists "Users can report community posts" on public.community_reports;
create policy "Users can report community posts"
  on public.community_reports for insert to authenticated
  with check (
    auth.uid() = reporter_id
    and exists (select 1 from public.community_posts p where p.id = post_id)
  );

drop policy if exists "Users can view their own community reports" on public.community_reports;
create policy "Users can view their own community reports"
  on public.community_reports for select to authenticated
  using (auth.uid() = reporter_id);

grant insert, select on public.community_reports to authenticated;
revoke all on public.community_reports from anon;
