import LandingSection from "./desktop/sections/LandingSection";
import VideoSection from "./desktop/sections/VideoSection";
import Image from "next/image";
import { useTranslations } from "next-intl";
import HH2 from "@/components/pages/home/HookH2";
import { parseText as pr } from "@/utils/functions/parseText";
import Link from "next/link";
import { urls } from "@/config/urls";
import GameplayHook from "./desktop/GameplayHook";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import React from "react";
import { cn } from "@/lib/utils";

function DesktopView() {
  const t = useTranslations("home");
  const isXL = useMediaQuery("xl");
  const TextContainer = ({
    tkey,
    className,
  }: {
    tkey: string;
    className?: string;
  }) => (
    <div className={cn("p-4 flex flex-col gap-2 xl:max-w-[40%]", className)}>
      <HH2>{t(tkey + ".title")}</HH2>
      {pr({
        default: true,
        text: t(tkey + ".text_full"),
        args: { parentClassName: "text-xl text-center p-4" },
      })}
    </div>
  );
  function Section({
    tkey,
    image,
    reverse,
    textClassName,
  }: {
    tkey: string;
    image?: string;
    reverse?: boolean;
    textClassName?: string;
  }) {
    return (
      <div className="flex flex-col items-center xl:flex-row justify-center">
        {reverse ? null : (
          <TextContainer className={textClassName} tkey={tkey} />
        )}
        {image && (
          <div className="relative w-full">
            <Image
              src={image}
              width={800}
              height={800}
              alt={tkey}
              quality={100}
              className="w-full h-full object-cover border-y"
            />
            <div
              className={`absolute top-0 ${
                reverse ? "right-[-1rem]" : "left-[-1rem]"
              } w-full h-full hidden xl:block`}
              style={{
                background: reverse
                  ? "linear-gradient(90deg, rgba(0,0,0,0) 60%, rgba(255,255,255,1) 80%)"
                  : "linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 20%)",
              }}
            />
          </div>
        )}
        {reverse ? (
          <TextContainer className={textClassName} tkey={tkey} />
        ) : null}
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-auto" id="main-text">
      <LandingSection />
      <VideoSection />
      <GameplayHook />
      <div className="w-full flex justify-center pt-24 pb-12 flex-col items-center gap-12">
        <span className="w-[20vw] border border-tile" />
        <Section
          tkey="expectations_section"
          image="/backgrounds/lakeSetup.jpg"
        />
        <span className="w-[20vw] border border-tile" />
        <Section
          tkey="power_section"
          image="/backgrounds/snowyWaterfall.jpg"
          reverse={isXL}
        />
        <span className="w-[20vw] border border-tile" />
        <div className="items-center w-full justify-center hidden xl:flex">
          <Image
            src={"/illustrations/old-wiz.png"}
            alt="old wizard"
            width={400}
            height={400}
            quality={100}
          />
          <TextContainer tkey="future_section" />
          <Image
            src={"/illustrations/megapack.png"}
            alt="megapack"
            width={300}
            height={300}
            quality={100}
          />
        </div>
        <TextContainer tkey="future_section" className="xl:hidden" />
        <Link
          className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg sm:mb-8 hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out hidden xl:block"
          href={urls.kickstarterURL}
        >
          {t("landing_section.sign_up")}
        </Link>
        <div className="flex items-center w-full justify-center xl:hidden mt-[-4rem]">
          <Image
            src={"/illustrations/old-wiz.png"}
            alt="old wizard"
            width={300}
            height={300}
            quality={100}
          />
          <Link
            className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg sm:mb-8 hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
            href={urls.kickstarterURL}
          >
            {t("landing_section.sign_up")}
          </Link>
          <Image
            src={"/illustrations/megapack.png"}
            alt="megapack"
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default DesktopView;
