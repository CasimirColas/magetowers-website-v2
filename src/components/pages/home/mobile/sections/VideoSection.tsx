import { urls } from "@/config/urls";
import ScreenSection from "../../../../layout/ScreenSection";
import YoutubeVideoPlayer from "../../../../utility/YoutubeVideoPlayer";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../ui/card";
import { useTranslations } from "next-intl";
import { parseText } from "@/utils/functions/parseText";
import { useRouter } from "next/router";
import Image from "next/image";

function VideoSection() {
  const t = useTranslations("home.video_section");
  const pt = (text: string) => {
    const textToParse = t(text);
    return parseText({ default: true, text: textToParse });
  };
  const { locale } = useRouter();
  return (
    <ScreenSection className="flex items-center flex-col gap-8 h-fit">
      <Card className="w-full bg-opacity-85 rounded-lg sm:max-w-xl flex flex-col items-center">
        <CardHeader
          className={`pb-0 ${locale === "fr" ? "px-0 sm:px-6" : undefined}`}
        >
          <CardTitle
            className="text-3xl font-title text-center text-tile sm:text-4xl"
            style={{
              textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
            }}
          >
            {t("title")}
          </CardTitle>
        </CardHeader>
        <div className="w-full p-6">
          <YoutubeVideoPlayer url={urls.videoTrailer} className="w-full" />
        </div>

        <CardContent className="sm:text-xl sm:px-8">
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
    </ScreenSection>
  );
}

export default VideoSection;
