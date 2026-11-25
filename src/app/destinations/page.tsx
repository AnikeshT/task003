import { Destinations } from "@/components/Destinations"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Mediterranean Wine Regions: Barcelona, Santorini & Sicily | Terroir & Cru",
  description:
    "Explore the distinct terroirs of Barcelona and Penedès, volcanic Santorini, and Mount Etna in Sicily side by side.",
  path: "/destinations",
})

export default function Page() {
  return <Destinations />
}
