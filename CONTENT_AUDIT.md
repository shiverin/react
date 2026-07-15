# Content audit and source precedence

## Sources reviewed

1. **Current portfolio repository** (`src/data/portfolio.js`) - most recent first-party project, role, recognition, and GPA details.
2. **User-supplied resume** (`zhaoshizhen_resume.pdf`, created 16 January 2026) - exact contact details, earlier NUS/Shopee experience bullets, technical skills, projects, and BrainHack metrics.
3. **Public LinkedIn profile** (`linkedin.com/in/zhaoshizhen2004`, reviewed 15 July 2026) - corroborates the current Kpler affiliation, NUS education, public project descriptions, and credential links.

The repository is used ahead of the resume when the resume clearly predates a newer role or achievement. LinkedIn is used for public corroboration and credentials, not for unstable social metrics.

## Decisions and conflicts

| Topic | Sources | Decision |
|---|---|---|
| Current role | Repo: Forward Deployed Engineer Intern at Kpler; LinkedIn top card: Kpler; resume: no Kpler role | Keep Kpler. The January resume predates the May 2026 role. |
| NUS GPA | Repo: 4.85/5.0; LinkedIn public education: 4.8/5.0; resume: 5.0 | Use 4.85/5.0. It is the most precise current first-party value and rounds to LinkedIn's public value. |
| BrainHack result | Repo: Finalist, Top 4; resume: Semi-Finalist | Use Finalist, Top 4 from the newer repo; retain the resume's technical metrics. |
| Project set | Repo: seven detailed case studies; resume: Messenger and Traffic Sign CNN; LinkedIn: older public project archive | Keep the seven repo case studies. Use resume/LinkedIn to corroborate the overlapping projects. |
| Certifications | LinkedIn public profile only | Include selected directly verifiable credentials with issuer links. |
| Follower count | LinkedIn: 7K | Excluded. It is unstable and not relevant to portfolio claims. |
| Phone and email | Resume and repo | Include both. |

## Copy rules

- Do not invent clients, outcomes, employers, awards, dates, or metrics.
- Keep all structured content in `src/data/portfolio.js`.
- Prefer plain descriptions over inflated claims.
- Link credentials and source repositories where a visitor can verify them.
