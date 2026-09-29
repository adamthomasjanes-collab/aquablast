import { ConceptBar } from './ServicePage'
import { Footer, SiteHeader } from './sections'
import { useServicePageMetadata } from './servicePageUtils'
import { LeadMagnetCapture } from './LeadMagnetCapture'

const seasons = [
  ['Spring', [
    'Walk the property after winter and note siding, roof, gutter, concrete, deck, and fence buildup.',
    'Check gutters and downspouts from the ground for visible overflow, debris, or drainage problems.',
    'Photograph stained, shaded, or hard-to-reach areas so you can compare them later or request an estimate.',
    'Look at patios, walks, and driveways for dark buildup, organic growth, and areas that stay damp.',
  ]],
  ['Summer', [
    'Check shaded sides of the house, decks, fences, and outdoor living areas where growth can return quickly.',
    'Look over windows, trim, gutters, and high exterior details that are easy to miss from up close.',
    'Before gatherings or busy lake weekends, note the high-visibility areas you most want cleaned.',
  ]],
  ['Fall', [
    'After leaves drop, check gutter flow and downspout discharge from the ground.',
    'Note roof streaks, siding buildup, and slippery-looking hard surfaces before winter weather arrives.',
    'Photograph anything you want addressed in spring so the details are not forgotten over winter.',
  ]],
  ['Winter / off-season', [
    'Avoid climbing onto icy roofs or unsafe ladders. Use ground-level observation whenever possible.',
    'Plan spring work early if you already know you want the house, concrete, roof, deck, or windows cleaned.',
    'Keep a short photo folder of problem areas so an estimate can start with useful context.',
  ]],
]

export function ExteriorCareChecklist() {
  useServicePageMetadata({
    title: 'Seasonal Exterior Care Checklist | AquaBlast Pressure Washing',
    description: 'A simple seasonal exterior-care checklist for Northwest Ohio and Lake Erie homeowners, plus a printable PDF and photo tips for requesting an estimate.',
    canonicalPath: '/exterior-care-checklist',
  })

  return <div className="site guide-page" id="top">
    <a className="skip" href="#main">Skip to content</a>
    <ConceptBar />
    <SiteHeader areasHref="/#areas" />
    <main id="main">
      <section className="guide-hero">
        <div>
          <p className="kicker">Free homeowner resource</p>
          <h1>Walk the property now. <em>Know what to watch later.</em></h1>
          <p>A simple seasonal walk-around guide for Northwest Ohio and Lake Erie homeowners. No ladder or roof climbing required.</p>
          <div className="guide-actions">
            <a className="secondary" href="#get-checklist">Get the printable PDF <span aria-hidden="true">↓</span></a>
            <a className="cta" href="/estimate?source=guide%3Ahero">Show us what needs cleaning <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <aside>
          <b>Why keep this?</b>
          <p>It gives you one place to note buildup, drainage issues, high-visibility areas, and photos you may want to send when you request an estimate.</p>
        </aside>
      </section>

      <section className="guide-lead-capture" aria-label="Get the printable exterior-care checklist">
        <LeadMagnetCapture source="guide:download" />
      </section>

      <section className="guide-checklist" aria-label="Seasonal exterior care checklist">
        {seasons.map(([season, items]) => <article key={season}>
          <h2>{season}</h2>
          <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </section>

      <section className="guide-photo-tip">
        <div><p className="kicker">When you want an estimate</p><h2>Three photos can make the first conversation easier.</h2></div>
        <ol>
          <li><b>01</b><span>One wide photo</span><p>Show the whole area or side of the property.</p></li>
          <li><b>02</b><span>One closer photo</span><p>Show the buildup, stain, growth, or surface condition.</p></li>
          <li><b>03</b><span>One access photo</span><p>Show gates, landscaping, height, or anything that affects access.</p></li>
        </ol>
      </section>

      <section className="guide-final">
        <div><p className="kicker">Ready when you are</p><h2>Keep the checklist. Send the photos when you want us to take a look.</h2></div>
        <a className="cta" href="/estimate?source=guide%3Afinal">Get an estimate <span aria-hidden="true">→</span></a>
      </section>
    </main>
    <Footer />
    <nav className="mobile-dock" aria-label="Mobile quick actions"><a className="dock-estimate" href="/estimate?source=guide%3Amobile-dock">Get an estimate</a><a className="dock-call" href="tel:4196356961">Call AquaBlast</a></nav>
  </div>
}
