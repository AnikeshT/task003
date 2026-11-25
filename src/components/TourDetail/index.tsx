import { JsonLd } from "@/components/Shared/json-ld"
import { Reveal } from "@/components/Shared/Motion"
import { PageHero } from "@/components/Shared/PageHero"
import { EssentialCards } from "@/components/Shared/TripEssentials/essential-cards"
import { cities, type Tour } from "@/data/tours"
import { graph, trip } from "@/lib/seo/schema"
import { BookingCard } from "./booking-card"
import { Compare } from "./compare"
import { Facts } from "./facts"
import { Gallery } from "./Gallery"
import { Inclusions } from "./inclusions"
import { MobileBookBar } from "./mobile-book-bar"
import { Overview } from "./overview"
import { Related } from "./related"
import { Rating, TripadvisorLink } from "./reviews"
import { Stop } from "@/components/Shared/stop"

export function TourDetail({ tour }: { tour: Tour }) {
  const city = cities[tour.city]

  return (
    <>
      <JsonLd data={graph(trip(tour))} />
      <PageHero
        image={tour.images[0]}
        alt={tour.title}
        title={tour.title}
        intro={tour.summary}
        meta={
          tour.rating !== null && (
            <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <Rating tour={tour} className="size-3.5" />
              <TripadvisorLink tour={tour} />
            </span>
          )
        }
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/tours", label: "Tours" },
          { href: `/destinations/${tour.city}`, label: city.name },
        ]}
      />

      <section className="bg-pearl-100 pt-14 pb-24 md:pt-20 md:pb-32">
        <div className="container-x">
          <Facts tour={tour} />

          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="min-w-0 lg:col-span-7 xl:col-span-8">
              <Reveal>
                <Gallery images={tour.images} title={tour.title} />
              </Reveal>

              <Overview tour={tour} />
              <Inclusions tour={tour} />
              <Compare tour={tour} />
              <div className="mt-16 grid gap-6 border-t border-border pt-12 xl:grid-cols-[170px_1fr] xl:gap-10">
                <h2 className="display-sm self-start text-wine-700">Before you fly</h2>
                <Stop />
                <EssentialCards compact />
              </div>
            </div>

            <aside className="lg:col-span-5 xl:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
                <BookingCard tour={tour} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Related tour={tour} />
      <MobileBookBar tour={{ id: tour.id, bookingUrl: tour.bookingUrl, price: tour.price, currency: tour.currency }} />
    </>
  )
}
