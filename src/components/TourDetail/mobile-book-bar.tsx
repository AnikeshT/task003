"use client"

import { useEffect, useState } from "react"
import { Price } from "@/components/Shared/Price"
import type { Tour } from "@/data/tours"
import { cn } from "@/lib/utils"
import { BookLink } from "./book-link"
import { Stop } from "@/components/Shared/stop"

export function MobileBookBar({ tour }: { tour: Pick<Tour, "id" | "bookingUrl" | "price" | "currency"> }) {
  const [hide, setHide] = useState(false)
  useEffect(() => {
    const targets = [document.getElementById("book"), document.querySelector("footer")].filter(Boolean) as Element[]
    const seen = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)))
      setHide(seen.size > 0)
    })
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [])
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-pearl-50 transition-transform duration-500 ease-(--ease-out-expo) lg:hidden",
        hide && "translate-y-full"
      )}
    >
      <div className="container-x flex items-center justify-between gap-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        {tour.price !== null && (
          <div>
            <p className="label text-ink-500">From </p>
            <p className="font-serif text-2xl leading-none"><Price amount={tour.price} currency={tour.currency} /></p>
            <Stop />
          </div>
        )}
        <BookLink tour={tour} className="min-h-12 px-6 text-base" />
      </div>
    </div>
  )
}
