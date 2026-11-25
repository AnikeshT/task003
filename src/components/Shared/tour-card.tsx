import Image from "next/image"
import Link from "next/link"
import { Price } from "./Price"
import { cities, type TourSummary } from "@/data/tours"
import { cn } from "@/lib/utils"
import { Stop } from "@/components/Shared/stop"

export function TourCard({
  tour,
  className,
  sizes = "(min-width: 1024px) 60vw, (min-width: 640px) 90vw, 180vw",
  priority,
}: {
  tour: TourSummary
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <Link href={`/tours/${tour.slug}`} className={cn("group block", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-pearl-300">
        <Image
          quality={88}
          src={tour.image}
          alt={tour.title}
          aria-hidden
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1.6s] ease-(--ease-out-expo) group-hover:scale-[1.04]"
        />
        <span className="absolute inset-3 border border-pearl-50/0 transition-colors duration-500 group-hover:border-pearl-50/70" />
      </div>
      <div className="mt-6 text-center">
        <p className="label text-gold-700">{cities[tour.city].name}</p>
        <Stop />
        <h3 className="display-sm mt-1.5">{tour.title}</h3>
        <Stop after={tour.title} />
        <p className="mt-3 text-ink-500">
          {[tour.duration, tour.isPrivate && "private"].filter(Boolean).join(", ")}
        </p>
        <Stop />
        {tour.price !== null && <p className="mt-1">From <Price amount={tour.price} currency={tour.currency} /></p>}
        <Stop />
      </div>
    </Link>
  )
}
