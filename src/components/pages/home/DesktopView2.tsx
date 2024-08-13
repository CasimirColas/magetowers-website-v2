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
import GameplayHook from "./desktop/GameplayHook";

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

  return (
    <div className="w-full h-full overflow-auto" id="main-text">
      <LandingSection />
      <VideoSection />
      <GameplayHook />
      <div className="w-full flex justify-center pb-12 bg-gray-200">
        <Card className="flex flex-col gap-4 rounded-none rounded-b-lg w-10/12 items-center pt-4 max-w-[1200px]">
          <Section tkey="expectations_section" />
          <ManaTypesCards />
          <Section tkey="power_section" />
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
          <Section tkey="future_section" />
          <Link
            className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg sm:mb-8 hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            href={urls.kickstarterURL}
          >
            {t("landing_section.sign_up")}
          </Link>
          <div className="flex">
            <Image
              className="scale-x-[-1] p-8"
              src={"/illustrations/pink-wiz.png"}
              alt="pink wizard"
              width={300}
              height={300}
              quality={100}
            />
            <Image
              src={"/illustrations/old-wiz.png"}
              alt="old wizard"
              className="scale-x-[-1]"
              width={300}
              height={300}
              quality={100}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DesktopView2;
