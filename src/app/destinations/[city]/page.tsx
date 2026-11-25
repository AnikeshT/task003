import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Destination } from "@/components/Destination"
import { cities, type City } from "@/data/tours"
import { pageMetadata } from "@/lib/seo/metadata"

export function generateStaticParams() {
  return (Object.keys(cities) as City[]).map((city) => ({ city }))
}

export async function generateMetadata({ params }: PageProps<"/destinations/[city]">): Promise<Metadata> {
  const { city } = await params
  const c = cities[city as City]
  if (!c) return {}
  return pageMetadata({
    title: c.search.title,
    description: c.search.description,
    path: `/destinations/${city}`,
    image: { url: `/_next/image?url=${encodeURIComponent(c.image)}&w=1440&q=75`, alt: c.imageAlt },
  })
}

export default async function DestinationPage({ params }: PageProps<"/destinations/[city]">) {
  const { city: key } = await params
  if (!(key in cities)) notFound()
  return <Destination city={key as City} />
}
