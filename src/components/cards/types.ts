// Inner Object types

export type cardCategory = "block" | "spell" | "glyph" | "utility";

// Mana types

export type manaType =
  | "destruction"
  | "arcane"
  | "order"
  | "chaos"
  | "creation";

// Objects
export interface BlockObject {
  category: cardCategory;
  name: string;
  image: string;
  desc: string;
  warning?: string;
}

export interface GlyphObject {
  category: cardCategory;
  name: string;
  image: string;
  desc: string;
  warning?: string;
}

export interface SpellObject {
  category: cardCategory;
  name: string;
  image: string;
  sigil: string;
  sectionName: string;
  level1?: string;
  level2?: string;
  level3?: string;
  level4?: string;
}

export interface UtilityObject {
  category: cardCategory;
  name: string;
  image: string;
  desc: string;
  warning?: string;
}
export type CardsObjects =
  | BlockObject
  | SpellObject
  | GlyphObject
  | UtilityObject;

// Names
export type CardNames = BlockNames | SpellNames | GlyphNames | UtilityNames;

export type GlyphNames =
  | "destruction"
  | "arcane"
  | "order"
  | "chaos"
  | "creation";

export type BlockNames =
  | "catalyst"
  | "generator"
  | "arcaneMirror"
  | "observatory";

export type SpellNames =
  | "ignite"
  | "sacrifice"
  | "amplify"
  | "clearsight"
  | "benevolence"
  | "equality"
  | "mindControl"
  | "confusion"
  | "apotheosis";
export type UtilityNames = "renovation" | "spellcatcher";

// Lists
export const blockNameList: BlockNames[] = [
  "catalyst",
  "generator",
  "arcaneMirror",
  "observatory",
];
export const glyphNameList: GlyphNames[] = [
  "destruction",
  "arcane",
  "order",
  "chaos",
  "creation",
];
export const spellNameList: SpellNames[] = [
  "ignite",
  "sacrifice",
  "amplify",
  "clearsight",
  "benevolence",
  "equality",
  "mindControl",
  "confusion",
  "apotheosis",
];

export const utilityNameList: UtilityNames[] = ["renovation", "spellcatcher"];

export const cardsNameList: CardNames[] = ([] as CardNames[]).concat(
  blockNameList as CardNames[],
  glyphNameList as CardNames[],
  spellNameList as CardNames[],
  utilityNameList as CardNames[]
);
