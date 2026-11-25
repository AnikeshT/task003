/**
 * Ends a label, title or fact that has no full stop of its own, for anything that reads the page as plain
 * text: screen readers pause, and answer engines don't run it into what comes next. Not seen on the page.
 */
export function Stop({ after = "" }: { after?: string }) {
  return /[.!?]\s*$/.test(after) ? " " : <span className="sr-only">. </span>
}
