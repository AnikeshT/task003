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
    <section aria-label="Destinations" className="flex flex-col bg-wine-950 text-pearl-50 md:h-[92svh] md:min-h-[640px] md:flex-row">
      {order.map((key) => {
        const c = cities[key]
        return (
          <Link
            key={key}
            href={`/destinations/${key}`}
            className="group relative isolate flex min-h-[75svh] flex-1 flex-col items-center justify-end overflow-hidden px-6 pb-14 text-center outline-offset-[-6px] transition-[flex-grow] duration-1000 ease-(--ease-out-expo) md:min-h-0 md:pb-20 md:hover:flex-[1.4] md:focus-visible:flex-[1.4]"
          >
            <Image
              quality={90}
              src={c.image}
              alt={c.imageAlt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="-z-10 object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Deep gradient scrim for crisp text contrast */}
            <span className="absolute inset-0 -z-10 bg-linear-to-t from-wine-950 via-wine-950/70 to-wine-950/25" />
            
            <span className="font-serif italic text-xl tracking-wider text-gold-300 md:text-2xl drop-shadow-sm">
              {c.portuguese}
            </span>
            <Stop />
            
            <h3 className="font-serif text-[clamp(1.75rem,2.4vw,2.5rem)] font-normal tracking-tight text-pearl-50 leading-tight mt-2 px-2 max-w-[16ch] text-balance drop-shadow-md">
              {c.name}
            </h3>
            <Stop />
            
            <p className="mt-3 text-sm text-pearl-100/90 max-w-[28ch] line-clamp-2 leading-relaxed drop-shadow-sm">
              {c.tagline}
            </p>
            <Stop />
            
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-500/50 bg-wine-900/75 px-5 py-2 text-xs font-semibold tracking-wider text-gold-300 uppercase backdrop-blur-md transition-all duration-300 group-hover:border-gold-300 group-hover:bg-wine-900 group-hover:scale-105">
              <span>See {tours.filter((t) => t.city === key).length} expeditions</span>
              <span className="text-gold-300">&rarr;</span>
            </span>
            <Stop />
          </Link>
        )
      })}
    </section>
  )
}
