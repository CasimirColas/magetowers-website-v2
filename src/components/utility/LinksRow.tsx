import {
  Instagram,
  TikTokFilled,
  TwitterFilled,
  Youtube,
} from "@/components/visuals/BrandLogos";
import { urls } from "@/config/urls";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
    </div>
  );
}

export default LinksRow;
