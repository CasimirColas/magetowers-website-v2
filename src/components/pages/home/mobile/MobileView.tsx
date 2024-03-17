import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";
import { useEffect } from "react";
import LandingSection from "./sections/LandingSection";
import VideoSection from "./sections/VideoSection";
import ThanksSection from "./sections/ThanksSection";
import MobileSimpleSection from "./MobileSimpleSection";
import Image from "next/image";
import MagicTypesCarousel from "./MagicTypesCarousel";

function MobileView() {
  useEffect(() => {
    return scrollBackgroundWithContent("main-text", "background-image");
  }, []);
  return (
    <div
      className="h-full w-full overflow-auto flex flex-col gap-4"
      id="main-text"
    >
      <Image
        src={"/backgrounds/mobile.png"}
        alt="Background Image"
        layout="fill"
        priority
        style={{
          top: 0,
          left: 0,
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          objectPosition: "0% 0%",
        }}
        id="background-image"
      />
      <LandingSection />
      <VideoSection />
      <MobileSimpleSection
        translationsKey="expectations_section"
        addonBottom={
          <>
            <Image
              src="/illustrations/gainMana.png"
              alt="gain mana"
              width={300}
              height={300}
              className="w-3/4"
            />
            <MagicTypesCarousel />
          </>
        }
      />
      <MobileSimpleSection
        translationsKey="power_section"
        addonBottom={
          <Image
            src="/illustrations/clearsight.png"
            className="w-3/4"
            width={300}
            height={300}
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
            width={300}
            height={300}
            alt="Old wizard"
          />
        }
      />
      <ThanksSection />
    </div>
  );
}

export default MobileView;
