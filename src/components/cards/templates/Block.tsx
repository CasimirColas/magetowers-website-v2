import { cn } from "@/lib/utils";
import { CardDictionaryType, cardsDictionary as d } from "../dictionary";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { adjustFontSize } from "@/utils/functions/adjustFontSize";
import { parseText } from "@/utils/functions/parseText";
import clsx from "clsx";

interface BlockProps {
  id: string;
  card: CardDictionaryType;
  className?: string;
}

function Block({ className, id, card }: BlockProps) {
  const titleId = "block-title-" + id;
  const descriptionId = "block-description-" + id;
  const t = useTranslations(`cards.${card.translation_key}`);
  useEffect(() => {
    adjustFontSize(titleId, 0.1);
    adjustFontSize(descriptionId, 0.0409);
  }, []);
  return (
    <div
      className={cn("aspect-card w-[400px] relative", className)}
      style={{
        backgroundImage: `url(${card.cardImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="text-tile font-title absolute right-1/2 translate-x-1/2 font-bold bottom-[30%] text-center w-full"
        id={titleId}
      >
        {t("name")}
      </div>
      <div
        className="absolute right-1/2 translate-x-1/2 bottom-[2%] h-[25%] w-11/12 bg-[#ffffffb3] rounded-md p-[4%] text-center font-medium"
        id={descriptionId}
      >
        {card.description_keys.map((key, index) => (
          <div
            key={index}
            className={clsx("", {
              "pb-1": key === "description",
              "text-red-600 border-t border-slate-400 pt-1": key === "warning",
            })}
          >
            {parseText({
              default: true,
              text: t(key),
              args: { childClassName: "text-black" },
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block;
