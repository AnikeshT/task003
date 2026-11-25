import Image from "next/image"
import { ButtonLink } from "@/components/Shared/button-link"
import { Reveal } from "@/components/Shared/Motion"
import { Stop } from "@/components/Shared/stop"

export function Dusk() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-wine-950 pt-24 pb-40 text-pearl-50">
      <Image
        quality={88}
        src="/videos/alentejo.jpg"
        alt="Golden evening light over Portuguese vineyards and hills"
        fill
        sizes="(min-width: 768px) 100vw, 220vw"
        className="-z-10 object-cover object-[46%_70%]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-wine-700/80 via-wine-600/65 to-wine-950/30 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-wine-950/20" />
      <Reveal className="container-x text-center">
        <p className="display-md mx-auto max-w-3xl">
          When the golden hour touches the Douro, the schist stone remembers centuries of sun.
        </p>
        <ButtonLink href="/destinations/douro-valley" variant="gold" className="mt-10">
          Explore Douro Valley tours
        </ButtonLink>
        <Stop />
      </Reveal>
    </section>
  )
}
