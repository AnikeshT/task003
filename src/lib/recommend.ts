import { categories, type Category, type City, type TourSummary } from "@/data/tours"

export type Answers = {
  where?: City | "all" | "both"
  love?: Category[] // empty means "surprise me"
  time?: "half" | "full" | "days" | "any"
  group?: "private" | "shared" | "any"
  spend?: "low" | "mid" | "high" | "any"
}

export type Pick = { tour: TourSummary; reasons: string[]; misses: string[] }

/** Starting prices that split the three budgets, in the tours' own currency. */
export type Spend = { low: number; high: number }
export const SPEND: Spend = { low: 50, high: 150 }

/** The same two prices, moved to the nearest round number in the visitor's currency: ₹5,100 rather than ₹5,082. */
export function spendIn(rate: number): Spend {
  const round = (amount: number) => Number((amount * rate).toPrecision(2)) / rate
  return { low: round(SPEND.low), high: round(SPEND.high) }
}

/** How prices read and split for this visitor. */
export type Money = { spend: Spend; money: (amount: number, currency: string) => string }

const COUNT = 7

const timeOf = (hours: number) => (hours <= 6 ? "half" : hours <= 24 ? "full" : "days")
const spendOf = (price: number, spend: Spend) => (price < spend.low ? "low" : price <= spend.high ? "mid" : "high")
const order = { half: 0, full: 1, days: 2, low: 0, mid: 1, high: 2 }

/** What the tour doesn't share with the answers, weighted by how much it matters. */
function compare(tour: TourSummary, a: Answers, spend: Spend) {
  const misses: { text: string; weight: number }[] = []
  if (a.love?.length && !a.love.includes(tour.category))
    misses.push({ text: `${categories[tour.category].name} instead`, weight: 4 })
  if (a.time && a.time !== "any" && timeOf(tour.hours) !== a.time)
    misses.push({ text: order[timeOf(tour.hours)] > order[a.time] ? "Longer than you asked" : "Shorter than you asked", weight: 3 })
  if (a.group === "private" && !tour.isPrivate) misses.push({ text: "May be shared with others", weight: 2 })
  if (a.group === "shared" && tour.isPrivate) misses.push({ text: "Private tour", weight: 2 })
  if (a.spend && a.spend !== "any" && tour.price !== null && spendOf(tour.price, spend) !== a.spend)
    misses.push(
      order[spendOf(tour.price, spend)] > order[a.spend]
        ? { text: "Above your budget", weight: 2 }
        : { text: "Costs less than you asked", weight: 1 }
    )
  return misses
}

/** From 0 to about 1.5. A rating for everything a host runs counts for half. */
function quality(t: TourSummary) {
  const reviews = t.rating ? (Math.log10(t.reviews + 1) / 4) * (t.rating / 5) * (t.hostRated ? 0.5 : 1) : 0
  return reviews + (t.featured ? 0.5 : 0)
}

const words = (title: string) => new Set(title.toLowerCase().match(/[a-z]{3,}/g) ?? [])
function alike(a: TourSummary, b: TourSummary) {
  if (a.image === b.image) return true
  const x = words(a.title)
  const y = words(b.title)
  const shared = [...x].filter((w) => y.has(w)).length
  return shared / Math.min(x.size, y.size) > 0.65
}

function reasonsFor(t: TourSummary, a: Answers, { spend, money }: Money) {
  return [
    `${categories[t.category].name} tour`,
    t.duration,
    t.isPrivate && "Private, just your group",
    t.price !== null && `From ${money(t.price, t.currency)}${a.spend && a.spend !== "any" && spendOf(t.price, spend) === a.spend ? ", within your budget" : ""}`,
    t.rating && `${t.hostRated ? "Host rated" : "Rated"} ${t.rating.toFixed(1)} from ${t.reviews.toLocaleString("en-US")} reviews`,
  ].filter((s): s is string => Boolean(s))
}

/** The best tours for these answers: full matches first, then the closest, without near-identical tours side by side. */
export function recommend(tours: TourSummary[], a: Answers, prices: Money) {
  const left = tours
    .filter((t) => a.where === "both" || a.where === "all" || !a.where || (t.city as string) === a.where)
    .map((tour) => {
      const misses = compare(tour, a, prices.spend)
      return { tour, misses, score: quality(tour) - misses.reduce((n, m) => n + m.weight, 0) }
    })

  const picks: Pick[] = []
  while (picks.length < COUNT && left.length) {
    const value = (c: (typeof left)[number]) => {
      const same = picks.filter((p) => p.tour.category === c.tour.category && p.tour.city === c.tour.city).length
      const twin = picks.some((p) => alike(p.tour, c.tour))
      return (c.misses.length ? -100 : 0) + c.score - same * 0.4 - (twin ? 3 : 0)
    }
    const best = left.reduce((x, y) => (value(y) > value(x) ? y : x))
    left.splice(left.indexOf(best), 1)
    picks.push({ tour: best.tour, reasons: reasonsFor(best.tour, a, prices), misses: best.misses.map((m) => m.text) })
  }

  const here = new Set(tours.filter((t) => a.where === "both" || a.where === "all" || (t.city as string) === a.where).map((t) => t.category))
  return { picks, absent: (a.love ?? []).filter((c) => !here.has(c)) }
}
