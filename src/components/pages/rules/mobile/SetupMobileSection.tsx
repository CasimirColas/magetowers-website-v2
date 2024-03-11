import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import { parseText } from "@/utils/functions/parseText";
import { cn } from "@/lib/utils";

interface SetupMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
  linkStyle: string;
}

function SetupMobileSection({
  id,
  className,
  h2Style,
  linkStyle,
}: SetupMobileSectionProps) {
  const t = useTranslations("rules.setup");
  const ct = useTranslations("common.vocabulary");
  function pr(
    translationKey: string,
    parentClassName?: string,
    childClassName?: string
  ) {
    return parseText({
      text: t(translationKey),
      args: {
        parentClassName: cn("w-full", parentClassName),
        childClassName: cn("text-red-950", childClassName),
      },
      default: true,
    });
  }
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("intro")}
      <Image
        src="/compositions/countingSheetEmpty.png"
        alt="counting sheet"
        width={400}
        height={300}
      />
      <Link href="#composition" className={linkStyle}>
        {t("look_deck")}
      </Link>
      {pr("setup")}
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
      {pr("distribution")}
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
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default SetupMobileSection;
