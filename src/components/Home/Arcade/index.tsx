import Image from "next/image"
import Link from "next/link"
import { Lattice } from "@/components/Shared/Ornament"
import { SectionHeading } from "@/components/Shared/section-heading"
import { categories } from "@/data/tours"
import { getTourList } from "@/lib/tour-hub"
import { cn } from "@/lib/utils"
import { bays } from "./bays"
import { Stop } from "@/components/Shared/stop"

export async function Arcade() {
  const tours = await getTourList()

  return (
    <section className="bg-wine-900 text-pearl-50">
      <div className="relative isolate overflow-hidden py-24 md:py-36">
        <Lattice className="-z-10 text-gold-300/8" size={140} />
        <div className="container-x">
          <SectionHeading title="Terroir Styles & Tasting Flights" tone="dark">
            Explore curated wine expressions and cellar archetypes across our verified Mediterranean cellars.
          </SectionHeading>
        </div>
        <ul className="no-scrollbar relative mt-16 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:scroll-px-7 sm:px-7 md:mt-20 lg:container-x lg:h-[620px] lg:items-end lg:gap-5 lg:overflow-visible">
          {bays.map(({ key, height, position }) => {
            const c = categories[key]
            const count = tours.filter((t) => t.category === key).length
            return (
              <li key={key} className={cn("w-[66vw] shrink-0 snap-start sm:w-[38vw] lg:w-auto lg:flex-1 lg:shrink", height)}>
                <Link href={`/tours?category=${key}`} className="group flex h-full flex-col text-center">
                  <span className="relative block h-[420px] overflow-hidden rounded-2xl border border-gold-500/30 bg-wine-800 shadow-xl transition-all duration-500 group-hover:border-gold-300/80 group-hover:shadow-[0_12px_36px_rgba(202,162,77,0.2)] lg:h-auto lg:flex-1">
                    <Image
                      quality={90}
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 60vw"
                      className="object-cover transition-transform duration-[1.8s] ease-(--ease-out-expo) group-hover:scale-105"
                      style={{ objectPosition: position }}
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-wine-950/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                  </span>
                  <span className="display-sm mt-5 block transition-colors duration-500 group-hover:text-gold-300">{c.name}<Stop /></span>
                  <span className="mt-1 block text-pearl-100/65 text-xs font-sans tracking-wider uppercase">
                    {count} {count === 1 ? "expedition" : "expeditions"}
                    <Stop />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
