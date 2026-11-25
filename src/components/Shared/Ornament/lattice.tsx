import { useId } from "react"
import { cn } from "@/lib/utils"

/** Fine vineyard pergola trellis wirework with sommelier diamond accents. */
export function Lattice({ className, size = 100 }: { className?: string; size?: number }) {
  const id = useId()
  return (
    <svg aria-hidden className={cn("pointer-events-none absolute inset-0 size-full", className)}>
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse" x="50%">
          <path
            d={`M0 0 L${size} ${size} M${size} 0 L0 ${size}`}
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          <circle cx={size / 2} cy={size / 2} r="2.5" fill="currentColor" fillOpacity="0.6" />
          <path
            d={`M${size / 2} ${size / 2 - 8} Q${size / 2 + 6} ${size / 2 - 3} ${size / 2} ${size / 2 + 3}`}
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
