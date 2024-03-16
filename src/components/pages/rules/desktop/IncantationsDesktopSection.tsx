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
  h2Style: string;
}

function IncantationsDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: IncantationsDesktopSectionProps) {
  const t = useTranslations("rules.incantations");
  function IncantationDiv({ mana }: { mana: manaType }) {
    return (
      <div className="flex gap-2 w-full items-end p-4 justify-center border-b border-slate-400 last:border-none">
        <Image
          src={`/incantations/${mana}.png`}
          alt={mana}
          width={200}
          height={200}
          className="w-[210px] h-auto p-4"
        />
        <div className="w-full flex flex-col gap-2">
          <H3 className={`text-${mana}`}>{t(mana + ".name")}</H3>
          {pr(mana + ".requirements", t, "", `text-${mana}`)}
          {pr(mana + ".effect", t, "", `text-${mana}`)}
        </div>
      </div>
    );
  }
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      {pr("intro", t)}
      <i className="w-full">{pr("addendum", t)}</i>
      <div className="flex flex-col">
        {manaTypeList.slice(1, 5).map((mana) => (
          <IncantationDiv key={mana} mana={mana} />
        ))}
      </div>
    </section>
  );
}

export default IncantationsDesktopSection;
