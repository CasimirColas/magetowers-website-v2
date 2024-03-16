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
  h2Style: string;
}

function SetupDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: SetupDesktopSectionProps) {
  const t = useTranslations("rules.setup");
  const ct = useTranslations("common.vocabulary");
  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      {pr("intro", t)}
      <Link href="#composition" className="underline">
        {t("look_deck")}
      </Link>
      {pr("setup", t)}
      {pr("distribution", t)}
      <div className="flex flex-col items-center w-full justify-center">
        <b>{cfl(ct("street"))}</b>
        <div className="flex w-full items-center gap-2 h-min justify-center">
          <Image
            src="/compositions/board.png"
            alt="board"
            className="w-full h-auto max-w-sm"
            width={800}
            height={600}
          />
          <b className="pl-2 border-l-2 border-sky-900 h-full flex items-center">
            {cfl(ct("bench"))}
          </b>
        </div>
        <b>{cfl(ct("market"))}</b>
      </div>
      <div className="flex  items-center">
        <Image
          src="/compositions/countingSheetEmpty.png"
          alt="counting sheet"
          width={400}
          height={300}
          className="w-full h-auto p-12 max-w-xs"
        />
        <div className="flex items-center gap-2 w-full">
          <div className="flex flex-col items-center h-full  grow justify-center">
            <Image
              src="/compositions/openhand.png"
              alt={`${ct("player")} 1`}
              width={300}
              height={300}
              className="w-auto h-auto"
            />
            <p>{`${ct("player")} 1 - (5)`}</p>
          </div>
          <div className="flex flex-col items-center h-full  grow justify-center">
            <Image
              src="/compositions/closehand.png"
              alt={`${ct("player")} 2`}
              width={300}
              height={300}
              className="w-auto h-auto"
            />
            <p>{`${ct("player")} 2 - (6)`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SetupDesktopSection;
