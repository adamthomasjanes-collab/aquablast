const truckImage = '/assets/project-media/01-branded-aqua-blast-work-truck-homepage-banner.webp'
const houseImage = '/assets/project-media/02-house-washing-service-image.webp'
const concreteImage = '/assets/project-media/03-driveway-concrete-service-image.webp'
const roofProject = '/assets/project-media/10-port-clinton-roof-cleaning-project.webp'
const deckProject = '/assets/project-media/08-deck-restoration-before-after.webp'
import { ServiceHero, ServicePageShell } from './ServicePage'
import { useServicePageMetadata } from './servicePageUtils'

const estimateHref = '/estimate?location=port-clinton&source=location%3Aport-clinton'
const portClintonHero = '/assets/generated/location-heroes/port-clinton-hero-generated-v1.png'

export function PortClinton() {
  useServicePageMetadata({
    title: 'Port Clinton Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'Exterior cleaning services and completed jobs in Port Clinton, Ohio.',
    canonicalPath: '/near-me/pressure-washing-port-clinton',
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page" headerChildren={<div className="location-header-note">Port Clinton, Ohio</div>}>
      <ServiceHero image={portClintonHero} alt="Illustrative Port Clinton waterfront home with a clean exterior and Lake Erie setting" eyebrow="Port Clinton · Lake Erie" title="Exterior cleaning in Port Clinton." flavor="Keep the property ready for lake season." className="location-service-hero port-clinton-hero">
        <p>House exteriors, roofs, concrete, decks, windows, and gutters all weather differently around the Lake Erie shoreline. Start with the parts of the property you notice first and include the rest in the same estimate when it makes sense.</p>
        <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#local-work">See Port Clinton work <span aria-hidden="true">↓</span></a></div>
      </ServiceHero>

      <section className="location-intro location-port-clinton-context">
        <div>
          <p className="kicker">Port Clinton exterior care</p>
          <h2>Match the cleaning method to the surface.</h2>
        </div>
        <div className="location-port-clinton-copy">
          <p>You should not have to know the right cleaning method before asking for help. Start with the surface, the visible buildup, and the condition you are seeing; AquaBlast can make an individual assessment of the property and determine the appropriate approach.</p>
          <p>Concrete is a good example: it is strong but porous, so contaminants can work into those pores over time. The goal is not simply to brighten the top surface, but to match the cleaning approach to the material and condition.</p>
        </div>
      </section>

      <section className="location-services" aria-labelledby="port-clinton-services">
        <div className="section-heading">
          <div>
            <p className="kicker">Services in Port Clinton</p>
            <h2 id="port-clinton-services">Choose the part of the property you want cleaned.</h2>
          </div>
          <p>We offer exterior-cleaning services for homes, hard surfaces, roofs, decks, windows, and commercial properties in the Port Clinton area.</p>
        </div>
        <div className="location-service-grid">
          <a href="/house-washing" className="location-service-card">
            <img src={houseImage} alt="House washing service" loading="lazy" decoding="async" />
            <span>Home exterior</span><b>House washing</b><small>Clean up siding and exterior surfaces.</small>
          </a>
          <a href="/roof-cleaning" className="location-service-card">
            <img src={roofProject} alt="Roof cleaning project in Port Clinton" loading="lazy" decoding="async" />
            <span>Roof</span><b>Roof cleaning</b><small>For roofs showing dirt, mildew, or dark and green streaking.</small>
          </a>
          <a href={estimateHref} className="location-service-card">
            <img src={concreteImage} alt="Concrete and driveway cleaning service" loading="lazy" decoding="async" />
            <span>Hard surfaces</span><b>Concrete cleaning</b><small>Driveways, patios, sidewalks, and other exterior concrete.</small>
          </a>
          <a href={estimateHref} className="location-service-card location-service-card-text">
            <div className="location-card-field"><span>More exterior needs</span><b>Decks, gutters, windows + commercial</b><small>Tell us what you want cleaned and include a few photos of the property.</small></div>
          </a>
        </div>
      </section>

      <section className="location-proof" id="local-work">
        <div className="section-heading">
          <div><p className="kicker">Completed jobs · Port Clinton</p><h2>Completed jobs in Port Clinton.</h2></div>
          <p>These before-and-after photos are from jobs we completed in Port Clinton.</p>
        </div>
        <div className="location-project-grid">
          <figure>
            <img src={roofProject} alt="Before and after from an AquaBlast roof cleaning project in Port Clinton" loading="lazy" decoding="async" />
            <figcaption><span>Roof cleaning</span><b>Port Clinton, OH</b><small>Before &amp; after</small></figcaption>
          </figure>
          <a className="location-project-link" href="/projects/deck-restoration-port-clinton-ohio" aria-label="View the Port Clinton deck restoration project"><figure>
            <img src={deckProject} alt="Before and after from an AquaBlast deck restoration project in Port Clinton" loading="lazy" decoding="async" />
            <figcaption><span>Deck restoration</span><b>Port Clinton, OH</b><small>View project →</small></figcaption>
          </figure></a>
        </div>
      </section>

      <section className="location-quote">
        <div>
          <p className="kicker">Request an estimate</p>
          <h2>Show us the property.</h2>
          <p>Send a few photos and the basic property details so we can review the job.</p>
          <a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a>
        </div>
        <ol>
          <li><b>01</b><span>Show us what needs cleaning and what you are noticing.</span></li>
          <li><b>02</b><span>Add the Port Clinton property details and a few useful photos.</span></li>
          <li><b>03</b><span>Review AquaBlast’s recommended service and scope before deciding.</span></li>
        </ol>
      </section>

      <section className="location-search-support">
        <div>
          <p className="kicker">More exterior services</p>
          <h2>Need more than one area cleaned?</h2>
        </div>
        <div className="location-search-copy">
          <p>If more than one area needs attention, we can include house washing, roof cleaning, concrete cleaning, deck work, windows, gutters, and commercial exterior cleaning in the same request.</p>
          <p>If several areas need attention, include them in the same estimate request. You can also review the related services below.</p>
          <div className="location-related-links" aria-label="Related AquaBlast services and projects">
            <a href="/house-washing">House washing <span aria-hidden="true">→</span></a>
            <a href="/roof-cleaning">Roof cleaning <span aria-hidden="true">→</span></a>
            <a href="/projects/deck-restoration-port-clinton-ohio">Deck restoration project <span aria-hidden="true">→</span></a>
            <a href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="service-final location-final">
        <div><p className="kicker">The outcome</p><h2>Know what your Port Clinton property needs before the work begins.</h2><p>Tell us what concerns you, and AquaBlast can help define the right service, the area included, and the next step.</p></div>
        <a className="cta" href={estimateHref}>Show us your property <span aria-hidden="true">→</span></a>
      </section>
    </ServicePageShell>
}
