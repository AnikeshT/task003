import type { Category, City, Tour } from "@/data/tours"
import { correct, correctTitle, NOT_REALLY_INCLUDED } from "./corrections"

/** One tour as Tour Hub's feed sends it. */
export type HubTour = {
  id: string
  title: string
  slug: string
  destination: string | null
  price: number | null
  currency: string
  durationMinutes: number | null
  rating: number | null
  reviewCount: number | null
  imageUrl: string | null
  summary: string | null
  featured: boolean
  bookingUrl: string | null
  details: {
    description: string | null
    images: string[]
    highlights: string[]
    included: string[]
    notIncluded: string[]
    languages: string[]
    meetingPoint: string | null
    cancellation: { free?: boolean; title?: string | null; text?: string | null } | null
    reviews: { url?: string | null } | null
    operator: string | null
  }
}

const MAX_PHOTOS = 12
/** Photo hosts allowed in next.config.ts. */
const photo = (u: string | null) => (u && /^https:\/\/bokun\.s3\.amazonaws\.com\//.test(u) ? u : null)

const ABU_DHABI =
  /abu ?dhabi|al ain\b|sheikh zayed (grand )?mosque|grand mosque|qasr al watan|louvre|baps|ferrari world|warner bro|sea ?world|yas island|emirates palace|liwa/i

/**
 * Where a tour takes you. Operators list some Abu Dhabi tours under Dubai because the pickup is there, so the
 * title decides: "Abu Dhabi City Tour from Dubai" is Abu Dhabi, "Dubai City Tour from Abu Dhabi" is Dubai.
 */
export function cityOf(title: string, destination: string | null): City {
  const t = (title + " " + (destination ?? "")).toLowerCase()
  if (t.includes("barcelona") || t.includes("catalunya") || t.includes("pened") || t.includes("priorat")) return "barcelona"
  if (t.includes("santorini") || t.includes("cyclades") || t.includes("assyrtiko") || t.includes("oia")) return "santorini"
  if (t.includes("sicily") || t.includes("etna") || t.includes("catania") || t.includes("taormina")) return "sicily"
  if (t.includes("douro") || t.includes("quinta") || t.includes("régua") || t.includes("pinhão")) return "douro-valley"
  return "porto"
}

const CATEGORY_RULES: [Category, RegExp][] = [
  ["gourmet-pairing", /gourmet|tapas|food|pairing|michelin|feast|petiscos/i],
  ["volcanic-terroir", /volcan|santorini|caldera|assyrtiko|etna|kouloura/i],
  ["cellar-reserve", /cellar|reserve|cava|barrel|vintage|port\b|quinta|lodge/i],
  ["harvest-masterclass", /harvest|masterclass|crush|treading|prun/i],
  ["vineyard-escape", /escape|estate|walk|hike|trek|country|hills/i],
]
const categoryOf = (title: string): Category => CATEGORY_RULES.find(([, match]) => match.test(title))?.[0] ?? "cellar-reserve"

const plural = (n: number, unit: string) => `${n} ${unit}${n === 1 ? "" : "s"}`

/** The title wins when it names days: operators give a 2-day tour the hours of its first day. */
function lengthOf(title: string, minutes: number | null): { hours: number; duration: string | null } {
  const days = Number(title.match(/(\d+)[\s-]?(?:days?\b|D\b)/i)?.[1] ?? 0)
  if (days > 1) return { hours: days * 24, duration: plural(days, "day") }
  if (!minutes) return { hours: 0, duration: null }
  const hours = minutes / 60
  if (minutes % 1440 === 0) return { hours, duration: plural(minutes / 1440, "day") }
  if (minutes < 60) return { hours, duration: plural(minutes, "minute") }
  return { hours, duration: plural(Math.round(hours * 10) / 10, "hour") }
}

function tripadvisorOf(url: string | null | undefined): Tour["tripadvisor"] {
  if (!url || !/^https:\/\/www\.tripadvisor\.[a-z.]+\//.test(url)) return null
  return { url, host: !url.includes("/AttractionProductReview") }
}

/** Operators' phone numbers and emails stay out of the copy. */
const CONTACT = /(\+\d[\d\s-]{7,}|\S+@\S+\.\S+|whats ?app)/i

const clean = (s: string) => correct(s.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/[ \t]+/g, " "))
const list = (items: string[]) => [...new Set(items.filter((s) => typeof s === "string").map(clean))].filter((s) => s && !CONTACT.test(s) && !NOT_REALLY_INCLUDED.test(s))
const paragraphs = (s: string) => s.replace(/<br\s*\/?>|<\/p>/gi, "\n").split(/[\r\n]+/).map(clean).filter((p) => p && !CONTACT.test(p))

/** The operator's own policy, fees included, so guests never see "free" without its deadline. */
function cancellationOf(c: HubTour["details"]["cancellation"]): Tour["cancellation"] {
  const title = clean(c?.title ?? "")
  const lines = paragraphs(c?.text ?? "")
  if (c?.free && title) {
    // "Full refund if cancelled…" only repeats a title that already names the deadline.
    const repeated = /up to/i.test(title) ? /^full refund/i : /^full refund on cancellation\.?$/i
    return { free: true, title, fees: lines.filter((l) => !repeated.test(l)) }
  }
  if (lines.length) return { free: false, title: "Cancellation fees apply", fees: lines }
  return { free: false, title: /final|non-?refundable/i.test(title) ? "Non-refundable" : "Check the cancellation terms before you book", fees: [] }
}

/** One or two sentences for the top of the tour page. */
function shorten(s: string, max = 180) {
  if (s.length <= max) return s
  const cut = s.slice(0, max)
  const stop = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("! "))
  return stop > 60 ? cut.slice(0, stop + 1) : `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

function toTour(t: HubTour): Tour | null {
  const d = t.details
  const images = [...new Set([t.imageUrl, ...d.images].map(photo))].filter((u): u is string => u !== null).slice(0, MAX_PHOTOS)
  if (!images.length || !t.bookingUrl?.startsWith("https://")) return null

  const title = correctTitle(clean(t.title))
  const description = paragraphs(d.description ?? "")
  const summary = [t.summary ?? "", ...description].map(clean).find((s) => s.length > 20 && !CONTACT.test(s)) ?? ""
  const included = list(d.included)
  const reviewed = Boolean(t.rating && t.reviewCount)
  const languages = list(d.languages).map((l) => l.replace(/ \(.*\)/, ""))

  return {
    id: t.id,
    slug: t.slug,
    sameAs: null,
    title,
    operator: d.operator ? operatorName(d.operator) : null,
    city: cityOf(title, t.destination),
    startsIn: /abu ?dhabi/i.test(t.destination ?? "") ? "abu-dhabi" : "dubai",
    category: categoryOf(title),
    ...lengthOf(title, t.durationMinutes),
    price: t.price,
    currency: t.currency,
    rating: reviewed ? t.rating : null,
    reviews: reviewed ? t.reviewCount! : 0,
    tripadvisor: reviewed ? tripadvisorOf(d.reviews?.url) : null,
    isPrivate: /private|pvt/i.test(title) && !/shar/i.test(title),
    featured: t.featured,
    pickup: included.some((s) => /pick[\s-]?up|pick (and|&) drop/i.test(s) && !/optional|self/i.test(s)) ? "Pickup included" : null,
    languages: [...new Set(languages)].sort((a, b) => Number(b === "English") - Number(a === "English")),
    images,
    summary: shorten(summary),
    description,
    highlights: list(d.highlights),
    included,
    excluded: list(d.notIncluded),
    meetingPoint: d.meetingPoint ? clean(d.meetingPoint) : null,
    cancellation: cancellationOf(d.cancellation),
    bookingUrl: t.bookingUrl,
  }
}

/** "Desert Trakker  Tourism llc" reads as "Desert Trakker Tourism". */
const operatorName = (s: string) =>
  s
    .replace(/\s*\b(l\.?l\.?c\.?|ltd\.?)\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b[a-z]/g, (c) => c.toUpperCase())
    .replace(/\bAnd\b/g, "and")

/** Which tour keeps the plain link when several share it. Only a change here moves one of these links. */
const LINK_OWNERS = new Map([
  ["dubai-desert-safari-with-bbq-dinner-and-abu-dhabi-city-tour-2-days-tour", "mmiud5gf"],
  ["private-abu-dhabi-city-tour-with-mosque", "wst6nf2d"],
  ["private-red-dune-desert-safari", "89rbgeje"],
])

/** Tours can share a title, and so a link. One keeps the plain link and the others add their id. */
export function toTours(feed: HubTour[]): Tour[] {
  const tours = feed.map(toTour).filter((t): t is Tour => t !== null)
  const twins = Map.groupBy(tours, (t) => t.slug)
  // names as the hub sends them: two operators can look alike once tidied for display
  const operators = new Map(feed.map((t) => [t.id, t.details.operator]))
  const withId = (t: Tour) => `${t.slug}-${t.id}`
  const taken = new Set(tours.map(withId))

  /** The owner named above; otherwise the only tour, or the lowest id of a single operator's. Rivals share no plain link. */
  function ownerOf(slug: string): Tour | undefined {
    const same = twins.get(slug)!
    if (LINK_OWNERS.has(slug)) return same.find((t) => t.id === LINK_OWNERS.get(slug))
    if (taken.has(slug)) return undefined // reads as another tour's link with its id
    if (same.length === 1) return same[0]
    const operator = operators.get(same[0].id)
    if (!operator || same.some((t) => operators.get(t.id) !== operator)) return undefined
    return same.reduce((a, b) => (b.id < a.id ? b : a))
  }
  const owners = new Map([...twins.keys()].map((slug) => [slug, ownerOf(slug)]))

  return tours.map((t) => {
    const owner = owners.get(t.slug)
    if (owner === t) return t
    // an operator's own copies point search engines at the plain link, but never at a rival's tour
    const operator = owner && operators.get(owner.id)
    return { ...t, slug: withId(t), sameAs: operator && operator === operators.get(t.id) ? t.slug : null }
  })
}
