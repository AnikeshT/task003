import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/components/BlogPost"
import { posts } from "@/data/posts"
import { pageMetadata, shareImage } from "@/lib/seo/metadata"

const find = (slug: string) => posts.find((p) => p.slug === slug)

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const p = find(slug)
  if (!p) return {}
  return pageMetadata({
    title: p.searchTitle,
    description: p.description,
    path: `/blog/${slug}`,
    image: { url: shareImage(p.image), alt: p.imageAlt },
    article: { published: p.published, modified: p.updated },
  })
}

export default async function Page({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params
  const post = find(slug)
  if (!post) notFound()
  return <BlogPost post={post} />
}
