# Zhao Shizhen - Field Notes Portfolio

A complete React portfolio built as a tactile digital field notebook: archival ivory paper, navy book cloth, high-contrast editorial typography, a cut-paper portrait, and professional motion that respects reduced-motion preferences.

## Included

- Home, About, Work, Experience, Resume, Contact, 404, and seven project case-study routes.
- Centralized first-party content in `src/data/portfolio.js`.
- Current supplied resume embedded and downloadable from `public/zhaoshizhen_resume.pdf`.
- Selected public certifications verified from LinkedIn and linked to their issuers.
- Responsive notebook navigation, keyboard-safe menu, visible focus states, and reduced-motion fallbacks.
- Transform/opacity page transitions, scroll reveals, portrait depth, rule drawing, and directional hover motion.
- GitHub Pages deployment using hash routes.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Validate and build

```bash
npm run check
npm run build
```

The optimized site is written to `build/`.

## Content and design references

- `CONTENT_AUDIT.md` - source precedence, conflicts, and content decisions.
- `DESIGN_SPEC.md` - visual thesis, tokens, motion, and responsive behavior.
- `ROUTE_COMPONENT_MAP.md` - route and shared-component ownership.
- `docs/design-reference/field-notes-approved.png` - approved Design 2 reference.
- `VALIDATION.md` - build and rendered QA evidence.

## Updating content

Edit `src/data/portfolio.js` for identity, experience, projects, skills, certifications, achievements, and SEO metadata. Replace the resume at `public/zhaoshizhen_resume.pdf`; replace both portrait formats in `src/assets/` together.

## Contact form

The form opens the visitor's default email app with a prefilled message. No form data is stored and no client-side secret is required.
