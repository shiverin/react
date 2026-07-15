# Validation report

Validated on 15 July 2026 against the approved field-notes concept in
`docs/design-reference/field-notes-approved.png`.

## Automated checks

- `npm run check` passes: required source and design-document files exist, all
  eight project slugs are unique, the six notebook sections are present, and
  the supplied resume PDF is available.
- `npm run build` passes with Create React App production optimisations.
- Production bundle at validation time: 60 kB JavaScript and 23.12 kB CSS after
  gzip.

## Browser interaction pass

Tested in the Codex in-app Chromium browser against `http://127.0.0.1:3002`.

- The site is one continuous document with Home, About, Work, Experience,
  Resume, and Contact sections.
- The desktop header and ZS logo are absent.
- The fixed notebook rail occupies exactly `100vh`; all six 94 px-wide tabs fit
  inside the viewport and remain at the top after long section jumps.
- Twelve binding rings are evenly distributed from the top to the bottom of the
  viewport.
- Tab clicks use native smooth scrolling, update the URL hash and active tab,
  and land the requested section at the top of the viewport.
- Secondary sections contain no oversized editorial slogan headings.
- The Work section defaults to Full-stack, filters correctly across AI &
  agents, Quant systems, Game dev, and All projects, and preserves the requested
  seven-project ranking. Kpler API Expert appears only under AI & agents and All
  projects as a non-clickable confidential card.
- The hero cycles through the original portrait and four supplied photos, loops
  cleanly, and exposes no visible instructional captions.
- The Resume section contains no embedded browser PDF viewer. Its crisp,
  rendered single-page preview downloads the original PDF when activated.
- Registration targets, dashed hero guide, vertical availability copy, page
  flip overlay, duplicate gateway content, repeated summaries, and repeated
  recognition content are absent.
- Mobile at 390 × 844 has no horizontal overflow, keeps project filters in an
  internal horizontal scroller, and retains the continuous document flow.
- Browser diagnostics contain no application warnings or errors.

## Motion and accessibility

- Hero and reveal motion uses transform and opacity; section navigation uses
  native smooth scrolling.
- `prefers-reduced-motion` disables non-essential motion and smooth scrolling.
- Focus-visible styling, semantic landmarks, descriptive links, active section
  state, and a skip link remain available.

## Visual captures

Runtime captures are stored outside the repository in the Codex visualisation
workspace so stale generated previews are not committed as product source.
