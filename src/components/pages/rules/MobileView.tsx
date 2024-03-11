import { useState } from "react";
import { useTranslations } from "next-intl";
import SectionSelector from "./SectionSelector";
import { RulesSection, sections } from "./sections";
import useIntersectionObserver from "@/utils/hooks/useIntersectionObserver";
import { H1, H2 } from "@/components/ui/typography";
import { parseText } from "@/utils/functions/parseText";
import { cn } from "@/lib/utils";
import HistoryMobileSection from "./mobile/HistoryMobileSection";
import CardsMobileSection from "./mobile/CardsMobileSection";
import SetupMobileSection from "./mobile/SetupMobileSection";
import GameplayMobileSection from "./mobile/GameplayMobileSection";

function MobileView() {
  const [currentSection, setCurrentSection] = useState<RulesSection>(
    sections[0]
  );
  const t = useTranslations("rules");
  const ct = useTranslations("common.vocabulary");
  useIntersectionObserver([...sections], 0.5, (id: string) =>
    setCurrentSection(id as RulesSection)
  );

  function pr(
    translationKey: string,
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

  return (
    <div className="w-full h-full bg-book overflow-auto bg-center bg-contain sm:bg-cover flex flex-col gap-4 items-center px-6 scroll-smooth">
      <div className="absolute z-10 w-full p-4 bg-red-900 bg-opacity-90 drop-shadow-md">
        <SectionSelector
          className="w-full"
          value={currentSection}
          onChange={handleSectionChange}
        />
      </div>
      <div className="flex flex-col items-center w-[85%] sm:w-[80%] mt-20 bg-paper rounded-sm shadow-sm px-4">
        <H1 className="font-title py-12 text-red-950 sm:text-5xl">
          {t("title")}
        </H1>
        <HistoryMobileSection
          id={sections[0]}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <CardsMobileSection
          id={sections[1]}
          className={sectionStyle}
          h2Style={h2Style}
          h3Style={h3Style}
          linkStyle={linkStyle}
        />
        <SetupMobileSection
          id={sections[2]}
          className={sectionStyle}
          h2Style={h2Style}
          linkStyle={linkStyle}
        />
        <GameplayMobileSection
          id={sections[3]}
          className={sectionStyle}
          h2Style={h2Style}
        />
        <section id={sections[4]} className={sectionStyle}>
          <H2 className={h2Style}>{t("mana.title")}</H2>
        </section>
        <section id={sections[5]} className={sectionStyle}>
          <H2 className={h2Style}>{t("spells.title")}</H2>
        </section>
        <section id={sections[6]} className={sectionStyle}>
          <H2 className={h2Style}>{t("incantations.title")}</H2>
        </section>
        <section id={sections[7]} className={sectionStyle}>
          <H2 className={h2Style}>{t("composition.title")}</H2>
        </section>
        <section id={sections[8]} className={sectionStyle}>
          <H2 className={h2Style}>{t("faq.title")}</H2>
        </section>
      </div>
    </div>
  );
}

export default MobileView;
