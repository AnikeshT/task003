import { absolute, site } from "@/data/site"
import type { Question, Tour, TourSummary } from "@/data/tours"

/**
 * Structured data. It only repeats what the page shows. No ratings: they are Tripadvisor's, and Google
 * doesn't accept ratings taken from other sites.
 */
type Json = Record<string, unknown>

const ORG = { "@id": `${site.url}/#organization` }
export const graph = (...nodes: Json[]): Json => ({ "@context": "https://schema.org", "@graph": nodes })

export const organization: Json = {
  "@type": "Organization",
  ...ORG,
  name: site.name,
  url: site.url,
  description: site.description,
  logo: { "@type": "ImageObject", url: absolute("/logo.png"), width: 512, height: 512 },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
  ],
}

export const website: Json = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "en",
  publisher: ORG,
}

export const breadcrumbs = (items: { label: string; href: string }[]): Json => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: absolute(c.href) })),
})

export const tourList = (tours: Pick<TourSummary, "slug" | "title">[], name: string): Json => ({
  "@type": "ItemList",
  name,
  numberOfItems: tours.length,
  itemListElement: tours.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.title, url: absolute(`/tours/${t.slug}`) })),
})

export const collection = ({ path, name, description, tours }: { path: string; name: string; description: string; tours: Pick<TourSummary, "slug" | "title">[] }): Json => ({
  "@type": "CollectionPage",
  url: absolute(path),
  name,
  description,
  inLanguage: "en",
  isPartOf: { "@id": `${site.url}/#website` },
  mainEntity: tourList(tours, name),
})

export const destination = ({ path, name, description, image }: { path: string; name: string; description: string; image: string }): Json => ({
  "@type": "TouristDestination",
  url: absolute(path),
  name,
  description,
  image: absolute(image),
  containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
})

export const faqPage = (items: Question[]): Json => ({
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
})

export const trip = (tour: Tour): Json => ({
  "@type": "TouristTrip",
  "@id": `${absolute(`/tours/${tour.slug}`)}#trip`,
  name: tour.title,
  ...(tour.summary && { description: tour.summary }),
  url: absolute(`/tours/${tour.slug}`),
  image: tour.images.slice(0, 3),
  ...(tour.operator && { provider: { "@type": "Organization", name: tour.operator } }),
  ...(tour.highlights.length > 0 && {
    itinerary: { "@type": "ItemList", itemListElement: tour.highlights.map((name, i) => ({ "@type": "ListItem", position: i + 1, name })) },
  }),
  ...(tour.price !== null && {
    offers: { "@type": "Offer", price: tour.price.toFixed(2), priceCurrency: tour.currency, url: absolute(`/tours/${tour.slug}`) },
  }),
})

export const article = (a: { path: string; title: string; description: string; image: string; published: string; modified: string }): Json => ({
  "@type": "BlogPosting",
  "@id": `${absolute(a.path)}#article`,
  headline: a.title,
  description: a.description,
  image: absolute(a.image),
  datePublished: a.published,
  dateModified: a.modified,
  inLanguage: "en",
  mainEntityOfPage: absolute(a.path),
  author: { "@type": "Organization", name: site.name, url: absolute("/about") },
  publisher: ORG,
})

export const blog = (posts: { slug: string; title: string; published: string; updated: string }[]): Json => ({
  "@type": "Blog",
  "@id": `${absolute("/blog")}#blog`,
  name: `${site.name} travel guides`,
  url: absolute("/blog"),
  inLanguage: "en",
  publisher: ORG,
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${absolute(`/blog/${p.slug}`)}#article`,
    headline: p.title,
    url: absolute(`/blog/${p.slug}`),
    datePublished: p.published,
    dateModified: p.updated,
  })),
})
