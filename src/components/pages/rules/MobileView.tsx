import { H1 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { getOptimizedImage } from "@/utils/functions/getOptimizedImage";
import { parseText } from "@/utils/functions/parseText";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SectionSelector from "./SectionSelector";
import CardsMobileSection from "./mobile/CardsMobileSection";
import CatalystsMobileSection from "./mobile/CatalystsMobileSection";
import CompositionMobileSection from "./mobile/CompositionMobileSection";
import FAQMobileSection from "./mobile/FAQMobileSection";
import GameplayMobileSection from "./mobile/GameplayMobileSection";
import HistoryMobileSection from "./mobile/HistoryMobileSection";
import IncantationsMobileSection from "./mobile/IncantationsMobileSection";
import ManaMobileSection from "./mobile/ManaMobileSection";
import SetupMobileSection from "./mobile/SetupMobileSection";
import SpellsMobileSection from "./mobile/SpellsMobileSection";
import { RulesSection, sections } from "./sections";

function pr(
  translationKey: string,
  t: (text: string) => string,
  parentClassName?: string,
  childClassName?: string
) {
  return parseText({
    text: t(translationKey),
    args: {
      parentClassName: cn("w-full", parentClassName),
      childClassName: cn("text-red-950", childClassName),
    },
    default: true,
  });
}

export type MobileRulesSectionPr = typeof pr;

function MobileView() {
  const [currentSection, setCurrentSection] = useState<RulesSection>("history");
  const t = useTranslations("rules");

  function handleSectionChange(value: RulesSection) {
    setCurrentSection(value);
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const sectionStyle = "w-full pb-8 flex flex-col items-center gap-4";
  const h2Style = "border-red-950 text-red-950 w-full";
  const h3Style = "text-red-950";
  const linkStyle =
    "underline text-red-950 hover:text-red-950 hover:no-underline hover:font-semibold";

  function scroll(
    id: string,
    sectionsPositions: { name: string; top: number; bottom: number }[]
  ) {
    if (typeof window === "undefined") return;
    const div = document.getElementById(id);
    if (!div) return;
    const handleScroll = () => {
      const end = div.scrollTop + screen.height - 80;
      updateProgressBar(Math.floor((end / div.scrollHeight) * 100));
      setCurrentSection(
        (sectionsPositions.find(
          (section) => section.bottom > end && section.top < end
        )?.name as RulesSection) || "faq"
      );
    };
    div.addEventListener("scroll", handleScroll);
    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }

  function getPositionInScroll(id: string) {
    const fallback = { name: id, top: 0, bottom: 0 };
    if (typeof window === "undefined") return fallback;
    const div = document.getElementById(id);
    if (!div) return fallback;
    return {
      name: id.slice(11),
      top: div.offsetTop,
      bottom: div.offsetTop + div.offsetHeight,
    };
  }

  function updateProgressBar(progress: number) {
    const div = document.getElementById("progress-bar");
    if (!div) return;
    if (progress > 100) progress = 100;
    div.style.setProperty("width", `${progress}%`);
  }

  useEffect(() => {
    const sectionsPositions = sections.map((section) =>
      getPositionInScroll("observerId-" + section)
    );
    return scroll("rules-mobile", sectionsPositions);
  }, []);

  const backgroundImage = getOptimizedImage({
    src: "/backgrounds/book.png",
    width: screen.width,
    height: Math.floor((screen.width * 1469) / 1125),
  });

  return (
    <div
      className="w-full h-full overflow-auto flex flex-col gap-4 items-center px-6 scroll-smooth sm:bg-cover bg-contain"
      id="rules-mobile"
      style={{
        backgroundImage: backgroundImage,
        backgroundPosition: "bottom center",
      }}
    >
      <div className="absolute z-20 w-full bg-red-900 bg-opacity-90 drop-shadow-md flex flex-col justify-between">
        <div className="w-full p-4">
          <SectionSelector
            className="w-full px-4"
            value={currentSection}
            onChange={handleSectionChange}
          />
        </div>

        <div className="border-order border z-20 w-4" id="progress-bar" />
      </div>

      <div className="flex flex-col items-center w-[85%] sm:w-[80%] mt-20 bg-paper rounded-sm shadow-sm px-4">
        <H1 className="font-title py-12 text-red-950 sm:text-5xl">
          {t("title")}
        </H1>
        <HistoryMobileSection
          id={"history"}
          className={sectionStyle}
          h2Style={h2Style}
          pr={pr}
        />
        <SetupMobileSection
          id={"setup"}
          className={sectionStyle}
          h2Style={h2Style}
          linkStyle={linkStyle}
          pr={pr}
        />
        <GameplayMobileSection
          id={"gameplay"}
          className={sectionStyle}
          h2Style={h2Style}
          pr={pr}
        />
        <CardsMobileSection
          id={"cards"}
          className={sectionStyle}
          h2Style={h2Style}
          h3Style={h3Style}
          linkStyle={linkStyle}
          pr={pr}
        />
        <ManaMobileSection
          id={"mana"}
          className={sectionStyle}
          h2Style={h2Style}
          linkStyle={linkStyle}
          pr={pr}
        />
        <CatalystsMobileSection
          id={"catalysts"}
          className={sectionStyle}
          h2Style={h2Style}
          pr={pr}
        />
        <SpellsMobileSection
          id={"spells"}
          className={sectionStyle}
          h2Style={h2Style}
          h3Style={h3Style}
          pr={pr}
        />
        <IncantationsMobileSection
          id={"incantations"}
          className={sectionStyle}
          h2Style={h2Style}
          pr={pr}
        />
        <CompositionMobileSection
          id={"composition"}
          className={sectionStyle}
          h2Style={h2Style}
          pr={pr}
        />
        <FAQMobileSection
          id={"faq"}
          className={sectionStyle}
          h2Style={h2Style}
          pr={pr}
        />
      </div>
    </div>
  );
}

export default MobileView;
