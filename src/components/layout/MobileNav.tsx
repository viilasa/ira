import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776102628/ira_nhitnp.svg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blog' },
]

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileNav({ open, onClose }: Props) {
  const location = useLocation()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <>
      <div className={`mobile-nav__overlay${open ? ' is-open' : ''}`} onClick={onClose} aria-hidden="true" />
      <nav className={`mobile-nav${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation">
        <button className="mobile-nav__close" onClick={onClose} aria-label="Close">&times;</button>
        <ul className="mobile-nav__list">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`mobile-nav__link${location.pathname === l.to ? ' is-active' : ''}`}
                onClick={onClose}
              >
                <span className="mobile-nav__dot" />
                <span className="mobile-nav__label">{l.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="mobile-nav__link mobile-nav__link--enquire" onClick={onClose}>
              <span className="mobile-nav__dot" />
              <span className="mobile-nav__label">Contact Us</span>
            </Link>
          </li>
        </ul>
        <div className="mobile-nav__footer">
          <img src={LOGO} alt="IRA Estates" className="mobile-nav__logo" />
          <span className="mobile-nav__wordmark">IRA ESTATES</span>
        </div>
      </nav>
    </>
  )
}
