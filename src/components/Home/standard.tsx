import Image from "next/image"
import { SectionHeading } from "@/components/Shared/section-heading"
import { Stop } from "@/components/Shared/stop"

const points = [
  {
    title: "Small groups (≤ 8)",
    text: "We cap every open group strictly at 8 travelers, keeping private cellar tastings intimate and unhurried.",
  },
  {
    title: "Private family estates",
    text: "We bypass commercial tour wineries to open private cellar doors held in Mediterranean families for centuries.",
  },
  {
    title: "Certified sommeliers",
    text: "You travel alongside WSET Level 3 sommeliers and passionate local oenologists.",
  },
  {
    title: "Transparent terroir pricing",
    text: "Every expedition includes all private tastings, vineyard chef feasts, and executive Mercedes transfers.",
  },
]

export function Standard() {
  return (
    <section className="bg-pearl-50">
      <div className="relative h-[46svh] min-h-[320px] md:h-[64svh]">
        <Image
          quality={90}
          src="/images/sommelier-guild.jpg"
          alt="Vintage wine tasting in an ancient Mediterranean stone cellar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_42%]"
        />
      </div>
      <div className="container-x py-24 md:py-32">
        <SectionHeading title="The Sommelier Guild Standard" />
        <dl className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title} className="text-center">
              <dt className="display-sm text-wine-700">{p.title}<Stop /></dt>
              <dd className="mx-auto mt-3 max-w-[30ch] text-pretty text-ink-500 leading-relaxed">{p.text} </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
