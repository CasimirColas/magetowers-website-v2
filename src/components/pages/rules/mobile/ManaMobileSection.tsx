import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";
import { manaTypeList } from "@/components/cards/types";
import Image from "next/image";
import Link from "next/link";
import { RulesSection } from "../sections";

interface ManaMobileSectionProps {
  id: RulesSection;
  className: string;
  h2Style: string;
  linkStyle: string;
  pr: MobileRulesSectionPr;
}

function ManaMobileSection({
  id,
  className,
  h2Style,
  linkStyle,
  pr,
}: ManaMobileSectionProps) {
  const t = useTranslations("rules.mana");
  const ct = useTranslations("common.vocabulary");
  return (
    <section className={className} id={"observerId-" + id}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("intro", t)}
      <div className="flex w-full flex-wrap justify-center gap-2 sm:gap-0">
        {manaTypeList
          .slice(1)
          .reverse()
          .map((mana) => (
            <div
              key={mana + "-activated-icons"}
              className="flex flex-col w-1/4 sm:w-1/5 items-center"
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
      <Link href="/rules#incantations" className={linkStyle}>
        {t("learn_incantations")}
      </Link>
      <p>{t("gain_mana")}</p>
      <ul className="ml-6 list-disc [&>li]:mt-2">
        <li>{pr("catalysts", t)}</li>
        <li>{pr("spells", t)}</li>
        <li>{pr("glyphs", t)}</li>
      </ul>
      {pr("reminder", t, "font-bold")}
    </section>
  );
}

export default ManaMobileSection;
