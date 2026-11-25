import Link from "next/link"
import { ParallaxImage, Reveal } from "@/components/Shared/Motion"
import { SectionHeading } from "@/components/Shared/section-heading"
import { posts, type Post } from "@/data/posts"
import { Stop } from "@/components/Shared/stop"

export function GuideCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <ParallaxImage src={post.image} alt={post.imageAlt} sizes="(min-width: 1024px) 60vw, (min-width: 640px) 90vw, 180vw" className="aspect-[4/5]" />
      <div className="mt-6 text-center">
        <p className="label text-gold-700">{post.kind}</p>
        <Stop />
        <h3 className="display-sm mt-1.5 text-balance">{post.title}</h3>
        <Stop after={post.title} />
        <p className="mt-3 text-ink-500">{post.minutes} minute read</p>
        <Stop />
      </div>
    </Link>
  )
}

/** Guides to read next. */
export function GuideLinks({ slugs, title = "Read before you book" }: { slugs: string[]; title?: string }) {
  const list = slugs.map((s) => posts.find((p) => p.slug === s)).filter((p): p is Post => p !== undefined)
  if (list.length === 0) return null

  return (
    <section className="bg-pearl-100 pb-24 md:pb-32">
      <div className="container-x border-t border-border pt-24 md:pt-32">
        <SectionHeading title={title} />
        <div className="mx-auto mt-14 grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <GuideCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
