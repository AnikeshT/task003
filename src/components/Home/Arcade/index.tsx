import Image from "next/image"
import Link from "next/link"
import { Lattice, Sadu } from "@/components/Shared/Ornament"
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
      <Sadu />
      <div className="relative isolate overflow-hidden py-24 md:py-36">
        <Lattice className="-z-10 text-gold-300/8" size={140} />
        <div className="container-x">
          <SectionHeading title="Five kinds of tour" tone="dark">
            Choose one to see every tour of that kind we list.
          </SectionHeading>
        </div>
        <ul className="no-scrollbar relative mt-16 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 sm:scroll-px-7 sm:px-7 md:mt-20 lg:container-x lg:h-[620px] lg:items-end lg:gap-5 lg:overflow-visible">
          {bays.map(({ key, height, position }) => {
            const c = categories[key]
            const count = tours.filter((t) => t.category === key).length
            return (
              <li key={key} className={cn("w-[66vw] shrink-0 snap-start sm:w-[38vw] lg:w-auto lg:flex-1 lg:shrink", height)}>
                <Link href={`/tours?category=${key}`} className="group flex h-full flex-col text-center">
                  <span className="arch relative block h-[440px] overflow-hidden bg-wine-700 lg:h-auto lg:flex-1">
                    <Image
                      quality={88}
                      src={c.image}
                      alt={c.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 60vw, 160vw"
                      className="object-cover transition-transform duration-[1.8s] ease-(--ease-out-expo) group-hover:scale-[1.06]"
                      style={{ objectPosition: position }}
                    />
                  </span>
                  <span className="display-sm mt-6 block transition-colors duration-500 group-hover:text-gold-300">{c.name}<Stop /></span>
                  <span className="mt-1 block text-pearl-100/65">
                    {count} {count === 1 ? "tour" : "tours"}
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
