/**
 * Dry Salty Desk asides — voice-aligned microcopy for the host desk.
 * A little extra on vanity; dry when the kitchen is already overcommitted.
 * Never marketing cadence.
 */
export const DESK_ASIDES = [
  "Vanity is allowed. The oven still has to finish on time.",
  "A beautiful menu is not a service plan.",
  "If three things need your hands at once, the menu is not finished.",
  "Desire the table. Then stress-test the half hour that owns it.",
  "Pretty plating is not a capacity guarantee.",
  "The host is still a guest of their own evening.",
  "Fail closed when the allergen boundary gets slippery.",
  "Theater is optional. Timing is not.",
  "Rank the room by occasion fit — not the photograph.",
  "Carry results forward only when you choose. Never silently.",
] as const;

export type DeskAsideLine = (typeof DESK_ASIDES)[number];
