import { Reveal } from "@/components/Shared/Motion"
import { Stop } from "@/components/Shared/stop"
import { Wine, Sparkles } from "lucide-react"

export function Welcome() {
  return (
    <section className="bg-pearl-50 py-24 md:py-32 border-b border-border/80">
      <div className="container-x text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-pearl-100 px-4 py-1.5 text-xs text-wine-700 mb-6">
            <Wine className="size-3.5 text-gold-500" />
            <span className="font-sans font-medium uppercase tracking-widest">The Mediterranean Terroir Guild</span>
            <Sparkles className="size-3 text-gold-500" />
          </div>
          <p className="font-serif italic text-[clamp(2.2rem,3.8vw,3.5rem)] leading-[1.25] text-wine-900 tracking-tight">
            “In vino veritas, in terroire vita.”
          </p>
          <Stop />
          <p className="display-sm mx-auto mt-6 max-w-2xl text-wine-900">
            At the table and over the glass, true fellowship is born. Across Barcelona, Santorini, Sicily, and the Mediterranean, food and wine are the living architecture of human connection.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-ink-500 leading-relaxed">
            You will sit with winemakers whose families have pruned volcanic basket vines on Santorini, chalk cava caves in Catalonia, and black basalt terraces on Mount Etna for generations. Our part is to open those cellar doors with complete transparency before you reserve.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
