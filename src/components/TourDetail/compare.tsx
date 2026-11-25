import Link from "next/link"
import { Price } from "@/components/Shared/Price"
import { categories, cities, type Tour } from "@/data/tours"
import { getListedTours } from "@/lib/tour-hub"
import { Stop } from "@/components/Shared/stop"

const ENOUGH = 4
const rowClass = "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-border py-4"
const ordinal = (n: number) => {
  const end = n % 100 > 10 && n % 100 < 14 ? "th" : (["th", "st", "nd", "rd"][n % 10] ?? "th")
  return `${n}${end}`
}
const middle = (sorted: number[]) => sorted[Math.floor((sorted.length - 1) / 2)]

/** Where this tour sits among the others of its kind, worked out from the prices and lengths we list. */
export async function Compare({ tour }: { tour: Tour }) {
  if (tour.price === null) return null
  const peers = (await getListedTours())
    .filter((t) => t.city === tour.city && t.category === tour.category && t.currency === tour.currency && t.title !== tour.title)
    .filter((t): t is Tour & { price: number } => t.price !== null)
    .sort((a, b) => a.price - b.price)
  if (peers.length < ENOUGH) return null

  const { price } = tour
  const place = peers.filter((t) => t.price < price).length + 1
  const rank = place === 1 ? "lowest" : place === peers.length + 1 ? "highest" : `${ordinal(place)} lowest`
  const cheaper = peers.findLast((t) => t.price < price)
  const dearer = peers.find((t) => t.price > price)
  const other = peers.find((t) => t.isPrivate !== tour.isPrivate && t !== cheaper && t !== dearer)
  const rows = [
    { label: "Next one down in price", tour: cheaper },
    { label: "Next one up in price", tour: dearer },
    { label: tour.isPrivate ? "Lowest price without a private car" : "Lowest price for a private tour", tour: other },
  ].filter((r): r is { label: string; tour: Tour & { price: number } } => r.tour !== undefined)

  return (
    <div className="mt-16 grid gap-6 border-t border-border pt-12 xl:grid-cols-[170px_1fr] xl:gap-10">
      <h2 className="display-sm self-start text-wine-700">How it compares</h2>
      <Stop />
      <div>
        <p className="lead text-ink-500">
          Of the {peers.length + 1} {categories[tour.category].name.toLowerCase()} tours we list in {cities[tour.city].name}, this has
          the {rank} starting price. Half of the others start at <Price amount={middle(peers.map((t) => t.price))} currency={tour.currency} /> or
          less. Some prices are per person and some per group or car, so check which on the booking page.{" "}
        </p>
        <ul className="mt-6 border-t border-border">
          {rows.map((r) => (
            <li key={r.label} className={rowClass}>
              <span className="min-w-0">
                <span className="label block text-ink-500">{r.label}<Stop /></span>
                <Link href={`/tours/${r.tour.slug}`} className="link-underline text-wine-700">
                  {r.tour.title}
                </Link>
                <Stop after={r.tour.title} />
              </span>
              <span className="text-ink-500">
                {r.tour.duration && `${r.tour.duration}, `}from <Price amount={r.tour.price} currency={r.tour.currency} />
                <Stop />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
