import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2, H3 } from "@/components/ui/typography";
import GameCard from "@/components/cards/GameCard";
import Link from "next/link";
import { DesktopRulesSectionPr } from "../DesktopView";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardsDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function CardsDesktopSection({ id, pr, className }: CardsDesktopSectionProps) {
  const t = useTranslations("rules.cards");
  const cardsBlockStyle =
    "w-full flex flex-col items-center justify-start gap-4 sm:border-none border-b border-paperGray pb-2 sm:pb-0 last:border-none";
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      {pr("text", t)}
      <div className="flex flex-col items-center w-full gap-4 sm:grid grid-cols-2 grid-rows-2 sm:items-start">
        <div className={cardsBlockStyle}>
          <H3>{t("blocks_title")}</H3>
          <GameCard name="catalyst" id="desktop-catalyst" />
          {pr("blocks", t, "px-4 ")}
        </div>
        <div className={cardsBlockStyle}>
          <H3>{t("glyphs_title")}</H3>
          <GameCard name="creation" id="desktop-creation" />
          <Link href="#mana">{t("learn_mana")}</Link>
          {pr("glyphs", t, "px-4")}
        </div>
        <div className={cardsBlockStyle}>
          <H3>{t("spells_title")}</H3>
          <GameCard name="ignite" id="desktop-ignite" />
          <Link href="#spells">{t("learn_spells")}</Link>
          {pr("spells", t, "px-4 ")}
        </div>
        <div className={cardsBlockStyle}>
          <H3>{t("utilities_title")}</H3>
          <GameCard name="renovation" id="desktop-renovation" />
          {pr("utilities", t, "px-4 ")}
        </div>
      </div>
      <Button asChild variant={"outline"} className="mt-2 w-full">
        <Link href="/cards" className="flex justify-between items-center">
          {t("look_cards_long")}
          <Eye className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}

export default CardsDesktopSection;
