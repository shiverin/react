# Section and component map

| Hash | Section component | Primary content |
|---|---|---|
| `#home` | `HomePage` | Identity and portrait |
| `#about` | `AboutPage` | Profile, principles, education, achievements, skills, credentials, interests |
| `#work` | `WorkPage` | Featured and archive projects with repository links |
| `#experience` | `ExperiencePage` | Kpler, Source Academy, Shopee, and BrainHack |
| `#resume` | `ResumePage` | Embedded and downloadable supplied resume |
| `#contact` | `ContactPage` | Contact links and mailto composer |

## Shared system

- `App`: renders the six sections as one continuous document and synchronises
  scrolling, hash state, and the active tab.
- `NotebookRail`: fixed 100vh desktop rail with six responsive-height tabs and
  full-height binding rings.
- `Reveal`: one-shot intersection observer reveal.
- `TiltSurface`: subtle local pointer transform; disabled for touch and reduced
  motion.
- `ScrollProgress`: requestAnimationFrame-throttled document progress.
- `ProjectCard` / `ProjectArtwork`: repository-linked summaries and responsive
  code-native visuals.
- `src/data/portfolio.js`: centralised content source.
- `src/styles/field-notes.css`: accepted visual system and responsive overrides.
