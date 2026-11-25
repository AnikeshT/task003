import type { Tour } from "./tours"

export const PORTUGAL_TOURS: Tour[] = [
  {
    id: "douro-vintage-masterclass",
    slug: "douro-vintage-masterclass-private-quinta-rabelo",
    sameAs: null,
    title: "Douro Valley Vintage Masterclass: Private Quinta & Rabelo Cruise",
    operator: "Quinta do Crasto & Heritage Oenologists",
    city: "douro-valley",
    startsIn: "porto",
    category: "vintage-port",
    duration: "Full day (9 hours)",
    hours: 9,
    price: 340,
    currency: "EUR",
    rating: 4.98,
    reviews: 142,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: true,
    pickup: "Private hotel pickup in Porto or Peso da Régua",
    languages: ["English", "Portuguese", "French"],
    images: [
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
    ],
    summary:
      "Journey deep into the world's oldest demarcated wine region. Sail the river in a private wooden rabelo boat, stomp schist terraces at a private quinta, and taste 40-year aged vintage tawny ports alongside a 4-course vineyard lunch.",
    description: [
      "The Douro Valley is not merely a wine country; it is a sculpted geological monument where schist hills tumble steeply into the emerald Douro river.",
      "Begin your day with an exclusive chauffeured scenic drive through the heart of the UNESCO World Heritage terraces to Pinhão.",
      "Board a classic wooden rabelo boat for a private one-hour silent cruise along secluded river meanders inaccessible by road.",
      "Arrive at a 200-year-old family estate (Quinta) where the head oenologist opens private cellar reserves, followed by a slow seasonal farm-to-table lunch overlooking the river."
    ],
    highlights: [
      "Exclusive private cruise on a restored wooden Rabelo boat from Pinhão",
      "Cellar tasting of rare Vintage Ports, LBV, and Single Quinta Colheitas",
      "Traditional 4-course vineyard lunch paired with Douro DOC reserve reds",
      "Scenic panoramic drive along the famed Estrada Nacional 222"
    ],
    included: [
      "Private Mercedes-Benz chauffeured transport from Porto/Régua",
      "Certified WSET Level 3 English-speaking Sommelier guide",
      "All private cellar tasting fees and vintage reserve pours",
      "4-course traditional estate lunch with curated wine pairings",
      "1-hour private river cruise with sparkling Vinho Verde toast"
    ],
    excluded: [
      "Personal bottle purchases from private quinta cellar",
      "Gratuities for boat skipper and estate staff"
    ],
    meetingPoint: "Direct pickup from your hotel or private villa in Porto, Vila Nova de Gaia, or Peso da Régua.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours before departure",
      fees: ["Full refund if cancelled at least 48 hours prior", "50% refund within 24-48 hours"]
    },
    bookingUrl: "/plan?tour=douro-vintage-masterclass"
  },
  {
    id: "porto-secret-lodges-petiscos",
    slug: "porto-secret-lodges-historic-cellars-petiscos-trail",
    sameAs: null,
    title: "Porto Secret Lodges: Historic Cellars & Ribeira Petiscos Trail",
    operator: "Vila Nova Oenology Guild",
    city: "porto",
    startsIn: "porto",
    category: "cellar-tasting",
    duration: "Half day (4.5 hours)",
    hours: 4.5,
    price: 165,
    currency: "EUR",
    rating: 4.95,
    reviews: 218,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: false,
    featured: true,
    pickup: "Meeting in central Ribeira, Porto",
    languages: ["English", "Portuguese", "Spanish"],
    images: [
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=85"
    ],
    summary:
      "Unlock centuries-old stone barrel vaults in Vila Nova de Gaia. Walk the iron ribs of the Dom Luís I bridge and savor hand-sliced presunto, bolinhos de bacalhau, and rare wood-aged Ports.",
    description: [
      "Cross the lower span of the Eiffel-designed Dom Luís I bridge from Ribeira into Vila Nova de Gaia, where sea breezes meet the damp cool of granite Port wine lodges.",
      "Explore quiet family lodge cellars that mass tour groups bypass. Learn how oak botes, tuns, and piping barrels age Tawny and Ruby wines through centuries of maritime temperature swings.",
      "Conclude with a walk through hidden tascas for authentic petiscos: smoked Alheira sausage, aged Queijo da Serra da Estrela, and warm pastel de nata straight from wood-fired bakeries."
    ],
    highlights: [
      "VIP access into 2 private centuries-old Port wine barrel vaults",
      "Comparative tasting of 10-year, 20-year, and Vintage Port reserves",
      "5 handpicked petiscos stops in historic Ribeira and Gaia backstreets",
      "Small intimate group capped strictly at 8 guests"
    ],
    included: [
      "Local culinary historian & certified sommelier guide",
      "6 premium Port tastings across 2 heritage cellars",
      "Substantial tasting dinner of authentic Portuguese petiscos",
      "Digital insider guide to Porto's finest wine bars"
    ],
    excluded: [
      "Hotel transfer (easy central meeting point at Ribeira Square)"
    ],
    meetingPoint: "Praça da Ribeira, by the monumental stone fountain, Porto.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 24 hours in advance",
      fees: ["Full refund up to 24 hours before tour start"]
    },
    bookingUrl: "/plan?tour=porto-secret-lodges-petiscos"
  },
  {
    id: "alentejo-amphora-cork-safari",
    slug: "alentejo-amphora-wine-cork-forest-black-pork-feast",
    sameAs: null,
    title: "Alentejo Golden Plains: Ancient Talha Amphorae & Cork Forest Feast",
    operator: "Herdade & Montado Terroir Masters",
    city: "alentejo",
    startsIn: "lisbon",
    category: "harvest-expedition",
    duration: "Full day (10 hours)",
    hours: 10,
    price: 295,
    currency: "EUR",
    rating: 4.99,
    reviews: 97,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: true,
    pickup: "Private hotel pickup in Lisbon or Évora",
    languages: ["English", "Portuguese"],
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1600&q=85"
    ],
    summary:
      "Cross the 25 de Abril suspension bridge into the serene golden plains of Alentejo. Discover Roman clay amphora (Vinho de Talha) winemaking, walk centuries-old cork oak forests, and enjoy an acorn-fed Porco Preto feast in UNESCO Évora.",
    description: [
      "Alentejo moves to the rhythm of the sun and the soil. Here, winemakers have kept alive the 2,000-year-old Roman tradition of fermenting grapes in huge beeswax-lined clay amphorae called 'Talhas'.",
      "Walk among ancient Montado cork oak forests where acorn-grazing black Iberian pigs roam freely under wide cobalt skies.",
      "Explore the medieval marble walls and Roman temple of Évora before settling into a private family estate for slow-roasted Porco Preto and robust, sun-ripened Alentejano reds."
    ],
    highlights: [
      "Private walking tour of a sustainable cork oak forest (Montado)",
      "Exclusive tasting of unfiltered Vinho de Talha from clay amphorae",
      "Gourmet multi-course lunch celebrating acorn-fed Porco Preto and local cheeses",
      "Guided walk through the Roman Temple and Gothic streets of Évora"
    ],
    included: [
      "Private Mercedes-Benz SUV transport from Lisbon with Wi-Fi",
      "Private estate visits and cellarmaster tasting sessions",
      "Traditional Alentejano feast with premium estate wine pairings",
      "Olive oil tasting of cold-pressed Galega extra virgin olive oils"
    ],
    excluded: [
      "Purchases of vintage wine bottles or handmade cork goods"
    ],
    meetingPoint: "Door-to-door pickup from any hotel or residence in Lisbon or Évora.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours prior",
      fees: ["Full refund up to 48 hours prior"]
    },
    bookingUrl: "/plan?tour=alentejo-amphora-cork-safari"
  },
  {
    id: "lisbon-fado-michelin-terroir",
    slug: "lisbon-fado-candlelight-colares-atlantic-terroir",
    sameAs: null,
    title: "Lisbon & Sintra: Atlantic Colares Dunes, Historic Petiscos & Candlelit Fado",
    operator: "Bairro Alto Culinary Circle",
    city: "lisbon",
    startsIn: "lisbon",
    category: "michelin-terroir",
    duration: "Evening (5 hours)",
    hours: 5,
    price: 185,
    currency: "EUR",
    rating: 4.96,
    reviews: 176,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: false,
    featured: true,
    pickup: "Chiado, central Lisbon",
    languages: ["English", "Portuguese", "French"],
    images: [
      "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85"
    ],
    summary:
      "Taste the salt-sprayed pre-phylloxera sand-dune wines of Colares, wander through candlelit Alfama cobblestones, and experience authentic acoustic Fado accompanied by traditional petiscos and artisanal cheeses.",
    description: [
      "Lisbon's culinary soul is intertwined with maritime breezes and poignant music. Taste the rarest wines in Europe: Ramisco grapes from Colares grown directly in Atlantic sand dunes that phylloxera could never reach.",
      "Wind through the labyrinth of Alfama as the street lamps illuminate. Avoid tourist-trap dinner shows and sit in an authentic 80-year-old tasca where local fadistas sing in raw, unamplified candlelight.",
      "Savor octopus slow-braised with garlic and coriander, grilled chouriço flamed tableside, and aged Azeitão raw-milk sheep's cheese."
    ],
    highlights: [
      "Tasting of rare ungrafted Colares DOC Atlantic sand wines",
      "Authentic candlelight Fado performance in an historic Alfama tavern",
      "Curated 5-course petiscos tasting with artisanal Portuguese wine pairings",
      "Insider stories of Lisbon's Bohemian culinary history"
    ],
    included: [
      "Culinary storyteller and music historian guide",
      "All petiscos courses, cheese boards, and dessert pairings",
      "Premium wine flight including Colares DOC and Douro reserves",
      "Reserved seating at an authentic neighborhood Fado house"
    ],
    excluded: [
      "Additional spirits or cocktails after the tasting flight"
    ],
    meetingPoint: "Praça Luís de Camões, under the statue, Chiado, Lisbon.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 24 hours before start",
      fees: ["Full refund up to 24 hours before tour start"]
    },
    bookingUrl: "/plan?tour=lisbon-fado-michelin-terroir"
  },
  {
    id: "minho-vinho-verde-manors",
    slug: "minho-vinho-verde-granite-manors-alvarinho-trail",
    sameAs: null,
    title: "Minho & Vinho Verde: 17th-Century Granite Manors & Alvarinho Trail",
    operator: "Quintas do Norte Viticulture",
    city: "minho",
    startsIn: "porto",
    category: "rabelo-cruise",
    duration: "Full day (8.5 hours)",
    hours: 8.5,
    price: 245,
    currency: "EUR",
    rating: 4.97,
    reviews: 83,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: false,
    pickup: "Private hotel pickup in Porto or Braga",
    languages: ["English", "Portuguese", "Spanish"],
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85"
    ],
    summary:
      "Travel north to the lush green valleys of the Minho. Walk high pergola-trellised vines, explore 17th-century baroque granite solar estates in Monção & Melgaço, and taste world-class mineral Alvarinhos paired with river trout and artisan broa.",
    description: [
      "Vinho Verde is not a green grape, but a young, vibrant style born from the verdant, rain-kissed hills of the northern Minho region.",
      "Explore noble manor houses (Solares) where noble families have crafted single-estate Alvarinho for generations.",
      "Experience crisp, mineral, floral wines that redefine what Vinho Verde can be, accompanied by wood-oven corn bread (broa de milho), cured hams, and fresh local river catches."
    ],
    highlights: [
      "Private access to a 17th-century baroque granite estate garden and cellar",
      "Masterclass in Monção and Melgaço single-terroir Alvarinho wines",
      "Traditional Minho lunch prepared by estate private cooks",
      "Scenic walk through the historic ramparts of Valença do Minho"
    ],
    included: [
      "Private executive chauffeured vehicle for the day",
      "Dedicated bilingual oenologist guide",
      "Tasting flights of 8 premium Vinho Verde & Alvarinho reserves",
      "Complete 3-course regional estate lunch with wine"
    ],
    excluded: [
      "Personal cellar acquisitions"
    ],
    meetingPoint: "Direct pickup at your accommodation in Porto, Guimarães, or Braga.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours in advance",
      fees: ["Full refund up to 48 hours prior"]
    },
    bookingUrl: "/plan?tour=minho-vinho-verde-manors"
  },
  {
    id: "douro-harvest-foot-treading",
    slug: "douro-vintage-grape-harvest-lagar-foot-treading",
    sameAs: null,
    title: "Douro Autumn Harvest: Traditional Granite Lagar Foot-Treading & Feast",
    operator: "Quinta do Pinhão Heritage Cellars",
    city: "douro-valley",
    startsIn: "porto",
    category: "harvest-expedition",
    duration: "Full day (9.5 hours)",
    hours: 9.5,
    price: 380,
    currency: "EUR",
    rating: 5.0,
    reviews: 64,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: true,
    pickup: "Private pickup in Porto or Douro Valley hotels",
    languages: ["English", "Portuguese"],
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85"
    ],
    summary:
      "Join the sacred autumn ritual of the Douro harvest. Pick grapes alongside estate pickers on terraced hillsides, roll up your trousers for traditional barefoot granite lagar foot-treading with accordion music, and toast with fresh fermenting must.",
    description: [
      "Every September and October, the Douro awakens to the rhythm of harvest songs. Step into granite troughs (lagares) that have been used since Roman antiquity to crush grapes with human warmth, keeping tannin extraction gentle and balanced.",
      "Sing alongside local pickers as the rhythm of the harvest takes hold, followed by an unforgettable festive outdoor banquet overlooking the Douro river under olive trees.",
      "Taste unreleased barrel samples alongside aged Tawny Ports that were trodden in the very same lagares 30 years ago."
    ],
    highlights: [
      "Hands-on participation in grape harvest picking on schist terraces",
      "Authentic lagar foot-treading experience in historic granite stone tanks",
      "Celebratory harvest feast with live accordion folklore and roasted meats",
      "Barrel room tasting of vintage must and 30-year aged Port reserves"
    ],
    included: [
      "Full private transport with driver",
      "Harvest kit (shears, estate apron, straw hat)",
      "Lagar participation and washing facilities",
      "Abundant harvest lunch and unlimited estate wines"
    ],
    excluded: [
      "Shipping costs for custom wine orders"
    ],
    meetingPoint: "Private hotel pickup in Porto or Peso da Régua.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 72 hours prior",
      fees: ["Full refund up to 72 hours prior to harvest date"]
    },
    bookingUrl: "/plan?tour=douro-harvest-foot-treading"
  }
]
