import Link from "next/link"
import { Reveal } from "@/components/Shared/Motion"
import { Star } from "@/components/Shared/Ornament"
import { SectionHeading } from "@/components/Shared/section-heading"
import { TripadvisorLink } from "@/components/TourDetail/reviews"
import { getTopRated } from "@/lib/tour-hub"
import { Stop } from "@/components/Shared/stop"

/** Real Tripadvisor ratings; the reviews themselves are read there. */
export async function Ratings() {
  const tours = await getTopRated()
  if (tours.length === 0) return null

  return (
    <section className="bg-pearl-100 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading title="Rated by guests">Some of our most reviewed tours on Tripadvisor.</SectionHeading>
        <Reveal className="mt-14 md:mt-20">
          <ul className="grid border-t border-border sm:grid-cols-2 sm:border-l lg:grid-cols-4">
            {tours.map((t) => (
              <li key={t.slug} className="flex flex-col items-center border-b border-border px-6 py-10 text-center sm:border-r lg:py-14">
                <Star className="size-4 text-gold-500" />
                <p className="mt-4 font-serif text-6xl leading-none text-wine-700">
                  {t.rating!.toFixed(1)}
                  <span className="sr-only"> out of 5 </span>
                </p>
                <p className="mt-3 text-ink-500">from {t.reviews.toLocaleString("en-US")} reviews<Stop /></p>
                <h3 className="mt-6 font-serif text-xl leading-snug text-balance">
                  <Link href={`/tours/${t.slug}`} className="transition-colors hover:text-wine-700">
                    {t.title}
                  </Link>
                  <Stop after={t.title} />
                </h3>
                <p className="label mt-auto pt-6 text-ink-700">
                  <TripadvisorLink tour={t} />
                  <Stop />
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
