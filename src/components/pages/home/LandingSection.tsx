import Link from "next/link";
import {
  Instagram,
  KickStarter,
  TikTokFilled,
  TwitterFilled,
  Youtube,
} from "../../visuals/BrandLogos";
import { urls } from "@/config/urls";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface LandingSectionProps {
  className?: string;
}

function LandingSection({ className }: LandingSectionProps) {
  const t = useTranslations("home.landing_section");
  return (
    <section
      className={cn(
        "w-full flex items-center flex-col sm:justify-center sm:gap-32 bg-skyWithTower sm:bg-center bg-right-bottom bg-cover h-full sm:py-10 snap-center justify-end pt-10 gap-4",
        className
      )}
    >
      <h1
        className="font-title font-extrabold sm:text-8xl text-white text-center text-6xl mb-auto sm:mb-0"
        style={{
          textShadow: "-4px 5px 0px #69a0bd, -1px 5px 0px #69a0bd",
        }}
      >
        {t("title")}
      </h1>

      <div className="flex flex-col justify-center items-center sm:gap-6 gap-4">
        <p className="p-4 rounded-full bg-white text-xl font-bold text-sky shadow-lg sm:mb-8">
          {t("comming_soon")}
        </p>
        <h2
          className="scroll-m-20  text-xl font-semibold tracking-tight first:mt-0 text-white  underline-offset-8 w-10/12 text-center hidden sm:block"
          style={{
            textShadow: "0px 0px 4px #072755",
          }}
        >
          {t("follow_us")}
        </h2>
        <div className="flex justify-center items-center gap-2 pb-10 sm:pb-0">
          <Link href={urls.youtubeURL} target="_blank" className="hover:grow-1">
            <Youtube w="50" />
          </Link>
          <Link
            href={urls.instagramURL}
            target="_blank"
            className="rounded-md overflow-hidden"
          >
            <Instagram w="50" />
          </Link>
          <Link
            href={urls.twitterURL}
            target="_blank"
            className="rounded-md overflow-hidden"
          >
            <TwitterFilled w="45" />
          </Link>
          <Link
            href={urls.tiktokURL}
            target="_blank"
            className="rounded-md overflow-hidden"
          >
            <TikTokFilled w="45" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
