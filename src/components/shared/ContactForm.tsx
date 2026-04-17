import { useState } from 'react'

interface Props {
  sourcePage?: string
  subject?: string
}

export default function ContactForm({ sourcePage = 'Website', subject = 'New Lead — IRA Estates' }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://formsubmit.co/ajax/rauni_bhandari@hotmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3500)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3500)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="source_page" value={sourcePage} />

      <div className="contact-form__row">
        <div className="contact-form__field reveal">
          <label className="contact-form__label" htmlFor="cf-name">Full Name</label>
          <input className="contact-form__input" type="text" id="cf-name" name="name" placeholder="Your name" required />
        </div>
        <div className="contact-form__field reveal" data-delay="0.05">
          <label className="contact-form__label" htmlFor="cf-email">Email Address</label>
          <input className="contact-form__input" type="email" id="cf-email" name="email" placeholder="you@email.com" required />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field reveal" data-delay="0.08">
          <label className="contact-form__label" htmlFor="cf-phone">Phone Number</label>
          <input className="contact-form__input" type="tel" id="cf-phone" name="phone" placeholder="+91 00000 00000" />
        </div>
        <div className="contact-form__field reveal" data-delay="0.11">
          <label className="contact-form__label" htmlFor="cf-interest">I'm interested in</label>
          <select className="contact-form__input contact-form__select" id="cf-interest" name="interest">
            <option value="" disabled>Select an option</option>
            <option value="goa">IRA Estates — South Goa</option>
            <option value="kasauli">IRA Kasauli — Himachal Pradesh</option>
            <option value="visit">Scheduling a site visit</option>
            <option value="info">General information</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="contact-form__field contact-form__field--full reveal" data-delay="0.14">
        <label className="contact-form__label" htmlFor="cf-message">Message</label>
        <textarea
          className="contact-form__input contact-form__textarea"
          id="cf-message"
          name="message"
          placeholder="Tell us a little about yourself or what you'd like to know…"
          rows={5}
        />
      </div>

      <div className="contact-form__footer reveal" data-delay="0.18">
        <button
          type="submit"
          className="btn btn--primary contact-form__submit"
          disabled={status === 'sending'}
          style={status === 'sent' ? { background: 'var(--gold)' } : status === 'error' ? { background: '#c0392b' } : undefined}
        >
          {status === 'idle' && 'Send Enquiry'}
          {status === 'sending' && 'Sending…'}
          {status === 'sent' && 'Sent — Thank You'}
          {status === 'error' && 'Failed — Try Again'}
        </button>
        <p className="contact-form__privacy">We respect your privacy. No spam, ever.</p>
      </div>
    </form>
  )
}
