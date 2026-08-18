/**
 * Single source of truth for Salty Desk storefront imagery.
 * Prefer existing saltnotes.blog assets already licensed for the brand.
 * Do not scatter duplicate URLs across components — import from here only.
 */

export interface MediaAsset {
  id: string;
  url: string;
  alt: string;
  credit?: string;
  usage: "hero" | "card" | "band" | "og" | "logo";
}

/** Canonical hero — working kitchen pressure, last-thirty-minutes energy. */
export const HERO: MediaAsset = {
  id: "salty-hero",
  url: "https://i0.wp.com/saltnotes.blog/wp-content/uploads/2026/08/Build-the-Menu-Around-the-Last-30-Minutes-%E2%80%94-working-kitchen.jpg",
  alt: "Dimly lit working kitchen with a wall clock during active food service — the last thirty minutes that decide the night",
  credit: "Salt Notes media library",
  usage: "hero",
};

/** Host plan / occasion atmosphere. */
export const CARD_OCCASION_OS: MediaAsset = {
  id: "card-occasion-os",
  url: "https://i0.wp.com/saltnotes.blog/wp-content/uploads/2026/07/Party-Food.jpeg",
  alt: "Hosted table with party food ready to serve — the occasion without the theater",
  credit: "Salt Notes media library",
  usage: "card",
};

/** Restaurant intelligence — plating with receipts, not star ratings. */
export const CARD_RESTAURANT_INTELLIGENCE: MediaAsset = {
  id: "card-restaurant-intelligence",
  url: "https://i0.wp.com/saltnotes.blog/wp-content/uploads/2026/07/Chef-plating-restaurant-dish-overhead-%E2%80%94-Sebastian-Coman.jpg",
  alt: "Chef plating a restaurant dish from overhead — occasion fit over photograph",
  credit: "Salt Notes media library",
  usage: "card",
};

/** Band / secondary atmosphere. */
export const FAMILY_TABLE: MediaAsset = {
  id: "family-table",
  url: "https://i0.wp.com/saltnotes.blog/wp-content/uploads/2026/07/Family-Style-3.jpeg",
  alt: "Family-style spread overhead on a dark table — shared plates, real service pressure",
  credit: "Salt Notes media library",
  usage: "band",
};

/** Open Graph / social share fallback. */
export const OG: MediaAsset = {
  id: "salty-og",
  url: HERO.url,
  alt: "Salty Desk — sharp tools for the night you meant to host",
  usage: "og",
};

export const MEDIA_REGISTRY: Record<string, MediaAsset> = {
  [HERO.id]: HERO,
  [CARD_OCCASION_OS.id]: CARD_OCCASION_OS,
  [CARD_RESTAURANT_INTELLIGENCE.id]: CARD_RESTAURANT_INTELLIGENCE,
  [FAMILY_TABLE.id]: FAMILY_TABLE,
  [OG.id]: OG,
};

export function getMedia(id: string): MediaAsset | undefined {
  return MEDIA_REGISTRY[id];
}
