import { ParallaxImage, ScrollText } from "@/components/Shared/Motion"

export function Story() {
  return (
    <section className="bg-pearl-100 pt-28 md:pt-40">
      <div className="container-x">
        <ScrollText
          className="display-md mx-auto max-w-4xl text-center"
          text="Some tours rush through six commercial stops in a crowded bus. Others invite you into private family cellars for an unhurried afternoon with the master winemaker. We show the vineyard hours, the exact vintage pours, and honest inclusions before you reserve."
        />
      </div>
      <div className="mt-24 grid md:mt-32 md:grid-cols-2">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1600&q=85"
          alt="Catalan artisan tapas and wine pairing"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[5/4]"
        />
        <ParallaxImage
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85"
          alt="Santorini caldera cliffside vineyard at sunset"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[5/4]"
        />
      </div>
    </section>
  )
}
