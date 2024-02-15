// Inner Object types

export type categoryName = "block" | "spell" | "glyph" | "utility";

// Objects
export interface BlockObject {
  category: categoryName;
  name: string;
  image: string;
  desc: string;
  warning?: string;
}

export interface GlyphObject {
  category: categoryName;
  name: string;
  image: string;
  desc: string;
  warning?: string;
}

export interface SpellObject {
  category: categoryName;
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
  category: categoryName;
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
  | "Destruction"
  | "Arcane"
  | "Order"
  | "Chaos"
  | "Creation";

export type BlockNames =
  | "Catalyst"
  | "Generator"
  | "ArcaneMirror"
  | "Observatory";

export type SpellNames =
  | "Ignite"
  | "Sacrifice"
  | "Amplify"
  | "Clearsight"
  | "Benevolence"
  | "Equality"
  | "MindControl"
  | "Confusion"
  | "Apotheosis";
export type UtilityNames = "Renovation" | "Spellcatcher";

// Lists
export const blockNameList: BlockNames[] = [
  "Catalyst",
  "Generator",
  "ArcaneMirror",
  "Observatory",
];
export const glyphNameList: GlyphNames[] = [
  "Destruction",
  "Arcane",
  "Order",
  "Chaos",
  "Creation",
];
export const spellNameList: SpellNames[] = [
  "Ignite",
  "Sacrifice",
  "Amplify",
  "Clearsight",
  "Benevolence",
  "Equality",
  "MindControl",
  "Confusion",
  "Apotheosis",
];

export const utilityNameList: UtilityNames[] = ["Renovation", "Spellcatcher"];

export const cardsNameList: CardNames[] = ([] as CardNames[]).concat(
  blockNameList as CardNames[],
  glyphNameList as CardNames[],
  spellNameList as CardNames[],
  utilityNameList as CardNames[]
);
