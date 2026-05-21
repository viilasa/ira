import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <p className="footer-main__tagline reveal">
          Reach out to us for a personal conversation about IRA Estates.
        </p>
        <div className="footer-monkey">
          <img
            src="https://res.cloudinary.com/ddhhlkyut/image/upload/v1776720994/logo1Vines_hvxlrx.svg"
            alt="IRA Estates"
            loading="lazy"
            decoding="async"
          />
        </div>
        <address className="footer-address reveal">
          IRA Estates, Benaulim, South Goa — 403716<br />
          Goa, India
        </address>
        <div className="footer-logo reveal">
          <span>IRA ESTATES</span>
        </div>
        <Link to="/contact" className="footer-cta reveal">ENQUIRE ABOUT NIRVANA MANSION</Link>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__lead">
          <span className="footer-bottom__copy">IRA Estates · Luxury Villas · South Goa</span>
          <p className="footer-bottom__credits">
            Made by{' '}
            <a href="https://www.venilabs.viilasa.com" target="_blank" rel="noopener noreferrer">
              viilasa
            </a>
          </p>
        </div>
        <p className="footer-bottom__disclaimer">
          Disclaimer: All renders, images, and specifications are indicative and subject to change at the sole discretion of IRA Estates. This communication does not constitute an offer or agreement of sale. Interested parties are advised to conduct their own due diligence.
        </p>
        <div className="footer-bottom__social">
          <a href="#" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
