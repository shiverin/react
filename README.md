# Zhao Shizhen — Editorial Glass Portfolio

A complete React portfolio redesign built around the soft, pastel **glass-morph editorial** direction selected from the concept sheet: lavender and peach volumetric colour, floating frosted cards, a tilted portrait tile, restrained typography and a menu-first navigation model.

The repository is designed as a direct replacement for the existing `shiverin/react` portfolio while keeping the content in one maintainable data file.

## What is included

- A single-screen home composition matching the selected design language.
- Responsive layouts for desktop, tablet and mobile.
- Full-page glass navigation overlay.
- About, Work, Experience, Resume, Contact and 404 pages.
- Seven individual project case studies.
- CSS-only animated mesh background, pointer light and glass reflections.
- Mouse-reactive tilt surfaces with a reduced-motion fallback.
- Custom project artwork drawn entirely in HTML/CSS/SVG, with no stock UI screenshots.
- Downloadable and embeddable resume PDF.
- Accessible focus states, skip link, semantic page structure and keyboard-closeable navigation.
- GitHub Pages workflow using hash-based routes, so deep navigation works on static hosting.

## Preview without installing

Open `preview/home.html` or `preview/work.html` directly in a browser. Rendered desktop and mobile reference images are also included under `preview/screenshots/`.

## Run locally

```bash
npm install
npm start
```

The development site opens at `http://localhost:3000`.

## Production build

```bash
npm run check
npm run build
```

The compiled site is written to `build/`.

## Replace the current GitHub repository

Copy everything in this repository over the existing `shiverin/react` working tree, then run:

```bash
rm -rf node_modules build
npm install
npm run check
npm run build

git add -A
git commit -m "Redesign portfolio with editorial glass system"
git push origin main
```

The workflow in `.github/workflows/deploy-pages.yml` deploys the `build/` output through GitHub Pages. In the repository settings, set **Pages → Source** to **GitHub Actions**.

## Updating content

Nearly all portfolio copy and links live in:

```text
src/data/portfolio.js
```

Update this file to change:

- personal details and social links
- home navigation card copy
- education and achievements
- work experience
- project case studies
- technical skills and interests
- SEO page titles and descriptions

Replace the PDF at:

```text
public/zhaoshizhen_resume.pdf
```

Replace the portrait at:

```text
src/assets/portrait.webp
src/assets/portrait.jpg
```

Keep both formats so browsers can use WebP with a JPEG fallback.

## Routes

The app uses URL hashes for reliable GitHub Pages hosting:

```text
#/                    Home
#/about               About
#/work                Selected work
#/work/o-alpha        O(Alpha) case study
#/work/messenger      Messenger case study
#/work/traffic-sign-cnn
#/work/gotalk
#/work/offline-leetcode
#/work/pdfiledit
#/work/finance-simulator
#/experience          Experience
#/resume              Resume
#/contact             Contact
```

## Design system

The visual system is deliberately different from the common dark-neon developer portfolio aesthetic:

- **Canvas:** soft lavender-to-peach atmospheric gradient
- **Glass:** semi-opaque white layers with low-contrast borders and blur
- **Typography:** light editorial sans-serif hierarchy
- **Motion:** slow background drift, short page entry, subtle 3D tilt and reflective highlights
- **Composition:** asymmetrical cards with vertical offsets and generous empty space

Global tokens are in `src/styles/tokens.css`. Home-specific composition is in `src/styles/home.css`; all breakpoints are in `src/styles/responsive.css`.

## Contact form behaviour

The contact form intentionally opens the visitor's default email application with a pre-filled subject and body. No credentials, third-party form service or client-side secret is required, and the website stores no submitted data.

## Content provenance

The latest supplied resume is treated as the source of truth for current education, experience, dates, headline metrics and primary projects. Older public projects from the existing portfolio/GitHub profile are retained as archive work. LinkedIn remains linked from every relevant contact surface, but no inaccessible LinkedIn-only claim is hard-coded into the site.
