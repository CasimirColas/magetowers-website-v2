export const sections = [
  "history",
  "setup",
  "gameplay",
  "cards",
  "mana",
  "catalysts",
  "spells",
  "incantations",
  "composition",
  "faq",
] as const;

export type RulesSection = (typeof sections)[number];
