import type { City, Question } from "@/data/tours"

export const cityQuestions: Record<City, Question[]> = {
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
  alentejo: [
    {
      q: "What is Vinho de Talha in Alentejo?",
      a: "Vinho de Talha is a 2,000-year-old Roman winemaking tradition preserved in Alentejo, where grapes ferment with skins and stems inside giant beeswax-coated clay amphorae.",
    },
    {
      q: "What is the Montado in Alentejo?",
      a: "The Montado is Portugal's unique agro-silvo-pastoral ecosystem of cork oak trees where black Iberian pigs roam freely eating sweet acorns.",
    },
  ],
  lisbon: [
    {
      q: "What are the historic wines of the Lisbon region?",
      a: "The most famous is Colares DOC, made from ungrafted Ramisco vines grown directly in sand dunes along the Atlantic coast, producing high-tannin, saline, long-aging reds.",
    },
    {
      q: "Where is the best authentic Fado in Lisbon?",
      a: "In the narrow, candlelit cobblestone alleys of Alfama and Mouraria, in small historic tascas where fadistas sing acoustic and unamplified.",
    },
  ],
  minho: [
    {
      q: "Is Vinho Verde always white?",
      a: "While white Alvarinho and Loureiro are the most famous globally, Vinho Verde also produces crisp rosés and traditional rustic tart reds like Vinhão.",
    },
    {
      q: "Why is the wine called 'Verde' (Green)?",
      a: "It refers to the youth and freshness of the wine—and the lush green, rain-kissed landscape of northern Portugal—not the color of the grape.",
    },
  ],
}
