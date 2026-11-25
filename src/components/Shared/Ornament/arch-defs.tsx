/** Clip shapes behind the .arch and .arch-wide classes. Rendered once, in the layout. */
export function ArchDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <clipPath id="arch-tall" clipPathUnits="objectBoundingBox">
          <path d="M0 1V.27C0 .16 .2 .105 .34 .07 .42 .05 .47 .03 .5 0 .53 .03 .58 .05 .66 .07 .8 .105 1 .16 1 .27V1Z" />
        </clipPath>
        <clipPath id="arch-wide" clipPathUnits="objectBoundingBox">
          <path d="M0 1V.62C0 .36 .16 .25 .31 .16 .4 .105 .465 .07 .5 0 .535 .07 .6 .105 .69 .16 .84 .25 1 .36 1 .62V1Z" />
        </clipPath>
      </defs>
    </svg>
  )
}
