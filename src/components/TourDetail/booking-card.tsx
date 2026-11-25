import Link from "next/link"
import { Info, ShieldCheck } from "lucide-react"
import { Price, PriceNote } from "@/components/Shared/Price"
import type { Tour } from "@/data/tours"
import { BookLink } from "./book-link"
import { Rating, TripadvisorLink } from "./reviews"
import { Stop } from "@/components/Shared/stop"

export function BookingCard({ tour }: { tour: Tour }) {
  const { free, title, fees } = tour.cancellation
  const PolicyIcon = free ? ShieldCheck : Info

  return (
    <div id="book" className="scroll-mt-28 border-t-2 border-wine-700 bg-pearl-50 p-6 md:p-8">
      {tour.price !== null && (
        <div>
          <p className="label text-ink-500">From </p>
          <p className="font-serif text-4xl leading-none tracking-tight"><Price amount={tour.price} currency={tour.currency} /></p>
          <Stop />
          <PriceNote amount={tour.price} currency={tour.currency} className="mt-3 label text-ink-500" />
        </div>
      )}
      {tour.rating !== null && (
        <div className="mt-5 flex flex-col items-start gap-1.5 label">
          <Rating tour={tour} className="size-3 text-gold-500" />
          <TripadvisorLink tour={tour} />
          <Stop />
        </div>
      )}

      <BookLink tour={tour} className="mt-6 w-full" />
      <Stop />
      <p className="mt-4 label text-ink-500">
        {tour.operator && `Run by ${tour.operator}. `}Choose your date and guests on a partner&apos;s booking page. Prices can be per
        person or per group, and we may earn a commission.{" "}
        <Link href="/how-we-work" className="link-underline text-wine-700">
          How we work
        </Link>
        <Stop />
      </p>
      <div className="mt-3 flex items-start gap-2 label text-ink-500">
        <PolicyIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-ink-700" />
        <div>
          <p>{title}<Stop after={title} /></p>
          {fees.map((fee) => <p key={fee} className="mt-1">{fee}<Stop after={fee} /></p>)}
        </div>
      </div>
    </div>
  )
}
