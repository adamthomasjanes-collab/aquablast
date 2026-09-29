const woodHero = '/assets/project-media/06-deck-cleaning-before-after.webp'
const portClintonRestoration = '/assets/live-projects/projects-deck-restoration-port-clinton-ohio/01-721087bd6e24434c20230622-184-oz2b52-jpg.jpg'
const catawbaStaining = '/assets/live-projects/projects-deck-staining-in-catawba-island-oh/01-deck-staining-in-catawba-island-oh-jpg.jpg'
const lakesideCleaning = '/assets/live-projects/projects-deck-cleaning-lakeside-marblehead-oh/01-lakeside-deck-cleaning-1-jpg.jpg'
import { ServiceAreaBand, ServiceFinalCta, ServiceHero, ServiceReview, ServicePageShell } from './ServicePage'
import { estimateFor, useServicePageMetadata } from './servicePageUtils'

const estimateHref = estimateFor('wood-restoration')

export function WoodRestoration(){
  useServicePageMetadata({title:'Wood Restoration in Marblehead | Deck Cleaning & Restoration',description:'Deck cleaning and wood restoration in Marblehead and across nearby Northwest Ohio and Lake Erie communities.',canonicalPath:'/wood-restoration'})
  return <ServicePageShell estimateHref={estimateHref} className="wood-page">
    <ServiceHero className="wood-hero" image={woodHero} alt="Before-and-after AquaBlast deck cleaning project" eyebrow="Wood restoration · decks + exterior wood" title="Care for the wood." flavor="Plan what comes next."><p>Cleaning is sometimes the finish. Other times it is the first step before sanding, staining, or sealing.</p><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceHero>

    <section className="wood-recognition" aria-labelledby="wood-recognition-title">
      <div className="wood-recognition__title"><p className="kicker">A different surface</p><h2 id="wood-recognition-title">Wood needs a different plan than concrete or siding.</h2></div>
      <div className="wood-recognition__signals"><article><span>01</span><b>Weathered color</b><p>Sun, moisture, traffic, and time can leave exterior wood looking gray, dull, or uneven.</p></article><article><span>02</span><b>Old coatings</b><p>Existing stain or sealer changes what can happen next and may need to be stripped before refinishing.</p></article><article><span>03</span><b>A next-step goal</b><p>Cleaning for summer use is a different scope from preparing wood for sanding, staining, or sealing.</p></article></div>
    </section>

    <section className="wood-decision" aria-labelledby="wood-decision-title">
      <figure className="wood-decision__media"><img src={catawbaStaining} alt="Before-and-after deck staining project on Catawba Island" loading="lazy" decoding="async" /><figcaption>Real AquaBlast project · Catawba Island</figcaption></figure>
      <div className="wood-decision__copy"><p className="kicker">Cleaning or restoration?</p><h2 id="wood-decision-title">The right scope depends on what is already on the wood and what you want it to become.</h2><p>A cleaning-only job can remove buildup and prepare a deck for later work. A fuller restoration may include stripping an existing finish, cleaning, brightening, drying, sanding, and then applying the agreed stain or sealer.</p><div className="wood-decision__choices"><article><b>Clean + refresh</b><span>For buildup, seasonal maintenance, or preparation before later finishing.</span></article><article><b>Restore + finish</b><span>For projects where coating removal, surface preparation, sanding, staining, or sealing are part of the plan.</span></article></div></div>
    </section>

    <section className="service-process wood-process" aria-labelledby="wood-process-title"><div><p className="kicker">Restoration sequence</p><h2 id="wood-process-title">A restoration job is a sequence, not one wash pass.</h2></div><ol><li><b>01</b><span>Evaluate + clean</span><p>Wood species, existing coating, weathering, and the intended finish shape the preparation plan.</p></li><li><b>02</b><span>Prepare the surface</span><p>Depending on the project, preparation can include stripping, brightening, drying, and sanding before finishing.</p></li><li><b>03</b><span>Finish for the goal</span><p>Stain or sealer follows the wood condition and the agreed restoration scope rather than a one-size-fits-all recipe.</p></li></ol></section>

    <section className="wood-proof" id="proof" aria-labelledby="wood-proof-title">
      <header><div><p className="kicker">Real AquaBlast wood work</p><h2 id="wood-proof-title">Cleaning, preparation, and restoration in real projects.</h2></div><p>These project records show different levels of wood care instead of treating every deck like the same job.</p></header>
      <div className="wood-proof-grid">
        <a className="wood-proof-card wood-proof-card--feature" href="/projects/deck-restoration-port-clinton-ohio"><figure><div className="wood-proof-media"><img src={portClintonRestoration} alt="Before-and-after deck restoration project in Port Clinton" loading="lazy" decoding="async" /></div><figcaption><span>Port Clinton, OH</span><b>Deck restoration</b><small>Completed restoration project →</small></figcaption></figure></a>
        <a className="wood-proof-card" href="/projects/deck-staining-in-catawba-island-oh"><figure><div className="wood-proof-media"><img src={catawbaStaining} alt="Before-and-after deck staining project on Catawba Island" loading="lazy" decoding="async" /></div><figcaption><span>Catawba Island, OH</span><b>Clean, sand + stain</b><small>Multi-stage restoration →</small></figcaption></figure></a>
        <a className="wood-proof-card" href="/projects/deck-cleaning-lakeside-marblehead-oh"><figure><div className="wood-proof-media"><img src={lakesideCleaning} alt="Before-and-after deck cleaning project in Lakeside Marblehead" loading="lazy" decoding="async" /></div><figcaption><span>Lakeside Marblehead, OH</span><b>Deck cleaning</b><small>Seasonal deck refresh →</small></figcaption></figure></a>
      </div>
    </section>

    <ServiceReview quote="I had this company wash down the house before I started painting, restaining cedar shakes, and it turned out great." context="Jim Wessel · Google review · prep before refinishing" />

    <ServiceAreaBand><p className="kicker">Regional service</p><h2>Deck and wood work across Northwest Ohio and Lake Erie communities.</h2><p>Completed wood projects include Port Clinton, Catawba Island, Lakeside Marblehead, Sandusky, and nearby communities.</p><div className="editorial-actions"><a className="secondary" href="/near-me">See all service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/pressure-washing-tips/how-to-keep-your-wood-deck-maintained">Deck-maintenance guide <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">View projects <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Have a deck or wood surface in mind?</p><h2>Show us the condition and what you want next.</h2><p>Send a wide view plus closer photos of weathering, coatings, failing finish, or problem areas.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}
