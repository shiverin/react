# Validation report

Validated on 15 July 2026 against the approved field-notes concept in
`docs/design-reference/field-notes-approved.png`.

## Automated checks

- `npm run check` passes: required source and design-document files exist, all
  seven project slugs are unique, and the supplied resume PDF is present.
- `npm run build` passes with Create React App production optimisations.
- Production bundle at validation time: 62.67 kB JavaScript and 19 kB CSS
  after gzip (sizes may move slightly with later dependency rebuilds).

## Browser interaction pass

Tested in the Codex in-app Chromium browser against `http://127.0.0.1:3002`.

- Desktop home renders the notebook binding, cut-paper portrait, large serif
  identity, full navigation, registration marks, and section gateway rail.
- Work navigation opens `#/work`; the O(Alpha) card opens
  `#/work/o-alpha` with its complete case study.
- Resume navigation opens `#/resume`; the supplied PDF is embedded and linked
  from all download actions at `/zhaoshizhen_resume.pdf`.
- Mobile at 390 × 844 has no horizontal overflow, preserves readable hero
  contrast, and reflows the portrait and gateway content into one column.
- The mobile menu opens as a modal navigation surface and locks background
  scrolling.
- Browser diagnostics contain no application warnings or errors. The only
  console message is React's standard development-mode DevTools notice.

## Motion and accessibility

- Route entrances, staggered hero typography, rule drawing, collage arrival,
  navigation states, card reveals, and pointer tilt use transform/opacity-led
  motion with requestAnimationFrame throttling where pointer or scroll input is
  involved.
- `prefers-reduced-motion` disables non-essential motion and smooth scrolling.
- Focus-visible styling, semantic landmarks, descriptive links, and a skip link
  remain available across routes.

## Visual captures

Runtime captures are stored outside the repository in the Codex visualisation
workspace so stale generated previews are not committed as product source.
