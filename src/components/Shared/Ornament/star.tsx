/** Eight-point star (khatam): two squares turned against each other. Unit radius, centred on 0,0. */
export const STAR =
  "M1 0 .707 .293 .707 .707 .293 .707 0 1-.293 .707-.707 .707-.707 .293-1 0-.707-.293-.707-.707-.293-.707 0-1 .293-.707 .707-.707 .707-.293Z"

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="-1 -1 2 2" aria-hidden className={className} fill="currentColor">
      <path d={STAR} />
    </svg>
  )
}
