import { useEffect } from 'react'
import { publicCanonicalUrl, publicRobotsDirective, STAGING_ROBOTS_DIRECTIVE } from '../data/seoEnvironment.js'

export const estimateFor = (service, source = `service:${service}`) => {
  const params = new URLSearchParams({ service })
  if (source) params.set('source', source)
  return `/estimate?${params.toString()}`
}

export const estimateForProject = (service, projectPath) => {
  const params = new URLSearchParams()
  if (service) params.set('service', service)
  if (projectPath) params.set('source', `project:${projectPath}`)
  return `/estimate?${params.toString()}`
}

const BUSINESS = {
  '@type': 'LocalBusiness',
  '@id': 'https://www.aquablastpw.com/#business',
  name: 'AquaBlast Pressure Washing',
  url: 'https://www.aquablastpw.com/',
  telephone: '+1-419-635-6961',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '323 Wilson Ave',
    addressLocality: 'Port Clinton',
    addressRegion: 'OH',
    postalCode: '43452',
    addressCountry: 'US',
  },
  areaServed: [
    'Bowling Green, Ohio', 'Catawba Island, Ohio', 'Fremont, Ohio', 'Genoa, Ohio',
    "Johnson's Island, Ohio", 'Kelleys Island, Ohio', 'Lakeside, Ohio', 'Marblehead, Ohio',
    'Oak Harbor, Ohio', 'Port Clinton, Ohio', 'Put-in-Bay, Ohio', 'Sandusky, Ohio',
    'Tiffin, Ohio', 'Toledo, Ohio',
  ],
}


const SERVICE_SCHEMA = {
  '/house-washing': { name: 'House Washing', serviceType: 'House washing and soft washing' },
  '/ppc': { name: 'House Washing', serviceType: 'House washing and soft washing' },
  '/roof-cleaning': { name: 'Roof Cleaning', serviceType: 'Roof cleaning and soft-wash roof treatment' },
  '/concrete-cleaning': { name: 'Concrete Cleaning', serviceType: 'Concrete, driveway, sidewalk, and patio cleaning' },
  '/gutter-cleaning': { name: 'Gutter Cleaning', serviceType: 'Gutter and downspout cleaning' },
  '/window-cleaning': { name: 'Exterior Window Cleaning', serviceType: 'Exterior window cleaning' },
  '/wood-restoration': { name: 'Wood Restoration', serviceType: 'Deck cleaning and exterior wood restoration' },
  '/paver-cleaning-sealing': { name: 'Paver Cleaning and Sealing', serviceType: 'Paver cleaning, joint sanding, and sealing' },
  '/commercial-pressure-washing': { name: 'Commercial Pressure Washing', serviceType: 'Commercial exterior cleaning' },
  '/commercial-pressure-washing/storefront-cleaning': { name: 'Storefront Cleaning', serviceType: 'Commercial storefront cleaning' },
  '/commercial-pressure-washing/building-washing': { name: 'Building Washing', serviceType: 'Commercial building washing' },
  '/commercial-pressure-washing/dumpster-pad-cleaning': { name: 'Dumpster Pad Cleaning', serviceType: 'Commercial dumpster-pad cleaning' },
  '/commercial-pressure-washing/parking-lot-cleaning': { name: 'Parking Lot Cleaning', serviceType: 'Commercial parking-area cleaning' },
  '/commercial-pressure-washing/window-cleaning': { name: 'Commercial Window Cleaning', serviceType: 'Commercial exterior window cleaning' },
  '/commercial-pressure-washing/fleet-washing': { name: 'Fleet Washing', serviceType: 'Mobile commercial fleet washing' },
}

function serviceSchemaForPath(path, canonicalUrl, description) {
  const service = SERVICE_SCHEMA[path]
  if (!service) return null
  return {
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    url: canonicalUrl,
    name: service.name,
    serviceType: service.serviceType,
    description,
    provider: { '@id': BUSINESS['@id'] },
    areaServed: BUSINESS.areaServed,
  }
}

function ensureMeta(selector, attrs) {
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    document.head.appendChild(tag)
  }
  Object.entries(attrs).forEach(([key, value]) => tag.setAttribute(key, value))
  return tag
}

function ensureCanonical() {
  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  return canonical
}

function ensureSchema() {
  let schema = document.head.querySelector('script[data-aquablast-schema]')
  if (!schema) {
    schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.dataset.aquablastSchema = 'true'
    document.head.appendChild(schema)
  }
  return schema
}

function breadcrumbSchema(path, title, canonicalUrl) {
  const segments = path.split('/').filter(Boolean)
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: new URL('/', window.location.origin).href }]
  let running = ''
  segments.forEach((segment, index) => {
    running += `/${segment}`
    const isLast = index === segments.length - 1
    const name = isLast ? title.replace(/\s*\|.*$/, '') : segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
    items.push({ '@type': 'ListItem', position: index + 2, name, item: isLast ? canonicalUrl : new URL(running, window.location.origin).href })
  })
  return { '@type': 'BreadcrumbList', itemListElement: items }
}

function baseSchema({ title, description, canonicalUrl, canonicalPath, schemaType = 'WebPage', schemaProps = {}, extraSchema = [] }) {
  const service = serviceSchemaForPath(canonicalPath, canonicalUrl, description)
  const page = {
    '@type': schemaType,
    '@id': `${canonicalUrl}#page`,
    url: canonicalUrl,
    name: title.replace(/\s*\|.*$/, ''),
    description,
    isPartOf: { '@id': 'https://www.aquablastpw.com/#website' },
    about: { '@id': BUSINESS['@id'] },
    ...(service ? { mainEntity: { '@id': service['@id'] } } : {}),
    ...(schemaType === 'Article' ? {
      mainEntityOfPage: { '@id': `${canonicalUrl}#page` },
      author: { '@id': BUSINESS['@id'] },
      publisher: { '@id': BUSINESS['@id'] },
    } : {}),
    ...schemaProps,
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      BUSINESS,
      {
        '@type': 'WebSite',
        '@id': 'https://www.aquablastpw.com/#website',
        url: 'https://www.aquablastpw.com/',
        name: 'AquaBlast Pressure Washing',
        publisher: { '@id': BUSINESS['@id'] },
      },
      page,
      ...(service ? [service] : []),
      breadcrumbSchema(canonicalPath, title, canonicalUrl),
      ...extraSchema,
    ],
  }
}

/**
 * Production-shaped metadata for the private concept.
 * The concept remains noindex so it cannot compete with AquaBlast's live site.
 * At launch, robots/indexing and canonical targets must be switched only after the URL migration map is approved.
 */
export function useServicePageMetadata({
  title,
  description,
  canonicalPath = typeof window !== 'undefined' ? window.location.pathname : '/',
  image = '/assets/aquablast-social-card.jpg',
  imageAlt = 'AquaBlast Pressure Washing exterior cleaning across Northwest Ohio and Lake Erie',
  schemaType = 'WebPage',
  schemaProps = {},
  extraSchema = [],
}) {
  useEffect(() => {
    const normalizedPath = canonicalPath || '/'
    const canonicalUrl = publicCanonicalUrl(normalizedPath, window.location.origin)
    // The private concept must share assets from the origin it is actually hosted on.
    // Production aquablastpw.com metadata belongs to the approved production renderer/CMS, not this portfolio build.
    const imageUrl = new URL(image, window.location.origin).href

    document.title = title
    ensureMeta('meta[name="description"]', { name: 'description', content: description })
    ensureMeta('meta[name="robots"]', { name: 'robots', content: publicRobotsDirective() })
    ensureMeta('meta[name="googlebot"]', { name: 'googlebot', content: publicRobotsDirective() })

    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: schemaType === 'Article' ? 'article' : 'website' })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    ensureMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
    ensureMeta('meta[property="og:image:secure_url"]', { property: 'og:image:secure_url', content: imageUrl })
    ensureMeta('meta[property="og:image:type"]', { property: 'og:image:type', content: 'image/jpeg' })
    ensureMeta('meta[property="og:image:width"]', { property: 'og:image:width', content: '1200' })
    ensureMeta('meta[property="og:image:height"]', { property: 'og:image:height', content: '630' })
    ensureMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: imageAlt })
    ensureMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'AquaBlast Pressure Washing' })
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_US' })

    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description })
    ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })
    ensureMeta('meta[name="twitter:image:alt"]', { name: 'twitter:image:alt', content: imageAlt })

    ensureCanonical().href = canonicalUrl
    ensureSchema().textContent = JSON.stringify(baseSchema({ title, description, canonicalUrl, canonicalPath: normalizedPath, schemaType, schemaProps, extraSchema }))
  }, [title, description, canonicalPath, image, imageAlt, schemaType, schemaProps, extraSchema])
}

export function useNoindexPageMetadata({ title, description }) {
  useEffect(() => {
    document.title = title
    ensureMeta('meta[name="description"]', { name: 'description', content: description })
    ensureMeta('meta[name="robots"]', { name: 'robots', content: STAGING_ROBOTS_DIRECTIVE })
    ensureMeta('meta[name="googlebot"]', { name: 'googlebot', content: STAGING_ROBOTS_DIRECTIVE })
    document.head.querySelector('link[rel="canonical"]')?.remove()
    document.head.querySelector('script[data-aquablast-schema]')?.remove()
  }, [title, description])
}
