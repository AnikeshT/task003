import { Cities } from "@/components/Shared/cities"
import { CtaBand } from "@/components/Shared/cta-band"
import { Faq } from "@/components/Shared/faq"
import { PageHero } from "@/components/Shared/PageHero"
import { Compare } from "./compare"

const destinationQuestions = [
  {
    q: "How many days are recommended for a Portugal wine tour?",
    a: "We recommend at least 7 to 10 days: 3 days exploring Porto and the Douro Valley, 2 days in the Minho or Vinho Verde, and 3 to 4 days across Lisbon, Sintra, and the Alentejo.",
  },
  {
    q: "Can I do the Douro Valley as a day trip from Porto?",
    a: "Yes. Our private masterclass tours depart Porto at 8:30 AM via private Mercedes vehicle, includes a rabelo boat cruise in Pinhão, estate tasting, 4-course lunch, and returns you to Porto by 6:00 PM.",
  },
]

export function Destinations() {
  return (
    <>
      <PageHero
        image="/videos/douro.jpg"
        alt="Terraced vineyards of the Douro Valley"
        title="Douro, Porto, or Alentejo?"
        intro="From the dramatic steep schist terraces of the Douro to the centuries-old Port cellars of Gaia and the golden cork-oak plains of Alentejo, each Portuguese terroir offers a distinct world of flavour."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/destinations", label: "Terroir Territories" },
        ]}
      />
      <Cities />
      <Compare />
      <Faq title="Questions about Portugal's wine territories" items={destinationQuestions} />
      <CtaBand />
    </>
  )
}
