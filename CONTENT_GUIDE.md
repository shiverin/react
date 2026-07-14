# Content guide

## Source of truth order

1. `public/zhaoshizhen_resume.pdf` for current roles, dates, education and headline achievements.
2. `src/data/portfolio.js` for the web presentation and longer case-study copy.
3. Public project repositories for technical implementation details.
4. Older portfolio content only for archive projects that remain accurate.

## Safe update workflow

1. Replace the resume PDF.
2. Update the matching entries in `src/data/portfolio.js`.
3. Run `npm run check` to catch placeholders, missing assets or duplicate project routes.
4. Review the home, experience, resume and project detail pages before deploying.

## Avoiding inconsistencies

Use one date style throughout: `Mon YYYY — Mon YYYY` or `Mon YYYY — Present`.

Keep role names identical between the resume and portfolio. Project descriptions may be expanded for readability, but metrics should never be changed without updating the resume or project evidence as well.
