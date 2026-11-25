import type { City } from "@/data/tours"

export const guide: Record<City, { title: string; text: string; image: string; alt: string }[]> = {
  barcelona: [
    {
      title: "Chalk Cava Caves of Penedès",
      text: "Descend into underground limestone cellars where Gran Reserva Cavas rest on lees for up to 48 months in silent Romanesque vaults.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      alt: "Oak barrels and vintage bottles in a chalk wine cellar",
    },
    {
      title: "Gothic Quarter & El Born Tapas",
      text: "Wander through centuries-old stone alleyways tasting hand-carved Jamón Ibérico de Bellota, artisan cheeses, and bold Priorat DOCa reds.",
      image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1200&q=80",
      alt: "Catalan tapas table with wine glasses",
    },
    {
      title: "Priorat Slate Terraces",
      text: "Venture to steep llicorella slate hillsides where century-old Garnacha vines produce some of Spain's most concentrated, world-renowned wines.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      alt: "Sunlit vineyard grapes on steep hills",
    },
  ],
  santorini: [
    {
      title: "Ancient Ungrafted Kouloura Baskets",
      text: "Walk through 400-year-old vines woven into protective ground wreaths to shield precious Assyrtiko grapes from ferocious Aegean Meltemi winds.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      alt: "Santorini caldera cliffside vineyards at sunset",
    },
    {
      title: "Historic Canavas in Volcanic Ash",
      text: "Step inside subterranean wine vaults carved directly into volcanic pumice strata, maintaining natural cellar cooling year-round.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      alt: "White-washed terraces and blue domes in Santorini",
    },
    {
      title: "Sunset Caldera Vinsanto Tastings",
      text: "Sip amber Vinsanto crafted from sun-dried grapes as the golden sun drops below the Aegean caldera horizon in Oia.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      alt: "Wine glasses overlooking the sea at dusk",
    },
  ],
  sicily: [
    {
      title: "Europe's Highest Volcanic Terroir",
      text: "Ascend the slopes of Mount Etna to 900 meters altitude where black lava basalt and cool alpine nights create wines of Burgundian elegance.",
      image: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1200&q=80",
      alt: "Mount Etna volcanic terraces and vineyards",
    },
    {
      title: "Old-Vine Nerello Mascalese",
      text: "Taste refined single-contrada crus produced from 100-year-old pre-phylloxera bush vines rooted in historic lava flows.",
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      alt: "Sicilian coastal vineyard hillside",
    },
    {
      title: "Trattoria Country Feasts",
      text: "Savor handmade wild fennel pasta, Bronte pistachios, warm ricotta, and fresh Sicilian cannoli paired with mineral Etna Bianco Superiore.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      alt: "Authentic Italian wine dining feast",
    },
  ],
  "douro-valley": [
    {
      title: "Schist terraces at dawn",
      text: "Wake above the morning river mist. The hand-built stone terraces reflect morning warmth, coaxing deep concentration into old Touriga Nacional vines.",
      image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1200&q=80",
      alt: "Douro Valley steep terraced schist vineyards overlooking the river",
    },
    {
      title: "Private rabelo cruises",
      text: "Sail past steep vineyard bluffs on a silent wooden rabelo boat, sipping crisp white Port and tonic as the gorge narrows.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      alt: "Traditional wooden boat on the Douro river",
    },
    {
      title: "Cellar library tastings",
      text: "Uncork single-quinta Colheitas and unreleased Vintage Ports in private cellars that have aged barrels for over a century.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      alt: "Ancient wooden oak wine barrels in a dim cellar vault",
    },
  ],
  porto: [
    {
      title: "Historic Vila Nova de Gaia lodges",
      text: "Walk through granite barrel rooms where sea humidity and steady maritime temperatures gently mature Tawny and Vintage Ports.",
      image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=80",
      alt: "Historic Port wine lodge cellars in Vila Nova de Gaia",
    },
    {
      title: "Ribeira tascas & petiscos",
      text: "Duck into traditional tavernas for salt cod fritters, flamed chouriço, and hand-sliced presunto paired with Douro DOC reserve reds.",
      image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
      alt: "Ribeira colorful riverfront facades in Porto",
    },
  ],
}
