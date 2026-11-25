import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

const values = [
  { title: "Two cities", text: "We cover Dubai and Abu Dhabi: the desert, the sea, the old towns, the museums and the towers." },
  { title: "The details first", text: "How long it takes, what it costs and what is included, on every tour page." },
  { title: "Free cancellation", text: "Most tours can be cancelled free of charge up to 24 hours before they start." },
]

export function Values() {
  return (
    <section className="bg-pearl-100 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading title="How we list tours" />
        <dl className="mt-14 grid gap-12 md:mt-20 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="text-center">
              <dt className="display-sm text-wine-700">{v.title}<Stop /></dt>
              <dd className="mx-auto mt-3 max-w-[34ch] text-pretty text-ink-500">{v.text} </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
