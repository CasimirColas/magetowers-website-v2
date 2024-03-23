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
    <section className="relative w-full h-full p-6 flex bg-cover bg-center justify-between items-center">
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
      <div className="w-1/2 p-12">
        <YoutubeVideoPlayer url={urls.videoTrailer} className="w-full" />
      </div>

      <Card className="bg-opacity-95 rounded-lg flex flex-col items-center w-1/2 max-w-xl border-b-0 max-h-[800px]">
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
        <CardContent className="text-xl py-8 px-8">
          {pt("text_full")}
        </CardContent>
        <Image
          src="/illustrations/mages-playing.png"
          alt="Mages playing Mages Towers"
          width={500}
          height={500}
          className="w-3/4"
        />
      </Card>
    </section>
  );
}

export default VideoSection;
