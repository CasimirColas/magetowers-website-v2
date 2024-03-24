import DefaultLayout from "@/components/layout/DefaultLayout";
import ThxCardsData from "@/components/pages/credits/CreditsCardsData";
import ThanksCard from "@/components/pages/credits/ThanksCard";
import { Toaster } from "@/components/ui/toaster";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Credits() {
  const c = useTranslations("common");
  const t = useTranslations("credits");
  return (
    <DefaultLayout
      title={c("routes.credits")}
      className="relative flex justify-center items-center sm:justify-end"
    >
      <Image
        src={"/backgrounds/lakeBox.jpg"}
        alt="Background Image"
        fill
        priority
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col gap-4 h-full justify-center overflow-auto p-6 sm:mr-4">
        <h3
          className="text-3xl font-title text-center text-white sm:text-5xl sm:pb-12 pb-4"
          style={{
            textShadow: "-2px 2px 0px #072755, -1px 2px 0px #072755",
          }}
        >
          {t("helpers.title")}
        </h3>
        {ThxCardsData().map((thank) => (
          <ThanksCard
            key={thank.title}
            title={thank.title}
            subText={thank.subText}
            image={thank.image}
            alt={thank.alt}
            description={thank.description}
          />
        ))}
      </div>
      <Toaster />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "credits"], locale);
}
