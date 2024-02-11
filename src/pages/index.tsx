import { useTranslations } from "next-intl";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import LandingSection from "@/components/home/LandingSection";
import ScreenSection from "@/components/layout/ScreenSection";
import VideoSection from "@/components/home/VideoSection";

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
      <ScreenSection className="bg-green-200 flex flex-col justify-between">
        <p>start</p>
        <p>end</p>
      </ScreenSection>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common"], locale);
}
