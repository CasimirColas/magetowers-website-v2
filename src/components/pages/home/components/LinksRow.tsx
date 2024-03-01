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
      <Link href={urls.youtubeURL} target="_blank" className="">
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
  );
}

export default LinksRow;
