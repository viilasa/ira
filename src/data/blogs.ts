export interface BlogPost {
  slug: string
  title: string
  tag: string
  date: string
  cover: string
  excerpt: string
  author: string
  readTime: string
}

export const blogs: BlogPost[] = [
  {
    slug: 'living-by-the-sea',
    title: 'Living by the Sea: What South Goa Offers That Nowhere Else Can',
    tag: 'Lifestyle',
    date: '18 March 2026',
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Benaulim is not a destination. It is a disposition — a quieter way of being that the rest of Goa long forgot.',
    author: 'IRA Estates',
    readTime: '5 min read',
  },
  {
    slug: 'art-of-the-private-pool-villa',
    title: 'The Art of the Private Pool Villa: Design Beyond the Instagram Frame',
    tag: 'Design',
    date: '4 March 2026',
    cover: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'A private pool is not a luxury add-on. In the right climate, with the right design intent, it becomes the organizing principle of an entire way of living.',
    author: 'IRA Estates',
    readTime: '6 min read',
  },
  {
    slug: 'why-benaulim',
    title: 'Why Benaulim? The Story Behind IRA Estates\' Location',
    tag: 'Location',
    date: '19 February 2026',
    cover: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'We looked at fourteen sites across Goa before we stopped at Benaulim. Here is what we found — and why we stayed.',
    author: 'IRA Estates',
    readTime: '4 min read',
  },
  {
    slug: 'investing-in-goa-real-estate-2026',
    title: 'Investing in Goa Real Estate in 2026: What the Numbers Say',
    tag: 'Investment',
    date: '5 February 2026',
    cover: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Luxury villa values in South Goa have appreciated 18–24% year-on-year since 2022. But the more interesting story is in the rental yields.',
    author: 'IRA Estates',
    readTime: '7 min read',
  },
  {
    slug: 'kasauli-indias-next-luxury-hill-retreat',
    title: 'Kasauli: India\'s Next Luxury Hill Retreat',
    tag: 'Projects',
    date: '22 January 2026',
    cover: 'https://images.unsplash.com/photo-1637204329780-e82358c50ee3?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'At 6,000 ft, in the pine forests above Chandigarh, IRA Estates is quietly preparing its second chapter.',
    author: 'IRA Estates',
    readTime: '5 min read',
  },
  {
    slug: 'design-principles-behind-every-villa',
    title: 'Inside IRA: The Design Principles Behind Every Villa',
    tag: 'Design',
    date: '8 January 2026',
    cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Restraint is not the absence of ambition. At IRA Estates, it is the most demanding form of it.',
    author: 'IRA Estates',
    readTime: '6 min read',
  },
]
