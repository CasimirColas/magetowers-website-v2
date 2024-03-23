import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { cardsDictionary as d } from "@/components/cards/dictionary";
import GameCard from "@/components/cards/GameCard";
import DefaultLayout from "@/components/layout/DefaultLayout";

function Print() {
  return (
    <DefaultLayout>
      <div className="flex flex-wrap w-full h-full overflow-auto justify-around gap-12 py-8">
        {Object.values(d).map((card) => (
          <GameCard
            key={card.name}
            name={card.name}
            id={`${card.name}-print`}
            className="h-[70vh] w-auto"
          />
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Print;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "cards"], locale);
}
