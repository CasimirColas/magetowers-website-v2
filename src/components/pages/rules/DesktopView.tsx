import { Button } from "@/components/ui/button";
import { RulesSection, sections } from "./sections";
import { useTranslations } from "next-intl";
import HistoryDesktopSection from "./desktop/HistoryDesktopSection";
import SetupDesktopSection from "./desktop/SetupDesktopSection";
import GameplayDesktopSection from "./desktop/GameplayDesktopSection";
import CardsDesktopSection from "./desktop/CardsDesktopSection";
import ManaDesktopSection from "./desktop/ManaDesktopSection";
import CatalystsDesktopSection from "./desktop/CatalystsDesktopSection";
import SpellsDesktopSection from "./desktop/SpellsDesktopSection";
import IncantationsDesktopSection from "./desktop/IncantationsDesktopSection";
import CompositionDesktopSection from "./desktop/CompositionDesktopSection";
import FAQDesktopSection from "./desktop/FAQDesktopSection";
import { parseText } from "@/utils/functions/parseText";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import Image from "next/image";

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
      childClassName: cn("text-sky-500", childClassName),
    },
    default: true,
  });
}

export type DesktopRulesSectionPr = typeof pr;

function DesktopView() {
  const t = useTranslations("rules");
  const sectionStyle = "w-full p-4 flex flex-col gap-2 items-center";
  const h2Style = "border-sky-900 text-left w-full";

  function updateButtons(id: string) {
    if (typeof window === "undefined") return;
    sections.forEach((section) => {
      const button = document.getElementById("button-" + section);
      if (!button) return;
      if (section === id) {
        button.className = cn(button.className, "bg-sky-900 text-white");
      } else {
        button.className = cn(button.className, "bg-white text-black");
      }
    });
  }

  function getPositionInScroll(id: string) {
    const fallback = { name: id, top: 0, bottom: 0 };
    if (typeof window === "undefined") return fallback;
    const div = document.getElementById(id);
    if (!div) return fallback;
    return {
      name: id,
      top: div.offsetTop,
      bottom: div.offsetTop + div.offsetHeight,
    };
  }

  function scroll(
    id: string,
    sectionsPositions: { name: string; top: number; bottom: number }[]
  ) {
    if (typeof window === "undefined") return;
    const div = document.getElementById(id);
    if (!div) return;
    const handleScroll = () => {
      const end = div.scrollTop + 100;
      const currentSection = sectionsPositions.find(
        (section) => section.bottom > end && section.top < end
      )?.name;
      updateButtons(currentSection ?? "");
    };
    div.addEventListener("scroll", handleScroll);
    return () => {
      div.removeEventListener("scroll", handleScroll);
    };
  }

  useEffect(() => {
    const sectionsPositions = sections.map((section) =>
      getPositionInScroll(section)
    );
    return scroll("rules-desktop", sectionsPositions);
  }, []);

  function handleSectionChange(value: RulesSection) {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="relative w-full h-full flex justify-center">
      <Image
        src={"/backgrounds/skyWithTower.png"}
        alt="Background Image"
        fill
        priority
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col h-full p-4 bg-white bg-opacity-90 gap-2">
        {sections.map((section) => (
          <Button
            key={section}
            variant={"outline"}
            className="hover:bg-sky-600 hover:text-white"
            id={"button-" + section}
            onClick={() => handleSectionChange(section)}
          >
            {t(section + ".title")}
          </Button>
        ))}
      </div>
      <div
        className="flex flex-col w-full xl:w-[50vw] overflow-auto scroll-smooth gap-2 bg-white bg-opacity-80"
        id="rules-desktop"
      >
        <HistoryDesktopSection
          id={"history"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <SetupDesktopSection
          id={"setup"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <GameplayDesktopSection
          id={"gameplay"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <CardsDesktopSection
          id={"cards"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <ManaDesktopSection
          id={"mana"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <CatalystsDesktopSection
          id={"catalysts"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <SpellsDesktopSection
          id={"spells"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <IncantationsDesktopSection
          id={"incantations"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <CompositionDesktopSection
          id={"composition"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <FAQDesktopSection
          id={"faq"}
          pr={pr}
          className={sectionStyle}
          h2Style={h2Style}
        />
      </div>
    </div>
  );
}

export default DesktopView;
