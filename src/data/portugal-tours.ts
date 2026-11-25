import type { Tour } from "./tours"

export const PORTUGAL_TOURS: Tour[] = [
  {
    id: "barcelona-wine-gourmet-food-tour",
    slug: "barcelona-wine-gourmet-food-tour",
    sameAs: null,
    title: "BARCELONA WINE & GOURMET FOOD TOUR",
    operator: "Catalan Sommelier Guild & Bodegas Torres",
    city: "barcelona",
    startsIn: "barcelona",
    category: "gourmet-pairing",
    duration: "Full day (7.5 hours)",
    hours: 7.5,
    price: 265,
    currency: "EUR",
    rating: 4.98,
    reviews: 184,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: true,
    pickup: "Private luxury chauffeur from any hotel or residence in Barcelona",
    languages: ["English", "Spanish", "Catalan", "French"],
    images: [
      "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=85",
    ],
    summary:
      "An unforgettable gastronomic pilgrimage through Barcelona and the chalk terroirs of Penedès. Taste vintage Gran Reserva Cava directly from historic underground cellars, savor hand-carved Jamón Ibérico de Bellota in the Gothic Quarter, and feast on a 5-course chef-table pairing lunch.",
    description: [
      "Catalonia is one of the Mediterranean's most storied culinary sanctuaries, where avant-garde gastronomic creativity meets ancient Roman and Benedictine winemaking heritage.",
      "Begin your morning with private chauffeured transport into the rolling chalk hills of Penedès. Step into a family-owned 18th-century bodega where the head winemaker guides you through subterranean chalk caves where Gran Reserva Cavas mature for up to 48 months.",
      "Return to Barcelona for an exclusive sommelier-curated culinary walk through the labyrinthine Gothic Quarter and El Born. Gain VIP access to historic bodegas and hidden tascas bypassed by tourists.",
      "Conclude with a private 5-course chef pairing menu featuring Palamós red prawns, Pa amb Tomàquet, acorn-fed Iberian ham, and artisan cheeses paired with rare mineral Priorat reds and barrel-aged Whites."
    ],
    highlights: [
      "Private VIP cellar tour and vintage barrel disgorgement tasting at a boutique Penedès estate",
      "Curated 5-stop gourmet tapas trail through Barcelona's Gothic Quarter and El Born",
      "Master sommelier guided pairing of 8 distinguished Catalan wines and Gran Reserva Cavas",
      "Private Mercedes-Benz chauffeur service throughout the entire day"
    ],
    included: [
      "Private Mercedes-Benz V-Class chauffeur service with Barcelona hotel pickup and drop-off",
      "Certified WSET Level 3 English-speaking Master Sommelier guide",
      "All private cellar tasting fees, reserve pours, and cave access",
      "5-course gourmet chef pairing lunch and all artisan tapas stops",
      "Acorn-fed Jamón Ibérico masterclass with master carver (Cortador)"
    ],
    excluded: [
      "Personal bottle purchases from estate private reserves",
      "Gratuities for restaurant and cellar staff"
    ],
    meetingPoint: "Direct pickup from your hotel, apartment, or cruise terminal in Barcelona.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours before departure",
      fees: ["Full refund if cancelled at least 48 hours prior", "50% refund within 24-48 hours"]
    },
    bookingUrl: "/plan?tour=barcelona-wine-gourmet-food-tour"
  },
  {
    id: "private-santorini-wine-tasting-tour",
    slug: "private-santorini-wine-tasting-tour",
    sameAs: null,
    title: "Private Santorini Wine Tasting Tour",
    operator: "Aegean Terroir & Estate Argyros Oenologists",
    city: "santorini",
    startsIn: "santorini",
    category: "volcanic-terroir",
    duration: "Sunset half day (5 hours)",
    hours: 5,
    price: 295,
    currency: "EUR",
    rating: 4.99,
    reviews: 247,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: true,
    pickup: "Private pickup from any hotel, villa, or Fira cable car in Santorini",
    languages: ["English", "Greek", "German"],
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=85",
    ],
    summary:
      "Uncover the volcanic soul of Santorini. Walk through 150-year-old un-grafted basket vines (kouloura) anchored in volcanic pumice, taste mineral Assyrtiko, Nyfteri, and amber Vinsanto across 3 celebrated cliffside wineries, capped by private caldera sunset dining.",
    description: [
      "Santorini's terroir is forged by violent volcanic eruptions. With no organic matter and constant Aegean Meltemi winds, ancient vines are trained into crown-shaped baskets (kouloura) low to the pumice ground.",
      "Join a dedicated oenologist for an intimate journey to 3 distinct historic canavas (wine cellars) carved directly into volcanic rock strata.",
      "Taste bone-dry, razor-sharp Assyrtiko renowned worldwide for its saline minerality, citrus blossom aromatics, and vibrant acidity, followed by rare oak-aged Nyfteri harvested only by moonlight.",
      "Finish on a private cliffside terrace suspended 300 meters above the Aegean caldera, sipping 20-year aged sun-dried Vinsanto accompanied by artisanal Cycladic mezze as the sun sets into the sea."
    ],
    highlights: [
      "Private VIP visits to 3 acclaimed caldera wineries including historic subterranean canavas",
      "Comprehensive sommelier tasting of 12 distinct volcanic wines including aged Vinsanto",
      "Walk through centuries-old un-grafted Kouloura basket vineyards with an oenologist",
      "Reserved front-row cliffside terrace for golden hour caldera sunset dining"
    ],
    included: [
      "Private air-conditioned luxury transport with island-wide hotel pickup",
      "Certified English-speaking Oenologist guide throughout the tour",
      "All tasting flights (12 premium wines including rare vintages)",
      "Generous Cycladic mezze platter: Santorini fava, sun-dried tomato patties, aged graviera, and caper leaves",
      "Chilled bottled mineral water and vineyard field guidebook"
    ],
    excluded: [
      "Additional cellar bottle purchases for international shipping",
      "Gratuities for your sommelier guide"
    ],
    meetingPoint: "Direct pickup from your hotel or private villa across Santorini, or from Fira port cruise tender station.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours before departure",
      fees: ["Full refund if cancelled at least 48 hours prior", "50% refund within 24-48 hours"]
    },
    bookingUrl: "/plan?tour=private-santorini-wine-tasting-tour"
  },
  {
    id: "sicily-vineyard-escape",
    slug: "sicily-vineyard-escape",
    sameAs: null,
    title: "Sicily Vineyard Escape",
    operator: "Etna DOC Consortium & Donnafugata Estates",
    city: "sicily",
    startsIn: "sicily",
    category: "vineyard-escape",
    duration: "Full day (8 hours)",
    hours: 8,
    price: 320,
    currency: "EUR",
    rating: 4.97,
    reviews: 168,
    tripadvisor: { url: "https://tripadvisor.com", host: false },
    isPrivate: true,
    featured: true,
    pickup: "Private chauffeured pickup in Taormina, Catania, or Etna wine resort",
    languages: ["English", "Italian", "German"],
    images: [
      "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85",
    ],
    summary:
      "Ascend the dramatic volcanic slopes of Mount Etna. Experience black volcanic basalt terraces, taste high-altitude Nerello Mascalese from 100-year-old pre-phylloxera vines, and enjoy a slow 4-course Sicilian country estate feast paired with Etna DOC crus.",
    description: [
      "Mount Etna is known to locals as 'Idda'—the Great Mother. Its fertile black volcanic soils, dramatic alpine day-night temperature swings, and mineral basalt terraces produce Italy's most exciting volcanic crus.",
      "Depart Taormina or Catania in a luxury private vehicle winding up through medieval stone villages and ancient chestnut groves to the northern slopes of the volcano (800-900m altitude).",
      "Visit two prestigious family-run cantinas constructed from dark porous volcanic stone. Walk through century-old ungrafted bush vines (alberello) rooted in historic lava flows.",
      "Savor vertical tastings of Etna Rosso, Etna Bianco Superiore, and volcanic Metodo Classico sparkling wine, followed by a lavish estate lunch featuring handmade pasta with wild fennel, Nebrodi black pig, Bronte pistachios, and fresh Sicilian cannoli."
    ],
    highlights: [
      "Private guided walk through high-altitude pre-phylloxera Alberello vineyards on Mount Etna",
      "Behind-the-scenes access to 2 historic volcanic stone cantinas with master winemakers",
      "Structured tasting of 9 premium Etna DOC crus including single-vineyard Contrada bottlings",
      "Traditional 4-course Sicilian country banquet with curated wine pairings"
    ],
    included: [
      "Private Mercedes-Benz chauffeur from Taormina, Catania, or nearby resorts",
      "Certified Italian AIS/WSET Sommelier and volcano expert guide",
      "All cantina tasting fees, barrel samples, and cellar entries",
      "4-course Sicilian estate luncheon with paired vintage wines",
      "Fresh cannoli and artisanal almond paste tasting"
    ],
    excluded: [
      "Personal cellar bottle orders shipped home",
      "Gratuities for estate staff"
    ],
    meetingPoint: "Direct pickup from your hotel or private villa in Taormina, Castelmola, Giardini Naxos, or Catania.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours before departure",
      fees: ["Full refund if cancelled at least 48 hours prior", "50% refund within 24-48 hours"]
    },
    bookingUrl: "/plan?tour=sicily-vineyard-escape"
  },
  {
    id: "douro-vintage-masterclass",
    slug: "douro-vintage-masterclass-private-quinta-rabelo",
    sameAs: null,
    title: "Douro Valley Vintage Masterclass: Private Quinta & Rabelo Cruise",
    operator: "Quinta do Crasto & Heritage Oenologists",
    city: "douro-valley",
    startsIn: "porto",
    category: "cellar-reserve",
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
      "1-hour private river cruise with sparkling Vinho toast"
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
    category: "gourmet-pairing",
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
      "Expert local sommelier storytelling guide",
      "All tasting flights across 2 historic Port wine lodges",
      "5 authentic petiscos courses with wine pairings",
      "Artisanal pastel de nata tasting"
    ],
    excluded: ["Hotel transfer", "Personal purchases"],
    meetingPoint: "Praça da Ribeira, beside the historic fountain, Porto.",
    cancellation: {
      free: true,
      title: "Free cancellation up to 48 hours before departure",
      fees: ["Full refund if cancelled at least 48 hours prior"]
    },
    bookingUrl: "/plan?tour=porto-secret-lodges-petiscos"
  }
]
