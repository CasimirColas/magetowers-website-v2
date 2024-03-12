import { Blockquote, H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MobileRulesSectionPr } from "../MobileView";
import { RulesSection } from "../sections";

interface HistoryMobileSectionProps {
  id: RulesSection;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function HistoryMobileSection({
  id,
  className,
  h2Style,
  pr,
}: HistoryMobileSectionProps) {
  const t = useTranslations("rules.history");
  return (
    <section className={className} id={"observerId-" + id}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      <Blockquote className="border-red-950 pl-4">{t("lore")}</Blockquote>
      {pr("goal", t)}
      <Image
        src="/illustrations/necroFire.png"
        className="max-h-72 w-auto"
        alt="Lore"
        width={400}
        height={300}
      />
    </section>
  );
}

export default HistoryMobileSection;
