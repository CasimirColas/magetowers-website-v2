import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { MobileRulesSectionPr } from "../MobileView";
import { H2 } from "@/components/ui/typography";
import Image from "next/image";

interface CatalystsMobileSectionProps {
  id: RulesSection;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function CatalystsMobileSection({
  id,
  className,
  h2Style,
  pr,
}: CatalystsMobileSectionProps) {
  const t = useTranslations("rules.catalysts");
  return (
    <section className={className} id={"observerId-" + id}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("intro", t)}
      <div className="flex justify-around w-full items-center">
        <Image
          src="/illustrations/pink-wiz.png"
          width={200}
          height={200}
          alt="Pink wizzard building a tower"
          className="object-contain w-1/2"
          style={{ transform: "rotateY(180deg)" }}
        />
        <Image
          src="/compositions/4blocksTower.png"
          width={200}
          height={200}
          alt="Tower of cards"
          className="object-contain w-1/2 max-h-[30vh]"
        />
      </div>
      {pr("catalyst", t)}
      <Image
        src="/compositions/infusionProcess.png"
        width={400}
        height={200}
        alt="Infusion process"
        className="w-full h-auto object-contain p-2"
      />
      {pr("change_infusion", t)}
      <Image
        src="/compositions/changeInfusion.png"
        width={400}
        height={400}
        alt="Change infusion"
        className="w-full h-auto object-contain p-2"
      />
      <b className="text-red-950 text-center">{t("tip")}</b>
    </section>
  );
}

export default CatalystsMobileSection;
