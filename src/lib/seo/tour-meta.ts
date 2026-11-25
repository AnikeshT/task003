import { cities, formatPrice, type Tour } from "@/data/tours"

const BRAND = " | Vinho & Terroir"
const MAX_TITLE = 60
const MAX_DESCRIPTION = 158

/** Cuts at the last natural break that fits, never inside a word. */
function cutTitle(title: string, max: number) {
  if (title.length <= max) return title
  const head = title.slice(0, max + 1)
  const breaks = [": ", " | ", " – ", " - ", ", ", " & ", " + ", " with ", " ("].map((b) => head.lastIndexOf(b)).filter((i) => i >= 24)
  const at = breaks.length ? Math.max(...breaks) : head.lastIndexOf(" ")
  return head.slice(0, at).replace(/[\s,:&+|(–-]+$/, "").replace(/\s+(with|and|of|the|in|from|for|to|at)$/i, "")
}

const shorten = (tour: Tour) => cutTitle(tour.title, MAX_TITLE - BRAND.length)

/** A search title under 60 characters. When two tours would read the same, each adds what sets it apart. */
export function tourTitle(tour: Tour, all: Tour[]) {
  const short = shorten(tour)
  const twins = all.filter((t) => t.id !== tour.id && shorten(t) === short)
  if (twins.length === 0) return short + BRAND
  const details = [
    tour.duration,
    tour.price !== null ? `from ${formatPrice(tour.price, tour.currency)}` : null,
    tour.operator,
  ].filter((d): d is string => d !== null)
  const own = details.find((d) =>
    twins.every((t) => ![t.duration, t.price !== null ? `from ${formatPrice(t.price, t.currency)}` : null, t.operator].includes(d))
  )
  return own ? `${cutTitle(tour.title, MAX_TITLE - own.length - 2)}, ${own}` : short + BRAND
}

/** What you get, how long it takes and what it costs, in the tour's own facts. */
export function tourDescription(tour: Tour) {
  const price = tour.price !== null ? ` from ${formatPrice(tour.price, tour.currency)}` : ""
  const lead = `${cutTitle(tour.title, 70)}${price}.`
  const facts = [
    tour.duration && `${tour.duration}${tour.isPrivate ? ", private" : ""} in ${cities[tour.city].name}.`,
    tour.pickup && `${tour.pickup}.`,
    tour.rating !== null && tour.tripadvisor && !tour.tripadvisor.host && `${tour.rating.toFixed(1)} on Tripadvisor (${tour.reviews.toLocaleString("en-US")}).`,
    tour.cancellation.free && "Free cancellation, see terms.",
    tour.operator && `Run by ${tour.operator}.`,
    "See what is included before you book.",
  ].filter((f): f is string => Boolean(f))
  return facts.reduce((text, f) => (text.length + f.length + 1 <= MAX_DESCRIPTION ? `${text} ${f}` : text), lead)
}
