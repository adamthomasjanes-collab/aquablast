import { useEffect, useRef, useState } from 'react'
import { LeadMagnetBand } from './LeadMagnetCapture'
import { AQUABLAST_BRAND_MESSAGE } from '../data/brandMessage'

const services = [
  ['House washing', 'Exterior siding · Trim · Gutters', '02-house-washing-service-image.jpg', '/house-washing'],
  ['Concrete + hard surfaces', 'Driveways · Sidewalks · Patios', '03-driveway-concrete-service-image.jpg', '/concrete-cleaning'],
  ['Roofs + gutters', 'Roof cleaning · Gutter care', '/assets/concept-service-roofs-gutters-v1.webp', '/roof-cleaning'],
  ['Decks + exterior wood', 'Wood cleaning · Restoration', '06-deck-cleaning-before-after.jpg', '/wood-restoration'],
  ['Windows', 'Exterior window cleaning', '05-house-washing-action-quote-banner.jpg', '/window-cleaning'],
  ['Commercial cleaning', 'Buildings · Facilities · Fleets', '/assets/concept-service-commercial-v1.webp', '/commercial-pressure-washing'],
]

export function Mark() { return <a className="mark" href="/" aria-label="AquaBlast home"><img src="/assets/aquablast-authority-lockup.webp" alt="" width="2172" height="724" decoding="async" /></a> }

// Keep overview links first, then alphabetize peer destinations for faster scanning.
const residentialNav = [
  ['Residential services', '/pressure-washing-company'],
  ['House Washing', '/house-washing'],
  ['Concrete Cleaning', '/concrete-cleaning'],
  ['Driveway Washing', '/concrete-cleaning#driveways'],
  ['Sidewalk Cleaning', '/concrete-cleaning#sidewalks'],
  ['Patio Washing', '/concrete-cleaning#patios'],
  ['Paver Cleaning & Sealing', '/paver-cleaning-sealing'],
  ['Roof Cleaning', '/roof-cleaning'],
  ['Gutter Cleaning', '/gutter-cleaning'],
  ['Exterior Window Cleaning', '/window-cleaning'],
  ['Wood Restoration', '/wood-restoration'],
]

const commercialNav = [
  ['Commercial overview', '/commercial-pressure-washing'],
  ['Building Washing', '/commercial-pressure-washing/building-washing'],
  ['Commercial Window Cleaning', '/commercial-pressure-washing/window-cleaning'],
  ['Dumpster Pad Cleaning', '/commercial-pressure-washing/dumpster-pad-cleaning'],
  ['Fleet Washing', '/commercial-pressure-washing/fleet-washing'],
  ['Parking Lot Cleaning', '/commercial-pressure-washing/parking-lot-cleaning'],
  ['Storefront Cleaning', '/commercial-pressure-washing/storefront-cleaning'],
]

const areaNav = [
  ['All service areas', '/near-me'],
  ['Bowling Green', '/near-me/pressure-washing-bowling-green'],
  ['Catawba Island', '/near-me/pressure-washing-catawba-island'],
  ['Fremont', '/near-me/pressure-washing-fremont'],
  ['Genoa', '/near-me/pressure-washing-genoa'],
  ["Johnson's Island", '/near-me/johnsons-island-oh'],
  ['Kelleys Island', '/near-me/pressure-washing-kelleys-island'],
  ['Lakeside', '/near-me/pressure-washing-lakeside'],
  ['Marblehead', '/near-me/marblehead-pressure-washing'],
  ['Oak Harbor', '/near-me/pressure-washing-oak-harbor'],
  ['Port Clinton', '/near-me/pressure-washing-port-clinton'],
  ['Put-In-Bay', '/near-me/put-in-bay-pressure-washing'],
  ['Sandusky', '/near-me/sandusky-pressure-washing'],
  ['Tiffin', '/near-me/pressure-washing-tiffin'],
  ['Toledo', '/near-me/pressure-washing-toledo'],
]

function NavLinkList({ items, close, currentPath }) {
  return items.map(([label, href]) => <a key={href} href={href} onClick={close} aria-current={currentPath === href ? 'page' : undefined}>{label}</a>)
}

export function SiteHeader({ estimateHref = '/estimate?source=site-header', areasHref = '#areas' }) {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const areaOverviewHref = areasHref === '/near-me' ? areasHref : '/near-me'
  const areaItems = areaNav.map(([label, href], index) => index === 0 ? [label, areaOverviewHref] : [label, href])
  const close = () => { setOpen(false); setOpenGroup(null) }
  const toggleGroup = (group) => setOpenGroup((current) => current === group ? null : group)
  const path = typeof window === 'undefined' ? '/' : (window.location.pathname.replace(/\/+$/, '') || '/')
  const isActive = (section) => {
    if (section === 'residential') return ['/pressure-washing-company', '/house-washing', '/concrete-cleaning', '/gutter-cleaning', '/window-cleaning', '/wood-restoration', '/paver-cleaning-sealing', '/roof-cleaning', '/ppc'].some((route) => path === route || path.startsWith(`${route}/`))
    if (section === 'commercial') return path === '/commercial-pressure-washing' || path.startsWith('/commercial-pressure-washing/')
    if (section === 'projects') return path === '/projects' || path.startsWith('/projects/')
    if (section === 'reviews') return path === '/reviews'
    if (section === 'tips') return path === '/pressure-washing-tips' || path.startsWith('/pressure-washing-tips/')
    if (section === 'about') return ['/about-us', '/about', '/contact-us', '/contact', '/faq'].includes(path)
    if (section === 'areas') return path === '/near-me' || path === '/locations' || path.startsWith('/near-me/') || path.startsWith('/pressure-washing/areas/') || ['/port-clinton', '/bowling-green', '/catawba-island', '/fremont', '/genoa', '/johnsons-island', '/kelleys-island', '/lakeside', '/marblehead', '/oak-harbor', '/sandusky', '/put-in-bay', '/tiffin', '/toledo'].includes(path)
    return false
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open && !openGroup) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') close() }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) close()
    }
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open, openGroup])

  return <header ref={headerRef} className={`header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-is-open' : ''}`}>
    <Mark />
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => { setOpen((current) => !current); setOpenGroup(null) }}><span aria-hidden="true">{open ? '×' : '☰'}</span><span>{open ? 'Close' : 'Menu'}</span></button>
    <nav id="mobile-menu" className={open ? 'open' : ''} aria-label="Primary">
      <div className={`nav-group nav-group-residential${openGroup === 'residential' ? ' is-open' : ''}${isActive('residential') ? ' is-active' : ''}`}>
        <button className="nav-group-trigger" type="button" aria-expanded={openGroup === 'residential'} aria-controls="residential-subnav" onClick={() => toggleGroup('residential')}>Residential <span aria-hidden="true">⌄</span></button>
        <div id="residential-subnav" className="nav-submenu nav-submenu-residential"><NavLinkList items={residentialNav} close={close} currentPath={path} /></div>
      </div>
      <div className={`nav-group nav-group-commercial${openGroup === 'commercial' ? ' is-open' : ''}${isActive('commercial') ? ' is-active' : ''}`}>
        <button className="nav-group-trigger" type="button" aria-expanded={openGroup === 'commercial'} aria-controls="commercial-subnav" onClick={() => toggleGroup('commercial')}>Commercial <span aria-hidden="true">⌄</span></button>
        <div id="commercial-subnav" className="nav-submenu nav-submenu-commercial"><NavLinkList items={commercialNav} close={close} currentPath={path} /></div>
      </div>
      <div className={`nav-group nav-group-areas${openGroup === 'areas' ? ' is-open' : ''}${isActive('areas') ? ' is-active' : ''}`}>
        <button className="nav-group-trigger" type="button" aria-expanded={openGroup === 'areas'} aria-controls="areas-subnav" onClick={() => toggleGroup('areas')}>Areas <span aria-hidden="true">⌄</span></button>
        <div id="areas-subnav" className="nav-submenu nav-submenu-areas"><NavLinkList items={areaItems} close={close} currentPath={path} /></div>
      </div>
      <a onClick={close} href="/projects" aria-current={isActive('projects') ? 'page' : undefined}>Projects</a>
      <a onClick={close} href="/reviews" aria-current={isActive('reviews') ? 'page' : undefined}>Reviews</a>
      <a onClick={close} href="/pressure-washing-tips" aria-current={isActive('tips') ? 'page' : undefined}>Tips</a>
      <div className={`nav-group nav-group-about${openGroup === 'about' ? ' is-open' : ''}${isActive('about') ? ' is-active' : ''}`}>
        <button className="nav-group-trigger" type="button" aria-expanded={openGroup === 'about'} aria-controls="about-subnav" onClick={() => toggleGroup('about')}>About <span aria-hidden="true">⌄</span></button>
        <div id="about-subnav" className="nav-submenu nav-submenu-about"><a onClick={close} href="/about-us">About AquaBlast</a><a onClick={close} href="/faq">FAQ</a><a onClick={close} href="/contact-us">Contact</a></div>
      </div>
      <a className="nav-transitional" onClick={close} href="/exterior-care-checklist"><span>Not ready to book?</span><b>Free homeowner checklist</b></a><a className="menu-call" href="tel:4196356961">Call 419-635-6961</a>
    </nav>
    <a className="phone" href="tel:4196356961">419-635-6961</a>
    <a className="cta compact" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a>
  </header>
}

function FooterLinkList({ items }) {
  return items.map(([label, href]) => <a key={href} href={href}>{label}</a>)
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-brand">
      <Mark />
      <p>Exterior cleaning for homes and businesses across Northwest&nbsp;Ohio and Lake&nbsp;Erie communities.</p><p className="site-footer-tagline">{AQUABLAST_BRAND_MESSAGE.tagline.replace('. ', '.\n')}</p>
      <div className="footer-conversion">
        <p><b>Ready to talk about the property?</b><span>Send the address, the areas that concern you, and photos when helpful.</span></p>
        <a className="cta footer-estimate" href="/estimate?source=footer">Get an estimate <span aria-hidden="true">→</span></a>
        <a className="footer-transitional" href="/exterior-care-checklist"><span>Not ready for an estimate?</span><b>Get the free homeowner checklist →</b></a>
      </div>
      <address><b>Aqua Blast Pressure Washing</b><span>323 Wilson Ave<br />Port&nbsp;Clinton, OH 43452</span><a href="tel:4196356961">419-635-6961</a></address>
    </div>
    <nav className="site-footer-grid" aria-label="Footer navigation">
      <div><span>Residential</span><FooterLinkList items={residentialNav} /></div>
      <div><span>Commercial</span><FooterLinkList items={commercialNav} /></div>
      <div className="site-footer-area-group"><span>Areas</span><FooterLinkList items={areaNav} /></div>
      <div><span>Proof + guidance</span><a href="/projects">Completed work</a><a href="/reviews">Customer reviews</a><a href="/pressure-washing-tips">Tips &amp; articles</a><a href="/exterior-care-checklist">Free homeowner checklist</a></div>
      <div><span>Company</span><a href="/about-us">About AquaBlast</a><a href="/faq">FAQ</a><a href="/contact-us">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/sitemap">Sitemap</a><a href="/rss">RSS</a><a href="#top">Back to top ↑</a></div>
    </nav>
  </footer>
}

export function Hero() { return <section className="hero home-story-hero"><img src="/assets/concept-hero-lake-erie-residential-v1.webp" alt="Exterior cleaning at a residential property" width="1672" height="941" loading="eager" decoding="async" fetchPriority="high" /><div className="hero-scrim" /><div className="hero-content"><p className="kicker"><span>Exterior cleaning for Northwest Ohio</span><span>Homes + businesses</span></p><h1>Your property should look cared for.</h1><p className="home-hero-invitation">Start with what needs attention.</p><p>Streaks, buildup, weathering, and grime can make the exterior feel overdue. You should not have to know the exact service or cleaning method before asking for help.</p><p className="hero-brand-line">{AQUABLAST_BRAND_MESSAGE.tagline}</p><div className="hero-actions"><a className="cta hero-explore" href="/estimate?source=home%3Ahero">Get an estimate <span aria-hidden="true">→</span></a><a className="secondary" href="#services">See what we clean <span aria-hidden="true">↓</span></a></div><a className="hero-next" href="#home-proof">Next: see real work <span aria-hidden="true">↓</span></a></div><dl className="hero-proof" aria-label="AquaBlast service highlights"><div><dt>Real projects</dt><dd>Compare completed AquaBlast work</dd></div><div><dt>Local service</dt><dd>Northwest Ohio + Lake Erie communities</dd></div><div><dt>Simple estimate</dt><dd>Send the property details and photos</dd></div></dl></section> }
export function TrustProof({ source }) { return <section className="trust-proof" id="home-proof"><div><p className="kicker">Proof before promises</p><h2 className="split-accent split-accent-light">Not sure what the surface needs? <em>Start with work like yours.</em></h2><p>You do not need to diagnose the job before calling. Compare nearby completed projects, check the service area, or show AquaBlast the property and let us help define the next step.</p></div><ul><li><a href="/projects"><span className="trust-proof-copy"><b>Compare real projects</b><span>See completed jobs by surface, service, and community.</span></span><i aria-hidden="true">→</i></a></li><li><a href="/near-me"><span className="trust-proof-copy"><b>Find your service area</b><span>Check communities across Northwest Ohio and Lake Erie.</span></span><i aria-hidden="true">→</i></a></li><li><a href="/estimate?source=home%3Atrust-proof"><span className="trust-proof-copy"><b>Show us your property</b><span>Send the address, surfaces, and a few useful photos.</span></span><i aria-hidden="true">→</i></a></li></ul><figure className="company-proof"><img src={source('01-branded-aqua-blast-work-truck-homepage-banner.jpg')} alt="Aqua Blast branded work truck" width="1920" height="1080" loading="lazy" decoding="async" /><figcaption><span>Northwest Ohio + Lake Erie</span><b>AquaBlast on the job</b></figcaption></figure></section> }
export function ServiceChooser({ source }) { return <><section className="intro" id="services"><p className="kicker">Start with what you see</p><h2 className="split-accent split-accent-light">You do not need the service name. <em>Choose the part of the property bothering you.</em></h2><p>Pick the surface or problem that feels closest. If none is exact, <a href="/pressure-washing-company">compare all services</a> or send photos with your estimate request.</p></section><section className="service-grid" aria-label="Choose a service">{services.map(([title, detail, image, href]) => <a href={href} className="service-card service-card-link" key={title}>{image && <img src={image.startsWith('/') ? image : source(image)} alt="" loading="lazy" decoding="async" />}<strong>{title}</strong><small>{detail}</small><i aria-hidden="true">→</i></a>)}</section><Results source={source} /></> }
export function Results({ source }) {
  const showcase = [
    { title:'Deck cleaning', location:'Sandusky, OH', detail:'Before + after', image:source('06-deck-cleaning-before-after.jpg'), alt:'Deck cleaning before-and-after composite from a Sandusky project', href:'/projects/deck-cleaning-sandusky-ohio' },
    { title:'House washing', location:'Oak Harbor, OH', detail:'Before + after', image:source('07-house-washing-before-after.jpg'), alt:'House washing before-and-after composite from an Oak Harbor project', href:'/projects/house-washing-oak-harbor' },
    { title:'Roof cleaning', location:'Port Clinton, OH', detail:'Before + after', image:source('10-port-clinton-roof-cleaning-project.jpg'), alt:'Completed AquaBlast roof cleaning project in Port Clinton', href:'/projects/port-clinton-roof-cleaning' },
    { title:'Deck restoration', location:'Port Clinton, OH', detail:'Before + after', image:source('08-deck-restoration-before-after.jpg'), alt:'Deck restoration before-and-after project in Port Clinton', href:'/projects/deck-restoration-port-clinton-ohio' },
  ]
  return <section className="results results-showcase" id="results"><div className="section-heading results-showcase-heading"><div><p className="kicker">Completed projects</p><h2 className="split-accent split-accent-dark">See what changed <em>on real properties.</em></h2></div><p>Open a completed job to compare the service, location, and before-and-after result with your own property.</p></div><div className="results-showcase-grid" aria-label="Featured AquaBlast projects">{showcase.map((project) => <a className="results-showcase-card" href={project.href} key={`${project.title}-${project.location}`}><div className="results-showcase-media"><img src={project.image} alt={project.alt} loading="lazy" decoding="async" /></div><div className="results-showcase-copy"><span>{project.detail}</span><div><b>{project.title}</b><small>{project.location}</small></div><i aria-hidden="true">↗</i></div></a>)}</div><div className="results-followup results-showcase-followup"><p>See more completed work from around Northwest Ohio and the Lake Erie area.</p><div><a href="/projects">View all projects <span aria-hidden="true">→</span></a></div></div></section>
}

export function OwnerTrust() { return <section className="owner-trust" id="about" aria-labelledby="owner-trust-title"><div className="owner-trust-intro"><p className="kicker">Meet the owner</p><h2 id="owner-trust-title" className="split-accent split-accent-light">Know who is responsible. <em>Ryan stays involved.</em></h2><p>You can talk to the owner before the work begins, and Ryan stays involved through the finished job.</p><a className="secondary owner-secondary" href="tel:4196356961">Call AquaBlast <span aria-hidden="true">→</span></a></div><div className="owner-trust-card"><div className="owner-nameplate"><span>From Ryan</span><b>Communication matters.</b><small>Aqua Blast Pressure Washing</small></div><blockquote>“Coming from a family of contractors, I understand the importance of communication.”</blockquote><p className="owner-source">Ryan O’Neill · Owner, Aqua Blast Pressure Washing</p></div><div className="owner-trust-proof"><article><b>Owner involved</b><p>You know who is responsible for the job before the work begins.</p></article><article><b>Clear communication</b><p>You should know what to expect before the work starts and while we’re on the property.</p></article><article><b>Port Clinton contact</b><p>323 Wilson Ave · Port Clinton, OH 43452<br /><a href="tel:4196356961">419-635-6961</a></p></article></div></section> }


export function CustomerTrust() { return <section className="customer-trust" id="reviews" aria-labelledby="customer-trust-title"><div className="customer-trust-head"><p className="kicker">What customers say</p><h2 id="customer-trust-title" className="split-accent split-accent-light">The work matters. <em>So does how people are treated.</em></h2><p>Here’s what a few customers have said about working with us.</p></div><div className="customer-trust-grid"><blockquote><p>“Ryan was on time, highly detailed and worked quickly on our home.”</p><cite><b>Melissa F.</b><span>Put-In-Bay, Ohio</span></cite></blockquote><blockquote><p>“A company that knows how to treat a customer. Just that simple.”</p><cite><b>Paul Schoen</b><span>Sandusky, Ohio</span></cite></blockquote></div><p className="customer-trust-note"><a href="/reviews">Read more customer reviews <span aria-hidden="true">→</span></a></p></section> }

export function CommonQuestions() { return <section className="common-questions" id="questions" aria-labelledby="common-questions-title"><div className="common-questions-head"><p className="kicker">Questions homeowners ask</p><h2 id="common-questions-title">Straight answers about exterior cleaning.</h2><p>A few common questions about cleaners, roof streaks, and older stains.</p></div><div className="common-questions-grid"><details><summary>What kind of cleaners are used?</summary><p>We use biodegradable, eco-friendly cleaners and choose the cleaning method based on the surface and the job.</p></details><details><summary>What are the dark streaks on a roof?</summary><p>Dark roof streaks can be biological growth rather than ordinary dirt, which is why roof cleaning needs a surface-appropriate process instead of simply more pressure.</p></details><details><summary>Can older stains still be evaluated?</summary><p>Older stains are looked at individually so we can choose the cleaner, pressure, and equipment that fit the surface.</p></details></div><a className="secondary common-questions-cta" href="/faq">Read all FAQs <span aria-hidden="true">→</span></a></section> }


export function ValueGuideBand() { return <div id="homeowner-guide"><LeadMagnetBand source="home:value-guide" /></div> }

export function QuoteProcess() { return <section className="path home-story-plan" id="quote-process"><header><div><p className="kicker">A simple plan</p><h2>Show us the property. <em>We’ll help define the job.</em></h2></div><p>{AQUABLAST_BRAND_MESSAGE.philosophicalProblem} Start with the property, what is bothering you, and a few useful photos.</p></header><ol className="estimate-journey"><li><b>01</b><div><span>Show us the property</span><p>Send the address, surfaces involved, and photos when possible.</p></div></li><li><b>02</b><div><span>AquaBlast reviews it</span><p>We look at the details and follow up if anything needs clarification.</p></div></li><li><b>03</b><div><span>Get the next step</span><p>Review the scope, then plan the service when you are ready.</p></div></li></ol><div className="estimate-process-end"><p>One clear request is enough to get the conversation started.</p><a className="cta estimate-process-cta" href="/estimate?source=home%3Aquote-process">Show us your property <span aria-hidden="true">→</span></a></div></section> }
export function Footer() { return <SiteFooter /> }
