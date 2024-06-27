import { urls } from "@/config/urls";
import ScreenSection from "../../../../layout/ScreenSection";
import YoutubeVideoPlayer from "../../../../utility/YoutubeVideoPlayer";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../ui/card";
import { useTranslations } from "next-intl";
import { parseText } from "@/utils/functions/parseText";
import Image from "next/image";

function VideoSection() {
  const t = useTranslations("home.video_section");
  const pt = (text: string) => {
    const textToParse = t(text);
    return parseText({ default: true, text: textToParse });
  };
  return (
    <section className="relative p-6 flex bg-cover bg-center justify-between items-center xl:flex-row flex-col min-h-[100vh]">
      <Image
        src={"/backgrounds/lakeSetup.jpg"}
        alt="Background Image"
        fill
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <div className="w-full p-12">
        <YoutubeVideoPlayer url={urls.videoTrailer} className="w-full" />
      </div>
      <div className="xl:w-1/2 w-full flex justify-center">
        <Card className="bg-opacity-95 rounded-lg flex flex-col items-center xl:w-full w-[66vw] border-b-0 h-full max-h-[70vh]">
          <CardHeader className="pb-0">
            <CardTitle
              className="font-title text-center text-tile text-4xl"
              style={{
                textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
              }}
            >
              {t("title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xl py-8 px-8 text-center">
            {pt("text_full")}
          </CardContent>
          <Image
            src="/illustrations/mages-playing.png"
            alt="Mages playing Mages Towers"
            width={400}
            height={400}
            className="object-contain 2xl:flex hidden"
          />
        </Card>
      </div>
    </section>
  );
}

export default VideoSection;
