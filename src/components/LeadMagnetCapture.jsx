import { useState } from 'react'
import { emitAnalyticsEvent } from '../lib/analytics.js'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const pdfHref = '/downloads/aquablast-seasonal-exterior-care-checklist.pdf'

export function LeadMagnetCapture({ source = 'site', compact = false, id = 'get-checklist' }) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')

  const submit = async (event) => {
    event.preventDefault()
    const cleanEmail = email.trim()
    if (!cleanEmail || !emailPattern.test(cleanEmail)) {
      setError('Add a valid email address so we can deliver the checklist.')
      return
    }

    setError('')
    setStatus('sending')
    const payload = {
      first_name: firstName.trim(),
      email: cleanEmail,
      marketing_consent: marketingConsent,
      lead_magnet: 'seasonal-exterior-care-checklist',
      lead_source: source,
      page_path: window.location.pathname,
      submitted_at: new Date().toISOString(),
    }

    emitAnalyticsEvent('lead_magnet_submit', {
      lead_source: source,
      lead_magnet: payload.lead_magnet,
      marketing_consent: marketingConsent,
    })

    const endpoint = import.meta.env.VITE_LEAD_MAGNET_ENDPOINT
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(`Lead endpoint returned ${response.status}`)
        setStatus('complete')
        emitAnalyticsEvent('lead_magnet_captured', { lead_source: source, lead_magnet: payload.lead_magnet })
      } catch {
        setStatus('available')
      }
    } else {
      setStatus('concept')
    }
  }

  const unlocked = ['complete', 'concept', 'available'].includes(status)

  return <div className={`lead-magnet-capture${compact ? ' is-compact' : ''}`} id={id}>
    {!compact && <div className="lead-magnet-intro">
      <p className="kicker">Not ready for an estimate?</p>
      <h2>Keep the seasonal exterior-care checklist.</h2>
      <p>Use it to walk the property, note trouble spots, and save the photos that can make a future estimate easier.</p>
    </div>}

    {!unlocked ? <form className="lead-magnet-form" onSubmit={submit} noValidate>
      <div className="lead-magnet-fields">
        <label>First name <span>optional</span><input value={firstName} onChange={(event) => setFirstName(event.target.value)} autoComplete="given-name" /></label>
        <label>Email <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : `${id}-privacy`} /></label>
      </div>
      <label className="lead-magnet-consent"><input type="checkbox" checked={marketingConsent} onChange={(event) => setMarketingConsent(event.target.checked)} /><span>Also send me occasional exterior-care tips and seasonal service reminders. Optional.</span></label>
      {error && <p className="field-error" id={`${id}-error`} role="alert">{error}</p>}
      <p className="lead-magnet-privacy" id={`${id}-privacy`}>Your email is used to deliver the checklist. Marketing updates are optional.</p>
      <button className="cta" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Preparing checklist…' : 'Send me the checklist'} <span aria-hidden="true">→</span></button>
    </form> : <div className="lead-magnet-success" role="status">
      <p className="kicker">Checklist ready</p>
      <h3>Keep it handy for the next walk around your property.</h3>
      <p>Use the printable version now, and come back when you want AquaBlast to look at the actual property.</p>
      {status === 'concept' && <p className="lead-magnet-boundary"><b>Private concept:</b> this form does not send your details or subscribe you to email. You can preview the checklist here without submitting personal information.</p>}
      {status === 'available' && <p className="lead-magnet-boundary"><b>Delivery connection unavailable:</b> the PDF is still available below.</p>}
      <div className="lead-magnet-success-actions">
        <a className="cta" href={pdfHref} download onClick={() => emitAnalyticsEvent('lead_magnet_download', { lead_source: source, lead_magnet: 'seasonal-exterior-care-checklist' })}>Download the PDF <span aria-hidden="true">↓</span></a>
        <a className="secondary" href={`/estimate?source=${encodeURIComponent(`${source}:lead-magnet`)}`}>Show us your property <span aria-hidden="true">→</span></a>
      </div>
    </div>}
  </div>
}

export function LeadMagnetBand({ source = 'site:transitional' }) {
  return <section className="lead-magnet-band" aria-labelledby={`lead-magnet-title-${source.replace(/[^a-z0-9]/gi, '-')}`}>
    <div className="lead-magnet-band-copy">
      <p className="kicker">Useful even if you are not ready to book</p>
      <h2 id={`lead-magnet-title-${source.replace(/[^a-z0-9]/gi, '-')}`}>Not ready for an estimate? <em>Take the checklist with you.</em></h2>
      <p>Walk the property season by season, note the areas that concern you, and keep a short photo list for whenever you are ready to ask AquaBlast for help.</p>
      <a className="lead-magnet-preview-link" href="/exterior-care-checklist">Preview the homeowner checklist <span aria-hidden="true">→</span></a>
    </div>
    <LeadMagnetCapture source={source} compact id={`lead-magnet-${source.replace(/[^a-z0-9]/gi, '-')}`} />
  </section>
}
