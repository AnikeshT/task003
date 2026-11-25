import { cacheLife } from "next/cache"
import { PEGS, UNRELIABLE } from "./pegs"

/** Units of each currency for one euro, and the day each rate is for. */
export type Rates = Record<string, { rate: number; date: string }>

const API = "https://api.frankfurter.dev/v2/rates?base=EUR"
const DAY = 24 * 60 * 60 * 1000

/** Older than this and a rate is no longer shown: long enough for a weekend with holidays around it. */
const MAX_AGE = 7 * DAY

/**
 * Reference rates from central banks, blended by Frankfurter. They change through the day, so we ask hourly
 * and never use a copy older than 12 hours. Kept in the shared cache, so one answer serves every server.
 */
export async function getRates(): Promise<Rates> {
  "use cache: remote"
  cacheLife({ stale: 300, revalidate: 60 * 60, expire: 12 * 60 * 60 })

  const res = await fetch(API, { signal: AbortSignal.timeout(5000) })
  if (!res.ok) throw new Error(`Frankfurter answered ${res.status}`)
  const rows = (await res.json()) as { date: string; quote: string; rate: number }[]

  const today = new Date()
  const rates: Rates = { EUR: { rate: 1, date: today.toISOString().slice(0, 10) } }
  for (const { quote, rate, date } of rows) {
    const usable = rate > 0 && Number.isFinite(rate) && today.getTime() - Date.parse(date) < MAX_AGE
    if (usable && quote !== "EUR" && !UNRELIABLE.has(quote)) rates[quote] = { rate, date }
  }
  for (const [currency, [anchor, rate]] of Object.entries(PEGS)) {
    if (rates[anchor]) rates[currency] = { rate: rates[anchor].rate * rate, date: rates[anchor].date }
    else delete rates[currency]
  }
  return rates
}
