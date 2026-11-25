import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

const values = [
  { title: "Independent Terroir Curation", text: "We partner strictly with certified oenologists and multi-generational wine families across Barcelona, Santorini, and Sicily." },
  { title: "The Details First", text: "Exact vintage tasting flights, sommelier credentials, and chef menus listed clearly on every tour page." },
  { title: "Free Cancellation", text: "All signature tours can be cancelled free of charge up to 48 hours before they start with a 100% refund." },
]

export function Values() {
  return (
    <section className="bg-pearl-100 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading title="How We Choose Expeditions" />
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
