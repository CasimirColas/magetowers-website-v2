import { Blockquote, H2 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { parseText } from "@/utils/functions/parseText";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HistoryMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
}

function HistoryMobileSection({
  id,
  className,
  h2Style,
}: HistoryMobileSectionProps) {
  const t = useTranslations("rules.history");
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
      <Blockquote className="border-red-950 pl-4">{t("lore")}</Blockquote>
      {pr("goal")}
      <Image
        src="/illustrations/necroFire.png"
        className="max-h-72 w-auto"
        alt="Lore"
        width={400}
        height={300}
      />
    </section>
  );
}

export default HistoryMobileSection;
