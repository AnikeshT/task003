/** Our Travelpayouts account. Kiwi.com is their programme 3791. */
const MARKER = "808981"
const KIWI_PROGRAMME = "3791"

/**
 * A Kiwi.com search from the visitor's country to the UAE, wrapped in Travelpayouts' custom link so the click is ours.
 * The short link (kiwi.tpx.gr/c0NpZMpG) always opens Spain to Germany and ignores parameters, so it can't be used here.
 * Without a country, Kiwi.com starts from the visitor's nearest city.
 */
export function kiwiUrl(country: string | null) {
  const search = new URL("https://www.kiwi.com/deep")
  if (country && /^[A-Z]{2}$/.test(country) && country !== "AE") search.searchParams.set("origin", country)
  search.searchParams.set("destination", "AE")
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
