import { urls } from "@/config/urls";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  TikTokFilled,
  TwitterFilled,
  Youtube,
} from "../visuals/BrandLogos";

interface LinksRowProps {
  className?: string;
}

function LinksRow({ className }: LinksRowProps) {
  return (
    <div
      className={cn("flex justify-center items-center gap-2 pb-10", className)}
    >
      <Link
        href={urls.youtubeURL}
        target="_blank"
        className="hover:scale-105 transition-all duration-300 ease-in-out"
      >
        <Youtube w="50" />
      </Link>
      <Link
        href={urls.instagramURL}
        target="_blank"
        className="rounded-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <Instagram w="50" />
      </Link>
      <Link
        href={urls.twitterURL}
        target="_blank"
        className="rounded-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <TwitterFilled w="45" />
      </Link>
      <Link
        href={urls.tiktokURL}
        target="_blank"
        className="rounded-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <TikTokFilled w="45" />
      </Link>
      <Link
        href={urls.facebookURL}
        target="_blank"
        className="rounded-md overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        <Image
          src="/logos/facebook.jpg"
          alt="Facebook"
          width={38}
          height={38}
          className="rounded-lg"
        />
      </Link>
    </div>
  );
}

export default LinksRow;
