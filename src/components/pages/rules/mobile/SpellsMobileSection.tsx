import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

interface SpellsMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
}

function SpellsMobileSection({
  id,
  className,
  h2Style,
}: SpellsMobileSectionProps) {
  const t = useTranslations("rules.spells");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
    </section>
  );
}

export default SpellsMobileSection;
