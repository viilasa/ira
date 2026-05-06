import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Hamburger from '../components/layout/Hamburger'
import TopNav from '../components/layout/TopNav'
import Footer from '../components/layout/Footer'
import { useLenis } from '../hooks/useLenis'
import { blogs } from '../data/blogs'
import { blogContent } from '../data/blogContent'

function renderBody(md: string) {
  return md.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h3 key={i} className="article__body-h3">{block.slice(3)}</h3>
    }
    if (block.startsWith('> ')) {
      return <blockquote key={i} className="article__body-quote">{block.slice(2)}</blockquote>
    }
    if (block.trim()) {
      return <p key={i}>{block}</p>
    }
    return null
  })
}

export default function BlogPost() {
  useLenis()
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const post = blogs.find(b => b.slug === slug)

  useEffect(() => {
    if (!post) { navigate('/blog', { replace: true }); return }
    document.title = `${post.title} — IRA Estates`
    window.scrollTo(0, 0)
  }, [post, navigate])

  if (!post) return null

  const content = blogContent[post.slug] ?? ''

  return (
    <div className="inner-page">
      <Hamburger forceDark />
      <TopNav />

      <main>
        <article className="article">
          <div
            className="article__cover"
            style={{ backgroundImage: `url(${post.cover})` }}
          />

          <header className="article__header container">
            <Link to="/blog" className="article__back">← Back to Blogs</Link>
            <div className="article__header-top">
              <span className="article__tag eyebrow">{post.tag}</span>
              <div className="article__meta">
                <span>{post.date}</span>
                <span className="article__meta-sep">·</span>
                <span>{post.readTime}</span>
                <span className="article__meta-sep">·</span>
                <span>{post.author}</span>
              </div>
            </div>
            <h1 className="article__title">{post.title}</h1>
          </header>

          <div className="article__body container">
            {renderBody(content)}
          </div>

          <div className="article__footer">
            <div className="article__footer-inner container">
              <p className="article__footer-lead">Interested in IRA Estates?</p>
              <Link to="/contact" className="btn btn--gold">Get in Touch</Link>
              <Link to="/blog" className="article__more-link">More from the Blogs →</Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
