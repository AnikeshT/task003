import type { Metadata } from "next"
import { absolute, site } from "@/data/site"

const SHARE_IMAGE = { url: "/og.jpg", width: 1200, height: 630, alt: "Dubai's skyline at dusk, seen across the water" }

type Page = {
  /** Shown in search results as it is, so it should carry the site's name where there is room. */
  title: string
  description: string
  path: string
  image?: { url: string; alt: string; width?: number; height?: number }
  article?: { published: string; modified: string }
  index?: boolean
}

/** Title, description, canonical address and share card for one page. */
export function pageMetadata({ title, description, path, image = SHARE_IMAGE, article, index = true }: Page): Metadata {
  const shared = { title, description, url: path, siteName: site.name, locale: "en_US", images: [image] }
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: article
      ? { ...shared, type: "article", publishedTime: article.published, modifiedTime: article.modified, authors: [absolute("/about")] }
      : { ...shared, type: "website" },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
    ...(index ? {} : { robots: { index: false, follow: true } }),
  }
}

/** A photo through our own resizer, small enough for a share card. */
export const shareImage = (src: string) => `/_next/image?url=${encodeURIComponent(src)}&w=1080&q=75`
