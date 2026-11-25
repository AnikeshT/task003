import Image from "next/image"
import { ButtonLink } from "@/components/Shared/button-link"
import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-wine-950 text-pearl-50">
      <Image
        quality={88}
        src="/images/burj-al-arab-night.jpg"
        alt="The Burj Al Arab at night beyond a palm-lined pool"
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-wine-950/65" />
      <div className="container-x py-32 md:py-48">
        <SectionHeading title="Not sure where to start?" tone="dark">
          Answer five short questions about what you enjoy and how long you have, and we&apos;ll suggest the tours that suit you
          best.
        </SectionHeading>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/plan" variant="gold">
            Plan a trip
          </ButtonLink>
          <Stop />
          <ButtonLink href="/tours" variant="line">
            Browse tours
          </ButtonLink>
          <Stop />
        </div>
      </div>
    </section>
  )
}
