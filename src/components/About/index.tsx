import { CtaBand } from "@/components/Shared/cta-band"
import { PageHero } from "@/components/Shared/PageHero"
import { Day } from "./day"
import { Story } from "./story"
import { Values } from "./values"

export function About() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85"
        alt="Sommelier pouring vintage wine in an ancient cellar"
        title="About Terroir & Cru"
        intro="We curate premier wine tastings, private bodega cellars, and Michelin-starred culinary odysseys across Barcelona, Santorini, Sicily, and the Mediterranean."
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
