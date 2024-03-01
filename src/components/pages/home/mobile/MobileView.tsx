import scrollBackgroundWithContent from "@/utils/functions/scrollBackgroundWithContent";
import { useEffect } from "react";
import LandingSection from "./sections/LandingSection";
import VideoSection from "./sections/VideoSection";
import ExpectationSection from "./sections/ExpectationSection";
import PowerSection from "./sections/PowerSection";
import FutureSection from "./sections/FutureSection";
import ThanksSection from "./sections/ThanksSection";

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
      <ExpectationSection />
      <PowerSection />
      <FutureSection />
      <ThanksSection />
    </div>
  );
}

export default MobileView;
