import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

interface ManaMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
}

function ManaMobileSection({ id, className, h2Style }: ManaMobileSectionProps) {
  const t = useTranslations("rules.mana");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
    </section>
  );
}

export default ManaMobileSection;
