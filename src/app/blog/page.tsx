import { Blog } from "@/components/Blog"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Dubai and Abu Dhabi Travel Guides | Dunes And Sky",
  description:
    "Guides to desert safaris, Abu Dhabi day trips and the Sheikh Zayed Grand Mosque, with sources and prices from the tours we list.",
  path: "/blog",
})

export default function Page() {
  return <Blog />
}
