# Makran Digital

**Connecting people. Creating opportunities.**

Makran Digital is a community platform concept for the Makran region, bringing education, scholarships, jobs, local services and community announcements together.

## Current MVP

- Responsive homepage and mobile navigation
- Search and category filters
- Starter resource cards with links to official resources
- Community submission form
- Supabase integration hooks for shared approved listings and pending submissions
- Moderation-first database policy: new submissions are pending; public visitors can only read approved posts

## Run locally

Open `index.html` in a browser. The starter resources and search/filter UI work immediately.

## Make the platform live with shared data

This project needs a Supabase project to store submissions and show approved posts to all visitors.

1. Create a project at https://supabase.com/.
2. Open the Supabase SQL Editor and run the complete contents of `supabase-schema.sql`.
3. In Supabase Project Settings → API, copy the Project URL and the publishable/anon key.
4. In `app.js`, replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_KEY` with those values.
5. Commit the change and publish the site with GitHub Pages.
6. Review new rows in Supabase Table Editor. Change `status` from `pending` to `approved` only after checking the information.

The public anon/publishable key is designed for browser use when Row Level Security is configured correctly. **Never put a service_role key, database password, or private API secret in this repository.**

## Publish with GitHub Pages

In the repository, open Settings → Pages → Deploy from a branch → `main` → `/(root)` and save. The expected site URL for this folder is:

`https://jameelahemad105-spec.github.io/mywebsite-/makran-digital/`

The live URL becomes available after GitHub Pages deployment finishes.

## Trust and safety

- Listings are not published automatically.
- Verify scholarship, job and event information at the original provider before acting.
- Do not submit personal identity documents, passwords, financial details or sensitive personal data.
- Add a contact and moderation process before inviting large-scale public submissions.
- This MVP does not yet include user accounts, automated spam prevention, file uploads, or an admin dashboard.
