"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Price } from "@/components/Shared/Price"
import { cities, type TourSummary } from "@/data/tours"
import { cn } from "@/lib/utils"
import { Stop } from "@/components/Shared/stop"

export function TourMenu({ tours }: { tours: TourSummary[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid grid-cols-12 items-stretch gap-16">
      <div className="relative col-span-5 min-h-[680px] overflow-hidden bg-pearl-300">
        {tours.map((t, i) => (
          <Image
            quality={88}
            key={t.slug}
            src={t.image}
            alt={t.title}
            aria-hidden
            fill
            sizes="80vw"
            className={cn("object-cover transition-opacity duration-1000", i === active ? "opacity-100" : "opacity-0")}
          />
        ))}
      </div>
      <ul className="col-span-7 flex flex-col justify-between">
        {tours.map((t, i) => (
          <li key={t.slug} className="flex flex-1 border-b border-border first:border-t">
            <Link
              href={`/tours/${t.slug}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="flex w-full items-center justify-between gap-8 py-6"
            >
              <span className={cn("transition-transform duration-700 ease-(--ease-out-expo)", i === active && "translate-x-4")}>
                <span className={cn("display-md block transition-colors duration-500", i === active && "text-wine-700")}>{t.title}<Stop after={t.title} /></span>
                <span className="mt-1 block text-ink-500">
                  {[cities[t.city].name, t.duration].filter(Boolean).join(", ")}
                  <Stop />
                </span>
              </span>
              {t.price !== null && <span className="shrink-0 font-serif text-xl text-gold-700"><Price amount={t.price} currency={t.currency} /><Stop /></span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
