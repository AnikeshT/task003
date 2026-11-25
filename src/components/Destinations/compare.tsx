import { Price } from "@/components/Shared/Price"
import { Prose, TableScroll } from "@/components/Shared/prose"
import { cities, type City } from "@/data/tours"
import { getTourList } from "@/lib/tour-hub"

const order: City[] = ["barcelona", "santorini", "sicily"]

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
    { label: "Known for", cells: ["Historic chalk Cava caves & Gothic Quarter tapas", "Volcanic cliffside canavas & ancient basket vines", "High-altitude basalt cantinas & Mount Etna feasts"] },
    { label: "Landscape", cells: ["Rolling chalk hills & Mediterranean coast", "300m volcanic caldera cliffs & Aegean sea", "Smoking active volcanic peak & dark lava terraces"] },
    { label: "Signature Grapes", cells: ["Macabeo, Xarel-lo, Parellada, Priorat Garnacha", "Volcanic mineral Assyrtiko, Nyfteri, Vinsanto", "Nerello Mascalese, Carricante, Nero d'Avola"] },
    { label: "Expeditions listed", cells: stats.map((s) => String(s.count)) },
    { label: "Lowest starting price", cells: stats.map((s, i) => s.cheapest ? <Price key={i} amount={s.cheapest.price!} currency={s.cheapest.currency} /> : "Inquire") },
  ]

  return (
    <section className="bg-pearl-100 pt-24 md:pt-32">
      <div className="container-x">
        <Prose>
          <h2>How do Mediterranean wine regions compare?</h2>
          <TableScroll label="Mediterranean wine regions compared">
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
        </Prose>
      </div>
    </section>
  )
}
