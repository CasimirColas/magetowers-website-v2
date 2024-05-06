import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import LinksRow from "../../../../utility/LinksRow";
import { getOptimizedImage } from "@/utils/functions/getOptimizedImage";
import Link from "next/link";
import { urls } from "@/config/urls";

interface LandingSectionProps {
  className?: string;
}

function LandingSection({ className }: LandingSectionProps) {
  const t = useTranslations("home.landing_section");
  const backgroundImage = getOptimizedImage({
    src: "/backgrounds/teaserGifMT.gif",
    width: screen.availWidth,
    height: screen.availHeight,
    priority: true,
  });
  return (
    <section
      className={cn(
        "realtive w-full flex items-center flex-col sm:justify-center sm:gap-32 h-full sm:py-10 snap-center justify-end pt-10 gap-4",
        className
      )}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(70,181,252,0.7) 0%, rgba(255,255,255,0.7) 100%)," +
          backgroundImage,
        backgroundSize: "cover",
      }}
    >
      <h1
        className="font-title font-extrabold sm:text-8xl text-white text-center text-6xl mb-auto sm:mb-0"
        style={{
          textShadow: "-4px 5px 0px #072755, -1px 5px 0px #072755",
        }}
      >
        {t("title")}
      </h1>

      <div className="flex flex-col justify-center items-center sm:gap-6 gap-4">
        <Link
          className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg sm:mb-8 hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
          href={urls.kickstarterURL}
        >
          {t("available_now")}
        </Link>
        {/* <h2
          className="scroll-m-20  text-xl font-semibold tracking-tight first:mt-0 text-white  underline-offset-8 w-10/12 text-center hidden sm:block"
          style={{
            textShadow: "0px 0px 4px #072755",
          }}
        >
          {t("follow_us")}
        </h2> */}
        <LinksRow />
      </div>
    </section>
  );
}

export default LandingSection;
