create table if not exists public.account_deletion_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  reason text check (reason is null or char_length(reason) <= 1000),
  status text not null default 'pending' check (status in ('pending','processing','completed','declined')),
  created_at timestamptz not null default now()
);
create index if not exists account_deletion_requests_user_created_idx on public.account_deletion_requests (user_id, created_at desc);
alter table public.account_deletion_requests enable row level security;
drop policy if exists "Users can submit their own account deletion requests" on public.account_deletion_requests;
create policy "Users can submit their own account deletion requests" on public.account_deletion_requests for insert to authenticated with check (auth.uid() = user_id and status = 'pending');
drop policy if exists "Users can view their own account deletion requests" on public.account_deletion_requests;
create policy "Users can view their own account deletion requests" on public.account_deletion_requests for select to authenticated using (auth.uid() = user_id);
revoke all on public.account_deletion_requests from anon, public;
grant insert, select on public.account_deletion_requests to authenticated;
-- Requests are reviewed by the platform owner in Supabase. Never expose a service_role key in browser code.