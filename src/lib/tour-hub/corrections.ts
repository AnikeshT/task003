/** Slips in operators' text that would otherwise reach the page. Links keep the operator's spelling. */
const SLIPS: [RegExp, string][] = [
  [/\*\*/g, ""],
  [/^[•*·]\s*/, ""],
  [/\bgloval\b/gi, "Global"],
  [/\bmordern\b/gi, "Modern"],
  [/\bmiracle garde\b/gi, "Miracle Garden"],
  [/\babu ?dhabi\b/gi, "Abu Dhabi"],
  [/\blouver\b/gi, "Louvre"],
  [/\bwarner brother\b/gi, "Warner Bros."],
  [/\bwahad al karama\b/gi, "Wahat Al Karama"],
  [/\bminiumm\b/gi, "Minimum"],
  [/\bthunder your eyes\b/gi, "catch your eye"],
  [/\bpvt\b/gi, "Private"],
  [/\bteam lab\b/gi, "teamLab"],
  [/\bthe largest city in the United Arab Emirates/gi, "the capital of the United Arab Emirates"],
  [/\bthe world[’']s fastest roller coaster\b/gi, "one of the world’s fastest roller coasters"],
  [/[.!]*!{2,}|\.!+/g, "!"],
]

const TITLE_SLIPS: [RegExp, string][] = [
  [/^from dubai abu dhabi city tour\b/i, "Abu Dhabi City Tour from Dubai:"],
  [/^Best Hatta Tour Deals from Dubai: /i, ""],
  [/\(\s*(\d+) days? tour\s*\)/gi, "($1 Days)"],
  [/\bhalf hrs\b/gi, "Half-Hour"],
  [/(\d)Hours\b/g, "$1 Hours"],
  [/\bDubai\.\s*\(/g, "Dubai ("],
  [/\bwith,/gi, "with"],
  [/\bvip\b/gi, "VIP"],
  [/\bfrom dubai\b/gi, "from Dubai"],
  [/\s*\+\s*/g, " + "],
  [/^Private\s?-\s?/i, "Private "],
  [/\b(city|desert) tour\b/gi, "$1 Tour"],
  [/\bcity Tour\b/g, "City Tour"],
  [/\bFerrari world\b/g, "Ferrari World"],
]

/** Four shouted words or more become a sentence. */
const calm = (s: string) =>
  s.replace(/\b[A-Z]{2,}(?:[ ,]+[A-Z]{2,}){3,}\b/g, (shout) => {
    const quiet = shout.toLowerCase().replace(/\b(dubai|abu dhabi)\b/g, (p) => p.replace(/\b\w/g, (c) => c.toUpperCase()))
    return quiet[0].toUpperCase() + quiet.slice(1)
  })

const apply = (s: string, rules: [RegExp, string][]) => rules.reduce((text, [slip, fix]) => text.replace(slip, fix), s)

export const correct = (s: string) => calm(apply(s.trim(), SLIPS)).trim()
export const correctTitle = (s: string) => apply(correct(s), TITLE_SLIPS).replace(/\s{2,}/g, " ").replace(/\.$/, "").trim()

/** Lines an operator lists as included that a guest wouldn't get. */
export const NOT_REALLY_INCLUDED = /under renovation|temporarily closed|exclusions$/i
