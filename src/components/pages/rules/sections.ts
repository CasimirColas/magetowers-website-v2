export const sections = [
  "history",
  "cards",
  "setup",
  "gameplay",
  "mana",
  "catalysts",
  "spells",
  "incantations",
  "composition",
  "faq",
] as const;

export type RulesSection = (typeof sections)[number];
