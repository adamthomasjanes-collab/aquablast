import { PRODUCTION_ORIGIN } from './seoLaunchContract.js'

// This is deliberately a checked-in, reviewable launch switch, not a build
// environment variable that a hosting dashboard can accidentally toggle.
// Changing it does not by itself authorize a production deployment.
export const SEO_RELEASE_STATE = 'staging'
export const STAGING_ROBOTS_DIRECTIVE = 'noindex, nofollow, noarchive'
export const PRODUCTION_PUBLIC_ROBOTS_DIRECTIVE = 'index, follow'

export function publicRobotsDirective() {
  return SEO_RELEASE_STATE === 'production'
    ? PRODUCTION_PUBLIC_ROBOTS_DIRECTIVE
    : STAGING_ROBOTS_DIRECTIVE
}

export function publicCanonicalUrl(path, stagingOrigin) {
  const origin = SEO_RELEASE_STATE === 'production' ? PRODUCTION_ORIGIN : stagingOrigin
  return new URL(path, origin).href
}
