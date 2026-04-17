import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function UpcomingProjects() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      new (window as any).Swiper('.upcoming-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        pagination: { el: '.upcoming-swiper__pagination', clickable: true },
        navigation: {
          prevEl: '.upcoming-swiper__prev',
          nextEl: '.upcoming-swiper__next',
        },
      })
    }
  }, [])

  return (
    <section id="upcoming" className="upcoming-section">
      <img
        className="upcoming-section__bg-illus"
        src="https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776428896/Untitled_2050_x_1540_px_hvnpuy.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="upcoming-section__header container">
        <span className="eyebrow reveal">What's Next</span>
        <h2 className="upcoming-section__title reveal" data-delay="0.08">Upcoming Projects</h2>
      </div>

      <div ref={swiperRef} className="swiper upcoming-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="upcoming-slide__glass upcoming-slide__glass--bare">
              <div className="upcoming-slide__body">
                <div className="upcoming-slide__copy">
                  <span className="upcoming-slide__tag">Kasauli</span>
                  <h3 className="upcoming-slide__heading">Something new<br />is on the horizon.</h3>
                  <p className="upcoming-slide__sub">
                    IRA Estates is quietly at work on its next chapter — a project as considered and
                    distinctive as everything that has come before it.
                  </p>
                  <p className="upcoming-slide__detail">
                    Details are being kept close for now. Be among the first to know when the time is right.
                  </p>
                  <Link to="/contact" className="upcoming-slide__cta">Stay in the loop →</Link>
                </div>
                <div className="upcoming-slide__illus">
                  <img
                    src="https://images.unsplash.com/photo-1637204329780-e82358c50ee3?q=80&w=1074&auto=format&fit=crop"
                    alt="Kasauli hills"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming-swiper__pagination swiper-pagination" />
      </div>
    </section>
  )
}
