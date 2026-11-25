import { Reveal } from "@/components/Shared/Motion"
import { Stop } from "@/components/Shared/stop"

export function Welcome() {
  return (
    <section className="bg-pearl-100 py-24 md:py-32">
      <div className="container-x text-center">
        <Reveal>
          <p className="font-serif italic text-[clamp(2.2rem,3.8vw,3.5rem)] leading-[1.3] text-wine-800 tracking-tight">
            “À mesa e ao copo, conhece-se o amigo.”
          </p>
          <Stop />
          <p className="display-sm mx-auto mt-5 max-w-2xl">
            At the table and over the glass, true fellowship is born. In Portugal, food and wine are not passive pastimes—they are the sacred architecture of human connection.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-ink-500">
            You will sit with winemakers whose families have pruned schist vines and barreled Port wine for four generations. Our part is to open those cellar doors and show you the transparent price, inclusions, and terroir before you reserve.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
