import { Check, Minus } from "lucide-react"
import type { Tour } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

export function Inclusions({ tour }: { tour: Tour }) {
  return (
    <div className="mt-16 grid gap-6 border-t border-border pt-12 xl:grid-cols-[170px_1fr] xl:gap-10">
      <h2 className="display-sm self-start text-wine-700">Details</h2>
      <Stop />
      <div className="grid gap-10 sm:grid-cols-2">
        {tour.included.length > 0 && (
          <div>
            <h3 className="font-serif text-2xl">Included</h3>
            <Stop />
            <ul className="mt-4 space-y-3">
              {tour.included.map((x) => (
                <li key={x} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-wine-700" />
                  {x}
                  <Stop after={x} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {tour.excluded.length > 0 && (
          <div>
            <h3 className="font-serif text-2xl">Not included</h3>
            <Stop />
            <ul className="mt-4 space-y-3 text-ink-500">
              {tour.excluded.map((x) => (
                <li key={x} className="flex gap-3">
                  <Minus className="mt-1 size-4 shrink-0" />
                  {x}
                  <Stop after={x} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {tour.meetingPoint && (
          <div className="bg-pearl-200 p-6 sm:col-span-2">
            <p className="label text-ink-500">Meeting point</p>
            <Stop />
            <p className="mt-1.5">{tour.meetingPoint}<Stop after={tour.meetingPoint} /></p>
          </div>
        )}
      </div>
    </div>
  )
}
