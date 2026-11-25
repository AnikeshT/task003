import Link from "next/link"
import { CtaBand } from "@/components/Shared/cta-band"
import { GuideLinks } from "@/components/Shared/guide-links"
import { JsonLd } from "@/components/Shared/json-ld"
import { PageHero } from "@/components/Shared/PageHero"
import { Prose } from "@/components/Shared/prose"
import type { Post } from "@/data/posts"
import { article, graph } from "@/lib/seo/schema"
import { bodies } from "./bodies"

const day = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })

export function BlogPost({ post }: { post: Post }) {
  const body = bodies[post.slug]

  return (
    <>
      <JsonLd
        data={graph(
          article({ path: `/blog/${post.slug}`, title: post.title, description: post.description, image: post.image, published: post.published, modified: post.updated })
        )}
      />
      <PageHero
        image={post.image}
        alt={post.imageAlt}
        title={post.title}
        intro={post.intro}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Travel guides" },
        ]}
      />
      <article className="bg-pearl-100 py-16 md:py-24">
        <div className="container-x">
          <p className="label mx-auto max-w-3xl border-b border-border pb-6 text-ink-500">
            By <Link href="/about" className="link-underline text-wine-700">Terroir &amp; Cru</Link>, updated{" "}
            <time dateTime={post.updated}>{day(post.updated)}</time>. Our guides link to tours we may{" "}
            <Link href="/how-we-work" className="link-underline text-wine-700">earn a commission</Link> on.{" "}
          </p>
          <Prose className="mt-10">
            <aside className="bg-pearl-200 p-6 md:p-8" aria-label="Key takeaways">
              <h2>In short</h2>
              <ul>
                {post.takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </aside>
            <div className="mt-12 [&>:first-child]:mt-0">
              {body()}
            </div>
            <h2>Sources</h2>
            <ul>
              {post.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="label text-ink-500">Checked on {day(post.checked)}. Hours, fees and rules change, so confirm them before you go.</p>
          </Prose>
        </div>
      </article>
      <GuideLinks slugs={post.next} title="Read next" />
      <CtaBand />
    </>
  )
}
