import '../presentation.css'
import { useEffect, useState } from 'react'
import { useServicePageMetadata } from './servicePageUtils'

const evidence = '/case-study/'
const chapters = [
  ['overview', 'Overview'],
  ['findings', '5 opportunities'],
  ['customer-path', 'Customer path'],
  ['concept', 'Concept'],
  ['search', 'Protect SEO'],
  ['growth', 'Built to grow'],
  ['proof', 'What is proven'],
  ['next-steps', 'Next steps'],
]

function CaseStudyNav() {
  const [active, setActive] = useState('overview')
  const [open, setOpen] = useState(false)
  const activeLabel = chapters.find(([id]) => id === active)?.[1] ?? 'Overview'

  useEffect(() => {
    const sections = chapters.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-28% 0px -58% 0px', threshold: 0 })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const conclusion = document.querySelector('.case-conclusion')
    if (!conclusion) return undefined
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setActive('next-steps') }, { threshold: 0.12 })
    observer.observe(conclusion)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return <nav className="case-index" aria-label="Case study chapters">
    <a className="case-index-home" href="/">← Concept home</a>
    <button className="case-index-toggle" type="button" aria-expanded={open} aria-controls="case-study-chapters" onClick={() => setOpen((value) => !value)}><span>Case study</span><b>{activeLabel}</b><i aria-hidden="true">⌄</i></button>
    <div className="case-index-links" id="case-study-chapters" data-open={open}>{chapters.map(([id, label]) => <a href={`#${id}`} key={id} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}</div>
  </nav>
}

function DecisionRationale({ changed, why, principle, meaning }) {
  return <details className="decision-rationale case-reasoning-folder">
    <summary><span><b>Why this change</b><small>Open the reasoning</small></span><i aria-hidden="true">+</i></summary>
    <div className="decision-rationale-body" aria-label="Professional reasoning behind this change">
      <div><span>What I changed</span><p>{changed}</p></div>
      <div><span>Why I changed it</span><p>{why}</p></div>
      <div><span>How this helps the customer</span><p><b>{principle}</b>{meaning ? <> — {meaning}</> : null}</p></div>
    </div>
  </details>
}

function CaseFolder({ title, description, children, className = '' }) {
  return <details className={`case-folder ${className}`.trim()}>
    <summary><span><b>{title}</b>{description ? <small>{description}</small> : null}</span><i aria-hidden="true">+</i></summary>
    <div className="case-folder-body">{children}</div>
  </details>
}

function TermHelp({ term, children }) {
  return <details className="term-help"><summary>{term}<span aria-hidden="true">?</span></summary><p>{children}</p></details>
}


export function AuditCaseStudy() {
  useServicePageMetadata({ title:'AquaBlast Website Redesign Case Study | Working Concept', description:'A shareable AquaBlast case study about protecting the current site’s search assets while evaluating a customer-first website concept.', canonicalPath:'/case-study' })
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return undefined
    const frame = window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block:'start', behavior:'auto' }))
    return () => window.cancelAnimationFrame(frame)
  }, [])
  return <main className="case-study case-study-curated">
    <CaseStudyNav />
    <div className="case-overview" id="overview">
    <p className="kicker">The constraint that shaped the project</p>
    <h1>Protect what’s working. Improve what happens next.</h1>
    <p className="case-intro">When I first reached out, you told me something important: you’re happy with AquaBlast’s SEO. I treated that as a constraint from the beginning—not something the redesign was allowed to casually sacrifice.</p>
    <p className="case-intro">AquaBlast already has what many businesses are still trying to build: useful search visibility, service and location depth, completed projects, customer reviews, and a website that helps people find the company. The opportunity I saw was not to throw that away. It was to explore whether the experience around those assets could work harder—helping the right customer understand AquaBlast faster, see relevant proof sooner, and move from finding the company to starting a conversation with less friction.</p>
    <p className="case-intro"><b>The goal became simple:</b> protect the acquisition engine you’ve already built while improving the experience after someone arrives.</p>

    <section className="case-current-site" aria-labelledby="case-current-site-title">
      <p className="kicker">What is already worth protecting</p>
      <h2 id="case-current-site-title">You’re not starting from zero.</h2>
      <div className="case-current-site-grid">
        <article><span>Search visibility</span><b>Service, location, project, and resource content already give AquaBlast depth.</b><p>The redesign is structured around preserving useful routes and relevance rather than shrinking the site for the sake of a cleaner appearance.</p></article>
        <article><span>Proof</span><b>Completed work, reviews, and local job stories already give customers reasons to trust the company.</b><p>The opportunity is to move that proof closer to the decision it supports.</p></article>
        <article><span>Customer knowledge</span><b>The existing site already reflects how people request quotes and how AquaBlast explains the work.</b><p>The new experience should refine that path, not invent a disconnected sales process.</p></article>
      </div>
      <p className="case-current-site-source">None of that should be casually discarded just because the website can be improved.</p>
      <CaseFolder className="case-folder-protecting" title="See what I audited" description="Service depth, local search, projects, content, lead behavior, and customer proof">
        <div className="case-current-site-grid">
          <article><span>Service depth</span><b>Multiple exterior-cleaning services are already established.</b><p>The concept should make them easier to understand and cross-reference, not pretend AquaBlast needs a brand-new service offering.</p></article>
          <article><span>Local search depth</span><b>Local service-area pages are part of the existing search footprint.</b><p>Those routes and their relevance need to be accounted for before any production cutover.</p></article>
          <article><span>Real proof</span><b>There is already a substantial completed-project archive.</b><p>The redesign brings that evidence closer to the relevant customer decision.</p></article>
          <article><span>Existing lead behavior</span><b>The site already teaches a quote process.</b><p>The concept refines that path instead of replacing it with a disconnected workflow.</p></article>
          <article><span>Content equity</span><b>Homeowner articles already support education and search.</b><p>Production should preserve useful content and improve the route from advice to the next relevant service or estimate action.</p></article>
          <article><span>Customer trust</span><b>Testimonials and job stories already exist.</b><p>The opportunity is to present AquaBlast’s existing proof with stronger proximity, hierarchy, and context.</p></article>
        </div>
        <p className="case-current-site-source">Before production, I’d verify Search Console, analytics, hosting, forms, CompanyCam, and the other systems the site depends on.</p>
      </CaseFolder>
    </section>

    <section className="case-situation">
      <div><p className="kicker">The customer’s side of the story</p><h2>People usually arrive with a property problem—not a desire to study a pressure-washing website.</h2><p className="case-situation-copy">They want to know whether AquaBlast handles the job, whether the company has done work like theirs, whether it serves their area, and how hard it will be to get an estimate. The redesign is built to answer those questions with less hunting.</p></div>
      <ul><li><b>They need orientation</b><span>Make the right service easier to recognize without knowing industry terminology.</span></li><li><b>They need confidence</b><span>Bring relevant reviews and completed local work closer to the claim they support.</span></li><li><b>They need a clear next step</b><span>Make Estimate and Call feel obvious without turning the site into a wall of sales buttons.</span></li><li><b>You need protection</b><span>Improve that experience without casually sacrificing useful URLs, content, or search visibility.</span></li></ul>
    </section>
    <div className="business-lens" aria-label="Business lens for the concept">
      <article><span aria-hidden="true">🛡️</span><b>Protect what already has value</b><p>Search equity, real project proof, local content, and recognizable AquaBlast assets stay part of the plan.</p></article>
      <article><span aria-hidden="true">↗</span><b>Reduce friction to the next step</b><p>Make it faster to understand the service, trust the work, and start the right conversation.</p></article>
      <article><span aria-hidden="true">📊</span><b>Measure before we assume</b><p>Use real analytics and lead behavior to decide what deserves more investment after launch.</p></article>
    </div>
    <section className="case-design-reasoning" aria-labelledby="case-design-reasoning-title">
      <div className="case-design-reasoning-head">
        <p className="kicker">The reasoning behind the redesign</p>
        <h2 id="case-design-reasoning-title">Each visible change starts with an observation—not an assumption about revenue.</h2>
        <p>The concept can show what I observed and why I responded to it. It cannot, by itself, prove that the current site is costing AquaBlast qualified leads, booked work, revenue, or search performance. Those business conclusions need Ryan’s actual data.</p>
      </div>
      <div className="case-reasoning-grid">
        <article>
          <span>01 / CUSTOMER ORIENTATION</span>
          <h3>Start with the property problem, not industry terminology.</h3>
          <p><b>Observed:</b> AquaBlast offers specialized services, while a homeowner may arrive knowing only what part of the property needs attention.</p>
          <p><b>Design response:</b> Let customers begin with the part of the property bothering them, then guide them toward the relevant service.</p>
          <p className="case-evidence-level"><b>Evidence level:</b> UX and information-architecture rationale. Whether this improves AquaBlast’s business performance still needs measurement.</p>
        </article>
        <article>
          <span>02 / PROOF PROXIMITY</span>
          <h3>Put evidence closer to the decision it supports.</h3>
          <p><b>Observed:</b> AquaBlast already has substantial project, review, and local-work proof.</p>
          <p><b>Design response:</b> Bring relevant projects and reviews into the service journey so customers do not have to leave the decision to look for evidence.</p>
          <p className="case-evidence-level"><b>Evidence level:</b> Defensible content-structure decision. Its effect on inquiries, close rate, or job value is not yet measured.</p>
        </article>
        <article>
          <span>03 / PRIMARY ACTION</span>
          <h3>Give the customer one recognizable estimate action.</h3>
          <p><b>Observed:</b> The current experience uses several variations of estimate and quote language for the same general customer objective.</p>
          <p><b>Design response:</b> Standardize the primary action around <b>Get an estimate</b>, while retaining phone and supporting contact options.</p>
          <p className="case-evidence-level"><b>Evidence level:</b> Observable copy consistency plus design rationale—not a claim that the wording will increase conversions.</p>
        </article>
        <article>
          <span>04 / SEARCH + CONTENT</span>
          <h3>Treat the existing search footprint as an asset.</h3>
          <p><b>Observed:</b> AquaBlast has accumulated service, location, project, and educational content that may contribute to how customers find the business.</p>
          <p><b>Design response:</b> Preserve that depth and plan any SEO transition deliberately rather than replacing it with a small brochure site.</p>
          <p className="case-evidence-level"><b>Evidence level:</b> The content footprint is observable. Its actual search value and dependencies require Search Console, analytics, backlink, and provider data.</p>
        </article>
        <article>
          <span>05 / POSITIONING</span>
          <h3>Make the digital experience consistent with the work being shown.</h3>
          <p><b>Observed:</b> AquaBlast’s own project archive shows substantial properties and detailed exterior-care work.</p>
          <p><b>Design response:</b> Use stronger hierarchy, imagery, typography, and proof presentation so the website experience feels consistent with the level of property AquaBlast is trusted to care for.</p>
          <p className="case-evidence-level"><b>Evidence level:</b> Brand-positioning rationale—not evidence of a higher close rate, larger job value, or increased revenue.</p>
        </article>
      </div>
      <aside className="case-evidence-boundary" aria-labelledby="case-evidence-boundary-title">
        <p className="kicker">What the concept cannot prove by itself</p>
        <h3 id="case-evidence-boundary-title">The redesign is a hypothesis until the business evidence is compared with it.</h3>
        <p>Before recommending that AquaBlast replace something that is already working, I’d compare these design observations with search, analytics, lead-quality, quote, win, and approximate job-value data wherever it is available.</p>
        <div className="case-evidence-framework" aria-label="Evidence-led decision framework">
          <div><b>Protect</b><span>Keep what the evidence says is already valuable.</span></div>
          <div><b>Improve</b><span>Change what has an evidence-supported opportunity.</span></div>
          <div><b>Don’t know yet</b><span>Do not manufacture certainty where measurement cannot support it.</span></div>
        </div>
        <p className="case-evidence-close"><b>If the evidence says the current site is doing its job extremely well and these changes do not justify replacing it, that is a useful conclusion too.</b></p>
        <div className="case-action-framework" aria-label="Possible decisions after the diagnostic">
          <p className="kicker">Three legitimate outcomes</p>
          <div className="case-evidence-framework">
            <div><b>Keep</b><span>Leave the current site in place when the evidence does not justify meaningful change.</span></div>
            <div><b>Improve</b><span>Make targeted changes when the evidence points to isolated, repairable opportunities.</span></div>
            <div><b>Replace</b><span>Consider the redesign only when structural limitations justify the cost and SEO-transition risk.</span></div>
          </div>
          <p>The diagnostic is not designed to prove the redesign. It is designed to determine which path the evidence supports.</p>
        </div>
      </aside>
    </section>

    <div className="case-at-glance" aria-label="AquaBlast concept at a glance">
      <article><b>103</b><span>routes in the September 17 inventory</span><p>102 sitemap URLs and the RSS route were mapped in the baseline audit; recheck before production cutover.</p></article>
      <article><b>1 path</b><span>service → proof → estimate</span><p>Make the next useful step easier to understand.</p></article>
      <article><b>Real proof</b><span>projects + customer reviews</span><p>Put evidence beside the decision it supports.</p></article>
      <article><b>Real AquaBlast</b><span>production photography</span><p>The finished site should prove the business with current, authentic material.</p></article>
    </div>

    <CaseFolder title="How I approached the work" description="Optional background on the decision-making behind the concept">
      <aside className="professional-guide" aria-labelledby="professional-guide-title">
        <div className="professional-guide-intro">
          <p className="kicker">The role behind the work</p>
          <h2 id="professional-guide-title">Every recommendation should have a business reason behind it.</h2>
          <p>You know AquaBlast, the jobs, the customers, and the way estimates actually work. My role is to translate that knowledge into a clearer customer path, protect the search assets you’ve earned, and carry the implementation through production QA.</p>
        </div>
        <details className="case-support-details">
          <summary>Plain-English terminology used in this presentation <span aria-hidden="true">+</span></summary>
          <div className="term-help-grid" aria-label="Plain-English web terminology">
            <TermHelp term="Information architecture">How pages, services, and content are organized so people can find what they need and search engines can understand the relationships between pages.</TermHelp>
            <TermHelp term="Conversion friction">Anything that makes a customer hesitate, get confused, work too hard, or abandon the next useful step such as requesting an estimate.</TermHelp>
            <TermHelp term="Responsive design">The page does not merely shrink on a phone. Layout, priority, navigation, and actions adapt to the screen and the way someone is likely to use it.</TermHelp>
            <TermHelp term="Semantic HTML">Using page elements for their actual meaning—headings as headings, navigation as navigation, buttons as buttons—so browsers, search engines, keyboards, and assistive technology understand the interface.</TermHelp>
          </div>
        </details>
      </aside>
    </CaseFolder>
    </div>

    <section className="case-audit" id="findings">
      <p className="kicker">Five ways the website can work harder once a customer arrives</p><h2>Reduce the friction between finding AquaBlast and starting the right conversation.</h2>
      <p className="case-section-lead">These are the highlights. The reasoning stays available inside each card, but you do not need to open it to understand the recommendation.</p>
      <div className="audit-stories">
        <article><p className="status">01 / FIND THE SERVICE</p><h3>Help people recognize the job they need faster.</h3><p>Bring the major service choices forward so customers do not have to learn AquaBlast’s site structure before they can move.</p><p><b>Result:</b> a clearer front door to the service depth you already have.</p><DecisionRationale changed="I moved the major service choices forward and turned them into obvious entry points." why="Customers can recognize the job they have before they understand AquaBlast’s full page structure." principle="Recognition over recall" meaning="show useful choices so people do not have to remember terminology or hunt through menus." /></article>
        <article><p className="status">02 / SHOW PROOF SOONER</p><h3>Put real AquaBlast work closer to the decision.</h3><p>Completed local projects and reviews should support the service claim while the customer is deciding whether AquaBlast can handle a property like theirs.</p><p><b>Result:</b> your existing work does more of the trust-building before the sales conversation starts.</p><DecisionRationale changed="I moved real-project proof closer to the service and estimate decisions instead of treating it as a separate destination." why="Evidence is most useful at the moment a customer is asking, ‘Can they do a property like mine?’" principle="Proximity of proof" meaning="place evidence near the claim or decision it supports so trust does not depend on extra searching." /></article>
        <article><p className="status">03 / IMPROVE THE FIRST CONVERSATION</p><h3>Let the estimate start with useful context.</h3><p>Help customers identify the service, show the property, and share the information that can make the first follow-up more productive.</p><p><b>Result:</b> less back-and-forth without turning the form into an interrogation.</p><DecisionRationale changed="I structured the estimate path around service context, property photos, and information that can make the first follow-up more useful." why="A better intake can reduce repeated questions without turning the form into a long interrogation." principle="Progressive disclosure" meaning="ask for the right amount of information at the right moment instead of showing every possible field at once." /></article>
        <article><p className="status">04 / DESIGN FOR THE PHONE</p><h3>Make the mobile experience intentional.</h3><p>Estimate, Call, services, and proof should be easy to use when someone is standing at the property or comparing contractors from their phone.</p><p><b>Result:</b> mobile behaves like a useful customer tool instead of a shrunken desktop page.</p><DecisionRationale changed="I gave mobile its own hierarchy for actions, service context, proof, and navigation instead of simply scaling the desktop layout down." why="The customer’s available space, attention, and likely next action are different on a phone." principle="Responsive prioritization" meaning="the same content system adapts its order and emphasis to the device rather than treating mobile as a shrunken desktop." /></article>
        <article><p className="status">05 / MAKE IMAGERY TELL THE TRUTH</p><h3>Give real AquaBlast photography a clear job.</h3><p>Equipment can prove the company is real, finished properties can show the outcome, and project photography can prove the work. Concept imagery is direction—not final evidence.</p><p><b>Result:</b> a production shot list built around trust, desire, and proof instead of decorative filler.</p><DecisionRationale changed="I assigned different image roles: outcome imagery for desire, real AquaBlast equipment for credibility, and real project photography for proof." why="When every image has a purpose, the page communicates faster and avoids repeating the same visual message." principle="Visual hierarchy" meaning="use placement, scale, and image type to tell the eye what matters first and what each piece of evidence is doing." /></article>
      </div>
    </section>

    <section className="case-journey" id="customer-path">
      <p className="kicker">A simple customer plan</p><h2>Help the visitor know where they are, trust what they see, and take one useful next step.</h2>
      <ol className="journey-icons"><li><span aria-hidden="true">👋</span>Land</li><li><span aria-hidden="true">💧</span>Understand AquaBlast</li><li><span aria-hidden="true">🏠</span>Find the service</li><li><span aria-hidden="true">👀</span>See real work</li><li><span aria-hidden="true">📍</span>Know they’re local</li><li><span aria-hidden="true">📸</span>Start the estimate</li></ol>
      <p>That is the customer story in plain English: arrive with a problem, recognize the right service, see evidence that AquaBlast can handle it, confirm the company is local, and start the estimate. The website’s job is to guide that progression without making the customer decode the site first.</p>
      <CaseFolder title="Why this customer path is structured this way" description="Reciprocity, scanning behavior, and the reasoning behind the supporting content">
      <div className="case-growth-note"><p className="status">VALUE BEFORE THE ASK</p><h3>Give people something useful even when they are not ready to book.</h3><p>I added a seasonal exterior-care checklist as an example of ethical reciprocity: help first, ask second. It is useful on its own, it can improve the photos and details that arrive with future estimate requests, and the same source can become a printable leave-behind or seasonal social post instead of creating disconnected marketing pieces.</p><DecisionRationale changed="I added an ungated homeowner checklist instead of a discount popup or email wall." why="Useful guidance can build familiarity and trust without pressuring someone into a lead form before they are ready." principle="Reciprocity" meaning="give something genuinely useful first; people are more likely to remember and return to a business that helped them without demanding something immediately in exchange." /></div>
      <aside className="research-callout"><b>Why make the page easy to scan?</b><strong>79%</strong><p>In a Nielsen Norman Group study, 79% of test users scanned new web pages rather than reading every word. That’s why this concept uses strong headings, short sections, visual choices, and obvious actions instead of expecting people to study the page.</p><a href="https://www.nngroup.com/articles/how-users-read-on-the-web/" target="_blank" rel="noreferrer">Nielsen Norman Group research ↗</a></aside>
      </CaseFolder>
    </section>

    <section className="case-built" id="concept">
      <p className="kicker">This is where the pieces start working together</p><h2>Not a prettier brochure. A better path from interest to conversation.</h2>
      <div className="case-concept-highlights" aria-label="What the working concept demonstrates">
        <article><span>Clearer entry</span><b>Service choices and primary actions are easier to recognize.</b></article>
        <article><span>Proof in context</span><b>Projects and reviews support the decision instead of living off to the side.</b></article>
        <article><span>Better handoff</span><b>The estimate path carries useful service and property context into the conversation.</b></article>
      </div>
      <div className="case-live-concept"><a className="cta" href="/">Explore the working concept <span aria-hidden="true">→</span></a><p>Use the actual prototype to judge the current experience instead of screenshots that can go stale as the concept changes.</p></div>
      <CaseFolder title="Design-system and interaction reasoning" description="Logo-size comparison, consistency logic, and estimate-form research">
      <div className="identity-system" aria-label="Responsive AquaBlast logo system examples">
        <div className="identity-system-intro">
          <p className="kicker">At the size customers actually see</p>
          <h3>Current live-site logo versus the proposed logo—at the same navigation size.</h3>
          <p>This is the useful comparison: both marks are constrained to the same header-sized space. The proposed treatment keeps the recognizable AquaBlast core readable without pretending the website needs a new identity.</p>
        </div>
        <div className="identity-system-grid">
          <figure>
            <div className="identity-preview current-live-preview"><img src="/assets/aquablast-live-site-logo.webp" alt="The AquaBlast logo used on the current live website, with AquaBlast, Pressure Washing, and Exterior Cleaning Experts" loading="lazy" decoding="async" width="681" height="298" /></div>
            <figcaption><b>Current live-site logo</b><span>Rendered at navigation size on the same white header background used by the live site.</span></figcaption>
          </figure>
          <figure>
            <div className="identity-preview selected-authority"><img src="/assets/aquablast-authority-lockup.webp" alt="Proposed AquaBlast website lockup with the AquaBlast name, spray, and Pressure Washing descriptor" loading="lazy" decoding="async" width="2172" height="724" /></div>
            <figcaption><b>Proposed website logo</b><span>Rendered at the same navigation size. The AquaBlast name and Pressure Washing descriptor remain clearly readable.</span></figcaption>
          </figure>
        </div>
      </div>
      <DecisionRationale changed="I removed the invented compact-lockup story and tested the current and proposed marks at the same navigation size." why="The comparison should make one honest point: the digital presentation must remain readable without changing the recognizable AquaBlast identity." principle="Clarity at the real use size" meaning="a familiar mark earns trust only if people can read it quickly in the place where they encounter it." />
      <p className="case-note">The same system carries across service pages, local-market pages, real project stories, reviews, and the estimate path without forcing every page into identical content. The goal is consistency in how customers orient themselves while each service and location still answers its own questions.</p>
      <aside className="research-callout compact"><b>Why keep the estimate experience focused?</b><strong>17%</strong><p>Baymard’s 2026 ecommerce research found 17% of U.S. online shoppers had abandoned an order because checkout felt too long or complicated. An AquaBlast estimate is not ecommerce, so that number is not an AquaBlast prediction—but the UX lesson is useful: visible effort matters. Ask for what helps the conversation, not everything we could possibly ask.</p><a href="https://baymard.com/research-articles/ecommerce-checkout-usability-report-and-benchmark" target="_blank" rel="noreferrer">Baymard research ↗</a></aside>
      </CaseFolder>
    </section>

    <section className="case-search" id="search">
      <p className="kicker">Protect the asset you told me matters</p><h2>Protecting what already works.</h2>
      <div className="case-search-summary">
        <p><b>You told me you’re happy with your SEO.</b> The existing site has search visibility; a redesign should not treat that as something to start over from. This concept accounts for its service, location, project, article, and utility routes.</p>
        <p><b>A concept is not a launch decision.</b> The work below prepares for a careful SEO transition. It does not prove that replacement would improve rankings, traffic, leads, or revenue—or that replacement is the right choice.</p>
      </div>
      <div className="case-seo-status-grid" aria-label="SEO preparation, launch requirements, and unknowns">
        <article className="case-seo-status-card">
          <span>01 / Prepared in the concept</span>
          <h3>What I’ve already done</h3>
          <p>Inventoried 103 known live routes and prepared 20 planned alias redirects. The existing site’s service, local, project, article, and utility footprint shaped the concept.</p>
          <details><summary>See the prepared safeguards <span aria-hidden="true">+</span></summary><ul>
            <li>Mapped valuable URLs for preservation where practical; the inventory still needs a final live-site check. The redirects are not active on AquaBlast’s live site.</li>
            <li>Prepared a production-only sitemap and launch checks, and built route metadata, canonical handling, internal-link checks, and staging noindex rules into the concept.</li>
            <li>These are development safeguards, not proof of production search results.</li>
          </ul></details>
        </article>
        <article className="case-seo-status-card">
          <span>02 / Before and after launch</span>
          <h3>What still has to happen</h3>
          <p>The current site would not be replaced by the concept as-is. Production requires Ryan’s business evidence and a separately verified SEO transition.</p>
          <details><summary>See the launch responsibilities <span aria-hidden="true">+</span></summary><ul>
            <li><b>Before:</b> verify each important live URL and content relationship, review Search Console and analytics, confirm hosting constraints, then test production redirects, crawlable HTML, canonicals, robots, sitemap, links, forms, and tracking.</li>
            <li><b>At launch:</b> check real HTTP responses and preserve valuable URLs where practical. The concept cannot simply replace the current site as-is.</li>
            <li><b>After:</b> monitor redirects, crawl/indexing behavior, search visibility, and lead actions against the pre-launch baseline.</li>
          </ul></details>
        </article>
        <article className="case-seo-status-card case-seo-unknowns">
          <span>03 / Requires your systems and context</span>
          <h3>What I don’t know yet</h3>
          <p>Without your actual data and access, I cannot know which pages, queries, rankings, or backlinks matter most—or which search visits lead to inquiries, booked jobs, and revenue compared with other sources.</p>
          <details><summary>See what needs your evidence <span aria-hidden="true">+</span></summary><ul>
            <li>Whether analytics or Search Console are configured, what they show, and whether conversion tracking is reliable.</li>
            <li>Who manages the site or SEO; the actual CMS, hosting, technical constraints, and control of the domain, DNS, accounts, and lead systems.</li>
            <li>Whether a hosting move is needed at all; whether the redesign would improve leads, lead quality, conversion, or revenue; and whether replacement is justified.</li>
          </ul></details>
        </article>
      </div>
      <p className="case-seo-hosting-note"><b>A new website does not automatically require moving your domain or hosting.</b> The existing environment should be evaluated first. If it supports the approved production build cleanly, there is no reason to move hosting merely for the sake of moving it.</p>
      <div className="case-seo-decision-note" aria-label="Possible evidence-led decisions">
        <p><b>Keep, improve, or replace are all valid outcomes.</b> The diagnostic is not designed to prove the redesign; it is designed to determine which path the evidence supports.</p>
        <div className="case-seo-decision-options" role="list">
          <div role="listitem"><strong>Keep</strong><span>The current site is doing its job and the evidence does not justify replacement.</span></div>
          <div role="listitem"><strong>Improve</strong><span>The foundation is sound, but specific targeted changes are justified.</span></div>
          <div role="listitem"><strong>Replace</strong><span>Meaningful structural or business limitations justify the transition cost and risk.</span></div>
        </div>
      </div>
      <CaseFolder className="case-folder-seo-safeguards" title="SEO transition and technical safeguards" description="Optional detail on navigation, route integrity, accessibility, measurement, QA, and launch discipline">
      <div className="case-nav-preservation" aria-labelledby="case-nav-preservation-title">
        <div className="case-nav-preservation-head">
          <p className="kicker">Navigation is part of SEO preservation</p>
          <h3 id="case-nav-preservation-title">Keep the link value. Improve the hierarchy.</h3>
          <p>The current site gives important service, location, project, review, and resource pages strong internal links. The redesign keeps those destinations available while grouping them around the questions customers are actually trying to answer.</p>
        </div>
        <div className="case-nav-preservation-grid">
          <article>
            <span>Current live structure</span>
            <b>Broad top-level navigation</b>
            <p>Home · About · Service Area · FAQ · Services · Reviews · Projects · Blog · Contact</p>
            <small>Useful breadth, with many service destinations nested beneath the Services menu.</small>
          </article>
          <article>
            <span>Redesigned structure</span>
            <b>Grouped by customer task</b>
            <p>Residential · Commercial · Areas · Projects · Reviews · Tips · About · Get an estimate</p>
            <small>Service and location pages stay linked, while proof and the estimate path become easier to scan.</small>
          </article>
        </div>
        <p className="case-nav-preservation-note"><b>The goal is not a one-for-one menu copy.</b> It is to preserve crawlable, descriptive internal links and the valuable destinations behind them while giving customers a clearer top-level hierarchy.</p>
      </div>

      <div className="case-technical-difference" aria-labelledby="case-technical-difference-title">
        <div className="case-technical-difference-head">
          <p className="kicker">What is happening underneath the redesign</p>
          <h3 id="case-technical-difference-title">The visible design is only the part customers see.</h3>
          <p>A surface redesign can look cleaner and still weaken a working website. This concept treats search structure, content integrity, accessibility, measurement, and release safety as part of the design problem—not cleanup for later.</p>
        </div>
        <div className="case-technical-difference-grid" role="list">
          <article role="listitem"><span>Search architecture</span><b>Preserve the footprint before changing the presentation.</b><p><strong>What you keep:</strong> service, location, project, review, article, and utility routes that already carry value.</p><p><strong>What I protect:</strong> the route map, internal links, redirects, metadata, and sitemap.</p></article>
          <article role="listitem"><span>Content + proof integrity</span><b>Keep useful facts attached to the right jobs and places.</b><p><strong>What you keep:</strong> real photos, job records, service facts, reviews, and local evidence.</p><p><strong>What I protect:</strong> accurate relationships between the job, location, service, and proof.</p></article>
          <article role="listitem"><span>Accessibility + interaction</span><b>Design every state, not just the screenshot.</b><p><strong>What you keep:</strong> working customer paths across desktop and mobile.</p><p><strong>What I protect:</strong> keyboard access, readable contrast, clear focus, touch targets, and responsive behavior.</p></article>
          <article role="listitem"><span>Measurement + conversion</span><b>Make improvement measurable instead of assumed.</b><p><strong>What you keep:</strong> an established site already earning visibility and inquiries.</p><p><strong>What I protect:</strong> a baseline and clear measurement for the actions that matter after launch.</p></article>
          <article role="listitem"><span>Production QA</span><b>Build safeguards for the invisible failure modes.</b><p><strong>What you keep:</strong> a live website with real business value.</p><p><strong>What I protect:</strong> routes, assets, contrast, forms, metadata, and release checks before launch.</p></article>
          <article role="listitem"><span>Launch discipline</span><b>Treat the SEO transition as part of the job.</b><p><strong>What you keep:</strong> accumulated search value and customer familiarity.</p><p><strong>What I prepare:</strong> a deliberate cutover, redirect tests, and evidence to review after launch.</p></article>
          <article role="listitem"><span>StoryBrand transformation</span><b>Change the communication hierarchy without throwing away your knowledge.</b><p><strong>Current asset:</strong> useful service expertise, project history, local content, reviews, FAQs, and educational copy already published across the site.</p><p><strong>What I added:</strong> a customer-first structure that repeatedly moves from problem → guide → plan → proof → next step, while keeping AquaBlast’s published facts and voice as the source of truth.</p></article>
        </div>
        <p className="case-technical-difference-note"><b>The difference is not “more technology.”</b> It is knowing which invisible systems can be damaged by a redesign, protecting the ones that already have value, and giving each change a way to be checked.</p>
      </div>

      </CaseFolder>

      <CaseFolder title="How live Google reviews can stay current" description="Source, presentation, and production integration boundary">
      <div className="case-google-review-system" aria-labelledby="case-google-review-system-title">
        <div className="case-google-review-system-head">
          <p className="kicker">Google review integration</p>
          <h3 id="case-google-review-system-title">Preserve the live source. Improve what happens after the review reaches the website.</h3>
          <p>The current site already gives Google customer feedback a place in the experience. The production goal is not to replace that source with hand-maintained testimonials; it is to keep the source current while presenting the reviews inside a more useful AquaBlast-native proof system.</p>
        </div>
        <div className="case-google-review-flow" aria-label="Production review integration flow">
          <article><span>01</span><b>Google review source</b><p>Customers leave feedback where they already know and trust the source.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02</span><b>Live review library</b><p>Fresh review content can appear without manually rebuilding the page.</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03</span><b>Featured proof</b><p>Selected reviews stay connected to the service or completed work they help validate.</p></article>
        </div>
        <p className="case-google-review-note"><b>Prototype boundary:</b> the concept uses AquaBlast’s existing published customer feedback. A production Google connection still requires the final provider/account setup; this case study demonstrates the intended experience and information flow without claiming that connection is already live. <b>The live feed is not dependent on WordPress or another CMS:</b> the custom production site can use an agreed hosted widget/provider or lightweight server-side connection, while a CMS may simply make administration easier.</p>
      </div>

      </CaseFolder>

      <CaseFolder title="What content is preserved across the 103-route footprint" description="Services, locations, projects, reviews, articles, company content, edge routes, and exceptions">
      <div className="case-content-preservation" aria-labelledby="case-content-preservation-title">
        <div className="case-content-preservation-head">
          <p className="kicker">103-route content preservation map</p>
          <h3 id="case-content-preservation-title">Keep the content you already value. Change how customers move through it.</h3>
          <p><b>I deliberately reframed the web app through StoryBrand thinking without replacing your content.</b> StoryBrand changes the order, not the ownership of the useful content: keep AquaBlast’s service knowledge, local relevance, project history, customer language, and educational depth, then present those assets around the customer’s problem, the guidance they need, the proof that reduces uncertainty, and a clear next step.</p>
        </div>
        <div className="case-content-preservation-grid">
          <article><span>Service pages</span><b>Preserve the substance. Reorder the explanation.</b><p>Keep useful process details, service boundaries, related work, and customer expectations. The service-content pass carries forward published AquaBlast guidance on soft washing, roof materials, porous concrete, gutter drainage, window preparation, wood-restoration sequencing, paver sanding/sealing, and commercial operating constraints—then reorganizes it around problem → plan → proof → estimate.</p></article>
          <article><span>Location pages</span><b>Preserve what makes each market specific.</b><p>The local-content pass now carries forward the useful distinctions already published across the 14 service areas—surface-specific guidance, island access and communication expectations, local project conditions, roof/gutter context, soft-wash reasoning, paver care, and verified customer/project evidence—then reorganizes each page around the property owner’s question instead of flattening every city into the same template.</p></article>
          <article><span>Project stories</span><b>Keep the real job record intact.</b><p>Location, services, budget, products, owner-written job notes, and the correct photos are business evidence. The redesign can improve hierarchy and readability without replacing those facts with generic portfolio copy.</p></article>
          <article><span>Customer reviews</span><b>Preserve the customer’s words.</b><p>Authentic review language stays evidence. The redesign can group it around communication, care, service type, or local proof, but it should not rewrite the customer’s experience into marketing language.</p></article>
          <article><span>Articles</span><b>Articles are the biggest depth risk.</b><p>The prototype proves the presentation system, but production should not reduce useful long-form articles to short summaries. Preserve the useful educational substance and internal links, then improve headings, scanning, proof, and the path to the relevant service.</p></article>
          <article><span>About, FAQ + contact</span><b>Preserve the business history and the practical details customers already rely on.</b><p>The company-content pass carries forward the 2013 founding story, Greg Fultz as founder, the current ownership transition, reminder/text communication expectations, the live FAQ’s technical answers, the published 24-hour response expectation, current service minimums, photo guidance, and service-specific quote inputs—then reorganizes them around what a customer needs to know or do next.</p></article>
          <article><span>Utility + edge routes</span><b>Preserve the quiet infrastructure too.</b><p>The parity pass keeps the published privacy principles and eight-part terms structure, preserves the human sitemap as a real discovery layer, protects the hidden /ppc campaign route with its own canonical and lead-source attribution, and flags /rss as a production feed endpoint—not merely another HTML page. These routes are easy to overlook because they are not visually prominent, but they still carry legal, campaign, crawl, and subscription value.</p></article>
          <article><span>Published claims stay the baseline</span><b>If AquaBlast already publishes it, treat it as baseline content to verify.</b><p>Technical/process statements, service details, pricing language, company history, and other claims already live on AquaBlast should be checked and carried forward where accurate. A new presentation is not a reason to silently discard them.</p></article>
          <article><span>Final exception audit</span><b>103 routes reviewed in the development inventory; exceptions are explicit.</b><p>The final sweep found a small set of route-level exceptions rather than another missing content family: live service-hub assessment/communication language and the “call if your area is not listed” path were restored; obvious legacy Toledo landscaping copy and a stale rolling experience count were intentionally not carried forward; one live deck-stain page contains conflicting stain descriptions, so the redesign preserves the published product field without silently inventing a reconciliation; PPC and RSS keep their campaign/feed meaning.</p></article>
        </div>
        <p className="case-content-preservation-note"><b>The rule:</b> preserve facts and useful meaning; improve hierarchy, readability, and customer orientation. If a piece of current content is removed, shortened, or materially rewritten, there should be an explicit reason—not an assumption that newer copy is automatically better.</p>
      </div>

      <DecisionRationale changed="I mapped known live routes, kept important navigation destinations available in the concept, prepared route metadata, canonicals, structured data and breadcrumbs, and kept the shareable preview noindex." why="A redesign should not casually throw away search equity, weaken useful internal links, or create a second indexable copy of the site while the SEO transition is being planned." principle="Controlled SEO transition" meaning="inventory first, verify valuable URLs and internal links, redirect deliberately when a URL changes, and measure after launch." />
      <div className="case-preservation-plan" aria-label="Search preservation plan">
        <article><span>Before cutover</span><b>Establish the baseline.</b><p>Review any available Search Console and analytics data, indexed routes, top landing pages, current metadata, and the final URL map so we know what is already earning attention before anything changes.</p></article>
        <article><span>During cutover</span><b>Move deliberately.</b><p>Keep valuable URLs where practical. Where a route truly changes, map the redirect, update internal links and canonicals, and make sure the production sitemap reflects the new structure.</p></article>
        <article><span>After launch</span><b>Watch the evidence.</b><p>Verify indexing and crawl behavior, then compare search visibility and lead actions against the baseline. A redesign is not finished when the new pages appear; the SEO transition has to settle cleanly too.</p></article>
      </div>
      <aside className="research-callout dark"><b>Why I’m cautious about flashy technology</b><strong>2.5s</strong><p>Google’s current “good” Core Web Vitals target for Largest Contentful Paint is 2.5 seconds or less at the 75th percentile. So WebGL, Three.js, CSS 3D, or richer motion only belongs here when it earns its weight. The experience can feel premium without making customers—or search performance—pay for decoration.</p><a href="https://web.dev/articles/vitals" target="_blank" rel="noreferrer">Google web.dev guidance ↗</a></aside>
      </CaseFolder>
    </section>

    <section className="case-growth" id="growth" aria-labelledby="case-growth-title">
      <p className="kicker">Built to grow with AquaBlast</p>
      <h2 id="case-growth-title">The core website comes first. Additional systems only matter if they earn a place in the real workflow.</h2>
      <p>The concept leaves room for AquaBlast to grow without forcing extra infrastructure into the first decision. Three examples are already demonstrated:</p>
      <div className="case-growth-highlights" aria-label="Growth highlights">
        <article><b>Project proof where it matters</b><span>Connect relevant completed work and reviews to the services they validate.</span></article>
        <article><b>Better estimate context</b><span>Carry useful service and property information into the first conversation.</span></article>
        <article><b>Publishing control when it earns its keep</b><span>Add CMS, CompanyCam workflows, or deeper content systems only if they solve a recurring operational need.</span></article>
      </div>
      <CaseFolder title="Optional growth ideas demonstrated in the concept" description="Proof placement, estimate context, homeowner value, bundling, and offer boundaries">
      <div className="growth-system-grid">
        <article><b>Search assets protected</b><p>The current route inventory and RSS route are accounted for instead of treating useful pages as disposable because the visual system changed.</p></article>
        <article><b>Service → proof → estimate</b><p>The concept demonstrates how core service pages could place completed local projects and relevant customer reviews before the estimate CTA—evidence at the point where a customer is deciding whether to trust the service.</p></article>
        <article><b>Context-aware estimates</b><p>The concept demonstrates how an estimate link could retain the service, location, or project that brought the customer there. A production form would only use that context if it fits your workflow.</p></article>
        <article><b>Useful value before the sale</b><p>The concept uses a seasonal exterior-care checklist as a content example: useful even when someone is not ready to book. You can decide whether it becomes a print leave-behind, email attachment, or social post.</p></article>
        <article><b>Bundling without fake discounts</b><p>The concept shows how a customer could include every area they want cleaned in one request. That may create a more efficient job, but it does not advertise a discount or package you have not approved.</p></article>
        <article><b>Offers stay in your control</b><p>Referral credits, seasonal offers, neighbor scheduling, maintenance plans, and bundle pricing remain options to evaluate with you—not promises I invented inside a speculative concept.</p></article>
      </div>
      <DecisionRationale changed="In the shareable, noindex concept, I demonstrated lead-source context, service-specific proof, a useful homeowner guide, and a multi-service estimate path—without presenting unapproved discounts as a live offer." why="Good conversion work should reduce uncertainty and effort without manipulating the customer or promising something the business has not agreed to deliver." principle="Ethical conversion design" meaning="make the useful next step easier, give people credible reasons to trust it, and reserve urgency or incentives for situations where they are actually true." />
      </CaseFolder>

      <CaseFolder title="Optional systems to evaluate later" description="Only if they earn a place in the real AquaBlast workflow">
      <aside className="case-optional-systems" aria-labelledby="optional-systems-title">
        <p className="kicker">Optional systems to evaluate after the core website</p>
        <h3 id="optional-systems-title">Useful additions—only if they earn their place in your workflow.</h3>
        <p>These are not included live offers, automatic upsells, or promises inside this concept. They are separate opportunities to evaluate once we know what you and the team actually need to update, receive, approve, and follow up on.</p>
        <div>
          <article><b>Project proof desk</b><p>A reviewed path from approved job photos, service details, and before/after evidence into useful public project stories.</p><span>Requires: photo workflow + publishing approval</span></article>
          <article><b>Estimate planner</b><p>A guided inquiry that can gather service context, property concerns, and photos before the conversation—without pretending to calculate a job price automatically.</p><span>Requires: intake + follow-up workflow discovery</span></article>
          <article><b>Your content desk</b><p>A protected editing area for the few things that genuinely change: featured work, seasonal notices, homeowner guidance, and approved service proof.</p><span>Requires: clear editor roles + chosen platform</span></article>
        </div>
      </aside>
      </CaseFolder>

      <CaseFolder title="Photography and image-production plan" description="How concept imagery becomes truthful AquaBlast photography and project evidence">
      <div className="case-photo-plan" aria-labelledby="case-photo-plan-title">
        <p className="kicker">Image + photography production plan</p>
        <h3 id="case-photo-plan-title">The concept imagery is direction. Production should look like AquaBlast.</h3>
        <p>The concept imagery establishes art direction. Production should replace it with real AquaBlast photography and approved existing images wherever those assets can prove the company, the work, and the result more credibly.</p>
        <p><b>Image-preservation audit:</b> I reviewed the visual source library as well as the copy. Real job photography, company imagery, article leads, and commercial-service images are accounted for; duplicates, weak legacy imagery, and mismatched images are explicitly classified rather than accidentally dropped or overstated.</p>
        <p><b>The production rule is now the same for images as for copy:</b> start by keeping your real material. Omit or replace an image only when it is a duplicate, technically unusable, misleading about locality or the job shown, clearly irrelevant legacy/template material, or you deliberately prefer a replacement.</p>
        <ul><li>Your portrait + working portrait</li><li>Branded truck, trailer, equipment, and setup</li><li>House-washing action with room for homepage copy</li><li>Roof/gutter service action from a safe, useful angle</li><li>Commercial property cleaning with scale and context</li><li>Before/after pairs shot from matched positions</li><li>Detail shots of surfaces, buildup, edges, and results</li><li>Lake Erie / local-property context where it is genuinely relevant</li></ul>
      </div>

      <details className="case-support-details image-audit-support">
        <summary>Case-study visual policy <span aria-hidden="true">+</span></summary>
        <div className="image-audit-grid" aria-label="Case study visual policy">
          <article><b>No screenshot evidence by default</b><span>The case study now points you to the working concept instead of asking you to judge captures that can become stale or misleading.</span><span className="image-audit-status">Removed</span></article>
          <article><b>Real project media</b><span>Use authentic AquaBlast photography when it proves the work, the company, the process, or the outcome.</span><span className="image-audit-status">Prioritize</span></article>
          <article><b>Concept imagery</b><span>Use it only for art direction and replace it with real AquaBlast material before production launch.</span><span className="image-audit-status">Replace · production</span></article>
        </div>
      </details>
      </CaseFolder>
    </section>

    <section className="case-validation" id="proof">
      <p className="kicker">What is known now—and what gets measured next</p><h2>The concept gives us a direction. Your real data tells us what deserves the next investment.</h2>
      <div className="validation-grid"><article><b>Responsive QA</b><p>The concept has been tested across routes and viewports; final production behavior still needs its own verification.</p></article><article><b>SEO transition QA</b><p>Routes, metadata, canonicals, planned redirects, indexing rules, and internal-link relationships have development checks; the client-domain launch needs separate HTTP and search verification.</p></article><article><b>Form + technical QA</b><p>Navigation, forms, image loading, keyboard behavior, overflow, and release checks are tested in the concept and must be retested before production cutover.</p></article></div>
      <CaseFolder title="See the QA evidence" description="Detailed automated and human review results">
        <div className="validation-grid"><article><b>Automated QA coverage</b><ul><li>Responsive route and viewport audits are part of the test suite</li><li>Footer browser and navigation checks are part of the test suite</li><li>Routes, metadata, canonicals, images, keyboard behavior, overflow, and containment have regression checks</li><li>Rerun the full suite and review its latest results before handoff; earlier pass counts are not a current release claim</li></ul></article><article><b>Human visual QA</b><ul><li>Hierarchy, density, and visual pacing</li><li>Mobile composition and persistent actions</li><li>Image communication role</li><li>Customer-facing language</li></ul></article><article><b>Still requires real production evidence</b><ul><li>Rankings, organic traffic, and lead quality</li><li>Conversion or revenue results</li><li>Real-customer usability</li><li>Any production outcome</li></ul></article></div>
      </CaseFolder>
      <CaseFolder title="How I would measure what happens after launch" description="Search data, agreed analytics, Core Web Vitals, and when A/B testing is useful">
      <div className="case-measurement-path" aria-label="How post-launch evidence would be read">
        <article><span>Search data</span><b>Are people finding you?</b><p>If Search Console is available, compare impressions, clicks, queries, landing pages, CTR, and position trends against the pre-launch baseline.</p></article>
        <article><span>Agreed analytics</span><b>What do they do next?</b><p>Confirm the installed tools first—GA4 only if it is already used or approved—then track agreed actions such as estimate starts, submissions, phone clicks, and project views.</p></article>
        <article><span>Behavior research</span><b>Where do they hesitate?</b><p>If a tool such as Clarity is approved, use privacy-conscious behavior evidence to investigate confusing paths rather than assuming them.</p></article>
        <article><span>Lighthouse + Core Web Vitals</span><b>Is the experience technically healthy?</b><p>Use performance, accessibility, SEO, and best-practice diagnostics as technical evidence—not as a substitute for actual customer behavior.</p></article>
      </div>
      <p className="case-validation-note"><b>About A/B testing:</b> I would only run a controlled split test when there is enough comparable traffic to make the result useful. At lower volume, a better first move is often to identify one friction point, make one deliberate change, and compare what happens next.</p>
      </CaseFolder>
    </section>

    <section className="case-conclusion">
      <p className="kicker">What success would mean</p><h2>Change the site only if the evidence makes the case.</h2>
      <p>The goal is not to replace a website that is working just because I designed something newer. It is to learn whether this approach creates enough business value to justify a change—and, if it does, protect the search equity AquaBlast has earned through the SEO transition.</p>
    </section>

    <section className="case-next" id="next-steps">
      <p className="kicker">If the direction makes sense</p><h2>The next step is not another sales page. It is a short business conversation.</h2>
      <div className="case-next-decisions" aria-label="Questions to confirm before production">
        <article><span>01 / What is already working?</span><b>Protect the parts of the current system that are genuinely valuable.</b><p>Search visibility, lead sources, pages, workflows, and customer behaviors should be verified with real data before production cutover.</p></article>
        <article><span>02 / What do you want more of?</span><b>Prioritize the services, customers, and jobs the site should support most.</b><p>The strongest production decisions come from knowing where AquaBlast wants the website to help the business—not from adding features for their own sake.</p></article>
        <article><span>03 / What happens after an inquiry?</span><b>Make the website fit the estimate and follow-up process you actually use.</b><p>We should confirm how website leads become estimates and jobs before finalizing forms, automation, CMS, or publishing workflow.</p></article>
        <article><span>04 / What would justify changing?</span><b>Define the standard the new site has to meet.</b><p>What would this new site need to improve for replacing the current one to make business sense?</p></article>
      </div>
      <aside className="case-meeting-brief" aria-labelledby="meeting-brief-title">
        <p className="kicker">The decision I want to understand</p>
        <h3 id="meeting-brief-title">Does this direction create enough additional value to justify changing something that is already working?</h3>
        <p>If the answer is yes, the production scope can be built around the things that matter most to AquaBlast. If the answer is no, that is useful information too.</p>
      </aside>
      <div className="case-live-concept"><a className="cta" href="/">Return to the working concept <span aria-hidden="true">→</span></a><p>The proposal stays separate until the business priorities and production scope are clear.</p></div>
      <p className="case-note">This is a publicly shareable, noindex working concept—not a production launch. Final scope, systems, content, photography, pricing, and launch commitments are confirmed only after discovery.</p>
    </section>


  </main>
}
