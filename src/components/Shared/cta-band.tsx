import Image from "next/image"
import { ButtonLink } from "@/components/Shared/button-link"
import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-wine-950 text-pearl-50">
      <Image
        quality={90}
        src="/images/barcelona-vineyard.jpg"
        alt="Sunlit Mediterranean vineyard at golden hour"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center"
      />
      {/* Rich scrim so text is always legible */}
      <div className="absolute inset-0 -z-10 bg-wine-950/75" />
      {/* Warm amber glow from bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
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
