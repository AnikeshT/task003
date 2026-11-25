import Image from "next/image"
import { ButtonLink } from "@/components/Shared/button-link"
import { Reveal } from "@/components/Shared/Motion"
import { Stop } from "@/components/Shared/stop"

export function Dusk() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-wine-950 pt-24 pb-40 text-pearl-50">
      <Image
        quality={88}
        src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85"
        alt="Golden evening light over Mediterranean vineyards and the Aegean sea"
        fill
        sizes="(min-width: 768px) 100vw, 220vw"
        className="-z-10 object-cover object-[46%_70%]"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-wine-700/80 via-wine-600/65 to-wine-950/30 mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 bg-wine-950/20" />
      <Reveal className="container-x text-center">
        <p className="display-md mx-auto max-w-3xl">
          When dusk descends upon the Mediterranean, ancient vines whisper the secrets of the sun and sea.
        </p>
        <ButtonLink href="/tours" variant="gold" className="mt-10">
          Explore all signature tours
        </ButtonLink>
        <Stop />
      </Reveal>
    </section>
  )
}
