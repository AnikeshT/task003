/**
 * Currencies fixed by law to another one: [anchor, units per one unit of the anchor].
 * Computed from the anchor, because averaged bank quotes for these can be 1–2% off.
 */
export const PEGS: Record<string, [anchor: string, rate: number]> = {
  BAM: ["EUR", 1.95583],
  CVE: ["EUR", 110.265],
  KMF: ["EUR", 491.96775],
  STN: ["EUR", 24.5],
  XAF: ["EUR", 655.957],
  XOF: ["EUR", 655.957],
  XPF: ["EUR", 119.331742],

  AED: ["USD", 3.6725],
  AWG: ["USD", 1.79],
  BBD: ["USD", 2],
  BHD: ["USD", 0.376],
  BMD: ["USD", 1],
  BSD: ["USD", 1],
  BZD: ["USD", 2],
  DJF: ["USD", 177.721],
  JOD: ["USD", 0.709],
  KYD: ["USD", 1 / 1.2],
  OMR: ["USD", 0.3845],
  PAB: ["USD", 1],
  QAR: ["USD", 3.64],
  SAR: ["USD", 3.75],
  XCD: ["USD", 2.7],
  XCG: ["USD", 1.79],

  FKP: ["GBP", 1],
  GIP: ["GBP", 1],
  SHP: ["GBP", 1],

  BND: ["SGD", 1],
  BTN: ["INR", 1],
  NPR: ["INR", 1.6],
  LSL: ["ZAR", 1],
  NAD: ["ZAR", 1],
  SZL: ["ZAR", 1],
  MOP: ["HKD", 1.03],
}

/**
 * Official and everyday rates are far apart here, so no published rate tells visitors what they would pay.
 * They see US dollars.
 */
export const UNRELIABLE = new Set(["CUP", "ERN", "IRR", "KPW", "LBP", "MMK", "SDG", "SSP", "SYP", "VES", "YER", "ZWG"])
