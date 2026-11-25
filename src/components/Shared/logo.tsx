import { cn } from "@/lib/utils"

/** A stylized grape leaf & wine chalice emblem. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={cn("size-8 text-gold-300", className)}>
      <path d="M8 22h8" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-4-5-8-5-8s-5 4-5 8a5 5 0 0 0 5 5Z" />
      <path d="M12 7c-1.5 2-2 3.5-2 5a2 2 0 0 0 4 0c0-1.5-.5-3-2-5Z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-serif text-[1.4rem] tracking-tight text-pearl-50 leading-none whitespace-nowrap">
        Vinho & Terroir
      </span>
    </span>
  )
}
