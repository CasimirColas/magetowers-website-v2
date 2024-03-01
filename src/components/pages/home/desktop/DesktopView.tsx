import ExpectationSection from "./sections/ExpectationSection";
import FutureSection from "./sections/FutureSection";
import LandingSection from "./sections/LandingSection";
import PowerSection from "./sections/PowerSection";
import ThanksSection from "./sections/ThanksSection";
import VideoSection from "./sections/VideoSection";

function DesktopView() {
  return (
    <>
      <LandingSection />
      <VideoSection />
      <ExpectationSection />
      <PowerSection />
      <FutureSection />
      <ThanksSection />
    </>
  );
}

export default DesktopView;
