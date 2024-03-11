import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";

interface CompositionMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function CompositionMobileSection({
  id,
  className,
  h2Style,
  pr,
}: CompositionMobileSectionProps) {
  const t = useTranslations("rules.composition");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
    </section>
  );
}

export default CompositionMobileSection;
