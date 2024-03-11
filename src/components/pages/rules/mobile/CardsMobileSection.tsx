import GameCard from "@/components/cards/GameCard";
import { CardNames } from "@/components/cards/types";
import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/typography";
import DetailsDialog from "@/components/utility/DetailsDialog";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { Eye } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { MobileRulesSectionPr } from "../MobileView";

interface CardsMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  h3Style: string;
  linkStyle: string;
  pr: MobileRulesSectionPr;
}

function CardsMobileSection({
  id,
  className,
  h2Style,
  h3Style,
  linkStyle,
  pr,
}: CardsMobileSectionProps) {
  const t = useTranslations("rules.cards");
  const isSm = useMediaQuery("sm");
  function GameCardPopup({ name }: { name: CardNames }) {
    return (
      <DetailsDialog
        triggerClassName="w-10/12 flex justify-center"
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
    "w-full flex flex-col items-center justify-start gap-4 sm:border-none border-b border-paperGray pb-2 sm:pb-0 last:border-none";
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("text", t)}
      <div className="flex flex-col items-center w-full gap-4 sm:grid grid-cols-2 grid-rows-2 sm:items-start">
        <div className={cardsBlockStyle}>
          <H3 className={h3Style}>{t("blocks_title")}</H3>
          <GameCardPopup name="catalyst" />
          {pr("blocks", t, "px-4 ")}
        </div>
        <div className={cardsBlockStyle}>
          <H3 className={h3Style}>{t("glyphs_title")}</H3>
          <GameCardPopup name="creation" />
          <Link href="#mana" className={linkStyle}>
            {t("learn_mana")}
          </Link>
          {pr("glyphs", t, "px-4")}
        </div>
        <div className={cardsBlockStyle}>
          <H3 className={h3Style}>{t("spells_title")}</H3>
          <GameCardPopup name="ignite" />
          <Link href="#spells" className={linkStyle}>
            {t("learn_spells")}
          </Link>
          {pr("spells", t, "px-4 ")}
        </div>
        <div className={cardsBlockStyle}>
          <H3 className={h3Style}>{t("utilities_title")}</H3>
          <GameCardPopup name="renovation" />
          {pr("utilities", t, "px-4 ")}
        </div>
      </div>
      <Button asChild variant={"outline"} className="mt-2 w-full">
        <Link href="/cards" className="flex justify-between items-center">
          {isSm ? t("look_cards_long") : t("look_cards")}
          <Eye className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}

export default CardsMobileSection;
