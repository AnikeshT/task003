import type { MetadataRoute } from "next"
import { experiences } from "@/data/experiences"
import { posts } from "@/data/posts"
import { absolute } from "@/data/site"
import { cities } from "@/data/tours"
import { getListedTours } from "@/lib/tour-hub"

/** Every page search engines should know. Dates only where we know when the words changed. */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["/", "/tours", "/destinations", ...Object.keys(cities).map((c) => `/destinations/${c}`), "/plan", "/about", "/how-we-work", "/privacy", "/blog"]
  const tours = await getListedTours()
  return [
    ...pages.map((path) => ({ url: absolute(path) })),
    ...experiences.map((e) => ({ url: absolute(`/experiences/${e.slug}`) })),
    ...posts.map((p) => ({ url: absolute(`/blog/${p.slug}`), lastModified: p.updated })),
    ...tours.map((t) => ({ url: absolute(`/tours/${t.slug}`) })),
  ]
}
