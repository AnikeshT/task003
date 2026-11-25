import { ParallaxImage, Reveal, ScrollText } from "@/components/Shared/Motion"
import { cities, type City } from "@/data/tours"
import { cn } from "@/lib/utils"
import { guide } from "./guide-content"
import { Stop } from "@/components/Shared/stop"

export function Guide({ city }: { city: City }) {
  return (
    <section className="bg-pearl-100 pt-28 md:pt-40">
      <div className="container-x">
        <ScrollText className="display-md mx-auto max-w-4xl text-center" text={cities[city].intro} />
      </div>
      <div className="mt-24 md:mt-36">
        {guide[city].map((g, i) => (
          <div key={g.title} className="grid md:min-h-[78svh] md:grid-cols-2">
            <ParallaxImage
              src={g.image}
              alt={g.alt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={cn("aspect-[4/3] md:aspect-auto", i % 2 === 1 && "md:order-2")}
            />
            <Reveal className="flex flex-col items-center justify-center px-6 py-16 text-center md:px-16">
              <h2 className="display-lg max-w-md">{g.title}</h2>
              <Stop />
              <p className="lead mt-5 max-w-md text-ink-500">{g.text} </p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
