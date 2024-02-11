import { useTranslations } from "next-intl";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import LandingSection from "@/components/home/LandingSection";
import VideoSection from "@/components/home/VideoSection";
import ExpectationSection from "@/components/home/ExpectationSection";
import PowerSection from "@/components/home/PowerSection";
import FutureSection from "@/components/home/FutureSection";
import ThanksSection from "@/components/home/ThanksSection";

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
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common"], locale);
}
