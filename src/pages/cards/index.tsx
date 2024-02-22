import Card from "@/components/cards/Card";
import {
  cardCategory,
  cardCategoryList,
  cardsNameList,
  manaType,
  manaTypeList,
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
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import DetailsDialog from "@/components/utility/DetailsDialog";

export type CardFilter = {
  type: cardCategory[];
  mana: manaType[];
  search: string | null;
};

export default function Cards() {
  const c = useTranslations("common");
  const ct = useTranslations("cards");
  const [filters, setFilters] = useState<CardFilter>({
    type: cardCategoryList,
    mana: manaTypeList,
    search: null,
  });
  const [displayedCardNames, setDisplayedCardNames] = useState(cardsNameList);

  useEffect(() => {
    const filteredCards = cardsNameList.filter((card) => {
      const cardData = d[card];
      if (!filters.mana.includes(cardData.manaType)) {
        return false;
      }
      if (!filters.type.includes(cardData.category)) {
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
      <div className="flex p-6 gap-4 sm:flex-row flex-col justify-center items-center">
        <div className="flex gap-4 sm:flex-row flex-col w-full sm:justify-end">
          <CardTypeSelector
            className="w-full sm:max-w-56"
            setState={setFilters}
            values={filters.type}
          />
          <CardManaSelector
            className="w-full sm:max-w-56"
            setState={setFilters}
            values={filters.mana}
          />
        </div>
        <div className="flex gap-4 w-full">
          <CardSearch className="w-2/3 sm:max-w-56" setState={setFilters} />
          <Button
            variant={"sky"}
            className="w-1/3 sm:max-w-56 flex justify-center items-center gap-2"
            onClick={() =>
              setFilters({
                type: cardCategoryList,
                mana: manaTypeList,
                search: null,
              })
            }
          >
            {c("buttons.reset")}
            <RotateCcw size={24} className="p-1" />
          </Button>
        </div>
      </div>
      {/* "flex gap-4 w-full justify-center items-center flex-wrap" */}
      <div className="overflow-scroll flex snap-x snap-mandatory gap-8 px-[4.5rem] sm:px-0 sm:gap-4 sm:flex-wrap sm:overflow-visible sm:justify-center">
        {displayedCardNames.map((name, index) => (
          <DetailsDialog
            key={index}
            trigger={
              <div className="sm:w-[6.3cm] w-[4cm] snap-center">
                <Card name={name} id={index + "-map"} className="w-full" />
              </div>
            }
          >
            <Card
              name={name}
              id={index + "-map-detail"}
              className="w-auto h-full"
            />
          </DetailsDialog>
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "cards"], locale);
}
