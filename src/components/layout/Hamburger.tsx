import { useState, useEffect } from 'react'
import MobileNav from './MobileNav'

interface HamburgerProps {
  forceDark?: boolean
}

export default function Hamburger({ forceDark = false }: HamburgerProps) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(forceDark)

  useEffect(() => {
    if (forceDark) return
    const handleScroll = () => {
      setDark(window.scrollY > window.innerHeight * 0.85)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceDark])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        className={`hamburger${dark || open ? ' burger-dark' : ''}${open ? ' is-open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
