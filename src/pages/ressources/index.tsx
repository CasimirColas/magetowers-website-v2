import DefaultLayout from "@/components/layout/DefaultLayout";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import LinksCard from "@/components/pages/ressources/LinksCard";

export default function Ressources() {
  const c = useTranslations("common");
  return (
    <DefaultLayout
      title={c("routes.ressources")}
      className="bg-skyWithTower bg-cover sm:bg-center bg-right-bottom flex justify-center items-center p-6"
    >
      <LinksCard />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "ressources"], locale);
}
