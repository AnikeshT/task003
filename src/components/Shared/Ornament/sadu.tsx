import { useId } from "react"
import { cn } from "@/lib/utils"

/** A strip of Sadu, the geometric weaving of the Emirati bedouin. Used where a wine field meets the floor of the page. */
export function Sadu({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg aria-hidden className={cn("block h-9 w-full", className)}>
      <defs>
        <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse" x="50%">
          <rect width="36" height="36" fill="var(--wine-700)" />
          <path d="M0 2.5H36M0 33.5H36" stroke="var(--gold-300)" strokeWidth="1" />
          <path d="M0 6H18L9 14Z M18 6H36L27 14Z M0 30H18L9 22Z M18 30H36L27 22Z" fill="var(--pearl-100)" />
          <path d="M18 10.5 25.5 18 18 25.5 10.5 18Z" fill="var(--gold-300)" />
          <path d="M18 14.5 21.5 18 18 21.5 14.5 18Z" fill="var(--wine-900)" />
          <path d="M0 10.5 7.500 18 0 25.5Z M36 10.5V25.5L28.500 18Z" fill="var(--wine-950)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
