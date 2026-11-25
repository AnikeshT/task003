import { Tours } from "@/components/Tours"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "All Mediterranean Wine & Gourmet Tours | Terroir & Cru",
  description:
    "Every curated wine tasting and gourmet culinary tour across Barcelona, Santorini, Sicily, and the Douro Valley. Transparent inclusions and certified sommelier guides.",
  path: "/tours",
})

export default function Page() {
  return <Tours />
}
