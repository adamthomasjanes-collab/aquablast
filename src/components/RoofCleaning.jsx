const roofHero = '/assets/ai-roof-cleaning-hero-v1.png'
const roofProof = '/assets/project-media/10-port-clinton-roof-cleaning-project.webp'
const roofMarblehead = '/assets/live-projects/projects-roof-cleaning-marblehead-oh/01-roof-cleaning-marblehead-oh-002-jpg.jpg'
const roofPortClintonPrep = '/assets/live-projects/projects-top-quality-roof-cleaning-in-port-clinton-ohio/01-down-net-http20240205-61-cw895z-jpg.jpg'
import { ServiceAreaBand, ServiceFinalCta, ServiceHero, ServiceReview, ServicePageShell } from './ServicePage'
import { estimateFor, useServicePageMetadata } from './servicePageUtils'

const estimateHref = estimateFor('roof-cleaning')

export function RoofCleaning() {
  useServicePageMetadata({ title: 'Roof Cleaning in Marblehead | AquaBlast Pressure Washing', description: 'Roof cleaning and soft-wash roof treatment for homes in Marblehead and across nearby Lake Erie and Northwest Ohio communities.', canonicalPath: '/roof-cleaning' })
  return <ServicePageShell estimateHref={estimateHref} className="roof-page">
      <ServiceHero image={roofHero} alt="Clean, well-kept lakeside home with a dark shingle roof in the Lake Erie area" eyebrow="Roof cleaning · Lake Erie area" title="Roof cleaning." flavor="Without treating shingles like concrete."><p>Dark streaks, mildew, and organic growth can make the whole property look tired. We use a gentler treatment built for roofing.</p><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceHero>

      <section className="roof-recognition-strip" aria-labelledby="roof-recognition-title">
        <div className="roof-recognition-title-block"><p className="kicker">Does this look familiar?</p><h2 id="roof-recognition-title">The problem usually shows up before the roof needs replacing.</h2></div>
        <div className="roof-recognition-signals" aria-label="Common signs a roof may need cleaning"><article><span>01</span><b>Dark streaks</b><p>Black or green streaking across shingles can make an otherwise well-kept home look neglected.</p></article><article><span>02</span><b>Mildew + organics</b><p>Moisture and shade can support visible organic buildup across the roof surface.</p></article><article><span>03</span><b>A dull roofline</b><p>From the street, a dirty roof can change the appearance of the entire property.</p></article></div>
      </section>

      <section className="roof-approach roof-approach--refined" aria-labelledby="roof-approach-title">
        <div className="roof-approach-copy"><div><p className="kicker">The approach</p><h2 id="roof-approach-title">Soft washing does the cleaning without turning the roof into flatwork.</h2></div><div className="roof-approach-detail"><p>AquaBlast’s published roof-cleaning guidance uses cleaning chemistry and a gentler soft-wash process to address bacteria, mold, mildew, and organic buildup.</p><div className="roof-materials"><span>Asphalt + bitumen shingles</span><span>Tile roofing</span></div><p>Black or green streaking can be associated with <i>Gloeocapsa magma</i>, an algae AquaBlast specifically calls out in its roof guidance.</p><p className="roof-related">Related services: <a href="/house-washing">House washing</a> · <a href="/gutter-cleaning">Gutter cleaning</a></p></div></div>
      </section>

      <section className="service-process roof-process" aria-labelledby="roof-process-title"><div><p className="kicker">What to expect</p><h2 id="roof-process-title">Treatment first. Weather finishes the release.</h2></div><ol><li><b>01</b><span>Evaluate the roof</span><p>Roof material, access, visible streaking, and surrounding surfaces shape the plan.</p></li><li><b>02</b><span>Apply the soft-wash treatment</span><p>The process targets organic growth without using the roof like a high-pressure concrete surface.</p></li><li><b>03</b><span>Let the result continue</span><p>Remaining moss and organics can continue dying and releasing over future rains after treatment.</p></li></ol></section>

      <section className="roof-proof-story" id="proof" aria-labelledby="roof-proof-title">
        <header><div><p className="kicker">Real AquaBlast roof work</p><h2 id="roof-proof-title">See what a cleaner roof can do for a home.</h2></div><p>Compare these completed jobs with the roof material and buildup you see at your property.</p></header>
        <div className="roof-proof-grid roof-proof-grid--focused">
          <a href="/projects/port-clinton-roof-cleaning" className="roof-proof-card roof-proof-card--feature"><figure><div className="roof-proof-media roof-proof-media--square"><img src={roofProof} alt="Before-and-after roof-cleaning project in Port Clinton" loading="lazy" decoding="async" /></div><figcaption><span>Before + after</span><b>Port Clinton roof cleaning</b><small>Recently purchased lake home · roof + gutters →</small></figcaption></figure></a>
          <a href="/projects/roof-cleaning-marblehead-oh" className="roof-proof-card roof-proof-card--related"><figure><div className="roof-proof-media"><img src={roofMarblehead} alt="Roof-cleaning project in Marblehead" loading="lazy" decoding="async" /></div><figcaption><span>Marblehead, OH</span><b>Roof + house cleaning</b><small>Open project →</small></figcaption></figure></a>
          <a href="/projects/top-quality-roof-cleaning-in-port-clinton-ohio" className="roof-proof-card roof-proof-card--related"><figure><div className="roof-proof-media"><img src={roofPortClintonPrep} alt="Roof-cleaning project in Port Clinton" loading="lazy" decoding="async" /></div><figcaption><span>Port Clinton, OH</span><b>Roof prep before sale</b><small>Open project →</small></figcaption></figure></a>
        </div>
      </section>

      <ServiceReview quote="We could not be happier with their workmanship, professionalism, and expertise." context="Bill Koch · Google review · roof cleaning" />

      <ServiceAreaBand><p className="kicker">Service area</p><h2>Roof cleaning around the Lake Erie area.</h2><p>Serving homeowners in Port Clinton, Marblehead, Sandusky, Oak Harbor, Put-In-Bay, Kelleys Island, Fremont, and nearby communities.</p><div className="editorial-actions"><a className="secondary" href="/near-me">See all service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/pressure-washing-tips/how-do-you-know-when-your-home-needs-exterior-cleaning">Exterior-care guide <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

      <ServiceFinalCta><div><p className="kicker">Need the roof cleaned?</p><h2>Show us the roof.</h2><p>Send a few photos from the ground, including the whole roofline and the areas with the heaviest streaking or growth.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
    </ServicePageShell>
}
