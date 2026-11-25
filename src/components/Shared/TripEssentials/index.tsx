import { SectionHeading } from "@/components/Shared/section-heading"
import { EssentialCards } from "./essential-cards"

export function TripEssentials() {
  return (
    <section id="essentials" className="scroll-mt-20 bg-pearl-200 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading title="Help with flights and European travel">
          Each tour booking comes with complimentary concierge assistance with flights and Schengen regional travel planning.
        </SectionHeading>
        <EssentialCards className="mx-auto mt-14 max-w-5xl md:mt-20" />
      </div>
    </section>
  )
}
