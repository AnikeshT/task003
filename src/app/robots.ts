import type { MetadataRoute } from "next"
import { absolute } from "@/data/site"

/** Open to every crawler, search and AI alike. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: absolute("/sitemap.xml"),
  }
}
