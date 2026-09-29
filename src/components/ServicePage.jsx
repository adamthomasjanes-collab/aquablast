import { SiteFooter, SiteHeader } from './sections'
export function ConceptBar() {
  return <div className="concept-bar" role="note"><span>PRIVATE SPECULATIVE CONCEPT · NOT COMMISSIONED OR APPROVED BY AQUABLAST</span><a href="/case-study">View case study →</a></div>
}

const heroDimensions = {
  '/assets/project-media/03-driveway-concrete-service-image.webp': [500, 313],
  '/assets/project-media/04-paver-cleaning-service-image.webp': [500, 313],
  '/assets/project-media/05-house-washing-action-quote-banner.webp': [1400, 1080],
  '/assets/project-media/06-deck-cleaning-before-after.webp': [1440, 1440],
  '/assets/concept-service-roofs-gutters-v1.webp': [1000, 667],
  '/assets/concept-service-commercial-v1.webp': [1000, 667],
  '/assets/ai-roof-cleaning-hero-v1.png': [1672, 941],
  '/assets/ai-house-washing-hero-v1.png': [1672, 941],
}

function ServicePageHeader({ estimateHref, children }) {
  return <><ConceptBar /><SiteHeader estimateHref={estimateHref} areasHref="/near-me" />{children}</>
}


export function ServicePageShell({ estimateHref, children, className = '', headerChildren = null }) {
  const classes = ['service-page', className].filter(Boolean).join(' ')
  return <div className={classes} id="top">
    <a className="skip" href="#main">Skip to content</a>
    <ServicePageHeader estimateHref={estimateHref}>{headerChildren}</ServicePageHeader>
    <main id="main">{children}</main>
    <SiteFooter />
    <ServicePageDock estimateHref={estimateHref} />
  </div>
}

export function ServiceHero({ image, alt, eyebrow, title, flavor = null, className = '', children }) {
  const [width, height] = heroDimensions[image] ?? [1600, 900]
  return <section className={`service-hero ${className}`.trim()}><img src={image} alt={alt} width={width} height={height} loading="eager" decoding="async" fetchPriority="high" /><div className="service-hero-copy"><p className="kicker">{eyebrow}</p><h1>{title}{flavor && <><br /><em>{flavor}</em></>}</h1>{children}</div></section>
}

export function ServiceRecognition({ children }) { return <section className="service-intro">{children}</section> }
export function ServiceScope({ children }) { return <section className="service-surfaces">{children}</section> }
export function ServiceUnderstanding({ children }) { return <section className="service-understanding">{children}</section> }
export function ServiceConversion({ children }) { return <div className="service-conversion">{children}</div> }
export function ServiceProof({ children }) { return <section className="service-proof" id="proof">{children}</section> }
export function ServiceReview({ quote, context, href = '/reviews' }) {
  const [reviewer, source = 'Customer review'] = context.split(' · ')
  return <aside className="service-review" aria-label="Customer review"><p className="kicker">Customer review</p><blockquote><p>“{quote}”</p><footer><cite><b>{reviewer}</b><span>{source}</span></cite><a href={href}>See all customer reviews <span aria-hidden="true">→</span></a></footer></blockquote></aside>
}
export function ServiceAreaBand({ children }) { return <section className="service-area-band" id="area">{children}</section> }
export function ServiceFinalCta({ children }) { return <section className="service-final">{children}</section> }


function ServicePageDock({ estimateHref }) {
  return <nav className="mobile-dock" aria-label="Mobile quick actions"><a className="dock-estimate" href={estimateHref}>Get an estimate</a><a className="dock-call" href="tel:4196356961">Call AquaBlast</a></nav>
}
