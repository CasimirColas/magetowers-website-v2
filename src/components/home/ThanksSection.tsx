import ScreenSection from "../layout/ScreenSection";

function FutureSection() {
  return (
    <ScreenSection className="flex flex-col items-center sm:flex-row bg-white gap-8">
      <h3
        className="text-3xl font-title text-center mt-4 text-tile sm:text-5xl"
        style={{
          textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
        }}
      >
        Special thanks to...
      </h3>
    </ScreenSection>
  );
}

export default FutureSection;
