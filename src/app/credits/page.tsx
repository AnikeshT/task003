import { Credits } from "@/components/Credits"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Photo and Film Credits | Dunes And Sky",
  description:
    "The photographers and film-makers whose work appears on Dunes And Sky, with the licence and a link to every original.",
  path: "/credits",
  index: false,
})

export default function Page() {
  return <Credits />
}
