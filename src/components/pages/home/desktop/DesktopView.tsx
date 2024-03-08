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
        className="bg-snowyWaterfall"
        translationsKey="expectations_section"
        addonBottom={
          <Image
            src="/illustrations/gainMana.png"
            className="h-[250px] object-contain w-auto mt-auto"
            width={300}
            height={300}
            alt="gain mana"
          />
        }
        addonRight={<MagicTypesPresentation />}
      />
      <DesktopSimpleSection
        className="bg-mossyWall"
        translationsKey="power_section"
        addonBottom={
          <Image
            src="/illustrations/clearsight.png"
            className="h-[250px] object-contain w-auto mt-auto"
            width={300}
            height={300}
            alt="clear sight"
          />
        }
        addonRight={
          <Card className="w-1/3 flex flex-col items-center pb-8">
            <CardHeader>
              <CardTitle
                className="font-title text-center mt-4 text-tile text-2xl"
                style={{
                  textShadow: "-1px 1px 0px #69a0bd",
                }}
              >
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
        className="bg-setupOnStump"
        translationsKey="future_section"
        addonBottom={
          <Image
            src="/illustrations/old-wiz.png"
            className="h-[250px] object-contain w-auto mt-auto"
            width={300}
            height={300}
            alt="old wizard"
          />
        }
      />
      <ThanksSection />
    </>
  );
}

export default DesktopView;
