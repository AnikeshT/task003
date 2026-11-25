import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Experience } from "@/components/Experience"
import { experiences } from "@/data/experiences"
import { pageMetadata } from "@/lib/seo/metadata"

const find = (slug: string) => experiences.find((e) => e.slug === slug)

export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<"/experiences/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const e = find(slug)
  if (!e) return {}
  return pageMetadata({ title: e.searchTitle, description: e.description, path: `/experiences/${slug}` })
}

export default async function Page({ params }: PageProps<"/experiences/[slug]">) {
  const { slug } = await params
  const experience = find(slug)
  if (!experience) notFound()
  return <Experience experience={experience} />
}
