const windowHero = '/assets/ai-window-cleaning-hero-v1.png'
const marbleheadWindows = '/assets/live-projects/projects-house-washing-window-cleaning-marblehead-oh/01-house-washing-window-cleaning-1-jpg.jpg'
const oakHarborWindows = '/assets/live-projects/projects-concrete-deck-and-window-cleaning-in-oak-harbor-ohio/01-cover-photo-2-jpg.jpg'
const gibsonburgWindows = '/assets/live-projects/projects-house-concrete-deck-cleaning-exterior-window-cleaning-project-in-gibsonburg-ohio/01-down-net-http20240427-106-a8b3kz-jpg.jpg'
const marbleheadMulti = '/assets/live-projects/projects-house-window-concrete-washing-marblehead-ohio/01-house-concrete-windows-jpg.jpg'
import { ServiceAreaBand, ServiceFinalCta, ServiceHero, ServiceReview, ServicePageShell } from './ServicePage'
import { estimateFor, useServicePageMetadata } from './servicePageUtils'

const estimateHref = estimateFor('window-cleaning')

export function WindowCleaning(){
  useServicePageMetadata({title:'Exterior Window Cleaning in Marblehead | AquaBlast Pressure Washing',description:'Exterior window cleaning for homes and properties in Marblehead and across nearby Northwest Ohio and Lake Erie communities.',canonicalPath:'/window-cleaning'})
  return <ServicePageShell estimateHref={estimateHref} className="window-page">
    <ServiceHero className="window-hero" image={windowHero} alt="Sunlit waterfront home with crystal-clear exterior windows in the Lake Erie area" eyebrow="Exterior window cleaning · Northwest Ohio + Lake Erie" title="Exterior window cleaning." flavor="Finish the view."><p>Clean siding can still look unfinished when the glass is streaked or dull. Exterior window cleaning can stand alone or finish a broader exterior-cleaning visit.</p><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceHero>

    <section className="window-recognition" aria-labelledby="window-recognition-title">
      <div className="window-recognition__title"><p className="kicker">When the glass stands out</p><h2 id="window-recognition-title">The rest of the exterior can be clean and the windows still pull the eye.</h2></div>
      <div className="window-recognition__points" aria-label="Common exterior window-cleaning concerns">
        <article><span>01</span><b>Streaks + residue</b><p>Dirt, hard-water residue, acid rain, webs, and exterior buildup can leave the glass looking dull.</p></article>
        <article><span>02</span><b>Height + access</b><p>Stories, landscaping, screens, and access points help determine how the work should be planned.</p></article>
        <article><span>03</span><b>The final finish</b><p>Window cleaning is often the last visual step after house washing or other exterior work.</p></article>
      </div>
    </section>

    <section className="window-proof" id="proof" aria-labelledby="window-proof-title">
      <header><div><p className="kicker">Real AquaBlast projects</p><h2 id="window-proof-title">Window cleaning is usually part of the whole property story.</h2></div><p>These completed jobs show exterior-window cleaning paired with house washing, concrete, decks, and pavers around the service area.</p></header>
      <div className="window-proof-grid">
        <a className="window-proof-card window-proof-card--feature" href="/projects/house-washing-window-cleaning-marblehead-oh"><figure><div className="window-proof-media window-proof-media--portrait"><img src={marbleheadWindows} alt="Before and after house washing and exterior window cleaning in Marblehead" loading="lazy" decoding="async" /></div><figcaption><span>Marblehead, OH</span><b>House washing + exterior windows</b><small>Recently purchased home · open project →</small></figcaption></figure></a>
        <a className="window-proof-card" href="/projects/concrete-deck-and-window-cleaning-in-oak-harbor-ohio"><figure><div className="window-proof-media window-proof-media--square"><img src={oakHarborWindows} alt="Concrete, deck, gazebo, and exterior window cleaning in Oak Harbor" loading="lazy" decoding="async" /></div><figcaption><span>Oak Harbor, OH</span><b>Exterior windows + property cleanup</b><small>Concrete, deck, gazebo + glass →</small></figcaption></figure></a>
        <a className="window-proof-card" href="/projects/house-concrete-deck-cleaning-exterior-window-cleaning-project-in-gibsonburg-ohio"><figure><div className="window-proof-media window-proof-media--square"><img src={gibsonburgWindows} alt="House, concrete, deck, and exterior window cleaning in Gibsonburg" loading="lazy" decoding="async" /></div><figcaption><span>Gibsonburg, OH</span><b>Multi-surface exterior cleaning</b><small>House, concrete, deck + windows →</small></figcaption></figure></a>
      </div>
    </section>

    <section className="window-plan" aria-labelledby="window-plan-title">
      <div className="window-plan__copy"><p className="kicker">A simple plan</p><h2 id="window-plan-title">Show us the glass. We’ll plan the sequence.</h2><p>Exterior window cleaning can be scheduled on its own, but it often makes the most sense as the finishing step after nearby surfaces have been washed.</p><a className="secondary" href={estimateHref}>Start with photos <span aria-hidden="true">→</span></a></div>
      <ol className="window-plan__steps"><li><b>01</b><span>Show us the windows</span><p>Include the building height, screens, landscaping, and anything that could affect access.</p></li><li><b>02</b><span>Coordinate the work</span><p>If house, roof, deck, or concrete cleaning is happening too, we sequence the services around the glass.</p></li><li><b>03</b><span>Finish the exterior</span><p>The goal is clean exterior glass without substituting aggressive pressure for the right process.</p></li></ol>
    </section>

    <section className="window-scope" aria-labelledby="window-scope-title">
      <div className="window-scope__visual"><img src={marbleheadMulti} alt="AquaBlast multi-surface house, window, and concrete cleaning project in Marblehead" loading="lazy" decoding="async" /><span>Real AquaBlast project · Marblehead</span></div>
      <div className="window-scope__copy"><p className="kicker">What to know before service</p><h2 id="window-scope-title">A few details make the estimate easier.</h2><div className="window-scope__facts"><article><b>Exterior glass</b><p>Residential exterior window cleaning focuses on the outside surface of the glass.</p></article><article><b>Remove screens</b><p>AquaBlast’s current estimate guidance asks residential customers to remove screens before service.</p></article><article><b>Window-by-window assessment</b><p>Visible frame or structural concerns are evaluated rather than assuming every opening is identical.</p></article><article><b>Commercial glass too</b><p>Need workplace or customer-facing glass? <a href="/commercial-pressure-washing/window-cleaning">See commercial window cleaning.</a></p></article></div></div>
    </section>

    <ServiceReview quote="The follow-through and communication were outstanding. Our house and windows look so clean now." context="Dianne Trusdle · Google review · house + windows" />

    <ServiceAreaBand><p className="kicker">Regional service</p><h2>Exterior window cleaning across Northwest Ohio and the Lake Erie area.</h2><p>From Marblehead and Port Clinton to Oak Harbor, Gibsonburg, Sandusky, and nearby communities.</p><div className="editorial-actions"><a className="secondary" href="/near-me">See all service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/pressure-washing-tips/streak-free-exterior-window-cleaning-tips-for-lakefront-homes">Lakefront window guide <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Want the glass included?</p><h2>Show us the windows and the property.</h2><p>Send photos of the windows, building height, and anything that could make access difficult.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}
