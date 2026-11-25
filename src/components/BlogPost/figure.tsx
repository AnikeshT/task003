import Image from "next/image"

export function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-12 aspect-[3/2] overflow-hidden bg-pearl-300">
      <Image quality={88} src={src} alt={alt} fill sizes="(min-width: 800px) 768px, 100vw" className="object-cover" />
    </div>
  )
}
