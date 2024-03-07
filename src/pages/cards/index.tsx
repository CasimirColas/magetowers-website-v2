import GameCard from "@/components/cards/GameCard";
import {
  cardCategory,
  cardCategoryList,
  cardsNameList,
  manaType,
  manaTypeList,
} from "@/components/cards/types";
import DefaultLayout from "@/components/layout/DefaultLayout";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { cardsDictionary as d } from "@/components/cards/dictionary";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import DetailsDialog from "@/components/utility/DetailsDialog";
import CardFilters from "@/components/pages/cards/CardFilters";
import Image from "next/image";

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
    <DefaultLayout
      title={c("routes.cards")}
      className="flex flex-col bg-iceland bg-cover bg-center bg-fixed"
    >
      <CardFilters setFilters={setFilters} filters={filters} />
      <div className="overflow-auto flex gap-8 sm:px-0 sm:gap-4 flex-wrap justify-center h-full sm:pt-28 pb-6 pt-56">
        {displayedCardNames.length === 0 ? (
          <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center pt-24">
            <div className="flex justify-center items-center flex-col aspect-[744/507] h-[20vh] w-auto">
              <Image
                src={"/illustrations/confusion.png"}
                width={400}
                height={400}
                alt="confused face"
                className="w-full border-b-2 border-slate-600"
              />
              <p className="w-full text-center bg-slate-600 text-white p-2 sm:p-4 rounded-b-md bg-opacity-50">
                {c("errors.no_cards")}
              </p>
            </div>
          </div>
        ) : null}
        {displayedCardNames.map((name, index) => (
          <DetailsDialog
            key={index}
            trigger={
              <div
                className="sm:w-[6.3cm] w-[40vw] snap-center aspect-card sm:h-auto rounded-md overflow-hidden sm:hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                  boxShadow: "4px 4px 15px 3px rgba(0, 0, 0, 0.3)",
                }}
              >
                <GameCard name={name} id={index + "-map"} className="w-full" />
              </div>
            }
          >
            <GameCard
              name={name}
              id={index + "-map-detail"}
              className="w-auto h-[80vh] rounded-xl"
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
