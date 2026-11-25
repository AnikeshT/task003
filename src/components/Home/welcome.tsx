import { Reveal } from "@/components/Shared/Motion"
import { Stop } from "@/components/Shared/stop"

export function Welcome() {
  return (
    <section className="bg-pearl-100 py-24 md:py-32">
      <div className="container-x text-center">
        <Reveal>
          <p className="font-serif italic text-[clamp(2.2rem,3.8vw,3.5rem)] leading-[1.3] text-wine-900 tracking-tight">
            “In vino veritas, in terroire vita.”
          </p>
          <Stop />
          <p className="display-sm mx-auto mt-5 max-w-2xl">
            At the table and over the glass, true fellowship is born. Across Barcelona, Santorini, Sicily, and the Mediterranean, food and wine are the living poetry of civilization.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-ink-500">
            You will sit with winemakers whose families have tended volcanic basket vines on Santorini, chalk cava caves in Catalonia, and black basalt terraces on Mount Etna for generations. Our part is to open those cellar doors with complete transparency before you reserve.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
