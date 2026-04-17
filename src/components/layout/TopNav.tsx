import { Link, useLocation } from 'react-router-dom'

const LOGO = 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1776102628/ira_nhitnp.svg'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blog' },
]

export default function TopNav() {
  const location = useLocation()

  return (
    <nav className="top-nav">
      <Link to="/" className="top-nav__brand">
        <img src={LOGO} alt="IRA Estates" className="top-nav__logo" />
        <span className="top-nav__name">IRA Estates</span>
      </Link>
      <ul className="top-nav__list">
        {links.map(l => (
          <li key={l.to}>
            <Link
              to={l.to}
              className={`top-nav__link${location.pathname === l.to ? ' is-active' : ''}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/contact"
            className={`top-nav__link top-nav__link--cta${location.pathname === '/contact' ? ' is-active' : ''}`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}
