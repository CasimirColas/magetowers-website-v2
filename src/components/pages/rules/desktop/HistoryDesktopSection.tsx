import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { Blockquote, H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";

interface HistoryDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function HistoryDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: HistoryDesktopSectionProps) {
  const t = useTranslations("rules.history");
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      <Blockquote className="border-sky-900">{t("lore")}</Blockquote>
      {pr("goal", t)}
    </section>
  );
}

export default HistoryDesktopSection;
