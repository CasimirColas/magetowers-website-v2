import Link from "next/link";
import {
  Instagram,
  KickStarter,
  TikTok,
  Twitter,
  Youtube,
} from "../visuals/BrandLogos";
import { urls } from "@/config/urls";
import { cn } from "@/lib/utils";

interface LandingSectionProps {
  className?: string;
}

function LandingSection({ className }: LandingSectionProps) {
  return (
    <section
      className={cn(
        "w-full flex items-center flex-col justify-center gap-20 sm:gap-24 bg-skyWithTower bg-cover bg-center h-full py-10 snap-center",
        className
      )}
    >
      <h1
        className="font-title font-extrabold sm:text-8xl text-white text-center text-6xl"
        style={{
          textShadow: "-4px 5px 0px #69a0bd, -1px 5px 0px #69a0bd",
        }}
      >
        Mage Towers
      </h1>
      <p className="p-4 rounded-full bg-white text-xl font-bold text-sky shadow-lg">
        Coming to Kickstarter soon!
      </p>
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="scroll-m-20 border-b text-xl font-semibold tracking-tight first:mt-0 text-white border-white">
          In the mean time follow us here
        </h2>
        <div className="flex justify-center items-center gap-2">
          <Link href={urls.youtubeURL} target="_blank" className="hover:grow-1">
            <Youtube w="50" />
          </Link>
          <Link href={urls.instagramURL} target="_blank">
            <Instagram w="50" />
          </Link>
          <Link href={urls.twitterURL} target="_blank">
            <Twitter w="45" />
          </Link>
          <Link href={urls.tiktokURL} target="_blank">
            <TikTok w="45" />
          </Link>
          <Link href={urls.kickstarterURL} target="_blank">
            <KickStarter w="38" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;
