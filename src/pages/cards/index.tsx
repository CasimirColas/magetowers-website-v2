import Card from "@/components/cards/Card";
import {
  blockNameList,
  glyphNameList,
  utilityNameList,
} from "@/components/cards/types";
import DefaultLayout from "@/components/layout/DefaultLayout";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Cards() {
  const c = useTranslations("common");
  return (
    <DefaultLayout title={c("routes.cards")}>
      <div>Welcome to Cards</div>
      <div className="flex gap-2 w-full justify-center  items-center">
        {utilityNameList.map((name, index) => (
          <Card key={name} name={name} id={index + "-map"} />
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "cards"], locale);
}
