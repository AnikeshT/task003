import type { NextConfig } from "next"

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
]

/** Films and photos keep their names, so browsers may hold them for a month and refresh in the background. */
const mediaCache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }]

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 88],
    deviceSizes: [640, 828, 1080, 1440, 1920, 2560],
    // Tour photos, served by the booking platform and Unsplash.
    remotePatterns: [
      { protocol: "https", hostname: "bokun.s3.amazonaws.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/videos/:path*", headers: mediaCache },
      { source: "/images/:path*", headers: mediaCache },
    ]
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/plan", permanent: false },
    ]
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
