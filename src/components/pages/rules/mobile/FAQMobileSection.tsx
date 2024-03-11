import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";

interface FAQMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
}

function FAQMobileSection({ id, className, h2Style }: FAQMobileSectionProps) {
  const t = useTranslations("rules.faq");
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
    </section>
  );
}

export default FAQMobileSection;
