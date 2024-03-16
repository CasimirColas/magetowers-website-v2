import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";
import Image from "next/image";
import { MoveRight } from "lucide-react";
interface GameplayDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function Arrow() {
  return <MoveRight size={32} className="text-sky-900" />;
}

function GameplayDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: GameplayDesktopSectionProps) {
  const t = useTranslations("rules.gameplay");
  const carouselItemStyle =
    "flex justify-start flex-col items-center h-64 aspect-square";
  const carouselTitleStyle = "text-center text-sky-900 py-4";
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      {pr("text", t)}
      <div className="flex items-center flex-wrap justify-center gap-2">
        <div className={carouselItemStyle}>
          <b className={carouselTitleStyle}>{t("pick_cards")}</b>
          <div className="flex flex-col h-full rotate-[-45deg] w-9/12">
            <Image
              src={"/compositions/pickFromMarket.png"}
              alt={"picking"}
              width={200}
              height={200}
              className="h-1/2 rotate-180 w-auto object-contain"
            />

            <Image
              src={"/compositions/pickFromStreet.png"}
              alt={"picking"}
              width={200}
              height={200}
              className="h-1/2 w-auto object-contain"
            />
          </div>
        </div>
        <Arrow />
        <div className={carouselItemStyle}>
          <b className={carouselTitleStyle}>{t("play_cards")}</b>
          <Image
            src={"/compositions/playCards.png"}
            alt={"play"}
            width={400}
            height={400}
            className="h-0 grow w-auto object-contain"
          />
        </div>
        <Arrow />
        <div className={carouselItemStyle}>
          <b className={carouselTitleStyle}>{t("convert_mana")}</b>
          <Image
            src={"/compositions/convertMana.png"}
            alt={"convert"}
            width={400}
            height={400}
            className="h-0 grow w-auto object-contain"
          />
        </div>
        <Arrow />
        <div className={carouselItemStyle}>
          <b className={carouselTitleStyle}>{t("place_block")}</b>
          <Image
            src={"/compositions/placeBlock.png"}
            alt={"block"}
            width={400}
            height={400}
            className="h-0 grow w-auto object-contain p-8"
          />
        </div>
        <Arrow />
        <div className={carouselItemStyle}>
          <b className={carouselTitleStyle}>{t("end")}</b>
          <Image
            src={"/compositions/drawFromPile.png"}
            alt={"draw"}
            width={400}
            height={400}
            className="h-0 grow w-auto object-contain"
          />
        </div>
        <Arrow />
        <div className={carouselItemStyle}>
          <b className={carouselTitleStyle}>{t("count")}</b>
          <Image
            src={"/compositions/counting.png"}
            alt={"counting"}
            width={400}
            height={400}
            className="h-0 grow w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default GameplayDesktopSection;
