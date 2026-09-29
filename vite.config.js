import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { SEO_RELEASE_STATE } from './src/data/seoEnvironment.js'

const deploymentBase = '/aquablast/'

if (SEO_RELEASE_STATE === 'production' && (deploymentBase !== '/' || process.env.AQUABLAST_PRODUCTION_APPROVED !== 'yes')) {
  throw new Error('Production SEO is blocked: approval and a production-domain build configuration are required.')
}

function scopeRootRelativeAppPaths() {
  return {
    name: 'scope-root-relative-app-paths',
    enforce: 'pre',
    transform(code, id) {
      if (!id.replaceAll('\\', '/').includes('/src/')) return null

      // The concept is hosted below the portfolio, not at a domain root. Keep
      // authoring routes root-relative in development, then scope only the
      // production bundle so every local link and public asset stays inside
      // /aquablast/ after deployment.
      // A self-closing JSX tag ends in "/>"; that slash is not a URL path.
      const scoped = code.replace(/(['"])\/(?!\/|>|aquablast(?:\/|$))/g, `$1${deploymentBase}`)
      return scoped === code ? null : { code: scoped, map: null }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => ({
  base: command === 'build' || mode === 'production' ? deploymentBase : '/',
  plugins: [react(), ...(command === 'build' ? [scopeRootRelativeAppPaths()] : [])],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        caseStudy: resolve(import.meta.dirname, 'case-study.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
      },
    },
  },
}))
