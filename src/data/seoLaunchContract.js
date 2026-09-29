import { canonicalRoutes, locationCanonicalRoutes } from './migrationRoutes.js'

export const PRODUCTION_ORIGIN = 'https://www.aquablastpw.com'
export const PRODUCTION_SITEMAP_PATH = '/sitemap.xml'
export const PRODUCTION_FEED_PATH = '/rss/all.xml'

export const productionAliasRedirects = {
  '/about': canonicalRoutes.about,
  '/contact': canonicalRoutes.contact,
  '/services': canonicalRoutes.services,
  '/locations': canonicalRoutes.locations,
  '/articles': canonicalRoutes.articles,
  '/bowling-green': locationCanonicalRoutes['bowling-green'],
  '/catawba-island': locationCanonicalRoutes['catawba-island'],
  '/fremont': locationCanonicalRoutes.fremont,
  '/genoa': locationCanonicalRoutes.genoa,
  '/johnsons-island': locationCanonicalRoutes['johnsons-island'],
  '/kelleys-island': locationCanonicalRoutes['kelleys-island'],
  '/lakeside': locationCanonicalRoutes.lakeside,
  '/marblehead': locationCanonicalRoutes.marblehead,
  '/oak-harbor': locationCanonicalRoutes['oak-harbor'],
  '/port-clinton': locationCanonicalRoutes['port-clinton'],
  '/put-in-bay': locationCanonicalRoutes['put-in-bay'],
  '/sandusky': locationCanonicalRoutes.sandusky,
  '/tiffin': locationCanonicalRoutes.tiffin,
  '/toledo': locationCanonicalRoutes.toledo,
  '/projects/deck-restoration-port-clinton': '/projects/deck-restoration-port-clinton-ohio',
}

// New canonical public content created by the redesign. These are not legacy redirects.
export const productionNewIndexableRoutes = [
  '/paver-cleaning-sealing',
  '/exterior-care-checklist',
]

// Conversion/private routes should not enter the production XML sitemap.
export const productionNoindexRoutes = ['/estimate']
export const productionPrivateOnlyRoutes = ['/case-study', '/case-study.html']
