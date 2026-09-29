import { ServiceAreaBand, ServiceFinalCta, ServiceProof, ServiceRecognition, ServiceScope, ServicePageShell } from './ServicePage'
import { estimateFor, useServicePageMetadata } from './servicePageUtils'

const estimateHref = estimateFor('paver-cleaning-sealing')
const heroImage = '/assets/generated/paver-hero-lakeside-generated.png'
const heroInset = '/assets/live-projects/paver-sealing-confederate-dr-lakeside-marblehead/01-paver-sealing-confederate-dr-lakeside-marblehead-featured-jpg.jpg'

export function PaverCleaningSealing(){
  useServicePageMetadata({title:'Paver Cleaning & Sealing | AquaBlast Pressure Washing',description:'Paver cleaning, joint sanding, and sealing services across Northwest Ohio and Lake Erie communities.',canonicalPath:'/paver-cleaning-sealing'})
  return <ServicePageShell estimateHref={estimateHref} className="paver-page">
    <section className="paver-hero" aria-labelledby="paver-hero-title">
      <div className="paver-hero__copy">
        <p className="kicker">Paver cleaning + sealing · Lake Erie area</p>
        <h1 id="paver-hero-title">Pavers that look cared for.</h1>
        <p>Cleaning, joint sanding, and sealing for patios, walks, and driveways that need more than a quick wash.</p>
        <div className="paver-hero__actions">
          <a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a>
          <a className="secondary" href="#proof">See real results <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="paver-hero__visual" aria-label="Paver patio service visual">
        <figure className="paver-hero__primary">
          <img src={heroImage} alt="Clean lakeside paver patio with curved walkway, seating area, and waterfront view" width="1448" height="1086" loading="eager" decoding="async" fetchPriority="high" />
        </figure>
      </div>
    </section>

    <ServiceRecognition>
      <div><p className="kicker">When pavers stop looking finished</p><h2>The whole outdoor space can start feeling tired.</h2></div>
      <div className="paver-recognition-copy"><p>Paver care can move from cleaning into fresh joint sand and sealing, depending on what the surface, joints, and finish actually need.</p><div className="paver-mini-proof"><span>Clean</span><span>Re-sand</span><span>Seal</span></div></div>
    </ServiceRecognition>

    <ServiceScope>
      <div><p className="kicker">What paver care can include</p><h2>The surface may need more than a wash.</h2></div>
      <ul className="paver-scope-list">
        <li><b>Cleaning</b><span>Remove weeds, debris, organics, and surface buildup.</span></li>
        <li><b>Joint sanding</b><span>Restore joint material when the pavers need it.</span></li>
        <li><b>Sealing</b><span>Protect the cleaned surface after joint work is complete. AquaBlast’s current contact guidance specifies flat sealers for concrete and paver sealing; confirm the finish for your project during the estimate.</span></li>
        <li><b>Patios + walks + driveways</b><span>Residential paver surfaces throughout the lake-area communities we serve.</span></li>
      </ul>
    </ServiceScope>

    <section className="paver-process-visual" aria-labelledby="paver-process-title">
      <div className="paver-process-visual__copy">
        <p className="kicker">A simple plan</p>
        <h2 id="paver-process-title">Clean first. Finish second.</h2>
        <ol>
          <li><b>01</b><span>Clean the pavers</span></li>
          <li><b>02</b><span>Restore the joints when needed</span></li>
          <li><b>03</b><span>Seal + verify the finish</span></li>
        </ol>
      </div>
      <figure className="paver-process-visual__media">
        <img src="/assets/live-projects/projects-marblehead-oh-paver-cleaning-sansing-sealing/01-marblehead-oh-paver-cleaning-sansing-sealing-001-jpg.jpg" alt="Paver walkway during an AquaBlast cleaning, sanding, and sealing project in Marblehead" width="810" height="1440" loading="lazy" decoding="async" />
        <figcaption>Real AquaBlast work · cleaning → joint work → sealing</figcaption>
      </figure>
    </section>

    <ServiceProof>
      <div className="section-heading"><div><p className="kicker">Completed paver work</p><h2>Real projects. Real change.</h2></div><p>The Lakeside Marblehead walkway shows how cleaning, joint condition, and the final seal shape the finished result. In a published Marblehead paver project, the crew returned the next day to verify the sealed pavers were drying properly. Your schedule and follow-up depend on the surface, product, and weather.</p></div>
      <div className="paver-proof-grid">
        <a className="project-proof-link" href="/projects/house-paver-and-exterior-window-cleaning-in-marblehead-ohio"><figure><div className="result-media"><img src="/assets/live-projects/projects-house-paver-and-exterior-window-cleaning-in-marblehead-ohio/01-down-net-http20240427-73-s9iv2l-jpg.jpg" alt="Before and after paver cleaning at a Marblehead waterfront property" width="810" height="1440" loading="lazy" decoding="async" /></div><figcaption><span>Before + after</span><b>Marblehead, OH</b><small>Open project →</small></figcaption></figure></a>
        <a className="project-proof-link" href="/paver-sealing-confederate-dr-lakeside-marblehead"><figure><div className="result-media"><img src={heroInset} alt="Before and after paver sealing project on a Lakeside Marblehead walkway" width="450" height="300" loading="lazy" decoding="async" /></div><figcaption><span>Paver cleaning + sealing</span><b>Lakeside Marblehead, OH</b><small>Open project →</small></figcaption></figure></a>
      </div>
    </ServiceProof>

    <ServiceAreaBand><p className="kicker">Service area</p><h2>Paver care across the Lake Erie area.</h2><p>Patios, driveways, walkways, pool decks, and other outdoor paver surfaces.</p><div className="editorial-actions"><a className="secondary" href="/near-me">See all service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/pressure-washing-tips/from-dirty-to-durable-why-paver-cleaning-and-sealing-matters">Paver-care guide <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Have pavers that need attention?</p><h2>Show us the surface and the joints.</h2><p>Send a few wide photos and close-ups of the joints, staining, weeds, or existing sealer.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}
