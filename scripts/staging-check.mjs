import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const read = (path) => readFileSync(resolve(root, path), 'utf8')

for (const page of ['index.html', 'case-study.html', 'projects.html']) {
  const html = read(page)
  assert.match(html, /<meta name="robots" content="noindex, nofollow, noarchive"/)
  assert.match(html, /<meta name="googlebot" content="noindex, nofollow, noarchive"/)
}

assert.match(read('public/robots.txt'), /^Disallow: \/$/m)
assert.match(read('src/data/seoEnvironment.js'), /SEO_RELEASE_STATE = 'staging'/)

const app = read('src/App.jsx')
assert.doesNotMatch(app, /ProductionProposal|PresenterPrep|['"]\/proposal['"]|['"]\/presenter['"]/) 
assert.equal(existsSync(resolve(root, 'src/components/ProductionProposal.jsx')), false)
assert.equal(existsSync(resolve(root, 'src/components/PresenterPrep.jsx')), false)
assert.equal(existsSync(resolve(root, 'proposal.html')), false)
assert.equal(existsSync(resolve(root, 'presenter.html')), false)

console.log('Staging SEO and public-route boundary: PASS')
