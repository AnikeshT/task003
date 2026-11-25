import { Plan } from "@/components/Plan"
import { pageMetadata } from "@/lib/seo/metadata"

export const metadata = pageMetadata({
  title: "Plan a Dubai or Abu Dhabi Trip | Dunes And Sky",
  description:
    "Answer five short questions about what you enjoy, how long you have and your budget, and see the Dubai and Abu Dhabi tours that suit you best.",
  path: "/plan",
})

export default function Page() {
  return <Plan />
}
