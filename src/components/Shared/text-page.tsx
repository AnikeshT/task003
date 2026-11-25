import type { ReactNode } from "react"
import { SplitText } from "@/components/Shared/Motion"
import { Crumbs, type Crumb } from "@/components/Shared/PageHero/crumbs"
import { Prose } from "@/components/Shared/prose"
import { Stop } from "@/components/Shared/stop"

/** A page of plain text under a wine band, for the policies. */
export function TextPage({ title, crumbs, children }: { title: string; crumbs: Crumb[]; children: ReactNode }) {
  return (
    <section className="bg-pearl-100 pb-24 md:pb-32">
      <div className="bg-wine-900 pt-[calc(var(--header-h)+3rem)] pb-20 text-center text-pearl-50">
        <div className="container-x">
          <Crumbs items={crumbs} />
          <SplitText text={title} className="display-lg mt-4" />
          <Stop />
        </div>
      </div>
      <div className="container-x pt-16 md:pt-24">
        <Prose>{children}</Prose>
      </div>
    </section>
  )
}
