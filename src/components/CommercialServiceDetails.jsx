const commercialHero = '/assets/concept-service-commercial-v1.webp'
const storefrontHero = '/assets/generated/commercial-storefront-cleaning-hero-v1.webp'
const buildingHero = '/assets/generated/commercial-building-washing-hero-v1.webp'
const commercialWindowHero = '/assets/generated/commercial-window-cleaning-hero-v1.webp'
const parkingHero = '/assets/generated/commercial-parking-lot-hero-v1.webp'
const workTruck = '/assets/project-media/01-branded-aqua-blast-work-truck-homepage-banner.webp'
const dumpsterHeroGenerated = '/assets/generated/dumpster-pad-hero-v2.webp'
const dumpsterContextGenerated = '/assets/generated/dumpster-pad-context-v2.webp'
const dumpsterSurfaceGenerated = '/assets/generated/dumpster-pad-surface-generated.png'
const fleetHeroGenerated = '/assets/generated/fleet-washing-hero-v2.webp'
const fleetStagingGenerated = '/assets/generated/fleet-washing-staging-generated.png'
const fleetLineupGenerated = '/assets/generated/fleet-washing-lineup-generated.png'
const parkingContextGenerated = '/assets/concept-concrete-cleaning-hero-v1.png'
const parkingCommercialConcrete = '/assets/live-projects/projects-comercila-concrete-cleaning-port-clinton-oh/01-commercial-concrete-cleaning-port-clinton-jpg.jpg'
const storefrontTireProof = '/assets/live-projects/projects-tire-mark-removal-in-marblehead-ohio/01-down-net-http20240427-58-suuri9-jpg.jpg'
const commercialWindowProject = '/assets/live-projects/projects-exterior-stucco-window-cleaning-lakeside-marblehead-oh/01-window-cleaning-marblehead-jpg.jpg'
import { ServiceAreaBand, ServiceFinalCta, ServiceHero, ServiceProof, ServiceRecognition, ServiceScope, ServiceUnderstanding, ServicePageShell } from './ServicePage'
import { estimateFor, useServicePageMetadata } from './servicePageUtils'

const estimateHref = estimateFor('commercial-property')

const commercialServices = {
  '/commercial-pressure-washing/storefront-cleaning': {
    title: 'Storefront Cleaning',
    eyebrow: 'Commercial storefront cleaning · Northwest Ohio + Lake Erie',
    hero: 'Keep the storefront clean from the sidewalk to the entrance.',
    intro: 'Storefront cleaning can cover entrances, facades, sidewalks, glass, and other visible surfaces around the front of the business.',
    recognition: ['The storefront is one of the first things customers see.', 'Dirt, organic growth, traffic residue, webs, and staining can build up across signs, walls, walkways, and entry areas. We plan the cleaning around the materials and the hours customers use the space.'],
    scope: [['Facade + exterior walls','Cleaning for exterior walls, signs, and other visible surfaces.'],['Entry zones','Walkways, stoops, and other high-traffic surfaces around the entrance.'],['Exterior glass','Window cleaning can be paired with wall cleaning when it makes sense.'],['Scheduling','We can plan the work around customer traffic and access.']],
    heroImage: storefrontHero,
    points: [['Customer-facing surfaces','Start with the areas customers see first, then include nearby surfaces if they need attention too.'],['Match the method to the material','Brick, siding, paint, concrete, signs, and glass do not all need the same pressure or cleaner.'],['Handle the front in one visit','Storefront walls, windows, and nearby sidewalks can be included in the same visit.']],
  },
  '/commercial-pressure-washing/building-washing': {
    title: 'Building Washing', eyebrow:'Commercial building washing · Northwest Ohio + Lake Erie', hero:'Clean the building exterior around your operating schedule.',
    intro:'For building washing, we need to know the size, surfaces, access, customer traffic, and when the property is in use.',
    recognition:['Commercial buildings can collect the same dirt and organic buildup as homes, but access and scheduling are often more complicated.','Before we price the job, we need to know the exterior material, height, entrances, signs, traffic, and when the building can be cleaned.'],
    scope:[['Exterior walls','Cleaning for siding, masonry, and other exterior wall surfaces.'],['Entry + loading areas','Entry and loading areas can be cleaned along with the building exterior.'],['After-hours coordination','We’ve completed commercial office cleaning after business hours to reduce disruption.'],['Related commercial services','Windows, parking areas, storefronts, and dumpster pads can be included in the same estimate.']],
    points:[['Access first','Height, landscaping, parked vehicles, loading zones, and customer access all shape the work plan.'],['Method by material','Commercial does not mean maximum pressure. The approach still follows the surface and condition.'],['Plan around people','The work should be planned so the business can keep operating with as little disruption as possible.']],
  },
  '/commercial-pressure-washing/dumpster-pad-cleaning': {
    title:'Dumpster Pad Cleaning', eyebrow:'Commercial dumpster-pad cleaning · Northwest Ohio + Lake Erie', hero:'Keep dumpster and service areas cleaner.',
    intro:'Dumpster pads collect spills, residue, traffic grime, and debris in a small area.',
    recognition:['Dumpster and service areas can collect some of the heaviest buildup on a property.','These areas can have heavier buildup, tighter access, and more drainage concerns than the front of a building.'],
    scope:[['Dumpster pads','Cleaning for concrete and other hard surfaces around waste areas.'],['Adjacent concrete','Nearby concrete and traffic lanes can be cleaned at the same time.'],['Scheduling around pickup','We schedule around pickup times so containers and service trucks are not in the way.'],['Other areas nearby','Dumpster pads can be cleaned along with parking lots, building exteriors, or other commercial areas.']],
    points:[['Heavier buildup','Grease, organic residue, debris, and repeated vehicle traffic can need more pretreatment than an ordinary sidewalk.'],['Drainage matters','We need to know where water can drain and what is around the work area.'],['How often it needs cleaning','Busy properties may need recurring cleaning instead of waiting for heavy buildup.']],
  },
  '/commercial-pressure-washing/parking-lot-cleaning': {
    title:'Parking Lot Cleaning', eyebrow:'Commercial parking-area cleaning · Northwest Ohio + Lake Erie', hero:'Clean parking areas and high-traffic exterior surfaces.',
    intro:'Parking areas collect tire marks, oil residue, road film, and debris from daily traffic.',
    recognition:['Parking areas take daily traffic and can start looking dirty fast.','Cleaning can remove surface buildup, but it will not repair damaged pavement, repaint striping, or always remove oil that has soaked deep into the surface.'],
    scope:[['Parking areas','Cleaning for concrete and other hard-surface parking areas.'],['Traffic lanes','Areas with repeated tire traffic and visible residue.'],['Walkways + approaches','Connecting sidewalks and entry flatwork can be planned at the same time.'],['Scheduling','We can work around operating hours and vehicle access.']],
    points:[['Traffic changes the buildup','Tire marks, oil residue, road film, and tracked debris are different from normal residential patio buildup.'],['Set realistic expectations','Cleaning removes surface buildup; it does not repaint striping or repair damaged pavement.'],['Stage the work','Larger lots may need sections or timing windows so the property can keep functioning.']],
  },
  '/commercial-pressure-washing/window-cleaning': {
    title:'Commercial Window Cleaning', eyebrow:'Commercial exterior window cleaning · Northwest Ohio + Lake Erie', hero:'Keep exterior glass clean and presentable.',
    intro:'We clean exterior glass on storefronts, offices, and other commercial properties.',
    recognition:['Glass picks up fingerprints, pollen, mineral spots, webs, and road residue quickly, especially around entrances.','We look at access, frames, screens, nearby wall surfaces, and any other exterior cleaning happening on the same visit.'],
    scope:[['Exterior glass','Storefront, office, and other exterior windows, with the goal of keeping customer-facing glass clean without disrupting the entrance.'],['Entrance glass','Doors and glass around customer and employee entrances.'],['Facade coordination','Window work can be scheduled after nearby wall cleaning to avoid re-soiling.'],['Access planning','Height, landscaping, awnings, and business traffic can affect the approach.']],
    points:[['Order matters','When walls and windows are cleaned together, we plan the order so one job does not dirty the other.'],['Water quality matters','Streak-free exterior glass depends on process and rinse quality, not aggressive pressure. AquaBlast also publishes a seven-day rain touch-up commitment for commercial window cleaning.'],['Keep the business usable','Access and timing should be planned around entrances and work areas.']],
  },
  '/commercial-pressure-washing/fleet-washing': {
    title:'Fleet Washing', eyebrow:'Mobile fleet washing · Lake Erie Shores + Northwest Ohio', hero:'Keep company vehicles clean and ready for the road.',
    intro:'We wash box trucks, vans, tractors, trailers, service vehicles, buses, municipal units, and other fleet equipment.',
    recognition:['Fleet washing has a lot to work around: how many units there are, route times, staging space, wraps, sensors, lights, mirrors, wheels, and seasonal road film.','We start with the number and type of vehicles, where they can be staged, and how dirty they are, then choose the cleaning method from there.'],
    scope:[['Delivery + service vehicles','Box trucks, vans, pickups, service bodies, and other route vehicles.'],['Heavy + trailer equipment','Tractors, trailers, dump trucks, flatbeds, and equipment trailers.'],['Buses + municipal units','Buses, municipal units, and other larger fleet vehicles.'],['Recurring maintenance','One-time cleaning or recurring service based on mileage, weather, road film, bugs, brake dust, and salt exposure.']],
    points:[['Protect wraps + equipment','AquaBlast’s published fleet process uses detergents and low-pressure methods around paint, decals, wraps, cameras, sensors, lighting, mirrors, and other sensitive fittings.'],['Stage around routes','The published fleet process starts with unit count, access, priority vehicles, and staging so the next unit can be ready while another is being washed.'],['Weather changes the schedule','Winter salt, summer bugs, pollen, and lake-area residue can change how often the vehicles need washing.']],
  },
}

const commercialFlavor = {
  'Storefront Cleaning': 'Put your best front forward.',
  'Building Washing': 'Planned around the workday.',
  'Dumpster Pad Cleaning': 'Take care of the back of house.',
  'Parking Lot Cleaning': 'Keep the arrival clear.',
  'Commercial Window Cleaning': 'Let the property show through.',
  'Fleet Washing': 'Keep the next unit ready.',
}

function CommercialDetailPage({ path, data }) {
  useServicePageMetadata({ title:`${data.title} in Marblehead | AquaBlast Pressure Washing`, description:`${data.intro} Serving Marblehead and nearby Northwest Ohio and Lake Erie communities.`, canonicalPath:path })
  return <ServicePageShell estimateHref={estimateHref} className="commercial-page">
    <ServiceHero image={data.heroImage || commercialHero} alt={`Commercial exterior cleaning for ${data.title.toLowerCase()}`} eyebrow={data.eyebrow} title={`${data.title}.`} flavor={commercialFlavor[data.title]}><p>{data.intro}</p><a className="cta" href={estimateHref}>Plan a commercial estimate <span aria-hidden="true">→</span></a></ServiceHero>
    <ServiceRecognition><div><p className="kicker">Commercial exterior cleaning</p><h2>{data.recognition[0]}</h2></div><div><p>{data.recognition[1]}</p><p>Tell us what needs cleaning, when the property is busiest, and anything that could affect access.</p></div></ServiceRecognition>
    <ServiceScope><div><p className="kicker">What we need to know</p><h2>Tell us what needs cleaning and when we can get to it.</h2></div><ul>{data.scope.map(([title,copy]) => <li key={title}><b>{title}</b><span>{copy}</span></li>)}</ul></ServiceScope>
    <ServiceUnderstanding><div><p className="kicker">Planning the job</p><h2>Access, traffic, and timing all affect how we schedule the work.</h2></div><div className="understanding-grid">{data.points.map(([title,copy]) => <article key={title}><b>{title}</b><p>{copy}</p></article>)}</div></ServiceUnderstanding>
    <ServiceProof><div className="section-heading"><div><p className="kicker">Commercial jobs</p><h2>Commercial work we’ve done around the area.</h2></div><p>Our commercial work includes office buildings, concrete, and sidewalk tire-mark removal around the Lake Erie area.</p></div><figure><div className="result-media"><img src={workTruck} alt="AquaBlast branded work truck" width="1920" height="1080" loading="lazy" decoding="async" /></div><figcaption><span>Commercial work</span><b>Northwest Ohio + Lake Erie</b><small>Commercial cleaning equipment</small></figcaption></figure></ServiceProof>
    <ServiceAreaBand><p className="kicker">More commercial services</p><h2>Need several areas cleaned?</h2><p>You can include every area you want cleaned in the same estimate request.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">Commercial projects <span aria-hidden="true">→</span></a></div></ServiceAreaBand>
    <ServiceFinalCta><div><p className="kicker">Ready for an estimate?</p><h2>Show us the property, vehicles, or work area.</h2><p>Send photos along with any access, timing, or operating details that affect the job.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}


function StorefrontCleaningPage() {
  const path = '/commercial-pressure-washing/storefront-cleaning'
  useServicePageMetadata({
    title:'Commercial Storefront Cleaning in Marblehead | AquaBlast Pressure Washing',
    description:'Commercial storefront cleaning for entrances, facades, sidewalks, exterior glass, and customer-facing surfaces in Marblehead and across Northwest Ohio and the Lake Erie area.',
    canonicalPath:path,
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page storefront-cleaning-page">
    <ServiceHero className="storefront-cleaning-hero" image={storefrontHero} alt="Illustrative storefront cleaning scene focused on the entrance, sidewalk, and customer-facing facade" eyebrow="Commercial storefront cleaning · Northwest Ohio + Lake Erie" title="Storefront cleaning." flavor="Make the first few feet feel cared for.">
      <p>Entrances, glass, walls, signs, and the sidewalk all contribute to the same first impression. We plan the cleaning around customer traffic, materials, and the hours your front door needs to stay usable.</p>
      <a className="cta" href={estimateHref}>Plan a storefront estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="storefront-recognition" aria-labelledby="storefront-recognition-title">
      <div className="storefront-recognition__copy"><p className="kicker">Customer-facing surfaces</p><h2 id="storefront-recognition-title">The storefront is not one surface. It is one arrival experience.</h2><p>Road film on the lower facade, footprints and gum around the entrance, tire marks near the curb, webs around signs, and dull exterior glass can all show up in the same few steps.</p></div>
      <div className="storefront-recognition__signals">
        <article><span>01</span><b>Approach</b><p>Sidewalks, curbs, stoops, and nearby flatwork shape what customers see before they reach the door.</p></article>
        <article><span>02</span><b>Entrance</b><p>Doors, glass, frames, signs, and high-touch customer-facing areas need a more precise cleaning plan.</p></article>
        <article><span>03</span><b>Facade</b><p>Brick, siding, masonry, painted surfaces, trim, and signs may need different methods within the same storefront.</p></article>
      </div>
    </section>

    <section className="storefront-plan" aria-labelledby="storefront-plan-title">
      <div className="storefront-plan__intro"><div><p className="kicker">A simple plan</p><h2 id="storefront-plan-title">Start at the curb. Finish at the glass.</h2></div><p>Show us the whole customer-facing zone so the estimate follows the way people actually approach and use the property.</p><a className="secondary" href={estimateHref}>Start with storefront photos <span aria-hidden="true">→</span></a></div>
      <ol className="storefront-plan__steps">
        <li><b>01</b><span>Define the arrival zone</span><p>Include the curb, sidewalk, stoop, entrance, facade, signs, and nearby glass you want considered.</p></li>
        <li><b>02</b><span>Plan around customer flow</span><p>Tell us your busiest hours, delivery windows, outdoor seating, and entrances that need to stay open.</p></li>
        <li><b>03</b><span>Sequence the surfaces</span><p>Walls, hard surfaces, and glass are cleaned in an order that avoids re-soiling finished areas.</p></li>
      </ol>
    </section>

    <section className="storefront-proof" aria-labelledby="storefront-proof-title">
      <div className="storefront-proof__lead"><p className="kicker">Why the front matters</p><h2 id="storefront-proof-title">Make the property feel cared for before a customer reaches the door.</h2><p>A storefront can be clean in pieces and still feel neglected when the sidewalk, curb edge, or entrance zone carries visible traffic buildup. This real AquaBlast project shows the kind of high-traffic hard-surface condition that can shape the arrival.</p></div>
      <div className="storefront-proof__gallery">
        <a href="/projects/tire-mark-removal-in-marblehead-ohio" className="storefront-proof__card"><figure><img src={storefrontTireProof} alt="Real AquaBlast tire-mark removal project on customer-facing concrete in Marblehead" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>High-traffic concrete · Marblehead</b><small>Open project →</small></figcaption></figure></a>
        <aside className="storefront-proof__estimate" aria-label="What to include in a storefront estimate"><p className="kicker">Estimate the whole arrival zone</p><h3>Show us what a customer passes on the way in.</h3><ul><li><b>Approach</b><span>Sidewalk, curb, stoop, entry concrete, and other high-traffic flatwork.</span></li><li><b>Vertical surfaces</b><span>Lower facade, trim, signs, awnings, and areas where road film or organic buildup collects.</span></li><li><b>Glass + access</b><span>Doors, exterior glass, planters, displays, traffic patterns, and hours the entrance must stay open.</span></li></ul><a className="secondary" href={estimateHref}>Start with storefront photos <span aria-hidden="true">→</span></a></aside>
      </div>
    </section>

    <section className="storefront-scope" aria-labelledby="storefront-scope-title">
      <div className="storefront-scope__title"><p className="kicker">What can be included</p><h2 id="storefront-scope-title">Build the estimate around the customer path, not arbitrary service categories.</h2></div>
      <div className="storefront-scope__grid">
        <article><b>Facade + trim</b><p>Exterior walls, trim, signs, and other visible surfaces around the front elevation.</p></article>
        <article><b>Entry concrete</b><p>Sidewalks, stoops, approaches, and nearby hard surfaces where traffic concentrates.</p></article>
        <article><b>Exterior glass</b><p>Commercial window cleaning can be sequenced after nearby wall cleaning. <a href="/commercial-pressure-washing/window-cleaning">See commercial window cleaning.</a></p></article>
        <article><b>Adjacent exterior work</b><p>Broader building washing or parking-area cleaning can be included when the front of the property is only part of the scope.</p></article>
      </div>
    </section>

    <section className="storefront-operations" aria-labelledby="storefront-operations-title">
      <div><p className="kicker">Keep the front door usable</p><h2 id="storefront-operations-title">Cleaning should improve the customer experience, not interrupt it.</h2></div>
      <div className="storefront-operations__facts"><article><b>Business hours</b><p>Active storefronts may need early, late, or staged cleaning so customer access remains practical.</p></article><article><b>Signs + displays</b><p>Awnings, signs, window displays, planters, and fixtures affect both access and the cleaning method.</p></article><article><b>One coordinated visit</b><p>When walls, sidewalks, and glass are all in scope, the work can be sequenced as one exterior visit instead of three disconnected jobs.</p></article></div>
    </section>

    <ServiceAreaBand><p className="kicker">Commercial service area</p><h2>Storefront cleaning across Northwest Ohio and the Lake Erie area.</h2><p>For retail fronts, offices, restaurants, customer entrances, and other commercial properties where the front of the building matters.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/commercial-pressure-washing/window-cleaning">Commercial window cleaning <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Want the front of the property cleaned?</p><h2>Show us what customers see on the way in.</h2><p>Send photos from the curb through the entrance, along with business hours and any access details that affect when the work can happen.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}


const buildingProject = '/assets/live-projects/projects-commercial-office-building-cleaning-lakeside-marblehead-oh/01-5starstoreit-jpg.jpg'

function BuildingWashingPage() {
  const path = '/commercial-pressure-washing/building-washing'
  useServicePageMetadata({
    title:'Commercial Building Washing in Marblehead | AquaBlast Pressure Washing',
    description:'Commercial building washing for exterior walls, entrances, loading areas, and related surfaces in Marblehead and across Northwest Ohio and the Lake Erie area.',
    canonicalPath:path,
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page building-washing-page">
    <ServiceHero className="building-washing-hero" image={buildingHero} alt="Illustrative commercial building-washing scene focused on the facade and entrance" eyebrow="Commercial building washing · Northwest Ohio + Lake Erie" title="Building washing." flavor="Clean the exterior without disrupting the workday.">
      <p>Exterior walls, entrances, and loading areas all collect buildup. We plan the cleaning around the surface, the access, and the hours your property needs to stay usable.</p>
      <a className="cta" href={estimateHref}>Plan a building-wash estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="building-recognition" aria-labelledby="building-recognition-title">
      <div className="building-recognition__title"><p className="kicker">What building washing has to solve</p><h2 id="building-recognition-title">The exterior should look maintained without turning cleaning day into an operating problem.</h2></div>
      <div className="building-recognition__signals">
        <article><span>01</span><b>Visible buildup</b><p>Dirt, mildew, organic growth, road film, webs, and weathering can collect across walls, trim, entrances, and signs.</p></article>
        <article><span>02</span><b>Mixed materials</b><p>Siding, painted surfaces, masonry, glass, signs, and concrete do not all need the same pressure or chemistry.</p></article>
        <article><span>03</span><b>People still need access</b><p>Customers, employees, deliveries, parked vehicles, and loading zones all affect when and how the work can happen.</p></article>
      </div>
    </section>

    <section className="building-plan" aria-labelledby="building-plan-title">
      <div className="building-plan__copy"><p className="kicker">A simple plan</p><h2 id="building-plan-title">Show us the building. Tell us when it needs to stay open.</h2><p>Commercial building washing works best when the surface plan and the operating schedule are solved together.</p><a className="secondary" href={estimateHref}>Start with photos <span aria-hidden="true">→</span></a></div>
      <ol className="building-plan__steps">
        <li><b>01</b><span>Define the exterior scope</span><p>Show us the walls, entrances, loading areas, signs, and any nearby surfaces you want included.</p></li>
        <li><b>02</b><span>Plan access + timing</span><p>Tell us about business hours, customer traffic, deliveries, parked vehicles, and areas that must remain usable.</p></li>
        <li><b>03</b><span>Match the method</span><p>The cleaning approach follows the material and condition instead of treating every commercial surface like flatwork.</p></li>
      </ol>
    </section>

    <section className="building-evidence" id="proof" aria-labelledby="building-evidence-title">
      <div className="building-evidence__media"><figure><img src={buildingProject} alt="Commercial office-building cleaning project in Lakeside Marblehead" loading="lazy" decoding="async" /><figcaption>Real AquaBlast project · Lakeside Marblehead</figcaption></figure></div>
      <div className="building-evidence__copy"><p className="kicker">Real building-wash project</p><h2 id="building-evidence-title">After-hours cleaning kept the business out of the work zone.</h2><p>This repeat-customer office-building project was scheduled after business hours so the property was not open during cleaning.</p><div className="building-evidence__facts"><article><b>Repeat customer</b><span>The building had gone a couple of years since its previous cleaning.</span></article><article><b>After-hours window</b><span>The work was scheduled around the business instead of asking the business to work around the cleaning.</span></article><article><b>Surface-aware wash</b><span>The published project record says AquaBlast used its normal house-wash mix across the building exterior.</span></article></div><a className="secondary" href="/projects/commercial-office-building-cleaning-lakeside-marblehead-OH">Open the real project <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="building-scope" aria-labelledby="building-scope-title">
      <div className="building-scope__title"><p className="kicker">What can be included</p><h2 id="building-scope-title">Build the estimate around the property, not a one-size-fits-all package.</h2></div>
      <div className="building-scope__grid">
        <article><b>Exterior walls</b><p>Siding, masonry, painted surfaces, and other building-envelope materials.</p></article>
        <article><b>Entrances + loading areas</b><p>Customer entries, employee access points, service doors, and loading zones can be coordinated with the main wash.</p></article>
        <article><b>Exterior glass</b><p>Window cleaning can be sequenced after nearby wall washing. <a href="/commercial-pressure-washing/window-cleaning">See commercial window cleaning.</a></p></article>
        <article><b>Adjacent hard surfaces</b><p>Sidewalks, parking approaches, and service-area concrete can be included when the broader site needs attention.</p></article>
      </div>
    </section>

    <section className="building-operations" aria-labelledby="building-operations-title">
      <div><p className="kicker">Operating context matters</p><h2 id="building-operations-title">The best cleaning plan is the one the property can actually support.</h2></div>
      <div className="building-operations__facts"><article><b>Height + equipment access</b><p>Building height, landscaping, awnings, and staging space affect reach and setup.</p></article><article><b>Customer + employee flow</b><p>Entrances and active work zones may need to be staged so people can continue moving through the property.</p></article><article><b>Deliveries + parked vehicles</b><p>Loading windows and vehicle movement can determine which parts of the building are cleaned first.</p></article></div>
    </section>

    <ServiceAreaBand><p className="kicker">Commercial service area</p><h2>Building washing across Northwest Ohio and the Lake Erie area.</h2><p>For offices, storefronts, facilities, customer-facing properties, and other commercial exteriors.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">See commercial projects <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Need the building cleaned?</p><h2>Show us the exterior and the operating constraints.</h2><p>Send photos of the building along with business hours, access details, and anything that affects when the work can happen.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}


function CommercialWindowCleaningPage() {
  const path = '/commercial-pressure-washing/window-cleaning'
  useServicePageMetadata({
    title:'Commercial Window Cleaning in Marblehead | AquaBlast Pressure Washing',
    description:'Commercial exterior window cleaning for storefronts, offices, entrances, and customer-facing glass in Marblehead and across Northwest Ohio and the Lake Erie area.',
    canonicalPath:path,
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page commercial-window-page">
    <ServiceHero className="commercial-window-hero" image={commercialWindowHero} alt="Illustrative commercial exterior focused on customer-facing glass and entrance windows" eyebrow="Commercial exterior window cleaning · Northwest Ohio + Lake Erie" title="Commercial window cleaning." flavor="Keep the glass clear without getting in the way.">
      <p>Storefronts, offices, and customer-facing entrances pick up road film, pollen, mineral residue, webs, and fingerprints quickly. We plan the glass around access, nearby exterior work, and the hours people use the property.</p>
      <a className="cta" href={estimateHref}>Plan a window-cleaning estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="commercial-window-recognition" aria-labelledby="commercial-window-recognition-title">
      <div className="commercial-window-recognition__title"><p className="kicker">What customers notice first</p><h2 id="commercial-window-recognition-title">Clean glass helps the property look ready before anyone walks through the door.</h2></div>
      <div className="commercial-window-recognition__signals">
        <article><span>01</span><b>Traffic-facing residue</b><p>Road film, pollen, dust, webs, fingerprints, and mineral spotting can build up quickly around customer-facing glass.</p></article>
        <article><span>02</span><b>Entrances stay active</b><p>Doors, sidewalks, staff access, deliveries, and customer traffic affect when each area can be cleaned.</p></article>
        <article><span>03</span><b>Nearby washing matters</b><p>If walls, awnings, or concrete are being cleaned too, the service order should keep finished glass from being dirtied again.</p></article>
      </div>
    </section>

    <section className="commercial-window-plan" aria-labelledby="commercial-window-plan-title">
      <div className="commercial-window-plan__intro"><div><p className="kicker">A simple plan</p><h2 id="commercial-window-plan-title">Show us the glass. Show us how people move through the property.</h2></div><p>Commercial window work is easier to schedule when the glass, access points, operating hours, and any other exterior cleaning are considered together.</p><a className="secondary" href={estimateHref}>Start with photos <span aria-hidden="true">→</span></a></div>
      <ol className="commercial-window-plan__steps">
        <li><b>01</b><span>Define the glass</span><p>Show us storefront windows, office glass, entrance doors, upper-level windows, and any areas with heavier spotting or buildup.</p></li>
        <li><b>02</b><span>Plan the work window</span><p>Tell us when entrances are busiest and when staff, customers, or deliveries need uninterrupted access.</p></li>
        <li><b>03</b><span>Sequence nearby cleaning</span><p>When building washing or concrete work is included, we schedule the glass so the finished result stays finished.</p></li>
      </ol>
    </section>

    <section className="commercial-window-context" aria-labelledby="commercial-window-context-title">
      <div className="commercial-window-context__media"><figure><img src={commercialWindowProject} alt="Real AquaBlast exterior window-cleaning project in Lakeside Marblehead" loading="lazy" decoding="async" /><figcaption>Real AquaBlast window-cleaning project · Lakeside Marblehead</figcaption></figure></div>
      <div className="commercial-window-context__copy"><p className="kicker">Real window-cleaning proof</p><h2 id="commercial-window-context-title">Reach, rinse quality, and the surfaces around the glass all shape the job.</h2><p>This AquaBlast project paired exterior window cleaning with stucco work in Lakeside Marblehead. If your building has hard-to-reach glass or nearby surfaces that also need cleaning, show us the whole work area so we can plan the sequence.</p><div className="commercial-window-context__facts"><article><b>Reach</b><span>Height, landscaping, awnings, and working distance affect how exterior glass can be reached safely.</span></article><article><b>Rinse quality</b><span>Window cleaning depends on process and water quality rather than treating the glass like a pressure-washing surface.</span></article><article><b>Sequence</b><span>Nearby wall cleaning should happen before finished glass when both services are part of the same visit.</span></article></div><a className="secondary" href="/projects/exterior-stucco-window-cleaning-lakeside-marblehead-OH">See the real window project <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="commercial-window-scope" aria-labelledby="commercial-window-scope-title">
      <div className="commercial-window-scope__title"><p className="kicker">What can be included</p><h2 id="commercial-window-scope-title">Build the scope around the glass customers and employees actually see.</h2></div>
      <div className="commercial-window-scope__grid">
        <article><b>Storefront + office glass</b><p>Exterior windows on customer-facing and workplace elevations.</p></article>
        <article><b>Entrance glass</b><p>Doors and nearby glass around customer and employee access points.</p></article>
        <article><b>Facade coordination</b><p>Window cleaning can be paired with <a href="/commercial-pressure-washing/building-washing">building washing</a> and sequenced after the surrounding exterior is cleaned.</p></article>
        <article><b>Rain touch-up</b><p>AquaBlast’s current published commercial window service includes a seven-day rain touch-up commitment.</p></article>
      </div>
    </section>

    <section className="commercial-window-method" aria-labelledby="commercial-window-method-title">
      <div><p className="kicker">Process over pressure</p><h2 id="commercial-window-method-title">Streak-free glass depends on the right rinse and the right sequence.</h2></div>
      <div className="commercial-window-method__facts"><article><b>Water quality matters</b><p>The goal is clean exterior glass without treating windows like a pressure-washing surface.</p></article><article><b>Frames + surroundings matter</b><p>Visible frame conditions, nearby surfaces, landscaping, and access all affect the approach.</p></article><article><b>Keep entrances usable</b><p>Work zones can be staged around active doors and customer movement instead of blocking the whole frontage at once.</p></article></div>
    </section>

    <ServiceAreaBand><p className="kicker">Commercial service area</p><h2>Commercial exterior window cleaning across Northwest Ohio and the Lake Erie area.</h2><p>For storefronts, offices, customer-facing properties, and other commercial glass.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/commercial-pressure-washing/building-washing">Building washing <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Need the exterior glass cleaned?</p><h2>Show us the windows and the access.</h2><p>Send photos of the glass, entrances, building height, operating hours, and any nearby exterior surfaces you want cleaned in the same visit.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}


function DumpsterPadCleaningPage() {
  const path = '/commercial-pressure-washing/dumpster-pad-cleaning'
  const commercialConcrete = '/assets/live-projects/projects-comercila-concrete-cleaning-port-clinton-oh/01-commercial-concrete-cleaning-port-clinton-jpg.jpg'
  useServicePageMetadata({
    title:'Dumpster Pad Cleaning in Marblehead | AquaBlast Pressure Washing',
    description:'Commercial dumpster-pad and service-area cleaning for concrete, waste-area approaches, and nearby hard surfaces in Marblehead and across Northwest Ohio and the Lake Erie area.',
    canonicalPath:path,
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page dumpster-pad-page">
    <ServiceHero className="dumpster-pad-hero" image={dumpsterHeroGenerated} alt="Illustrative commercial dumpster-pad cleaning scene with a surface cleaner working beside a dumpster enclosure" eyebrow="Commercial dumpster-pad cleaning · Northwest Ohio + Lake Erie" title="Dumpster pad cleaning." flavor="Take care of the back of house.">
      <p>Waste and service areas collect spills, residue, tracked grime, debris, and repeated vehicle traffic in a small space. We plan the cleaning around the surface, access, pickup timing, and where water can move.</p>
      <a className="cta" href={estimateHref}>Plan a dumpster-pad estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="dumpster-recognition" aria-labelledby="dumpster-recognition-title">
      <div className="dumpster-recognition__title"><p className="kicker">Where buildup concentrates</p><h2 id="dumpster-recognition-title">A small service area can become one of the dirtiest parts of the property.</h2></div>
      <div className="dumpster-recognition__signals">
        <article><span>01</span><b>Spills + residue</b><p>Repeated waste handling can leave visible residue and staining on concrete and nearby hard surfaces.</p></article>
        <article><span>02</span><b>Truck + cart traffic</b><p>Container movement, service vehicles, and daily foot traffic keep grinding grime back into the same zone.</p></article>
        <article><span>03</span><b>Tight operating windows</b><p>Pickup schedules, parked containers, staff access, and deliveries all affect when the area can be cleaned.</p></article>
      </div>
    </section>

    <section className="dumpster-plan" aria-labelledby="dumpster-plan-title">
      <div className="dumpster-plan__intro"><div><p className="kicker">A simple plan</p><h2 id="dumpster-plan-title">Show us the pad, the surrounding concrete, and the pickup schedule.</h2></div><p>The best estimate starts with the whole service area—not just one close-up of the stain.</p><a className="secondary" href={estimateHref}>Start with photos <span aria-hidden="true">→</span></a></div>
      <ol className="dumpster-plan__steps">
        <li><b>01</b><span>Define the cleaning area</span><p>Show the pad, container position, surrounding concrete, walls, traffic lane, and any nearby surfaces you want included.</p></li>
        <li><b>02</b><span>Plan around pickup + access</span><p>Tell us when containers are moved, when trucks arrive, and when staff need the service area clear.</p></li>
        <li><b>03</b><span>Match the treatment to the buildup</span><p>Heavier residue may need a different pretreatment and dwell time than an ordinary walkway.</p></li>
      </ol>
    </section>

    <section className="dumpster-visual-break" aria-labelledby="dumpster-visual-break-title">
      <div className="dumpster-visual-break__copy"><p className="kicker">Visual planning break</p><h2 id="dumpster-visual-break-title">It helps to see the whole work zone, not just the messiest spot.</h2><p>These views show the kind of context that makes a dumpster-pad estimate easier: container position, surrounding concrete, curbs, walls, access lanes, and the surface condition across the full service area.</p><ul className="dumpster-visual-break__notes"><li><b>Show the whole service area</b><span>Wide photos make it easier to understand how the pad relates to the rest of the back-of-house concrete.</span></li><li><b>Show the working surface</b><span>Close enough to see residue, staining, and the type of buildup that may affect treatment.</span></li><li><b>Show the constraints</b><span>Include curbs, doors, drains, bollards, enclosures, and anything else that affects access or water movement.</span></li></ul></div>
      <div className="dumpster-visual-break__gallery">
        <figure className="dumpster-visual-break__figure dumpster-visual-break__figure--primary"><img src={dumpsterContextGenerated} alt="Illustrative concept of a cleaned commercial dumpster enclosure and surrounding back-of-house service area" loading="lazy" decoding="async" /></figure>
        <figure className="dumpster-visual-break__figure"><img src={dumpsterSurfaceGenerated} alt="Illustrative concept of a commercial surface cleaner washing concrete beside a dumpster pad" loading="lazy" decoding="async" /></figure>
      </div>
    </section>

    <section className="dumpster-context" aria-labelledby="dumpster-context-title">
      <div className="dumpster-context__media"><figure><img src={commercialConcrete} alt="Real AquaBlast commercial concrete cleaning project in Port Clinton" loading="lazy" decoding="async" /><figcaption>Real AquaBlast commercial hard-surface project · Port Clinton</figcaption></figure></div>
      <div className="dumpster-context__copy"><p className="kicker">Commercial hard-surface proof</p><h2 id="dumpster-context-title">The surface still determines the cleaning plan.</h2><p>This real AquaBlast commercial concrete project is not a dumpster-pad case study. It is useful here because it shows AquaBlast handling commercial hard-surface cleaning where timing, heavier buildup, and the condition of the concrete mattered.</p><div className="dumpster-context__facts"><article><b>Commercial concrete</b><span>The work was completed at a Port Clinton attraction ahead of an annual inspection.</span></article><article><b>Hot-water cleaning</b><span>The published project record notes that hot water was requested for the job.</span></article><article><b>Schedule pressure</b><span>AquaBlast fit the commercial work into the schedule on short notice.</span></article></div><a className="secondary" href="/projects/comercila-concrete-cleaning-port-clinton-oh">Open the real commercial concrete project <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="dumpster-scope" aria-labelledby="dumpster-scope-title">
      <div className="dumpster-scope__title"><p className="kicker">What can be included</p><h2 id="dumpster-scope-title">Build the estimate around the service area, not just the square under the container.</h2></div>
      <div className="dumpster-scope__grid">
        <article><b>Dumpster pad</b><p>Concrete and other hard surfaces immediately around the waste area.</p></article>
        <article><b>Adjacent concrete</b><p>Aprons, approaches, service walks, and nearby traffic lanes can be included when they need attention too.</p></article>
        <article><b>Walls + enclosures</b><p>Nearby walls or enclosure surfaces can be evaluated as part of the same visit when their material is appropriate for cleaning.</p></article>
        <article><b>Related exterior work</b><p>Dumpster-pad cleaning can be coordinated with <a href="/commercial-pressure-washing/parking-lot-cleaning">parking-area cleaning</a> or <a href="/commercial-pressure-washing/building-washing">building washing</a>.</p></article>
      </div>
    </section>

    <section className="dumpster-operations" aria-labelledby="dumpster-operations-title">
      <div><p className="kicker">The back-of-house constraints matter</p><h2 id="dumpster-operations-title">Clean it when the area can actually be worked.</h2></div>
      <div className="dumpster-operations__facts"><article><b>Pickup timing</b><p>Container movement and collection windows can determine the best time to clean the pad.</p></article><article><b>Drainage + surroundings</b><p>The crew needs to see where water can move and what sits next to the work area before the cleaning plan is finalized.</p></article><article><b>Recurring buildup</b><p>Busy service areas may benefit from recurring cleaning rather than waiting until buildup becomes heavy again.</p></article></div>
    </section>

    <ServiceAreaBand><p className="kicker">Commercial service area</p><h2>Dumpster-pad cleaning across Northwest Ohio and the Lake Erie area.</h2><p>For restaurants, retail properties, offices, facilities, service businesses, and other commercial waste areas.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/commercial-pressure-washing/parking-lot-cleaning">Parking-area cleaning <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Need the service area cleaned?</p><h2>Show us the pad and what surrounds it.</h2><p>Send photos of the full service area, the heaviest buildup, container position, nearby drains or landscaping, and the normal pickup schedule.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}


function ParkingLotCleaningPage() {
  const path = '/commercial-pressure-washing/parking-lot-cleaning'
  useServicePageMetadata({
    title:'Parking Lot Cleaning in Marblehead | AquaBlast Pressure Washing',
    description:'Commercial parking-area cleaning for concrete approaches, traffic lanes, walkways, and other high-traffic exterior surfaces in Marblehead and across Northwest Ohio and the Lake Erie area.',
    canonicalPath:path,
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page parking-lot-page">
    <ServiceHero className="parking-lot-hero" image={parkingHero} alt="Illustrative commercial parking and service-lane cleaning scene" eyebrow="Commercial parking-area cleaning · Northwest Ohio + Lake Erie" title="Parking lot cleaning." flavor="Keep the arrival clear.">
      <p>Parking areas collect tire residue, road film, tracked dirt, oil spotting, leaves, and everyday debris. We plan the cleaning around the surface, traffic flow, parked vehicles, and the times your lot needs to stay usable.</p>
      <a className="cta" href={estimateHref}>Plan a parking-area estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="parking-recognition" aria-labelledby="parking-recognition-title">
      <div className="parking-recognition__title"><p className="kicker">What parking areas have to solve</p><h2 id="parking-recognition-title">The lot takes the traffic before customers ever reach the door.</h2></div>
      <div className="parking-recognition__signals">
        <article><span>01</span><b>Tire + road residue</b><p>Daily traffic leaves rubber, road film, tracked dirt, and visible grime across high-use lanes and approaches.</p></article>
        <article><span>02</span><b>Oil + fluid spotting</b><p>Some spotting can be improved with cleaning, but deeply absorbed petroleum staining may not disappear completely.</p></article>
        <article><span>03</span><b>Vehicles still need access</b><p>Parked cars, deliveries, customer traffic, and operating hours determine how much of the site can be cleaned at once.</p></article>
      </div>
    </section>

    <section className="parking-plan" aria-labelledby="parking-plan-title">
      <div className="parking-plan__intro">
        <div className="parking-plan__message"><p className="kicker">A simple plan</p><h2 id="parking-plan-title">Show us the lot. Tell us when it has to stay open.</h2><p>The estimate gets clearer when we can see the full parking area, traffic lanes, curbs, adjoining walks, and the times vehicles need to move through the property.</p><a className="secondary" href={estimateHref}>Start with site photos <span aria-hidden="true">→</span></a></div>
        <figure className="parking-plan__media"><img src={parkingContextGenerated} alt="Illustrative hard-surface cleaning concept showing a surface cleaner working across concrete" loading="lazy" decoding="async" /></figure>
      </div>
      <ol className="parking-plan__steps">
        <li><b>01</b><span>Define the cleanable area</span><p>Show the lot, approaches, curbs, traffic lanes, sidewalks, entrances, and any areas with heavier staining.</p></li>
        <li><b>02</b><span>Plan the traffic window</span><p>Tell us when customers, employees, deliveries, and parked vehicles need access so the work can be staged intelligently.</p></li>
        <li><b>03</b><span>Set expectations by surface</span><p>Cleaning can remove surface buildup, but it does not repair pavement, repaint striping, or guarantee removal of deeply absorbed oil.</p></li>
      </ol>
    </section>

    <section className="parking-proof" id="proof" aria-labelledby="parking-proof-title">
      <div className="parking-proof__media"><figure><img src={parkingCommercialConcrete} alt="Real AquaBlast commercial concrete cleaning project in Port Clinton" loading="lazy" decoding="async" /><figcaption>Real AquaBlast commercial hard-surface project · Port Clinton</figcaption></figure></div>
      <div className="parking-proof__copy"><p className="kicker">Real commercial hard-surface proof</p><h2 id="parking-proof-title">Traffic, buildup, timing, and the concrete condition all change the cleaning plan.</h2><p>This real AquaBlast commercial concrete project is not presented as a parking-lot case study. It is useful here because it shows commercial hard-surface work where heavier buildup, hot-water cleaning, and schedule pressure mattered.</p><div className="parking-proof__facts"><article><b>Commercial surface</b><span>The work was completed at a Port Clinton attraction ahead of an annual inspection.</span></article><article><b>Hot-water cleaning</b><span>The published project record notes that hot water was requested for the job.</span></article><article><b>Schedule pressure</b><span>AquaBlast fit the commercial work into the schedule on short notice.</span></article></div><a className="secondary" href="/projects/comercila-concrete-cleaning-port-clinton-oh">Open the real commercial concrete project <span aria-hidden="true">→</span></a></div>
    </section>

    <section className="parking-scope" aria-labelledby="parking-scope-title">
      <div className="parking-scope__title"><p className="kicker">What can be included</p><h2 id="parking-scope-title">Build the estimate around the arrival path, not just one dirty rectangle.</h2></div>
      <div className="parking-scope__grid">
        <article><b>Parking areas</b><p>Concrete and other appropriate hard-surface parking zones where traffic residue and visible buildup collect.</p></article>
        <article><b>Traffic lanes + approaches</b><p>Drive aisles, entrance approaches, loading approaches, and other repeatedly traveled surfaces.</p></article>
        <article><b>Walkways + curbs</b><p>Connecting sidewalks, curb lines, entry flatwork, and pedestrian approaches can be included in the same plan.</p></article>
        <article><b>Related commercial areas</b><p>Parking-area cleaning can be coordinated with <a href="/commercial-pressure-washing/dumpster-pad-cleaning">dumpster-pad cleaning</a> or <a href="/commercial-pressure-washing/building-washing">building washing</a>.</p></article>
      </div>
    </section>

    <section className="parking-operations" aria-labelledby="parking-operations-title">
      <div><p className="kicker">Set the work window before the water starts</p><h2 id="parking-operations-title">A cleaner lot only helps if people can still use the property.</h2></div>
      <div className="parking-operations__facts"><article><b>Stage by zone</b><p>Larger sites may need to be cleaned in sections so part of the lot stays available while another area is being worked.</p></article><article><b>Move vehicles first</b><p>Parked cars block both the cleaning path and the ability to treat buildup evenly, so access planning matters before arrival.</p></article><article><b>Know what cleaning will not fix</b><p>Cleaning addresses surface buildup; damaged pavement, faded striping, and deeply absorbed staining may require separate solutions.</p></article></div>
    </section>

    <ServiceAreaBand><p className="kicker">Commercial service area</p><h2>Parking-area cleaning across Northwest Ohio and the Lake Erie area.</h2><p>For retail properties, offices, facilities, attractions, service businesses, and other commercial sites with high-traffic exterior surfaces.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/commercial-pressure-washing/dumpster-pad-cleaning">Dumpster-pad cleaning <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Need the parking area cleaned?</p><h2>Show us the lot and the traffic pattern.</h2><p>Send photos of the full site, the heaviest buildup, operating hours, parked-vehicle constraints, and any connecting walks or service areas you want included.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}


function FleetWashingPage() {
  const path = '/commercial-pressure-washing/fleet-washing'
  useServicePageMetadata({
    title:'Fleet Washing in Marblehead | AquaBlast Pressure Washing',
    description:'Mobile fleet washing for box trucks, vans, service vehicles, tractors, trailers, buses, municipal units, and other commercial vehicles across Northwest Ohio and the Lake Erie area.',
    canonicalPath:path,
  })

  return <ServicePageShell estimateHref={estimateHref} className="commercial-page fleet-washing-page">
    <ServiceHero className="fleet-washing-hero" image={fleetHeroGenerated} alt="Illustrative fleet-washing scene with multiple commercial vehicles being cleaned in a staging area" eyebrow="Mobile fleet washing · Lake Erie Shores + Northwest Ohio" title="Fleet washing." flavor="Keep the next unit ready.">
      <p>Box trucks, vans, service vehicles, tractors, trailers, buses, and municipal units all collect road film, bugs, brake dust, salt, and seasonal grime. We build the wash plan around the vehicles, route schedule, staging space, and sensitive equipment on each unit.</p>
      <a className="cta" href={estimateHref}>Plan a fleet-washing estimate <span aria-hidden="true">→</span></a>
    </ServiceHero>

    <section className="fleet-recognition" aria-labelledby="fleet-recognition-title">
      <div className="fleet-recognition__title"><p className="kicker">What fleet washing has to solve</p><h2 id="fleet-recognition-title">Clean vehicles matter, but the route still has to move.</h2></div>
      <div className="fleet-recognition__signals">
        <article><span>01</span><b>Mixed vehicle types</b><p>Vans, box trucks, trailers, service bodies, buses, and heavier units do not all present the same surfaces or access.</p></article>
        <article><span>02</span><b>Sensitive equipment</b><p>Wraps, decals, cameras, sensors, lighting, mirrors, and fittings all need to be considered before washing begins.</p></article>
        <article><span>03</span><b>Route pressure</b><p>Priority vehicles, dispatch windows, staging space, and the order units return to service all affect the wash plan.</p></article>
      </div>
    </section>

    <section className="fleet-plan" aria-labelledby="fleet-plan-title">
      <div className="fleet-plan__intro"><div className="fleet-plan__message"><p className="kicker">A simple plan</p><h2 id="fleet-plan-title">Tell us what you run. Show us where the fleet can be staged.</h2><p>The fastest way to plan the job is to start with the unit count, vehicle types, route timing, and the space available for washing.</p><a className="secondary" href={estimateHref}>Start with fleet details <span aria-hidden="true">→</span></a></div><figure className="fleet-plan__media"><img src={fleetStagingGenerated} alt="Illustrative concept of a commercial fleet-washing crew working around a staged vehicle lineup" loading="lazy" decoding="async" /></figure></div>
      <ol className="fleet-plan__steps">
        <li><b>01</b><span>Define the fleet</span><p>Give us the approximate unit count and the mix of vans, pickups, box trucks, tractors, trailers, buses, or other equipment.</p></li>
        <li><b>02</b><span>Plan the staging</span><p>Show us where vehicles can line up, where water and equipment can be set, and which units need to stay available.</p></li>
        <li><b>03</b><span>Match the wash method</span><p>The approach follows the vehicle surfaces, wraps, fittings, buildup, and seasonal conditions instead of using one aggressive method everywhere.</p></li>
      </ol>
    </section>

    <section className="fleet-visual-break" aria-labelledby="fleet-visual-break-title">
      <figure className="fleet-visual-break__figure"><img src={fleetLineupGenerated} alt="Illustrative concept of clean commercial fleet vehicles lined up after washing" loading="lazy" decoding="async" /></figure>
      <div className="fleet-visual-break__copy"><p className="kicker">Keep the route moving</p><h2 id="fleet-visual-break-title">A wash sequence should fit the lineup—not fight it.</h2><p>Show the vehicle mix, spacing, wash lane, and priority units so the estimate can account for the way the fleet actually moves through the day.</p><ul className="fleet-visual-break__notes"><li><b>Show the lineup</b><span>Wide photos establish the unit count and spacing.</span></li><li><b>Show priority units</b><span>Identify the trucks or vans that need to return to service first.</span></li></ul></div>
    </section>

    <section className="fleet-visual" aria-labelledby="fleet-visual-title">
      <figure><img src={workTruck} alt="Real AquaBlast work truck and mobile cleaning equipment" loading="lazy" decoding="async" /><figcaption>Real AquaBlast equipment · Lake Erie area</figcaption></figure>
      <div><p className="kicker">Mobile service context</p><h2 id="fleet-visual-title">The wash plan starts with the vehicles and the space around them.</h2><p>This is real AquaBlast equipment rather than fleet-washing case-study proof. It is useful here because fleet work depends on mobile equipment, hose access, staging space, and an order of operations that keeps vehicles moving.</p><div className="fleet-visual__facts"><article><b>Unit order</b><span>Priority vehicles can be staged so the next unit is ready while another is being washed.</span></article><article><b>Access</b><span>Vehicle spacing, water access, hose routing, and room around each unit affect setup.</span></article><article><b>Seasonality</b><span>Salt, bugs, pollen, road film, and mileage can change both the cleaning method and service frequency.</span></article></div></div>
    </section>

    <section className="fleet-scope" aria-labelledby="fleet-scope-title">
      <div className="fleet-scope__title"><p className="kicker">What can be included</p><h2 id="fleet-scope-title">Build the scope around the fleet you actually operate.</h2></div>
      <div className="fleet-scope__grid">
        <article><b>Delivery + service vehicles</b><p>Box trucks, vans, pickups, service bodies, and other route vehicles.</p></article>
        <article><b>Heavy + trailer equipment</b><p>Tractors, trailers, dump trucks, flatbeds, and equipment trailers.</p></article>
        <article><b>Buses + municipal units</b><p>Buses, municipal vehicles, and other larger fleet equipment.</p></article>
        <article><b>Recurring maintenance</b><p>One-time cleaning or recurring service based on mileage, weather, road film, bugs, brake dust, and salt exposure.</p></article>
      </div>
    </section>

    <section className="fleet-operations" aria-labelledby="fleet-operations-title">
      <div><p className="kicker">Protect the unit and the schedule</p><h2 id="fleet-operations-title">Fleet washing works best when the cleaning method and the route plan are solved together.</h2></div>
      <div className="fleet-operations__facts"><article><b>Wraps + decals</b><p>AquaBlast’s published fleet guidance calls for detergent and lower-pressure methods around paint, graphics, and sensitive fittings.</p></article><article><b>Cameras + sensors</b><p>Mirrors, lighting, cameras, sensors, and other exterior equipment should be identified before washing begins.</p></article><article><b>Route windows</b><p>Unit count, priority vehicles, dispatch times, and staging determine how the work can be sequenced.</p></article></div>
    </section>

    <ServiceAreaBand><p className="kicker">Commercial service area</p><h2>Mobile fleet washing across Northwest Ohio and the Lake Erie area.</h2><p>For service fleets, delivery vehicles, contractors, municipal units, buses, trailers, and other commercial vehicles.</p><div className="editorial-actions"><a className="secondary" href="/commercial-pressure-washing">Commercial overview <span aria-hidden="true">→</span></a><a className="secondary" href="/near-me">Service areas <span aria-hidden="true">→</span></a><a className="secondary" href="/commercial-pressure-washing/building-washing">Building washing <span aria-hidden="true">→</span></a></div></ServiceAreaBand>

    <ServiceFinalCta><div><p className="kicker">Need the fleet cleaned?</p><h2>Show us the vehicles and the staging area.</h2><p>Send the approximate unit count, vehicle types, photos, route or dispatch windows, and the area where the fleet can be washed.</p></div><a className="cta" href={estimateHref}>Get a commercial estimate <span aria-hidden="true">→</span></a></ServiceFinalCta>
  </ServicePageShell>
}

export function getCommercialServicePage(pathname) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0,-1) : pathname
  if (path === '/commercial-pressure-washing/storefront-cleaning') return <StorefrontCleaningPage />
  if (path === '/commercial-pressure-washing/building-washing') return <BuildingWashingPage />
  if (path === '/commercial-pressure-washing/window-cleaning') return <CommercialWindowCleaningPage />
  if (path === '/commercial-pressure-washing/dumpster-pad-cleaning') return <DumpsterPadCleaningPage />
  if (path === '/commercial-pressure-washing/parking-lot-cleaning') return <ParkingLotCleaningPage />
  if (path === '/commercial-pressure-washing/fleet-washing') return <FleetWashingPage />
  const data = commercialServices[path]
  return data ? <CommercialDetailPage path={path} data={data} /> : null
}

export const commercialServiceRoutes = Object.keys(commercialServices)
