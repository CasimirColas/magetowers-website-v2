import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";
import LevelUpGameMobile from "../LevelUpGameMobile";
import { RulesSection } from "../sections";

interface SpellsMobileSectionProps {
  id: RulesSection;
  className: string;
  h2Style: string;
  h3Style: string;
  pr: MobileRulesSectionPr;
}

function SpellsMobileSection({
  id,
  className,
  h2Style,
  h3Style,
  pr,
}: SpellsMobileSectionProps) {
  const t = useTranslations("rules.spells");
  return (
    <section className={className} id={"observerId-" + id}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      <p>{t("intro")}</p>
      <ul className="ml-6 list-disc [&>li]:mt-2 w-11/12 sm:w-full sm:pl-4">
        <li>{pr("mana", t)}</li>
        <li>{pr("sacrifice", t)}</li>
        <li>{pr("glyph", t)}</li>
        <li>{pr("creation_glyph", t)}</li>
      </ul>
      <i>{t("addendum")}</i>
      <LevelUpGameMobile h3Style={h3Style} />
    </section>
  );
}

export default SpellsMobileSection;
