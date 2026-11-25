import { cn } from "@/lib/utils"

/** A bespoke sommelier tasting chalice & Mediterranean vineyard emblem. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("size-8 text-gold-300 transition-transform duration-700 hover:rotate-6", className)}
    >
      {/* Base and stem */}
      <path d="M12 30h12" stroke="currentColor" strokeWidth="1.75" />
      <path d="M18 20v10" stroke="currentColor" strokeWidth="1.75" />
      {/* Chalice bowl */}
      <path
        d="M10 10c0 7 3.5 10 8 10s8-3 8-10H10z"
        fill="currentColor"
        fillOpacity="0.22"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      {/* Sommelier tastevin star above rim */}
      <path
        d="M18 2c.4 1.2 1 1.8 2.2 2.2-1.2.4-1.8 1-2.2 2.2-.4-1.2-1-1.8-2.2-2.2 1.2-.4 1.8-1 2.2-2.2z"
        fill="currentColor"
      />
      {/* Grapevine tendril flourish */}
      <path d="M18 24c-3-1-5-3-5.5-6" strokeWidth="1.2" strokeOpacity="0.75" />
      <circle cx="12.5" cy="18" r="1.2" fill="currentColor" />
      <path d="M18 26c3-1 5-3 5.5-6" strokeWidth="1.2" strokeOpacity="0.75" />
      <circle cx="23.5" cy="20" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark />
      <span className="flex flex-col">
        <span className="font-serif text-[1.35rem] tracking-[0.06em] text-pearl-50 leading-none whitespace-nowrap uppercase">
          Terroir & Cru
        </span>
        <span className="font-sans text-[0.6rem] tracking-[0.25em] text-gold-300/80 uppercase mt-0.5 whitespace-nowrap">
          Wine & Gourmet Voyages
        </span>
      </span>
    </span>
  )
}
