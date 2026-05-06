const LOGO = 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776102628/ira_nhitnp.svg'
const VIDEO = 'https://res.cloudinary.com/ddhhlkyut/video/upload/v1775827094/Discover_Goa_Beaches_-_i_824p_-_Trim_hum5qk.mp4'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__media">
        <video
          className="hero__video"
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="hero__brand-block">
        <img className="hero__logo" src={LOGO} alt="IRA Estates" />
      </div>

      <div className="hero__content">
        <p className="hero__caption">
          <span className="hero__caption-line">Escape to the sea —</span>
          <span className="hero__caption-line">Homes in South Goa.</span>
        </p>
        <div className="hero__divider" aria-hidden="true" />
        <p className="hero__descriptor">IRA Estates</p>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  )
}
