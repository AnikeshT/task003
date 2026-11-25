import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { spaced } from "./spaced"

/** Running text: guides, policies and the words on comparison pages. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl text-[1.0625rem] leading-relaxed text-ink-700",
        "[&_h2]:mt-16 [&_h2]:font-serif [&_h2]:text-[clamp(1.7rem,2.9vw,2.4rem)] [&_h2]:leading-tight [&_h2]:text-balance [&_h2]:text-wine-700 [&_h2:first-child]:mt-0",
        "[&_h3]:mt-10 [&_h3]:font-serif [&_h3]:text-2xl [&_h3]:leading-snug",
        "[&_p]:mt-5 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-gold-500 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5",
        "[&_a]:text-wine-700 [&_a]:underline [&_a]:decoration-gold-500 [&_a]:underline-offset-4 [&_a:hover]:decoration-wine-700",
        "[&_strong]:font-medium [&_strong]:text-ink-900",
        "[&_table]:w-full [&_table]:min-w-[34rem] [&_table]:text-left [&_th]:border-b [&_th]:border-border [&_th]:py-3 [&_th]:pr-5 [&_th]:font-serif [&_th]:font-normal [&_th]:text-ink-900 [&_td]:border-b [&_td]:border-border [&_td]:py-3 [&_td]:pr-5 [&_td]:align-top",
        className
      )}
    >
      {spaced(children)}
    </div>
  )
}

/** A table that scrolls sideways on a narrow screen instead of pushing the page wider. */
export function TableScroll({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="relative mt-6 overflow-x-auto" role="region" aria-label={label} tabIndex={0}>
      {spaced(children)}
    </div>
  )
}
