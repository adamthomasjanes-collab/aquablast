# AquaBlast Website

**CURRENT STATUS: STAGING / DEVELOPMENT**

This repository contains the AquaBlast customer-facing website concept, its assets, and a shareable case study. The private presenter and proposal routes are intentionally not part of this public repository.

Current preview: [adamthomasjanes.com/aquablast](https://adamthomasjanes.com/aquablast/). The existing preview deployment is maintained separately while the dedicated repository is established; see [DEPLOYMENT.md](DEPLOYMENT.md).

**Search indexing is intentionally disabled until production launch approval.** The checked-in SEO state is `staging`; the HTML entries include `noindex`, and `public/robots.txt` disallows crawling. Public GitHub visibility does not change that launch decision.

## Develop

Requires a current Node.js and npm installation.

```sh
npm ci
npm run dev
```

## Verify

```sh
npm run qa:staging
npm run build
npm run preview
```

Vite currently builds for the temporary `/aquablast/` path. The production domain, indexing state, canonicals, and redirects require a separate approved launch procedure. Do not deploy this staging build to the client's production site.

The project uses React, Vite, and MapLibre. Source lives directly at the repository root, without an enclosing `aquablast/` directory.
