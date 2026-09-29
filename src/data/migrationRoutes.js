export const canonicalRoutes = {
  about: '/about-us',
  contact: '/contact-us',
  services: '/pressure-washing-company',
  locations: '/near-me',
  articles: '/pressure-washing-tips',
}

export const locationCanonicalRoutes = {
  'bowling-green': '/near-me/pressure-washing-bowling-green',
  'catawba-island': '/near-me/pressure-washing-catawba-island',
  fremont: '/near-me/pressure-washing-fremont',
  genoa: '/near-me/pressure-washing-genoa',
  'johnsons-island': '/near-me/johnsons-island-oh',
  'kelleys-island': '/near-me/pressure-washing-kelleys-island',
  lakeside: '/near-me/pressure-washing-lakeside',
  marblehead: '/near-me/marblehead-pressure-washing',
  'oak-harbor': '/near-me/pressure-washing-oak-harbor',
  'port-clinton': '/near-me/pressure-washing-port-clinton',
  'put-in-bay': '/near-me/put-in-bay-pressure-washing',
  sandusky: '/near-me/sandusky-pressure-washing',
  tiffin: '/near-me/pressure-washing-tiffin',
  toledo: '/near-me/pressure-washing-toledo',
}

export function normalizePath(pathname = '/') {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

export function isRoute(pathname, ...routes) {
  const path = normalizePath(pathname)
  return routes.includes(path)
}

export function locationCanonicalPath(slug) {
  return locationCanonicalRoutes[slug] || `/${slug}`
}
