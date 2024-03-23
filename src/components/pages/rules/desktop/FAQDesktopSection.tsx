import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import LinksRow from "../../../utility/LinksRow";
import { DesktopRulesSectionPr } from "../DesktopView";

interface FAQDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function FAQDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: FAQDesktopSectionProps) {
  const t = useTranslations("rules.faq");
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      <p className="text-center">{t("intro")}</p>
      <LinksRow />
    </section>
  );
}

export default FAQDesktopSection;
