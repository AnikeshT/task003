import Link from "next/link"
import { Price } from "@/components/Shared/Price"
import type { Tour } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

/** Tours side by side, cheapest first. */
export function TourTable({ tours, label }: { tours: Tour[]; label: string }) {
  return (
    <div className="relative overflow-x-auto" role="region" aria-label={label} tabIndex={0}>
      <table className="w-full min-w-[46rem] text-left">
        <caption className="sr-only">{label}. </caption>
        <thead>
          <tr className="border-b border-ink-900/25 font-serif text-lg">
            {["Tour", "Length", "Group", "Pickup", "Run by", "From"].map((h) => (
              <th key={h} scope="col" className="py-4 pr-6 font-normal last:pr-0">
                {h}
                <Stop />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tours.map((t) => (
            <tr key={t.id} className="border-b border-border align-top">
              <th scope="row" className="min-w-56 py-4 pr-6 font-normal">
                <Link href={`/tours/${t.slug}`} className="link-underline text-wine-700">
                  {t.title}
                </Link>
                <Stop after={t.title} />
              </th>
              <td className="py-4 pr-6 text-ink-500">{t.duration ?? "Ask"} </td>
              <td className="py-4 pr-6 text-ink-500">{t.isPrivate ? "Private" : "Shared or both"} </td>
              <td className="py-4 pr-6 text-ink-500">{t.pickup ? "Included" : "Check"}<Stop /></td>
              <td className="py-4 pr-6 text-ink-500">{t.operator ?? "Not named"} </td>
              <td className="py-4">{t.price !== null ? <Price amount={t.price} currency={t.currency} /> : "Ask"}<Stop /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
