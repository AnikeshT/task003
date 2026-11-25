import type { City, Question } from "@/data/tours"

export const cityQuestions: Record<City, Question[]> = {
  barcelona: [
    {
      q: "How far is the Penedès wine region from Barcelona?",
      a: "Penedès is only 45 minutes south-west of central Barcelona by private car. Our tours include luxury Mercedes-Benz chauffeur pickup directly from your hotel.",
    },
    {
      q: "What makes Cava different from Champagne or Prosecco?",
      a: "Cava is produced using the exact same Traditional Method (Méthode Champenoise) as Champagne, with secondary fermentation inside the bottle. Gran Reserva Cavas spend at least 30 to 48 months on lees, giving them creamy fine bubbles and nutty brioche notes.",
    },
    {
      q: "What culinary specialties are paired during the tour?",
      a: "You will savor 100% acorn-fed Jamón Ibérico de Bellota, artisan Pan con Tomate with virgin Catalan olive oil, Boquerones, Palamós gambas, and aged Manchego.",
    },
  ],
  santorini: [
    {
      q: "What makes Santorini's vineyards unique in the world?",
      a: "Santorini's volcanic soils contain zero organic matter, making them immune to phylloxera. The vines are ungrafted, with root systems up to 400 years old trained into circular ground baskets (kouloura) to shield grapes from sea winds.",
    },
    {
      q: "What does Assyrtiko taste like?",
      a: "Assyrtiko is a world-class white wine known for its razor-sharp acidity, intense mineral salinity, flinty citrus notes, and profound aging potential comparable to Grand Cru Chablis.",
    },
    {
      q: "What is Vinsanto?",
      a: "Vinsanto is a naturally sweet dessert wine made from late-harvested Assyrtiko grapes sun-dried on caldera rooftops for two weeks, then barrel-aged in volcanic canavas for up to 20 years.",
    },
  ],
  sicily: [
    {
      q: "Can you visit wineries on an active volcano?",
      a: "Yes. The north and east slopes of Mount Etna are home to prestigious family estates. The volcanic soils are rich in minerals and basalt, producing wines of extraordinary finesse and freshness.",
    },
    {
      q: "What are the primary grapes of Mount Etna?",
      a: "Etna Rosso is made primarily from Nerello Mascalese, which produces elegant, pale ruby wines with red berry, smoke, and wild herb aromas. Etna Bianco is made from high-altitude Carricante grapes.",
    },
    {
      q: "Where do tours depart from in Sicily?",
      a: "Private chauffeur pickup is provided throughout Taormina, Catania, Giardini Naxos, or private resorts across eastern Sicily.",
    },
  ],
  "douro-valley": [
    {
      q: "How far is the Douro Valley from Porto?",
      a: "It takes about 1 hour and 30 minutes by private car or train to Peso da Régua and Pinhão along the scenic Estrada Nacional 222.",
    },
    {
      q: "Can I take a wooden rabelo boat cruise in the Douro?",
      a: "Yes. Traditional wooden rabelo boats depart from Pinhão and Tua, gliding through quiet river meanders where terraced vineyards meet the water.",
    },
    {
      q: "What is the grape harvest season in the Douro?",
      a: "The harvest (Vindimas) takes place between mid-September and late October, where you can experience traditional granite lagar foot-treading.",
    },
  ],
  porto: [
    {
      q: "Where are the famous Port wine cellars located?",
      a: "The historic Port lodges are situated along the south bank of the Douro river in Vila Nova de Gaia, directly across from Porto's Ribeira district.",
    },
    {
      q: "What is the difference between Tawny and Ruby Port?",
      a: "Ruby Port is aged in large oak vats or bottles, retaining vibrant berry fruit and deep purple color. Tawny Port matures in small oak casks (pipas), developing amber hues, nutty complexity, and dried fruit flavors over decades.",
    },
    {
      q: "What petiscos should I try in Porto?",
      a: "Do not miss Bolinhos de Bacalhau, fresh grilled sardines in Matosinhos, slow-roasted bifana, and aged Serra da Estrela mountain sheep's cheese.",
    },
  ],
}
