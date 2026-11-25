import { Destinations } from "@/components/Destinations"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Dubai or Abu Dhabi? Compare Both | Dunes And Sky",
  description:
    "Dubai and Abu Dhabi side by side: what each city is known for, how far apart they are, and the tours you can take in both.",
  path: "/destinations",
})

export default function Page() {
  return <Destinations />
}
