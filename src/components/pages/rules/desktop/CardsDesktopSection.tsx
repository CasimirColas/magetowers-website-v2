import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2, H3 } from "@/components/ui/typography";
import GameCard from "@/components/cards/GameCard";
import Link from "next/link";
import { DesktopRulesSectionPr } from "../DesktopView";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import DetailsDialog from "@/components/utility/DetailsDialog";
import { CardNames, cardCategory } from "@/components/cards/types";

interface CardsDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function CardsDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: CardsDesktopSectionProps) {
  const t = useTranslations("rules.cards");

  function GameCardPopup({ name }: { name: CardNames }) {
    return (
      <DetailsDialog
        triggerClassName="w-56 flex justify-center"
        trigger={
          <GameCard
            name={name}
            id={name + "-cards-section-trigger"}
            className="w-full h-auto rounded-md"
          />
        }
      >
        <GameCard
          name={name}
          id={name + "-cards-section-detail"}
          className="w-auto h-[80vh] rounded-md"
        />
      </DetailsDialog>
    );
  }

  const cardsBlockStyle =
    "w-full flex items-center justify-start pb-4 border-b border-slate-400";
  const textBlockStyle = "flex flex-col h-full w-full justify-end pl-4";
  const blockNameStyle = "mb-4";
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      {pr("text", t)}
      <div className="w-full flex flex-col gap-4">
        <div className={cardsBlockStyle}>
          <GameCardPopup name="catalyst" />
          <div className={textBlockStyle}>
            <H3 className={blockNameStyle}>{t("blocks_title")}</H3>
            {pr("blocks", t)}
          </div>
        </div>
        <div className={cardsBlockStyle}>
          <GameCardPopup name="creation" />
          <div className={textBlockStyle}>
            <H3 className={blockNameStyle}>{t("glyphs_title")}</H3>
            {pr("glyphs", t)}
            <Link href="#mana">{t("learn_mana")}</Link>
          </div>
        </div>
        <div className={cardsBlockStyle}>
          <GameCardPopup name="ignite" />
          <div className={textBlockStyle}>
            <H3 className={blockNameStyle}>{t("spells_title")}</H3>
            {pr("spells", t)}
            <Link href="#spells">{t("learn_spells")}</Link>
          </div>
        </div>
        <div className={cardsBlockStyle}>
          <GameCardPopup name="renovation" />
          <div className={textBlockStyle}>
            <H3 className={blockNameStyle}>{t("utilities_title")}</H3>
            {pr("utilities", t)}
          </div>
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
