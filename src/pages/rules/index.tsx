import DefaultLayout from "@/components/layout/DefaultLayout";
import DesktopView from "@/components/pages/rules/DesktopView";
import MobileView from "@/components/pages/rules/MobileView";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Rules() {
  const c = useTranslations("common");
  const isLg = useMediaQuery("lg");
  return (
    <DefaultLayout title={c("routes.rules")}>
      {isLg ? <DesktopView /> : <MobileView />}
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "rules", "cards"], locale);
}
