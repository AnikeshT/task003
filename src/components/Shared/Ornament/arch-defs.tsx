/** Clip shapes behind the .arch and .arch-wide classes. European wine cellar barrel vaults. */
export function ArchDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <clipPath id="arch-tall" clipPathUnits="objectBoundingBox">
          <path d="M0 1 V.35 C0 .15, .22 0, .5 0 C.78 0, 1 .15, 1 .35 V1 Z" />
        </clipPath>
        <clipPath id="arch-wide" clipPathUnits="objectBoundingBox">
          <path d="M0 1 V.45 C0 .20, .22 0, .5 0 C.78 0, 1 .20, 1 .45 V1 Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
