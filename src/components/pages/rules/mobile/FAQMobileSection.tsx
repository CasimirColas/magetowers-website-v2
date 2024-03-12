import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";
import LinksRow from "../../home/components/LinksRow";

interface FAQMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function FAQMobileSection({
  id,
  className,
  h2Style,
  pr,
}: FAQMobileSectionProps) {
  const t = useTranslations("rules.faq");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      <p className="text-center">{t("intro")}</p>
      <LinksRow />
    </section>
  );
}

export default FAQMobileSection;
