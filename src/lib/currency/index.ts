import countryToCurrency from "country-to-currency"
import type { Rates } from "./rates"

/** What a visitor's browser needs: `rates` holds how much one unit of each tour currency is worth to them. */
export type VisitorCurrency = { currency: string; rates: Record<string, number>; date: string }

/** Currencies a tour may be priced in. Tours priced in anything else keep their own price. */
const TOUR_CURRENCIES = ["EUR", "USD", "AED", "GBP"]

/** The visitor's country: from their IP address on Vercel, else the region their browser is set to. */
export function countryOf(headers: Headers) {
  const country = headers.get("x-vercel-ip-country") ?? headers.get("accept-language")?.match(/^[a-z]{2,3}-([A-Z]{2})\b/)?.[1]
  return country?.toUpperCase() ?? null
}

/** Their country's currency, or US dollars where that currency has no rate worth showing. */
export function currencyFor(country: string | null, rates: Rates): VisitorCurrency | null {
  const local = (countryToCurrency as Record<string, string>)[country ?? ""]
  if (!local) return null
  const currency = rates[local] ? local : "USD"
  const to = rates[currency]
  if (!to) return null
  return {
    currency,
    date: to.date,
    rates: Object.fromEntries(
      TOUR_CURRENCIES.filter((from) => rates[from]).map((from) => [from, to.rate / rates[from].rate])
    ),
  }
}
