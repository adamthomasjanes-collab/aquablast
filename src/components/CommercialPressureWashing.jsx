const commercialHero = '/assets/generated/commercial-overview-multi-surface-hero-v1.webp'
const commercialConcrete = '/assets/live-projects/projects-comercila-concrete-cleaning-port-clinton-oh/01-commercial-concrete-cleaning-port-clinton-jpg.jpg'
const commercialBuilding = '/assets/live-projects/projects-commercial-office-building-cleaning-lakeside-marblehead-oh/01-5starstoreit-jpg.jpg'
import { ServiceAreaBand, ServiceFinalCta, ServiceHero, ServicePageShell } from './ServicePage'
import { estimateFor, useServicePageMetadata } from './servicePageUtils'

const estimateHref = estimateFor('commercial-property')

const commercialServiceCards = [
  { href:'/commercial-pressure-washing/storefront-cleaning', label:'Customer-facing', title:'Storefront cleaning', note:'Entrances, facades, sidewalks, and exterior glass.', image:'https://www.aquablastpw.com/uplift-data/images/services/storefront-cleaning.jpg', alt:'Commercial storefront exterior' },
  { href:'/commercial-pressure-washing/building-washing', label:'Building envelope', title:'Building washing', note:'Exterior walls and facility-facing surfaces.', image:'https://www.aquablastpw.com/uplift-data/images/services/building-washing.jpg', alt:'Commercial building exterior being washed' },
  { href:'/commercial-pressure-washing/dumpster-pad-cleaning', label:'Back of house', title:'Dumpster pad cleaning', note:'Service-area concrete and heavier-soil zones.', image:'https://www.aquablastpw.com/uplift-data/images/services/dumpster-pad-cleaning.jpg', alt:'Commercial dumpster pad area' },
  { href:'/commercial-pressure-washing/parking-lot-cleaning', label:'Arrival + traffic', title:'Parking lot cleaning', note:'Parking areas, traffic residue, and connecting flatwork.', image:'https://www.aquablastpw.com/uplift-data/images/services/parking-lot-cleaning.jpg', alt:'Commercial parking lot' },
  { href:'/commercial-pressure-washing/window-cleaning', label:'Exterior glass', title:'Commercial window cleaning', note:'Customer-facing and office exterior windows.', image:'https://www.aquablastpw.com/uplift-data/images/services/c-window-cleaning.jpg', alt:'Commercial exterior window cleaning' },
  { href:'/commercial-pressure-washing/fleet-washing', label:'Mobile assets', title:'Fleet washing', note:'Company vehicles, trailers, and route-ready equipment.', image:'https://www.aquablastpw.com/uplift-data/images/services/fleet-washing.jpg', alt:'Commercial fleet vehicles' },
]

export function CommercialPressureWashing() {
  useServicePageMetadata({
    title: 'Commercial Pressure Washing in Marblehead | AquaBlast Pressure Washing',
    description: 'Commercial pressure washing, building washing, parking-area cleaning, exterior window cleaning, and fleet washing in Marblehead and across Northwest Ohio and Lake Erie communities.',
    canonicalPath: '/commercial-pressure-washing',
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page commercial-overview-page">
    <ServiceHero className="commercial-hero" image={commercialHero} alt="Illustrative commercial cleaning overview showing parking-area and storefront work contexts" eyebrow="Commercial exterior cleaning · Northwest Ohio + Lake Erie" title="Commercial cleaning." flavor="Planned around your operation.">
      <p>Buildings, parking areas, exterior glass, and fleets all collect different kinds of buildup. Tell us what needs attention, where it is, and when the work can happen.</p>
      <a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="commercial-recognition" aria-labelledby="commercial-recognition-title">
      <div className="commercial-recognition__title"><p className="kicker">What commercial cleaning has to solve</p><h2 id="commercial-recognition-title">The work has to fit the property without getting in the way of the business.</h2></div>
      <div className="commercial-recognition__signals">
        <article><span>01</span><b>Customer-facing appearance</b><p>Entrances, walls, glass, sidewalks, and parking areas shape the first impression before anyone walks inside.</p></article>
        <article><span>02</span><b>Traffic + heavier buildup</b><p>Vehicles, foot traffic, road film, oil residue, debris, and service-area grime can create a different cleaning problem than a residential patio.</p></article>
        <article><span>03</span><b>Operating constraints</b><p>Access, deliveries, routes, shifts, parked vehicles, and customer traffic all affect how the work should be staged.</p></article>
      </div>
    </section>

    <section className="commercial-service-directory commercial-service-directory--overview" aria-labelledby="commercial-service-directory-title">
      <div className="commercial-service-directory__intro"><p className="kicker">Choose the work area</p><h2 id="commercial-service-directory-title">Start with the part of the property that needs attention.</h2><p>Each service can stand alone, or several can be planned together in one commercial estimate.</p></div>
      <div className="commercial-service-links">
        {commercialServiceCards.map((service) => <a href={service.href} key={service.href}>
          <img src={service.image} alt={service.alt} width="450" height="300" loading="lazy" decoding="async" />
          <span>{service.label}</span><b>{service.title}</b><small>{service.note} →</small>
        </a>)}
      </div>
    </section>

    <section className="commercial-plan" aria-labelledby="commercial-plan-title">
      <div className="commercial-plan__copy"><p className="kicker">A simple commercial plan</p><h2 id="commercial-plan-title">Show us the site. Tell us when it has to stay usable.</h2><p>Commercial cleaning works best when the cleaning method and the operating schedule are planned together.</p><a className="secondary" href={estimateHref}>Start with photos <span aria-hidden="true">→</span></a></div>
      <ol className="commercial-plan__steps">
        <li><b>01</b><span>Define the scope</span><p>Show us the building, work areas, fleet units, entrances, and the surfaces you want included.</p></li>
        <li><b>02</b><span>Plan access + timing</span><p>Operating hours, customer traffic, loading areas, route schedules, parked vehicles, and staging all shape the work window.</p></li>
        <li><b>03</b><span>Match the method</span><p>Pressure, detergents, and process are selected around the material and condition instead of treating every commercial surface the same way.</p></li>
      </ol>
    </section>

    <section className="commercial-proof" id="proof" aria-labelledby="commercial-proof-title">
      <header><div><p className="kicker">Real AquaBlast commercial work</p><h2 id="commercial-proof-title">Two different jobs. Two different operating constraints.</h2></div><p>See how AquaBlast handled a time-sensitive concrete job and an office-building wash scheduled around business hours.</p></header>
      <div className="commercial-proof__grid">
        <a href="/projects/comercila-concrete-cleaning-port-clinton-oh" className="commercial-proof__card commercial-proof__card--square"><figure><div className="commercial-proof__media"><img src={commercialConcrete} alt="Commercial concrete cleaning project in Port Clinton" loading="lazy" decoding="async" /></div><figcaption><span>Port Clinton, OH</span><b>Commercial concrete before an annual inspection</b><p>Hot-water cleaning for a local attraction, fitted into the schedule on short notice.</p><small>Open real project →</small></figcaption></figure></a>
        <a href="/projects/commercial-office-building-cleaning-lakeside-marblehead-OH" className="commercial-proof__card commercial-proof__card--portrait"><figure><div className="commercial-proof__media"><img src={commercialBuilding} alt="Commercial office building cleaning project in Lakeside Marblehead" loading="lazy" decoding="async" /></div><figcaption><span>Lakeside Marblehead, OH</span><b>Office-building wash after business hours</b><p>Repeat-customer work scheduled after hours so the business was not open during cleaning.</p><small>Open real project →</small></figcaption></figure></a>
      </div>
    </section>

    <section className="commercial-context" aria-labelledby="commercial-context-title">
      <div><p className="kicker">What changes from one commercial job to the next</p><h2 id="commercial-context-title">The site plan matters as much as the surface list.</h2></div>
      <div className="commercial-context__facts"><article><b>Access + staging</b><p>Height, landscaping, loading zones, parked vehicles, and where equipment can sit all affect the job plan.</p></article><article><b>Surface-aware methods</b><p>Paint, decals, wraps, glass, sensors, masonry, concrete, and siding do not all get the same treatment.</p></article><article><b>Scheduling context</b><p>Routes, shifts, inspections, deliveries, customer traffic, and facility access can determine the best work window.</p></article></div>
    </section>

    <ServiceAreaBand>
      <p className="kicker">Commercial service area</p>
      <h2>Commercial exterior cleaning across Northwest Ohio and the Lake Erie area.</h2>
      <p>From customer-facing properties to office buildings, hard surfaces, and fleet operations.</p>
      <div className="editorial-actions"><a className="secondary" href="/near-me">See all service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">See commercial proof <span aria-hidden="true">→</span></a></div>
    </ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Need commercial cleaning?</p><h2>Show us the property, vehicles, or work area.</h2><p>Send photos along with the operating hours, access details, and any timing constraints that affect the job.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}
