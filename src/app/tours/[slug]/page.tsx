import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { TourDetail } from "@/components/TourDetail"
import { pageMetadata, shareImage } from "@/lib/seo/metadata"
import { tourDescription, tourTitle } from "@/lib/seo/tour-meta"
import { getListedTours, getMovedTour, getTour, getTours, isSharedLink } from "@/lib/tour-hub"

export async function generateStaticParams() {
  return (await getTours()).map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: PageProps<"/tours/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const tour = await getTour(slug)
  if (!tour) return {}
  return pageMetadata({
    title: tourTitle(tour, await getListedTours()),
    description: tourDescription(tour),
    path: `/tours/${tour.sameAs ?? tour.slug}`,
    image: { url: shareImage(tour.images[0]), alt: tour.title },
  })
}

export default async function TourPage({ params }: PageProps<"/tours/[slug]">) {
  const { slug } = await params
  const tour = await getTour(slug)
  if (!tour) {
    const moved = await getMovedTour(slug)
    if (moved) redirect(`/tours/${moved.slug}`)
    if (await isSharedLink(slug)) redirect("/tours")
    notFound()
  }

  return <TourDetail tour={tour} />
}
