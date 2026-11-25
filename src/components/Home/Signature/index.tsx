import { ButtonLink } from "@/components/Shared/button-link"
import { Reveal } from "@/components/Shared/Motion"
import { SectionHeading } from "@/components/Shared/section-heading"
import { TourCard } from "@/components/Shared/tour-card"
import { getFeaturedTours } from "@/lib/tour-hub"
import { TourMenu } from "./tour-menu"
import { Stop } from "@/components/Shared/stop"

/** Large screens read it like a menu; small screens swipe through cards. */
export async function Signature() {
  const featuredTours = await getFeaturedTours()

  return (
    <section className="bg-pearl-100 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading title="Six expeditions to start with">
          Our premier wine and food terroir journeys across the Douro, Porto, Alentejo, and Lisbon.
        </SectionHeading>
        <Reveal className="mt-20 hidden lg:block">
          <TourMenu tours={featuredTours} />
        </Reveal>
      </div>
      <ul className="no-scrollbar relative mt-14 flex snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 sm:scroll-px-7 sm:px-7 lg:hidden">
        {featuredTours.map((t) => (
          <li key={t.slug} className="w-[78vw] shrink-0 snap-start sm:w-[44vw]">
            <TourCard tour={t} sizes="(min-width: 640px) 80vw, 140vw" />
          </li>
        ))}
      </ul>
      <div className="container-x mt-16 text-center">
        <ButtonLink href="/tours">See all tours</ButtonLink>
        <Stop />
      </div>
    </section>
  )
}
