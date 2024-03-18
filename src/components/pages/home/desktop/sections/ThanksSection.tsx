import ScreenSection from "../../../../layout/ScreenSection";
import ThanksCard from "../../components/ThanksCard";
import { useTranslations } from "next-intl";
import ThxCardsData from "@/components/pages/home/ThxCardsData";
import Image from "next/image";

function FutureSection() {
  const t = useTranslations("home.thanks_section");
  return (
    <ScreenSection className="relative flex flex-col items-end gap-8 justify-around">
      <Image
        src={"/backgrounds/lakeBox.jpg"}
        alt="Background Image"
        fill
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col gap-4 h-full justify-center mr-4">
        <h3
          className="text-3xl font-title text-center text-white sm:text-5xl sm:pb-12 pb-4"
          style={{
            textShadow: "-2px 2px 0px #072755, -1px 2px 0px #072755",
          }}
        >
          {t("title")}
        </h3>
        {ThxCardsData().map((thank) => (
          <ThanksCard
            key={thank.title}
            title={thank.title}
            subText={thank.subText}
            image={thank.image}
            alt={thank.alt}
            description={thank.description}
          />
        ))}
      </div>
    </ScreenSection>
  );
}

export default FutureSection;
