import { Blog } from "@/components/Blog"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Mediterranean Wine & Gourmet Travel Guides | Terroir & Cru",
  description:
    "Curated guides to Catalan cava cellars, volcanic Santorini Assyrtiko tastings, and Mount Etna vineyard feasts.",
  path: "/blog",
})

export default function Page() {
  return <Blog />
}
