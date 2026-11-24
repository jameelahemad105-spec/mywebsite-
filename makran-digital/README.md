# Makran Digital — Student Opportunity Hub

**Connecting students. Creating futures.**

Makran Digital is a student-first information hub for Turbat, Gwadar, Panjgur and the wider Makran region. It brings together curated starting points for scholarships, study abroad, USAT and other admission tests, university admissions, jobs, internships and skills development.

## What the current version does

- Responsive student-focused homepage and mobile navigation.
- Searchable directory of curated resources with keyword aliases (for example, USAT can be found by searching "USAT", "USA test" or "USAT-E").
- Category filters for tests and admissions, scholarships, study abroad, jobs and internships, and skills.
- Direct links to official providers wherever possible.
- Student opportunity submission form, designed for pending review before publication.
- Optional Supabase connection for approved community posts.

## Important search limitation

The search searches the resources included in this directory. It is **not** a live search engine for the entire internet, and it does not automatically discover every new scholarship or job. The directory must be maintained with verified links and updated announcements. Students should always confirm current deadlines and eligibility with the official provider.

## Run locally

Open `index.html` in a browser. The curated directory and search work without a database connection.

## Connect Supabase submissions

1. Open your Supabase project.
2. Open SQL Editor and run the complete `supabase-schema.sql` script.
3. In Project Settings → API, copy the Project URL and the public publishable/anon key.
4. In `app.js`, replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_KEY` with those values.
5. Commit the change and wait for GitHub Pages to deploy.
6. Review new submissions in Supabase Table Editor. Change `status` from `pending` to `approved` only after checking the details and source.

The public anon/publishable key is designed for browser use when Row Level Security is configured correctly. **Never put a service_role key, database password, or private API secret in this repository.**

## Publish with GitHub Pages

The repository's GitHub Actions workflow deploys the `makran-digital` folder when it changes. The public site is:

https://jameelahemad105-spec.github.io/mywebsite-/makran-digital/

## Accuracy and student safety

- Makran Digital is an independent information directory, not a scholarship provider, university or testing authority.
- A listed scholarship is not necessarily open now; check the official programme page for current status, level, eligibility and deadline.
- HEC has clarified that universities decide whether to accept USAT scores or conduct their own admission tests. Students must confirm with their target university.
- Verify institutions, recruiters and application links before paying fees or sharing documents.
- Never share passwords, OTPs, bank details or identity documents with unverified agents.
- Submissions are not published automatically. Review them before approval.

## Future work

A live scholarship and admissions update process, admin moderation dashboard, source verification workflow, student accounts, saved opportunities and deadline alerts would make the platform more complete. These features are not yet implemented.
