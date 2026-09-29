import { useMemo, useState } from 'react'
const deckCleaning = '/assets/project-media/06-deck-cleaning-before-after.webp'
const houseWashing = '/assets/project-media/07-house-washing-before-after.webp'
const deckRestoration = '/assets/project-media/08-deck-restoration-before-after.webp'
const roofCleaning = '/assets/project-media/10-port-clinton-roof-cleaning-project.webp'
const projectsHero = '/assets/project-media/house-washing-sandusky-live.jpg'
import { useServicePageMetadata } from './servicePageUtils'
import { ConceptBar } from './ServicePage'
import { SiteFooter, SiteHeader } from './sections'
import { liveProjectMedia } from '../data/liveProjectMedia'

const categories = ['All work', 'House washing', 'Deck + wood', 'Concrete + pavers', 'Roof + gutters', 'Commercial']

// A location is already given its own field on archive cards. Keep it in the
// route and metadata, but do not make readers process it twice in the card title.
const conciseProjectTitle = (title, location) => {
  const places = [...new Set(location.replace(/\u00a0/g, ' ').split('/').map((place) => place.replace(/,?\s*(?:OH|Ohio)\.?$/i, '').trim()).filter(Boolean))].sort((a, b) => b.length - a.length)
  const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  let concise = title.replace(/\u00a0/g, ' ')
  places.forEach((place) => { concise = concise.replace(new RegExp(`(?:\\b(?:in|on|around)\\s+)?${escapePattern(place)}(?:,?\\s*(?:Ohio|OH)\\.?)?`, 'gi'), '') })
  return concise.replace(/\s{2,}/g, ' ').replace(/\s+(?:in|on|around)\s*$/i, '').replace(/^[\s,–—-]+|[\s,–—-]+$/g, '')
}

const projects = [
  { title:'Deck Cleaning Sandusky Ohio', location:'Sandusky, OH', category:'Deck + wood', summary:'Deck cleaning completed ahead of future sanding and staining.', image:deckCleaning, href:'/projects/deck-cleaning-sandusky-ohio' },
  { title:'House Washing Oak Harbor Ohio', location:'Oak Harbor, OH', category:'House washing', summary:'House washing and composite-deck cleaning for a returning residential client.', image:houseWashing, href:'/projects/house-washing-oak-harbor' },
  { title:'Deck Restoration Port Clinton Ohio', location:'Port Clinton, OH', category:'Deck + wood', summary:'Deck restoration with before-and-after photos.', image:deckRestoration, href:'/projects/deck-restoration-port-clinton-ohio' },
  { title:'Port Clinton Roof Cleaning', location:'Port Clinton, OH', category:'Roof + gutters', summary:'Roof and gutter cleaning in Port Clinton.', image:roofCleaning, href:'/projects/port-clinton-roof-cleaning' },
  { title:'House Washing in Tiffin Ohio', location:'Tiffin, OH', category:'House washing', summary:'A spring house-washing project scheduled after landscaping work.', href:'/projects/house-washing-in-tiffin-ohio' },
  { title:'Gutter Cleaning Sandusky Ohio', location:'Sandusky, OH', category:'Roof + gutters', summary:'Gutter and downspout cleaning for a Sandusky property.', href:'/projects/gutter-cleaning-sandusky-ohio-' },
  { title:'Gutter Cleaning Bowling Green Ohio', location:'Bowling Green, OH', category:'Roof + gutters', summary:'Two-story gutter cleaning in Bowling Green.', href:'/projects/gutter-cleaning-bowling-green-ohio' },
  { title:'House Washing and Gutter Cleaning on Johnson’s Island', location:'Johnson’s Island, OH', category:'House washing', summary:'A multi-service property project including house, concrete, gutter, and retaining-wall cleaning.', href:'/projects/house-washing-and-gutter-cleaning-on-johnsons-island-' },
  { title:'Deck Washing and Concrete Cleaning in Port Clinton Ohio', location:'Port Clinton, OH', category:'Concrete + pavers', summary:'Deck washing paired with concrete cleaning at a Port Clinton property.', href:'/projects/deck-washing-and-concrete-cleaning-in-port-clinton-ohio' },
  { title:'Concrete Cleaning / Sealing on Johnson’s Island Ohio', location:'Johnson’s Island, OH', category:'Concrete + pavers', summary:'Concrete and retaining-wall cleaning on Johnson’s Island.', href:'/projects/concrete-cleaningsealing-on-johnsons-island-ohio' },
  { title:'Concrete Cleaning and House Washing in Marblehead, OH', location:'Marblehead, OH', category:'Concrete + pavers', summary:'House washing and concrete cleaning at a lake-area property.', href:'/projects/concrete-cleaning-and-house-washing-in-marblehead-oh' },
  { title:'House Washing and Concrete Cleaning in Vickery, OH', location:'Vickery, OH', category:'House washing', summary:'A summer lake-home project covering the house and concrete.', href:'/projects/house-washing-concrete-cleaning-vickery-oh' },
  { title:'Concrete Cleaning and Sealing in Port Clinton, OH', location:'Port Clinton, OH', category:'Concrete + pavers', summary:'Cleaning and sealing work on concrete that had not been serviced in several years.', href:'/projects/concrete-cleaning-port-clinton-oh' },
  { title:'House Washing and Gutter Cleaning in Kelleys Island, OH', location:'Kelleys Island, OH', category:'House washing', summary:'Island house and gutter cleaning coordinated around ferry access.', href:'/house-washing-gutter-cleaning-kelleys-island-oh' },
  { title:'Condo Washing in Marblehead, OH', location:'Marblehead, OH', category:'House washing', summary:'Repeat exterior condo and garage cleaning using a soft-wash process.', href:'/projects/condo-washing-marblehead-oh' },
  { title:'Commercial Concrete Cleaning in Port Clinton, OH', location:'Port Clinton, OH', category:'Commercial', summary:'Commercial concrete cleaning completed ahead of an annual inspection.', href:'/projects/comercila-concrete-cleaning-port-clinton-oh' },
  { title:'Commercial Office Building Cleaning in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', category:'Commercial', summary:'Commercial building cleaning in Lakeside Marblehead.', href:'/projects/commercial-office-building-cleaning-lakeside-marblehead-OH' },
  { title:'Marblehead Paver Cleaning / Sanding / Sealing', location:'Lakeside, OH', category:'Concrete + pavers', summary:'Paver patio and driveway cleaning, sanding, sealing, and follow-up.', href:'/projects/marblehead-oh-paver-cleaning-sansing-sealing' },
  { title:'House, Window, and Concrete Washing in Marblehead, OH', location:'Marblehead, OH', category:'House washing', summary:'A multi-surface residential visit covering house, concrete, and exterior windows.', href:'/projects/house-window-concrete-washing-marblehead-ohio' },
  { title:'Catawba Island Ohio House Washing', location:'Catawba Island, OH', category:'House washing', summary:'A house wash with documented organic buildup addressed during the visit.', href:'/projects/catawba-island-ohio-house-washing' },
  { title:'House Washing in Port Clinton, OH', location:'Port Clinton, OH', category:'House washing', summary:'A time-sensitive completed job completed ahead of a customer gathering.', href:'/projects/house-washing-in-port-clinton-oh' },
  { title:'House Washing in Port Clinton, OH', location:'Port Clinton, OH', category:'House washing', summary:'Recurring waterfront house washing after an earlier spring house-and-window visit.', href:'/projects/house-washing-port-clinton-oh' },
  { title:'Marblehead House Wash, Concrete Cleaning and Sealing', location:'Marblehead, OH', category:'Concrete + pavers', summary:'House washing plus concrete cleaning and weather-dependent sealing.', href:'/projects/marblehead-house-wash-concrete-cleaning-sealing' },
  { title:'Tire Mark Removal in Marblehead Ohio', location:'Marblehead, OH', category:'Commercial', summary:'Hot-water removal of equipment tire marks from a commercial sidewalk.', href:'/projects/tire-mark-removal-in-marblehead-ohio' },
  { title:'House Washing in Sandusky Ohio', location:'Sandusky, OH', category:'House washing', summary:'Residential soft washing completed with neighboring properties close by.', href:'/projects/house-washing-in-sandusky-ohio' },
  { title:'Concrete and Gutter Cleaning in Oak Harbor, OH', location:'Oak Harbor, OH', category:'Concrete + pavers', summary:'Concrete and gutter cleaning after a customer purchased the property.', href:'/projects/concrete-gutter-cleaning-oak-harbor-oh' },
  { title:'Deck & Maintenance Paver Cleaning in Lakeside, Ohio', location:'Lakeside, OH', category:'Deck + wood', summary:'Pavers, fence, deck, and retaining-wall cleaning for a recurring customer.', href:'/projects/deck-maintenance-paver-cleaning-in-lakeside-ohio' },
  { title:'House, Paver, and Exterior Window Cleaning in Marblehead Ohio', location:'Marblehead, OH', category:'House washing', summary:'A recently purchased property combining house, paver, and exterior-window cleaning.', href:'/projects/house-paver-and-exterior-window-cleaning-in-marblehead-ohio' },
  { title:'House, Concrete, Deck and Exterior Window Cleaning in Gibsonburg Ohio', location:'Gibsonburg, OH', category:'Deck + wood', summary:'A Gibsonburg project covering the driveway, sidewalks, stoop, rear deck, house, and exterior windows.', href:'/projects/house-concrete-deck-cleaning-exterior-window-cleaning-project-in-gibsonburg-ohio' },
  { title:'Top Quality Roof Cleaning in Port Clinton Ohio', location:'Port Clinton, OH', category:'Roof + gutters', summary:'A Port Clinton project combining roof, gutter, driveway, and sidewalk cleaning before a future home sale.', href:'/projects/top-quality-roof-cleaning-in-port-clinton-ohio' },
  { title:'House Washing Marblehead Ohio', location:'Marblehead, OH', category:'House washing', summary:'A Marblehead homeowner used photos and the online quote process to schedule a house wash for a time they could be home.', href:'/projects/house-washing-marblehead-ohio' },
  { title:'Concrete Cleaning in Port Clinton, Ohio', location:'Port Clinton, OH', category:'Concrete + pavers', summary:'A repeat Port Clinton customer scheduled stoop, walkway, and driveway concrete cleaning.', href:'/projects/concrete-cleaning-in-port-clinton-ohio' },
  { title:'Concrete, Deck, and Window Cleaning in Oak Harbor, Ohio', location:'Oak Harbor, OH', category:'Deck + wood', summary:'A long-time Oak Harbor customer combined deck, gazebo, concrete, and window cleaning in one annual visit.', href:'/projects/concrete-deck-and-window-cleaning-in-oak-harbor-ohio' },
  { title:'Concrete Cleaning in Port Clinton, OH', location:'Port Clinton, OH', category:'Deck + wood', summary:'A Port Clinton project combining concrete patio cleaning with deck preparation before staining.', href:'/projects/concrete-cleaning-in-port-clinton-oh' },
  { title:'House Washing in Oak Harbor, Ohio', location:'Oak Harbor, OH', category:'Deck + wood', summary:'A repeat Oak Harbor customer combined house washing, deck cleaning, and patio cleaning across two family properties.', href:'/projects/house-washing-oak-harbor-ohio' },
  { title:'House Washing and Window Cleaning in Marblehead, OH', location:'Marblehead, OH', category:'House washing', summary:'A newly purchased Marblehead home received house washing and exterior window cleaning on a quickly scheduled Saturday visit.', href:'/projects/house-washing-window-cleaning-marblehead-oh' },
  { title:'House Washing in Oak Harbor, OH', location:'Oak Harbor, OH', category:'House washing', summary:'An Oak Harbor homeowner requested a mailed quote and scheduled a standard residential house wash.', href:'/projects/house-washing-oak-harbor-oh' },
  { title:'Deck Staining in Catawba Island, OH', location:'Catawba Island, OH', category:'Deck + wood', summary:'A Catawba Island deck was cleaned, sanded, and finished with a clear stain in a staged restoration process.', href:'/projects/deck-staining-in-catawba-island-oh' },
  { title:'Deck Cleaning in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', category:'Deck + wood', summary:'A Lakeside Marblehead deck was cleaned after several seasons of buildup and prepared for summer use.', href:'/projects/deck-cleaning-lakeside-marblehead-oh' },
  { title:'House Washing in Lakeside Marblehead, Ohio', location:'Lakeside Marblehead, OH', category:'Roof + gutters', summary:'A next-day Lakeside Marblehead project covering the house, gutters, railing, composite deck, concrete, and landscape rock.', href:'/projects/house-washing-in-lakeside-marblehead-ohio' },
  { title:'Gutter Cleaning in Oak Harbor, OH', location:'Oak Harbor, OH', category:'Roof + gutters', summary:'An Oak Harbor gutter-cleaning visit included clearing a clogged downspout and removing a full bag of debris.', href:'/projects/gutter-cleaning-oak-harbor-oh' },
  { title:'Roof Cleaning in Marblehead, OH', location:'Marblehead, OH', category:'Roof + gutters', summary:'A Marblehead roof-and-house project where the customer was told that moss removal continues gradually after treatment.', href:'/projects/roof-cleaning-marblehead-oh' },
  { title:'House Wash on Cherry Avenue in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', category:'House washing', summary:'A Lakeside Marblehead house wash where the crew first considered whether faded aluminum siding showed oxidation.', href:'/projects/house-wash-cherry-ave-lakeside-marblehead-oh' },
  { title:'Concrete Cleaning, Sealing, and Oxidation Removal in Clinton, OH', location:'Catawba Island / Clinton, OH', category:'Concrete + pavers', summary:'A lake-home project combining oxidation treatment on siding with cleaning and sealing stamped concrete.', href:'/projects/concrete-cleaning-sealing-oxidation-removal-clinton-oh' },
  { title:'Stucco Exterior Cleaning in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', category:'House washing', summary:'A Lakeside Marblehead lake home and its exterior windows were cleaned after several years without service.', href:'/projects/exterior-stucco-window-cleaning-lakeside-marblehead-OH' },
  { title:'House Washing and Gutter Cleaning on East Lucas St in Castalia', location:'Castalia, OH', category:'Roof + gutters', summary:'A Castalia house-and-gutter project focused in part on organic growth along the chimney side of the home.', href:'/house-washing-gutter-cleaning-east-lucas-st-castalia' },
  { title:'Deck Soft Washing on Northern Avenue in Lakeside Marblehead', location:'Lakeside Marblehead, OH', category:'Deck + wood', summary:'A Lakeside Marblehead homeowner asked whether a wood deck could be cleaned even without plans to repaint it.', href:'/deck-soft-washing-northern-avenue-lakeside-marblehead' },
  { title:'Paver Sealing on Confederate Dr. in Lakeside Marblehead', location:'Lakeside Marblehead, OH', category:'Concrete + pavers', summary:'A heavily overgrown paver patio was cleaned, re-sanded, and sealed with a two-part sealer.', href:'/paver-sealing-confederate-dr-lakeside-marblehead' },
]

export function ProjectsArchive() {
  const [category, setCategory] = useState('All work')
  const [location, setLocation] = useState('All locations')

  useServicePageMetadata({
    title: 'AquaBlast Project Archive | Exterior Cleaning Work',
    description: 'Browse AquaBlast exterior-cleaning projects by service and location across Northwest Ohio and Lake Erie communities.',
    canonicalPath: '/projects',
  })

  const projectsWithMedia = useMemo(() => projects.map((project) => ({ ...project, media: liveProjectMedia[project.href]?.[0] || (project.image ? { src:project.image, alt:`${project.title} project photograph` } : null) })), [])
  const locations = useMemo(() => ['All locations', ...Array.from(new Set(projectsWithMedia.map(project => project.location))).sort()], [projectsWithMedia])
  const filtered = useMemo(() => projectsWithMedia.filter(project => (category === 'All work' || project.category === category) && (location === 'All locations' || project.location === location)), [category, location, projectsWithMedia])
  return <div className="projects-page" id="top">
    <a className="skip" href="#main">Skip to content</a>
    <ConceptBar />
    <SiteHeader areasHref="/near-me" />

    <main id="main">
      <section className="projects-hero">
        <img className="projects-hero-media" src={projectsHero} alt="Real AquaBlast house-washing project showing a documented before-and-after change in Sandusky" width="1440" height="1440" loading="eager" decoding="async" fetchPriority="high" />
        <div className="projects-hero-scrim" aria-hidden="true" />
        <div className="projects-hero-copy"><p className="kicker">Completed AquaBlast work</p><h1>Find a job like yours.<br /><em>See what changed.</em></h1><p>Start with the service, surface, or community that looks closest to your property. Then open a completed job to see the work AquaBlast documented.</p><div className="projects-hero-actions"><a className="cta" href="#archive">Browse completed work <span aria-hidden="true">↓</span></a><a className="secondary" href="/estimate?source=projects%3Ahero">Show us your property <span aria-hidden="true">→</span></a></div></div>
        <aside className="projects-hero-proof" aria-label="Completed project summary"><b>{projects.length}</b><span>completed jobs in the archive</span><p>House washing, roofs, concrete, decks, pavers, gutters, commercial work, and more.</p></aside>
      </section>

      <section className="projects-paths" aria-labelledby="projects-paths-title">
        <div><p className="kicker">Start with what you recognize</p><h2 id="projects-paths-title">You do not need to know the service name first.</h2><p>Use the archive three ways: by the surface that needs attention, by a nearby community, or by a completed job that simply looks similar to your property.</p></div>
        <div className="projects-path-grid">
          <a href="#archive"><span>01</span><b>Start with the surface</b><p>House, roof, gutter, concrete, deck, pavers, windows, or commercial exterior work.</p><small>Filter by service ↓</small></a>
          <a href="#archive"><span>02</span><b>Start with the community</b><p>Use the location filter to find jobs completed around Northwest Ohio and the Lake Erie area.</p><small>Filter by location ↓</small></a>
          <a href="/estimate?source=projects%3Arecognition"><span>03</span><b>Or just show us the property</b><p>If none of the labels fit neatly, send the address and photos. AquaBlast can help define the scope.</p><small>Get an estimate →</small></a>
        </div>
      </section>

      <section className="projects-featured-proof" aria-labelledby="projects-featured-proof-title">
        <header><div><p className="kicker">A few different kinds of work</p><h2 id="projects-featured-proof-title">See the range of work AquaBlast handles.</h2></div><p>Compare real jobs across different surfaces, then narrow the list to work closer to your property.</p></header>
        <div className="projects-featured-proof-grid">
          <a href="/projects/house-washing-oak-harbor"><img src={houseWashing} alt="AquaBlast house washing before and after in Oak Harbor" loading="lazy" decoding="async" /><span>House washing</span><b>Oak Harbor</b><small>Open project →</small></a>
          <a href="/projects/deck-restoration-port-clinton-ohio"><img src={deckRestoration} alt="AquaBlast deck restoration before and after in Port Clinton" loading="lazy" decoding="async" /><span>Deck restoration</span><b>Port Clinton</b><small>Open project →</small></a>
          <a href="/projects/port-clinton-roof-cleaning"><img src={roofCleaning} alt="AquaBlast roof cleaning project in Port Clinton" loading="lazy" decoding="async" /><span>Roof + gutters</span><b>Port Clinton</b><small>Open project →</small></a>
        </div>
      </section>

      <section className="projects-browser" id="archive">
        <div className="projects-browser-head"><div><p className="kicker">Completed work</p><h2>Find work similar to your property.</h2></div><p>Choose a service or community, then open a job to see the details available from that visit.</p></div>
        <div className="project-filters" aria-label="Filter project archive">
          <div className="project-filter-chips" role="group" aria-label="Filter by service type">{categories.map(item => <button type="button" key={item} className={category === item ? 'active' : ''} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
          <label>Location<select value={location} onChange={event => setLocation(event.target.value)}>{locations.map(item => <option value={item} key={item}>{item}</option>)}</select></label>
        </div>
        <p className="project-filter-count" aria-live="polite">{filtered.length} of {projects.length} jobs shown.</p>
        <div className="project-card-grid" aria-label="Completed project cards">
          {filtered.map((project, index) => <a className="results-showcase-card project-browser-card" href={project.href} key={project.href}>
            <div className="results-showcase-media">{project.media ? <img src={project.media.src} alt={project.media.alt} loading={index < 4 ? 'eager' : 'lazy'} decoding="async" /> : <div className="project-browser-card-placeholder" aria-hidden="true">{project.category}</div>}</div>
            <div className="results-showcase-copy"><span>{project.category}</span><div><b>{conciseProjectTitle(project.title, project.location)}</b><small>{project.location}</small></div><i aria-hidden="true">↗</i></div>
          </a>)}
        </div>
      </section>

      <section className="projects-seo-note"><div><p className="kicker">Work around the area</p><h2>Use nearby jobs to compare the work your property may need.</h2></div><div><p>Open a job to see where it was, what was cleaned, and the details available from the visit.</p><p>If you see something similar to your property, send us a few photos and tell us what you want cleaned.</p></div></section>

      <section className="service-final projects-final"><div><p className="kicker">See something similar?</p><h2>Send us photos of your property.</h2><p>Tell us what needs cleaning, add the property address, and include a few photos.</p></div><a className="cta" href="/estimate?source=projects%3Afinal">Get an estimate <span aria-hidden="true">→</span></a></section>
    </main>

    <SiteFooter />
    <nav className="mobile-dock" aria-label="Mobile quick actions"><a className="dock-estimate" href="/estimate?source=projects%3Amobile-dock">Get an estimate</a><a className="dock-call" href="tel:4196356961">Call AquaBlast</a></nav>
  </div>
}
