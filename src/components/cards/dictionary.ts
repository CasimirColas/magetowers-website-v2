import { CardNames, cardCategory, manaType } from "./types";

type CardDictionary = {
  count: number;
  category: cardCategory;
  manaType: manaType | null;
  cardImage: string;
  translation_key: string;
  description_keys: string[];
};

export const cardsDictionary: Record<CardNames, CardDictionary> = {
  destruction: {
    count: 5,
    category: "glyph",
    manaType: "destruction",
    cardImage: "/cards/destruction.png",
    translation_key: "destruction",
    description_keys: ["description"],
  },
  arcane: {
    count: 5,
    category: "glyph",
    manaType: "arcane",
    cardImage: "/cards/arcane.png",
    translation_key: "arcane",
    description_keys: ["description"],
  },
  order: {
    count: 5,
    category: "glyph",
    manaType: "order",
    cardImage: "/cards/order.png",
    translation_key: "order",
    description_keys: ["description"],
  },
  chaos: {
    count: 5,
    category: "glyph",
    manaType: "chaos",
    cardImage: "/cards/chaos.png",
    translation_key: "chaos",
    description_keys: ["description"],
  },
  creation: {
    count: 3,
    category: "glyph",
    manaType: "creation",
    cardImage: "/cards/creation.png",
    translation_key: "creation",
    description_keys: ["description"],
  },
  catalyst: {
    count: 12,
    category: "block",
    manaType: null,
    cardImage: "/cards/catalyst.png",
    translation_key: "catalyst",
    description_keys: ["description"],
  },
  generator: {
    count: 2,
    category: "block",
    manaType: null,
    cardImage: "/cards/generator.png",
    translation_key: "generator",
    description_keys: ["description", "warning"],
  },
  arcaneMirror: {
    count: 1,
    category: "block",
    manaType: null,
    cardImage: "/cards/arcane_mirror.png",
    translation_key: "arcane_mirror",
    description_keys: ["description", "warning"],
  },
  observatory: {
    count: 2,
    category: "block",
    manaType: null,
    cardImage: "/cards/observatory.png",
    translation_key: "observatory",
    description_keys: ["description", "warning"],
  },
  ignite: {
    count: 3,
    category: "spell",
    manaType: "destruction",
    cardImage: "/cards/ignite.png",
    translation_key: "ignite",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  sacrifice: {
    count: 3,
    category: "spell",
    manaType: "destruction",
    cardImage: "/cards/sacrifice.png",
    translation_key: "sacrifice",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  amplify: {
    count: 3,
    category: "spell",
    manaType: "arcane",
    cardImage: "/cards/amplify.png",
    translation_key: "amplify",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  clearsight: {
    count: 3,
    category: "spell",
    manaType: "arcane",
    cardImage: "/cards/clearsight.png",
    translation_key: "clearsight",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  benevolence: {
    count: 3,
    category: "spell",
    manaType: "order",
    cardImage: "/cards/benevolence.png",
    translation_key: "benevolence",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  equality: {
    count: 3,
    category: "spell",
    manaType: "order",
    cardImage: "/cards/equality.png",
    translation_key: "equality",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  mindControl: {
    count: 3,
    category: "spell",
    manaType: "chaos",
    cardImage: "/cards/mind_control.png",
    translation_key: "mind_control",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  confusion: {
    count: 3,
    category: "spell",
    manaType: "chaos",
    cardImage: "/cards/confusion.png",
    translation_key: "confusion",
    description_keys: ["level_1", "level_2", "level_3"],
  },
  apotheosis: {
    count: 2,
    category: "spell",
    manaType: "creation",
    cardImage: "/cards/apotheosis.png",
    translation_key: "apotheosis",
    description_keys: ["level_1", "level_2", "level_3", "level_4"],
  },
  spellcatcher: {
    count: 3,
    category: "utility",
    manaType: null,
    cardImage: "/cards/spellcatcher.png",
    translation_key: "spellcatcher",
    description_keys: ["description", "warning"],
  },
  renovation: {
    count: 3,
    category: "utility",
    manaType: null,
    cardImage: "/cards/renovation.png",
    translation_key: "renovation",
    description_keys: [
      "choose_option",
      "option_1",
      "option_2",
      "option_3",
      "warning",
    ],
  },
};
