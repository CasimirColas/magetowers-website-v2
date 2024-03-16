import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";
import Image from "next/image";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import Link from "next/link";

interface SetupDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
}

function SetupDesktopSection({ id, pr, className }: SetupDesktopSectionProps) {
  const t = useTranslations("rules.setup");
  const ct = useTranslations("common.vocabulary");
  return (
    <section className={className} id={id}>
      <H2>{t("title")}</H2>
      {pr("intro", t)}
      <Image
        src="/compositions/countingSheetEmpty.png"
        alt="counting sheet"
        width={400}
        height={300}
        className="w-auto h-auto"
      />
      <Link href="#composition">{t("look_deck")}</Link>
      {pr("setup", t)}
      <div className="flex flex-col gap-2 items-center w-full">
        <b>{cfl(ct("street"))}</b>
        <div className="flex w-full items-center gap-2">
          <Image
            src="/compositions/board.png"
            alt="board"
            className="grow w-0 h-auto"
            width={400}
            height={300}
          />
          <b className="pl-2 border-l-2 border-red-950 h-full flex items-center w-min">
            {cfl(ct("bench"))}
          </b>
        </div>
        <b>{cfl(ct("market"))}</b>
      </div>
      {pr("distribution", t)}
      <div className="flex items-center gap-2 w-full">
        <div className="flex flex-col items-center h-full justify-between grow">
          <Image
            src="/compositions/openhand.png"
            alt={`${ct("player")} 1`}
            width={200}
            height={200}
            className="w-auto h-auto"
          />
          <p>{`${ct("player")} 1 - (5)`}</p>
        </div>
        <div className="flex flex-col items-center h-full justify-between grow">
          <Image
            src="/compositions/closehand.png"
            alt={`${ct("player")} 2`}
            width={200}
            height={200}
            className="w-auto h-auto"
          />
          <p>{`${ct("player")} 2 - (6)`}</p>
        </div>
      </div>
    </section>
  );
}

export default SetupDesktopSection;
