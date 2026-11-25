import { FileCheck2, Plane } from "lucide-react"
import { partners } from "@/data/partners"
import { cn } from "@/lib/utils"
import { Stop } from "@/components/Shared/stop"

const items = [
  {
    key: "flights",
    icon: Plane,
    from: { code: "Home", label: "Your city" },
    to: { code: "DXB", label: "or AUH" },
    ...partners.flights,
  },
  {
    key: "visa",
    icon: FileCheck2,
    from: { code: "Apply", label: "Online, in minutes" },
    to: { code: "eVisa", label: "To your inbox" },
    ...partners.visa,
  },
] as const

/** Ticket-style link-out cards for flights and visa. `compact` is for use inside tour pages. */
export function EssentialCards({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2", className)}>
      {items.map((it) => (
        <a key={it.key} href={it.url} target="_blank" rel={it.rel} className="group flex flex-col bg-pearl-50">
          <span className={cn("block bg-wine-900 text-pearl-50", compact ? "p-6" : "p-7 md:p-9")}>
            {/* the labels sit on their own row, so long ones never shorten the icon's path */}
            <span className={cn("flex items-center gap-4 font-serif leading-none", compact ? "text-2xl" : "text-3xl")}>
              <span>{it.from.code} </span>
              <span className="relative flex h-px flex-1 items-center bg-gold-300/40">
                <span className="absolute left-[calc(50%-1.25rem)] grid size-10 place-items-center bg-wine-900 text-gold-300 transition-[left] duration-1000 ease-(--ease-out-expo) group-hover:left-[calc(100%-2.5rem)] group-focus-visible:left-[calc(100%-2.5rem)]">
                  <it.icon className="size-5" strokeWidth={1.4} aria-hidden />
                </span>
              </span>
              <span>{it.to.code} </span>
            </span>
            <span className="label mt-2 flex justify-between gap-4 text-pearl-100/70">
              <span>{it.from.label} </span>
              <span className="text-right">{it.to.label}<Stop /></span>
            </span>
          </span>
          <span className={cn("flex flex-1 flex-col", compact ? "p-6" : "p-7 md:p-9")}>
            <span className="display-sm block">{it.title}<Stop after={it.title} /></span>
            <span className="mt-3 block text-pretty text-ink-500">{it.blurb} </span>
            <span className="mt-auto block pt-7">
              <span className="border-b border-gold-500 pb-1 font-serif text-lg text-wine-700">{it.cta}</span>
              <Stop />
              <span className="label mt-3 block text-ink-500">{it.note}<Stop after={it.note} /></span>
            </span>
          </span>
        </a>
      ))}
    </div>
  )
}
