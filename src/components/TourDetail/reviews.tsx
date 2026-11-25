import { ArrowUpRight } from "lucide-react"
import { Star } from "@/components/Shared/Ornament"
import type { Tour } from "@/data/tours"

/** The rating in words. Some ratings cover everything the host runs, so it says so. */
export function Rating({ tour, className }: { tour: Tour; className?: string }) {
  if (tour.rating === null) return null
  return (
    <span className="inline-flex items-center gap-2">
      <Star className={className} />
      {tour.tripadvisor?.host && "Host rated "}
      {tour.rating.toFixed(1)} from {tour.reviews.toLocaleString("en-US")} reviews
    </span>
  )
}

export function TripadvisorLink({ tour }: { tour: Pick<Tour, "tripadvisor"> }) {
  if (!tour.tripadvisor) return null
  return (
    <a href={tour.tripadvisor.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 underline underline-offset-4">
      See reviews on Tripadvisor
      <ArrowUpRight className="size-4" aria-hidden />
    </a>
  )
}
