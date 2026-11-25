import Link from "next/link"
import { SectionHeading } from "@/components/Shared/section-heading"
import { TourCard } from "@/components/Shared/tour-card"
import { categories, cities, type City, type TourSummary } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

export function TourList({ city, list }: { city: City; list: TourSummary[] }) {
  const c = cities[city]
  const usedCategories = [...new Set(list.map((t) => t.category))]

  return (
    <section className="bg-pearl-100 py-28 md:py-40">
      <div className="container-x">
        <SectionHeading title={`${list.length} tours in ${c.name}`} />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {usedCategories.map((cat) => (
            <Link
              key={cat}
              href={`/tours?city=${city}&category=${cat}`}
              className="inline-flex min-h-11 items-center border border-border px-5 transition-colors hover:border-wine-700"
            >
              {categories[cat].name}
              <Stop />
            </Link>
          ))}
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
