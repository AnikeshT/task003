import { Lattice, Star } from "@/components/Shared/Ornament"
import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

const day = [
  { time: "Sunrise", text: "Early mist rises over terraced slopes as estate harvesters inspect the first morning bunches." },
  { time: "Morning", text: "Subterranean cellar walks: ancient chalk caves in Penedès and volcanic basalt canavas in Santorini." },
  { time: "Afternoon", text: "Master sommelier vertical tastings paired with artisan cheeses, olive oils, and fresh local catches." },
  { time: "Sunset", text: "Golden hour cliffside toasts overlooking the Aegean caldera or the rolling slopes of Mount Etna." },
  { time: "Night", text: "Intimate chef-table feasts in candlelit stone bodegas with rare vintage reserves and dessert Vinsanto." },
]

export function Day() {
  return (
    <section className="relative isolate overflow-hidden bg-wine-900 py-24 text-pearl-50 md:py-36">
      <Lattice className="-z-10 text-gold-300/8" size={140} />
      <div className="container-x">
        <SectionHeading title="A Day in the Vineyards" tone="dark" />
        <ol className="relative mx-auto mt-16 max-w-2xl md:mt-20">
          {day.map((t) => (
            <li key={t.time} className="flex flex-col items-center pb-14 text-center last:pb-0">
              <Star className="size-4 text-gold-300" />
              <span className="mt-4 font-serif text-4xl text-gold-300">{t.time}<Stop /></span>
              <span className="lead mt-2 max-w-md text-pearl-100/85">{t.text} </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
