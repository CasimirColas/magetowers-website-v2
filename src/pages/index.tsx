import { useTranslations } from "next-intl";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import LandingSection from "@/components/pages/home/LandingSection";
import VideoSection from "@/components/pages/home/VideoSection";
import ExpectationSection from "@/components/pages/home/ExpectationSection";
import PowerSection from "@/components/pages/home/PowerSection";
import FutureSection from "@/components/pages/home/FutureSection";
import ThanksSection from "@/components/pages/home/ThanksSection";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const t = useTranslations("home");
  const c = useTranslations("common");

  return (
    <DefaultLayout
      title={c("routes.")}
      className="snap-y snap-mandatory overflow-scroll sm:overflow-visible"
    >
      <LandingSection />
      <VideoSection />
      <ExpectationSection />
      <PowerSection />
      <FutureSection />
      <ThanksSection />
      <Toaster />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common"], locale);
}
