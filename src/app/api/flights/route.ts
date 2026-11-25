import { kiwiUrl } from "@/lib/flights"
import { countryOf } from "@/lib/currency"

/** Sends the visitor to Kiwi.com with their country filled in, through our affiliate link. */
export function GET(request: Request) {
  return new Response(null, {
    status: 302,
    // Never cached: the answer depends on where they are, and each click has to reach the affiliate network.
    headers: { Location: kiwiUrl(countryOf(request.headers)), "Cache-Control": "no-store" },
  })
}
