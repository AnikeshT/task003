import { Suspense } from "react"
import { Reveal, SplitText } from "@/components/Shared/Motion"
import { Lattice } from "@/components/Shared/Ornament"
import { Crumbs } from "@/components/Shared/PageHero/crumbs"
import { Faq } from "@/components/Shared/faq"
import { Stop } from "@/components/Shared/stop"
import { getTourList } from "@/lib/tour-hub"
import { Planner } from "./planner"

export async function Plan() {
  const tours = await getTourList()

  return (
    <>
      <section className="relative isolate overflow-hidden bg-wine-900 text-pearl-50">
        <Lattice className="-z-10 text-gold-300/8" size={140} />
        <div className="container-x flex flex-col items-center pt-[calc(var(--header-h)+1.5rem)] pb-12 text-center md:pt-[calc(var(--header-h)+2.5rem)] md:pb-16">
          <Crumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/plan", label: "Plan a trip" },
            ]}
          />
          <SplitText text="Find the tour for you" delay={0.15} className="display-lg mt-4 max-w-[18ch]" />
          <Stop />
          <Reveal delay={0.4}>
            <p className="lead mt-4 max-w-2xl text-pearl-100/80">
              Five short questions, and we&apos;ll pick from {tours.length} curated wine and culinary tours across Barcelona, Santorini, Sicily, and Portugal.{" "}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-pearl-100 py-12 md:py-20">
        <div className="container-x">
          <Suspense fallback={<div className="mx-auto min-h-[32rem] max-w-5xl border-t-2 border-wine-700 bg-pearl-50" />}>
            <Planner tours={tours} />
          </Suspense>
        </div>
      </section>

      <Faq title="Good to know before you book" />
    </>
  )
}
