# Validation Report

## Completed checks

- Portfolio data integrity check passed for all seven project routes.
- All 30 JavaScript modules were transpile-parsed successfully.
- Local JavaScript import resolution passed across the source tree.
- The complete CSS file parsed successfully.
- Static route rendering passed for:
  - `#/`
  - `#/work`
  - `#/work/o-alpha`
  - `#/experience`
  - `#/about`
  - `#/contact`
  - `#/resume`
  - an unknown route / 404 state
- Desktop and mobile visual smoke tests were rendered and manually reviewed.
- The resume PDF was rendered to an image and checked for one-page A4 layout, clipping, and readability.
- Reduced-motion, keyboard-focus, responsive-navigation, and print styles are present.

## Environment limitation

A full Create React App production build could not be completed in the isolated build environment because the npm registry hostname could not be resolved during dependency installation. This was a network/DNS failure, not a source-code failure. The repository includes a GitHub Actions workflow that installs dependencies, runs the content check, builds the app, and deploys it on GitHub Pages in a normal networked runner.

## Recommended first-run verification

```bash
rm -rf node_modules build
rm -f package-lock.json
npm install
npm run check
npm run build
npm start
```

Then review the home page, every project route, the mobile menu, contact mailto flow, PDF download, and `#/resume` print preview.
