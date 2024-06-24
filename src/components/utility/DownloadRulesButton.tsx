import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { download } from "@/config/download";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

function DownloadRulesButton() {
  const router = useRouter();
  const locale = router.locale || "en";
  const ct = useTranslations("common");
  const t = useTranslations("contact");
  return (
    <Button variant={"outline"} asChild>
      <a
        //@ts-expect-error
        href={download.rules[locale]}
        className="flex justify-center items-center gap-2"
        download={"MageTowers_" + ct("routes.rules") + `_${locale}`}
        target="_blank"
        style={{
          //@ts-expect-error
          cursor: download.rules[locale] ? "pointer" : "not-allowed",
        }}
      >
        {t("download")} <Download className="h-5/6" />
      </a>
    </Button>
  );
}

export default DownloadRulesButton;
