import { Button } from "@/components/ui/button";
import { sections } from "./sections";
import { useTranslations } from "next-intl";
import Link from "next/link";
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
  const sectionStyle = "w-full bg-white bg-opacity-80 p-4";
  return (
    <div
      className="w-full h-full bg-skyWithTower bg-center bg-cover flex"
      id="desktop-rules"
    >
      <div className="flex flex-col h-full p-4 bg-white bg-opacity-90 gap-2">
        {sections.map((section) => (
          <Button key={section} variant={"outline"}>
            <Link href={"#" + section}>{t(section + ".title")}</Link>
          </Button>
        ))}
      </div>
      <div className="flex flex-col w-full overflow-auto scroll-smooth">
        <HistoryDesktopSection
          id={"history"}
          pr={pr}
          className={sectionStyle}
        />
        <SetupDesktopSection id={"setup"} pr={pr} className={sectionStyle} />
        <GameplayDesktopSection
          id={"gameplay"}
          pr={pr}
          className={sectionStyle}
        />
        <CardsDesktopSection id={"cards"} pr={pr} className={sectionStyle} />
        <ManaDesktopSection id={"mana"} pr={pr} className={sectionStyle} />
        <CatalystsDesktopSection
          id={"catalysts"}
          pr={pr}
          className={sectionStyle}
        />
        <SpellsDesktopSection id={"spells"} pr={pr} className={sectionStyle} />
        <IncantationsDesktopSection
          id={"incantations"}
          pr={pr}
          className={sectionStyle}
        />
        <CompositionDesktopSection
          id={"composition"}
          pr={pr}
          className={sectionStyle}
        />
        <FAQDesktopSection id={"faq"} pr={pr} className={sectionStyle} />
      </div>
    </div>
  );
}

export default DesktopView;
