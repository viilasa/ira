import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'

export default function StickyContact() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button className="sticky-contact-btn" onClick={() => setOpen(true)}>
        Contact
      </button>

      <div
        className={`contact-dialog-overlay${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
      >
        <div className="contact-dialog" role="dialog" aria-modal="true">
          <button className="contact-dialog__close" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h2 className="contact-dialog__title">Begin your journey<br />to IRA Estates.</h2>
          </div>
          <ContactForm sourcePage="Sticky Contact" subject="New Lead — IRA Estates Sticky" />
        </div>
      </div>
    </>
  )
}
