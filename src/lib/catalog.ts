/** Canonical Salty & Clever fleet catalog — storefront source of truth. */

import {
  CARD_OCCASION_OS,
  CARD_RESTAURANT_INTELLIGENCE,
} from "@/data/media";

export const STOREFRONT = {
  name: "Salty Desk",
  brand: "Salty & Clever",
  attitude: "Vanity or Vice",
  tagline: "Host & dine intelligence storefront",
  description:
    "Reader-job-first cards for Salty & Clever tools. Plan the night you can actually host, rank restaurants with unknowns still visible — then carry results only when you choose.",
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
    id: "occasion-os",
    code: "SC-OOS-001",
    name: "Occasion Operating System",
    tagline: "Plan the night you can actually host",
    suite: "host",
    status: "Ready",
    badges: ["Host plan", "Architecture", "Service route"],
    description:
      "Four layers in one visual system: Plan (feasibility, shopping, prep clock, service), Architecture (five-role menu builder, stress meters, anchor lock), Card (printable guest card), and Library. Dietary categories stay planning filters — never allergy guarantees.",
    intelligence: [
      "Condition-driven host plan (guests, service style, attention, capacity)",
      "Architecture layer: five roles, stress test, lock-an-anchor, service plan",
      "Controlled route: shop → prep → serve without theater",
      "Food-safety boundary surfaced on every plan",
      "Printable guest card + dish library workshop",
      "Cross-links into Restaurant Intelligence when dining out wins",
    ],
    population: [
      { label: "Layers", value: "4" },
      { label: "Modes", value: "Host + Dine" },
      { label: "Roles", value: "5" },
      { label: "Situations", value: "11+" },
      { label: "Boundary", value: "Dietary ≠ allergy-safe" },
      { label: "Storage", value: "Local + plan state" },
    ],
    doesNot: [
      "Allergen-safe guarantees",
      "Silent cross-app inference",
      "Star ratings or social proof",
      "Forced accounts for core planning",
    ],
    href: "https://occasion.saltnotes.blog/",
    detailsPath: "/#app-occasion-os",
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
    href: "https://deep-dish-decision-e3c9f8ee.vercel.app/",
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
      "Architecture the menu inside Occasion OS, stress-test service, then run the night from one host plan — vanity without the collapse, vice without the chaos.",
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
    title: "Host plan + menu architecture",
    appId: "occasion-os",
    summary:
      "Declare occasion, guests, service, equipment, and dietary filters. Use Architecture for five-role menu building and stress meters, then Plan for shop → prep → serve.",
  },
  {
    step: 2,
    title: "Or dine out",
    appId: "restaurant-intelligence",
    summary:
      "When the night is better off-site, rank restaurants by situation — occasion, party, commitment, unknowns — and confirm the hard details live.",
  },
] as const;

export const HANDOFFS = [
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
  { label: "Live apps", value: "2", note: "Equal intelligence depth" },
  { label: "OOS layers", value: "4", note: "Plan · Architecture · Card · Library" },
  { label: "RI case files", value: "41+", note: "First-party only" },
  { label: "Regions covered", value: "26+", note: "Expanding archive" },
  { label: "Architecture roles", value: "5", note: "Inside Occasion OS" },
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
