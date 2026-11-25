import { Tours } from "@/components/Tours"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "All Dubai and Abu Dhabi Tours, Compared | Dunes And Sky",
  description:
    "Every tour we list in Dubai and Abu Dhabi. Filter by city, type and length, sort by price or reviews, and see what is included before you book.",
  path: "/tours",
})

export default function Page() {
  return <Tours />
}
