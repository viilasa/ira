import { useState } from 'react'

const ARCH_ILLUS = 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775809257/-goan-portuguese_b7evq2.svg'
const WOMAN_ILLUS = 'https://res.cloudinary.com/ddhhlkyut/image/upload/q_auto/f_auto/v1775812560/a-minimal-luxury-illustration-of-a-graceful-woman-_joru8c.svg'

const features = [
  {
    title: 'Private Pool & Landscaped Gardens',
    body: [
      'Each villa is gifted its own private swimming pool and individually landscaped garden — a personal sanctuary designed for relaxation, entertaining, and the quiet pleasures of Goa living.',
    ],
  },
  {
    title: 'Premium Interiors & Fittings',
    body: [
      'Kohler and Jaguar sanitaryware, Legrand modular switches, UPVC Fenesta windows, and Jindal Steel structural elements are standard across all villas.',
      'Italian marble and premium stone flooring, modular kitchens with hob and chimney, and ambient mood lighting complete the picture of understated luxury.',
    ],
  },
  {
    title: '4 BHK · Spacious & Airy',
    body: [
      'Each villa offers four generously proportioned bedrooms, multiple living areas, and outdoor terraces designed to blur the line between inside and the Goa outdoors.',
      'High ceilings, cross-ventilation, and thoughtful orientation ensure every room stays cool, bright, and connected to the natural world around it.',
    ],
  },
]

export default function Amenities() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="amenities" className="amenities">
      <div className="sustain-card">

        {/* Always-visible preview: heading + 2 paras + arch illustration */}
        <div className="sustain-card__visible-preview">
          <div className="sustain-card__preview-inner">
            <div className="sustain-card__preview-copy">
              <h2 className="sustain-card__heading reveal">
                Every detail considered.<br />Every comfort crafted.
              </h2>
              <p className="sustain-card__para reveal">
                At IRA Estates, we believe that true luxury lies in the
                details — the quality of a door handle, the weight of a
                tap, the texture of a wall. Every element in Nirvana
                Mansion has been curated with that conviction.
              </p>
              <p className="sustain-card__para reveal">
                From Kohler and Jaguar sanitaryware to Legrand electrical
                systems and Jindal Steel structures, we partner only with
                brands that share our commitment to lasting excellence.
              </p>
            </div>
            <div className="sustain-card__preview-illus">
              <img
                src={ARCH_ILLUS}
                alt="Goan Portuguese architecture illustration"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Read More toggle */}
        <button
          className="sustain-card__readmore"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
        >
          Read More
        </button>

        {/* Expandable section */}
        <div className={`sustain-card__expandable${expanded ? ' is-open' : ''}`}>

          <div className="sustain-card__intro">
            <div className="sustain-card__intro-copy">
              <p className="sustain-card__para">
                At IRA Estates, we believe that true luxury lies in the
                details — the quality of a door handle, the weight of a
                tap, the texture of a wall. Every element in Nirvana
                Mansion has been curated with that conviction.
              </p>
              <p className="sustain-card__para">
                From Kohler and Jaguar sanitaryware to Legrand electrical
                systems and Jindal Steel structures, we partner only with
                brands that share our commitment to lasting excellence.
              </p>
              <p className="sustain-card__para">
                The result is a home that not only looks exceptional on
                the day you move in — but continues to feel exceptional
                decades into the future.
              </p>
            </div>
          </div>

          <div className="sustain-card__features">
            {features.map(f => (
              <div className="sustain-card__feature" key={f.title}>
                <h3 className="sustain-card__feature-title">{f.title}</h3>
                {f.body.map((p, i) => (
                  <p className="sustain-card__feature-body" key={i} style={i > 0 ? { marginTop: 12 } : undefined}>{p}</p>
                ))}
              </div>
            ))}
            <div className="sustain-card__feature-illus">
              <img
                src={WOMAN_ILLUS}
                alt="Luxury lifestyle illustration"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Read Less — bottom */}
          <button
            className="sustain-card__readmore sustain-card__readless"
            onClick={() => setExpanded(false)}
          >
            Read Less ↑
          </button>

        </div>
      </div>
    </section>
  )
}
