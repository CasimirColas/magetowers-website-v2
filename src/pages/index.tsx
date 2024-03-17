import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";
import MobileView from "@/components/pages/home/mobile/MobileView";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import DesktopView from "@/components/pages/home/desktop/DesktopView";

export default function Home() {
  const isLg = useMediaQuery("lg");

  useEffect(() => {
    return scrollBackgroundWithContent("main-text");
  }, []);
  return (
    <DefaultLayout className="snap-y snap-mandatory overflow-scroll sm:overflow-visible">
      {isLg ? <DesktopView /> : <MobileView />}
      <Toaster />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common", "cards"], locale);
}
