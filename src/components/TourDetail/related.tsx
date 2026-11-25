import { Reveal } from "@/components/Shared/Motion"
import { TourCard } from "@/components/Shared/tour-card"
import { SectionHeading } from "@/components/Shared/section-heading"
import type { Tour } from "@/data/tours"
import { getTourList } from "@/lib/tour-hub"

export async function Related({ tour }: { tour: Tour }) {
  const related = (await getTourList())
    .filter((t) => t.slug !== tour.slug && (t.category === tour.category || t.city === tour.city))
    .sort((a, b) => Number(b.category === tour.category) - Number(a.category === tour.category) || b.reviews - a.reviews)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="bg-pearl-100 pb-24 md:pb-32">
      <div className="container-x border-t border-border pt-24 md:pt-32">
        <SectionHeading title="You might also like" />
        <div className="mt-14 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((t, i) => (
            <Reveal key={t.slug} delay={i * 0.08} className={i === 2 ? "sm:hidden lg:block" : undefined}>
              <TourCard tour={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
