/** Our Travelpayouts account. Kiwi.com is their programme 3791. */
const MARKER = "808981"
const KIWI_PROGRAMME = "3791"

/**
 * Mediterranean gateway airports we route visitors toward.
 * BCN = Barcelona El Prat, JTR = Santorini, CTA = Catania (Sicily), OPO = Porto.
 * Kiwi.com accepts country codes (ES, GR, IT, PT) or IATA airport codes.
 * We pass the visitor's origin country and let the platform pick the cheapest inbound route.
 *
 * Old destination was "AE" (Dubai/DXB) — replaced with "ES" (Spain/BCN) as the
 * primary gateway since Barcelona is the flagship terroir hub.
 */

/** Map visitor origin country → best Mediterranean gateway country to target */
const GATEWAY: Record<string, string> = {
  // If already in a terroir country, send to their nearest wine hub
  ES: "GR", // Spanish travellers → Santorini
  GR: "ES", // Greek travellers → Barcelona
  IT: "PT", // Italian travellers → Porto
  PT: "GR", // Portuguese travellers → Santorini
}

export function kiwiUrl(country: string | null) {
  const search = new URL("https://www.kiwi.com/deep")
  if (country && /^[A-Z]{2}$/.test(country)) {
    search.searchParams.set("origin", country)
    // Route to a different terroir country for variety, default Spain/BCN
    const dest = GATEWAY[country] ?? "ES"
    search.searchParams.set("destination", dest)
  } else {
    // No origin detected — default: search for flights to Spain (Barcelona)
    search.searchParams.set("destination", "ES")
  }
  search.searchParams.set("departure", "anytime")
  search.searchParams.set("return", "anytime")
  search.searchParams.set("pageName", "tilesPage")
  search.searchParams.set("lang", "en")

  const click = new URL("https://c111.travelpayouts.com/click")
  click.searchParams.set("shmarker", MARKER)
  click.searchParams.set("promo_id", KIWI_PROGRAMME)
  click.searchParams.set("source_type", "customlink")
  click.searchParams.set("type", "click")
  click.searchParams.set("custom_url", search.href)
  return click.href
}
