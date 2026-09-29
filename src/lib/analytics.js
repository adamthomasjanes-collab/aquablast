const EVENT_PREFIX = 'aquablast:'
const CAMPAIGN_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid']

function currentCampaignContext() {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  return Object.fromEntries(CAMPAIGN_KEYS.map((key) => [key, params.get(key) || '']).filter(([, value]) => value))
}

function preserveCampaignParams(url) {
  const campaign = currentCampaignContext()
  for (const [key, value] of Object.entries(campaign)) {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value)
  }
  return url
}

export function emitAnalyticsEvent(name, detail = {}) {
  if (typeof window === 'undefined') return
  const payload = {
    event: name,
    page_path: window.location.pathname,
    page_url: window.location.href,
    ...currentCampaignContext(),
    ...detail,
  }

  window.dispatchEvent(new CustomEvent(`${EVENT_PREFIX}${name}`, { detail: payload }))
  if (Array.isArray(window.dataLayer)) window.dataLayer.push(payload)
}

export function installAnalyticsBridge() {
  if (typeof window === 'undefined') return () => {}

  emitAnalyticsEvent('page_view', {
    page_title: document.title,
    referrer: document.referrer || '',
  })

  const onClick = (event) => {
    const link = event.target.closest?.('a[href]')
    if (!link) return
    const href = link.getAttribute('href') || ''
    const label = (link.textContent || '').trim().replace(/\s+/g, ' ')

    if (href.startsWith('tel:')) {
      emitAnalyticsEvent('click_to_call', { link_url: href, link_text: label })
      return
    }
    if (href.startsWith('/estimate')) {
      const url = preserveCampaignParams(new URL(href, window.location.origin))
      link.setAttribute('href', url.pathname + url.search + url.hash)
      emitAnalyticsEvent('estimate_cta_click', {
        link_url: url.pathname + url.search,
        link_text: label,
        lead_source: url.searchParams.get('source') || '',
        service: url.searchParams.get('service') || '',
        location: url.searchParams.get('location') || '',
      })
      return
    }
    if (href.includes('/downloads/')) {
      emitAnalyticsEvent('resource_download', { link_url: href, link_text: label })
    }
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
