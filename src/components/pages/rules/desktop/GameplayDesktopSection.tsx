import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";

interface GameplayDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function GameplayDesktopSection({
  id,
  pr,
  className,
}: GameplayDesktopSectionProps) {
  const t = useTranslations("rules.gameplay");
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      {pr("text", t)}
    </section>
  );
}

export default GameplayDesktopSection;
