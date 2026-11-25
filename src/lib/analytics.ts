declare global {
  interface Window {
    umami?: { track: (event: string, data?: Record<string, string | number>) => unknown }
  }
}

/** Conversion event. Does nothing if the tracker is blocked or hasn't loaded. */
export function trackBookClick(tourId: string) {
  window.umami?.track("book-click", { tour: tourId })
}
