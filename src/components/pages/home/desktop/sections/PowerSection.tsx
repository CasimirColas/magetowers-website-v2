import { useTranslations } from "next-intl";
import ScreenSection from "../../../../layout/ScreenSection";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../ui/card";
import { parseText } from "@/utils/functions/parseText";

function PowerSection() {
  const t = useTranslations("home.power_section");
  const pt = (text: string) => {
    const textToParse = t(text);
    return parseText({ default: true, text: textToParse });
  };
  return (
    <ScreenSection className="flex flex-col items-center sm:flex-row bg-setupOnStump bg-cover bg-center gap-8">
      <Card className="w-full sm:max-w-xl h-full bg-opacity-95 rounded-lg">
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
        <CardContent className="sm:text-xl sm:py-8 sm:px-8">
          {pt("text_full")}
        </CardContent>
      </Card>
    </ScreenSection>
  );
}

export default PowerSection;
