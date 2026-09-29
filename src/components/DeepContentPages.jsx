import { useCallback, useEffect, useRef, useState } from 'react'
import { PageShell } from './CompanyPages'
import { estimateForProject, useServicePageMetadata } from './servicePageUtils'
import { liveProjectMedia } from '../data/liveProjectMedia'
import { dedupeLiveProjectMedia } from '../data/liveProjectMediaDedupe'
import { liveArticleMedia } from '../data/liveArticleMedia'
import { LeadMagnetBand } from './LeadMagnetCapture'

const articleDetails = {
  '/pressure-washing-tips/how-do-you-know-when-your-home-needs-exterior-cleaning': {
    category: 'Seasonal care', title: 'How do you know when your home needs exterior cleaning?',
    intro: 'A practical way to read the exterior before stains, organic growth, and weathering become harder to ignore.',
    relatedHref: '/house-washing', relatedLabel: 'House washing',
    sections: [
      ['Start with the signs you can see from the ground', 'Green film on shaded siding, chalky residue on painted surfaces, staining below gutters, rust-orange drips near metal fixtures, recurring webs, dull concrete, and slick walkways are all useful clues. The live AquaBlast guidance treats these patterns as surface-specific signals rather than assuming every mark needs the same cleaning method.'],
      ['Oak Harbor and Lake Erie exposure can speed up buildup', 'Spring pollen, summer humidity, lake breezes, fall leaves, winter road film, and shade can affect siding, roofs, concrete, trim, and railings differently. A property near the water or under heavier tree cover can show algae, mildew, and residue sooner than a sunnier inland home.'],
      ['Roof streaks, moss, and lichen deserve a separate look', 'Dark roof streaks, blue-green growth, moss, or lichen are different from ordinary siding dirt. Roof materials need a gentler treatment plan, and visible granule loss or other wear should be distinguished from staining before cleaning begins.'],
      ['Different stains point to different causes', 'Green algae, gray mildew, rust trails, white masonry deposits, leaf tannins, and traffic residue do not all behave the same way. Identifying what is on the surface helps determine whether the right next step is soft washing, hard-surface cleaning, maintenance, or something cleaning alone will not solve.'],
      ['Cleaning frequency should follow exposure, not a rigid calendar', 'Sun, shade, tree cover, siding type, proximity to open water, and seasonal use all affect how quickly buildup returns. The live guidance uses roughly annual cleaning as a reference for many homes while noting that heavily shaded or lake-exposed properties may need attention sooner.'],
      ['Soft washing and pressure cleaning have different jobs', 'Delicate siding, trim, and similar surfaces should not be treated like concrete. Soft washing relies on controlled chemistry and low pressure, while durable hard surfaces can use more mechanical cleaning when the material and condition allow it.'],
      ['Concrete, decks, and fences have their own warning signs', 'Tire marks, leaf staining, slick concrete, graying wood fibers, and algae along lower boards can all show that exterior maintenance is due. A whole-property walk-around helps separate isolated issues from a visit that should cover several surfaces together.'],
    ]
  },
  '/pressure-washing-tips/pressure-washing-near-me-how-to-choose-the-best-company': {
    category: 'Choosing a contractor', title: 'Pressure washing near me: how to choose the best company',
    intro: 'Price matters, but so do surface knowledge, the cleaning method, and clear communication about the work.',
    relatedHref: '/about-us', relatedLabel: 'About AquaBlast',
    sections: [
      ['Local conditions should change the contractor’s approach', 'Port Clinton and nearby Lake Erie communities deal with humidity, lake spray, road residue, pollen, shade, and freeze-thaw weather. A useful contractor should be able to explain whether a mark is organic growth, oxidation, mineral residue, or another condition before choosing the cleaning method.'],
      ['Ask how the method changes by surface', 'Soft washing is generally the safer approach for siding, trim, and roofing where aggressive pressure can cause damage, while concrete and pavers can tolerate a different hard-surface process. Siding, roofs, concrete, pavers, wood, and glass should never be treated as interchangeable.'],
      ['Verify insurance, training, and protection steps', 'Ask how the crew protects windows, seals, outlets, landscaping, and nearby water features, and whether they can explain their training and insurance. Clear preparation and safety answers matter as much as equipment specifications.'],
      ['Look for local project proof, not only one dramatic photo', 'Completed jobs around Port Clinton, Marblehead, Oak Harbor, and nearby communities give you something concrete to compare with your own property. Consistent finished work, reviews, and project context are stronger evidence than a single isolated before-and-after.'],
      ['Communication should be part of the service', 'A reliable company should confirm appointments, explain water access and property preparation, communicate around weather changes, and set expectations for what happens before and after the visit.'],
      ['Compare the estimate, not just the number', 'Clarify which surfaces and tasks are included, whether sealing or restoration is separate, and which existing conditions could change the scope. A lower headline price is not automatically the same job.'],
      ['Watch for one-size-fits-all answers', 'Vague methods, a refusal to discuss insurance or surface protection, and the same pressure recommendation for every material are meaningful red flags. The useful question is whether the contractor can explain why the proposed process fits your actual property.'],
    ]
  },
  '/pressure-washing-tips/streak-free-exterior-window-cleaning-tips-for-lakefront-homes': {
    category: 'Windows', title: 'Streak-free exterior window cleaning tips for lakefront homes',
    intro: 'Lakefront glass can collect pollen, spray, minerals, webs, and residue quickly. Clear results depend on water quality, tools, timing, and access—not more aggressive pressure.',
    relatedHref: '/window-cleaning', relatedLabel: 'Exterior window cleaning',
    sections: [
      ['Lakefront glass has its own maintenance pattern', 'Lake Erie wind can carry pollen, marina dust, insects, seasonal residue, and road film onto glass, while sprinkler overspray can leave calcium and magnesium deposits. Waterfront exposure often means the dirtiest panes are concentrated on windward or shaded sides rather than evenly distributed around the home.'],
      ['Streak-free results depend on water quality and workflow', 'The live AquaBlast guidance highlights purified water, controlled rinsing, non-scratching brushes, and a consistent top-down process. Using very low-mineral water helps glass dry without leaving the residue that ordinary hose water can deposit.'],
      ['Water-fed poles can reduce ladder dependence', 'Long-reach, water-fed tools can reach upper stories from the ground when the property allows it. That is useful around decks, landscaping, seawalls, and soft ground where access and wind can make traditional ladder work more complicated.'],
      ['Frames, sills, screens, and tracks can re-soil clean glass', 'Cleaning only the pane can leave surrounding dirt ready to wash back onto the glass. Frames, sills, screens, and tracks should be considered as part of the exterior-window process and matched with tools that will not damage coatings or nearby finishes.'],
      ['Direct sun and lakefront wind affect timing', 'Warm glass can flash-dry rinse water and leave trails, while shoreline gusts can complicate access and spray control. Professionals can sequence the work around shade, wind direction, docks, patios, and landscaping instead of forcing every pane into the same schedule.'],
      ['Hard-water spots are a different problem from ordinary dirt', 'White rings or haze that remain after normal washing may be mineral deposits. Those conditions can require a tested specialty cleaner or restoration step rather than more aggressive scrubbing, with care around glass coatings, seals, stone, and trim.'],
    ]
  },
  '/pressure-washing-tips/top-7-signs-your-concrete-needs-professional-cleaning': {
    category: 'Concrete', title: 'Top signs your concrete needs professional cleaning',
    intro: 'Concrete is durable, but that does not mean stains, organics, traffic residue, and seasonal grime should be ignored indefinitely.',
    relatedHref: '/concrete-cleaning', relatedLabel: 'Concrete cleaning',
    sections: [
      ['1. Slick areas after rain or irrigation', 'Organic growth can settle into porous concrete and make shaded walks, steps, patios, and edges near downspouts feel slippery when wet. Reduced traction is more than a cosmetic issue and is a useful signal that surface buildup needs attention.'],
      ['2. Black streaks or green patches that keep returning', 'Algae and mildew can work into the concrete pores, especially in damp or shaded areas. If a hose rinse brightens the surface only briefly, the remaining growth is a clue that a deeper hard-surface cleaning process may be appropriate.'],
      ['3. Oil spots and stubborn tire marks', 'Vehicle traffic, mower drips, trailers, and parked equipment can leave petroleum staining and dark tire marks. Fresh residues are easier to address than stains that have had more time to work below the surface.'],
      ['4. Rust rings and orange sprinkler stains', 'Metal furniture, hose equipment, and mineral-rich water can leave orange discoloration that does not behave like ordinary dirt. Rust-related staining may require a specialty treatment rather than simply increasing pressure.'],
      ['5. White film and winter salt residue', 'Northwest Ohio winters can leave road brine and mineral deposits on driveways and garage aprons. Spring cleaning can remove that residue before warm weather, algae, and traffic add another layer of buildup.'],
      ['6. Patchy or striped appearance', 'Uneven previous cleaning, lingering organics, salts, or traffic lanes can leave a blotchy slab. A consistent edge-to-edge process should address the whole surface rather than creating isolated bright spots.'],
      ['7. Weeds, ants, or debris in joints', 'Organic matter settling into joints can hold moisture and encourage weeds or insects. Cleaning the channels can make it easier to see whether joints, cracks, or nearby paver areas need separate maintenance afterward.'],
      ['Concrete is porous, so a quick rinse does not tell the whole story', 'Dirt, algae, leaf tannins, salt, and traffic residue can sit below the top layer. Professional cleaning should account for the age and condition of the slab, adjacent surfaces, drainage, and whether sealing is planned after the concrete dries.'],
    ]
  },
  '/pressure-washing-tips/how-often-should-you-soft-wash-your-marblehead-home': {
    category: 'House washing', title: 'How often should you soft wash your Marblehead home?',
    intro: 'There is no single calendar that fits every Marblehead property. Exposure, shade, siding, moisture, and lake proximity all affect how quickly buildup returns.',
    relatedHref: '/near-me/marblehead-pressure-washing', relatedLabel: 'Marblehead services',
    sections: [
      ['Soft washing is about matching the surface', 'The live AquaBlast guidance describes soft washing as low-pressure cleaning with targeted detergents for organic growth on siding and trim. That approach is intended to protect vinyl, aluminum, fiber cement, painted wood, caulk, and other materials that should not be treated like concrete.'],
      ['Let exposure set the schedule', 'Waterfront or heavily shaded homes can show buildup sooner than properties with more sun and airflow. The live article uses roughly 6–9 months for heavily exposed or shaded homes, about yearly for typical neighborhoods, and 12–18 months as a possible interval for sunnier properties with fewer trees.'],
      ['Siding type changes the maintenance conversation', 'Vinyl, aluminum, painted wood, fiber cement, stucco, brick, and textured surfaces do not all respond the same way. Oxidation, dark gutter streaking, or fragile finishes are reasons to adjust the process instead of simply increasing pressure.'],
      ['Marblehead seasons affect when work makes sense', 'Spring and early summer can follow winter film and rising pollen, while late summer and early fall can be useful before leaves and colder weather arrive. Freezing periods are poor cleaning windows because rinse water can refreeze on walks, drives, and exterior details.'],
      ['Lakefront homes may show repeat buildup faster', 'Humidity, shade, lake spray, wind-blown material, spider webs, and organic film can return faster around waterfront and marina-adjacent properties. North-facing walls, porch ceilings, gutters, and shaded trim are good places to check first.'],
      ['Pair services only when the property shows the need', 'Roof streaks, dirty gutters, and hazy exterior glass can make a newly washed house look unfinished, but that does not mean every visit needs every service. The condition of the roof, drainage system, windows, and siding should determine the scope.'],
      ['Life events can change the timing too', 'Preparing for summer guests, listing a property, finishing landscaping, painting, or replacing gutters can all be practical reasons to schedule exterior cleaning even when the home is not on a strict annual cycle.'],
    ]
  },
  '/pressure-washing-tips/from-dirty-to-durable-why-paver-cleaning-and-sealing-matters': {
    category: 'Pavers', title: 'From dirty to durable: why paver cleaning and sealing matters',
    intro: 'Paver care involves more than cleaning. Joint material, drainage, and sealing all affect how the finished area looks and holds up.',
    relatedHref: '/paver-cleaning-sealing', relatedLabel: 'Paver cleaning & sealing',
    sections: [
      ['Neglected pavers can collect more than surface dirt', 'Paver patios, walks, and driveways can collect weeds, algae, moss, staining, and debris across the surface and in the joints. Moisture and freeze-thaw conditions can make those maintenance problems more noticeable around Northwest Ohio properties.'],
      ['Cleaning establishes the condition before the next step', 'A thorough clean removes organic buildup and embedded grime while making cracks, shifted units, old sealer, joint loss, and other existing conditions easier to see. Cleaning should come before decisions about new joint material or sealer.'],
      ['Joint care changes the finished result', 'Missing or disturbed joint material can affect stability and appearance. Where appropriate, a paver project may include cleaning followed by replacement joint sand before sealing.'],
      ['Sealing adds protection, but it is not a universal shortcut', 'The live guidance describes sealing as a way to reduce water penetration, staining, and weed growth while enhancing the finished appearance. The right product and finish still depend on the paver material, existing sealer, use, and desired look.'],
      ['Weather and cure conditions matter', 'Sealing is more weather-sensitive than basic washing. Dry time, temperature, prior sealer condition, rain risk, and the specific product can influence scheduling and the final approach.'],
      ['Maintenance continues after a sealing project', 'Cleaning, joint care, drainage, and future sealer condition all affect how the surface ages. A sealed paver area still needs to be watched for weeds, staining, joint loss, and changes in the finish over time.'],
    ]
  },
  '/pressure-washing-tips/tips-when-getting-pressure-washing-quotes': {
    category: 'Estimates', title: 'Tips when getting pressure washing quotes',
    intro: 'A good quote should make the job easier to compare—not leave you guessing about what is actually included.',
    relatedHref: '/estimate', relatedLabel: 'Get an estimate',
    sections: [
      ['Compare the same job, not just the total', 'Start by comparing the same scope. House washing, concrete, windows, gutters, roofs, pavers, sealing, and restoration are different services, so make sure each quote is pricing the same surfaces and tasks before comparing the number.'],
      ['Look at references, reviews, and real project history', 'Ask for references and read reviews. Real completed projects, published budgets, and customer comments help show how a contractor communicates and what kind of work they actually perform.'],
      ['Experience, insurance, and warranties belong in the decision', 'Consider experience, insurance, and warranties as part of the contractor decision. Those details help you understand who is responsible for the work and what protections or expectations come with the job.'],
      ['Get the quote in writing', 'A written quote makes it easier to compare services, expectations, and price across companies. Photos, location, surface type, access concerns, and visible problem areas also help AquaBlast define the scope before work begins.'],
      ['Make room for conditions that change the method', 'Oxidation, failed sealer, heavy staining, fragile surfaces, or other existing conditions may require a different process or additional work. Clear expectations are more valuable than a vague low number.'],
    ]
  },
  '/pressure-washing-tips/why-gutter-cleaning-is-important': {
    category: 'Maintenance', title: 'Why gutter cleaning is important',
    intro: 'Gutters move water away from the roof and foundation. Debris can block that flow, add weight, and send water where it should not go.',
    relatedHref: '/gutter-cleaning', relatedLabel: 'Gutter cleaning',
    sections: [
      ['Flow is the first job', 'The practical job of the gutter system is to move water away from the roofline and foundation. Leaves and debris can block gutters and downspouts, and recurring buildup can create overflow where water should not be sitting.'],
      ['Full gutters can stress the system', 'The current AquaBlast guidance explains that heavy debris can add weight to aluminum gutters and their hangers, while overflow can keep moisture against fascia and surrounding materials. That is why the service is framed as maintenance, not just appearance.'],
      ['Downspouts and drainage matter too', 'AquaBlast’s live process includes clearing the gutter and checking that downspouts are open. Water that cannot drain away from the house can create problems near the foundation, so the job is not complete just because the visible trough looks clean.'],
      ['The method depends on access and risk', 'Depending on access and roof conditions, gutter cleaning may involve ladder access, hand removal or leaf-blower work where appropriate, and rinsing or blowing through downspouts. Stories, roof pitch, distance, labor, and job risk can all affect the quote.'],
      ['Interior debris and exterior streaking are different scopes', 'Removing leaves and blockages from inside the gutter is not automatically the same service as cleaning visible exterior staining. The estimate should make that distinction clear.'],
    ]
  },
  '/pressure-washing-tips/how-to-keep-your-wood-deck-maintained': {
    category: 'Wood', title: 'How to keep your wood deck maintained',
    intro: 'Wood needs a gentler maintenance mindset than concrete. Cleaning should prepare the surface for its next step, not damage the fibers in the name of speed.',
    relatedHref: '/wood-restoration', relatedLabel: 'Wood restoration',
    sections: [
      ['Start with a routine inspection', 'AquaBlast’s live deck-maintenance guidance begins before washing: look for uneven areas, loose boards or railings, and raised fasteners. Cleaning does not replace structural maintenance, and a homeowner can catch many of those conditions with a simple walk-around.'],
      ['Cleaning is part of an ongoing maintenance cycle', 'Regular deck cleaning can help keep buildup from becoming a larger maintenance problem. The goal is to clean the wood while respecting the fibers and whatever finish is already on the deck.'],
      ['Cleaning can prepare the deck for the next step', 'Depending on the project, washing may be followed by drying, sanding, staining, or sealing. The cleaning method should support that later work instead of leaving the surface fuzzy or damaged.'],
      ['Keep repair and cleaning decisions separate', 'Loose boards, railings, exposed fasteners, splinters, worn finish, and drainage issues are maintenance items in their own right. A clean deck makes those conditions easier to see and plan around.'],
    ]
  },
  '/pressure-washing-tips/professional-vs-diy-pressure-washing': {
    category: 'Process', title: 'Professional vs. DIY pressure washing',
    intro: 'The biggest difference is not simply equipment power. It is knowing what pressure, chemistry, access method, and protection a surface actually needs.',
    relatedHref: '/pressure-washing-company', relatedLabel: 'View services',
    sections: [
      ['DIY looks inexpensive because the machine is only part of the cost', 'Equipment rental is only one piece of a DIY job. Cleaning products, water, time, protective setup, and the cost of correcting damage all affect the real comparison.'],
      ['Knowledge matters as much as equipment', 'Pressure, detergents, access, runoff, and surface type change the method. Without that working knowledge, a pressure washer can damage siding, wood, seals, roofing, or other exterior materials and can create personal safety risks.'],
      ['Professional work should reduce uncertainty', 'A professional crew brings the equipment plus the surface knowledge, setup, and process needed to choose the right method. That is especially important when ladders, upper stories, landscaping, electrical fixtures, drainage, or delicate finishes are involved.'],
      ['DIY still has a place for small routine tasks', 'Not every exterior chore requires a contractor. The decision point is whether the surface risk, equipment, access, and desired result exceed what can be handled safely and predictably.'],
    ]
  },
  '/pressure-washing-tips/choosing-the-best-pavers-for-your-project': {
    category: 'Pavers', title: 'Choosing the best pavers for your project',
    intro: 'Paver choice affects appearance, maintenance, drainage, joint behavior, and how the finished surface will eventually be cleaned and sealed.',
    relatedHref: '/paver-cleaning-sealing', relatedLabel: 'Paver care',
    sections: [
      ['Brick pavers', 'Brick pavers are a durable option that can hold color well and offer a naturally slip-resistant surface. The important question is how the material fits the use of the driveway, walk, patio, or pool-deck area.'],
      ['Concrete pavers', 'Concrete pavers are available in many shapes and sizes, making them a versatile option. Their modular layout can also respond differently to ground movement than a single poured slab, which is part of the maintenance conversation.'],
      ['Stone pavers', 'Natural stone gives each project a more individual appearance because the material itself varies. That visual difference is part of the selection decision, along with traffic, drainage, exposure, and future cleaning or sealing needs.'],
      ['Choose with future maintenance in mind', 'Different paver materials and finishes respond differently to stains, cleaners, joint sand, sealers, and weather. Installation, drainage, cleaning, joint care, and sealing all affect how the finished surface performs over time.'],
    ]
  },
}

const projectDetails = {
  '/projects/house-washing-concrete-cleaning-vickery-oh': { title:'House Washing and Concrete Cleaning in Vickery, OH', location:'Vickery, OH', services:['House Washing','Concrete Cleaning'], budget:'$900', context:'Summer lake home', summary:'A Vickery customer requested cleaning for both the home and concrete and coordinated the visit around being at the property.', story:['The project combined house washing and concrete cleaning during the same visit.', 'The customer supplied photos during the quote process, accepted the estimate online, and requested a Friday appointment. The project record notes that the client was pleased with the completed work.'], related:'/house-washing', relatedLabel:'House washing' },
  '/projects/house-window-concrete-washing-marblehead-ohio': { title:'House, Window, and Concrete Washing in Marblehead, OH', location:'Marblehead, OH', services:['House Washing','Concrete Cleaning','Window Cleaning'], budget:'$500', context:'Multi-surface residential visit', summary:'One Marblehead visit combined house washing, concrete cleaning, and exterior window cleaning.', story:['The visit began with work arranged for a family property and expanded to multiple exterior surfaces.', 'We scheduled the exterior window cleaning around another property treatment and completed the house and concrete during the same visit.'], related:'/marblehead', relatedLabel:'Marblehead services' },
  '/projects/catawba-island-ohio-house-washing': { title:'Catawba Island Ohio House Washing', location:'Catawba Island, OH', services:['House Washing'], budget:'$450', context:'Residential soft-wash project', summary:'A Catawba Island house wash where organic buildup was documented on arrival and addressed during the visit.', story:['The customer contacted us for a house-washing quote, and the project was scheduled after the estimate was sent.', 'Visible organic growth was documented on parts of the home. We documented those conditions before cleaning, and the project record notes a good finished result.'], related:'/catawba-island', relatedLabel:'Catawba Island services' },
  '/projects/house-washing-oak-harbor': { title:'House Washing in Oak Harbor', location:'Oak Harbor, OH', services:['House Washing'], budget:'$180', context:'Localized house-washing request', summary:'A smaller Oak Harbor project focused on one side of the home while AquaBlast was already working nearby.', story:['Not every job needs to be a whole-property package. This Oak Harbor customer asked us to clean one side of the house.', 'Because the crew was already working in the area, the quote and project were completed within the same week.'], related:'/oak-harbor', relatedLabel:'Oak Harbor services' },
  '/projects/house-washing-in-port-clinton-oh': { title:'House Washing in Port Clinton, OH', location:'Port Clinton, OH', services:['House Washing'], budget:'$1,700', context:'Time-sensitive residential cleaning', summary:'A Port Clinton homeowner needed the property cleaned ahead of a gathering and AquaBlast fit the work into the requested timeframe.', story:['The customer contacted us on a Saturday ahead of an event at the end of the following week.', 'The crew fit the project into the schedule, addressing spider webs and exterior buildup across the home. The work was completed within the customer’s requested timeframe for that project.'], related:'/port-clinton', relatedLabel:'Port Clinton services' },
  '/projects/concrete-cleaning-port-clinton-oh': { title:'Concrete Cleaning and Sealing in Port Clinton, OH', location:'Port Clinton, OH', services:['House Washing','Concrete Cleaning','Concrete Sealing'], budget:'$3,000', product:'VSEAL 102', context:'Cleaning + sealing with prior-sealer issue', summary:'A concrete project that included cleaning, sealing, and troubleshooting an issue related to a previous sealer.', story:['The customer said the concrete had not been serviced in several years, so the project combined cleaning with a renewed sealing system.', 'An issue with the prior sealer led the crew to contact the manufacturer for guidance. The sealer used for the project was VSEAL 102.'], related:'/concrete-cleaning', relatedLabel:'Concrete cleaning' },
  '/projects/marblehead-house-wash-concrete-cleaning-sealing': { title:'Marblehead House Wash, Concrete Cleaning and Sealing', location:'Marblehead, OH', services:['House Washing','Concrete Cleaning','Concrete Sealing'], budget:'$2,000', context:'Weather-dependent sealing project', summary:'A Marblehead project where cleaning and sealing had to be coordinated around dry weather and cure time.', story:['The project started with house washing and concrete cleaning, then moved into a weather-sensitive sealing phase.', 'Unsuitable weather delayed the sealing portion of the job, so the crew stayed in contact with the customer until schedules and dry conditions aligned.'], related:'/marblehead', relatedLabel:'Marblehead services' },
  '/projects/marblehead-oh-paver-cleaning-sansing-sealing': { title:'Marblehead Paver Cleaning, Sanding and Sealing', location:'Lakeside / Marblehead, OH', services:['Paver Cleaning','Joint Sand','Paver Sealing'], budget:'$2,000', product:'Trident Dealer', context:'Patio + driveway paver maintenance', summary:'A paver patio and driveway project involving weed/debris removal, cleaning, sanding, sealing, and follow-up.', story:['The customer contacted us after seeing work we had completed for a neighbor. The paver patio and driveway had overgrown joints and debris before cleaning.', 'The crew cleaned and re-sanded the pavers, sealed them, then returned to check drying and remove cones after weather passed. The project record lists Trident Dealer as the product used.'], related:'/paver-cleaning-sealing', relatedLabel:'Paver cleaning & sealing' },
  '/projects/condo-washing-marblehead-oh': { title:'Condo Washing in Marblehead, OH', location:'Marblehead, OH', services:['Condo Washing','Soft Washing'], budget:'$1,200', context:'Repeat-customer exterior cleaning', summary:'A repeat-customer condo and garage cleaning project using a soft-wash process.', story:['The client was a repeat customer requesting exterior cleaning for the condo and garage.', 'The project record shows a soft-wash approach was used rather than aggressive pressure against the siding.'], related:'/house-washing', relatedLabel:'House washing' },

  '/projects/commercial-office-building-cleaning-lakeside-marblehead-OH': { title:'Commercial Office Building Cleaning in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', services:['Commercial Building Washing'], budget:'$500', context:'Repeat customer · after-hours scheduling', summary:'A commercial office-building wash scheduled after business hours for a repeat customer.', story:['The office building had gone a couple of years since its previous cleaning. The visit was scheduled after hours so the business was not open during the work.', 'We used our normal house-wash mix across the building, and the project record notes that the customer was pleased with the result.'], related:'/commercial-pressure-washing/building-washing', relatedLabel:'Building washing' },
  '/projects/tire-mark-removal-in-marblehead-ohio': { title:'Tire Mark Removal in Marblehead Ohio', location:'Marblehead, OH', services:['Commercial Concrete Cleaning','Tire-Mark Removal'], budget:'$450', context:'Commercial sidewalk cleanup', summary:'A commercial sidewalk cleanup after heavy-lift equipment left tire marks on concrete.', story:['The marks were connected to equipment used during earlier condo work at the property. Rather than leave the site with the new staining, we returned to address it.', 'The crew used its hot-water system to lift the tire marks, and the client was pleased with the result.'], related:'/commercial-pressure-washing/parking-lot-cleaning', relatedLabel:'Parking + concrete cleaning' },
  '/projects/concrete-cleaningsealing-on-johnsons-island-ohio': { title:'Concrete Cleaning / Sealing on Johnson’s Island, Ohio', location:'Johnson’s Island, OH', services:['Concrete Cleaning','Concrete Sealing','Retaining Wall Cleaning'], budget:'$2,000', context:'Cistern-aware island project', summary:'Concrete, driveway, and retaining-wall work planned around a Johnson’s Island property with limited cistern capacity.', story:['The customer requested a quote while we were already washing a neighboring home. Because the property used a cistern, we planned the job around the available water supply.', 'The crew brought water to the job, cleaned the concrete and retaining wall, then returned the next day to clear debris and seal the driveway.'], related:'/johnsons-island', relatedLabel:"Johnson's Island services" },
  '/projects/house-washing-and-gutter-cleaning-on-johnsons-island-': { title:'House Washing and Gutter Cleaning on Johnsons Island', location:'Johnson’s Island, OH', services:['House Washing','Concrete Cleaning','Gutter Cleaning','Retaining Wall Cleaning'], budget:'$600', context:'Multi-service island property', summary:'A newly purchased Johnson’s Island property combining house, concrete, gutter, and retaining-wall cleaning.', story:['The homeowner was preparing the property for painting and asked AquaBlast to address several exterior surfaces in one visit.', 'Cistern capacity was specifically raised during planning, so the work plan accounted for property-specific island logistics.'], related:'/johnsons-island', relatedLabel:"Johnson's Island services" },
  '/projects/house-washing-in-sandusky-ohio': { title:'House Washing in Sandusky Ohio', location:'Sandusky, OH', services:['House Washing','Soft Washing'], budget:'$365', context:'Tight-neighbor residential setting', summary:'A Sandusky residence soft-washed in a property setting with neighboring homes close by.', story:['The customer first knew AquaBlast through commercial work and later requested a quote for her personal residence.', 'The project involved close neighboring properties, and the home was soft-washed successfully.'], related:'/sandusky', relatedLabel:'Sandusky services' },
  '/projects/concrete-gutter-cleaning-oak-harbor-oh': { title:'Concrete and Gutter Cleaning in Oak Harbor, OH', location:'Oak Harbor, OH', services:['Concrete Cleaning','Gutter Cleaning'], budget:'$700', context:'New-home maintenance visit', summary:'Concrete and gutter cleaning requested after the customer purchased an Oak Harbor home.', story:['The customer contacted AquaBlast after purchasing the property and asked for both concrete and gutter cleaning rather than treating them as separate future jobs.', 'We returned a quote the same day, and the customer was happy with the completed work.'], related:'/oak-harbor', relatedLabel:'Oak Harbor services' },
  '/projects/deck-maintenance-paver-cleaning-in-lakeside-ohio': { title:'Deck & Maintenance Paver Cleaning in Lakeside, Ohio', location:'Lakeside, OH', services:['Paver Cleaning','Deck Cleaning','Fence Cleaning','Retaining Wall Cleaning'], budget:'$1,600', context:'Multi-surface maintenance project', summary:'A recurring Lakeside customer project covering pavers, fence, deck, and retaining-wall surfaces.', story:['This was a multi-surface maintenance visit covering several exterior areas rather than one isolated stain.', 'The vertical retaining walls were specifically called out as heavily soiled, and the crew used its soft-washing approach to clean those surfaces along with the pavers, fence, and deck.'], related:'/lakeside', relatedLabel:'Lakeside services' },
  '/projects/house-paver-and-exterior-window-cleaning-in-marblehead-ohio': { title:'House, Paver, and Exterior Window Cleaning in Marblehead Ohio', location:'Marblehead, OH', services:['House Washing','Paver Cleaning','Exterior Window Cleaning'], budget:'$2,000', context:'Recently purchased property', summary:'A recently purchased Marblehead property cleaned after backyard tree work was coordinated.', story:['The customer wanted exterior work completed after trees in the backyard had been removed, so project timing was coordinated with another contractor instead of treating the cleaning in isolation.', 'The work was completed on a cold April day and combined house washing, paver cleaning, and exterior-window cleaning.'], related:'/marblehead', relatedLabel:'Marblehead services' },
  '/projects/comercila-concrete-cleaning-port-clinton-oh': { title:'Commercial Concrete Cleaning in Port Clinton, OH', location:'Port Clinton, OH', services:['Commercial Concrete Cleaning','Hot-Water Cleaning'], budget:'$2,000', context:'Pre-inspection commercial work', summary:'Commercial concrete cleaning at a Port Clinton attraction ahead of an annual inspection.', story:['The customer was African Safari Wildlife Park, where concrete needed to be cleaned before an annual inspection.', 'The project record notes that hot water was requested for the job and that AquaBlast fit the work into the schedule on short notice.'], related:'/commercial-pressure-washing/parking-lot-cleaning', relatedLabel:'Commercial concrete cleaning' },

  '/projects/deck-cleaning-sandusky-ohio': { title:'Deck Cleaning Sandusky Ohio', location:'Sandusky, OH', services:['Deck Cleaning','Wood Restoration'], budget:'$850', product:'Stain and Seal Experts Cleaner', context:'Deck preparation before future staining', summary:'A Sandusky deck cleaning completed ahead of the owner’s planned sanding and staining work.', story:['The customer sent photos for an estimate and wanted the deck cleaned as preparation for later finishing work.', 'The Completed job lists Stain and Seal Experts Cleaner and says the customer was pleased with the cleaned result before the next restoration steps.'], related:'/wood-restoration', relatedLabel:'Wood restoration' },
  '/projects/house-washing-in-tiffin-ohio': { title:'House Washing in Tiffin Ohio', location:'Tiffin, OH', services:['House Washing'], budget:'$450', context:'Spring scheduling after landscaping', summary:'A Tiffin house-washing project deliberately scheduled after spring landscaping work.', story:['The customer contacted AquaBlast early in spring and reserved a place on the schedule for early May.', 'The project record says the house wash was timed after the landscapers finished, keeping the exterior-cleaning visit coordinated with other property work.'], related:'/tiffin', relatedLabel:'Tiffin services' },
  '/projects/gutter-cleaning-sandusky-ohio-': { title:'Gutter Cleaning Sandusky Ohio', location:'Sandusky, OH', services:['Gutter Cleaning','Downspout Clearing'], budget:'$400', context:'Gutter and downspout maintenance', summary:'A Sandusky gutter-cleaning visit focused on removing debris and restoring downspout flow.', story:['The customer requested a gutter-cleaning quote and was scheduled about a week after contacting AquaBlast.', 'The work focused on debris removal, downspout clearing, and clear communication through scheduling.'], related:'/gutter-cleaning', relatedLabel:'Gutter cleaning' },
  '/projects/gutter-cleaning-bowling-green-ohio': { title:'Gutter Cleaning Bowling Green Ohio', location:'Bowling Green, OH', services:['Gutter Cleaning'], budget:'$350', context:'Two-story home · ladder concern', summary:'A Bowling Green homeowner used the online quote system because they were not comfortable handling two-story gutter work themselves.', story:['The inquiry came through AquaBlast’s online quote system and the quote was returned the same day.', 'The project record says the work was scheduled roughly two weeks later.'], related:'/bowling-green', relatedLabel:'Bowling Green services' },
  '/projects/deck-washing-and-concrete-cleaning-in-port-clinton-ohio': { title:'Deck Washing and Concrete Cleaning in Port Clinton Ohio', location:'Port Clinton, OH', services:['Deck Washing','Concrete Cleaning'], budget:'$400', context:'Combined deck + hardscape cleaning', summary:'A Port Clinton visit pairing deck washing with older concrete cleaning.', story:['The Completed job says the crew started with the deck and then cleaned the concrete.', 'The customer was pleased with the result and referred AquaBlast to a neighbor, showing how deck and concrete cleaning can be handled during the same visit.'], related:'/port-clinton', relatedLabel:'Port Clinton services' },
  '/projects/house-concrete-deck-cleaning-exterior-window-cleaning-project-in-gibsonburg-ohio': { title:'House, Concrete, Deck and Exterior Window Cleaning in Gibsonburg Ohio', location:'Gibsonburg, OH', services:['House Washing','Concrete Cleaning','Deck Cleaning','Exterior Window Cleaning'], budget:'$1,100', context:'Whole-exterior multi-surface visit', summary:'A Gibsonburg project covering the driveway, sidewalks, stoop, rear deck, house, and exterior windows.', story:['The project record describes a deliberate sequence: flatwork first, rear deck next, then the house exterior.', 'The visit finished with exterior window cleaning using AquaBlast’s RO/DI setup, turning one appointment into a broader property refresh.'], related:'/pressure-washing-company', relatedLabel:'Residential services' },
  '/projects/top-quality-roof-cleaning-in-port-clinton-ohio': { title:'Top Quality Roof Cleaning in Port Clinton Ohio', location:'Port Clinton, OH', services:['Roof Cleaning','Gutter Cleaning','Concrete Cleaning'], budget:'$1,200', context:'Pre-sale property maintenance', summary:'A Port Clinton project combining roof, gutter, driveway, and sidewalk cleaning before a future home sale.', story:['The project covered the main roof and garage roof along with surrounding concrete and gutter work.', 'The customer was preparing to sell the following year and valued the visible improvement as part of that preparation.'], related:'/roof-cleaning', relatedLabel:'Roof cleaning' },
  '/projects/house-washing-marblehead-ohio': { title:'House Washing Marblehead Ohio', location:'Marblehead, OH', services:['House Washing'], budget:'$400', context:'Photo-assisted quote + scheduled visit', summary:'A Marblehead homeowner used photos and the online quote process to schedule a house wash for a time they could be home.', story:['The customer sent project photos, accepted the quote online, and received the work order and appointment information.', 'The Completed job says the customer was pleased after the house washing was completed.'], related:'/marblehead', relatedLabel:'Marblehead services' },
  '/projects/concrete-cleaning-in-port-clinton-ohio': { title:'Concrete Cleaning in Port Clinton, Ohio', location:'Port Clinton, OH', services:['Concrete Cleaning'], budget:'$400', context:'Repeat-customer concrete maintenance', summary:'A repeat Port Clinton customer scheduled stoop, walkway, and driveway concrete cleaning.', story:['The project record describes a spring estimate for several connected concrete surfaces around the property.', 'AquaBlast identifies the client as a returning customer and frames the visit as ongoing exterior maintenance rather than a one-time emergency.'], related:'/concrete-cleaning', relatedLabel:'Concrete cleaning' },
  '/projects/concrete-deck-and-window-cleaning-in-oak-harbor-ohio': { title:'Concrete, Deck, and Window Cleaning in Oak Harbor, Ohio', location:'Oak Harbor, OH', services:['Concrete Cleaning','Deck Cleaning','Gazebo Cleaning','Window Cleaning'], budget:'Not listed', context:'Annual multi-surface maintenance', summary:'A long-time Oak Harbor customer combined deck, gazebo, concrete, and window cleaning in one annual visit.', story:['The customer returns each year to have exterior-maintenance tasks handled in one visit.', 'The scope included the deck, gazebo, concrete, and windows, showing how repeat work can expand naturally across the property.'], related:'/oak-harbor', relatedLabel:'Oak Harbor services' },
  '/projects/concrete-cleaning-in-port-clinton-oh': { title:'Concrete Cleaning in Port Clinton, OH', location:'Port Clinton, OH', services:['Concrete Cleaning','Deck Preparation'], budget:'$1,000', context:'Concrete cleaning + deck prep for stain', summary:'A Port Clinton project combining concrete patio cleaning with deck preparation before staining.', story:['The homeowner had built the property years earlier and wanted the deck prepared for a new finish.', 'AquaBlast quoted both the deck preparation and concrete patio work, then completed the combined scope in one scheduled project.'], related:'/concrete-cleaning', relatedLabel:'Concrete cleaning' },
  '/projects/concrete-cleaning-and-house-washing-in-marblehead-oh': { title:'Concrete Cleaning and House Washing in Marblehead, OH', location:'Marblehead, OH', services:['Concrete Cleaning','House Washing'], budget:'$600', context:'Lake-home exterior refresh', summary:'A Lakeside Marblehead homeowner combined concrete cleaning with house washing after comparing several quotes.', story:['The project record says the homeowner contacted multiple companies before choosing AquaBlast.', 'The final scope included both concrete cleaning and house washing.'], related:'/marblehead', relatedLabel:'Marblehead services' },
  '/projects/house-washing-oak-harbor-ohio': { title:'House Washing in Oak Harbor, Ohio', location:'Oak Harbor, OH', services:['House Washing','Deck Cleaning','Patio Cleaning'], budget:'$1,300', context:'Repeat-customer full exterior detail', summary:'A repeat Oak Harbor customer combined house washing, deck cleaning, and patio cleaning across two family properties.', story:['The Completed job describes a broader exterior-detail visit rather than a single-surface house wash.', 'The customer had used AquaBlast several times and also arranged cleaning for her in-laws’ property.'], related:'/oak-harbor', relatedLabel:'Oak Harbor services' },
  '/projects/house-washing-window-cleaning-marblehead-oh': { title:'House Washing and Window Cleaning in Marblehead, OH', location:'Marblehead, OH', services:['House Washing','Exterior Window Cleaning'], budget:'$425', context:'Newly purchased home', summary:'A newly purchased Marblehead home received house washing and exterior window cleaning on a quickly scheduled Saturday visit.', story:['The customer wanted the exterior cleaned soon after purchasing the home and requested both house and window work.', 'The project record says the customer was pleased with the result and recommended AquaBlast to neighbors.'], related:'/window-cleaning', relatedLabel:'Exterior window cleaning' },
  '/projects/port-clinton-roof-cleaning': { title:'Port Clinton Roof Cleaning', location:'Port Clinton, OH', services:['Roof Cleaning','Gutter Cleaning'], budget:'$1,000', context:'Recently purchased lake home', summary:'A newly purchased Port Clinton lake home received roof and gutter cleaning with expectations set for gradual roof improvement.', story:['AquaBlast explained that the organic material would continue dying and releasing from the roof over several months after treatment.', 'The visit paired that roof-treatment process with gutter cleaning for a recently purchased waterfront home.'], related:'/roof-cleaning', relatedLabel:'Roof cleaning' },
  '/house-washing-gutter-cleaning-kelleys-island-oh': { title:"House Washing and Gutter Cleaning in Kelley's Island, OH", location:'Kelleys Island, OH', services:['House Washing','Gutter Cleaning'], budget:'$1,200', context:'Island logistics · ferry scheduling', summary:'A Kelleys Island house-and-gutter project coordinated around ferry access.', story:['The customer came through a Facebook group referral and accepted a quote for both house washing and gutter cleaning.', 'Because the property is on the island, AquaBlast scheduled the work around ferry timing instead of treating island access like an ordinary mainland appointment.'], related:'/kelleys-island', relatedLabel:'Kelleys Island services' },
  '/projects/house-washing-oak-harbor-oh': { title:'House Washing in Oak Harbor, OH', location:'Oak Harbor, OH', services:['House Washing'], budget:'$400', context:'Straightforward residential house wash', summary:'An Oak Harbor homeowner requested a mailed quote and scheduled a standard residential house wash.', story:['The project record says the customer was pleasantly surprised by the quoted cost and moved ahead with scheduling.', 'The job focused on a standard residential house wash rather than a larger multi-service project.'], related:'/oak-harbor', relatedLabel:'Oak Harbor services' },
  '/projects/deck-staining-in-catawba-island-oh': { title:'Deck Staining in Catawba Island, OH', location:'Catawba Island, OH', services:['Deck Cleaning','Sanding','Deck Staining'], budget:'$3,000', product:'Stain and Seal Experts Semi Transparent', context:'Multi-stage deck restoration', summary:'A Catawba Island deck was cleaned, sanded, and stained in a staged restoration process.', story:['The deck had been built a few years earlier and was old enough to accept stain. AquaBlast first scheduled the cleaning stage, then returned the following week for sanding and staining.', 'The published project narrative describes the selected stain as clear, while the Products Used field lists “Stain and Seal Experts Semi Transparent.” Those two published descriptions are preserved without pretending they are identical.'], related:'/wood-restoration', relatedLabel:'Wood restoration' },
  '/projects/deck-cleaning-lakeside-marblehead-oh': { title:'Deck Cleaning in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', services:['Deck Washing'], budget:'$850', context:'Seasonal deck refresh', summary:'A Lakeside Marblehead deck was cleaned after several seasons of buildup and prepared for summer use.', story:['The customer asked AquaBlast to move furniture as needed and clean the deck after it had gone a couple of years without service.', 'The project focused on restoring the deck’s appearance without adding a separate staining scope.'], related:'/wood-restoration', relatedLabel:'Wood restoration' },
  '/projects/house-washing-in-lakeside-marblehead-ohio': { title:'House Washing in Lakeside Marblehead, Ohio', location:'Lakeside Marblehead, OH', services:['House Washing','Gutter Cleaning','Deck Cleaning','Concrete Cleaning'], budget:'$2,200', context:'Whole-property exterior cleaning', summary:'A next-day Lakeside Marblehead project covering the house, gutters, railing, composite deck, concrete, and landscape rock.', story:['The customer requested a full exterior clean rather than one isolated surface.', 'The crew communicated throughout the visit and combined house, gutter, deck, and concrete cleaning in the same project.'], related:'/lakeside', relatedLabel:'Lakeside services' },
  '/projects/house-washing-port-clinton-oh': { title:'House Washing in Port Clinton, OH', location:'Port Clinton, OH', services:['House Washing','Exterior Window Cleaning'], budget:'$600', context:'Recurring waterfront maintenance', summary:'A Port Clinton customer returned for another house wash after an earlier spring window-and-house visit.', story:['The customer originally found AquaBlast through Facebook and scheduled a later fall house wash before the crew left the spring appointment.', 'The project reflects recurring maintenance for a bay-view property rather than waiting for severe buildup.'], related:'/port-clinton', relatedLabel:'Port Clinton services' },
  '/projects/gutter-cleaning-oak-harbor-oh': { title:'Gutter Cleaning in Oak Harbor, OH', location:'Oak Harbor, OH', services:['Gutter Cleaning','Downspout Clearing'], budget:'$370', context:'Heavily loaded gutters', summary:'An Oak Harbor gutter-cleaning visit included clearing a clogged downspout and removing a full bag of debris.', story:['The gutters had gone a long time without cleaning, and one downspout required focused clearing.', 'The crew recommended annual maintenance and put the customer on the schedule for the following spring.'], related:'/gutter-cleaning', relatedLabel:'Gutter cleaning' },
  '/projects/roof-cleaning-marblehead-oh': { title:'Roof Cleaning in Marblehead, OH', location:'Marblehead, OH', services:['Roof Cleaning','House Washing','Gutter Cleaning'], budget:'$1,300', context:'Soft-wash roof treatment', summary:'A Marblehead roof-and-house project where AquaBlast explained that moss removal continues gradually after treatment.', story:['The customer asked about both roof cleaning and house washing. AquaBlast explained the detergent-based soft-wash process and the expectation that remaining moss releases over future rains.', 'The project also included gutter cleaning, keeping the roof treatment connected to the drainage system below it.'], related:'/roof-cleaning', relatedLabel:'Roof cleaning' },
  '/projects/house-wash-cherry-ave-lakeside-marblehead-oh': { title:'House Wash on Cherry Avenue in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', services:['House Washing','Soft Washing'], budget:'$300', context:'Aluminum siding + oxidation check', summary:'A Lakeside Marblehead house wash where the crew first considered whether faded aluminum siding showed oxidation.', story:['The homeowner had questions about the process, so we explained the detergent-led soft-wash approach before cleaning.', 'Because the siding was aluminum, the crew checked for oxidation conditions that could require additional treatment rather than assuming ordinary house washing would solve everything.'], related:'/house-washing', relatedLabel:'House washing' },
  '/projects/concrete-cleaning-sealing-oxidation-removal-clinton-oh': { title:'Concrete Cleaning, Sealing, and Oxidation Removal in Clinton, OH', location:'Catawba Island / Clinton, OH', services:['Oxidation Removal','Concrete Cleaning','Concrete Sealing'], budget:'$750', product:'Gutter Butter', context:'Faded siding + stamped concrete', summary:'A lake-home project combining oxidation treatment on siding with cleaning and sealing stamped concrete.', story:['The customer contacted AquaBlast about faded siding. The crew identified oxidation and used a dedicated oxidation-removal product rather than treating the issue as ordinary organic staining.', 'The project also included cleaning and sealing stamped concrete. AquaBlast lists Gutter Butter among the products used for that project.'], related:'/house-washing', relatedLabel:'House washing + oxidation context' },
  '/projects/exterior-stucco-window-cleaning-lakeside-marblehead-OH': { title:'Stucco Exterior Cleaning in Lakeside Marblehead, OH', location:'Lakeside Marblehead, OH', services:['Stucco Cleaning','Exterior Window Cleaning'], budget:'$1,200', context:'Lake-home exterior + glass', summary:'A Lakeside Marblehead lake home and its exterior windows were cleaned after several years without service.', story:['The visit paired exterior surface cleaning with window cleaning for a more complete visible result.', 'The project notes describe a lake home that had gone several years without cleaning before the visit.'], related:'/window-cleaning', relatedLabel:'Exterior window cleaning' },
  '/house-washing-gutter-cleaning-east-lucas-st-castalia': { title:'House Washing and Gutter Cleaning on East Lucas St in Castalia', location:'Castalia, OH', services:['House Washing','Gutter Cleaning'], budget:'$420', context:'Organic growth around chimney', summary:'A Castalia house-and-gutter project focused in part on organic growth along the chimney side of the home.', story:['The customer asked AquaBlast to clean both the house and gutters, with particular concern about growth near the chimney.', 'The customer praised the scheduling, communication, and technician’s care during the visit.'], related:'/house-washing', relatedLabel:'House washing' },
  '/deck-soft-washing-northern-avenue-lakeside-marblehead': { title:'Deck Soft Washing on Northern Avenue in Lakeside Marblehead', location:'Lakeside Marblehead, OH', services:['House Washing','Deck Soft Washing'], budget:'$350', context:'Wood cleaning without repainting', summary:'A Lakeside Marblehead homeowner asked whether a wood deck could be cleaned even without plans to repaint it.', story:['AquaBlast explained the soft-washing approach before cleaning both the home and deck.', 'The customer highlighted the online quote flow, appointment reminders, technician professionalism, and final quality check.'], related:'/wood-restoration', relatedLabel:'Wood restoration' },
  '/paver-sealing-confederate-dr-lakeside-marblehead': { title:'Paver Sealing on Confederate Dr. in Lakeside Marblehead', location:'Lakeside Marblehead, OH', services:['Paver Cleaning','Joint Sand','Paver Sealing'], budget:'$1,300', product:'Surebond 6725', context:'Moss-heavy patio restoration', summary:'A heavily overgrown paver patio was cleaned, re-sanded, and sealed with a two-part product system.', story:['The pavers had significant moss buildup before cleaning and sealing.', 'AquaBlast lists Surebond 6725 as the sealer and documents a customer comment praising communication throughout the cleaning, re-sanding, and sealing process.'], related:'/paver-cleaning-sealing', relatedLabel:'Paver cleaning & sealing' },
}


const projectMedia = {
  exact: {
    '/projects/port-clinton-roof-cleaning': [
      { src:'/assets/project-media/10-port-clinton-roof-cleaning-project.webp', width:450, height:450, alt:'AquaBlast Port Clinton roof cleaning project', caption:'Completed job image from this Port Clinton roof-cleaning job.' },
    ],
  },
  service: {
    'House Washing': { src:'/assets/project-media/07-house-washing-before-after.webp', width:1440, height:1440, alt:'AquaBlast house-washing before and after', caption:'AquaBlast house-washing work.' },
    'Concrete Cleaning': { src:'/assets/project-media/03-driveway-concrete-service-image.webp', width:500, height:313, alt:'AquaBlast concrete cleaning work', caption:'AquaBlast concrete-cleaning work.' },
    'Paver Cleaning': { src:'/assets/project-media/04-paver-cleaning-service-image.webp', width:500, height:313, alt:'AquaBlast paver cleaning work', caption:'AquaBlast paver-cleaning work.' },
    'Paver Sealing': { src:'/assets/project-media/04-paver-cleaning-service-image.webp', width:500, height:313, alt:'AquaBlast paver cleaning and sealing work', caption:'AquaBlast paver cleaning and sealing work.' },
    'Deck Cleaning': { src:'/assets/project-media/06-deck-cleaning-before-after.webp', width:1440, height:1440, alt:'AquaBlast deck-cleaning before and after', caption:'AquaBlast deck-cleaning work.' },
    'Wood Restoration': { src:'/assets/project-media/08-deck-restoration-before-after.webp', width:1440, height:1440, alt:'AquaBlast wood-restoration before and after', caption:'AquaBlast wood-restoration work.' },
    'Roof Cleaning': { src:'/assets/project-media/09-roof-cleaning-service-image.webp', width:450, height:300, alt:'AquaBlast roof-cleaning work', caption:'AquaBlast roof-cleaning work.' },
    'Exterior Window Cleaning': { src:'/assets/project-media/05-house-washing-action-quote-banner.webp', width:1400, height:1080, alt:'AquaBlast exterior cleaning work at a home', caption:'AquaBlast residential exterior-cleaning work.' },
    'Commercial Cleaning': { src:'/assets/project-media/01-branded-aqua-blast-work-truck-homepage-banner.webp', width:1920, height:1080, alt:'AquaBlast branded work truck at a job site', caption:'AquaBlast equipment at a job site.' },
  },
}

function getProjectMedia(path, data) {
  if (path === '/projects/top-quality-roof-cleaning-in-port-clinton-ohio') {
    return { items:dedupeLiveProjectMedia(liveProjectMedia[path]).slice(0, 1), exact:true }
  }
  if (liveProjectMedia[path]?.length) return { items:dedupeLiveProjectMedia(liveProjectMedia[path]), exact:true }
  if (projectMedia.exact[path]) return { items:projectMedia.exact[path], exact:true }
  const service = data.services.find(item => projectMedia.service[item])
  const fallback = projectMedia.service[service] || projectMedia.service['House Washing']
  return { items:[fallback], exact:false }
}

const articleVisuals = {
  '/house-washing': { src:'/assets/project-media/07-house-washing-before-after.webp', alt:'AquaBlast house washing before and after', label:'House washing' },
  '/concrete-cleaning': { src:'/assets/project-media/03-driveway-concrete-service-image.webp', alt:'AquaBlast concrete cleaning work', label:'Concrete cleaning' },
  '/roof-cleaning': { src:'/assets/project-media/10-port-clinton-roof-cleaning-project.webp', alt:'AquaBlast roof cleaning project in Port Clinton', label:'Roof cleaning' },
  '/gutter-cleaning': { src:'/assets/project-media/05-house-washing-action-quote-banner.webp', alt:'AquaBlast exterior cleaning work at a home', label:'Exterior cleaning' },
  '/window-cleaning': { src:'/assets/project-media/05-house-washing-action-quote-banner.webp', alt:'AquaBlast exterior cleaning work at a home', label:'Window + exterior cleaning' },
  '/wood-restoration': { src:'/assets/project-media/08-deck-restoration-before-after.webp', alt:'AquaBlast deck restoration before and after', label:'Deck restoration' },
  '/paver-cleaning-sealing': { src:'/assets/project-media/04-paver-cleaning-service-image.webp', alt:'AquaBlast paver cleaning work', label:'Paver cleaning' },
  '/estimate': { src:'/assets/project-media/02-house-washing-service-image.webp', alt:'AquaBlast house washing work', label:'Exterior cleaning' },
}

function ArticlePrimaryMedia({ path, data }) {
  const published = liveArticleMedia[path]
  const fallback = articleVisuals[data.relatedHref] || articleVisuals['/house-washing']
  const visual = published || fallback
  return <figure className={published ? 'article-source-image' : 'article-job-break'}><img src={visual.src} alt={visual.alt} loading="lazy" decoding="async" /><figcaption><span>{published ? 'Published with this AquaBlast article' : 'From a real AquaBlast job'}</span><b>{visual.label}</b></figcaption></figure>
}

function DeepArticle({ data, path }) {
  useServicePageMetadata({ title:`${data.title} | AquaBlast Pressure Washing`, description:data.intro, canonicalPath:path, schemaType:'Article' })
  const estimateHref = `/estimate?source=article&topic=${encodeURIComponent(data.category)}`
  return <PageShell className="article-detail-page"><article className="article-detail story-article-detail">
    <header>
      <p className="kicker">{data.category}</p>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div className="article-hero-actions"><a className="cta" href="#article-answer">Get the answer <span aria-hidden="true">↓</span></a><a className="secondary" href={estimateHref}>Ask about your property <span aria-hidden="true">→</span></a></div>
    </header>

    <section className="article-decision-frame">
      <div><p className="kicker">What you are trying to decide</p><h2>Understand what the condition means before choosing the next step.</h2></div>
      <div><p>{data.intro}</p><p>You do not need to diagnose the entire job yourself. Use the guidance below to recognize the important conditions, then compare the related service or show AquaBlast what you are seeing.</p></div>
    </section>

    <ArticlePrimaryMedia path={path} data={data} />

    <div className="article-body" id="article-answer">{data.sections.map(([heading,copy]) => <section key={heading}><h2>{heading}</h2><p>{copy}</p></section>)}</div>

    <section className="article-guide-band">
      <div><p className="kicker">The next step</p><h2>Advice should help you ask a better question—not force you to become the contractor.</h2></div>
      <div><p>If the conditions described here look familiar, AquaBlast can review the surface, access, visible buildup, and property context before recommending the next step.</p><div className="article-guide-links"><a className="secondary" href={data.relatedHref}>Explore {data.relatedLabel} <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">See completed projects <span aria-hidden="true">→</span></a></div></div>
    </section>

    <section className="article-story-plan">
      <div><p className="kicker">A simple plan</p><h2>Recognize it. Compare it. Then show us yours.</h2></div>
      <ol><li><b>01</b><span>Use this guide to identify the surface condition or decision you are dealing with.</span></li><li><b>02</b><span>Compare the related service and real completed AquaBlast work.</span></li><li><b>03</b><span>Send the property details and photos when you want a recommendation for your specific job.</span></li></ol>
    </section>

    <LeadMagnetBand source={`article:${path}`} />

    <section className="article-success-cta">
      <div><p className="kicker">The goal</p><h2>Make the next decision with more confidence.</h2><p>You should leave this guide knowing what to watch for, what questions matter, and when it makes sense to have AquaBlast look at the actual property.</p></div>
      <a className="cta" href={estimateHref}>Show us your property <span aria-hidden="true">→</span></a>
    </section>

    <footer><a className="secondary" href="/pressure-washing-tips">More cleaning advice <span aria-hidden="true">→</span></a><a className="secondary" href={data.relatedHref}>{data.relatedLabel} <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">Completed projects <span aria-hidden="true">→</span></a></footer>
  </article></PageShell>
}



const projectLocationRoutes = [
  [/Bowling\s*Green/i, '/near-me/pressure-washing-bowling-green'],
  [/Catawba/i, '/near-me/pressure-washing-catawba-island'],
  [/Fremont/i, '/near-me/pressure-washing-fremont'],
  [/Genoa/i, '/near-me/pressure-washing-genoa'],
  [/Johnson/i, '/near-me/johnsons-island-oh'],
  [/Kelleys|Kelley\'s/i, '/near-me/pressure-washing-kelleys-island'],
  [/Lakeside/i, '/near-me/pressure-washing-lakeside'],
  [/Marblehead/i, '/near-me/marblehead-pressure-washing'],
  [/Oak\s*Harbor/i, '/near-me/pressure-washing-oak-harbor'],
  [/Port\s*Clinton/i, '/near-me/pressure-washing-port-clinton'],
  [/Put-In-Bay/i, '/near-me/put-in-bay-pressure-washing'],
  [/Sandusky/i, '/near-me/sandusky-pressure-washing'],
  [/Tiffin/i, '/near-me/pressure-washing-tiffin'],
  [/Toledo/i, '/near-me/pressure-washing-toledo'],
]

const projectServiceRoutes = [
  [/paver/i, '/paver-cleaning-sealing'],
  [/roof/i, '/roof-cleaning'],
  [/gutter|downspout/i, '/gutter-cleaning'],
  [/window|glass|stucco/i, '/window-cleaning'],
  [/deck|wood|fence|stain|restoration|sanding/i, '/wood-restoration'],
  [/concrete|driveway|sidewalk|patio|tire mark/i, '/concrete-cleaning'],
  [/commercial|office|storefront|building/i, '/commercial-pressure-washing'],
  [/house|soft wash|oxidation/i, '/house-washing'],
]

function projectLocationHref(location = '') {
  return projectLocationRoutes.find(([pattern]) => pattern.test(location))?.[1] || '/near-me'
}

function projectPrimaryServiceHref(services = []) {
  const value = services.join(' | ')
  return projectServiceRoutes.find(([pattern]) => pattern.test(value))?.[1] || '/pressure-washing-company'
}

const estimateServiceForProject = (services = []) => {
  if (services.some((item) => /roof|gutter/i.test(item))) return 'roof-cleaning'
  if (services.some((item) => /deck|wood|fence/i.test(item))) return 'wood-restoration'
  if (services.some((item) => /paver|concrete/i.test(item))) return 'concrete-cleaning'
  if (services.some((item) => /window/i.test(item))) return 'window-cleaning'
  if (services.some((item) => /commercial/i.test(item))) return 'commercial-property'
  if (services.some((item) => /house|soft washing|stucco|oxidation/i.test(item))) return 'house-washing'
  return ''
}

const conciseProjectTitle = (title, location) => {
  const places = [...new Set(location.replace(/\u00a0/g, ' ').split('/').map((place) => place.replace(/,?\s*(?:OH|Ohio)\.?$/i, '').trim()).filter(Boolean))].sort((a, b) => b.length - a.length)
  const escapePattern = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  let concise = title.replace(/\u00a0/g, ' ')
  places.forEach((place) => { concise = concise.replace(new RegExp(`(?:\\b(?:in|on|around)\\s+)?${escapePattern(place)}(?:,?\\s*(?:Ohio|OH)\\.?)?`, 'gi'), '') })
  return concise.replace(/\s{2,}/g, ' ').replace(/\s+(?:in|on|around)\s*$/i, '').replace(/^[\s,–—-]+|[\s,–—-]+$/g, '')
}

function ProjectGallery({ media }) {
  const { items, exact } = media
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [dimensions, setDimensions] = useState({})
  const openerRef = useRef(null)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)
  const isOpen = activeIndex !== null
  const active = isOpen ? items[activeIndex] : null
  const selected = items[selectedIndex]

  useEffect(() => {
    if (!items.length) {
      setSelectedIndex(0)
      setActiveIndex(null)
      return
    }
    setSelectedIndex((current) => Math.min(current, items.length - 1))
    setActiveIndex((current) => current === null ? null : Math.min(current, items.length - 1))
  }, [items.length])

  const go = useCallback((direction) => {
    setActiveIndex((current) => current === null ? current : (current + direction + items.length) % items.length)
    setSelectedIndex((current) => (current + direction + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (!isOpen) return undefined

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : openerRef.current
    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarGap = Math.max(0, window.innerWidth - document.documentElement.clientWidth)
    document.body.style.overflow = 'hidden'
    if (scrollbarGap) document.body.style.paddingRight = `${scrollbarGap}px`

    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus())
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setActiveIndex(null)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(-1)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(1)
        return
      }
      if (event.key !== 'Tab') return

      const focusable = [...(dialogRef.current?.querySelectorAll('button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])') || [])]
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      const returnTarget = previousFocusRef.current
      window.requestAnimationFrame(() => {
        if (returnTarget instanceof HTMLElement && returnTarget.isConnected) returnTarget.focus()
        else openerRef.current?.focus()
      })
    }
  }, [isOpen, go])

  const rememberDimensions = (src, event) => {
    const { naturalWidth: width, naturalHeight: height } = event.currentTarget
    setDimensions((current) => current[src] ? current : { ...current, [src]: { width, height } })
  }

  const item = selected
  return <>
    {items.length <= 2 ? <div className={`project-story-media-grid ${items.length === 1 ? 'project-photo-single' : 'project-photo-pair'}`} aria-label="Photos from this job">
      {items.map((galleryItem, index) => <figure key={galleryItem.src} className="project-photo-stage">
        <button ref={index === 0 ? openerRef : undefined} type="button" className="project-photo-open" onClick={() => setActiveIndex(index)} aria-label={`Open photo ${index + 1} of ${items.length}: ${galleryItem.alt}`}>
          <img src={galleryItem.src} alt={galleryItem.alt} width={galleryItem.width} height={galleryItem.height} loading="lazy" decoding="async" onLoad={(event) => rememberDimensions(galleryItem.src, event)} />
          <span aria-hidden="true">Inspect photo</span>
        </button>
        {!exact && <figcaption>{galleryItem.caption}</figcaption>}
      </figure>)}
    </div> : <div className="project-story-media-grid project-photo-gallery">
      <figure className="project-photo-stage">
        <button ref={openerRef} type="button" className="project-photo-open" onClick={() => setActiveIndex(selectedIndex)} aria-label={`Open photo ${selectedIndex + 1} of ${items.length}: ${selected.alt}`}>
          <img src={selected.src} alt={selected.alt} width={selected.width} height={selected.height} loading="lazy" decoding="async" onLoad={(event) => rememberDimensions(selected.src, event)} />
          <span aria-hidden="true">Inspect photo</span>
        </button>
        {!exact && <figcaption>{item.caption}</figcaption>}
      </figure>
      {items.length > 1 && <div className="project-photo-thumbnails" role="list" aria-label="Choose a job photo">
        {items.map((galleryItem, index) => <button type="button" role="listitem" className={index === selectedIndex ? 'selected' : ''} key={galleryItem.src} onClick={() => setSelectedIndex(index)} aria-current={index === selectedIndex ? 'true' : undefined} aria-label={`Show photo ${index + 1} of ${items.length}: ${galleryItem.alt}`}><img src={galleryItem.src} alt="" loading="lazy" decoding="async" onLoad={(event) => rememberDimensions(galleryItem.src, event)} /></button>)}
      </div>}
    </div>}
    {active && <div className="project-photo-dialog" role="dialog" aria-modal="true" aria-label={`Photo ${activeIndex + 1} of ${items.length}`} aria-describedby={`project-photo-caption-${activeIndex}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null) }}>
      <div className="project-photo-dialog-inner" ref={dialogRef}>
        <div className="project-photo-dialog-actions"><span aria-live="polite">Photo {activeIndex + 1} of {items.length}</span><button ref={closeButtonRef} type="button" onClick={() => setActiveIndex(null)}>Close <span aria-hidden="true">×</span></button></div>
        <figure className="project-photo-dialog-figure">
          <div className="project-photo-dialog-stage"><img className="project-photo-dialog-image" src={active.src} alt={active.alt} onLoad={(event) => rememberDimensions(active.src, event)} style={dimensions[active.src] ? { '--photo-native-width': `${dimensions[active.src].width}px`, '--photo-native-height': `${dimensions[active.src].height}px` } : undefined} /></div>
          <figcaption id={`project-photo-caption-${activeIndex}`}>{active.caption || active.alt}</figcaption>
        </figure>
        {items.length > 1 && <div className="project-photo-dialog-controls"><button type="button" onClick={() => go(-1)} aria-label="Previous photo">← Previous</button><button type="button" onClick={() => go(1)} aria-label="Next photo">Next →</button></div>}
      </div>
    </div>}
  </>
}

function ProjectStory({ data, path }) {
  useServicePageMetadata({ title:`${data.title} | AquaBlast Project`, description:data.summary, canonicalPath:path, schemaType:'Article' })
  const media = getProjectMedia(path, data)
  const projectEstimateHref = estimateForProject(estimateServiceForProject(data.services), path)
  const projectTitle = conciseProjectTitle(data.title, data.location)
  const primaryStory = data.story?.[0] || data.summary
  const remainingStory = (data.story || []).slice(1)
  const locationHref = projectLocationHref(data.location)
  const serviceHref = projectPrimaryServiceHref(data.services)
  const relatedLinks = [
    [serviceHref, 'Related service'],
    [locationHref, 'Service area'],
    ['/projects', 'More completed work'],
  ].filter(([href], index, links) => links.findIndex(([candidate]) => candidate === href) === index)
  return <PageShell className="project-story-page"><article className="project-story-detail">
    <header className="project-story-current-hero"><div><p className="kicker">Completed AquaBlast job</p><h1>{projectTitle}</h1><p>{data.summary}</p><div className="project-story-hero-actions"><a className="cta" href="#project-proof">See the proof <span aria-hidden="true">↓</span></a><a className="secondary" href={projectEstimateHref}>Show us your property <span aria-hidden="true">→</span></a></div></div><aside><span>Location</span><b>{data.location}</b><span>Project budget</span><strong>{data.budget}</strong>{data.product && <><span>Product used</span><strong>{data.product}</strong></>}</aside></header>

    <section className="project-story-problem"><div><p className="kicker">The problem</p><h2>If your property has something similar, this is the part to compare first.</h2></div><div><p>{primaryStory}</p><p className="project-story-problem-note">You do not need to know the exact cleaning method before asking for help. Start with the surface, condition, access, or maintenance issue that looks familiar.</p></div></section>

    <section className="project-story-facts"><article><span>Services used</span><b>{data.services.join(' + ')}</b></article><article><span>What shaped the job</span><b>{data.context}</b></article></section>

    <section className={`project-story-media${path === '/projects/top-quality-roof-cleaning-in-port-clinton-ohio' ? ' project-story-media-roof-focus' : ''}`} id="project-proof" aria-label="Job photos"><div className="project-story-media-heading"><p className="kicker">{media.exact ? 'Proof from this job' : 'Comparable AquaBlast proof'}</p><h2>{media.exact ? 'See the work up close.' : 'See comparable completed work.'}</h2><p>{media.exact ? (media.items.length === 1 ? 'This photo is from the job. Compare the surface and condition with what you see at your property.' : 'These photos are from this job. Compare the surfaces and conditions with what you see at your property.') : 'Photos from this exact job are not available here. The images below show other AquaBlast work and are labeled so you can see what is comparable.'}</p>{path === '/projects/top-quality-roof-cleaning-in-port-clinton-ohio' && <div className="project-roof-photo-context"><span>At this property</span><p>The main and garage roofs were cleaned along with the gutters, driveway, and sidewalk. The customer was preparing the home for a future sale.</p></div>}</div><ProjectGallery media={media} /></section>

    <section className="project-story-body"><div><p className="kicker">How AquaBlast handled it</p><h2>The job was shaped by the property—not a generic checklist.</h2></div><div>{remainingStory.length ? remainingStory.map(paragraph => <p key={paragraph}>{paragraph}</p>) : <p>{data.summary}</p>}<p className="project-story-guide-note">That same approach carries into a new estimate: review the actual surface, access, condition, and scope before deciding what belongs in the job.</p></div></section>

    <section className="project-story-plan"><div><p className="kicker">A simple plan</p><h2>Use this job as a reference. Then show us yours.</h2><p>You do not need an identical property or an identical problem. A similar surface or maintenance issue is enough to start the conversation.</p><a className="cta" href={projectEstimateHref}>Get an estimate <span aria-hidden="true">→</span></a></div><ol><li><b>01</b><span>Compare this project with the part of your property that needs attention.</span></li><li><b>02</b><span>Send the address and a few clear photos of the work area.</span></li><li><b>03</b><span>AquaBlast can review the real conditions and help define the right scope.</span></li></ol></section>

    <section className="project-story-success"><div><p className="kicker">Your next step</p><h2>Have a similar surface or concern?</h2></div><div><p>Your property does not need to match this one. Send AquaBlast the address, the area that needs attention, and a few photos so the team can review your conditions and recommend a scope.</p><div className="editorial-actions project-story-related-links" aria-label="Related AquaBlast pages">{relatedLinks.map(([href,label]) => <a className="secondary" href={href} key={href}>{label} <span aria-hidden="true">→</span></a>)}<a className="cta" href={projectEstimateHref}>Show us your property <span aria-hidden="true">→</span></a></div></div></section>
  </article></PageShell>
}

export function getDeepContentPage(pathname) {
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0,-1) : pathname
  if (articleDetails[path]) return <DeepArticle data={articleDetails[path]} path={path} />
  if (projectDetails[path]) return <ProjectStory data={projectDetails[path]} path={path} />
  return null
}

export const articleRoutes = Object.keys(articleDetails)
export const projectRoutes = Object.keys(projectDetails)
