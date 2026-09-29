const deckProject = '/assets/project-media/08-deck-restoration-before-after.webp'
import { ServicePageShell } from './ServicePage'
import { useServicePageMetadata } from './servicePageUtils'

const estimateHref = '/estimate?service=deck-fence&location=port-clinton'

export function DeckRestorationProject() {
  useServicePageMetadata({
    title: 'Deck Restoration in Port Clinton | AquaBlast Pressure Washing',
    description: 'Port Clinton deck restoration project with stripping, sanding, moisture-aware drying, staining, and real before-and-after AquaBlast proof.',
    canonicalPath: '/projects/deck-restoration-port-clinton-ohio',
  })

  return <ServicePageShell estimateHref={estimateHref} className="project-page" headerChildren={<div className="location-header-note">Project · Port Clinton, Ohio</div>}>
      <section className="project-hero project-hero-current">
        <div className="project-hero-copy">
          <p className="kicker">Completed AquaBlast project · Port Clinton</p>
          <h1>Deck restoration in Port Clinton.</h1>
          <p>If your deck looks weathered, uneven, or overdue for attention, use this real Port Clinton project to compare the starting condition and finished result.</p>
          <div className="project-hero-actions">
            <a className="cta" href="#proof">See the before + after <span aria-hidden="true">↓</span></a>
            <a className="secondary project-secondary" href={estimateHref}>Show us your deck <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <aside className="project-hero-meta" aria-label="Project summary">
          <span>Service</span><b>Deck restoration</b>
          <span>Location</span><b>Port Clinton, Ohio</b>
          <span>Project budget</span><b>$2,600</b>
          <span>Product used</span><b>Stain and Seal Experts Natural</b>
          <span>Proof</span><b>Real before + after</b>
        </aside>
      </section>

      <figure className="project-hero-proof project-hero-proof-current">
        <img src={deckProject} alt="AquaBlast deck restoration before-and-after project in Port Clinton" width="1440" height="1440" loading="eager" decoding="async" fetchPriority="high" />
        <figcaption><span>Real AquaBlast project</span><b>Deck restoration · Port Clinton, OH</b></figcaption>
      </figure>

      <section className="project-summary" aria-labelledby="project-summary-title">
        <div><p className="kicker">Project details</p><h2 id="project-summary-title">Port Clinton deck restoration.</h2></div>
        <div className="project-facts">
          <article><span>Project</span><b>Deck restoration</b></article>
          <article><span>Location</span><b>Port Clinton, Ohio</b></article>
          <article><span>Photos</span><b>Before + after</b></article>
        </div>
        <p className="project-summary-copy">The live project record documents a peeling sealer, a site visit after an initial Facebook referral, stripping the failing coating, sanding, waiting for the wood to reach suitable moisture, and staining with Stain and Seal Experts Natural. If your deck or fence needs similar attention, send us photos of its current condition.</p>
      </section>

      <section className="project-result" id="proof">
        <div className="section-heading">
          <div><p className="kicker">Before + after</p><h2>Before and after the restoration.</h2></div>
          <p>These photos show the condition before the work and the finished result.</p>
        </div>
        <div className="project-result-grid">
          <figure className="project-crop project-before"><div><img src={deckProject} alt="Before view from the Port Clinton deck restoration project" width="1440" height="1440" loading="lazy" decoding="async" /></div><figcaption><span>Before</span><b>Port Clinton deck</b></figcaption></figure>
          <figure className="project-crop project-after"><div><img src={deckProject} alt="After view from the Port Clinton deck restoration project" width="1440" height="1440" loading="lazy" decoding="async" /></div><figcaption><span>After</span><b>Port Clinton deck</b></figcaption></figure>
        </div>
      </section>


      <section className="project-story-body project-deck-story" aria-labelledby="deck-restoration-process-title">
        <div><p className="kicker">How AquaBlast handled it</p><h2 id="deck-restoration-process-title">The old coating had to come off before the new finish could go on.</h2></div>
        <div>
          <p>The customer found AquaBlast through a local Facebook referral request and received a ballpark number before the on-site visit. The existing sealer was peeling in multiple areas, so this was not simply a wash-and-stain job.</p>
          <p>The project sequence preserved from the published job was stripping the failed coating, sanding the deck, allowing the wood to dry to an appropriate moisture level, and then applying the stain. The live project lists <b>Stain and Seal Experts Natural</b> as the product used.</p>
        </div>
      </section>

      <section className="project-story-plan project-deck-plan">
        <div>
          <p className="kicker">A simple plan</p>
          <h2>Use this project as a reference. Then show us yours.</h2>
          <p>You do not need to decide the restoration process yourself. Compare the condition, send the property details, and let AquaBlast review what the deck or fence actually needs.</p>
        </div>
        <ol>
          <li><b>01</b><span>Compare your deck or fence with the before-and-after project shown here.</span></li>
          <li><b>02</b><span>Send the property address and a few photos of the current condition.</span></li>
          <li><b>03</b><span>Review AquaBlast’s recommended service and scope before deciding.</span></li>
        </ol>
      </section>

      <section className="project-story-success" id="area">
        <div>
          <p className="kicker">What success looks like</p>
          <h2>Know what your deck needs before committing to the work.</h2>
          <p>The goal is a clear recommendation based on the actual condition of your deck or fence, the area involved, and the result you want—not a generic restoration package.</p>
          <div className="project-story-success-actions">
            <a className="cta" href={estimateHref}>Show us your project <span aria-hidden="true">→</span></a>
            <a className="secondary" href="/projects">See more completed work <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <aside>
          <p className="kicker">Continue exploring</p>
          <a href="/near-me/pressure-washing-port-clinton"><b>Port Clinton exterior cleaning</b><span>See Port Clinton services →</span></a>
          <a href="/wood-restoration"><b>Wood restoration</b><span>See wood restoration →</span></a>
        </aside>
      </section>
    </ServicePageShell>
}
