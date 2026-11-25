/** Sommelier Tastevin Star: a classical 4-point oenological star with curved concave flares and grape rosette. Unit radius, centred on 0,0. */
export const STAR =
  "M0 -1 C.18 -.35 .35 -.18 1 0 C.35 .18 .18 .35 0 1 C-.18 .35 -.35 .18 -1 0 C-.35 -.18 -.18 -.35 0 -1Z"

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="-1 -1 2 2" aria-hidden className={className} fill="currentColor">
      <path d={STAR} />
      <circle cx="0" cy="0" r="0.16" />
    </svg>
  )
}
