import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { parseText } from "@/utils/functions/parseText";

interface MobileSimpleSectionProps {
  className?: string;
  translationsKey: string;
  addonTop?: JSX.Element;
  addonBottom?: JSX.Element;
}

function MobileSimpleSection({
  className,
  translationsKey,
  addonTop,
  addonBottom,
}: MobileSimpleSectionProps) {
  const t = useTranslations("home." + translationsKey);
  const pt = (text: string) => {
    const textToParse = t(text);
    return parseText({ default: true, text: textToParse });
  };
  return (
    <section className={cn("w-full p-6 flex justify-center", className)}>
      <Card className="w-full sm:max-w-xl bg-opacity-85 rounded-lg flex flex-col items-center border-b-0">
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
    </section>
  );
}

export default MobileSimpleSection;
