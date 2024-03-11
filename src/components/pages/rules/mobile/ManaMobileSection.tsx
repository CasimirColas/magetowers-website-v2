import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";

interface ManaMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function ManaMobileSection({
  id,
  className,
  h2Style,
  pr,
}: ManaMobileSectionProps) {
  const t = useTranslations("rules.mana");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      <p>{t("intro")}</p>
    </section>
  );
}

export default ManaMobileSection;
