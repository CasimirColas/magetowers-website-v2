import { cn } from "@/lib/utils";
import { CardNames } from "../types";
import { cardsDictionary as d } from "../dictionary";
import { useTranslations } from "next-intl";
import { adjustFontSize } from "@/utils/functions/adjustFontSize";
import { useEffect } from "react";
import { parseText } from "@/utils/functions/parseText";
import clsx from "clsx";

interface GlyphProps {
  id: string;
  name: CardNames;
  className?: string;
}

function Glyph({ name, className, id }: GlyphProps) {
  const titleId = "glyph-title-" + id;
  const descriptionId = "glyph-description-" + id;
  const card = d[name];
  const t = useTranslations(`cards.${card.translation_key}`);
  const pd = parseText({
    text: t("description"),
    default: false,
    args: {
      splitter: "||",
      parent: "p",
      //w-full h-full
      parentClassName: "",
      child: "b",
    },
  });
  useEffect(() => {
    adjustFontSize(titleId, 0.06);
    adjustFontSize(descriptionId, 0.055);
  }, []);
  return (
    <div
      className={cn("aspect-card w-[400px] relative rounded-md", className)}
      style={{
        backgroundImage: `url(${card.cardImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="font-title text-white absolute bottom-[28%] right-[49.5%] translate-x-1/2 w-[39%] h-[11%] text-center"
        id={titleId}
      >
        {t("name")}
      </div>
      <div
        className={clsx(
          "font-text absolute bottom-[2.5%] right-[49%] translate-x-1/2  w-[72%] h-[17%] p-2 text-center flex items-center font-medium ",
          {
            "[&_b]:text-destruction": card.manaType === "destruction",
            "[&_b]:text-arcane": card.manaType === "arcane",
            "[&_b]:text-order": card.manaType === "order",
            "[&_b]:text-chaos": card.manaType === "chaos",
            "[&_b]:text-creation": card.manaType === "creation",
          }
        )}
        id={descriptionId}
      >
        {pd}
      </div>
    </div>
  );
}

export default Glyph;
