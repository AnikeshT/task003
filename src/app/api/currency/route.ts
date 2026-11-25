import { countryOf, currencyFor } from "@/lib/currency"
import { getRates } from "@/lib/currency/rates"

/** The visitor's currency and today's rates for it. `null` means prices stay in the tour's own currency. */
export async function GET(request: Request) {
  const country = countryOf(request.headers)
  const visitor = await getRates()
    .then((rates) => currencyFor(country, rates))
    .catch((error) => {
      console.error("Exchange rates unavailable", error)
      return null
    })

  // Kept only in the visitor's own browser: the answer depends on where they are.
  return Response.json(visitor, { headers: { "Cache-Control": visitor ? "private, max-age=600" : "no-store" } })
}
