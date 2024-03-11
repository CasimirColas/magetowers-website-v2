import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";

interface IncantationsMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function IncantationsMobileSection({
  id,
  className,
  h2Style,
  pr,
}: IncantationsMobileSectionProps) {
  const t = useTranslations("rules.incantations");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
    </section>
  );
}

export default IncantationsMobileSection;
