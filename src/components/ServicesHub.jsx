const house = '/assets/project-media/02-house-washing-service-image.webp'
const concrete = '/assets/project-media/03-driveway-concrete-service-image.webp'
const paver = '/assets/project-media/04-paver-cleaning-service-image.webp'
const wood = '/assets/project-media/06-deck-cleaning-before-after.webp'
const roof = '/assets/project-media/09-roof-cleaning-service-image.webp'
import { useServicePageMetadata } from './servicePageUtils'
import { ConceptBar } from './ServicePage'
import { SiteFooter, SiteHeader } from './sections'
import { LeadMagnetBand } from './LeadMagnetCapture'

const services = [
  { title:'House Washing', detail:'Siding and exterior surfaces', problem:'Green growth, streaking, dirt, or a house exterior that looks tired.', href:'/house-washing', image:house },
  { title:'Concrete Cleaning', detail:'Driveways · sidewalks · patios', problem:'Darkened concrete, surface buildup, or hardscape that has lost its clean appearance.', href:'/concrete-cleaning', image:concrete },
  { title:'Roof Cleaning', detail:'Shingled and tile roofing', problem:'Roof streaks or visible organic buildup that should be treated with the right method.', href:'/roof-cleaning', image:roof },
  { title:'Gutter Cleaning', detail:'Interior debris · downspouts · exterior buildup', problem:'Overflow, visible debris, staining, or gutters that are no longer moving water as expected.', href:'/gutter-cleaning', image:'/assets/concept-service-roofs-gutters-v1.webp' },
  { title:'Window Cleaning', detail:'Exterior window cleaning', problem:'Exterior glass that still looks hazy, spotted, or dirty after the rest of the property is cleaned.', href:'/window-cleaning', image:house },
  { title:'Wood Restoration', detail:'Decks · fences · wood surfaces', problem:'Weathered, darkened, or neglected wood that needs more than a quick rinse.', href:'/wood-restoration', image:wood },
  { title:'Paver Cleaning & Sealing', detail:'Cleaning · sanding · sealing', problem:'Pavers with buildup, tired joints, or a surface that is ready for cleaning and sealing.', href:'/paver-cleaning-sealing', image:paver },
  { title:'Commercial Pressure Washing', detail:'Buildings · parking areas · windows · fleets', problem:'A commercial property with several exterior areas that need a coordinated cleaning plan.', href:'/commercial-pressure-washing', image:'/assets/concept-service-commercial-v1.webp' },
]

export function ServicesHub() {
  useServicePageMetadata({ title:'Marblehead Pressure Washing Services | AquaBlast Pressure Washing', description:'Explore AquaBlast pressure washing and exterior-cleaning services in Marblehead and across Northwest Ohio and Lake Erie communities.', canonicalPath:'/pressure-washing-company' })
  return <div className="services-hub-page" id="top">
    <a className="skip" href="#main">Skip to content</a>
    <ConceptBar />
    <SiteHeader areasHref="/near-me" />
    <main id="main">
      <section className="services-hub-hero services-story-hero">
        <div>
          <p className="kicker">Residential + commercial exterior cleaning</p>
          <h1>Start with what you see. <em>You do not need to know the service name.</em></h1>
          <p>Tell AquaBlast which part of the property concerns you and what it looks like. Every property is assessed for its actual surfaces and conditions, and we keep the process clear as we narrow the problem to the right service and scope.</p>
          <div className="services-hub-actions"><a className="cta" href="#choose-service">Find the closest match <span aria-hidden="true">↓</span></a><a className="secondary" href="/estimate?source=services%3Ahero">Show us the property <span aria-hidden="true">→</span></a></div>
        </div>
        <aside><span>How we choose the method</span><b>Surface first. Method second.</b><p>Siding, roofing, concrete, pavers, wood, glass, and commercial surfaces do not all respond to the same process. The property determines the approach.</p></aside>
      </section>

      <section className="services-recognition" aria-labelledby="services-recognition-title">
        <div><p className="kicker">What are you noticing?</p><h2 id="services-recognition-title">Recognize the problem before you worry about the terminology.</h2></div>
        <div className="services-recognition-list">
          <article><b>Growth, streaking, or exterior buildup</b><p>Start with the surface: siding, roof, gutters, concrete, pavers, wood, or glass.</p></article>
          <article><b>A surface that looks weathered or neglected</b><p>Photos of the full area and a closer view help AquaBlast distinguish cleaning from restoration or sealing needs.</p></article>
          <article><b>Several areas need attention at once</b><p>You can include multiple surfaces in one estimate instead of trying to choose a separate contractor for each.</p></article>
        </div>
      </section>

      <section className="services-proof-path" aria-labelledby="services-proof-title">
        <header><div><p className="kicker">Proof before the estimate</p><h2 id="services-proof-title">See how different property problems look in real AquaBlast work.</h2></div><p>You do not need an exact match. Use completed jobs to compare surfaces, conditions, and the kind of result AquaBlast has already delivered.</p></header>
        <div className="services-proof-grid">
          <a href="/projects/house-washing-oak-harbor"><figure><img src={house} alt="Completed AquaBlast house washing work" loading="lazy" decoding="async" /><figcaption><span>House washing</span><b>Siding and exterior buildup</b><small>View completed project →</small></figcaption></figure></a>
          <a href="/projects/port-clinton-roof-cleaning"><figure><img src={roof} alt="Completed AquaBlast roof cleaning work" loading="lazy" decoding="async" /><figcaption><span>Roof cleaning</span><b>Roof streaking and organic buildup</b><small>View completed project →</small></figcaption></figure></a>
          <a href="/paver-sealing-confederate-dr-lakeside-marblehead"><figure><img src={paver} alt="Completed AquaBlast paver cleaning and sealing work" loading="lazy" decoding="async" /><figcaption><span>Paver care</span><b>Cleaning, joint care, and sealing</b><small>View completed project →</small></figcaption></figure></a>
        </div>
      </section>

      <section className="services-chooser" id="choose-service" aria-labelledby="services-chooser-title">
        <header><div><p className="kicker">Find the closest match</p><h2 id="services-chooser-title">Choose by the surface or problem—not by guessing the cleaning method.</h2></div><p>Open the service that sounds closest to what you are seeing. If none feels exact, use the estimate form and select “Other / not sure.”</p></header>
        <div className="services-hub-grid" aria-label="AquaBlast services">{services.map((service) => <a href={service.href} className="services-hub-card" key={service.title}><div className="services-hub-media"><img src={service.image} alt="" loading="lazy" decoding="async" /></div><div><span>{service.detail}</span><h2>{service.title}</h2><p>{service.problem}</p><b>See if this fits →</b></div></a>)}</div>
      </section>

      <section className="services-story-plan">
        <div><p className="kicker">A simple plan</p><h2>Show the problem. Let AquaBlast match the service. Review the scope.</h2><p>You are not expected to diagnose pressure, chemistry, or technique. Give AquaBlast enough context to understand the surface and the result you want.</p><a className="cta" href="/estimate?source=services%3Aplan">Get an estimate <span aria-hidden="true">→</span></a></div>
        <ol><li><b>01</b><span>Choose the surface or describe what looks wrong.</span></li><li><b>02</b><span>Add the property address, photos, and anything that affects access.</span></li><li><b>03</b><span>Review AquaBlast’s recommended service and scope before deciding.</span></li></ol>
      </section>

      <LeadMagnetBand source="services:hub" />

      <section className="service-final services-story-success"><div><p className="kicker">The outcome</p><h2>Know what your property needs. <em>Without having to become the expert.</em></h2><p>A clear service match should leave you knowing what AquaBlast recommends, what area is included, and what the next step costs before work begins.</p></div><a className="cta" href="/estimate?source=services%3Afinal">Show us your property <span aria-hidden="true">→</span></a></section>
    </main>
    <SiteFooter />
    <nav className="mobile-dock" aria-label="Mobile quick actions"><a className="dock-estimate" href="/estimate">Get an estimate</a><a className="dock-call" href="tel:4196356961">Call AquaBlast</a></nav>
  </div>
}
