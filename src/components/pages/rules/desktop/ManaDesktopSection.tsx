import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";
import { manaTypeList } from "@/components/cards/types";
import Image from "next/image";
import Link from "next/link";

interface ManaDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function ManaDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: ManaDesktopSectionProps) {
  const t = useTranslations("rules.mana");
  const ct = useTranslations("common.vocabulary");
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      <div className="flex w-full justify-center pb-2">
        {manaTypeList
          .slice(1)
          .reverse()
          .map((mana) => (
            <div
              key={mana + "-activated-icons"}
              className="flex flex-col w-28 items-center"
            >
              <Image
                src={`/glyphs/activated-icons/${mana}.png`}
                alt={mana + " glyph"}
                width={200}
                height={200}
                className="w-full h-auto"
              />
              <p className="text-center">{ct(mana)}</p>
            </div>
          ))}
      </div>
      {pr("intro", t)}
      <p className="w-full">{t("gain_mana")}</p>
      <ul className="ml-2 list-disc [&>li]:mt-2 w-full pl-4">
        <li>{pr("catalysts", t)}</li>
        <li>{pr("spells", t)}</li>
        <li>{pr("glyphs", t)}</li>
      </ul>
      {pr("reminder", t, "font-bold")}
      <Link href="/rules#incantations" className="underline">
        {t("learn_incantations")}
      </Link>
    </section>
  );
}

export default ManaDesktopSection;
