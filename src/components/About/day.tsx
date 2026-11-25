import { Lattice, Star } from "@/components/Shared/Ornament"
import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

const day = [
  { time: "Sunrise", text: "Balloons lift over the desert, and the first safaris set out before the heat." },
  { time: "Morning", text: "Old Dubai on foot: wind towers, the creek and the souks of Deira." },
  { time: "Afternoon", text: "Abu Dhabi, for the Grand Mosque, Qasr Al Watan and the dome of the Louvre." },
  { time: "Sunset", text: "Red dunes, camels and a stop on a ridge to watch the sun go down." },
  { time: "Night", text: "Dinner and fire shows at a desert camp, or a slow cruise past the lights of the city." },
]

export function Day() {
  return (
    <section className="relative isolate overflow-hidden bg-wine-900 py-24 text-pearl-50 md:py-36">
      <Lattice className="-z-10 text-gold-300/8" size={140} />
      <div className="container-x">
        <SectionHeading title="A day in the Emirates" tone="dark" />
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
