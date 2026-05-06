import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/layout/Hamburger'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLenis } from '../hooks/useLenis'

const promiseCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Concierge as Culture',
    back: 'A dedicated concierge who anticipates your needs before you voice them — from restaurant reservations to last-minute arrangements. Service that feels personal, never transactional.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Living Made Effortless',
    sub: 'Housekeeping',
    back: 'Daily housekeeping, linen changes, and villa upkeep handled quietly — so your home is always exactly as you left it, or better.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Your Home, Our Watch',
    sub: 'Facility Management',
    back: 'Pool maintenance, landscaping, electrical, and plumbing — all managed by our in-house team so your villa stays pristine year-round.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1" /><path d="M16 8h5l2 3v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Rental, Reimagined',
    back: 'When you\'re away, we manage your villa as a premium short-term rental — vetted guests, seamless operations, returns that work for you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
    title: 'Clarity is Our Contract',
    sub: 'Paperwork',
    back: 'No hidden clauses, no fine print surprises. Every agreement is written in plain language, reviewed together, and signed with confidence.',
  },
]

export default function About() {
  useLenis()
  useScrollReveal()

  useEffect(() => {
    document.title = 'About IRA Estates — Our Story & Design Philosophy'
  }, [])

  return (
    <div className="inner-page about-page">
      <Hamburger />
      <TopNav />

      <main className="about-main">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero__inner container">
            <div className="about-hero__text">
              <span className="about-hero__eyebrow eyebrow reveal">Who We Are</span>
              <h1 className="about-hero__title reveal" data-delay="0.08">
                About<br /><em>IRA Estates</em>
              </h1>
              <p className="about-hero__sub reveal" data-delay="0.18">
                Built on restraint, craft,<br />and a deep respect for place.
              </p>
            </div>
            {/* <div className="about-hero__illus reveal" data-delay="0.2">
              <img
                src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776110910/a-minimal-luxury-editorial-illustration-of-a-small_rq6au5.svg"
                alt="IRA Estates illustration"
                loading="lazy"
                decoding="async"
              />
            </div> */}
          </div>
        </section>

        {/* Story */}
        <section className="about-intro">
          <div className="about-intro__inner container">
            <div className="about-intro__copy">
              <span className="eyebrow reveal" style={{ color: 'var(--gold)' }}>Our Story</span>
              <h2 className="about-intro__heading reveal" data-delay="0.08">A company built<br />on less.</h2>
              <p className="about-intro__para reveal" data-delay="0.14">
                IRA Estates was founded by people who had spent years watching the luxury residential market default to excess. The question they kept asking: what would it look like to build the opposite?
              </p>
              <p className="about-intro__para reveal" data-delay="0.2">
                The answer is IRA Estates — a small number of exceptional residences in India's finest locations. Not many, not fast, but each one considered in every detail from the ground up.
              </p>
              <p className="about-intro__para reveal" data-delay="0.26">
                Our first project is in Benaulim, South Goa: eight private pool villas two minutes from the beach. Our second comes to the pine ridges of Kasauli, Himachal Pradesh.
              </p>
              <div className="about-intro__stat-row reveal" data-delay="0.32">
                <div className="about-intro__stat">
                  <span className="about-intro__stat-num">20+</span>
                  <span className="about-intro__stat-label">Homes</span>
                </div>
                <div className="about-intro__stat">
                  <span className="about-intro__stat-num">2</span>
                  <span className="about-intro__stat-label">States</span>
                </div>
              </div>
            </div>
            <div className="about-intro__image reveal" data-delay="0.1">
              <img
                src="https://plus.unsplash.com/premium_photo-1680296669146-b6c258cbc62d?q=80&w=1170&auto=format&fit=crop"
                alt="IRA Estates villa"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="about-founder-section">
          <div className="about-founder-section__inner container">
            <div className="about-founder-section__intro">
              <span className="eyebrow reveal" style={{ color: 'var(--gold)' }}>The Person Behind IRA</span>
              <h2 className="about-founder-section__heading reveal" data-delay="0.08">
                Born from vision.<br />Built with attention.
              </h2>
              <p className="about-founder-section__body reveal" data-delay="0.14">
                IRA Estates was never just a company — it was a calling. Born from the vision of someone who believed that luxury should be quiet, craft should be considered, and the finest home is the one that knows exactly where it is.
              </p>
            </div>
            <div className="af-card reveal" data-delay="0.1">
              <div className="af-card__photo">
                <div className="af-card__placeholder">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                  <span>Founder Photo</span>
                </div>
              </div>
              <div className="af-card__copy">
                <h3 className="af-card__name">Founder Name</h3>
                <span className="af-card__role">Founder &amp; Vision</span>
                <p className="af-card__bio">Add your founder's story here — their background, what drives them, and their vision for IRA Estates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values-dark">
          <div className="container">
            <span className="eyebrow reveal" style={{ color: 'var(--gold)', display: 'block', textAlign: 'center' }}>What We Stand For</span>
            <h2 className="about-values-dark__heading reveal" data-delay="0.08">Three principles.<br />Every project.</h2>
            <div className="about-values-dark__grid">
              {[
                { num: '01', name: 'Place First', desc: 'Every IRA residence is designed from its site outward. The landscape, the light, the material vernacular — these are not backdrop. They are the brief.' },
                { num: '02', name: 'Craft Over Scale', desc: 'We build fewer homes than we could. Smaller volumes allow for the level of attention that distinguishes a great house from an adequate one.' },
                { num: '03', name: 'Built to Last', desc: 'Stone, concrete, hardwood — materials that age well over surfaces that look perfect on day one and tired by year five. We build for decades.' },
              ].map((v, i) => (
                <div className="avd-card reveal" data-delay={`${i * 0.1}`} key={v.num}>
                  <span className="avd-card__num">{v.num}</span>
                  <h3 className="avd-card__name">{v.name}</h3>
                  <p className="avd-card__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promise */}
        <section className="about-promise">
          <div className="container">
            <h2 className="about-promise__heading reveal">Promise</h2>
            <p className="about-promise__sub reveal" data-delay="0.06">What You Receive When You Arrive</p>
            <p className="about-promise__intro reveal" data-delay="0.12">
              At IRA Estates, the truest luxury begins when everything else falls away — when you no longer need to worry, chase, manage, or decide. You arrive, and we hold the rest.
            </p>
            <div className="about-promise__track-wrap">
              <div className="about-promise__track">
                {promiseCards.map((c, i) => (
                  <div className="about-promise__card reveal" data-delay={`${i * 0.06}`} key={c.title}>
                    <div className="about-promise__card-inner">
                      <div className="about-promise__card-front">
                        <div className="about-promise__icon">{c.icon}</div>
                        <h3 className="about-promise__card-title">
                          {c.title}
                          {c.sub && <span className="about-promise__card-sub">({c.sub})</span>}
                        </h3>
                      </div>
                      <div className="about-promise__card-back">
                        <p>{c.back}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="about-principles">
          <div className="container">
            <h2 className="about-principles__heading reveal">Principles</h2>
            <p className="about-principles__sub reveal" data-delay="0.06">What We Build Is How We Are</p>
            <div className="about-principles__body reveal" data-delay="0.12">
              <p>At IRA Estates, quality isn't a standard — it's a state of being.</p>
              <p>From the line on a drawing board to the final door hinge, every detail is approached with presence. Not performance. Presence.</p>
              <p>We don't believe in loud statements or trending finishes. We believe in precision that speaks quietly, and elegance that doesn't age.</p>
              <p>We use what lasts. We trust what's timeless. We don't build for approval — we build for arrival. Yours.</p>
              <p>Some call it luxury. We call it devotion to detail.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta-dark">
          <div className="container">
            <h2 className="about-cta-dark__heading reveal">See what we're building.</h2>
            <div className="about-cta-dark__actions reveal" data-delay="0.1">
              <Link to="/projects" className="btn btn--gold">Our Projects</Link>
              <Link to="/contact" className="btn btn--outline-white">Get in Touch</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
