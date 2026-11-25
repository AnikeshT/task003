import type { ReactNode } from "react"
import Image from "next/image"
import { SplitText } from "@/components/Shared/Motion"
import { Crumbs, type Crumb } from "./crumbs"
import { Stop } from "@/components/Shared/stop"

/** Full-bleed variant, for wine terroir territories. */
export function PageHeroFull({
  image,
  alt,
  subtitle,
  arabic,
  title,
  crumbs,
  children,
}: {
  image: string
  alt: string
  subtitle?: string
  arabic?: string
  title: string
  crumbs: Crumb[]
  children?: ReactNode
}) {
  const sub = subtitle || arabic

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-wine-950 text-pearl-50">
      <Image quality={88} src={image} alt={alt} fill priority sizes="(min-width: 768px) 100vw, 220vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-wine-950/70 via-wine-950/25 to-wine-950/90" />
      <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-linear-to-b from-wine-950/85 to-transparent" />
      <div className="container-x pt-(--header-h) pb-12 text-center md:pb-16">
        <Crumbs items={crumbs} />
        {sub && (
          <p className="mt-5 font-serif italic text-2xl tracking-wide text-gold-300 md:text-3xl">
            {sub}
          </p>
        )}
        <Stop />
        <SplitText text={title} delay={0.2} className="display-xl mt-2" />
        <Stop />
        {children}
      </div>
    </section>
  )
}
