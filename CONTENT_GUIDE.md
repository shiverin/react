# Content guide

## Source of truth order

1. First-party repository history and current public project repositories for
   active roles, project status, and implementation details.
2. The public LinkedIn profile for corroboration and current certifications.
3. `public/zhaoshizhen_resume.pdf` for verified experience metrics, education,
   contact details, and older roles.
4. `src/data/portfolio.js` for the approved web presentation. Reconcile any
   conflict in `CONTENT_AUDIT.md` before changing a claim.

## Safe update workflow

1. Replace the resume PDF.
2. Update the matching entries in `src/data/portfolio.js`.
3. Run `npm run check` to catch placeholders, missing assets or duplicate project routes.
4. Review the home, experience, resume and project detail pages before deploying.

## Avoiding inconsistencies

Use one date style throughout: `Mon YYYY — Mon YYYY` or `Mon YYYY — Present`.

Keep role names aligned with the newest verified source. Project descriptions
may be expanded for readability, but metrics should never be changed without
updating the resume or project evidence as well.
