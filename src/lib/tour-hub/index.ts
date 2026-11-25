import type { Tour, TourSummary } from "@/data/tours"
import { PORTUGAL_TOURS } from "@/data/portugal-tours"
import { toTours, type HubTour } from "./map"

/**
 * This website's tours, read from its Tour Hub feed or gracefully falling back
 * to curated Portugal Wine & Food expeditions.
 */
export async function getTours(): Promise<Tour[]> {
  const url = process.env.TOUR_HUB_FEED_URL
  const key = process.env.TOUR_HUB_FEED_KEY
  if (!url || !key) {
    return PORTUGAL_TOURS
  }

  try {
    const res = await fetch(url, { headers: { "x-feed-key": key } })
    if (!res.ok) return PORTUGAL_TOURS
    const feed = (await res.json()) as { tours: HubTour[] }
    return toTours(feed.tours)
  } catch {
    return PORTUGAL_TOURS
  }
}

export async function getTour(slug: string) {
  return (await getTours()).find((t) => t.slug === slug)
}

/** Links that once carried a tour's id, before the plain one was free. */
export async function getMovedTour(slug: string) {
  return (await getTours()).find((t) => `${t.slug}-${t.id}` === slug)
}

/** Whether tours share this link and none of them keeps it. */
export async function isSharedLink(slug: string) {
  return (await getTours()).some((t) => t.slug === `${slug}-${t.id}`)
}

/** One tour per name: the ones search engines should list. */
export async function getListedTours() {
  return (await getTours()).filter((t) => t.sameAs === null)
}

export async function getTourList(): Promise<TourSummary[]> {
  return (await getTours()).map(toSummary)
}

export const toSummary = ({ id, slug, sameAs, title, city, startsIn, category, duration, hours, price, currency, rating, reviews, isPrivate, featured, images, tripadvisor }: Tour): TourSummary => ({
  id, slug, sameAs, title, city, startsIn, category, duration, hours, price, currency, rating, reviews, isPrivate, featured, image: images[0], hostRated: tripadvisor?.host ?? false,
})

/** Reviews of this tour. Those of everything its host runs say less about it, so they count for a tenth. */
export const proof = (t: Pick<TourSummary, "reviews" | "hostRated">) => (t.hostRated ? t.reviews / 10 : t.reviews)

/** Tours starred in Tour Hub, then the most reviewed, taking turns between cities and categories for variety. */
export async function getFeaturedTours(count = 6) {
  const tours = await getTourList()
  const picked = tours.filter((t) => t.featured).slice(0, count)
  const rest = tours.filter((t) => !t.featured && t.sameAs === null).sort((a, b) => proof(b) - proof(a))
  const groups = new Set(picked.map((t) => t.city + t.category))
  for (const t of rest) {
    if (picked.length >= count) break
    if (groups.has(t.city + t.category)) continue
    groups.add(t.city + t.category)
    picked.push(t)
  }
  for (const t of rest) {
    if (picked.length >= count) break
    if (!picked.includes(t)) picked.push(t)
  }
  return picked
}

/** Most reviewed tours with a Tripadvisor page of their own, at most two of a kind per city. */
export async function getTopRated(count = 4) {
  const rated = (await getTours())
    .filter((t) => t.rating && t.rating >= 4.5 && t.reviews >= 20)
    .sort((a, b) => b.reviews - a.reviews)
  const picked: Tour[] = []
  for (const t of rated) {
    if (picked.filter((p) => p.city === t.city && p.category === t.category).length < 2) picked.push(t)
    if (picked.length === count) break
  }
  return picked
}
