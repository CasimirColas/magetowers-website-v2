import { useTranslations } from "next-intl";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";
import MobileView from "@/components/pages/home/mobile/MobileView";

export default function Home() {
  const t = useTranslations("home");
  const c = useTranslations("common");

  useEffect(() => {
    return scrollBackgroundWithContent("main-text");
  }, []);
  return (
    <DefaultLayout
      title={c("routes.")}
      className="snap-y snap-mandatory overflow-scroll sm:overflow-visible"
    >
      {/* <LandingSection />
      <VideoSection />
      <ExpectationSection />
      <PowerSection />
      <FutureSection />
      <ThanksSection /> */}
      <MobileView />
      <Toaster />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common"], locale);
}
