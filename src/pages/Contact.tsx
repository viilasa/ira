import { useEffect } from 'react'
import Hamburger from '../components/layout/Hamburger'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/shared/ContactForm'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLenis } from '../hooks/useLenis'

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L0 24l6.335-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.034-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.848 9.848 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z" />
  </svg>
)

export default function Contact() {
  useLenis()
  useScrollReveal()

  useEffect(() => {
    document.title = 'Contact IRA Estates — Enquire About Our Luxury Villas'
  }, [])

  return (
    <div className="inner-page">
      <Hamburger forceDark />
      <TopNav />

      <main>
        <section className="page-hero">
          <div className="page-hero__inner container">
            <span className="eyebrow reveal">Get in Touch</span>
            <h1 className="page-hero__title reveal" data-delay="0.08">Contact Us</h1>
            <p className="page-hero__sub reveal" data-delay="0.16">
              Our team is available for a personal conversation about IRA Estates — villas,
              availability, and the experience of living here.
            </p>
          </div>
        </section>

        <section className="contact-form-section contact-form-section--page">
          <div className="contact-form-section__inner container">
            <div className="contact-form-section__info">
              <span className="eyebrow reveal">Reach Out</span>
              <h2 className="contact-form-section__heading reveal" data-delay="0.05">
                Begin your journey<br />to IRA Estates.
              </h2>
              <p className="contact-form-section__sub reveal" data-delay="0.1">
                Whether you're enquiring about the Goa villas or want early access to our
                Kasauli project, we'd love to hear from you.
              </p>
              <a
                href="https://wa.me/919821101180"
                className="whatsapp-btn reveal"
                target="_blank"
                rel="noopener noreferrer"
                data-delay="0.18"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
              <div className="contact-form-section__details reveal" data-delay="0.22">
                <p style={{ marginTop: '12px', color: 'var(--ash)', fontSize: '0.88rem' }}>
                  IRA Estates, Benaulim, South Goa — 403716
                </p>
              </div>
            </div>
            <ContactForm sourcePage="Contact Page" subject="New Lead — IRA Estates Contact Page" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
