import { ParallaxImage, ScrollText } from "@/components/Shared/Motion"

export function Story() {
  return (
    <section className="bg-pearl-100 pt-28 md:pt-40">
      <div className="container-x">
        <ScrollText
          className="display-md mx-auto max-w-4xl text-center"
          text="Some tours fit five stops into a day. Others give you a whole evening in the desert. We show the hours, the price and what is included, so you can tell them apart before you pay."
        />
      </div>
      <div className="mt-24 grid md:mt-32 md:grid-cols-2">
        <ParallaxImage
          src="/images/desert-sunset.jpg"
          alt="Sun setting over low dunes and ghaf trees"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[5/4]"
        />
        <ParallaxImage
          src="/images/spice-souk.jpg"
          alt="Spices and dried flowers in the souk"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[5/4]"
        />
      </div>
    </section>
  )
}
