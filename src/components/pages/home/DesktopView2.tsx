import LandingSection from "./desktop/sections/LandingSection";
import VideoSection from "./desktop/sections/VideoSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { H3 } from "@/components/ui/typography";
import { parseText as pr } from "@/utils/functions/parseText";
import { Card } from "@/components/ui/card";
import ManaTypesCards from "./desktop/ManaTypesCards";
import HoverBench from "@/components/compositions/HoverBench";
import Link from "next/link";
import { urls } from "@/config/urls";
import { useEffect } from "react";
import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";

function DesktopView2() {
  const t = useTranslations("home");

  function Section({ tkey }: { tkey: string }) {
    return (
      <div className="p-4 flex flex-col gap-2">
        <H3 className="text-4xl text-center">{t(tkey + ".title")}</H3>
        {pr({
          default: true,
          text: t(tkey + ".text_full"),
          args: { parentClassName: "text-xl text-center p-4" },
        })}
      </div>
    );
  }
  useEffect(() => {
    return scrollBackgroundWithContent("main-text", "background-image", -700);
  }, []);
  return (
    <div className="w-full h-full overflow-auto" id="main-text">
      <LandingSection />
      <VideoSection />
      <div className="w-full flex justify-start pb-12 relative border-t-1 border-tile">
        <Card className="flex flex-col gap-4 rounded-none rounded-b-lg xl:w-3/5 w-2/3 items-center pt-4">
          <Section tkey="expectations_section" />
          <ManaTypesCards />
          <Section tkey="power_section" />
          <Section tkey="future_section" />
          <Link
            className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg sm:mb-8 hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            href={urls.kickstarterURL}
          >
            {t("landing_section.sign_up")}
          </Link>
          <div className="w-1/2 max-w-lg gap-8 flex flex-col justify-center items-center pb-8">
            <Image
              src="/compositions/closehand.png"
              alt="opponent's hand"
              className="rotate-180"
              width={300}
              height={300}
              quality={100}
            />
            <HoverBench className="gap-4" />
            <Image
              src="/compositions/openhand.png"
              alt="your hand of cards"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </Card>
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
            objectPosition: "right bottom",
          }}
          id="background-image"
        />
      </div>
    </div>
  );
}

export default DesktopView2;
