import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { DesktopRulesSectionPr } from "../DesktopView";
import { H2 } from "@/components/ui/typography";
import Image from "next/image";

interface SpellsDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function SpellsDesktopSection({
  id,
  pr,
  className,
}: SpellsDesktopSectionProps) {
  const t = useTranslations("rules.spells");
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      <p>{t("intro")}</p>
      <ul className="ml-6 list-disc [&>li]:mt-2 w-11/12 sm:w-full sm:pl-4">
        <li>{pr("mana", t)}</li>
        <li>{pr("sacrifice", t)}</li>
        <li>{pr("glyph", t)}</li>
        <li>{pr("creation_glyph", t)}</li>
      </ul>
      <i>{t("addendum")}</i>
    </section>
  );
}

export default SpellsDesktopSection;
