import { About } from "@/components/About"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "About Dunes And Sky, a UAE Tour Directory",
  description:
    "Dunes And Sky lists tours in Dubai and Abu Dhabi run by local operators, from desert safaris to Grand Mosque visits and boat trips. See how it works.",
  path: "/about",
})

export default function Page() {
  return <About />
}
