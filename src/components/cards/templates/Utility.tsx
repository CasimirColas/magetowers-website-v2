import { cn } from "@/lib/utils";
import { CardNames } from "../types";
import { cardsDictionary as d } from "../dictionary";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useEffect } from "react";
import { adjustFontSize } from "@/utils/functions/adjustFontSize";

interface UtilityProps {
  id: string;
  name: CardNames;
  className?: string;
}

function Utility({ name, className, id }: UtilityProps) {
  const titleId = "glyph-title-" + id;
  const descriptionId = "glyph-description-" + id;
  const card = d[name];
  const t = useTranslations(`cards.${card.translation_key}`);
  useEffect(() => {
    adjustFontSize(titleId, 0.06);
    adjustFontSize(descriptionId, 0.035);
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
        className="absolute right-1/2 translate-x-1/2 bottom-[40%] underline font-semibold"
        id={titleId}
      >
        {t("name")}
      </div>
      <div
        className="absolute right-1/2 translate-x-1/2 bottom-[8%] text-left w-[69%] h-[31%] p-[1%]"
        id={descriptionId}
      >
        {card.description_keys.map((key, index) => (
          <div
            key={index}
            className={clsx("", {
              "pb-1": key === "description",
              "text-red-600 border-t border-black/30 pt-1": key === "warning",
              "font-semibold": key === "choose_option",
              "list-disc list-item ml-[8%] pb-[2%]": key.startsWith("option_"),
            })}
          >
            {t(key)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Utility;
