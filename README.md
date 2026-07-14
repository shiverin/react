# Zhao Shizhen - Living Glass Portfolio

A complete redesign of the original React portfolio into an expressive, responsive glass-morphism system. It keeps the real portfolio content, moves it into one maintainable data file, and adds dedicated pages for work, project case studies, experience, about, contact, and a printable resume.

## What changed

- Replaced the old component-library look with a custom visual system: layered glass, aurora lighting, refractive project art, motion, spatial typography, and responsive bento layouts.
- Centralized personal details, experience, education, skills, achievements, hackathon results, and projects in `src/data/portfolioData.js`.
- Added hash-based routes that work reliably on static hosting and GitHub Pages:
  - `#/`
  - `#/work`
  - `#/work/:slug`
  - `#/experience`
  - `#/about`
  - `#/contact`
  - `#/resume`
- Added project filtering, individual case-study pages, a mail-client contact flow, copy-email control, print/PDF resume styling, reduced-motion support, keyboard focus states, and mobile navigation.
- Removed unused Chakra UI, Formik, EmailJS, Font Awesome, and validation dependencies from the new implementation.

## Replace the existing portfolio repo

The old repository contains a lockfile for a different dependency tree. After copying this redesign over the repository root, reset generated dependencies before the first install:

```bash
rm -rf node_modules build
rm -f package-lock.json
npm install
npm run check
npm start
```

A safe Git workflow is:

```bash
git checkout -b redesign/living-glass
# Copy the contents of this project over the repository root.
rm -rf node_modules build
rm -f package-lock.json
npm install
npm run check
npm run build
git add -A
git commit -m "Redesign portfolio with living glass system"
git push -u origin redesign/living-glass
```

Review the branch locally, then merge it into `main`. The included Pages workflow deploys after the merge.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Production build

```bash
npm run check
npm run build
```

The generated static site will be in `build/`.

## Deploy to GitHub Pages

A workflow is included at `.github/workflows/deploy-pages.yml`.

1. Copy this redesign into the repository root.
2. Commit and push to `main` or `master`.
3. In GitHub, open **Settings -> Pages**.
4. Set **Source** to **GitHub Actions**.
5. The included workflow will install, verify, build, and deploy the portfolio.

Hash routing is intentional, so direct navigation works without a custom server rewrite.

## Updating content later

Almost every fact displayed on the site lives in:

```text
src/data/portfolioData.js
```

Edit the exported objects and arrays there instead of searching through page components. Project entries automatically generate archive cards and project-detail routes.

The downloadable resume is stored at `public/zhaoshizhen_resume.pdf`. The in-site resume page is generated from `portfolioData.js`; after future content edits, use the page's print control to save a refreshed PDF and replace that file.

The portrait is stored at:

```text
src/assets/myself.jpg
```

Replace that file while keeping the same name to update the hero portrait without touching code.

## Project structure

```text
src/
  assets/
  components/
  data/
    portfolioData.js
  hooks/
  pages/
  App.js
  index.js
  index.css
public/
  favicon.svg
  social-card.svg
  social-card.png
  zhaoshizhen_resume.pdf
.github/workflows/
  deploy-pages.yml
scripts/
  check-content.js
```

## Design and accessibility notes

- Custom CSS only; no UI kit is required.
- Framer Motion handles route and reveal animation.
- All major motion is disabled when `prefers-reduced-motion` is enabled.
- The navigation and controls have visible keyboard focus states.
- The resume page has dedicated A4 print styles and can be saved as PDF through the browser print dialog.
- The contact form opens a prefilled email in the visitor's mail client; the site does not store form submissions.

## Source hierarchy used for this refresh

The latest resume was treated as the primary source for current roles, dates, education, achievements, skills, and selected projects. Public repository documentation was used to correct and enrich technical project details. Older portfolio copy was retained only where it did not conflict with newer information.
