import { useId } from "react"
import { cn } from "@/lib/utils"
import { STAR } from "./star"

/** Fine star-and-cross line work, as on a mashrabiya screen. Decorative. */
export function Lattice({ className, size = 120 }: { className?: string; size?: number }) {
  const id = useId()
  const r = size / 2
  return (
    <svg aria-hidden className={cn("pointer-events-none absolute inset-0 size-full", className)}>
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse" x="50%">
          <path
            d={STAR}
            transform={`translate(${r} ${r}) scale(${r})`}
            fill="none"
            stroke="currentColor"
            strokeWidth={1 / r}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
