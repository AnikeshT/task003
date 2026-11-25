import { Reveal } from "@/components/Shared/Motion"
import { Star } from "@/components/Shared/Ornament"
import type { Tour } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

export function Overview({ tour }: { tour: Tour }) {
  return (
    <>
      <div className="mt-16 grid gap-6 xl:grid-cols-[170px_1fr] xl:gap-10">
        <h2 className="display-sm self-start text-wine-700">Overview</h2>
        <Stop />
        <div className="space-y-5">
          {tour.description.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className={i === 0 && p.length <= 260 ? "display-sm text-pretty" : "lead text-ink-500"}>{p}<Stop after={p} /></p>
            </Reveal>
          ))}
        </div>
      </div>

      {tour.highlights.length > 0 && (
        <div className="mt-16 grid gap-6 border-t border-border pt-12 xl:grid-cols-[170px_1fr] xl:gap-10">
          <h2 className="display-sm self-start text-wine-700">Highlights</h2>
          <Stop />
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {tour.highlights.map((h, i) => (
              <Reveal as="li" key={h} delay={i * 0.06} className="flex gap-3">
                <Star className="mt-2 size-3 shrink-0 text-gold-500" />
                <span className="leading-relaxed">{h}<Stop after={h} /></span>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
