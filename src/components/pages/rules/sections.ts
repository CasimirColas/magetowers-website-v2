export const sections = [
  "history",
  "cards",
  "setup",
  "gameplay",
  "mana",
  "spells",
  "incantations",
  "composition",
  "faq",
] as const;

export type RulesSection = (typeof sections)[number];
