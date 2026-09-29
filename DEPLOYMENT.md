# Deployment

## Current

Local development → this dedicated AquaBlast repository → eventual temporary staging deployment → `https://adamthomasjanes.com/aquablast/`.

The existing staging URL currently builds AquaBlast from the larger Adam Thomas Janes portfolio repository. It has **not** been reconnected to this repository, because the existing preview also contains private presenter/proposal routes intentionally excluded here. The current preview must remain available and non-indexable while that deployment split is resolved. Pushing this repository alone does not yet update the preview.

The Vite build base is `/aquablast/`, and `src/data/seoEnvironment.js` is locked to `staging`. The HTML entries contain `noindex`, and `public/robots.txt` contains `Disallow: /`. Verify all of these after any deployment change.

## Future production

Local development → this same AquaBlast repository → AquaBlast production hosting → AquaBlast production domain.

Only after explicit client launch approval:

1. Confirm source ownership, hosting, form backend, analytics, assets, and migration inventory.
2. Choose the production build base and domain configuration; do not reuse the temporary portfolio path by accident.
3. Apply the reviewed redirect and canonical plan and verify every legacy URL.
4. Run the production SEO launch-switch checklist, then enable indexing and publish the production sitemap.
5. Test the complete site, forms, mobile behavior, accessibility, structured data, and crawl responses before changing DNS or the existing production site.

No production-domain, DNS, or client-hosting switch is performed by repository creation.
