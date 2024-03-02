import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";
import { useEffect } from "react";
import LandingSection from "./sections/LandingSection";
import VideoSection from "./sections/VideoSection";
import ThanksSection from "./sections/ThanksSection";
import MobileSimpleSection from "./MobileSimpleSection";
import Image from "next/image";

function MobileView() {
  useEffect(() => {
    return scrollBackgroundWithContent("main-text");
  }, []);
  return (
    <div
      className="h-full w-full bg-mobile overflow-auto bg-right-top bg-cover flex flex-col gap-4 bg-no-repeat"
      id="main-text"
    >
      <LandingSection />
      <VideoSection />
      <MobileSimpleSection translationsKey="expectations_section" />
      <MobileSimpleSection
        translationsKey="power_section"
        addonBottom={
          <Image
            src="/illustrations/clear-sight.png"
            className="w-3/4"
            width={200}
            height={200}
            alt="Clear sight"
          />
        }
      />
      <MobileSimpleSection
        translationsKey="future_section"
        addonBottom={
          <Image
            src="/illustrations/old-wiz.png"
            className="w-3/4"
            width={200}
            height={200}
            alt="Old wizard"
          />
        }
      />
      <ThanksSection />
    </div>
  );
}

export default MobileView;
