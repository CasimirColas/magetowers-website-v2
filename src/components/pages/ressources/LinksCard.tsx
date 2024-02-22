import Link from "next/link";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { urls } from "@/config/urls";
import {
  TikTokFilled,
  TwitterFilled,
  Youtube,
  Instagram,
} from "../../visuals/BrandLogos";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";
import { parseText } from "@/utils/functions/parseText";

const linkStyle = "flex justify-between items-center";

function LinksCard() {
  const t = useTranslations("ressources");
  return (
    <Card className="bg-opacity-85 w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-xl">{t("title")}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button variant={"outline"} asChild>
          <Link href={urls.instagramURL} target="_blank" className={linkStyle}>
            <Instagram w="30" /> Instagram
            <span />
          </Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href={urls.twitterURL} target="_blank" className={linkStyle}>
            <TwitterFilled w="30" />
            Twitter
            <span />
          </Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href={urls.tiktokURL} target="_blank" className={linkStyle}>
            <TikTokFilled w="30" />
            Tiktok
            <span />
          </Link>
        </Button>
        <Button variant={"outline"} asChild>
          <Link href={urls.youtubeURL} target="_blank" className={linkStyle}>
            <Youtube w="30" />
            Youtube
            <span />
          </Link>
        </Button>
        <p className="text-xs sm:text-sm">{t("publicity")}</p>
        {parseText({
          text: t("help"),
          default: true,
          args: {
            parentClassName: "text-xs sm:text-sm",
            childClassName: "text-view underline",
          },
        })}
        <span className="border border-slate-300 rounded-full" />
        <Button
          variant={"outline"}
          className="flex justify-center items-center gap-2"
        >
          {t("download")} <Download className="h-5/6" />
        </Button>
      </CardContent>
    </Card>
  );
}

export default LinksCard;
