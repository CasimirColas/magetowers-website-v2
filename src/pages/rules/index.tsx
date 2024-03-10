import DefaultLayout from "@/components/layout/DefaultLayout";
import MobileView from "@/components/pages/rules/MobileView";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Rules() {
  const c = useTranslations("common");
  return (
    <DefaultLayout title={c("routes.rules")}>
      <MobileView />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "rules", "cards"], locale);
}
