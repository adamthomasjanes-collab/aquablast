import { EditorialProofPanel, PageShell } from './CompanyPages'
import { useNoindexPageMetadata, useServicePageMetadata } from './servicePageUtils'
import { liveArticleMedia } from '../data/liveArticleMedia'
import { articleRoutes, projectRoutes } from './DeepContentPages'
import { LeadMagnetBand } from './LeadMagnetCapture'
import { locationCanonicalRoutes } from '../data/migrationRoutes'

const faqItems = [
  ['Do you use harsh chemicals?', 'AquaBlast publishes that it uses biodegradable, eco-friendly cleaners and does not use chemicals intended to unduly harm the home or environment. The cleaner and method are selected for the surface and the project.'],
  ['What are the dark streaks on a roof?', 'The live AquaBlast FAQ identifies dark roof streaks as Gloeocapsa magma, a wind-carried biological growth that can feed on limestone filler in asphalt shingles. That is why roof cleaning uses a controlled, roof-appropriate process instead of simply adding more pressure.'],
  ['Can old, set-in stains be cleaned?', 'AquaBlast’s published approach is to assess older stains individually, use specialized cleaners where appropriate, and choose the pressure, equipment, and tip for the surface instead of assuming one method fits every stain.'],
  ['Why hire a professional instead of pressure washing it yourself?', 'AquaBlast’s live FAQ points to surface risk, personal safety, cleaner selection, equipment, pressure choice, and technique. Professional exterior cleaning brings those decisions together instead of treating a pressure washer as the only thing the job requires.'],
  ['Can oxidation on siding be cleaned?', 'Chalky oxidation can occur on aluminum and vinyl siding and may require scrubbing plus a tailored detergent. AquaBlast trains around soft-wash methods so high pressure is not the default cleaning action on siding.'],
  ['What information helps with an estimate?', 'The live contact guidance asks for complete job details and pictures when possible because better information can speed up quote turnaround. Siding type, driveway/sidewalk/patio scope, gutter guards, number of stories, paver area, and window screens can all matter depending on the service.'],
  ['Do you serve areas beyond Port Clinton?', 'Yes. AquaBlast serves 14 Northwest Ohio and Lake Erie markets, including shoreline, island, and inland communities.'],
]

const utilityArticleRoutes = [
  '/pressure-washing-tips/how-soft-washing-can-remove-oxidation-from-your-home',
  '/pressure-washing-tips/what-is-the-best-time-of-year-for-exterior-cleaning',
  '/pressure-washing-tips/how-much-does-pressure-washing-cost',
]

const routeLabel = (href) => href.split('/').filter(Boolean).pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
const articleSitemapItems = [...articleRoutes, ...utilityArticleRoutes].sort().map(href => [routeLabel(href), href])
const projectSitemapItems = [...projectRoutes, '/projects/deck-restoration-port-clinton-ohio'].sort().map(href => [routeLabel(href), href])

const sitemapGroups = [
  ['Core', [['Home','/'],['Services','/pressure-washing-company'],['Projects','/projects'],['Locations','/near-me'],['About','/about-us'],['Contact','/contact-us'],['Reviews','/reviews'],['Articles','/pressure-washing-tips'],['FAQ','/faq'],['Seasonal Exterior Care Checklist','/exterior-care-checklist']]],
  ['Services', [['House Washing','/house-washing'],['Concrete Cleaning','/concrete-cleaning'],['Roof Cleaning','/roof-cleaning'],['Gutter Cleaning','/gutter-cleaning'],['Window Cleaning','/window-cleaning'],['Wood Restoration','/wood-restoration'],['Paver Cleaning & Sealing','/paver-cleaning-sealing'],['Commercial Pressure Washing','/commercial-pressure-washing'],['Storefront Cleaning','/commercial-pressure-washing/storefront-cleaning'],['Building Washing','/commercial-pressure-washing/building-washing'],['Dumpster Pad Cleaning','/commercial-pressure-washing/dumpster-pad-cleaning'],['Parking Lot Cleaning','/commercial-pressure-washing/parking-lot-cleaning'],['Commercial Window Cleaning','/commercial-pressure-washing/window-cleaning'],['Fleet Washing','/commercial-pressure-washing/fleet-washing']]],
  ['Locations', [['Port Clinton',locationCanonicalRoutes['port-clinton']],['Sandusky',locationCanonicalRoutes.sandusky],['Put-In-Bay',locationCanonicalRoutes['put-in-bay']],['Kelleys Island',locationCanonicalRoutes['kelleys-island']],['Tiffin',locationCanonicalRoutes.tiffin],['Toledo',locationCanonicalRoutes.toledo],['Bowling Green',locationCanonicalRoutes['bowling-green']],['Catawba Island',locationCanonicalRoutes['catawba-island']],['Fremont',locationCanonicalRoutes.fremont],['Genoa',locationCanonicalRoutes.genoa],["Johnson’s Island",locationCanonicalRoutes['johnsons-island']],['Lakeside',locationCanonicalRoutes.lakeside],['Marblehead',locationCanonicalRoutes.marblehead],['Oak Harbor',locationCanonicalRoutes['oak-harbor']]]],
  ['Projects', projectSitemapItems],
  ['Educational articles', articleSitemapItems],
  ['Utility', [['Privacy','/privacy'],['Terms','/terms'],['Sitemap','/sitemap'],['RSS','/rss']]],
]

function LegalNote() {
  return <div className="legal-note"><b>Questions?</b><p>Contact AquaBlast directly if you have questions about these policies.</p></div>
}

export function FAQPage() {
  useServicePageMetadata({ title:'Frequently Asked Questions | AquaBlast Pressure Washing', description:'Answers to common questions about AquaBlast cleaning methods, roof streaks, oxidation, estimates, and service coverage.', canonicalPath:'/faq', schemaType:'FAQPage', schemaProps:{ mainEntity: faqItems.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) } })
  return <PageShell className="faq-page"><section className="editorial-hero faq-story-hero"><div><p className="kicker">Frequently asked questions</p><h1>You should not have to know the cleaning method. <em>You just need to recognize the problem.</em></h1><p>Use these answers to understand what may be happening on the surface, what can change the cleaning approach, and what information helps AquaBlast review your property.</p><div className="editorial-actions"><a className="cta" href="#faq-answers">Find your question <span aria-hidden="true">↓</span></a><a className="secondary" href="/estimate?source=faq%3Ahero">Show us the property <span aria-hidden="true">→</span></a></div></div><aside><span>Start with the condition</span><b>The surface decides the method.</b><p>Roof streaks, oxidation, organic growth, access, and material can all change the right approach.</p></aside></section><EditorialProofPanel image="/assets/project-media/02-house-washing-service-image.webp" eyebrow="How we assess the job" title="The right answer depends on what is actually on the property." copy="AquaBlast starts with the surface and the condition instead of assuming every job needs the same pressure or chemistry. If you are not sure what you are looking at, photos give us a useful place to start." href="/projects" linkLabel="See completed work" reverse /><section className="faq-story-plan"><div><p className="kicker">A simple plan</p><h2>Get oriented here. Then make the question specific to your property.</h2></div><ol><li><b>01</b><span>Find the question closest to what you are seeing.</span></li><li><b>02</b><span>Compare the answer with the surface and condition at your property.</span></li><li><b>03</b><span>If the answer depends on the actual job, send photos and let AquaBlast review it.</span></li></ol></section><section className="faq-grid" id="faq-answers">{faqItems.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section><section className="editorial-callout compact-callout faq-story-success"><p className="kicker">Still unsure?</p><h2>Get a clear next step for your property.</h2><p>You do not need a perfect diagnosis before reaching out. Send the location, photos, and what you want cleaned so AquaBlast can review the actual job.</p><a className="cta" href="/estimate?source=faq%3Asuccess">Show us the property <span aria-hidden="true">→</span></a></section></PageShell>
}

export function PrivacyPage() {
  useServicePageMetadata({ title:'Privacy | AquaBlast Pressure Washing', description:'AquaBlast privacy information covering the collection, use, retention, accuracy, and safeguarding of personal information.', canonicalPath:'/privacy' })
  return <PageShell className="legal-page"><section className="editorial-hero"><div><p className="kicker">Privacy</p><h1>How AquaBlast handles personal information.</h1><p>Read the principles AquaBlast publishes for collecting, using, retaining, and protecting personal information.</p></div><aside><span>Privacy information</span><b>Know what to expect.</b><p>These principles cover why information is collected, how it is used, and how it is safeguarded.</p></aside></section><LegalNote/><section className="legal-content"><h2>Privacy principles currently published by AquaBlast</h2><ul><li>Identify the purpose for collecting personal information before or when it is collected.</li><li>Use personal information for those stated purposes or compatible purposes, unless consent or law provides otherwise.</li><li>Retain personal information only as long as needed for those purposes.</li><li>Collect information through lawful and fair means and, where appropriate, with the person’s knowledge or consent.</li><li>Keep relevant personal data reasonably accurate, complete, and current.</li><li>Use reasonable safeguards against loss, theft, unauthorized access, disclosure, copying, use, or modification.</li><li>Make information about privacy practices available to customers.</li></ul><p>For questions about privacy practices, contact AquaBlast directly.</p></section></PageShell>
}

export function TermsPage() {
  useServicePageMetadata({ title:'Terms of Use | AquaBlast Pressure Washing', description:'Terms governing use of the AquaBlast website and its published materials.', canonicalPath:'/terms' })
  const sections = [
    ['1. Terms', 'Using the website means accepting the published terms, applicable laws and regulations, and responsibility for compliance with applicable local law.'],
    ['2. Use license', 'The current terms allow temporary personal, non-commercial viewing of site materials and restrict copying, commercial reuse, reverse engineering, removal of proprietary notices, redistribution, and mirroring.'],
    ['3. Disclaimer', 'The current terms provide website materials as-is and disclaim warranties concerning the materials and their use.'],
    ['4. Limitations', 'The current terms limit liability for damages connected with use of, or inability to use, the website materials, subject to applicable-law limitations.'],
    ['5. Revisions and errata', 'AquaBlast’s current terms acknowledge that site materials can contain technical, typographical, or photographic errors and may be changed without a commitment to update every item.'],
    ['6. Links', 'The current terms explain that third-party links are not an endorsement and that linked-site use is at the visitor’s own risk.'],
    ['7. Site-term modifications', 'AquaBlast reserves the ability to revise the website terms, with continued site use subject to the then-current version.'],
    ['8. Governing law', 'The current terms state that claims relating to the website are governed by the law of AquaBlast’s operating state, without regard to conflict-of-law provisions.'],
  ]
  return <PageShell className="legal-page"><section className="editorial-hero"><div><p className="kicker">Terms of use</p><h1>Terms for using the AquaBlast website.</h1><p>Read a summary of the published terms for using this website and its materials.</p></div><aside><span>Terms information</span><b>Know the conditions of use.</b><p>The sections below summarize site use, limitations, third-party links, and applicable law.</p></aside></section><LegalNote/><section className="legal-content legal-sections"><h2>Current terms structure</h2>{sections.map(([title,copy]) => <section key={title}><h3>{title}</h3><p>{copy}</p></section>)}<p>Questions about these terms can be directed to AquaBlast.</p></section></PageShell>
}

export function SitemapPage() {
  useServicePageMetadata({ title:'Site Map | AquaBlast Pressure Washing', description:'Browse AquaBlast services, locations, projects, resources, and utility pages.', canonicalPath:'/sitemap', schemaType:'CollectionPage' })
  return <PageShell className="sitemap-page"><section className="editorial-hero"><div><p className="kicker">Site map</p><h1>Find what you need.</h1><p>Browse services, service areas, projects, articles, and company information.</p></div><aside><span>Site directory</span><b>{sitemapGroups.reduce((n,[,items])=>n+items.length,0)} linked destinations</b><p>Use the sections below to move directly to services, locations, projects, educational articles, and company information.</p></aside></section><section className="sitemap-groups">{sitemapGroups.map(([name,items]) => <article key={name}><span>{name}</span>{items.map(([label,href]) => <a key={href} href={href}>{label}<b aria-hidden="true">→</b></a>)}</article>)}</section></PageShell>
}

export function RSSPage() {
  useServicePageMetadata({ title:'RSS / Content Feed | AquaBlast Pressure Washing', description:'AquaBlast article and project content feed information.', canonicalPath:'/rss' })
  return <PageShell className="rss-page"><section className="editorial-hero"><div><p className="kicker">RSS feed</p><h1>Get new AquaBlast articles and project updates in your feed reader.</h1><p>If you use RSS, you can follow new cleaning advice and project updates without checking back manually.</p></div><aside><span>For RSS readers</span><b>Follow new posts automatically.</b><p>Add the feed once and new AquaBlast posts can show up with the rest of what you follow.</p></aside></section><section className="editorial-split"><div><p className="kicker">Stay up to date</p><h2>New articles and projects can come to you.</h2></div><div><p>AquaBlast keeps an RSS destination for article and project updates. If your feed reader supports RSS or Atom, add the AquaBlast feed once and new posts can appear alongside the other sources you follow.</p><div className="editorial-actions"><a className="secondary" href="/pressure-washing-tips">View articles <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">View projects <span aria-hidden="true">→</span></a></div></div></section></PageShell>
}

const utilityArticleVisuals = {
  '/house-washing': { src:'/assets/project-media/07-house-washing-before-after.webp', alt:'AquaBlast house washing before and after', label:'House washing' },
  '/sandusky': { src:'/assets/project-media/02-house-washing-service-image.webp', alt:'AquaBlast exterior house cleaning work', label:'Exterior cleaning' },
  '/estimate': { src:'/assets/project-media/05-house-washing-action-quote-banner.webp', alt:'AquaBlast exterior cleaning at a home', label:'Exterior cleaning' },
}

function ArticlePage({ category, title, intro, children, relatedHref, relatedLabel, path }) {
  const published = liveArticleMedia[path]
  const fallback = utilityArticleVisuals[relatedHref] || utilityArticleVisuals['/house-washing']
  const estimateHref = `/estimate?source=article&topic=${encodeURIComponent(category)}`
  const isPricingArticle = path === '/pressure-washing-tips/how-much-does-pressure-washing-cost'
  const visual = isPricingArticle
    ? { src:'/assets/project-media/05-house-washing-action-quote-banner.webp', alt:'AquaBlast crew member washing the exterior of a home', label:'AquaBlast house washing' }
    : published || fallback

  return <PageShell className="article-detail-page"><article className={`article-detail story-article-detail utility-story-article${isPricingArticle ? ' pricing-article' : ''}`}>
    <header>
      <div className="article-hero-copy"><p className="kicker">{category}</p><h1>{title}</h1><p>{intro}</p>
        <div className="article-hero-actions"><a className="cta" href={isPricingArticle ? '#pricing-details' : '#article-answer'}>{isPricingArticle ? 'See pricing details' : 'Get the answer'} <span aria-hidden="true">↓</span></a><a className="secondary" href={estimateHref}>{isPricingArticle ? 'Get an estimate' : 'Ask about your property'} <span aria-hidden="true">→</span></a></div>
      </div>
      {isPricingArticle && <aside className="pricing-hero-facts" aria-label="Published AquaBlast pricing at a glance"><p className="kicker">Published starting points</p><div><span>Pressure-washing service minimum</span><strong>$400</strong></div><div><span>General pressure-washing range</span><strong>$0.20–$0.40 <small>/ sq. ft.</small></strong></div><div><span>Sealing minimum, including sealer</span><strong>$1,500</strong></div><p>These are published reference points, not a quote. The property and scope determine the final price.</p></aside>}
    </header>

    {!isPricingArticle && <section className="article-decision-frame">
      <div><p className="kicker">What you are trying to decide</p><h2>Understand what the condition means before choosing the next step.</h2></div>
      <div><p>{intro}</p><p>You do not need to diagnose the entire job yourself. Use the guidance below to recognize the important conditions, then compare the related service or show AquaBlast what you are seeing.</p></div>
    </section>}

    <figure className={published ? 'article-source-image' : 'article-job-break'}>
      <img src={visual.src} alt={visual.alt} loading="lazy" decoding="async" />
      <figcaption><span>{published && !isPricingArticle ? 'Published with this AquaBlast article' : 'From a real AquaBlast job'}</span><b>{isPricingArticle ? 'The surface is only part of the price.' : visual.label}</b>{isPricingArticle && <p>Condition, access, preparation, and the work you need all shape the actual quote.</p>}</figcaption>
    </figure>

    <div className="article-body" id="article-answer"><div id={isPricingArticle ? 'pricing-details' : undefined}>{children}</div></div>

    <section className="article-guide-band">
      <div><p className="kicker">The next step</p><h2>Use the article to understand the issue. Let the property determine the recommendation.</h2></div>
      <div><p>If what you see looks similar, AquaBlast can review the surface, access, visible buildup, and property context before recommending the right service or scope.</p><div className="article-guide-links">{!isPricingArticle && <a className="secondary" href={relatedHref}>{relatedLabel} <span aria-hidden="true">→</span></a>}<a className="secondary" href="/projects">See completed projects <span aria-hidden="true">→</span></a></div></div>
    </section>

    <section className="article-story-plan">
      <div><p className="kicker">A simple plan</p><h2>Recognize it. Compare it. Then show us yours.</h2></div>
      <ol><li><b>01</b><span>Use this article to identify the condition or decision you are dealing with.</span></li><li><b>02</b><span>Compare the related service and completed AquaBlast work.</span></li><li><b>03</b><span>Send the property details and photos when you want a recommendation for your specific job.</span></li></ol>
    </section>

    <LeadMagnetBand source={`article:${path}`} />

    <section className="article-success-cta">
      <div><p className="kicker">{isPricingArticle ? 'Your next step' : 'The goal'}</p><h2>{isPricingArticle ? 'Ready for a price based on your property?' : 'Make the next decision with more confidence.'}</h2><p>{isPricingArticle ? 'The published numbers give you a starting point. Share the surfaces, address, and photos so AquaBlast can review the actual scope.' : 'You should leave this guide knowing what to watch for, what questions matter, and when it makes sense to have AquaBlast look at the actual property.'}</p></div>
      <a className="cta" href={estimateHref}>{isPricingArticle ? 'Get an estimate' : 'Show us your property'} <span aria-hidden="true">→</span></a>
    </section>

    <footer><a className="secondary" href="/pressure-washing-tips">More cleaning advice <span aria-hidden="true">→</span></a>{!isPricingArticle && <a className="secondary" href={relatedHref}>{relatedLabel} <span aria-hidden="true">→</span></a>}<a className="secondary" href="/projects">Completed projects <span aria-hidden="true">→</span></a></footer>
  </article></PageShell>
}

export function OxidationArticle() {
  useServicePageMetadata({ title:'How Soft Washing Can Remove Oxidation From Your Home | AquaBlast Pressure Washing', description:'AquaBlast guidance explaining why oxidation requires surface diagnosis and a different approach than ordinary organic buildup.', canonicalPath:'/pressure-washing-tips/how-soft-washing-can-remove-oxidation-from-your-home', schemaType:'Article' })
  return <ArticlePage path="/pressure-washing-tips/how-soft-washing-can-remove-oxidation-from-your-home" category="Surface diagnosis" title="How soft washing fits when siding shows oxidation" intro="Chalky oxidation can occur on aluminum and vinyl siding and needs to be identified before ordinary cleaning begins." relatedHref="/house-washing" relatedLabel="House washing"><h2>Oxidation is different from ordinary organic buildup.</h2><p>Oxidation can appear as a chalky condition, especially on aluminum siding and sometimes vinyl. Sun exposure can contribute to it, and simply increasing pressure is not the answer.</p><h2>Chalky siding is an important clue.</h2><p>If the siding leaves a powdery or chalk-like residue, tell AquaBlast when you request the quote. Oxidation may require scrubbing and a tailored detergent rather than the same process used for algae or surface dirt.</p><h2>Soft washing relies on chemistry instead of force.</h2><p>Our technicians are trained in soft washing, using cleaning solutions rather than high pressure as the primary cleaning action. That is why we identify the surface condition before choosing the method.</p></ArticlePage>
}

export function SeasonalCleaningArticle() {
  useServicePageMetadata({ title:'Best Time of Year for Exterior Cleaning | AquaBlast Pressure Washing', description:'AquaBlast guidance about seasonal exterior-cleaning timing in Northwest Ohio and Lake Erie communities.', canonicalPath:'/pressure-washing-tips/what-is-the-best-time-of-year-for-exterior-cleaning', schemaType:'Article' })
  return <ArticlePage path="/pressure-washing-tips/what-is-the-best-time-of-year-for-exterior-cleaning" category="Seasonal care" title="What is the best time of year for exterior cleaning?" intro="Timing exterior cleaning depends on the season, the surface, and what is happening around the property." relatedHref={locationCanonicalRoutes.sandusky} relatedLabel="Sandusky service area"><h2>Sandusky weather changes what collects on the exterior.</h2><p>Cold winters, damp springs, warm summers, lake exposure, pollen, road film, and falling leaves create different maintenance problems through the year. The best cleaning window depends on what is on the surface and whether temperatures are safe for the work.</p><h2>Spring: winter residue, pollen, and early organics</h2><p>Road film, salt traces, and winter grime can remain on lower siding, concrete, and entry areas. As temperatures rise, pollen and moisture can add another layer, so late spring is a common time to check the whole exterior after winter.</p><h2>Summer: humidity and faster algae growth</h2><p>Warm, humid conditions can accelerate algae and mildew on shaded siding, trim, roofs, and other surfaces. Surface-appropriate soft washing can address organic buildup without treating delicate materials like concrete.</p><h2>Fall: leaves, gutters, and pre-winter drainage</h2><p>Leaves and seed debris make gutter care more important before winter. Fall is also a useful time to remove organic staining and check that water can move away from the roofline before freeze-thaw weather returns.</p><h2>Winter: freezing conditions usually make exterior washing a poor choice</h2><p>Water can refreeze on steps, drives, seams, and exterior details when temperatures are too low. Most exterior-cleaning work is better planned for sustained conditions safely above freezing rather than forcing the schedule through icy weather.</p><h2>There is no single magic month.</h2><p>Property conditions, surface material, weather, shade, trees, lake exposure, and the type of service all matter. Use the condition of the home—and a safe weather window—rather than assuming every property needs cleaning on the same annual date.</p></ArticlePage>
}

export function PricingArticle() {
  useServicePageMetadata({ title:'How Much Does Pressure Washing Cost? | AquaBlast Pressure Washing', description:'AquaBlast guidance explaining the factors that influence exterior-cleaning pricing and quote scope.', canonicalPath:'/pressure-washing-tips/how-much-does-pressure-washing-cost', schemaType:'Article' })
  return <ArticlePage path="/pressure-washing-tips/how-much-does-pressure-washing-cost" category="Estimates" title="How much does pressure washing cost?" intro="Here is the pricing context we publish now, along with the factors that can move the final quote." relatedHref="/estimate" relatedLabel="Get an estimate"><section className="pricing-detail-item"><h2>The current AquaBlast service minimum is $400.</h2><p>Our current service minimum is $400 for pressure-washing work. For sealing work, the current minimum is $1,500 including sealer.</p></section><section className="pricing-detail-item"><h2>We also publish a square-foot starting range.</h2><p>Our general published range for pressure-washing services is $0.20–$0.40 per square foot, but the actual quote depends on the project. Surface type, access, condition, service mix, preparation, chemistry, and labor can all change the total.</p></section><section className="pricing-detail-item"><h2>You should hear from us quickly.</h2><p>We currently tell customers to expect a text, call, or email within 24 hours after contacting AquaBlast.</p></section><section className="pricing-detail-item"><h2>Price follows the actual scope.</h2><p>House washing, concrete, gutters, roofs, pavers, sealing, windows, and wood work can require different labor, equipment, products, and preparation. Photos and property details help AquaBlast price the right job instead of treating every exterior as interchangeable.</p></section></ArticlePage>
}

export function NotFoundPage({ path = '' }) {
  useNoindexPageMetadata({ title:'Page Not Found | AquaBlast Pressure Washing', description:'The requested AquaBlast page could not be found.' })
  return <PageShell className="not-found-page"><section className="editorial-hero"><div><p className="kicker">404</p><h1>That page is not here.</h1><p>The address may have changed, or the link may be incorrect. Use the main service and project paths below instead of landing on an unrelated homepage.</p><div className="editorial-actions"><a className="cta" href="/pressure-washing-company">View services <span aria-hidden="true">→</span></a><a className="secondary" href="/projects">View projects <span aria-hidden="true">→</span></a></div></div><aside><span>Requested path</span><b>{path || '/'}</b><p>Production hosting must return an actual HTTP 404 status for unknown URLs; this screen prevents a misleading soft-homepage fallback in the client.</p></aside></section></PageShell>
}
