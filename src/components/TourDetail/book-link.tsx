"use client"

import type { Tour } from "@/data/tours"
import { trackBookClick } from "@/lib/analytics"
import { cn } from "@/lib/utils"

/** Opens the tour's booking page. Its link already carries this website's tracking code. */
export function BookLink({ tour, className }: { tour: Pick<Tour, "id" | "bookingUrl">; className?: string }) {
  return (
    <a
      href={tour.bookingUrl}
      target="_blank"
      rel="noopener sponsored"
      onClick={() => trackBookClick(tour.id)}
      className={cn("btn btn-wine", className)}
    >
      Book now
    </a>
  )
}
