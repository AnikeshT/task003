import { getTourList } from "@/lib/tour-hub"
import { HeroStage } from "./hero-stage"
import { toScenes } from "./scenes"
import { SearchForm } from "./search-form"

export async function Hero() {
  const scenes = toScenes(await getTourList())

  return (
    <section className="relative bg-wine-950 text-pearl-50">
      <HeroStage scenes={scenes} />
      <SearchForm />
    </section>
  )
}
