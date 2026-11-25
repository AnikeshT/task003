import Image from "next/image"
import Link from "next/link"
import { cities, type City } from "@/data/tours"
import { getTourList } from "@/lib/tour-hub"
import { Stop } from "@/components/Shared/stop"

const order: City[] = ["barcelona", "santorini", "sicily"]

/** The flagship terroir territories as an expansive responsive polyptych. */
export async function Cities() {
  const tours = await getTourList()

  return (
    <section aria-label="Destinations" className="flex flex-col bg-wine-950 text-pearl-50 md:h-[92svh] md:min-h-[600px] md:flex-row">
      {order.map((key) => {
        const c = cities[key]
        return (
          <Link
            key={key}
            href={`/destinations/${key}`}
            className="group relative isolate flex min-h-[72svh] flex-1 flex-col items-center justify-end overflow-hidden px-6 pb-14 text-center outline-offset-[-6px] transition-[flex-grow] duration-1000 ease-(--ease-out-expo) md:min-h-0 md:pb-20 md:hover:flex-[1.4] md:focus-visible:flex-[1.4]"
          >
            <Image quality={88} src={c.image} alt={c.imageAlt} fill sizes="(min-width: 768px) 90vw, 170vw" className="-z-10 object-cover" />
            <span className="absolute inset-0 -z-10 bg-linear-to-t from-wine-950/90 via-wine-950/25 to-wine-950/20" />
            <span className="font-serif italic text-2xl tracking-wide text-gold-300 md:text-3xl">
              {c.portuguese}
            </span>
            <Stop />
            <span className="display-xl mt-1 block whitespace-nowrap">{c.name}</span>
            <Stop />
            <span className="lead mt-3 text-pearl-100/85">{c.tagline}</span>
            <Stop />
            <span className="mt-6 border-b border-gold-300/60 pb-1 text-gold-300 transition-colors group-hover:border-gold-300">
              See {tours.filter((t) => t.city === key).length} expeditions
            </span>
            <Stop />
          </Link>
        )
      })}
    </section>
  )
}
