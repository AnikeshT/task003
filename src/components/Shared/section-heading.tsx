import type { ReactNode } from "react"
import { Reveal } from "@/components/Shared/Motion"
import { cn } from "@/lib/utils"
import { Stop } from "@/components/Shared/stop"

/** Centred heading on the page axis, with one optional line of context. */
export function SectionHeading({
  title,
  children,
  className,
  tone = "light",
}: {
  title: string
  children?: ReactNode
  className?: string
  tone?: "light" | "dark"
}) {
  return (
    <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2 className="display-lg">{title}</h2>
      <Stop after={title} />
      {children && (
        <p className={cn("lead mx-auto mt-5 max-w-xl", tone === "light" ? "text-ink-500" : "text-pearl-100/75")}>{children} </p>
      )}
    </Reveal>
  )
}
