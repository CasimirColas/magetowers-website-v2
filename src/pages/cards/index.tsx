import Card from "@/components/cards/Card";
import {
  cardCategory,
  cardsNameList,
  manaType,
} from "@/components/cards/types";
import DefaultLayout from "@/components/layout/DefaultLayout";
import CardManaSelector from "@/components/pages/cards/CardManaSelector";
import CardSearch from "@/components/pages/cards/CardSearch";
import CardTypeSelector from "@/components/pages/cards/CardTypeSelector";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { cardsDictionary as d } from "@/components/cards/dictionary";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export type CardFilter = {
  type: cardCategory[];
  mana: manaType[];
  search: string | null;
};

export default function Cards() {
  const c = useTranslations("common");
  const ct = useTranslations("cards");
  const [filters, setFilters] = useState<CardFilter>({
    type: [],
    mana: [],
    search: null,
  });
  const [displayedCardNames, setDisplayedCardNames] = useState(cardsNameList);

  useEffect(() => {
    const filteredCards = cardsNameList.filter((card) => {
      const cardData = d[card];
      if (
        filters.mana.length > 0 &&
        // @ts-ignore - when manaType is null works as expected
        !filters.mana.includes(cardData.manaType)
      ) {
        return false;
      }
      if (
        filters.type.length > 0 &&
        !filters.type.includes(cardData.category)
      ) {
        return false;
      }
      if (
        filters.search &&
        !ct(`${cardData.translation_key}.name`)
          .toLowerCase()
          .includes(filters.search.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
    setDisplayedCardNames(filteredCards);
  }, [filters]);

  return (
    <DefaultLayout title={c("routes.cards")}>
      <div className="flex p-6 gap-4">
        <CardTypeSelector
          className="w-44"
          setState={setFilters}
          values={filters.type}
        />
        <CardManaSelector
          className="w-44"
          setState={setFilters}
          values={filters.mana}
        />
        <CardSearch className="w-44" setState={setFilters} />
      </div>
      <div className="flex gap-4 w-full justify-center  items-center flex-wrap">
        {displayedCardNames.map((name, index) => (
          <Card
            key={name}
            name={name}
            id={index + "-map"}
            className="w-[6.3cm]"
          />
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "cards"], locale);
}
