import { useId } from "react"
import { cn } from "@/lib/utils"

/** A band of European oak barrel staves and grapevine frieze where cellar stonework meets the floor of the page. */
export function Sadu({ className }: { className?: string }) {
  const id = useId()
  return (
    <svg aria-hidden className={cn("block h-9 w-full", className)}>
      <defs>
        <pattern id={id} width="48" height="36" patternUnits="userSpaceOnUse" x="50%">
          <rect width="48" height="36" fill="var(--wine-900)" />
          {/* Barrel stave bands */}
          <line x1="0" y1="4" x2="48" y2="4" stroke="var(--gold-500)" strokeWidth="1.2" strokeOpacity="0.7" />
          <line x1="0" y1="32" x2="48" y2="32" stroke="var(--gold-500)" strokeWidth="1.2" strokeOpacity="0.7" />
          {/* Central grapevine tendril wave */}
          <path
            d="M0 18 Q12 10 24 18 T48 18"
            fill="none"
            stroke="var(--gold-300)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Gilded grape cluster motif */}
          <circle cx="12" cy="18" r="2.2" fill="var(--gold-300)" />
          <circle cx="36" cy="18" r="2.2" fill="var(--gold-300)" />
          <circle cx="24" cy="14" r="1.8" fill="var(--gold-500)" />
          <circle cx="24" cy="22" r="1.8" fill="var(--gold-500)" />
          {/* Oak stave rivet pins */}
          <circle cx="2" cy="4" r="1.2" fill="var(--gold-300)" />
          <circle cx="26" cy="4" r="1.2" fill="var(--gold-300)" />
          <circle cx="2" cy="32" r="1.2" fill="var(--gold-300)" />
          <circle cx="26" cy="32" r="1.2" fill="var(--gold-300)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
