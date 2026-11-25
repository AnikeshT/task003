import Image from "next/image"
import { ButtonLink } from "@/components/Shared/button-link"

export function NotFound() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-wine-950 text-pearl-50">
      <Image quality={88} src="/images/reserve-camel.jpg" alt="A camel crossing the dunes at sunset" fill priority sizes="100vw" className="-z-10 object-cover" />
      <div className="absolute inset-0 -z-10 bg-wine-950/65" />
      <div className="container-x py-32 text-center">
        <h1 className="display-xl mx-auto max-w-[16ch]">Nothing out here but sand</h1>
        <p className="lead mx-auto mt-6 max-w-md text-pearl-100/85">The page you were looking for has moved or never existed.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="gold">
            Back to home
          </ButtonLink>
          <ButtonLink href="/tours" variant="line">
            Browse tours
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
