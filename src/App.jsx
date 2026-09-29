import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import './public-site.css'
import './homepage.css'
import './media-integrity.css'
import './interaction.css'
import { CommonQuestions, CustomerTrust, Footer, Hero, OwnerTrust, QuoteProcess, ServiceChooser, SiteHeader, TrustProof, ValueGuideBand } from './components/sections'
import { ConceptBar } from './components/ServicePage'
import { useServicePageMetadata } from './components/servicePageUtils'
import { canonicalRoutes, isRoute, locationCanonicalRoutes, normalizePath } from './data/migrationRoutes'
import { commercialDetailRoutes, deepContentRoutes } from './data/dynamicRouteManifest'
import { useTangibleInteractions } from './lib/useTangibleInteractions'

const lazyNamed = (loader, name) => lazy(() => loader().then((module) => ({ default: module[name] })))

const AuditCaseStudy = lazyNamed(() => import('./components/AuditCaseStudy'), 'AuditCaseStudy')
const Estimate = lazyNamed(() => import('./components/Estimate'), 'Estimate')
const ExteriorCareChecklist = lazyNamed(() => import('./components/ExteriorCareChecklist'), 'ExteriorCareChecklist')
const ServicesHub = lazyNamed(() => import('./components/ServicesHub'), 'ServicesHub')
const ConcreteCleaning = lazyNamed(() => import('./components/ConcreteCleaning'), 'ConcreteCleaning')
const GutterCleaning = lazyNamed(() => import('./components/GutterCleaning'), 'GutterCleaning')
const WindowCleaning = lazyNamed(() => import('./components/WindowCleaning'), 'WindowCleaning')
const WoodRestoration = lazyNamed(() => import('./components/WoodRestoration'), 'WoodRestoration')
const PaverCleaningSealing = lazyNamed(() => import('./components/PaverCleaningSealing'), 'PaverCleaningSealing')
const HouseWashing = lazyNamed(() => import('./components/HouseWashing'), 'HouseWashing')
const PPCHouseWashing = lazyNamed(() => import('./components/HouseWashing'), 'PPCHouseWashing')
const RoofCleaning = lazyNamed(() => import('./components/RoofCleaning'), 'RoofCleaning')
const CommercialPressureWashing = lazyNamed(() => import('./components/CommercialPressureWashing'), 'CommercialPressureWashing')
const ProjectsArchive = lazyNamed(() => import('./components/ProjectsArchive'), 'ProjectsArchive')
const AboutPage = lazyNamed(() => import('./components/CompanyPages'), 'AboutPage')
const ContactPage = lazyNamed(() => import('./components/CompanyPages'), 'ContactPage')
const ReviewsPage = lazyNamed(() => import('./components/CompanyPages'), 'ReviewsPage')
const ArticlesPage = lazyNamed(() => import('./components/CompanyPages'), 'ArticlesPage')
const FAQPage = lazyNamed(() => import('./components/UtilityPages'), 'FAQPage')
const PrivacyPage = lazyNamed(() => import('./components/UtilityPages'), 'PrivacyPage')
const TermsPage = lazyNamed(() => import('./components/UtilityPages'), 'TermsPage')
const SitemapPage = lazyNamed(() => import('./components/UtilityPages'), 'SitemapPage')
const RSSPage = lazyNamed(() => import('./components/UtilityPages'), 'RSSPage')
const NotFoundPage = lazyNamed(() => import('./components/UtilityPages'), 'NotFoundPage')
const OxidationArticle = lazyNamed(() => import('./components/UtilityPages'), 'OxidationArticle')
const SeasonalCleaningArticle = lazyNamed(() => import('./components/UtilityPages'), 'SeasonalCleaningArticle')
const PricingArticle = lazyNamed(() => import('./components/UtilityPages'), 'PricingArticle')
const PortClinton = lazyNamed(() => import('./components/PortClinton'), 'PortClinton')
const LocationsHub = lazyNamed(() => import('./components/LocationExperiences'), 'LocationsHub')
const BowlingGreen = lazyNamed(() => import('./components/LocationExperiences'), 'BowlingGreen')
const CatawbaIsland = lazyNamed(() => import('./components/LocationExperiences'), 'CatawbaIsland')
const Fremont = lazyNamed(() => import('./components/LocationExperiences'), 'Fremont')
const Genoa = lazyNamed(() => import('./components/LocationExperiences'), 'Genoa')
const JohnsonsIsland = lazyNamed(() => import('./components/LocationExperiences'), 'JohnsonsIsland')
const KelleysIsland = lazyNamed(() => import('./components/LocationExperiences'), 'KelleysIsland')
const Lakeside = lazyNamed(() => import('./components/LocationExperiences'), 'Lakeside')
const Marblehead = lazyNamed(() => import('./components/LocationExperiences'), 'Marblehead')
const OakHarbor = lazyNamed(() => import('./components/LocationExperiences'), 'OakHarbor')
const PutInBay = lazyNamed(() => import('./components/LocationExperiences'), 'PutInBay')
const Sandusky = lazyNamed(() => import('./components/LocationExperiences'), 'Sandusky')
const Tiffin = lazyNamed(() => import('./components/LocationExperiences'), 'Tiffin')
const Toledo = lazyNamed(() => import('./components/LocationExperiences'), 'Toledo')
const DeckRestorationProject = lazyNamed(() => import('./components/DeckRestorationProject'), 'DeckRestorationProject')
const LazyServiceArea = lazyNamed(() => import('./components/ServiceArea'), 'ServiceArea')

const CommercialDetailRoute = lazy(() => import('./components/CommercialServiceDetails').then((module) => ({
  default: ({ path }) => module.getCommercialServicePage(path),
})))

const DeepContentRoute = lazy(() => import('./components/DeepContentPages').then((module) => ({
  default: ({ path }) => module.getDeepContentPage(path),
})))

const projectMedia = {
  '01-branded-aqua-blast-work-truck-homepage-banner.jpg': '/assets/project-media/01-branded-aqua-blast-work-truck-homepage-banner.webp',
  '02-house-washing-service-image.jpg': '/assets/project-media/02-house-washing-service-image.webp',
  '03-driveway-concrete-service-image.jpg': '/assets/project-media/03-driveway-concrete-service-image.webp',
  '04-paver-cleaning-service-image.jpg': '/assets/project-media/04-paver-cleaning-service-image.webp',
  '05-house-washing-action-quote-banner.jpg': '/assets/project-media/05-house-washing-action-quote-banner.webp',
  '06-deck-cleaning-before-after.jpg': '/assets/project-media/06-deck-cleaning-before-after.webp',
  '07-house-washing-before-after.jpg': '/assets/project-media/07-house-washing-before-after.webp',
  '08-deck-restoration-before-after.jpg': '/assets/project-media/08-deck-restoration-before-after.webp',
  '09-roof-cleaning-service-image.jpg': '/assets/project-media/09-roof-cleaning-service-image.webp',
  '10-port-clinton-roof-cleaning-project.jpg': '/assets/project-media/10-port-clinton-roof-cleaning-project.webp',
}

const source = (file) => projectMedia[file] ?? file

const staticRoutes = [
  { paths: ['/case-study', '/case-study.html'], Component: AuditCaseStudy },
  { paths: ['/estimate'], Component: Estimate },
  { paths: ['/exterior-care-checklist'], Component: ExteriorCareChecklist },
  { paths: [canonicalRoutes.services, '/services'], Component: ServicesHub },
  { paths: ['/concrete-cleaning'], Component: ConcreteCleaning },
  { paths: ['/gutter-cleaning'], Component: GutterCleaning },
  { paths: ['/window-cleaning'], Component: WindowCleaning },
  { paths: ['/wood-restoration'], Component: WoodRestoration },
  { paths: ['/paver-cleaning-sealing'], Component: PaverCleaningSealing },
  { paths: ['/house-washing'], Component: HouseWashing },
  { paths: ['/ppc'], Component: PPCHouseWashing },
  { paths: ['/roof-cleaning'], Component: RoofCleaning },
  { paths: ['/commercial-pressure-washing'], Component: CommercialPressureWashing },
  { paths: ['/projects'], Component: ProjectsArchive },
  { paths: [canonicalRoutes.about, '/about'], Component: AboutPage },
  { paths: [canonicalRoutes.contact, '/contact'], Component: ContactPage },
  { paths: ['/reviews'], Component: ReviewsPage },
  { paths: [canonicalRoutes.articles, '/articles'], Component: ArticlesPage },
  { paths: ['/faq'], Component: FAQPage },
  { paths: ['/privacy'], Component: PrivacyPage },
  { paths: ['/terms'], Component: TermsPage },
  { paths: ['/sitemap'], Component: SitemapPage },
  { paths: ['/rss'], Component: RSSPage },
  { paths: ['/pressure-washing-tips/how-soft-washing-can-remove-oxidation-from-your-home'], Component: OxidationArticle },
  { paths: ['/pressure-washing-tips/what-is-the-best-time-of-year-for-exterior-cleaning'], Component: SeasonalCleaningArticle },
  { paths: ['/pressure-washing-tips/how-much-does-pressure-washing-cost'], Component: PricingArticle },
  { paths: [locationCanonicalRoutes['port-clinton'], '/port-clinton'], Component: PortClinton },
  { paths: [canonicalRoutes.locations, '/locations'], Component: LocationsHub },
  { paths: [locationCanonicalRoutes['bowling-green'], '/bowling-green'], Component: BowlingGreen },
  { paths: [locationCanonicalRoutes['catawba-island'], '/catawba-island'], Component: CatawbaIsland },
  { paths: [locationCanonicalRoutes.fremont, '/fremont'], Component: Fremont },
  { paths: [locationCanonicalRoutes.genoa, '/genoa'], Component: Genoa },
  { paths: [locationCanonicalRoutes['johnsons-island'], '/johnsons-island'], Component: JohnsonsIsland },
  { paths: [locationCanonicalRoutes.lakeside, '/lakeside'], Component: Lakeside },
  { paths: [locationCanonicalRoutes.marblehead, '/marblehead'], Component: Marblehead },
  { paths: [locationCanonicalRoutes['oak-harbor'], '/oak-harbor'], Component: OakHarbor },
  { paths: [locationCanonicalRoutes.sandusky, '/sandusky'], Component: Sandusky },
  { paths: [locationCanonicalRoutes['put-in-bay'], '/put-in-bay'], Component: PutInBay },
  { paths: [locationCanonicalRoutes['kelleys-island'], '/kelleys-island'], Component: KelleysIsland },
  { paths: [locationCanonicalRoutes.tiffin, '/tiffin'], Component: Tiffin },
  { paths: [locationCanonicalRoutes.toledo, '/toledo'], Component: Toledo },
  { paths: ['/projects/deck-restoration-port-clinton-ohio', '/projects/deck-restoration-port-clinton'], Component: DeckRestorationProject },
]

function RouteSuspense({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>
}

function App() {
  useTangibleInteractions()
  const path = normalizePath(window.location.pathname)

  if (commercialDetailRoutes.includes(path)) {
    return <RouteSuspense><CommercialDetailRoute path={path} /></RouteSuspense>
  }

  if (deepContentRoutes.includes(path)) {
    return <RouteSuspense><DeepContentRoute path={path} /></RouteSuspense>
  }

  const route = staticRoutes.find(({ paths }) => isRoute(path, ...paths))
  if (route) {
    const { Component } = route
    return <RouteSuspense><Component /></RouteSuspense>
  }

  if (path === '/') return <HomePage />

  return <RouteSuspense><NotFoundPage path={path} /></RouteSuspense>
}

function useHashLanding() {
  useEffect(() => {
    const land = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ block: 'start', behavior: reduced ? 'auto' : 'smooth' })
    }
    const frame = window.requestAnimationFrame(land)
    window.addEventListener('hashchange', land)
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('hashchange', land) }
  }, [])
}

function DeferredServiceArea() {
  const [ready, setReady] = useState(false)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (ready) return undefined
    if (!('IntersectionObserver' in window)) {
      setReady(true)
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setReady(true)
        observer.disconnect()
      }
    }, { rootMargin: '900px 0px' })
    if (triggerRef.current) observer.observe(triggerRef.current)
    return () => observer.disconnect()
  }, [ready])

  return <div ref={triggerRef} className="home-service-area-loader">
    {ready ? <Suspense fallback={null}><LazyServiceArea /></Suspense> : null}
  </div>
}

function HomePage() {
  useHashLanding()
  useServicePageMetadata({
    title: 'Marblehead Pressure Washing | Aqua Blast Pressure Washing',
    description: 'Pressure washing and exterior cleaning for homes and businesses in Marblehead, Port Clinton, Sandusky, and nearby Northwest Ohio and Lake Erie communities. View services, project photos, and request an estimate.',
    canonicalPath: '/',
    image: '/assets/aquablast-social-card.jpg',
    imageAlt: 'AquaBlast Pressure Washing exterior cleaning across Northwest Ohio and Lake Erie',
  })
  return <div className="site" id="top"><a className="skip" href="#main">Skip to content</a><ConceptBar /><SiteHeader /><main id="main"><Hero /><TrustProof source={source} /><ServiceChooser source={source} /><OwnerTrust /><CustomerTrust /><CommonQuestions /><ValueGuideBand /><QuoteProcess /><DeferredServiceArea /><section className="final home-story-success"><p className="kicker">What success looks like</p><h2>A cleaner exterior.<br /><em>A property that feels cared for again.</em></h2><p>When you are ready, show AquaBlast the areas that need attention and we’ll help you take the next step.</p><a className="cta" href="/estimate?source=home%3Afinal">Get an estimate <span aria-hidden="true">→</span></a></section></main><Footer /><nav className="mobile-dock" aria-label="Mobile quick actions"><a className="dock-estimate" href="/estimate?source=home%3Amobile-dock">Get an estimate</a><a className="dock-call" href="tel:4196356961">Call AquaBlast</a></nav></div>
}

export default App
