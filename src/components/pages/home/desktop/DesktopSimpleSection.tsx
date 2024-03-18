import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { parseText } from "@/utils/functions/parseText";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface DesktopSimpleSectionProps {
  className?: string;
  background?: string;
  classNameCard?: string;
  translationsKey: string;
  addonTop?: JSX.Element;
  addonBottom?: JSX.Element;
  addonRight?: JSX.Element;
}

function DesktopSimpleSection({
  className,
  background,
  classNameCard,
  translationsKey,
  addonTop,
  addonRight,
  addonBottom,
}: DesktopSimpleSectionProps) {
  const t = useTranslations("home." + translationsKey);
  const pt = (text: string) => {
    const textToParse = t(text);
    return parseText({ default: true, text: textToParse });
  };
  return (
    <section
      className={cn(
        "relative w-full h-full p-6 flex bg-cover bg-center justify-between items-center",
        className
      )}
    >
      <Image
        src={background ?? "/backgrounds/skyWithTower.png"}
        alt="Background Image"
        fill
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <Card
        className={cn(
          "bg-opacity-95 rounded-lg flex flex-col items-center w-1/2 max-w-xl border-b-0 max-h-[800px]",
          classNameCard
        )}
      >
        <CardHeader>
          <CardTitle
            className="font-title text-center mt-4 text-tile text-4xl"
            style={{
              textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
            }}
          >
            {t("title")}
          </CardTitle>
        </CardHeader>
        {addonTop}
        <CardContent className="text-xl py-8 px-8">
          {pt("text_full")}
        </CardContent>
        {addonBottom}
      </Card>
      {addonRight ?? <span />}
    </section>
  );
}

export default DesktopSimpleSection;
