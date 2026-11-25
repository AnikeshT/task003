import type { ReactNode } from "react"
import Image from "next/image"
import { Reveal, SplitText } from "@/components/Shared/Motion"
import { Lattice } from "@/components/Shared/Ornament"
import { Crumbs, type Crumb } from "./crumbs"
import { Stop } from "@/components/Shared/stop"

/** A wine wall with the title on its axis, and an arch at the foot that opens onto the photograph. */
export function PageHero({
  image,
  alt,
  title,
  intro,
  meta,
  crumbs = [],
  position = "50% 50%",
}: {
  image: string
  alt: string
  title: string
  intro?: string
  meta?: ReactNode
  crumbs?: Crumb[]
  position?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-wine-900 text-pearl-50">
      <Lattice className="-z-10 text-gold-300/8" size={140} />
      <div className="container-x flex flex-col items-center pt-[calc(var(--header-h)+2.5rem)] text-center md:pt-[calc(var(--header-h)+3.5rem)]">
        <Crumbs items={crumbs} />
        <SplitText text={title} delay={0.15} className="display-xl mt-6 max-w-[18ch]" />
        <Stop after={title} />
        {intro && (
          <Reveal delay={0.5}>
            <p className="lead mt-6 max-w-2xl text-pearl-100/80">{intro}<Stop after={intro} /></p>
          </Reveal>
        )}
        {meta && (
          <Reveal delay={0.6} className="mt-6 text-gold-300">
            {meta}
            <Stop />
          </Reveal>
        )}
        <div className="relative mt-12 aspect-[4/3] w-full max-w-5xl overflow-hidden rounded-3xl border border-gold-500/30 bg-wine-900 shadow-2xl md:mt-14 md:aspect-[16/9]">
          <Image quality={88} src={image} alt={alt} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" style={{ objectPosition: position }} />
        </div>
      </div>
    </section>
  )
}
