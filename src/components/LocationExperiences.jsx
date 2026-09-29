const truckImage = '/assets/project-media/01-branded-aqua-blast-work-truck-homepage-banner.webp'
const houseImage = '/assets/project-media/02-house-washing-service-image.webp'
const concreteImage = '/assets/project-media/03-driveway-concrete-service-image.webp'
const paverImage = '/assets/project-media/04-paver-cleaning-service-image.webp'
const deckProof = '/assets/project-media/06-deck-cleaning-before-after.webp'
const roofImage = '/assets/project-media/09-roof-cleaning-service-image.webp'
const catawbaHouseHero = '/assets/live-projects/projects-catawba-island-ohio-house-washing/01-catawba-island-ohio-house-washing-001-jpg.jpg'
const catawbaDeckProject = '/assets/live-projects/projects-deck-staining-in-catawba-island-oh/01-deck-staining-in-catawba-island-oh-jpg.jpg'
const lakesideHero = '/assets/generated/location-heroes/lakeside-hero-generated-v2.png'
const lakesideHouseProof = '/assets/live-projects/projects-house-washing-in-lakeside-marblehead-ohio/01-house-washing-in-lakeside-marblehead-ohio-01-jpg.jpg'
const lakesidePaverProof = '/assets/live-projects/paver-sealing-confederate-dr-lakeside-marblehead/01-paver-sealing-confederate-dr-lakeside-marblehead-featured-jpg.jpg'
const marbleheadHero = '/assets/generated/location-heroes/marblehead-hero-generated-v1.png'
const marbleheadHouseConcreteProof = '/assets/live-projects/projects-house-window-concrete-washing-marblehead-ohio/01-house-concrete-windows-jpg.jpg'
const marbleheadRoofProof = '/assets/live-projects/projects-roof-cleaning-marblehead-oh/01-roof-cleaning-marblehead-oh-002-jpg.jpg'
const oakHarborHero = '/assets/generated/location-heroes/oak-harbor-hero-generated-v3.png'
const oakHarborMultiSurfaceProof = '/assets/live-projects/projects-concrete-deck-and-window-cleaning-in-oak-harbor-ohio/01-cover-photo-2-jpg.jpg'
const oakHarborGutterProof = '/assets/live-projects/projects-gutter-cleaning-oak-harbor-oh/01-gutter-cleaning-oak-harbor-oh-004-jpg.jpg'
const fremontHero = '/assets/live-projects/projects-house-concrete-deck-cleaning-exterior-window-cleaning-project-in-gibsonburg-ohio/01-down-net-http20240427-106-a8b3kz-jpg.jpg'
const genoaHero = '/assets/generated/location-heroes/genoa-hero-generated-v2.png'
const johnsonsIslandHero = '/assets/generated/location-heroes/johnsons-island-hero-generated-v2.png'
const johnsonsIslandHouseProof = '/assets/live-projects/projects-house-washing-and-gutter-cleaning-on-johnsons-island/01-down-net-http20240427-61-tydlkt-jpg.jpg'
const johnsonsIslandConcrete = '/assets/live-projects/projects-concrete-cleaningsealing-on-johnsons-island-ohio/01-down-net-http20240427-102-yhbqo8-jpg.jpg'
const kelleysIslandHero = '/assets/generated/location-heroes/kelleys-island-hero-generated-v2.png'
const kelleysIslandProjectMain = '/assets/live-projects/house-washing-gutter-cleaning-kelleys-island-oh/01-house-gutter-1-jpg.jpg'
const kelleysIslandHouseDetail = '/assets/live-projects/house-washing-gutter-cleaning-kelleys-island-oh/03-house-gutter-2-webp.webp'

const sanduskyHero = '/assets/project-media/house-washing-sandusky-live.jpg'
const putInBayHero = '/assets/generated/location-heroes/put-in-bay-hero-generated-v1.png'
const tiffinHero = '/assets/generated/location-heroes/tiffin-hero-generated-v1.png'
const toledoHero = '/assets/generated/location-heroes/toledo-hero-generated-v1.png'
const tiffinProof = '/assets/project-media/house-washing-tiffin-live.jpg'
const sanduskyProof = '/assets/live-projects/projects-deck-cleaning-sandusky-ohio/01-down-net-http20250717-114-ty5t46-jpg.jpg'
import { ServiceHero, ServicePageShell } from './ServicePage'
import { ServiceArea } from './ServiceArea'
import { useServicePageMetadata } from './servicePageUtils'
import { canonicalRoutes, locationCanonicalPath } from '../data/migrationRoutes'

const markets = {

  'bowling-green': {
    name: 'Bowling Green', slug: 'bowling-green', zip: '43402', eyebrow: 'Bowling Green · Northwest Ohio exterior cleaning',
    title: 'Gutter cleaning and exterior care for Bowling Green homes.',
    intro: 'We serve Bowling Green for gutter cleaning, house washing, roof cleaning, concrete cleaning, and other exterior work.',
    angleLabel: 'Gutter cleaning in Bowling Green', angleTitle: 'Keep gutters and downspouts clear without climbing the ladder yourself.',
    angle: 'We’ve cleaned gutters and downspouts on two-story homes in Bowling Green, including jobs where the homeowner wanted the ladder work handled for them.',
    details: ['Bowling Green properties may need attention across driveways, roofs, patios, fencing, and siding. Tell AquaBlast which surfaces have visible buildup so they can be considered together.', 'Roof and gutter work involves height and access. You do not need to turn exterior maintenance into a ladder project yourself.'],
    proofTitle: 'Two-story gutter cleaning in Bowling Green.', proofText: 'One Bowling Green job included cleaning the gutters and downspouts on a two-story home.',
    callout: 'Catawba Island house washing', calloutBy: 'Gutter cleaning · Bowling Green, Ohio',
    focus: ['Gutter cleaning', 'House washing', 'Roof cleaning', 'Concrete cleaning'],
    projects: [['/projects/gutter-cleaning-bowling-green-ohio','Gutter cleaning','Two-story gutter + downspout cleaning']],
    related: [['/gutter-cleaning','Gutter cleaning'],['/house-washing','House washing'],['/roof-cleaning','Roof cleaning']],
  },
  'catawba-island': {
    name: 'Catawba Island', slug: 'catawba-island', zip: '43452', eyebrow: 'Catawba Island · Lake Erie exterior cleaning',
    title: 'House washing for Catawba Island properties.',
    intro: 'We serve Catawba Island and have completed house-washing jobs there for homes with visible exterior buildup.',
    angleLabel: 'House washing on Catawba Island', angleTitle: 'Remove visible exterior buildup without treating every surface the same.',
    angle: 'We’ve completed house washing on Catawba Island for homes with visible organic growth and exterior buildup.',
    details: ['Unsealed concrete is porous, so algae, spills, and staining can work into the surface instead of sitting only on top.', 'AquaBlast can also review sidewalks, siding, wood, roofs, exterior windows, and pavers when several areas of a Catawba Island property need attention.'],
    proofTitle: 'House washing on Catawba Island.', proofText: 'We’ve cleaned Catawba Island homes with visible organic buildup and other exterior staining.',
    proofImage: houseImage, proofAlt: 'House washing service', proofMeta: 'House washing · Catawba Island, OH',
    callout: 'Catawba Island house washing', calloutBy: 'House washing · Catawba Island, Ohio',
    focus: ['House washing', 'Exterior windows', 'Concrete cleaning', 'Roof + gutters'],
    projects: [['/projects/catawba-island-ohio-house-washing','House washing','Organic buildup documented before cleaning'],['/projects/deck-staining-in-catawba-island-oh','Deck restoration','Cleaning, sanding + staining']],
    related: [['/house-washing','House washing'],['/window-cleaning','Exterior windows'],['/concrete-cleaning','Concrete cleaning']],
  },
  fremont: {
    name: 'Fremont', slug: 'fremont', zip: '43420', eyebrow: 'Fremont · Northwest Ohio exterior cleaning',
    title: 'Exterior cleaning for Fremont homes and properties.',
    intro: 'We clean siding, concrete, roofs, gutters, windows, and other exterior surfaces in Fremont.',
    angleLabel: 'Exterior cleaning in Fremont', angleTitle: 'Exterior cleaning for the surfaces that need attention.',
    angle: 'Our Fremont work can include house washing, concrete, roofs, gutters, and exterior windows.',
    details: ['For a Fremont property, start with the surface that needs attention—siding, concrete, roof, gutters, or exterior windows—then include the rest of the exterior work in the same request if more than one area needs service.'],
    proofTitle: 'Jobs we’ve done around Northwest Ohio.', proofText: 'See work from communities we serve across Northwest Ohio.',
    callout: 'Serving Fremont', calloutBy: 'Fremont · Northwest Ohio',
    focus: ['House washing', 'Concrete cleaning', 'Roof + gutters', 'Exterior windows'],
    related: [['/house-washing','House washing'],['/concrete-cleaning','Concrete cleaning'],['/projects','Regional projects']],
  },
  genoa: {
    name: 'Genoa', slug: 'genoa', zip: '43430', eyebrow: 'Genoa · Northwest Ohio exterior cleaning',
    title: 'Exterior cleaning for Genoa homes and properties.',
    intro: 'We clean homes and properties in Genoa, including siding, concrete, gutters, and exterior windows.',
    angleLabel: 'Exterior cleaning in Genoa', angleTitle: 'Exterior cleaning for homes and properties in Genoa.',
    angle: 'We clean homes and properties in Genoa, including siding, concrete, gutters, and exterior windows.',
    details: ['For Genoa homes and properties, the service path stays simple: identify the exterior surfaces that need attention, review the relevant cleaning service, and include multiple areas in one estimate request when the job is broader than a single surface.'],
    proofTitle: 'Work near Genoa and across Northwest Ohio.', proofText: 'See jobs from nearby communities across Northwest Ohio.',
    callout: 'Serving Genoa', calloutBy: 'Genoa · Northwest Ohio',
    focus: ['House washing', 'Concrete cleaning', 'Gutter cleaning', 'Exterior windows'],
    related: [['/house-washing','House washing'],['/gutter-cleaning','Gutter cleaning'],['/projects','Regional projects']],
  },
  'johnsons-island': {
    name: 'Johnson’s Island', slug: 'johnsons-island', zip: '43440', eyebrow: 'Johnson’s Island · Sandusky Bay exterior cleaning',
    title: 'Exterior cleaning for Johnson’s Island properties.',
    intro: 'We clean Johnson’s Island homes, including siding, roofs, pavers, and exterior windows.',
    angleLabel: 'Johnson’s Island exterior cleaning', angleTitle: 'Exterior cleaning for island homes and waterfront properties.',
    angle: 'Our Johnson’s Island work can include house washing, roofs, pavers, and exterior windows.',
    details: ['Johnson’s Island properties deserve an approach suited to the home, its materials, and its setting.', 'Roof cleaning calls for material-sensitive methods. House washing can address accumulated mold, mildew, dirt, grime, and other exterior buildup.'],
    proofTitle: 'Exterior cleaning for Johnson’s Island homes.', proofText: 'We work on island properties throughout the Sandusky Bay area.',
    callout: 'House + gutter cleaning on Johnson’s Island', calloutBy: 'Real AquaBlast project · Johnson’s Island, Ohio',
    focus: ['House washing', 'Roof cleaning', 'Paver cleaning + sealing', 'Exterior windows'],
    projects: [['/projects/house-washing-and-gutter-cleaning-on-johnsons-island-','House + gutter cleaning','Multi-service island property'],['/projects/concrete-cleaningsealing-on-johnsons-island-ohio','Concrete cleaning + sealing','Cistern-aware island project']],
    related: [['/house-washing','House washing'],['/roof-cleaning','Roof cleaning'],['/paver-cleaning-sealing','Paver cleaning + sealing']],
  },
  lakeside: {
    name: 'Lakeside', slug: 'lakeside', zip: '43440', eyebrow: 'Lakeside · Lake Erie exterior cleaning',
    title: 'House washing and paver care for Lakeside properties.',
    intro: 'We clean homes and pavers in the Lakeside area, including paver sanding and sealing.',
    angleLabel: 'Exterior cleaning in Lakeside', angleTitle: 'House washing, paver care, and other exterior cleaning in Lakeside.',
    angle: 'We’ve completed whole-home exterior cleaning and paver cleaning, sanding, and sealing in the Lakeside area.',
    details: ['Around Lakeside, AquaBlast has handled deck soft washing, paver cleaning and sealing, exterior windows, and aluminum siding where oxidation had to be considered before treatment.', 'If your property has a similar surface or condition, show us the area that needs work so we can review the right scope.'],
    proofTitle: 'House washing and paver work in Lakeside.', proofText: 'We’ve completed Lakeside-area house washing and paver cleaning, sanding, and sealing.',
    proofImage: paverImage, proofAlt: 'Paver cleaning and sealing service', proofMeta: 'Pavers + house washing · Lakeside, OH',
    callout: '“On time, professional and a fantastic job!”', calloutBy: 'Molly E. · Lakeside / Marblehead area',
    focus: ['House washing', 'Paver cleaning + sealing', 'Gutter cleaning', 'Exterior windows'],
    projects: [['/projects/house-washing-in-lakeside-marblehead-ohio','Whole-property cleaning','House, gutters, deck + concrete'],['/paver-sealing-confederate-dr-lakeside-marblehead','Paver sealing','Cleaning, joint sand + sealing'],['/projects/deck-cleaning-lakeside-marblehead-oh','Deck cleaning','Seasonal deck refresh']],
    related: [['/house-washing','House washing'],['/paver-cleaning-sealing','Paver cleaning + sealing'],['/window-cleaning','Exterior windows']],
  },
  marblehead: {
    name: 'Marblehead', slug: 'marblehead', zip: '43440', eyebrow: 'Marblehead · Lake Erie exterior cleaning',
    title: 'Exterior cleaning for Marblehead homes and properties.',
    intro: 'We’ve completed a wide range of work in Marblehead, including condo washing, house washing, concrete cleaning, exterior windows, and paver care.',
    angleLabel: 'Marblehead exterior cleaning', angleTitle: 'One call for the exterior work around your property.',
    angle: 'We’ve completed house washing, concrete cleaning, exterior window cleaning, condo washing, and paver work around Marblehead.',
    details: ['Concrete and other hard surfaces can call for a different approach than siding or shingles. AquaBlast does not treat every exterior as a high-pressure job.', 'For house and roof work, AquaBlast describes using biodegradable cleaners and a gentler soft-wash application, with its published soft-wash range at roughly 40–80 PSI.'],
    proofTitle: 'House, concrete, window, condo, and paver work in Marblehead.', proofText: 'We’ve completed condo and garage soft washing, house washing, exterior window cleaning, concrete cleaning, and paver cleaning and sealing around Marblehead.',
    proofImage: concreteImage, proofAlt: 'Concrete cleaning service', proofMeta: 'House + concrete + windows · Marblehead, OH',
    callout: 'Marblehead exterior cleaning', calloutBy: 'Condo washing · Marblehead, Ohio',
    focus: ['House + condo washing', 'Concrete cleaning', 'Exterior windows', 'Paver cleaning + sealing'],
    projects: [['/projects/house-window-concrete-washing-marblehead-ohio','House + windows + concrete','Multi-surface residential visit'],['/projects/roof-cleaning-marblehead-oh','Roof + house + gutters','Soft-wash roof treatment'],['/projects/marblehead-oh-paver-cleaning-sansing-sealing','Paver cleaning + sealing','Patio + driveway maintenance']],
    related: [['/house-washing','House washing'],['/concrete-cleaning','Concrete cleaning'],['/paver-cleaning-sealing','Paver cleaning + sealing']],
  },
  'oak-harbor': {
    name: 'Oak Harbor', slug: 'oak-harbor', zip: '43449', eyebrow: 'Oak Harbor · Northwest Ohio exterior cleaning',
    title: 'House washing and exterior cleaning in Oak Harbor.',
    intro: 'We serve Oak Harbor and have completed multiple house-washing jobs there along with other exterior-cleaning work.',
    angleLabel: 'Oak Harbor exterior cleaning', angleTitle: 'House washing, windows, roofs, and hard surfaces.',
    angle: 'Our Oak Harbor work can include house washing, windows, roofs, and concrete.',
    details: ['AquaBlast keeps customers informed through the cleaning process, whether the job is a straightforward house wash or more involved window work.', 'Concrete, stone, brick, and hardwood may need a different method from softer woods, shingles, and siding that call for a gentler approach.'],
    proofTitle: 'House washing in Oak Harbor.', proofText: 'We’ve completed house-washing work in Oak Harbor, including homes scheduled while crews were already serving the area.',
    proofImage: houseImage, proofAlt: 'House washing service', proofMeta: 'House washing · Oak Harbor, OH',
    callout: 'Oak Harbor customer feedback', calloutBy: 'Tim Sigurdson · Oak Harbor, Ohio',
    focus: ['House washing', 'Exterior windows', 'Roof cleaning', 'Concrete + hard surfaces'],
    projects: [['/projects/house-washing-oak-harbor','House washing','Localized house-washing request'],['/projects/gutter-cleaning-oak-harbor-oh','Gutter cleaning','Downspout clearing + debris removal'],['/projects/concrete-deck-and-window-cleaning-in-oak-harbor-ohio','Concrete + deck + windows','Multi-surface exterior cleaning']],
    related: [['/house-washing','House washing'],['/window-cleaning','Exterior windows'],['/roof-cleaning','Roof cleaning']],
  },
  sandusky: {
    heroImage: sanduskyHero, heroAlt: 'Sandusky exterior-cleaning project',
    name: 'Sandusky', slug: 'sandusky', zip: '44870', eyebrow: 'Sandusky · Exterior cleaning',
    title: 'Exterior cleaning for Sandusky homes and properties.',
    intro: 'We’ve completed pressure-washing work in Sandusky, including deck cleaning and gutter cleaning.',
    angleLabel: 'Our work in Sandusky', angleTitle: 'Deck, gutter, house, and hard-surface cleaning in Sandusky.',
    angle: 'We’ve completed multiple Sandusky jobs, including deck and gutter cleaning, and have customer feedback from the area.',
    details: ['Stronger outdoor surfaces can take a more forceful cleaning approach, while siding, shingles, and softer wood need gentler treatment.', 'Clear gutters help move rainwater away from the home and foundation—not just make the roofline look cleaner.'],
    proofTitle: 'Deck cleaning in Sandusky.', proofText: 'We’ve completed Sandusky deck cleaning in preparation for future sanding and staining.', proofImage: deckProof,
    proofAlt: 'Before and after deck cleaning project in Sandusky', proofMeta: 'Deck cleaning · Sandusky, OH',
    callout: '“A company that knows how to treat a customer. Just that simple.”', calloutBy: 'Paul Schoen · Sandusky, Ohio',
    focus: ['House washing', 'Deck + wood cleaning', 'Gutter cleaning', 'Concrete + hard surfaces'],
    projects: [['/projects/deck-cleaning-sandusky-ohio','Deck cleaning','Prepared for future sanding + staining'],['/projects/gutter-cleaning-sandusky-ohio-','Gutter cleaning','Gutters + downspouts'],['/projects/house-washing-in-sandusky-ohio','House washing','Residential soft-wash project']],
    related: [['/wood-restoration','Deck + wood work'],['/gutter-cleaning','Gutter cleaning'],['/projects','Sandusky projects']],
  },
  'put-in-bay': {
    heroImage: putInBayHero, heroAlt: 'Illustrative Put-in-Bay island and marina context',
    name: 'Put-In-Bay', slug: 'put-in-bay', zip: '43456', eyebrow: 'Put-In-Bay · Island exterior cleaning',
    title: 'Exterior cleaning for Put-In-Bay homes and properties.',
    intro: 'We clean Put-In-Bay homes and properties, including siding, roofs, windows, gutters, and concrete.',
    angleLabel: 'Put-In-Bay exterior cleaning', angleTitle: 'Exterior-cleaning services for island homes and properties.',
    angle: 'We serve Put-In-Bay with driveway cleaning, house washing, soft washing, gutter cleaning, window cleaning, roof cleaning, and related exterior services.',
    details: ['Durable outdoor surfaces may call for pressure washing, while siding and shingles need a gentler soft-wash approach.', 'Automotive-fluid stains can work into porous driveway concrete when left untreated, so include those areas in the photos you send.'],
    proofTitle: 'What a Put-In-Bay customer said.', proofText: 'Melissa F. specifically mentions pressure washing and gutter clean-out in her review.',
    callout: '“Ryan was on time, highly detailed and worked quickly on our home.”', calloutBy: 'Melissa F. · Put-In-Bay, Ohio',
    focus: ['House washing', 'Roof cleaning', 'Gutter cleaning', 'Driveways + concrete'],
    related: [['/house-washing','House washing'],['/roof-cleaning','Roof cleaning'],['/gutter-cleaning','Gutter cleaning']],
  },
  'kelleys-island': {
    name: 'Kelleys Island', slug: 'kelleys-island', zip: '43438', eyebrow: 'Kelleys Island · Island exterior cleaning',
    title: 'Exterior cleaning for Kelleys Island properties.',
    intro: 'We serve Kelleys Island and have completed house washing and gutter cleaning there, including jobs coordinated around ferry access.',
    angleLabel: 'Kelleys Island exterior cleaning', angleTitle: 'Island work coordinated around the property and ferry access.',
    angle: 'We’ve coordinated Kelleys Island work around ferry access and property scheduling.',
    details: ['AquaBlast texts when the crew arrives and when the work is complete, so you can stay informed even when you are not at the island property.', 'Patios and outdoor-living areas can be included alongside house washing when they need attention during the same visit.'],
    proofTitle: 'House washing + gutter cleaning on Kelleys Island.', proofText: 'We’ve coordinated Kelleys Island scheduling around ferry access and completed house washing and gutter cleaning on the island.',
    callout: 'Kelleys Island house + gutter cleaning', calloutBy: 'House washing + gutter cleaning · Kelleys Island',
    focus: ['House washing', 'Gutter cleaning', 'Patios + concrete', 'Exterior windows'],
    projects: [['/house-washing-gutter-cleaning-kelleys-island-oh','House + gutter cleaning','Ferry-coordinated island project']],
    related: [['/house-washing','House washing'],['/gutter-cleaning','Gutter cleaning'],['/window-cleaning','Exterior windows']],
  },
  tiffin: {
    heroImage: tiffinHero, heroAlt: 'Illustrative Tiffin residential exterior-cleaning context',
    name: 'Tiffin', slug: 'tiffin', zip: '44883', eyebrow: 'Tiffin · Northwest Ohio exterior cleaning',
    title: 'Exterior cleaning for Tiffin homes and properties.',
    intro: 'We serve Tiffin and have completed house-washing work there as part of our inland Northwest Ohio service area.',
    angleLabel: 'Exterior cleaning in Tiffin', angleTitle: 'Exterior cleaning for homes throughout the Tiffin area.',
    angle: 'We serve Tiffin with house washing, roof cleaning, gutter cleaning, concrete cleaning, exterior window cleaning, and related services.',
    details: ['Overhanging sap-producing trees, nearby dirt roads or manufacturing, and frequent rain can leave some Tiffin homes needing more regular exterior washing.', 'Roof cleaning addresses buildup on metal or shingle roofs, while gutter cleaning restores drainage. Both can be reviewed alongside siding work.'],
    proofTitle: 'House washing in Tiffin.', proofText: 'One Tiffin house-washing project was scheduled early in spring and completed after landscaping work was finished.',
    callout: 'Tiffin house washing', calloutBy: 'House washing · Tiffin, Ohio',
    focus: ['House washing', 'Roof + gutters', 'Concrete cleaning', 'Exterior windows'],
    projects: [['/projects/house-washing-in-tiffin-ohio','House washing','Scheduled after spring landscaping']],
    related: [['/house-washing','House washing'],['/roof-cleaning','Roof cleaning'],['/concrete-cleaning','Concrete cleaning']],
  },
  toledo: {
    heroImage: toledoHero, heroAlt: 'Illustrative Toledo paver and exterior-cleaning context',
    name: 'Toledo', slug: 'toledo', zip: '', eyebrow: 'Toledo · Northwest Ohio exterior cleaning',
    title: 'Exterior cleaning for Toledo homes and properties.',
    intro: 'We clean pavers, concrete, homes, and commercial properties in Toledo.',
    angleLabel: 'Toledo exterior cleaning', angleTitle: 'Paver cleaning and sealing for Toledo properties.',
    angle: 'For Toledo properties, we handle pavers, concrete, siding, and other exterior surfaces that need cleaning or ongoing care.',
    details: ['Toledo exterior work can include gutters, roofs, driveways, house washing, concrete, and paver cleaning and sealing.', 'For pavers and other hard surfaces, the cleaning approach should match the material and buildup rather than treating every outdoor area the same way.'],
    proofTitle: 'Paver cleaning + sealing in Toledo.', proofText: 'Pavers can collect moss, algae, staining, and other buildup over time. We offer cleaning and sealing for patios, pool decks, paver driveways, and related surfaces.',
    proofImage: paverImage, proofAlt: 'Paver cleaning and sealing service', proofMeta: 'Paver cleaning + sealing · Service focus',
    callout: 'Toledo paver cleaning + sealing', calloutBy: 'Pavers · patios · pool decks · driveways',
    focus: ['Paver cleaning + sealing', 'House washing', 'Concrete cleaning', 'Commercial exterior cleaning'],
    related: [['/paver-cleaning-sealing','Paver cleaning + sealing'],['/concrete-cleaning','Concrete cleaning'],['/commercial-pressure-washing','Commercial cleaning']],
  },
}

const serviceCards = [
  { href:'/house-washing', label:'Home exterior', title:'House washing', note:'Siding and exterior surfaces.', image:houseImage },
  { href:'/roof-cleaning', label:'Roof', title:'Roof cleaning', note:'Low-pressure cleaning for roof buildup and streaking.', image:roofImage },
  { href:'/concrete-cleaning', label:'Hard surfaces', title:'Concrete cleaning', note:'Driveways, patios, sidewalks, and other exterior concrete.', image:concreteImage },
]

function LocationLanding({ market }) {
  const estimateHref = `/estimate?location=${market.slug}&source=location%3A${market.slug}`
  useServicePageMetadata({
    title: `${market.name} Exterior Cleaning | AquaBlast Pressure Washing`,
    description: `AquaBlast exterior cleaning services for homes and properties in ${market.name}, Ohio.`,
    canonicalPath: locationCanonicalPath(market.slug),
  })
  return <ServicePageShell estimateHref={estimateHref} className="location-page location-market-page" headerChildren={<div className="location-header-note">{market.name}, Ohio</div>}>
      <section className="location-hero location-market-hero">
        <img src={market.heroImage || truckImage} alt={market.heroAlt || `${market.name} exterior cleaning`} width="1600" height="900" loading="eager" decoding="async" fetchPriority="high" />
        <div className="location-hero-copy"><p className="kicker">{market.eyebrow}</p><h1>{market.title}<br /><em>Start with your property.</em></h1><p>{market.intro}</p><div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#local-context">Exterior cleaning in {market.name} <span aria-hidden="true">↓</span></a></div></div>
      </section>

      <section className="location-market-context" id="local-context">
        <div><p className="kicker">{market.angleLabel}</p><h2>{market.angleTitle}</h2></div>
        <div className="location-market-copy"><p>{market.angle}</p>{market.details?.map((detail) => <p className="location-market-detail" key={detail}>{detail}</p>)}<ul>{market.focus.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="location-services" aria-labelledby={`${market.slug}-services`}>
        <div className="section-heading"><div><p className="kicker">Services in {market.name}</p><h2 id={`${market.slug}-services`}>What do you need cleaned?</h2></div><p>We clean siding, roofs, gutters, concrete, windows, wood, pavers, and other exterior surfaces.</p></div>
        <div className="location-service-grid">{serviceCards.map(card => <a href={card.href} className="location-service-card" key={card.href}><img src={card.image} alt="" loading="lazy" decoding="async" /><span>{card.label}</span><b>{card.title}</b><small>{card.note}</small></a>)}<a href="/pressure-washing-company" className="location-service-card location-service-card-text"><div className="location-card-field"><span>All services</span><b>View all services</b><small>Residential, specialty, and commercial exterior cleaning.</small></div></a></div>
      </section>

      <section className="location-proof location-market-proof" id="proof">
        <div className="section-heading"><div><p className="kicker">Our work · {market.name}</p><h2>{market.proofTitle}</h2></div><p>{market.proofText}</p></div>
        <div className={`location-market-proof-grid ${market.proofImage ? 'has-image' : ''}`}>
          {market.proofImage && <figure><img src={market.proofImage} alt={market.proofAlt} loading="lazy" decoding="async" /><figcaption><span>Our work</span><b>{market.proofMeta}</b></figcaption></figure>}
          <blockquote><p>{market.callout}</p><footer>{market.calloutBy}</footer></blockquote>
        </div>
        {market.projects?.length > 0 && <div className="location-local-projects" aria-label={`Completed projects in ${market.name}`}>
          <div className="location-local-projects-heading"><span>Completed local work</span><b>Projects from {market.name}</b></div>
          <div className="location-local-project-links">{market.projects.map(([href,label,note]) => <a href={href} key={href}><span>{label}</span><small>{note}</small><b aria-hidden="true">→</b></a>)}</div>
        </div>}
      </section>

      <section className="bg-plan location-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will help define the job.</h2><p>Send the {market.name} address, the surfaces that need attention, and a few photos so we can review condition and access.</p><a className="cta" href={estimateHref}>Start a {market.name} estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the {market.name} address.</span></li><li><b>02</b><span>Show us the surfaces that need cleaning.</span></li><li><b>03</b><span>Add photos so we can review condition and access.</span></li></ol></section>

      <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and nearby jobs.</h2></div><div className="location-search-copy"><p>Browse related services and jobs, or send us your property details.</p><div className="location-related-links" aria-label={`Related pages for ${market.name}`}>{market.related.map(([href,label]) => <a href={href} key={href}>{label} <span aria-hidden="true">→</span></a>)}<a href="/projects">Completed projects <span aria-hidden="true">→</span></a><a href="/reviews">Customer reviews <span aria-hidden="true">→</span></a><a href="/pressure-washing-tips">Cleaning tips <span aria-hidden="true">→</span></a><a href="/near-me">All service-area pages <span aria-hidden="true">→</span></a></div></div></section>
      <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and nearby work.</h2></div><div className="location-search-copy"><p>Compare the services that fit your property, then send one request with the surfaces you want reviewed.</p><div className="location-related-links" aria-label={`Related pages for ${market.name}`}>{market.related.map(([href,label]) => <a href={href} key={href}>{label} <span aria-hidden="true">→</span></a>)}<a href="/projects">Completed projects <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>
      <section className="service-final location-final"><div><p className="kicker">{market.name} property?</p><h2>Ready for an estimate?</h2><p>Add the property details and a few photos of the areas you want cleaned.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
    </ServicePageShell>
}

function BowlingGreenLanding() {
  const market = markets['bowling-green']
  const estimateHref = '/estimate?location=bowling-green&source=location%3Abowling-green'
  const heroImage = '/assets/live-projects/projects-gutter-cleaning-bowling-green-ohio/01-down-net-http20240512-112-5x7son-jpg.jpg'
  const beforeAfter = '/assets/live-projects/projects-gutter-cleaning-bowling-green-ohio/02-bggutter-jpg.jpg'
  useServicePageMetadata({
    title: 'Bowling Green Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast gutter cleaning, house washing, roof cleaning, concrete cleaning, and exterior care in Bowling Green, Ohio.',
    canonicalPath: locationCanonicalPath('bowling-green'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page bowling-green-page" headerChildren={<div className="location-header-note">Bowling Green, Ohio</div>}>
    <ServiceHero
      image={heroImage}
      alt="Gutter cleaning project completed by AquaBlast in Bowling Green, Ohio"
      eyebrow="Bowling Green · Northwest Ohio"
      title="Exterior cleaning in Bowling Green."
      flavor="Start with the part of the property that needs attention."
      className="location-service-hero bowling-green-hero"
    >
      <p>Gutters, roofs, siding, concrete, and other exterior surfaces collect buildup over time. AquaBlast serves Bowling Green and has completed local gutter-cleaning work on two-story homes.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#bowling-green-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with the problem</p><h2>You should not have to turn exterior maintenance into a ladder project.</h2></div>
      <div><p>Clogged gutters, roof buildup, dirty siding, and stained concrete are easy to put off—especially when the work is high, awkward, or spread across several parts of the property.</p><p>Tell us what needs attention and where it is on the property. We can help you match the cleaning method to the surface instead of treating everything the same way.</p></div>
    </section>

    <section className="bg-local-proof" id="bowling-green-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Bowling Green work</p><h2>Two-story gutter cleaning, documented locally.</h2><p>This is an actual AquaBlast gutter-cleaning project in Bowling Green. The job included clearing gutters and downspouts on a two-story home.</p><a className="secondary" href="/projects/gutter-cleaning-bowling-green-ohio">View the Bowling Green project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={heroImage} alt="Debris being removed from a gutter during an AquaBlast Bowling Green project" width="1440" height="1080" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Bowling Green, Ohio</b></figcaption></figure>
      <figure className="bg-proof-detail"><img src={beforeAfter} alt="Before and after gutter cleaning detail from Bowling Green" loading="lazy" decoding="async" /><figcaption><span>Before + after</span><b>Gutter cleaning</b></figcaption></figure>
    </section>

    <section className="bg-services" aria-labelledby="bg-services-title"><div className="section-heading"><div><p className="kicker">Services in Bowling Green</p><h2 id="bg-services-title">Start with the surface that needs attention.</h2></div><p>These are the exterior services most relevant to the Bowling Green page. You can include more than one area in the same estimate request.</p></div><div className="bg-service-grid">
      <a href="/gutter-cleaning"><img src="/assets/live-projects/projects-gutter-cleaning-bowling-green-ohio/02-bggutter-jpg.jpg" alt="Gutter cleaning service on a Bowling Green AquaBlast project" width="225" height="225" loading="lazy" /><span>01</span><b>Gutter cleaning</b><p>Clear gutters and downspouts without making ladder work your weekend project.</p></a>
      <a href="/house-washing"><img src={houseImage} alt="House washing service" width="500" height="313" loading="lazy" /><span>02</span><b>House washing</b><p>Remove exterior buildup from siding and other washable surfaces.</p></a>
      <a href="/roof-cleaning"><img src={roofImage} alt="Roof cleaning service" loading="lazy" /><span>03</span><b>Roof cleaning</b><p>Use a material-appropriate approach for roof staining and organic growth.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" width="500" height="313" loading="lazy" /><span>04</span><b>Concrete cleaning</b><p>Clean driveways, sidewalks, patios, and other hard surfaces around the property.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will help define the job.</h2><p>You do not need to diagnose every stain or know which cleaning method to request.</p><a className="cta" href={estimateHref}>Start a Bowling Green estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Bowling Green address.</span></li><li><b>02</b><span>Show us the surfaces that need attention.</span></li><li><b>03</b><span>Add photos so we can review access and condition.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and nearby work.</h2></div><div className="location-search-copy"><p>Compare the local project with the services that fit your property.</p><div className="location-related-links"><a href="/gutter-cleaning">Gutter cleaning <span aria-hidden="true">→</span></a><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/roof-cleaning">Roof cleaning <span aria-hidden="true">→</span></a><a href="/projects/gutter-cleaning-bowling-green-ohio">Bowling Green project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Bowling Green property?</p><h2>Show us what needs cleaning.</h2><p>Add the address and a few photos. We will review the property and the surfaces that need attention.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function CatawbaIslandLanding() {
  const market = markets['catawba-island']
  const estimateHref = '/estimate?location=catawba-island&source=location%3Acatawba-island'
  const heroImage = catawbaHouseHero
  const detailImage = catawbaDeckProject
  useServicePageMetadata({
    title: 'Catawba Island Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, exterior window cleaning, concrete cleaning, roof cleaning, and related exterior care in Catawba Island, Ohio.',
    canonicalPath: locationCanonicalPath('catawba-island'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page catawba-island-page" headerChildren={<div className="location-header-note">Catawba Island, Ohio</div>}>
    <ServiceHero
      image={heroImage}
      alt="House washing project completed by AquaBlast in Catawba Island, Ohio"
      eyebrow="Catawba Island · Lake Erie"
      title="House washing in Catawba Island."
      flavor="Start with the surfaces that show it first."
      className="location-service-hero catawba-hero"
    >
      <p>Organic buildup, weathering, and general exterior grime can build up fast on Lake Erie properties. AquaBlast serves Catawba Island and has completed local house-washing work there.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#catawba-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with the problem</p><h2>Not every exterior surface should be cleaned the same way.</h2></div>
      <div><p>Siding, concrete, roof lines, and exterior windows each collect buildup differently. On Catawba Island properties, the goal is to identify what is actually on the surface and use the right cleaning approach instead of treating everything like the same job.</p><p>House washing can be coordinated with concrete, roof, wood, window, or paver care. Start with the part of the property you notice first, then include the other areas that need attention.</p></div>
    </section>

    <section className="bg-local-proof" id="catawba-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Catawba Island work</p><h2>Local house-washing proof, with related exterior work nearby.</h2><p>This is a real AquaBlast house-washing project from Catawba Island. The local project notes visible exterior buildup before cleaning.</p><a className="secondary" href="/projects/catawba-island-ohio-house-washing">View the Catawba Island house-washing project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={heroImage} alt="Real AquaBlast house washing project in Catawba Island" width="1000" height="1333" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Catawba Island, Ohio</b></figcaption></figure>
      <figure className="bg-proof-detail"><img src={detailImage} alt="Deck restoration project completed by AquaBlast in Catawba Island" width="900" height="900" loading="lazy" decoding="async" /><figcaption><span>Also completed locally</span><b>Deck restoration</b></figcaption></figure>
    </section>

    <section className="bg-services" aria-labelledby="catawba-services-title"><div className="section-heading"><div><p className="kicker">Services in Catawba Island</p><h2 id="catawba-services-title">Start with what needs attention now.</h2></div><p>From house washing to pavers and exterior windows, AquaBlast can review the surfaces that need care at your Catawba Island property.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean exterior siding and remove visible buildup from the surfaces people notice first.</p></a>
      <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior window cleaning service" loading="lazy" /><span>02</span><b>Exterior windows</b><p>Keep exterior glass cleaner on homes where the view is part of the property value.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><span>03</span><b>Concrete cleaning</b><p>Clean porches, walks, patios, and other hard surfaces where buildup settles into porous concrete.</p></a>
      <a href="/roof-cleaning"><img src={roofImage} alt="Roof cleaning service" loading="lazy" /><span>04</span><b>Roof cleaning</b><p>Address roof staining and organic growth with a surface-appropriate cleaning method.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We can help define the work.</h2><p>You do not need to name every condition correctly before reaching out. Tell us what part of the property needs attention and include a few photos.</p><a className="cta" href={estimateHref}>Start a Catawba Island estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Catawba Island address.</span></li><li><b>02</b><span>Show us the surfaces that need attention.</span></li><li><b>03</b><span>Add photos so we can review condition and access.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and nearby work.</h2></div><div className="location-search-copy"><p>Compare the local project with the services that fit your property best.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/window-cleaning">Exterior windows <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Concrete cleaning <span aria-hidden="true">→</span></a><a href="/projects/catawba-island-ohio-house-washing">Catawba Island house-washing project <span aria-hidden="true">→</span></a><a href="/projects/deck-staining-in-catawba-island-oh">Catawba Island deck project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Catawba Island property?</p><h2>Show us what needs cleaning.</h2><p>Add the address and a few photos. We will review the property and the surfaces that need attention.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function FremontLanding() {
  const estimateHref = '/estimate?location=fremont&source=location%3Afremont'
  useServicePageMetadata({
    title: 'Fremont Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, concrete cleaning, roof cleaning, gutter cleaning, and exterior window cleaning for Fremont, Ohio properties.',
    canonicalPath: locationCanonicalPath('fremont'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page fremont-page" headerChildren={<div className="location-header-note">Fremont, Ohio</div>}>
    <ServiceHero
      image={fremontHero}
      alt="Real AquaBlast exterior cleaning project from nearby Gibsonburg, Ohio"
      eyebrow="Fremont · Northwest Ohio"
      title="Exterior cleaning in Fremont."
      flavor="Start with the surface that needs attention."
      className="location-service-hero fremont-hero"
    >
      <p>Dirty siding, stained concrete, roof buildup, clogged gutters, and dull exterior glass can all change how a property feels. AquaBlast serves Fremont and the surrounding Northwest Ohio area.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#fremont-services">See Fremont services <span aria-hidden="true">↓</span></a></div>
      <small className="location-hero-media-note">Real AquaBlast work in nearby Gibsonburg, Ohio.</small>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with the problem</p><h2>One property can need several kinds of exterior cleaning at once.</h2></div>
      <div><p>A Fremont estimate does not have to begin with the perfect service name. Start with the surfaces you can see need attention—siding, concrete, roof, gutters, or exterior windows—and show us the broader property when more than one area is involved. Oil and traffic residue can settle into concrete, while algae and organic buildup can show up differently on roofing and siding.</p><p>That gives AquaBlast enough context to separate delicate surfaces from harder ones and define the job around the property instead of forcing everything into one cleaning method. Roof streaking and algae call for a surface-appropriate treatment, while overflowing or clogged gutters need debris and drainage addressed rather than simply blasting the exterior.</p></div>
    </section>

    <section className="bg-services" id="fremont-services" aria-labelledby="fremont-services-title"><div className="section-heading"><div><p className="kicker">Services in Fremont</p><h2 id="fremont-services-title">Choose the part of the property you notice first.</h2></div><p>These are the core exterior-cleaning services tied to the current Fremont service story.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and other washable exterior surfaces without treating the home like concrete.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><span>02</span><b>Concrete cleaning</b><p>Address driveways, sidewalks, patios, and other hard surfaces around the property.</p></a>
      <a href="/roof-cleaning"><img src={roofImage} alt="Roof cleaning service" loading="lazy" /><span>03</span><b>Roof cleaning</b><p>Use a material-appropriate approach for dark streaks, organic buildup, and roof staining.</p></a>
      <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior cleaning equipment" loading="lazy" /><span>04</span><b>Exterior windows</b><p>Include exterior glass when the whole property needs a cleaner finished appearance.</p></a>
    </div></section>

    <section className="bg-local-proof regional-proof fremont-regional-proof" id="fremont-proof">
      <div className="bg-proof-copy"><p className="kicker">Regional AquaBlast proof</p><h2>Real work from just outside Fremont.</h2><p>A Fremont-specific project photo is not currently available, so the proof below comes from real AquaBlast work in nearby Gibsonburg. It shows the kind of multi-surface exterior cleaning available across this part of Northwest Ohio.</p></div>
      <figure><img src={fremontHero} alt="Before and after exterior cleaning project in nearby Gibsonburg, Ohio" width="1440" height="1440" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Nearby Gibsonburg, Ohio</b></figcaption></figure>
    </section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will help define the job.</h2><p>Send the Fremont address, the surfaces that need attention, and a few photos. You do not need to diagnose every stain or choose the cleaning method yourself.</p><a className="cta" href={estimateHref}>Start a Fremont estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Fremont address.</span></li><li><b>02</b><span>Show us the surfaces that need cleaning.</span></li><li><b>03</b><span>Add photos so we can review condition and access.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and regional work.</h2></div><div className="location-search-copy"><p>Compare the services that fit your property, then send one request that includes everything you want reviewed.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Concrete cleaning <span aria-hidden="true">→</span></a><a href="/roof-cleaning">Roof cleaning <span aria-hidden="true">→</span></a><a href="/window-cleaning">Exterior windows <span aria-hidden="true">→</span></a><a href="/projects">Completed projects <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Fremont property?</p><h2>Show us what needs cleaning.</h2><p>Add the address and a few photos of the surfaces you want reviewed.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function GenoaLanding() {
  const estimateHref = '/estimate?location=genoa&source=location%3Agenoa'
  useServicePageMetadata({
    title: 'Genoa Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, concrete cleaning, gutter cleaning, exterior window cleaning, and related exterior care for Genoa, Ohio properties.',
    canonicalPath: locationCanonicalPath('genoa'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page genoa-page" headerChildren={<div className="location-header-note">Genoa, Ohio</div>}>
    <ServiceHero
      image={genoaHero}
      alt="Illustrated Genoa-area home with refreshed siding, bright concrete, and clean exterior surfaces"
      eyebrow="Genoa · Northwest Ohio"
      title="Exterior cleaning in Genoa."
      flavor="Start with the part of the property that looks tired."
      className="location-service-hero genoa-hero"
    >
      <p>Siding, concrete, gutters, and exterior glass all collect buildup differently. AquaBlast serves Genoa and the surrounding Northwest Ohio area with exterior cleaning built around the surface in front of us.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#genoa-services">See Genoa services <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with the problem</p><h2>You do not need to know the service name before you ask for help.</h2></div>
      <div><p>If the siding looks dingy, the driveway has dark buildup, the gutters need attention, or the exterior glass is dull, start there. Northwest Ohio moisture, temperature changes, pollen, and organic growth can build up differently across roofs, siding, concrete, decks, and fences, so a Genoa estimate can include more than one part of the property.</p><p>Algae, moss, mold, and mildew can leave staining or make hard surfaces slick. AquaBlast can separate the job by surface and condition so softer exterior materials are not treated the same way as hard concrete.</p></div>
    </section>

    <section className="bg-services location-service-chooser genoa-service-chooser" id="genoa-services" aria-labelledby="genoa-services-title">
      <div className="section-heading location-service-heading"><div><p className="kicker">Services in Genoa</p><h2 id="genoa-services-title">Start with the surface changing the whole first impression.</h2></div><p>Genoa properties can combine siding, concrete, gutters, and exterior glass in one estimate. Start with the area you notice first and add the rest as needed.</p></div>
      <div className="location-service-grid genoa-service-grid">
        <a className="location-service-card location-service-primary" href="/house-washing"><img src={houseImage} alt="House washing service" width="500" height="313" loading="lazy" /><div><span>01 · Home exterior</span><b>House washing</b><p>Clean siding and washable exterior surfaces with a method matched to the material.</p><small>Explore house washing →</small></div></a>
        <a className="location-service-card location-service-wide" href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" width="500" height="313" loading="lazy" /><div><span>02 · Hard surfaces</span><b>Concrete cleaning</b><p>Address driveways, walks, patios, and other durable surfaces around the property.</p><small>Explore concrete cleaning →</small></div></a>
        <a className="location-service-card" href="/gutter-cleaning"><img src="/assets/concept-service-roofs-gutters-v1.webp" alt="Gutter cleaning service" width="1000" height="667" loading="lazy" /><div><span>03 · Drainage</span><b>Gutter cleaning</b><p>Clear debris from gutters and downspouts when water flow and buildup need attention.</p><small>Explore gutter cleaning →</small></div></a>
        <a className="location-service-card" href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior cleaning equipment" width="1920" height="1080" loading="lazy" /><div><span>04 · Finishing detail</span><b>Exterior windows</b><p>Include exterior glass when the property needs a cleaner finished appearance.</p><small>Explore window cleaning →</small></div></a>
      </div>
    </section>

    <section className="bg-local-proof regional-proof genoa-regional-proof" id="genoa-proof">
      <div className="bg-proof-copy"><p className="kicker">Regional AquaBlast proof</p><h2>Real work from nearby Northwest Ohio.</h2><p>A Genoa-specific project photo is not currently available, so the proof below comes from real AquaBlast work in nearby Oak Harbor.</p><a className="secondary" href="/projects">Browse completed projects <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><div className="genoa-proof-image"><img src={oakHarborMultiSurfaceProof} alt="Before and after AquaBlast multi-surface exterior cleaning project in nearby Oak Harbor, Ohio" loading="lazy" decoding="async" /></div><figcaption><span>Real AquaBlast project</span><b>Nearby Oak Harbor, Ohio</b></figcaption></figure>
    </section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will help define the job.</h2><p>Send the Genoa address, the surfaces that need attention, and a few photos. You do not need to diagnose every stain or decide on the cleaning method yourself.</p><a className="cta" href={estimateHref}>Start a Genoa estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Genoa address.</span></li><li><b>02</b><span>Show us the surfaces that need cleaning.</span></li><li><b>03</b><span>Add photos so we can review condition and access.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and regional work.</h2></div><div className="location-search-copy"><p>Compare the services that fit your property, then send one request that includes everything you want reviewed.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Concrete cleaning <span aria-hidden="true">→</span></a><a href="/gutter-cleaning">Gutter cleaning <span aria-hidden="true">→</span></a><a href="/window-cleaning">Exterior windows <span aria-hidden="true">→</span></a><a href="/projects">Completed projects <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Genoa property?</p><h2>Show us what needs cleaning.</h2><p>Add the address and a few photos of the surfaces you want reviewed.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function JohnsonsIslandLanding() {
  const estimateHref = '/estimate?location=johnsons-island&source=location%3Ajohnsons-island'
  useServicePageMetadata({
    title: 'Johnson’s Island Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, gutter cleaning, concrete cleaning, roof cleaning, and related exterior care for Johnson’s Island, Ohio properties.',
    canonicalPath: locationCanonicalPath('johnsons-island'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page johnsons-island-page" headerChildren={<div className="location-header-note">Johnson’s Island, Ohio</div>}>
    <ServiceHero
      image={johnsonsIslandHero}
      alt="Illustrated Johnson’s Island waterfront home with clean siding, crisp trim, and a refreshed exterior"
      eyebrow="Johnson’s Island · Sandusky Bay"
      title="Exterior cleaning on Johnson’s Island."
      flavor="Plan around the property, not a generic checklist."
      className="location-service-hero johnsons-island-hero"
    >
      <p>Island properties can bring their own access, water, and surface considerations. AquaBlast has completed local house washing, gutter cleaning, concrete cleaning, retaining-wall cleaning, and sealing work on Johnson’s Island.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#johnsons-island-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with the property</p><h2>Island work can depend on more than the surface alone.</h2></div>
      <div><p>Johnson’s Island jobs can involve several exterior surfaces at once, plus property-specific logistics such as water availability and access. That means the estimate should start with the whole situation rather than assuming every job follows the same setup.</p><p>AquaBlast’s local project history includes a multi-service house, concrete, gutter, and retaining-wall cleaning job, along with concrete cleaning and sealing planned around limited cistern capacity.</p></div>
    </section>

    <section className="bg-local-proof" id="johnsons-island-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Johnson’s Island work</p><h2>Two local projects show why the details matter.</h2><p>These are actual AquaBlast projects from Johnson’s Island: one combined house washing, gutter cleaning, concrete, and retaining-wall work; another coordinated concrete cleaning and sealing around the property’s water supply.</p><a className="secondary" href="/projects/house-washing-and-gutter-cleaning-on-johnsons-island-">View the house + gutter project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={johnsonsIslandHouseProof} alt="Before and after AquaBlast house washing and gutter cleaning project on Johnson’s Island" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>House + gutter cleaning · Johnson’s Island</b></figcaption></figure>
      <figure className="bg-proof-detail"><img src={johnsonsIslandConcrete} alt="Before and after AquaBlast concrete cleaning and sealing project on Johnson’s Island" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Concrete cleaning + sealing</b></figcaption></figure>
    </section>

    <section className="bg-services" id="johnsons-island-services" aria-labelledby="johnsons-island-services-title"><div className="section-heading"><div><p className="kicker">Services on Johnson’s Island</p><h2 id="johnsons-island-services-title">Start with what the property needs now.</h2></div><p>Local AquaBlast project history supports a broader exterior-cleaning mix here than a single-service page would suggest.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and other washable exterior surfaces with a method matched to the material.</p></a>
      <a href="/gutter-cleaning"><img src="/assets/live-projects/projects-house-washing-and-gutter-cleaning-on-johnsons-island/02-down-net-http20240427-68-sxgbns-jpg.jpg" alt="Gutter cleaning detail from an AquaBlast Johnson’s Island project" width="225" height="225" loading="lazy" /><span>02</span><b>Gutter cleaning</b><p>Clear gutters and downspouts as part of a larger exterior-maintenance visit when needed.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><span>03</span><b>Concrete cleaning</b><p>Address driveways, walks, patios, and retaining-wall surfaces around the property.</p></a>
      <a href="/roof-cleaning"><img src={roofImage} alt="Roof cleaning service" loading="lazy" /><span>04</span><b>Roof cleaning</b><p>Use a surface-appropriate method for roof staining and organic buildup.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will plan around its conditions.</h2><p>Send the Johnson’s Island address, the surfaces that need attention, and a few photos. If access or water supply matters, include that too so the estimate starts with the real job conditions.</p><a className="cta" href={estimateHref}>Start a Johnson’s Island estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Johnson’s Island address.</span></li><li><b>02</b><span>Show us the surfaces and access.</span></li><li><b>03</b><span>Add photos and any water-supply details.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and local projects.</h2></div><div className="location-search-copy"><p>Compare the services that fit your property, then review the real Johnson’s Island projects for context.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/gutter-cleaning">Gutter cleaning <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Concrete cleaning <span aria-hidden="true">→</span></a><a href="/projects/house-washing-and-gutter-cleaning-on-johnsons-island-">Johnson’s Island house + gutter project <span aria-hidden="true">→</span></a><a href="/projects/concrete-cleaningsealing-on-johnsons-island-ohio">Johnson’s Island concrete project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Johnson’s Island property?</p><h2>Show us what needs cleaning.</h2><p>Add the address, a few photos, and any property details that affect access or water so the job can be reviewed properly.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function KelleysIslandLanding() {
  const estimateHref = '/estimate?location=kelleys-island&source=location%3Akelleys-island'
  useServicePageMetadata({
    title: 'Kelleys Island Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, gutter cleaning, patio cleaning, exterior window cleaning, and related exterior care for Kelleys Island, Ohio.',
    canonicalPath: locationCanonicalPath('kelleys-island'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page kelleys-island-page" headerChildren={<div className="location-header-note">Kelleys Island, Ohio</div>}>
    <ServiceHero
      image={kelleysIslandHero}
      alt="Illustrated Kelleys Island home near the shoreline with refreshed siding and clean exterior details"
      eyebrow="Kelleys Island · Lake Erie"
      title="Exterior cleaning on Kelleys Island."
      flavor="Plan around the property—and the ferry."
      className="location-service-hero kelleys-island-hero"
    >
      <p>Island jobs can require more planning than a mainland stop. AquaBlast has completed house washing and gutter cleaning on Kelleys Island and coordinated the work around ferry access.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#kelleys-island-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with the logistics</p><h2>Island access changes how the job gets planned.</h2></div>
      <div><p>On Kelleys Island, the cleaning itself is only part of the job. Ferry timing, arrival windows, property access, and the surfaces being cleaned all need to line up so the visit works smoothly.</p><p>AquaBlast’s existing Kelleys Island service story also emphasizes communication—arrival updates, an explanation of the cleaning process, and a follow-up when the work is complete.</p></div>
    </section>

    <section className="bg-local-proof" id="kelleys-island-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Kelleys Island work</p><h2>House washing + gutter cleaning, coordinated around ferry access.</h2><p>This is an actual AquaBlast project from Kelleys Island. The customer requested both house washing and gutter cleaning, and the job was scheduled around the island ferry.</p><a className="secondary" href="/house-washing-gutter-cleaning-kelleys-island-oh">View the Kelleys Island project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={kelleysIslandProjectMain} alt="Before and after AquaBlast house and gutter cleaning project on Kelleys Island" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Kelleys Island, Ohio</b></figcaption></figure>
      <figure className="bg-proof-detail kelleys-proof-detail"><img src={kelleysIslandHouseDetail} alt="Kelleys Island home from a real AquaBlast house and gutter cleaning project" loading="lazy" decoding="async" /><figcaption><span>Project context</span><b>House + gutter cleaning</b></figcaption></figure>
    </section>

    <section className="bg-services" id="kelleys-island-services" aria-labelledby="kelleys-island-services-title"><div className="section-heading"><div><p className="kicker">Services on Kelleys Island</p><h2 id="kelleys-island-services-title">Start with the surfaces you use and notice most.</h2></div><p>Island properties often put more emphasis on outdoor living, house exteriors, gutters, and views. You can include more than one area in the same estimate request.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and other washable exterior surfaces with a method suited to the material.</p></a>
      <a href="/gutter-cleaning"><img src="/assets/live-projects/house-washing-gutter-cleaning-kelleys-island-oh/02-house-gutter-1-webp.webp" alt="Gutter cleaning detail from an AquaBlast Kelleys Island project" width="225" height="225" loading="lazy" /><span>02</span><b>Gutter cleaning</b><p>Clear gutters and downspouts without turning island maintenance into a ladder project.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Patio and concrete cleaning service" loading="lazy" /><span>03</span><b>Patios + concrete</b><p>Clean patios, walks, and other hard surfaces that support outdoor living around the property.</p></a>
      <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior window cleaning service" loading="lazy" /><span>04</span><b>Exterior windows</b><p>Keep exterior glass cleaner where the Lake Erie view is part of the property experience.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will plan the visit around the island.</h2><p>Send the Kelleys Island address, the surfaces that need attention, and a few photos. If there are ferry, access, or timing considerations, include those too.</p><a className="cta" href={estimateHref}>Start a Kelleys Island estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Kelleys Island address.</span></li><li><b>02</b><span>Show us the surfaces and access.</span></li><li><b>03</b><span>Add photos and timing details.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and local work.</h2></div><div className="location-search-copy"><p>Compare the services that fit your property, then review the real island project for context.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/gutter-cleaning">Gutter cleaning <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Patios + concrete <span aria-hidden="true">→</span></a><a href="/window-cleaning">Exterior windows <span aria-hidden="true">→</span></a><a href="/house-washing-gutter-cleaning-kelleys-island-oh">Kelleys Island project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Kelleys Island property?</p><h2>Show us what needs cleaning.</h2><p>Add the address, photos, and any timing or access details so the job can be reviewed before the island visit is planned.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function LakesideLanding() {
  const estimateHref = '/estimate?location=lakeside&source=location%3Alakeside'
  useServicePageMetadata({
    title: 'Lakeside Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, deck cleaning, paver cleaning and sealing, gutter cleaning, exterior window cleaning, and related exterior care in Lakeside, Ohio.',
    canonicalPath: locationCanonicalPath('lakeside'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page lakeside-page" headerChildren={<div className="location-header-note">Lakeside, Ohio</div>}>
    <ServiceHero
      image={lakesideHero}
      alt="Illustrated Lakeside Victorian cottage with refreshed exterior surfaces and welcoming curb appeal"
      eyebrow="Lakeside · Lake Erie"
      title="Exterior cleaning in Lakeside."
      flavor="Keep outdoor spaces ready for the season."
      className="location-service-hero lakeside-hero"
    >
      <p>Decks, pavers, siding, gutters, concrete, and exterior glass all take on weather and seasonal buildup. AquaBlast has completed multi-surface exterior cleaning throughout the Lakeside Marblehead area.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#lakeside-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with how you use the property</p><h2>Outdoor living areas can need more than one kind of cleaning.</h2></div>
      <div><p>A Lakeside property may have siding, a deck, pavers, concrete, gutters, windows, and landscape edges all visible from the same outdoor space. Treating the property as one blanket cleaning job can miss the differences between those surfaces.</p><p>AquaBlast’s local project history includes deck cleaning, whole-property exterior cleaning, paver cleaning and sealing, exterior window work, and multi-surface maintenance. Start with what looks tired or gets used most.</p></div>
    </section>

    <section className="bg-local-proof" id="lakeside-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Lakeside work</p><h2>Decks, houses, and pavers—documented locally.</h2><p>These are real AquaBlast projects from the Lakeside Marblehead area. Together they show the range of exterior surfaces homeowners may want to address in one visit or over time.</p><a className="secondary" href="/projects/deck-cleaning-lakeside-marblehead-oh">View the Lakeside deck project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={lakesideHouseProof} alt="Before and after whole-property exterior cleaning in Lakeside Marblehead" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Whole-property cleaning</b></figcaption></figure>
      <figure className="bg-proof-detail"><img src={lakesidePaverProof} alt="Before and after paver cleaning and sealing in Lakeside Marblehead" loading="lazy" decoding="async" /><figcaption><span>Also completed locally</span><b>Paver cleaning + sealing</b></figcaption></figure>
    </section>

    <section className="bg-services" aria-labelledby="lakeside-services-title"><div className="section-heading"><div><p className="kicker">Services in Lakeside</p><h2 id="lakeside-services-title">Start with the surface that changes how the property feels.</h2></div><p>These services reflect the work AquaBlast has already documented in the Lakeside Marblehead area.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and exterior surfaces so the whole property feels better cared for.</p></a>
      <a href="/wood-restoration"><img src={deckProof} alt="Deck cleaning before and after" loading="lazy" /><span>02</span><b>Deck cleaning</b><p>Refresh deck surfaces that have collected seasonal dirt, organic growth, and weathering.</p></a>
      <a href="/paver-cleaning-sealing"><img src={paverImage} alt="Paver cleaning and sealing service" width="500" height="313" loading="lazy" /><span>03</span><b>Paver care</b><p>Clean, re-sand, and seal paver patios and walks when the joints and surface need attention.</p></a>
      <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior window cleaning service" loading="lazy" /><span>04</span><b>Exterior windows</b><p>Clean exterior glass as part of a broader visible refresh around the home.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the spaces you want ready.</h2><p>Send the Lakeside address and a few photos of the house, deck, pavers, or other areas that need attention. If several surfaces are involved, include them together so the visit can be scoped as one property.</p><a className="cta" href={estimateHref}>Start a Lakeside estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Lakeside address.</span></li><li><b>02</b><span>Show us the surfaces you want cleaned.</span></li><li><b>03</b><span>Add photos so we can review condition and access.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and Lakeside work.</h2></div><div className="location-search-copy"><p>Compare the service pages with real local projects before you decide what belongs in the estimate.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/wood-restoration">Deck + wood care <span aria-hidden="true">→</span></a><a href="/paver-cleaning-sealing">Paver cleaning + sealing <span aria-hidden="true">→</span></a><a href="/projects/house-washing-in-lakeside-marblehead-ohio">Whole-property Lakeside project <span aria-hidden="true">→</span></a><a href="/paver-sealing-confederate-dr-lakeside-marblehead">Lakeside paver project <span aria-hidden="true">→</span></a><a href="/projects/deck-cleaning-lakeside-marblehead-oh">Lakeside deck project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Lakeside property?</p><h2>Show us what needs cleaning.</h2><p>Add the address and a few photos of the house, deck, pavers, or other exterior surfaces. We will review the property and help define the scope.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function MarbleheadLanding() {
  const estimateHref = '/estimate?location=marblehead&source=location%3Amarblehead'
  useServicePageMetadata({
    title: 'Marblehead Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, concrete cleaning, exterior window cleaning, roof cleaning, and paver care in Marblehead, Ohio.',
    canonicalPath: locationCanonicalPath('marblehead'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page marblehead-page" headerChildren={<div className="location-header-note">Marblehead, Ohio</div>}>
    <ServiceHero
      image={marbleheadHero}
      alt="Illustrated Marblehead waterfront home in sunset light with clean exterior surfaces and a polished property presentation"
      eyebrow="Marblehead · Lake Erie"
      title="Exterior cleaning in Marblehead."
      flavor="Take care of the surfaces people see every day."
      className="location-service-hero marblehead-hero"
    >
      <p>Homes around Marblehead often combine siding, concrete, pavers, windows, decks, and roof lines in the same view. AquaBlast has completed local projects across those surfaces, so the estimate can start with the parts of the property that bother you most.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#marblehead-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with what changed</p><h2>Different surfaces can make the same property look unevenly cared for.</h2></div>
      <div><p>A bright house next to stained concrete, tired pavers, or streaked exterior glass can still make the whole property feel unfinished. Marblehead projects often involve more than one visible surface, so the useful first step is to identify the areas that stand out most.</p><p>AquaBlast’s published Marblehead work includes house washing, concrete cleaning, exterior windows, roof cleaning, condo washing, and paver cleaning and sealing. Each surface gets the cleaning method that fits the material instead of one blanket approach.</p></div>
    </section>

    <section className="bg-local-proof" id="marblehead-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Marblehead work</p><h2>See how several surfaces can be handled together.</h2><p>These AquaBlast projects from Marblehead include more than one exterior surface. If your property needs house, window, and concrete cleaning, show us the full scope in one request.</p><a className="secondary" href="/projects/house-window-concrete-washing-marblehead-ohio">View the Marblehead multi-surface project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={marbleheadHouseConcreteProof} alt="Before and after concrete cleaning from a Marblehead AquaBlast project" width="1440" height="1440" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>House + concrete + windows</b></figcaption></figure>
      <figure className="bg-proof-detail"><img src={marbleheadRoofProof} alt="Roof cleaning project completed by AquaBlast in Marblehead" width="1080" height="1440" loading="lazy" decoding="async" /><figcaption><span>Also completed locally</span><b>Roof cleaning</b></figcaption></figure>
    </section>

    <section className="bg-services" aria-labelledby="marblehead-services-title"><div className="section-heading"><div><p className="kicker">Services in Marblehead</p><h2 id="marblehead-services-title">Choose the surfaces that are changing the way the property looks.</h2></div><p>These services reflect AquaBlast’s documented Marblehead work and the kinds of exterior surfaces that commonly appear together around one property.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and exterior surfaces without treating them like hard concrete.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><span>02</span><b>Concrete cleaning</b><p>Refresh walks, patios, driveways, and other porous hard surfaces around the home.</p></a>
      <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior window cleaning service" loading="lazy" /><span>03</span><b>Exterior windows</b><p>Clean exterior glass when the view and the rest of the property are already getting attention.</p></a>
      <a href="/paver-cleaning-sealing"><img src={paverImage} alt="Paver cleaning and sealing service" width="500" height="313" loading="lazy" /><span>04</span><b>Paver care</b><p>Clean, re-sand, and seal pavers when joints and surface appearance need maintenance.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property, not just one dirty spot.</h2><p>Send the Marblehead address and photos of the areas you want cleaned. If siding, concrete, pavers, windows, or the roof all need attention, include them together so the scope reflects the property you actually want improved.</p><a className="cta" href={estimateHref}>Start a Marblehead estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Marblehead address.</span></li><li><b>02</b><span>Show us every surface you want reviewed.</span></li><li><b>03</b><span>We match the approach to the material and access.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and Marblehead work.</h2></div><div className="location-search-copy"><p>Compare service details with real local projects before you decide what belongs in the estimate.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Concrete cleaning <span aria-hidden="true">→</span></a><a href="/window-cleaning">Exterior windows <span aria-hidden="true">→</span></a><a href="/paver-cleaning-sealing">Paver cleaning + sealing <span aria-hidden="true">→</span></a><a href="/projects/roof-cleaning-marblehead-oh">Marblehead roof project <span aria-hidden="true">→</span></a><a href="/projects/marblehead-oh-paver-cleaning-sansing-sealing">Marblehead paver project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Marblehead property?</p><h2>Show us what needs attention.</h2><p>Add the address and a few photos. We will review the surfaces together and help define the scope for the estimate.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

function OakHarborLanding() {
  const estimateHref = '/estimate?location=oak-harbor&source=location%3Aoak-harbor'
  useServicePageMetadata({
    title: 'Oak Harbor Exterior Cleaning | AquaBlast Pressure Washing',
    description: 'AquaBlast house washing, gutter cleaning, exterior window cleaning, roof cleaning, concrete cleaning, and related exterior care in Oak Harbor, Ohio.',
    canonicalPath: locationCanonicalPath('oak-harbor'),
  })

  return <ServicePageShell estimateHref={estimateHref} className="location-page oak-harbor-page" headerChildren={<div className="location-header-note">Oak Harbor, Ohio</div>}>
    <ServiceHero
      image={oakHarborHero}
      alt="Illustrated Oak Harbor brick home with refreshed exterior surfaces, tidy landscaping, and strong curb appeal"
      eyebrow="Oak Harbor · Northwest Ohio"
      title="Exterior cleaning in Oak Harbor."
      flavor="Start with the surfaces making the property feel tired."
      className="location-service-hero oak-harbor-hero"
    >
      <p>AquaBlast has completed house washing, gutter cleaning, concrete, deck, and exterior-window work in Oak Harbor. Start with the part of the property that is bothering you most, then include the rest in the same estimate if more than one surface needs attention.</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href="#oak-harbor-proof">See local work <span aria-hidden="true">↓</span></a></div>
    </ServiceHero>

    <section className="bg-problem">
      <div><p className="kicker">Start with what you notice</p><h2>One neglected surface can make the whole exterior feel unfinished.</h2></div>
      <div><p>Dirty siding, overflowing gutters, stained concrete, or dull exterior glass can each become the thing you notice first. Oak Harbor projects cover several of those surfaces, so ask what parts of the property should be handled together.</p><p>Durable hard surfaces can need a different treatment from siding, shingles, and softer materials. The cleaning method should follow the surface.</p></div>
    </section>

    <section className="bg-local-proof" id="oak-harbor-proof">
      <div className="bg-proof-copy"><p className="kicker">Real Oak Harbor work</p><h2>Local projects show both whole-property and maintenance work.</h2><p>These are real AquaBlast projects from Oak Harbor: one multi-surface visit covering concrete, deck, and exterior windows, plus gutter cleaning where debris and drainage were the problem.</p><a className="secondary" href="/projects/concrete-deck-and-window-cleaning-in-oak-harbor-ohio">View the Oak Harbor multi-surface project <span aria-hidden="true">→</span></a></div>
      <figure className="bg-proof-main"><img src={oakHarborMultiSurfaceProof} alt="Before and after concrete cleaning from an AquaBlast project in Oak Harbor" loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast project</span><b>Concrete + deck + windows</b></figcaption></figure>
      <figure className="bg-proof-detail"><img src={oakHarborGutterProof} alt="Gutter cleaning project completed by AquaBlast in Oak Harbor" loading="lazy" decoding="async" /><figcaption><span>Also completed locally</span><b>Gutter cleaning</b></figcaption></figure>
    </section>

    <section className="bg-services" aria-labelledby="oak-harbor-services-title"><div className="section-heading"><div><p className="kicker">Services in Oak Harbor</p><h2 id="oak-harbor-services-title">Choose the surfaces that need attention now.</h2></div><p>AquaBlast has completed Oak Harbor work across several exterior surfaces. Start with the area that concerns you, or include them together in one request.</p></div><div className="bg-service-grid">
      <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and other exterior surfaces with a method suited to the material.</p></a>
      <a href="/gutter-cleaning"><img src={oakHarborGutterProof} alt="Gutter cleaning service in Oak Harbor" loading="lazy" /><span>02</span><b>Gutter cleaning</b><p>Remove debris and clear the drainage path when gutters and downspouts need attention.</p></a>
      <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior window cleaning service" loading="lazy" /><span>03</span><b>Exterior windows</b><p>Clean exterior glass as part of a larger exterior visit or as a focused service.</p></a>
      <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><span>04</span><b>Concrete cleaning</b><p>Refresh walks, patios, driveways, and other hard surfaces around the property.</p></a>
    </div></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the Oak Harbor property and the surfaces you want handled.</h2><p>You do not have to decide which cleaning method belongs on each material. Send the address and photos of the problem areas, and AquaBlast can review the surfaces together.</p><a className="cta" href={estimateHref}>Start an Oak Harbor estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the Oak Harbor address.</span></li><li><b>02</b><span>Show us every surface you want reviewed.</span></li><li><b>03</b><span>We match the cleaning approach to the material and access.</span></li></ol></section>

    <section className="location-search-support"><div><p className="kicker">Keep looking</p><h2>Related services and Oak Harbor work.</h2></div><div className="location-search-copy"><p>Compare the service details with real local projects before you decide what belongs in the estimate.</p><div className="location-related-links"><a href="/house-washing">House washing <span aria-hidden="true">→</span></a><a href="/gutter-cleaning">Gutter cleaning <span aria-hidden="true">→</span></a><a href="/window-cleaning">Exterior windows <span aria-hidden="true">→</span></a><a href="/concrete-cleaning">Concrete cleaning <span aria-hidden="true">→</span></a><a href="/projects/house-washing-oak-harbor">Oak Harbor house-washing project <span aria-hidden="true">→</span></a><a href="/projects/gutter-cleaning-oak-harbor-oh">Oak Harbor gutter project <span aria-hidden="true">→</span></a><a href="/near-me">All service areas <span aria-hidden="true">→</span></a></div></div></section>

    <section className="service-final location-final"><div><p className="kicker">Oak Harbor property?</p><h2>Show us what needs attention.</h2><p>Add the address and a few photos. We will review the surfaces together and help define the scope for the estimate.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}


const remainingAreaConfigs = {
  sandusky: {
    hero: sanduskyHero,
    alt: 'AquaBlast house-washing work on a Sandusky home',
    eyebrow: 'Sandusky · Lake Erie',
    title: 'Exterior cleaning in Sandusky.',
    flavor: 'Start with the exterior surface changing the way the property feels.',
    intro: 'AquaBlast has completed house washing, deck cleaning, and gutter cleaning in Sandusky. Start with the surface that needs attention now and include the rest of the property in the same estimate when it makes sense.',
    problemTitle: 'A cleaner exterior starts by separating the surfaces, not treating them all alike.',
    problem: 'Siding, decks, gutters, concrete, and roof materials weather differently. The useful first step is to show the property and identify what is actually collecting buildup.',
    proofImage: sanduskyProof,
    proofAlt: 'Before and after deck cleaning project completed by AquaBlast in Sandusky',
    proofTitle: 'Real Sandusky work.',
    proofCopy: 'AquaBlast has documented deck cleaning, gutter cleaning, and house washing in Sandusky. The proof stays separate from the hero so the hero can establish the place while the project imagery verifies the work.',
    proofHref: '/projects/deck-cleaning-sandusky-ohio',
    proofLabel: 'View the Sandusky deck project',
    heroNote: null,
  },
  'put-in-bay': {
    hero: putInBayHero,
    alt: 'Illustrative Put-In-Bay waterfront property with a clean exterior and Lake Erie setting',
    eyebrow: 'Put-In-Bay · Lake Erie island',
    title: 'Exterior cleaning in Put-In-Bay.',
    flavor: 'Keep the property ready for island season.',
    intro: 'House exteriors, roofs, gutters, concrete, and windows all take on weather and seasonal use differently. AquaBlast serves Put-In-Bay with exterior cleaning planned around the property and island logistics.',
    problemTitle: 'Island properties need a plan that accounts for access, timing, and the surfaces themselves.',
    problem: 'The estimate should start with the whole property instead of forcing every need into one cleaning method. Show the areas that need attention and include any access or scheduling details that matter.',
    proofImage: truckImage,
    proofAlt: 'AquaBlast branded work truck serving the Lake Erie area',
    proofTitle: 'Lake Erie service-area context.',
    proofCopy: 'A Put-In-Bay-specific project image is not currently available. The hero is illustrative, and the supporting image is clearly presented as AquaBlast service-area context rather than local project proof.',
    proofHref: '/projects',
    proofLabel: 'Browse completed AquaBlast projects',
  },
  tiffin: {
    hero: tiffinHero,
    alt: 'Illustrative Tiffin home with clean brick, concrete, and landscaping',
    eyebrow: 'Tiffin · Northwest Ohio',
    title: 'Exterior cleaning in Tiffin.',
    flavor: 'Give the whole property a cleaner first impression.',
    intro: 'AquaBlast serves Tiffin with house washing, roof cleaning, gutter cleaning, concrete cleaning, and exterior-window work. Start with the part of the property you notice first.',
    problemTitle: 'Trees, rain, roads, and seasonal weather can make different parts of the exterior age at different speeds.',
    problem: 'Siding may collect organic growth while concrete darkens, gutters fill, and roof streaking becomes more visible. Those surfaces should be reviewed individually instead of receiving one blanket treatment.',
    proofImage: tiffinProof,
    proofAlt: 'Real AquaBlast house washing project in Tiffin, Ohio',
    proofTitle: 'Real Tiffin house-washing work.',
    proofCopy: 'AquaBlast has completed house washing in Tiffin. See the local project below for a closer look at the property and the work.',
    proofHref: '/projects/house-washing-in-tiffin-ohio',
    proofLabel: 'View the Tiffin project',
  },
  toledo: {
    hero: toledoHero,
    alt: 'Illustrative Toledo-area home with a clean exterior, broad lawn, and refreshed hard surfaces',
    eyebrow: 'Toledo · Northwest Ohio',
    title: 'Exterior cleaning in Toledo.',
    flavor: 'Start with the surfaces that carry the most wear.',
    intro: 'AquaBlast serves Toledo with paver care, concrete cleaning, house washing, and commercial exterior cleaning. Start with the material that needs attention and build the estimate around the property.',
    problemTitle: 'Hard surfaces and house exteriors do not need the same cleaning approach.',
    problem: 'Pavers, concrete, siding, and commercial surfaces each respond differently to buildup and maintenance. The plan should follow the material, condition, and use of the area.',
    proofImage: paverImage,
    proofAlt: 'Paver cleaning and sealing service detail',
    proofTitle: 'Paver and hard-surface care is part of the Toledo service mix.',
    proofCopy: 'The current Toledo service story includes paver cleaning and sealing alongside concrete, house washing, and commercial exterior cleaning. This supporting image represents that service focus rather than claiming a Toledo-specific completed project.',
    proofHref: '/paver-cleaning-sealing',
    proofLabel: 'See paver cleaning + sealing',
  },
}

function ModernRemainingAreaLanding({ market, config }) {
  const estimateHref = `/estimate?location=${market.slug}&source=location%3A${market.slug}`
  useServicePageMetadata({
    title: `${market.name} Exterior Cleaning | AquaBlast Pressure Washing`,
    description: `AquaBlast exterior cleaning services for homes and properties in ${market.name}, Ohio.`,
    canonicalPath: locationCanonicalPath(market.slug),
  })
  return <ServicePageShell estimateHref={estimateHref} className={`location-page ${market.slug}-page`} headerChildren={<div className="location-header-note">{market.name}, Ohio</div>}>
    <ServiceHero image={config.hero} alt={config.alt} eyebrow={config.eyebrow} title={config.title} flavor={config.flavor} className={`location-service-hero ${market.slug}-hero`}>
      <p>{config.intro}</p>
      <div className="location-hero-actions"><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a><a className="secondary location-secondary" href={`#${market.slug}-proof`}>See local context <span aria-hidden="true">↓</span></a></div>
      {config.heroNote && <small className="location-hero-media-note">{config.heroNote}</small>}
    </ServiceHero>

    <section className="bg-problem"><div><p className="kicker">Start with the property</p><h2>{config.problemTitle}</h2></div><div><p>{config.problem}</p><p>{market.details?.[0] || market.angle}</p></div></section>

    {market.slug === 'toledo' ? (
      <section className="bg-services toledo-service-chooser location-service-chooser" aria-labelledby="toledo-services-title">
        <div className="section-heading toledo-service-heading location-service-heading"><div><p className="kicker">Services in Toledo</p><h2 id="toledo-services-title">Start with the surface carrying the most wear.</h2></div><p>Toledo properties can combine pavers, concrete, siding, and commercial surfaces in one estimate. Start with the area you notice first and add the rest as needed.</p></div>
        <div className="toledo-service-grid location-service-grid">
          <a className="toledo-service-card toledo-service-primary location-service-card location-service-primary" href="/paver-cleaning-sealing"><img src={paverImage} alt="Paver cleaning and sealing service" width="500" height="313" loading="lazy" /><div><span>01 · Outdoor surfaces</span><b>Paver cleaning + sealing</b><p>Refresh patios, pool decks, paver driveways, and other hardscape where buildup and weathering change the surface.</p><small>Explore paver care →</small></div></a>
          <a className="toledo-service-card toledo-service-wide location-service-card location-service-wide" href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><div><span>02 · Hard surfaces</span><b>Concrete cleaning</b><p>Address driveways, walks, patios, and other durable concrete surfaces.</p><small>Explore concrete cleaning →</small></div></a>
          <a className="toledo-service-card location-service-card" href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><div><span>03 · Home exterior</span><b>House washing</b><p>Clean siding and washable exterior surfaces with a method suited to the material.</p><small>Explore house washing →</small></div></a>
          <a className="toledo-service-card location-service-card" href="/commercial-pressure-washing"><img src="/assets/generated/commercial-overview-multi-surface-hero-v1.webp" alt="Commercial exterior cleaning service" width="1600" height="900" loading="lazy" /><div><span>04 · Business property</span><b>Commercial exterior cleaning</b><p>Build the work around storefronts, building exteriors, pavement, and other high-use surfaces.</p><small>Explore commercial cleaning →</small></div></a>
        </div>
      </section>
    ) : market.slug === 'sandusky' ? (
      <section className="bg-services location-service-chooser sandusky-service-chooser" aria-labelledby="sandusky-services-title">
        <div className="section-heading location-service-heading"><div><p className="kicker">Services in Sandusky</p><h2 id="sandusky-services-title">Start with the exterior surface changing the property most.</h2></div><p>Sandusky work already includes decks, siding, and gutters. Start with the surface that needs attention now and include the rest when it makes sense.</p></div>
        <div className="location-service-grid sandusky-service-grid">
          <a className="location-service-card location-service-primary" href="/wood-restoration"><img src={sanduskyProof} alt="AquaBlast deck cleaning project in Sandusky" width="1440" height="1440" loading="lazy" decoding="async" /><div><span>01 · Outdoor living</span><b>Deck + wood cleaning</b><p>Refresh wood surfaces that have collected dirt, organic growth, and weathering before maintenance or refinishing.</p><small>Explore deck + wood care →</small></div></a>
          <a className="location-service-card location-service-wide" href="/house-washing"><img src={sanduskyHero} alt="AquaBlast house washing work in Sandusky" width="1440" height="1440" loading="lazy" decoding="async" /><div><span>02 · Home exterior</span><b>House washing</b><p>Clean siding and washable exterior surfaces with a method suited to the material.</p><small>Explore house washing →</small></div></a>
          <a className="location-service-card" href="/gutter-cleaning"><img src="/assets/concept-gutter-blockage-detail-v2.webp" alt="Gutter filled with autumn leaves and debris" width="1280" height="1024" loading="lazy" /><div><span>03 · Drainage</span><b>Gutter cleaning</b><p>Clear debris from gutters and downspouts when water flow and buildup need attention.</p><small>Explore gutter cleaning →</small></div></a>
          <a className="location-service-card" href="/concrete-cleaning"><img src="/assets/concept-concrete-surface-detail-v1.png" alt="Illustrative view of concrete surfaces before and after cleaning" width="1536" height="1024" loading="lazy" /><div><span>04 · Hard surfaces</span><b>Concrete cleaning</b><p>Address driveways, walks, patios, and other durable surfaces around the property.</p><small>Explore concrete cleaning →</small></div></a>
        </div>
      </section>
    ) : (
      <section className="bg-services" aria-labelledby={`${market.slug}-services-title`}><div className="section-heading"><div><p className="kicker">Services in {market.name}</p><h2 id={`${market.slug}-services-title`}>Choose the surface that needs attention first.</h2></div><p>You can include several exterior areas in one estimate request when the property needs more than one service.</p></div><div className="bg-service-grid">
        <a href="/house-washing"><img src={houseImage} alt="House washing service" loading="lazy" /><span>01</span><b>House washing</b><p>Clean siding and washable exterior surfaces with a material-appropriate method.</p></a>
        <a href="/concrete-cleaning"><img src={concreteImage} alt="Concrete cleaning service" loading="lazy" /><span>02</span><b>Concrete cleaning</b><p>Address driveways, walks, patios, and other durable hard surfaces.</p></a>
        <a href="/gutter-cleaning"><img src="/assets/concept-gutter-blockage-detail-v2.webp" alt="Gutter cleaning service" width="1280" height="1024" loading="lazy" /><span>03</span><b>Gutter cleaning</b><p>Clear gutters and downspouts when drainage and debris are part of the problem.</p></a>
        <a href="/window-cleaning"><img src={truckImage} alt="AquaBlast exterior cleaning equipment" loading="lazy" /><span>04</span><b>Exterior windows</b><p>Include exterior glass when the finished property needs a cleaner overall presentation.</p></a>
      </div></section>
    )}

    <section className="bg-local-proof" id={`${market.slug}-proof`}><div className="bg-proof-copy"><p className="kicker">Proof + context</p><h2>{config.proofTitle}</h2><p>{config.proofCopy}</p><a className="secondary" href={config.proofHref}>{config.proofLabel} <span aria-hidden="true">→</span></a></div><figure className="bg-proof-main"><img src={config.proofImage} alt={config.proofAlt} loading="lazy" decoding="async" /><figcaption><span>{market.name}</span><b>Exterior-cleaning context</b></figcaption></figure></section>

    <section className="bg-plan"><div><p className="kicker">A simple plan</p><h2>Show us the property. We will help define the work.</h2><p>Send the {market.name} address, the surfaces that need attention, and a few photos. You do not need to diagnose the staining or choose the cleaning method yourself.</p><a className="cta" href={estimateHref}>Start a {market.name} estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Tell us the property address.</span></li><li><b>02</b><span>Show us the surfaces that need attention.</span></li><li><b>03</b><span>Add photos and any access details.</span></li></ol></section>

    <section className="service-final location-final"><div><p className="kicker">{market.name} property?</p><h2>Show us what needs cleaning.</h2><p>Add the address and a few photos so the property can be reviewed as a whole.</p></div><a className="cta" href={estimateHref}>Get an estimate <span aria-hidden="true">→</span></a></section>
  </ServicePageShell>
}

export function BowlingGreen() { return <BowlingGreenLanding /> }
export function CatawbaIsland() { return <CatawbaIslandLanding /> }
export function Fremont() { return <FremontLanding /> }
export function Genoa() { return <GenoaLanding /> }
export function JohnsonsIsland() { return <JohnsonsIslandLanding /> }
export function Lakeside() { return <LakesideLanding /> }
export function Marblehead() { return <MarbleheadLanding /> }
export function OakHarbor() { return <OakHarborLanding /> }
export function Sandusky() { return <ModernRemainingAreaLanding market={markets.sandusky} config={remainingAreaConfigs.sandusky} /> }
export function PutInBay() { return <ModernRemainingAreaLanding market={markets['put-in-bay']} config={remainingAreaConfigs['put-in-bay']} /> }
export function KelleysIsland() { return <KelleysIslandLanding /> }
export function Tiffin() { return <ModernRemainingAreaLanding market={markets.tiffin} config={remainingAreaConfigs.tiffin} /> }
export function Toledo() { return <ModernRemainingAreaLanding market={markets.toledo} config={remainingAreaConfigs.toledo} /> }

const hubLocations = [
  ['Port Clinton','/near-me/pressure-washing-port-clinton','House washing, concrete, decks, roofs, and more'],
  ['Sandusky','/near-me/sandusky-pressure-washing','Deck cleaning, gutter cleaning, house washing, and more'],
  ['Put-In-Bay','/near-me/put-in-bay-pressure-washing','Island house washing, gutters, roofs, concrete, and windows'],
  ['Kelleys Island','/near-me/pressure-washing-kelleys-island','House washing, gutter cleaning, windows, and hard surfaces'],
  ['Tiffin','/near-me/pressure-washing-tiffin','House washing, roofs, gutters, concrete, and windows'],
  ['Toledo','/near-me/pressure-washing-toledo','Pavers, concrete, house washing, and commercial cleaning'],
  ['Bowling Green','/near-me/pressure-washing-bowling-green','Gutter cleaning, house washing, roofs, and concrete'],
  ['Catawba Island','/near-me/pressure-washing-catawba-island','House washing, windows, concrete, and roof care'],
  ['Fremont','/near-me/pressure-washing-fremont','Residential + commercial exterior cleaning'],
  ['Genoa','/near-me/pressure-washing-genoa','Residential + commercial exterior cleaning'],
  ['Johnson’s Island','/near-me/johnsons-island-oh','Island property exterior cleaning'],
  ['Lakeside','/near-me/pressure-washing-lakeside','House washing + paver care'],
  ['Marblehead','/near-me/marblehead-pressure-washing','House, concrete, windows + pavers'],
  ['Oak Harbor','/near-me/pressure-washing-oak-harbor','House washing + customer feedback'],
]

const hubCoverageImages = [
  {
    label: 'Port Clinton',
    image: '/assets/project-media/10-port-clinton-roof-cleaning-project.webp',
    alt: 'Roof cleaning project in Port Clinton, Ohio',
  },
  {
    label: 'Sandusky',
    image: '/assets/project-media/house-washing-sandusky-live.jpg',
    alt: 'House washing project in Sandusky, Ohio',
  },
  {
    label: 'Tiffin',
    image: '/assets/project-media/house-washing-tiffin-live.jpg',
    alt: 'House washing project in Tiffin, Ohio',
  },
]

const featuredHubLocations = [
  {
    name: 'Port Clinton',
    href: '/near-me/pressure-washing-port-clinton',
    note: 'Roof cleaning and other exterior work near the Lake Erie shoreline.',
    image: '/assets/project-media/10-port-clinton-roof-cleaning-project.webp',
    alt: 'Roof cleaning project in Port Clinton, Ohio',
  },
  {
    name: 'Sandusky',
    href: '/near-me/sandusky-pressure-washing',
    note: 'Real house-washing work and local exterior-cleaning services.',
    image: '/assets/project-media/house-washing-sandusky-live.jpg',
    alt: 'House washing project in Sandusky, Ohio',
  },
  {
    name: 'Tiffin',
    href: '/near-me/pressure-washing-tiffin',
    note: 'Real inland Northwest Ohio house-washing work and related services.',
    image: '/assets/project-media/house-washing-tiffin-live.jpg',
    alt: 'House washing project in Tiffin, Ohio',
  },
  {
    name: 'Oak Harbor',
    href: '/near-me/pressure-washing-oak-harbor',
    note: 'Real house-washing work supported by local project proof and customer feedback.',
    image: '/assets/project-media/house-washing-oak-harbor-live.jpg',
    alt: 'House washing project in Oak Harbor, Ohio',
  },
]

const hubMapIntro = {
  kicker: 'A simple plan',
  title: 'Start with your property and find the closest service area.',
  body: ['Choose a map marker or community below. From there, open the local page to see available services and nearby work, then send the property details when you are ready for an estimate.'],
  featured: [
    ['marblehead', 'Marblehead'],
    ['port-clinton', 'Port Clinton'],
    ['sandusky', 'Sandusky'],
    ['tiffin', 'Tiffin'],
  ],
  steps: [
    ['01', 'Find your community'],
    ['02', 'See local services + proof'],
    ['03', 'Show us the property'],
  ],
}

export function LocationsHub() {
  useServicePageMetadata({ title:'AquaBlast Service Areas | Northwest Ohio + Lake Erie', description:'Explore AquaBlast service areas across Northwest Ohio and Lake Erie communities.', canonicalPath: canonicalRoutes.locations })
  return <ServicePageShell estimateHref="/estimate" className="locations-hub" headerChildren={<div className="location-header-note">Northwest Ohio + Lake Erie</div>}>
    <section className="locations-hub-hero"><p className="kicker">Service areas</p><h1>Find your community.<br /><em>Lake Erie to inland Northwest Ohio.</em></h1><p>Choose your area to see local services and nearby work. If your property falls just outside a listed community, call and ask before assuming it is out of range.</p><div className="locations-hub-hero-actions"><a className="secondary" href="#areas">Find my service area <span aria-hidden="true">↓</span></a><a className="cta" href="/estimate?source=near-me%3Ahero">Get an estimate <span aria-hidden="true">→</span></a></div></section>

    <section className="locations-hub-coverage-break" aria-labelledby="coverage-break-title"><div className="locations-hub-coverage-copy"><p className="kicker">Where we work</p><h2 id="coverage-break-title">Lake Erie shoreline, island, and inland properties.</h2><p>AquaBlast serves homes and businesses across Northwest Ohio and the Lake Erie area. Find your community on the map below.</p><a className="text-action" href="#areas">Find my community <span aria-hidden="true">↓</span></a></div><div className="locations-hub-proof-rail" aria-label="Real AquaBlast work across the service area">{hubCoverageImages.map((item) => <figure key={item.label}><img src={item.image} alt={item.alt} loading="lazy" decoding="async" /><figcaption><span>Real AquaBlast work</span><b>{item.label}</b></figcaption></figure>)}</div></section>

    <ServiceArea intro={hubMapIntro} showActions={false} className="locations-hub-map" />

    <section className="locations-hub-featured"><div className="section-heading"><div><p className="kicker">Local proof</p><h2>See real AquaBlast work close to home.</h2></div><p>These featured communities have real project imagery available now. Open a local page to compare nearby work with what you need cleaned.</p></div><div className="locations-hub-featured-grid">{featuredHubLocations.map((location) => <a href={location.href} key={location.href} className="locations-hub-featured-card"><img src={location.image} alt={location.alt} loading="lazy" decoding="async" /><div><span>Real local work</span><b>{location.name}</b><p>{location.note}</p><small>View local page →</small></div></a>)}</div></section>

    <section className="locations-hub-directory"><div className="section-heading"><div><p className="kicker">All service areas</p><h2>Not one of those four? Find your community here.</h2></div><p>The current coverage area includes 14 Lake Erie and Northwest Ohio communities.</p></div><div className="locations-hub-directory-grid" aria-label="AquaBlast service areas">{hubLocations.map(([name,href]) => <a href={href} key={href}><span>{name}</span><b aria-hidden="true">→</b></a>)}</div></section>

    <section className="service-final locations-hub-final"><div><p className="kicker">Ready for the next step?</p><h2>Find your area. Show us the property. Get an estimate.</h2><p>If your community is not listed among the 14 established service areas, call AquaBlast and ask about the property. Otherwise, send the address, what needs cleaning, and a few photos so the job can be reviewed.</p></div><div className="editorial-actions"><a className="secondary" href="tel:4196356961">Call 419-635-6961 <span aria-hidden="true">→</span></a><a className="cta" href="/estimate?source=near-me%3Afinal">Get an estimate <span aria-hidden="true">→</span></a></div></section>
  </ServicePageShell>
}
