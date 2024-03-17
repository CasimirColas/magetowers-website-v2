import DefaultLayout from "@/components/layout/DefaultLayout";
import DesktopView from "@/components/pages/rules/DesktopView";
import MobileView from "@/components/pages/rules/MobileView";
import { RenderView } from "@/components/utility/RenderView";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Rules() {
  const c = useTranslations("common");
  return (
    <DefaultLayout title={c("routes.rules")}>
      {RenderView({
        breakpoint: "lg",
        desktop: <DesktopView />,
        mobile: <MobileView />,
      })}
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "rules", "cards"], locale);
}
