import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero',       label: 'IRA Estates' },
  { id: 'overview',   label: 'About Us' },
  { id: 'residences', label: 'Residences' },
  { id: 'amenities',  label: 'Amenities' },
  { id: 'location',   label: 'Location' },
  { id: 'upcoming',   label: 'Upcoming' },
  { id: 'contact',    label: 'Contact' },
]

const LIGHT_SECTIONS = new Set([
  'overview', 'residences', 'amenities', 'location', 'upcoming', 'contact',
])

export default function SectionIndicator() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.25 }
    )

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  const active = SECTIONS.find((s) => s.id === activeId)
  const isDark = LIGHT_SECTIONS.has(activeId)

  return (
    <aside
      className={`section-indicator${isDark ? ' is-dark' : ''}`}
      aria-hidden="true"
    >
      <span className="section-indicator__label">
        {active?.label ?? 'IRA Estates'}
      </span>
    </aside>
  )
}
