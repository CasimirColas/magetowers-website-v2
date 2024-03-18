import HoverBench from "@/components/compositions/HoverBench";
import DesktopSimpleSection from "./DesktopSimpleSection";
import MagicTypesPresentation from "./MagicTypesPresentation";
import LandingSection from "./sections/LandingSection";
import ThanksSection from "./sections/ThanksSection";
import VideoSection from "./sections/VideoSection";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

function DesktopView() {
  const t = useTranslations("home.bench");
  return (
    <>
      <LandingSection />
      <VideoSection />
      <DesktopSimpleSection
        className="gap-8"
        background="/backgrounds/snowyWaterfall.jpg"
        translationsKey="expectations_section"
        classNameCard="h-full"
        addonBottom={
          <Image
            src="/illustrations/gainMana.png"
            className="object-contain grow h-0 w-auto"
            width={400}
            height={400}
            alt="gain mana"
          />
        }
        addonRight={<MagicTypesPresentation />}
      />
      <DesktopSimpleSection
        className="gap-8"
        background="/backgrounds/mossyWall.jpg"
        translationsKey="power_section"
        classNameCard="h-full"
        addonBottom={
          <Image
            src="/illustrations/clearsight.png"
            className="h-0 object-contain w-auto grow"
            width={300}
            height={300}
            alt="clear sight"
          />
        }
        addonRight={
          <Card className="w-1/2 flex flex-col items-center pb-8 max-w-xl">
            <CardHeader>
              <CardTitle className="text-center mt-4 text-tile text-xl">
                {t("title")}
              </CardTitle>
            </CardHeader>
            <CardDescription className="text-md px-8">
              {t("description")}
            </CardDescription>
            <HoverBench className="w-10/12 gap-4 mt-4" />
          </Card>
        }
      />
      <DesktopSimpleSection
        className="gap-8"
        background="/backgrounds/setupOnStump.jpg"
        classNameCard="h-full"
        translationsKey="future_section"
        addonBottom={
          <Image
            src="/illustrations/old-wiz.png"
            className="object-contain grow h-0 w-auto"
            width={300}
            height={300}
            alt="old wizard"
          />
        }
        addonRight={<span className="w-1/2" />}
      />
      <ThanksSection />
    </>
  );
}

export default DesktopView;
