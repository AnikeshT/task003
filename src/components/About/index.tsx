import { CtaBand } from "@/components/Shared/cta-band"
import { PageHero } from "@/components/Shared/PageHero"
import { Day } from "./day"
import { Story } from "./story"
import { Values } from "./values"

export function About() {
  return (
    <>
      <PageHero
        image="/images/camel-riders.jpg"
        alt="Riders on a line of camels crossing the dunes"
        title="About Dunes And Sky"
        intro="We list tours in Dubai and Abu Dhabi, from desert safaris and city tours to boat trips. Local operators run them."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        position="50% 40%"
      />
      <Story />
      <Day />
      <Values />
      <CtaBand />
    </>
  )
}
