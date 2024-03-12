import { H2, H3 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";
import { manaType, manaTypeList } from "@/components/cards/types";
import Image from "next/image";

interface IncantationsMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function IncantationsMobileSection({
  id,
  className,
  h2Style,
  pr,
}: IncantationsMobileSectionProps) {
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
          className="w-[200px] h-auto"
        />
        {pr(mana + ".requirements", t, "text-center sm:w-3/4", `text-${mana}`)}
        {pr(mana + ".effect", t, "text-center sm:w-3/4")}
      </div>
    );
  }

  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("intro", t)}
      <i>{pr("addendum", t)}</i>
      {manaTypeList.slice(1, 5).map((mana) => (
        <IncantationDiv key={mana} mana={mana} />
      ))}
    </section>
  );
}

export default IncantationsMobileSection;
