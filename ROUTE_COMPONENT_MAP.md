# Route and component map

| Route | Page component | Primary content |
|---|---|---|
| `#/` | `HomePage` | Identity, portrait, About/Work/Experience gateways, contact CTA |
| `#/about` | `AboutPage` | Profile, principles, education, achievements, skills, credentials, interests |
| `#/work` | `WorkPage` | Featured and archive projects |
| `#/work/:slug` | `ProjectPage` | Seven project case studies |
| `#/experience` | `ExperiencePage` | Kpler, Source Academy, Shopee, BrainHack, recognition |
| `#/resume` | `ResumePage` | Embedded and downloadable supplied resume |
| `#/contact` | `ContactPage` | Contact links and mailto composer |

## Shared system

- `SiteHeader`: desktop route navigation and mobile menu entry.
- `NotebookRail`: signature desktop paper tabs for the three core sections.
- `MenuOverlay`: keyboard-accessible mobile/full navigation.
- `Reveal`: one-shot intersection observer reveal.
- `TiltSurface`: requestAnimationFrame-free local pointer transform using CSS variables; disabled for touch/reduced motion.
- `ScrollProgress`: requestAnimationFrame-throttled route progress.
- `ProjectCard` / `ProjectArtwork`: reusable case-study summaries and responsive code-native visuals.
- `src/data/portfolio.js`: centralized content source.
- `src/styles/field-notes.css`: accepted visual system and responsive overrides.
