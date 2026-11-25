import { Clock, Globe, MapPin, Users } from "lucide-react"
import type { Tour } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

export function Facts({ tour }: { tour: Tour }) {
  const shown = tour.languages.slice(0, 3).join(", ")
  const more = tour.languages.length - 3
  const languages = more > 0 ? `${shown} and ${more} more` : shown
  const facts = [
    { icon: Clock, label: "Duration", value: tour.duration },
    { icon: Users, label: "Group", value: tour.isPrivate ? "Private" : null },
    { icon: MapPin, label: "Pickup", value: tour.pickup },
    { icon: Globe, label: "Languages", value: languages },
  ].filter((f) => f.value)

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-b border-border pb-10 md:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label} className="flex gap-3">
          <f.icon className="mt-0.5 size-5 shrink-0 text-wine-700" />
          <div>
            <dt className="label text-ink-500">{f.label} </dt>
            <dd className="mt-1 text-[0.98rem] leading-snug">{f.value}<Stop /></dd>
          </div>
        </div>
      ))}
    </dl>
  )
}
