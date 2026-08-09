/** Canonical Salty & Clever fleet catalog — storefront source of truth. */

import {
  CARD_MENU_BUILDER,
  CARD_OCCASION_OS,
  CARD_RESTAURANT_INTELLIGENCE,
} from "@/data/media";

export const STOREFRONT = {
  name: "Salty Desk",
  brand: "Salty & Clever",
  attitude: "Vanity or Vice",
  tagline: "Host & dine intelligence storefront",
  description:
    "Reader-job-first cards for Salty & Clever tools. Stress-test the menu you can host, plan the night without theater, rank restaurants with unknowns still visible — then carry results only when you choose.",
  constraints:
    "Educational planning only · first-party evidence · explicit handoffs · no allergen safety guarantees",
  blog: "https://saltnotes.blog",
  company: "Northern Lantern House LLC",
} as const;

export type AppStatus = "Ready" | "Preview";

export type AppCard = {
  id: string;
  code: string;
  name: string;
  tagline: string;
  suite: "host" | "dine";
  status: AppStatus;
  badges: string[];
  description: string;
  intelligence: string[];
  population: { label: string; value: string }[];
  doesNot: string[];
  href: string;
  detailsPath: string;
  handoffContract?: string;
  image?: string;
  imageAlt?: string;
};

export const APPS: AppCard[] = [
  {
    id: "menu-builder",
    code: "SC-MB-001",
    name: "Menu Builder",
    tagline: "Build the menu your kitchen can actually pull off",
    suite: "host",
    status: "Ready",
    badges: ["Deterministic engine", "Anchor lock", "Local-first"],
    description:
      "Five-role architecture, stress meters, anchor locking, simplification, and hard stops. Scores Balance, Make Ahead, Service Fit, Equipment Fit, and Host Freedom from your declared inputs — then hands a clean packet to Occasion OS.",
    intelligence: [
      "Five roles + congruence / contrast / balanced pairing modes",
      "Operational stress test with hard stops (allergen boundary, plated capacity)",
      "Anchor re-scoring when you lock a dish",
      "Bounded budget-pressure simplification (additive, non-formula-breaking)",
      "Portable JSON export + local history (v2 input / v1 history keys)",
      "Handoff contract 1.1.0 → Occasion OS (postMessage + opener)",
    ],
    population: [
      { label: "Engine", value: "0.4.3" },
      { label: "Package", value: "0.5.0" },
      { label: "Contract", value: "1.1.0" },
      { label: "Roles", value: "5" },
      { label: "Stress axes", value: "5" },
      { label: "Storage", value: "Browser only" },
    ],
    doesNot: [
      "AI menu generation",
      "Allergen safety or cross-contact control",
      "Recipes, pricing, or nutrition advice",
      "Accounts or cloud sync",
    ],
    href: "https://salty-menu-builder.vercel.app/",
    detailsPath: "/#app-menu-builder",
    handoffContract: "SC-MB-001 → SC-OOS-001@1.1.0",
    image: CARD_MENU_BUILDER.url,
    imageAlt: CARD_MENU_BUILDER.alt,
  },
  {
    id: "occasion-os",
    code: "SC-OOS-001",
    name: "Occasion Operating System",
    tagline: "Plan the night you can actually host",
    suite: "host",
    status: "Ready",
    badges: ["Host plan", "Service route", "Food-safety boundary"],
    description:
      "Set conditions, build a controlled hosting route, then shop, prep, and serve from one plan. Receives Menu Builder packets, keeps dietary categories as planning filters (never allergy guarantees), and stays on the same Vanity-or-Vice brand system as the rest of the desk.",
    intelligence: [
      "Condition-driven host plan (guests, service style, attention, capacity)",
      "Controlled route: shop → prep → serve without theater",
      "Menu Builder handoff receiver (contract 1.1.0)",
      "Food-safety boundary surfaced on every plan",
      "Shared fleet a11y prefs + print-friendly plan views",
      "Cross-links into Restaurant Intelligence when dining out wins",
    ],
    population: [
      { label: "Build", value: "1.8.0-intel" },
      { label: "Modes", value: "Host + Dine" },
      { label: "Handoff in", value: "Menu Builder" },
      { label: "Handoff out", value: "RI compare" },
      { label: "Boundary", value: "Dietary ≠ allergy-safe" },
      { label: "Storage", value: "Local + plan state" },
    ],
    doesNot: [
      "Allergen-safe guarantees",
      "Silent cross-app inference",
      "Star ratings or social proof",
      "Forced accounts for core planning",
    ],
    href: "https://occasion-operating-system-u9cd.vercel.app/plan",
    detailsPath: "/#app-occasion-os",
    handoffContract: "SC-OOS-001 receives SC-MB-001@1.1.0",
    image: CARD_OCCASION_OS.url,
    imageAlt: CARD_OCCASION_OS.alt,
  },
  {
    id: "restaurant-intelligence",
    code: "SC-RI-001",
    name: "Restaurant Intelligence",
    tagline: "Dinner decisions with receipts — unknowns stay visible",
    suite: "dine",
    status: "Ready",
    badges: ["First-party case files", "Situation rank", "Conflicts preserved"],
    description:
      "Situation-aware ranking from first-party evidence only. Multi-layer findings, booking pathways, confirm burden, guest-constraint matrix, and official conflicts — so you choose the room that fits the occasion, not the photograph.",
    intelligence: [
      "Situation rank: occasion, party size, days-out, max commitment, planning load",
      "Multi-layer findings (critical + watch) with confidence labels",
      "Unknowns, thin fields, and official conflicts preserved — never collapsed",
      "Booking pathways: Phone, Resy, OpenTable, Tock, Direct",
      "Guest-constraint matrix: allergy, mobility, hard end, zero-proof",
      "Auto-review windows and freshness ops with live recomputation",
    ],
    population: [
      { label: "Records", value: "41+" },
      { label: "Regions", value: "26+" },
      { label: "Cuisine tags", value: "18" },
      { label: "Full case files", value: "41" },
      { label: "Pathways", value: "6" },
      { label: "Occasions", value: "14" },
    ],
    doesNot: [
      "Star ratings or aggregator scores",
      "Silent resolution of conflicting claims",
      "Live menu scraping as gospel",
      "Skipping direct confirmation on operating changes",
    ],
    href: "https://restaurant-intelligence-hub.vercel.app/",
    detailsPath: "/#app-restaurant-intelligence",
    image: CARD_RESTAURANT_INTELLIGENCE.url,
    imageAlt: CARD_RESTAURANT_INTELLIGENCE.alt,
  },
];

export const SUITES = [
  {
    id: "host" as const,
    label: "Host Decision Suite",
    title: "Before you commit the kitchen",
    blurb:
      "Architecture the menu, stress-test service, then run the night from one host plan — vanity without the collapse, vice without the chaos.",
  },
  {
    id: "dine" as const,
    label: "Dine Decision Suite",
    title: "Before you book the room",
    blurb:
      "Rank restaurants by occasion fit and operating reality. Keep unknowns, conflicts, and confirm burden in the open.",
  },
];

export const HOST_PATH = [
  {
    step: 1,
    title: "Menu architecture",
    appId: "menu-builder",
    summary:
      "Declare occasion, guests, service, host attention, and equipment. Lock an anchor if the table needs one. Simplify what will break.",
  },
  {
    step: 2,
    title: "Host plan",
    appId: "occasion-os",
    summary:
      "Carry the Menu Builder packet into Occasion OS. Build the shop → prep → serve route you can actually host.",
  },
  {
    step: 3,
    title: "Or dine out",
    appId: "restaurant-intelligence",
    summary:
      "When the night is better off-site, rank restaurants by situation — occasion, party, commitment, unknowns — and confirm the hard details live.",
  },
] as const;

export const HANDOFFS = [
  {
    from: "Menu Builder",
    fromCode: "SC-MB-001",
    to: "Occasion OS",
    toCode: "SC-OOS-001",
    packet: "Menu architecture + stress summary + anchor (contract 1.1.0)",
    mode: "Explicit postMessage / opener handoff",
    optional: false,
  },
  {
    from: "Occasion OS",
    fromCode: "SC-OOS-001",
    to: "Restaurant Intelligence",
    toCode: "SC-RI-001",
    packet: "Occasion context for dine-out comparison (reader-initiated)",
    mode: "Deep link / shared situation fields",
    optional: true,
  },
  {
    from: "Restaurant Intelligence",
    fromCode: "SC-RI-001",
    to: "Salt Notes records",
    toCode: "Editorial",
    packet: "First-party case file + evidence trail",
    mode: "Open on saltnotes.blog restaurant records",
    optional: true,
  },
] as const;

export const FLEET_STATS = [
  { label: "Live apps", value: "3", note: "Equal intelligence depth" },
  { label: "Handoff contracts", value: "1.1.0", note: "Menu → Occasion" },
  { label: "RI case files", value: "41+", note: "First-party only" },
  { label: "Regions covered", value: "26+", note: "Expanding archive" },
  { label: "Stress axes", value: "5", note: "Menu Builder" },
  { label: "Booking pathways", value: "6", note: "Phone → Direct" },
] as const;

export const BOUNDARY = [
  "No allergen safety or cross-contact control — dietary tags are planning filters only",
  "No silent movement of data between tools until you choose a handoff",
  "No star ratings, social proof collapse, or inferred “best restaurant” rankings",
  "No forced account for core planning tools",
  "Educational only — not professional kitchen, medical, or legal advice",
  "Fail closed on hard stops (capacity, allergen boundary, official conflicts)",
] as const;

export function appById(id: string): AppCard | undefined {
  return APPS.find((a) => a.id === id);
}
