import { Price } from "@/components/Shared/Price"
import { Prose, TableScroll } from "@/components/Shared/prose"
import { cities, type City } from "@/data/tours"
import { getTourList } from "@/lib/tour-hub"

const order: City[] = ["douro-valley", "porto", "alentejo"]

/** The wine territories compared side by side. */
export async function Compare() {
  const tours = await getTourList()
  const of = (city: City) => {
    const list = tours.filter((t) => t.city === city)
    const cheapest = list.filter((t) => t.price !== null).sort((a, b) => a.price! - b.price!)[0]
    return { count: list.length, cheapest }
  }
  const stats = order.map(of)

  const rows = [
    { label: "Known for", cells: ["Terraced schist vineyards & Vintage Port", "Historic granite lodges & Ribeira petiscos", "Clay Talha amphorae, cork forests & black pork"] },
    { label: "Landscape", cells: ["Steep river gorges & olive trees", "Coastal estuary & iron bridges", "Sun-baked golden rolling plains"] },
    { label: "Signature Grapes", cells: ["Touriga Nacional, Touriga Franca", "Aged Tawny & Colheita blends", "Antão Vaz, Trincadeira, Aragonez"] },
    { label: "Expeditions listed", cells: stats.map((s) => String(s.count)) },
    { label: "Lowest starting price", cells: stats.map((s, i) => s.cheapest ? <Price key={i} amount={s.cheapest.price!} currency={s.cheapest.currency} /> : "Inquire") },
  ]

  return (
    <section className="bg-pearl-100 pt-24 md:pt-32">
      <div className="container-x">
        <Prose>
          <h2>How do Portugal&apos;s wine regions compare?</h2>
          <TableScroll label="Portugal wine regions compared">
            <table>
              <thead>
                <tr>
                  <th scope="col">Dimension</th>
                  {order.map((c) => (
                    <th key={c} scope="col">{cities[c].name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label}>
                    <td>{r.label}</td>
                    {r.cells.map((cell, idx) => (
                      <td key={idx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>

          <h2>Where should you base your journey?</h2>
          <p>
            Base yourself in Porto if you want the greatest balance: historic Port wine cellars in Vila Nova de Gaia within walking distance, Matosinhos seafood dining in the evening, and day trips upriver to the Douro Valley or north into the Minho. For slow living, starry night skies, and rustic gastronomy, spend 3 nights at a traditional countryside Herdade in the Alentejo.
          </p>
        </Prose>
      </div>
    </section>
  )
}
