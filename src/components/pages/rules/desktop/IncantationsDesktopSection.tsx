import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2, H3 } from "@/components/ui/typography";
import { manaType, manaTypeList } from "@/components/cards/types";
import Image from "next/image";
import { DesktopRulesSectionPr } from "../DesktopView";

interface IncantationsDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function IncantationsDesktopSection({
  id,
  pr,
  className,
}: IncantationsDesktopSectionProps) {
  const t = useTranslations("rules.incantations");
  function IncantationDiv({ mana }: { mana: manaType }) {
    return (
      <div className="flex flex-col gap-2 w-full items-center border-t border-paperGray pt-4">
        <H3 className={`text-${mana}`}>{t(mana + ".name")}</H3>
        <Image
          src={`/incantations/${mana}.png`}
          alt={mana}
          width={200}
          height={200}
          className="w-[210px] h-auto"
        />
        {pr(mana + ".requirements", t, "text-center sm:w-3/4", `text-${mana}`)}
        {pr(mana + ".effect", t, "text-center sm:w-3/4")}
      </div>
    );
  }
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      {pr("intro", t)}
      <i>{pr("addendum", t)}</i>
      {manaTypeList.slice(1, 5).map((mana) => (
        <IncantationDiv key={mana} mana={mana} />
      ))}
    </section>
  );
}

export default IncantationsDesktopSection;
