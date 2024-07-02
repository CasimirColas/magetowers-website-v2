import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";
import { useEffect } from "react";
import LandingSection from "./mobile/sections/LandingSection";
import VideoSection from "./mobile/sections/VideoSection";
import MobileSimpleSection from "./MobileSimpleSection";
import Image from "next/image";
import MagicTypesCarousel from "./mobile/MagicTypesCarousel";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { urls } from "@/config/urls";

function MobileView() {
  const t = useTranslations("home.landing_section");
  useEffect(() => {
    return scrollBackgroundWithContent("main-text", "background-image");
  }, []);
  return (
    <div
      className="h-full w-full overflow-auto flex flex-col gap-4 items-center"
      id="main-text"
    >
      <Image
        src={"/backgrounds/mobile.png"}
        alt="Background Image"
        fill
        priority
        style={{
          top: 0,
          left: 0,
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          objectPosition: "0% 0%",
        }}
        id="background-image"
      />
      <LandingSection />
      <VideoSection />
      <MobileSimpleSection
        translationsKey="expectations_section"
        addonBottom={<MagicTypesCarousel />}
      />
      <MobileSimpleSection
        translationsKey="power_section"
        addonBottom={
          <Image
            src="/illustrations/clearsight.png"
            className="w-3/4"
            width={300}
            height={300}
            alt="Clear sight"
          />
        }
      />
      <MobileSimpleSection
        translationsKey="future_section"
        addonBottom={
          <Image
            src="/illustrations/old-wiz.png"
            className="w-3/4"
            width={300}
            height={300}
            alt="Old wizard"
          />
        }
      />
      <Link
        className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg text-center w-10/12 mb-8"
        href={urls.kickstarterURL}
      >
        {t("sign_up")}
      </Link>
    </div>
  );
}

export default MobileView;
