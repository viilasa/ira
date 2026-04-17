import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/layout/Hamburger'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLenis } from '../hooks/useLenis'
import { blogs } from '../data/blogs'

export default function Blog() {
  useLenis()
  useScrollReveal()

  useEffect(() => {
    document.title = 'The Blogs — Design, Lifestyle & Goa Living | IRA Estates'
  }, [])

  return (
    <div className="inner-page">
      <Hamburger forceDark />
      <TopNav />

      <main>
        <section className="blog-hero">
          <div className="blog-hero__inner container">
            <div className="blog-hero__left">
              <span className="eyebrow reveal">Stories &amp; Perspectives</span>
              <h1 className="blog-hero__title reveal" data-delay="0.06">
                The<br /><em>Blogs.</em>
              </h1>
            </div>
            <div className="blog-hero__right reveal" data-delay="0.14">
              <div className="blog-hero__rule" />
              <p className="blog-hero__desc">
                Design, lifestyle, location, and the considered life — written from within IRA Estates.
              </p>
              <span className="blog-hero__count">{blogs.length} Stories</span>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <div className="blog-grid container">
            {blogs.map((post, i) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="blog-card reveal"
                data-delay={`${(i % 3) * 0.06}`}
              >
                <div className="blog-card__cover">
                  <img src={post.cover} alt={post.title} loading="lazy" decoding="async" />
                </div>
                <div className="blog-card__overlay">
                  <span className="blog-card__tag">{post.tag}</span>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <span className="blog-card__date">{post.date} · {post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
