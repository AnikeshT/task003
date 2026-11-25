import { Cities } from "@/components/Shared/cities"
import { CtaBand } from "@/components/Shared/cta-band"
import { Faq } from "@/components/Shared/faq"
import { JsonLd } from "@/components/Shared/json-ld"
import { graph, organization, website } from "@/lib/seo/schema"
import { TripEssentials } from "@/components/Shared/TripEssentials"
import { Arcade } from "./Arcade"
import { Hero } from "./Hero"
import { Dusk } from "./dusk"
import { Ratings } from "./ratings"
import { Signature } from "./Signature"
import { Standard } from "./standard"
import { Welcome } from "./welcome"

export function Home() {
  return (
    <>
      <JsonLd data={graph(organization, website)} />
      <Hero />
      <Welcome />
      <Cities />
      <Signature />
      <Arcade />
      <Standard />
      <Dusk />
      <Ratings />
      <TripEssentials />
      <Faq markup={false} />
      <CtaBand />
    </>
  )
}
