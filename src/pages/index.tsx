import { useTranslations } from "next-intl";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Home() {
  const t = useTranslations("home");
  const c = useTranslations("common");

  return (
    <DefaultLayout title={c("routes.")}>
      <p>test</p>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common"], locale);
}
