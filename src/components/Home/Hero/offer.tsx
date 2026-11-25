import { Price } from "@/components/Shared/Price"
import type { Scene } from "./scenes"

/** "33 tours from €18", in the visitor's currency. */
export function Offer({ scene: { count, from } }: { scene: Scene }) {
  return (
    <>
      {count} {count === 1 ? "tour" : "tours"}
      {from && (
        <>
          {" "}
          from <Price {...from} />
        </>
      )}
    </>
  )
}
