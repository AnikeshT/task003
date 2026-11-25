import Script from "next/script"

/** Umami page views. Production builds only, so local development never reaches the dashboard. */
export function Analytics() {
  if (process.env.NODE_ENV !== "production") return null
  return (
    <Script
      src="https://tour-hub-analytics.vercel.app/script.js"
      data-website-id="6d8fa2ad-bfd5-4b32-bcfa-3a3382bf5beb"
    />
  )
}
