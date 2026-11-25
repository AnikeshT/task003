import { GuideCard } from "@/components/Shared/guide-links"
import { CtaBand } from "@/components/Shared/cta-band"
import { JsonLd } from "@/components/Shared/json-ld"
import { Reveal } from "@/components/Shared/Motion"
import { PageHero } from "@/components/Shared/PageHero"
import { Start } from "./start"
import { posts } from "@/data/posts"
import { blog, graph } from "@/lib/seo/schema"

export function Blog() {
  return (
    <>
      <JsonLd data={graph(blog(posts))} />
      <PageHero
        image="/images/barcelona-vineyard.jpg"
        alt="Sunlit Mediterranean vineyards and olive groves"
        title="Terroir & Wine Guides"
        intro="What to know before booking your cellar tastings across Barcelona, Santorini, Sicily, and Douro Valley."
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Travel guides" },
        ]}
      />
      <section className="bg-pearl-100 py-24 md:py-36">
        <div className="container-x">
          <h2 className="sr-only">All guides. </h2>
          <div className="grid gap-x-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <GuideCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Start />
      <CtaBand />
    </>
  )
}
