import { HowWeWork } from "@/components/HowWeWork"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "How We Choose Tours and Earn Money | Dunes And Sky",
  description:
    "Where our tours, prices and ratings come from, how they are ordered, who takes your booking, and how Dunes And Sky earns a commission.",
  path: "/how-we-work",
})

export default function Page() {
  return <HowWeWork />
}
