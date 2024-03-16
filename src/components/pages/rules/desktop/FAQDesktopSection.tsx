import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import LinksRow from "../../home/components/LinksRow";
import { DesktopRulesSectionPr } from "../DesktopView";

interface FAQDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function FAQDesktopSection({ id, pr, className }: FAQDesktopSectionProps) {
  const t = useTranslations("rules.faq");
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      <p className="text-center">{t("intro")}</p>
      <LinksRow />
    </section>
  );
}

export default FAQDesktopSection;
