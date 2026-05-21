import React, { useEffect } from 'react'
import Hamburger from '../components/layout/Hamburger'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLenis } from '../hooks/useLenis'

function CustomPlayer({ videoId }: { videoId: string }) {
  return (
    <div className="custom-player reveal" data-delay="0.1">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="IRA Estates Walkthrough"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="custom-player__bar">
        <span className="custom-player__label">IRA Estates — Walkthrough, Benaulim</span>
      </div>
    </div>
  )
}

const gallerySlides = [
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738313/Cameraview_8_entry_vwa0af.jpg', alt: 'Villa entry', type: 'Villa Type I', room: 'Entry Facade' },
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738302/Cameraview_11_poolview_tdwton.jpg', alt: 'Villa pool', type: 'Villa Type I', room: 'Private Pool' },
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738201/villa1_bedroom_ytznqw.jpg', alt: 'Villa bedroom', type: 'Villa Type II', room: 'Bedroom I' },
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738201/villa1_living_yutwem.jpg', alt: 'Villa living', type: 'Villa Type II', room: 'Living Area' },
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738201/villa1_dinning_koqrgr.jpg', alt: 'Villa dining', type: 'Villa Type II', room: 'Dining Room' },
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738308/Cameraview_1_Night_sq1kwl.jpg', alt: 'Villa night', type: 'Villa Type I', room: 'Night View' },
  { src: 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738315/Cameraview_9_a8qrge.jpg', alt: 'Villa exterior', type: 'Villa Type I', room: 'Exterior View' },
]

export default function Projects() {
  useLenis()
  useScrollReveal()

  useEffect(() => {
    document.title = 'Our Projects — Luxury Villas in Goa & Kasauli | IRA Estates'

    const instances: any[] = []

    function initSwipers() {
      const S = (window as any).Swiper
      if (!S) return

      instances.push(
        new S('.gallery-swiper', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: { rotate: 4, stretch: 60, depth: 180, modifier: 1, slideShadows: false },
          navigation: { prevEl: '.gallery-swiper__prev', nextEl: '.gallery-swiper__next' },
          loop: true,
        }),
        new S('.sitemap-swiper', {
          slidesPerView: 1,
          pagination: { el: '.sitemap-swiper__pagination', clickable: true, dynamicBullets: false },
          navigation: { prevEl: '.sitemap-swiper__prev', nextEl: '.sitemap-swiper__next' },
        })
      )
    }

    if ((window as any).Swiper) {
      initSwipers()
    } else {
      const t = setTimeout(initSwipers, 300)
      return () => { clearTimeout(t); instances.forEach(s => s?.destroy?.(true, true)) }
    }

    return () => instances.forEach(s => s?.destroy?.(true, true))
  }, [])

  return (
    <div className="inner-page">
      <Hamburger forceDark />
      <TopNav />

      <main>
        {/* Hero */}
        <div className="projects-hero">
          <img
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776800342/pro_djrgy9.png"
            alt="IRA Estates — Where the sea sets the pace"
            loading="eager"
            decoding="async"
          />
          <div className="projects-hero__text">
            <span className="projects-hero__eyebrow">IRA Estates · Our Projects</span>
            <h1 className="projects-hero__heading">Where craft<br />meets landscape.</h1>
            <p className="projects-hero__sub">A considered portfolio of residences in India's finest locations.</p>
          </div>
          <div className="projects-hero__stats">
            <div className="projects-hero__stat">
              <span className="projects-hero__stat-val">2</span>
              <span className="projects-hero__stat-label">Active Projects</span>
            </div>
            <div className="projects-hero__stat-divider" />
            <div className="projects-hero__stat">
              <span className="projects-hero__stat-val">20+</span>
              <span className="projects-hero__stat-label">Total Residences</span>
            </div>
            <div className="projects-hero__stat-divider" />
            <div className="projects-hero__stat">
              <span className="projects-hero__stat-val">4–5 BHK</span>
              <span className="projects-hero__stat-label">Private Pool Villas</span>
            </div>
            <div className="projects-hero__stat-divider" />
            <div className="projects-hero__stat">
              <span className="projects-hero__stat-val">2</span>
              <span className="projects-hero__stat-label">States · Goa & HP</span>
            </div>
          </div>
        </div>

        {/* Project 01 */}
        <section className="project-card-section">
          <div className="project-card container">
            <div className="project-card__image reveal">
              <img src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775738310/Cameraview_5_h0pvoc.jpg" alt="IRA Estates Goa" loading="lazy" decoding="async" />
              <span className="project-card__status project-card__status--ongoing">Structure complete</span>
            </div>
            <div className="project-card__info">
              <span className="eyebrow reveal">Project 01</span>
              <h2 className="project-card__name reveal" data-delay="0.06">IRA Estates<br />Benaulim, South Goa</h2>
              <p className="project-card__desc reveal" data-delay="0.1">Eight exclusive 4–5 BHK private pool villas set on a sheltered coastal site two minutes from Benaulim beach. Designed to disappear into the landscape while providing every comfort of a considered luxury residence.</p>
              <ul className="project-card__specs reveal" data-delay="0.14">
                {[
                  ['Location', 'Benaulim, South Goa — 403716'],
                  ['Type', '4–5 BHK Private Pool Villas'],
                  ['Units', '8 Exclusive Residences'],
                  ['Built on', '3,400 sqm'],
                  ['Status', 'Structure complete'],
                  ['Possession', 'Available on enquiry'],
                ].map(([label, val]) => (
                  <li key={label}>
                    <span className="project-card__spec-label">{label}</span>
                    <span className="project-card__spec-val">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Arrival */}
        <div className="arrival">
          <div className="container">
            <h2 className="arrival__heading reveal">
              The waves of Benaulim serenade<br />your arrival
            </h2>
          </div>
          <div className="birds-scatter" aria-hidden="true">
            {[
              { bx: '25%', by: '72%', bs: '1.5', br: '-28deg' },
              { bx: '33%', by: '65%', bs: '1.25', br: '-22deg' },
              { bx: '38%', by: '61%', bs: '1.1', br: '-18deg' },
              { bx: '43%', by: '57%', bs: '0.95', br: '-20deg' },
              { bx: '40%', by: '54%', bs: '1.0', br: '-15deg' },
              { bx: '47%', by: '50%', bs: '0.8', br: '-12deg' },
              { bx: '51%', by: '46%', bs: '0.7', br: '-10deg' },
            ].map((b, i) => (
              <i key={i} className="bird" style={{ '--bx': b.bx, '--by': b.by, '--bs': b.bs, '--br': b.br } as React.CSSProperties} />
            ))}
          </div>
          <img
            className="arrival__illus"
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775728152/1a_w72zoe.svg"
            alt="Benaulim, South Goa landscape"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Benaulim editorial */}
        <div className="kasauli-block-2">
          <div className="kasauli-block-2__inner container">
            <div className="kasauli-block-2__photo reveal">
              <img
                src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1775738756/Goa_nbxdnw.jpg"
                alt="Goa aerial villa view"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="kasauli-block-2__copy">
              <h2 className="kasauli-block-2__heading reveal">Nirvana Mansions Amenities</h2>
              <p className="kasauli-block-2__para reveal" data-delay="0.05">
                IRA Estates places you amid South Goa at its strongest — shoreline light,
                considered dining, and a pace that prefers depth over rush. Everything you need
                to live well is woven into everyday life.
              </p>
              <p className="kasauli-block-2__para reveal" data-delay="0.15">
                Benaulim Beach is 900 m away. Goa International Airport connects you to the world in just 35 minutes.
              </p>
              <p className="kasauli-block-2__cta reveal" data-delay="0.25">
                South Goa's tranquility stays with you long after the tide has turned. IRA Estates simply makes it your permanent address.
              </p>
            </div>
          </div>
        </div>

        {/* Amenities — massage row on top; private concierge | steam bottom */}
        <section className="amenities-showcase" aria-labelledby="amenities-main-heading">
          <div className="amenities-showcase__inner container">
            <h2 id="amenities-main-heading" className="amenities-showcase__main-heading reveal" data-delay="0.02">Amenities</h2>
            <div className="amenities-showcase__top">
              <figure className="amenities-showcase__massage">
                <div className="amenities-showcase__massage-img-wrap reveal" data-delay="0.05">
                  <img
                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1778070006/maage_troom_ffqmwd.png"
                    alt="Serene spa and massage therapy room"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
              <div className="amenities-showcase__massage-copy">
                <span className="eyebrow reveal" data-delay="0.08">Wellness</span>
                <h3 className="amenities-showcase__title reveal" data-delay="0.1">Massage room</h3>
                <p className="amenities-showcase__text reveal" data-delay="0.13">
                  A quiet, climate-controlled retreat for restorative bodywork — the ideal counterpoint to coastal energy, with calibrated lighting and acoustics tuned for calm.
                </p>
              </div>
            </div>
            <div className="amenities-showcase__bottom">
              <figure className="amenities-showcase__dual">
                <div className="amenities-showcase__dual-img-wrap reveal" data-delay="0.06">
                  <img
                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1779377195/create-an-ultra-detailed-luxury-interior-concierge_jt1ljo.png"
                    alt="Private concierge and residential hospitality at IRA Estates"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="amenities-showcase__caption">
                  <span className="eyebrow amenities-showcase__dual-eyebrow reveal" data-delay="0.09">Service</span>
                  <span className="amenities-showcase__caption-label reveal" data-delay="0.1">Private concierge</span>
                  <span className="amenities-showcase__caption-desc reveal" data-delay="0.14">
                    Private chefs and chauffeur — just a call away. Crafted for a select few.
                  </span>
                </figcaption>
              </figure>
              <figure className="amenities-showcase__dual">
                <div className="amenities-showcase__dual-img-wrap reveal" data-delay="0.06">
                  <img
                    src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1778070324/steam_uvtwcq.png"
                    alt="Steam room interior with tiered benches"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="amenities-showcase__caption">
                  <span className="amenities-showcase__caption-label reveal" data-delay="0.1">Steam room</span>
                  <span className="amenities-showcase__caption-desc reveal" data-delay="0.14">Heat and humidity to soothe muscles and deepen recovery.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section">
          <div className="container">
            <p className="gallery-carousel__eyebrow reveal">The Residences — Renders of Nirvana Mansions</p>
          </div>
          <div className="swiper gallery-swiper">
            <div className="swiper-wrapper">
              {gallerySlides.map((s) => (
                <div key={s.room} className="swiper-slide gallery-slide">
                  <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
                  <div className="gallery-slide__info">
                    <span className="gallery-slide__type">{s.type}</span>
                    <span className="gallery-slide__room">{s.room}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="gallery-swiper__prev swiper-button-prev" />
            <div className="gallery-swiper__next swiper-button-next" />
          </div>
          <div className="gallery-stats container reveal">
            {[
              { val: '4–5', unit: ' BHK', label: 'Bedrooms' },
              { val: '8', unit: ' Units', label: 'Exclusive Villas' },
              { val: 'Structure complete', unit: '', label: 'Project Status' },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="gallery-stat__divider" />}
                <div className="gallery-stat">
                  <span className="gallery-stat__value">{s.val}<span className="gallery-stat__unit">{s.unit}</span></span>
                  <span className="gallery-stat__label">{s.label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Floor Plans */}
        <div className="sitemap-section">
          <div className="swiper sitemap-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="sitemap-slide">
                  <img className="sitemap-slide__img" src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1778069369/Add_a_heading_eweagp.svg" alt="IRA Estates — master site plan showing villa layout, internal roads, and entry" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sitemap-slide">
                  <img className="sitemap-slide__img" src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776720105/5_e12omt.svg" alt="Site plan — slide 2" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sitemap-slide">
                  <img className="sitemap-slide__img" src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776720105/7_jnrlvs.svg" alt="Site plan — slide 3" loading="lazy" decoding="async" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="sitemap-slide">
                  <img className="sitemap-slide__img" src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776720106/6_vkgasw.svg" alt="Site plan — slide 4" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
          <div className="sitemap-bar">
            <span className="sitemap-bar__label">
              Floor Plan<br />
              <span style={{ fontSize: '0.85em', color: 'var(--gold)', opacity: 0.75 }}>IRA Estates, Benaulim</span>
            </span>
            <div className="sitemap-bar__controls">
              <div className="sitemap-swiper__pagination swiper-pagination" />
              <button className="sitemap-swiper__prev swiper-button-prev" aria-label="Previous" />
              <button className="sitemap-swiper__next swiper-button-next" aria-label="Next" />
            </div>
          </div>
        </div>

        {/* Specs */}
        <section className="specs-section">
          <div className="specs-inner container">
            <div className="specs-col">
              <h3 className="specs-col__heading reveal">Specifications</h3>
              <ul className="specs-col__list reveal" data-delay="0.05">
                {['Jindal Steel structural framework', 'RCC framed earthquake-resistant structure', 'Masonry brickwork executed with rubble stone', 'High plinth-levels with damp-proofing below ground floor', 'Waterproofing for terraces and pool decks', 'Indo-Portuguese aluminium windows with Georgian bars — double-glazed', 'Legrand modular electrical switches and fittings', 'Premium sanitaryware and CP fittings', 'Built-in cat cabling for satellite TV and high-speed internet', 'Private swimming pool with deck — each villa', 'Individually landscaped gardens'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="specs-col">
              <h3 className="specs-col__heading reveal">Interiors</h3>
              <ul className="specs-col__list reveal" data-delay="0.05">
                {['Beautiful modular kitchen with hob and chimney', 'Gypsum ceilings with decorative light fixtures', 'Ambient and mood lighting throughout', 'Glass partitions in bathrooms', 'Decorative wall finishes and feature walls', 'Handcrafted terrazzo accents', 'Tropical landscape design by specialists', 'Outdoor terrace furniture provision'].map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="specs-illus-col reveal" data-delay="0.1">
              <img src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776112080/interior-illustration-of-a-portug_buhpll.svg" alt="IRA Estates interior" loading="lazy" decoding="async" />
            </div>
          </div>
          <p className="specs-disclaimer container reveal">
            <em>Disclaimer:</em> Specifications are indicative and subject to change at the sole discretion of IRA Estates. Images and renders are for representational purposes only.
          </p>
        </section>

        {/* Video */}
        <div className="video-section">
          <div className="container">
            <p className="video-section__label reveal">An exclusive walk-through of IRA Estates, Benaulim, South Goa.</p>
          </div>
          <CustomPlayer videoId="cV0WwcZbcTk" />
        </div>

        {/* Project 02 */}
        <section className="project-card-section">
          <div className="project-card project-card--dark container">
            <div className="project-card__image reveal">
              <video
                src="https://res.cloudinary.com/ddhhlkyut/video/upload/v1776114441/trtr_hbc3qz.mp4"
                autoPlay muted loop playsInline
                aria-label="Kasauli Hills"
                style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <span className="project-card__status project-card__status--upcoming">Coming Soon</span>
            </div>
            <div className="project-card__info">
              <span className="eyebrow reveal">Project 02</span>
              <h2 className="project-card__name reveal" data-delay="0.06">IRA Kasauli<br />Himachal Pradesh</h2>
              <p className="project-card__desc reveal" data-delay="0.1">Perched at 6,000 ft in the pine-covered ridges above Chandigarh, IRA's next residence is designed to disappear into the treeline — and leave nothing behind but stillness.</p>
              <ul className="project-card__specs reveal" data-delay="0.14">
                {[
                  ['Location', 'Kasauli Hills, Himachal Pradesh'],
                  ['Type', 'Private Hill Residences'],
                  ['Units', '14 Exclusive Residences'],
                  ['Altitude', '~6,000 ft (1,800 m)'],
                  ['Status', 'Coming Soon'],
                ].map(([label, val]) => (
                  <li key={label}>
                    <span className="project-card__spec-label">{label}</span>
                    <span className="project-card__spec-val">{val}</span>
                  </li>
                ))}
              </ul>
              <div className="project-card__divider reveal" data-delay="0.2">
                <span className="project-card__divider-line" />
                <span className="project-card__divider-text">Details on enquiry</span>
                <span className="project-card__divider-line" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
