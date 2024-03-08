import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { parseText } from "@/utils/functions/parseText";
import { useTranslations } from "next-intl";

interface DesktopSimpleSectionProps {
  className?: string;
  translationsKey: string;
  addonTop?: JSX.Element;
  addonBottom?: JSX.Element;
  addonRight?: JSX.Element;
}

function DesktopSimpleSection({
  className,
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
        "w-full h-full p-6 flex bg-cover bg-center justify-between items-center",
        className
      )}
    >
      <Card className="bg-opacity-95 rounded-lg flex flex-col items-center w-1/2 max-w-xl h-min border-b-0">
        <CardHeader>
          <CardTitle
            className="text-3xl font-title text-center mt-4 text-tile sm:text-4xl"
            style={{
              textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
            }}
          >
            {t("title")}
          </CardTitle>
        </CardHeader>
        {addonTop}
        <CardContent className="sm:text-xl sm:py-8 sm:px-8">
          {pt("text_full")}
        </CardContent>
        {addonBottom}
      </Card>
      {addonRight ?? <span />}
    </section>
  );
}

export default DesktopSimpleSection;
