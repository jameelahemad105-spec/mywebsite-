-- Makran Digital: secure platform administrator review tools
-- Run in Supabase SQL Editor after replacing the UUID below with your own Auth user ID.
-- Find it with: select id, email from auth.users order by created_at;

create table if not exists public.platform_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.platform_admins enable row level security;
revoke all on public.platform_admins from anon, authenticated;

-- IMPORTANT: replace the UUID with the owner account's auth.users.id.
-- insert into public.platform_admins (user_id) values ('REPLACE-WITH-YOUR-AUTH-USER-UUID')
-- on conflict (user_id) do nothing;

create or replace function public.is_platform_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.platform_admins
    where user_id = (select auth.uid())
  );
$$;

create or replace function public.admin_list_submissions()
returns setof public.opportunities
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_platform_admin() then
    raise exception 'Administrator access required';
  end if;
  return query
    select * from public.opportunities
    where status = 'pending'
    order by created_at desc;
end;
$$;

create or replace function public.admin_review_submission(p_id text, p_decision text)
returns boolean
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_platform_admin() then
    raise exception 'Administrator access required';
  end if;
  if p_decision not in ('approved', 'rejected') then
    raise exception 'Invalid review decision';
  end if;
  update public.opportunities
     set status = p_decision
   where id::text = p_id and status = 'pending';
  if not found then
    raise exception 'Pending submission not found';
  end if;
  return true;
end;
$$;

revoke all on function public.is_platform_admin() from public, anon;
revoke all on function public.admin_list_submissions() from public, anon;
revoke all on function public.admin_review_submission(text, text) from public, anon;
grant execute on function public.is_platform_admin() to authenticated;
grant execute on function public.admin_list_submissions() to authenticated;
grant execute on function public.admin_review_submission(text, text) to authenticated;
