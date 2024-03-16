import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";
import Image from "next/image";

interface CatalystsDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function CatalystsDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: CatalystsDesktopSectionProps) {
  const t = useTranslations("rules.catalysts");
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      {pr("intro", t)}
      <div className="flex justify-center w-full items-center py-4 max-h-[40vh]">
        <Image
          src="/illustrations/pink-wiz.png"
          width={400}
          height={400}
          alt="Pink wizzard building a tower"
          className="object-contain h-full w-auto p-4"
          style={{ transform: "rotateY(180deg)" }}
        />
        <Image
          src="/compositions/4blocksTower.png"
          width={200}
          height={200}
          alt="Tower of cards"
          className="object-contain h-full p-4 w-auto"
        />
      </div>
      {pr("catalyst", t)}
      <Image
        src="/compositions/infusionProcess.png"
        width={600}
        height={400}
        alt="Infusion process"
        className="w-2/3 h-auto object-contain p-2"
      />
      {pr("change_infusion", t)}
      <Image
        src="/compositions/changeInfusion.png"
        width={600}
        height={600}
        alt="Change infusion"
        className="w-2/3 h-auto object-contain p-2"
      />
      <b className="text-sky-900 text-center">{t("tip")}</b>
    </section>
  );
}

export default CatalystsDesktopSection;
