import { useEffect, useRef, useState } from 'react'
import { useServicePageMetadata } from './servicePageUtils'
import { ConceptBar } from './ServicePage'
import { SiteHeader } from './sections'
import { emitAnalyticsEvent } from '../lib/analytics.js'
import { AQUABLAST_BRAND_MESSAGE } from '../data/brandMessage'

const services = ['House / siding', 'Concrete / hard surfaces', 'Pavers / sealing', 'Roof / gutters', 'Deck / fence', 'Windows', 'Commercial property', 'Other / not sure']
const steps = ['What needs cleaning?', 'Property', 'Photos', 'Notes', 'Contact', 'Review']
const initial = { services: [], address: '', city: '', zip: '', notes: '', name: '', phone: '', email: '', preference: 'Text' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const campaignKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid']

export function Estimate() {
  useServicePageMetadata({ title:'Request an Estimate | AquaBlast Pressure Washing', description:'Request an AquaBlast exterior-cleaning estimate by sharing the service, property location, photos, and project details.', canonicalPath:'/estimate' })
  const params = new URLSearchParams(window.location.search)
  const contextualService = params.get('service')
  const contextualLocation = params.get('location')
  const contextualSource = params.get('source') || ''
  const campaignContext = Object.fromEntries(campaignKeys.map((key) => [key, params.get(key) || '']).filter(([, value]) => value))
  const contextualServices = contextualService === 'house-washing' ? ['House / siding'] : ['roof-cleaning','gutter-cleaning'].includes(contextualService) ? ['Roof / gutters'] : ['deck-fence','wood-restoration'].includes(contextualService) ? ['Deck / fence'] : contextualService === 'concrete-cleaning' ? ['Concrete / hard surfaces'] : contextualService === 'paver-cleaning-sealing' ? ['Pavers / sealing'] : contextualService === 'window-cleaning' ? ['Windows'] : contextualService === 'commercial-property' ? ['Commercial property'] : []
  const locationDefaults = { 'port-clinton': { city: 'Port Clinton', zip: '43452' }, sandusky: { city: 'Sandusky', zip: '44870' }, 'put-in-bay': { city: 'Put-In-Bay', zip: '43456' }, 'kelleys-island': { city: 'Kelleys Island', zip: '43438' }, tiffin: { city: 'Tiffin', zip: '44883' }, toledo: { city: 'Toledo', zip: '' }, 'bowling-green': { city: 'Bowling Green', zip: '43402' }, 'catawba-island': { city: 'Catawba Island', zip: '43452' }, fremont: { city: 'Fremont', zip: '43420' }, genoa: { city: 'Genoa', zip: '43430' }, 'johnsons-island': { city: "Johnson’s Island", zip: '43440' }, lakeside: { city: 'Lakeside', zip: '43440' }, marblehead: { city: 'Marblehead', zip: '43440' }, 'oak-harbor': { city: 'Oak Harbor', zip: '43449' } }
  const contextualProperty = locationDefaults[contextualLocation] || {}
  const sourceLabels = {
    'service:house-washing': 'House washing',
    'service:concrete-cleaning': 'Concrete cleaning',
    'service:roof-cleaning': 'Roof cleaning',
    'service:gutter-cleaning': 'Gutter cleaning',
    'service:window-cleaning': 'Exterior window cleaning',
    'service:wood-restoration': 'Wood restoration',
    'service:paver-cleaning-sealing': 'Paver cleaning + sealing',
    'service:commercial-property': 'Commercial cleaning',
    'campaign:ppc': 'AquaBlast campaign landing page',
  }
  const sourceLabel = contextualSource.startsWith('project:') ? 'A completed AquaBlast project' : contextualSource.startsWith('location:') ? `${(locationDefaults[contextualSource.slice(9)] || {}).city || 'AquaBlast service area'} service page` : sourceLabels[contextualSource] || ''

  const [step, setStep] = useState(0); const [data, setData] = useState({ ...initial, ...contextualProperty, services: contextualServices }); const [photos, setPhotos] = useState([]); const [errors, setErrors] = useState({}); const [complete, setComplete] = useState(false); const titleRef = useRef(null)
  useEffect(() => () => photos.forEach((photo) => URL.revokeObjectURL(photo.url)), [photos])
  useEffect(() => { titleRef.current?.focus() }, [step, complete])
  useEffect(() => { emitAnalyticsEvent('estimate_step_view', { step_number: step + 1, step_name: steps[step], lead_source: contextualSource, service: contextualService || '', location: contextualLocation || '' }) }, [step, contextualSource, contextualService, contextualLocation])
  const update = (key, value) => setData((current) => ({ ...current, [key]: value }))
  const toggleService = (service) => setData((current) => ({ ...current, services: current.services.includes(service) ? current.services.filter((item) => item !== service) : [...current.services, service] }))
  const addPhotos = (event) => { const next = Array.from(event.target.files || []).filter((file) => file.type.startsWith('image/')).map((file) => ({ id: file.name + file.lastModified + Math.random(), name: file.name, url: URL.createObjectURL(file) })); setPhotos((current) => [...current, ...next]); event.target.value = '' }
  const removePhoto = (id) => setPhotos((current) => { const found = current.find((photo) => photo.id === id); if (found) URL.revokeObjectURL(found.url); return current.filter((photo) => photo.id !== id) })
  const validate = () => {
    const next = {}
    if (step === 0 && !data.services.length) next.services = 'Choose at least one service, or select Other / not sure.'
    if (step === 1) {
      if (!data.address.trim()) next.address = 'Add a street address.'
      if (!data.city.trim()) next.city = 'Add a city.'
      if (!data.zip.trim()) next.zip = 'Add a ZIP code.'
    }
    if (step === 4) {
      if (!data.name.trim()) next.name = 'Add your name.'
      if (data.email.trim() && !emailPattern.test(data.email.trim())) next.email = 'Check the email address.'
      if (!data.phone.trim() && !data.email.trim()) next.contact = 'Add a phone number or email so we can follow up.'
      else if (data.preference === 'Email' && !data.email.trim()) next.contact = 'Add an email address or choose Text or Call.'
      else if (['Text', 'Call'].includes(data.preference) && !data.phone.trim()) next.contact = `Add a phone number or choose Email.`
    }
    setErrors(next)
    return !Object.keys(next).length
  }
  const next = () => { if (validate()) { emitAnalyticsEvent('estimate_step_complete', { step_number: step + 1, step_name: steps[step], lead_source: contextualSource }); setStep((current) => Math.min(current + 1, steps.length - 1)) } }
  const reset = () => { photos.forEach((photo) => URL.revokeObjectURL(photo.url)); setData({ ...initial, ...contextualProperty, services: contextualServices }); setPhotos([]); setErrors({}); setStep(0); setComplete(false); emitAnalyticsEvent('estimate_restart', { lead_source: contextualSource }) }
  const completeConceptRequest = () => {
    emitAnalyticsEvent('estimate_review_complete', {
      lead_source: contextualSource,
      service_count: data.services.length,
      photo_count: photos.length,
      preferred_contact: data.preference,
      has_phone: Boolean(data.phone.trim()),
      has_email: Boolean(data.email.trim()),
      ...campaignContext,
    })
    setComplete(true)
  }

  if (complete) return <main className="estimate-shell"><ConceptBar /><SiteHeader areasHref="/near-me" /><section className="estimate-card completion" aria-labelledby="complete-title"><p className="kicker">Estimate details</p><h1 id="complete-title" ref={titleRef} tabIndex="-1">Your job details are <em>ready.</em></h1><p>Here’s what you entered.</p><ol className="handoff"><li><b>01</b><span>Send the request</span></li><li><b>02</b><span>We review the job</span></li><li><b>03</b><span>Get an estimate or a follow-up question</span></li></ol><p className="completion-boundary">Online submission is not connected in this private concept. In production, this step would send the request and confirmation. To request service now, call AquaBlast.</p><a className="cta" href="tel:4196356961">Call 419-635-6961 <span aria-hidden="true">→</span></a><a className="secondary estimate-home-link" href="/">Return to homepage</a><button className="text-action" type="button" onClick={reset}>Start a new request</button></section></main>

  return <main className="estimate-shell"><ConceptBar /><SiteHeader areasHref="/near-me" /><section className="estimate-story-intro"><div><p className="kicker">Start with what you can see</p><h1>You do not have to diagnose the job. <em>Show us what you want cleaned.</em></h1><p>Choose the surfaces, add the property, and include photos when you can. AquaBlast can use the actual details to determine the right next question instead of asking you to know the method first.</p><p className="estimate-brand-reassurance">{AQUABLAST_BRAND_MESSAGE.tagline}</p><p className="estimate-free-note"><b>Free estimate.</b> Photos and complete property details help AquaBlast respond with a more useful quote or follow-up question.</p></div><ol><li><b>01</b><span>Choose the areas that need attention.</span></li><li><b>02</b><span>Add the property and photos.</span></li><li><b>03</b><span>Review the details and request the estimate.</span></li></ol></section><div className="estimate-layout"><section className="estimate-card" aria-labelledby="estimate-title"><div className="estimate-progress" aria-label={'Step ' + (step + 1) + ' of ' + steps.length + ': ' + steps[step]}><span>Your estimate request</span><ol>{steps.map((label, index) => <li className={index <= step ? 'active' : ''} aria-current={index === step ? 'step' : undefined} key={label}><span className="sr-only">{label}</span></li>)}</ol></div>{sourceLabel && <div className="estimate-context" role="note"><span>You came here from</span><b>{sourceLabel}</b><p>We kept that context so you do not have to start over.</p></div>}<p className="kicker">Tell us about the job</p><h2 id="estimate-title" ref={titleRef} tabIndex="-1">{steps[step]}</h2>
    {step === 0 && <fieldset className="service-options" aria-describedby={errors.services ? 'services-error' : undefined}><legend>Choose every area that applies.</legend><p className="bundle-note"><b>Have more than one area in mind?</b> Include everything you may want cleaned. We can review the work together; any package or bundled pricing would be confirmed by AquaBlast before scheduling.</p><div>{services.map((service) => <label className={data.services.includes(service) ? 'selected' : ''} key={service}><input type="checkbox" checked={data.services.includes(service)} onChange={() => toggleService(service)} /><span>{service}</span><i aria-hidden="true">+</i></label>)}</div>{errors.services && <p className="field-error" id="services-error" role="alert">{errors.services}</p>}</fieldset>}
    {step === 1 && <div className="field-stack"><p>Add the property address so we can understand where the work is needed.</p><label>Street address<input value={data.address} onChange={(event) => update('address', event.target.value)} aria-invalid={Boolean(errors.address)} aria-describedby={errors.address ? 'address-error' : undefined} autoComplete="street-address" /></label>{errors.address && <p className="field-error" id="address-error">{errors.address}</p>}<div className="field-pair"><label>City<input value={data.city} onChange={(event) => update('city', event.target.value)} aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? 'city-error' : undefined} autoComplete="address-level2" /></label><label>ZIP<input inputMode="numeric" value={data.zip} onChange={(event) => update('zip', event.target.value)} aria-invalid={Boolean(errors.zip)} aria-describedby={errors.zip ? 'zip-error' : undefined} autoComplete="postal-code" /></label></div>{errors.city && <p className="field-error" id="city-error" role="alert">{errors.city}</p>}{errors.zip && <p className="field-error" id="zip-error" role="alert">{errors.zip}</p>}<p className="quiet-note">Service availability would be confirmed before scheduling.</p></div>}
    {step === 2 && <div className="photo-step"><p>Photos help show the work area and visible conditions. AquaBlast’s current contact guidance asks customers to send pictures for a quicker quote turnaround. In this private concept, photos stay only in this browser session and are never sent.</p><label className="photo-picker">Choose or take photos<input type="file" accept="image/*" multiple onChange={addPhotos} /><span>Image files only · Camera or photo library</span></label>{photos.length > 0 && <ul className="photo-list" aria-label="Selected photos">{photos.map((photo) => <li key={photo.id}><img src={photo.url} alt={'Local preview: ' + photo.name} /><span>{photo.name}</span><button type="button" onClick={() => removePhoto(photo.id)} aria-label={'Remove ' + photo.name}>Remove</button></li>)}</ul>}</div>}
    {step === 3 && <div className="field-stack"><p><b>Helpful details:</b> house washing — siding type; concrete or pavers — driveway, sidewalk, or patio; gutters/roof — gutter guards and number of stories; exterior windows — screens are removed before service.</p><label>Anything else we should know?<textarea value={data.notes} onChange={(event) => update('notes', event.target.value)} placeholder="Tell us anything that might help us understand the job." rows="6" /></label></div>}
    {step === 4 && <div className="field-stack"><label>Name<input value={data.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} autoComplete="name" /></label>{errors.name && <p className="field-error" id="name-error" role="alert">{errors.name}</p>}<div className="field-pair"><label>Phone<input inputMode="tel" value={data.phone} onChange={(event) => update('phone', event.target.value)} aria-describedby={errors.contact ? 'contact-error' : undefined} autoComplete="tel" /></label><label>Email<input type="email" value={data.email} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={[errors.email ? 'email-error' : '', errors.contact ? 'contact-error' : ''].filter(Boolean).join(' ') || undefined} autoComplete="email" /></label></div>{errors.email && <p className="field-error" id="email-error" role="alert">{errors.email}</p>}{errors.contact && <p className="field-error" id="contact-error" role="alert">{errors.contact}</p>}<fieldset className="contact-choice"><legend>Preferred contact</legend>{['Text', 'Call', 'Email'].map((option) => <label key={option}><input type="radio" name="preference" checked={data.preference === option} onChange={() => update('preference', option)} />{option}</label>)}</fieldset></div>}
    {step === 5 && <Review data={data} photos={photos} edit={(target) => setStep(target)} />}
    <div className="estimate-actions">{step > 0 && <button className="secondary" type="button" onClick={() => setStep((current) => current - 1)}>Back</button>}{step < steps.length - 1 ? <button className="cta" type="button" onClick={next}>Continue <span aria-hidden="true">→</span></button> : <button className="cta" type="button" onClick={completeConceptRequest}>Request estimate <span aria-hidden="true">→</span></button>}</div>
  </section><aside className="estimate-aside"><p className="kicker">Help us understand the job</p><h2>Help us see what you see.</h2><p>You do not need to choose the cleaning method. Give AquaBlast enough context to understand the property and the condition. Photos and complete property details can make the first response more useful.</p><div className="estimate-aside-pricing" role="note"><span className="estimate-aside-pricing-label">Know before you submit</span><b><strong>$400</strong> minimum service charge</b><p>Sealing / staining projects currently have a <strong>$1,500 minimum</strong>, including product.</p><small>Current published response expectation: within 24 hours.</small><a href="/pressure-washing-tips/how-much-does-pressure-washing-cost">See what affects pricing →</a></div><ol><li><b>Get the whole area</b><span>Show enough of the property to understand the job.</span></li><li><b>Get a little closer</b><span>Add buildup, staining, or problem areas.</span></li><li><b>Show access</b><span>Include gates, height, or obstacles if they matter.</span></li></ol><small>The more complete the request, the easier it is to prepare the proposal or identify the next question.</small></aside></div></main>
}
function Review({ data, photos, edit }) { const groups = [['What you need', data.services.length ? data.services.join(' · ') : 'Not added', 0], ['Your property', [data.address, data.city, data.zip].filter(Boolean).join(', ') || 'Not added', 1], ['Photos', photos.length ? photos.length + ' photo' + (photos.length === 1 ? '' : 's') + ' added' : 'No photos added', 2], ['Notes', data.notes || 'No notes added', 3], ['Contact', [data.name, data.phone || data.email, 'Preferred: ' + data.preference].filter(Boolean).join(' · '), 4]]; return <div className="review"><p>Review the details before sending. This is the information we need to prepare an estimate or follow up with questions.</p>{groups.map(([title, value, target]) => <section key={title}><div><p className="kicker">{title}</p><p>{value}</p></div><button type="button" onClick={() => edit(target)}>Edit</button></section>)}</div> }
