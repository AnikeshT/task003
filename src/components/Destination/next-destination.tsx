import Link from "next/link"
import { ParallaxImage } from "@/components/Shared/Motion"
import { cities, type City } from "@/data/tours"
import { Stop } from "@/components/Shared/stop"

export function NextDestination({ city }: { city: City }) {
  const keys = Object.keys(cities) as City[]
  const currentIndex = keys.indexOf(city)
  const nextCityKey = keys[(currentIndex + 1) % keys.length]
  const c = cities[nextCityKey]

  return (
    <Link
      href={`/destinations/${nextCityKey}`}
      className="group relative isolate flex min-h-[76svh] flex-col items-center justify-center overflow-hidden bg-wine-950 px-6 text-center text-pearl-50 outline-offset-[-6px]"
    >
      <ParallaxImage src={c.image} alt={c.imageAlt} sizes="100vw" reveal={false} className="absolute! inset-0 -z-10 bg-wine-950" />
      <span className="absolute inset-0 -z-10 bg-wine-950/50 transition-colors duration-700 group-hover:bg-wine-950/35" />
      <span className="font-serif italic text-3xl text-gold-300">
        {c.portuguese}
      </span>
      <Stop />
      <span className="display-xl mt-1 block">Continue to {c.name}</span>
      <Stop />
    </Link>
  )
}
