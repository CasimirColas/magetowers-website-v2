import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { Blockquote, H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";

interface HistoryDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function HistoryDesktopSection({
  id,
  pr,
  className,
}: HistoryDesktopSectionProps) {
  const t = useTranslations("rules.history");
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      <Blockquote>{t("lore")}</Blockquote>
      {pr("goal", t)}
    </section>
  );
}

export default HistoryDesktopSection;
