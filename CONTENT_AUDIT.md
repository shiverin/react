# Portfolio Content Audit

## Authority order

1. **Latest resume — July 14, 2026.** Used as the source of truth for current employment, dates, education, GPA, achievements, headline skills, selected projects, hackathon results, contact details, and interests.
2. **Public project repositories.** Used to verify and enrich technical implementation details for individual projects.
3. **Existing portfolio copy.** Used only for project discovery and historical context when it did not conflict with newer information.

## Current profile represented in the site

- Zhao Shizhen, based in Singapore.
- National University of Singapore, Bachelor's Degree in Computer Science with a Double Major in Quantitative Finance, 2025–2029, GPA 4.85/5.0.
- Forward Deployed Engineer Intern, Commodities at Kpler, May 2026–present.
- DevOps ML Engineer at Source Academy, January–May 2026.
- Product Manager Intern at Shopee, September–December 2025.
- Featured work: O(Alpha), Messenger, and Traffic Sign CNN.
- Achievements: Dean's List AY25/26 Semester 2, University Project Showcase 2026 Top 2, and DSTA BrainHack 2025 Finalist / Top 4.

## LinkedIn handling

The supplied LinkedIn URL is preserved throughout the portfolio. LinkedIn did not expose the profile contents to automated access during the audit, so no LinkedIn-only fact was copied or inferred. This avoids silently adding stale or unverified information. The latest resume remains the current authority until the LinkedIn profile can be reviewed manually while signed in.

## Data maintenance

All display content is centralized in `src/data/portfolioData.js`. Update that file first whenever a role, date, project, metric, or link changes. The HTML resume page is generated from the same data. Replace `public/zhaoshizhen_resume.pdf` after future resume edits.

## Privacy note

The public portfolio includes only contact information intentionally present on the current resume: email, phone, GitHub, LinkedIn, and Singapore location. No unrelated personal documents or identifiers were used.
