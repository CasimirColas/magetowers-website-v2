import { cn } from "@/lib/utils";
import { CardNames } from "../types";
import { cardsDictionary as d } from "../dictionary";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { adjustFontSize } from "@/utils/functions/adjustFontSize";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import Image from "next/image";

interface SpellProps {
  id: string;
  name: CardNames;
  className?: string;
}

function Spell({ name, className, id }: SpellProps) {
  const titleId = "glyph-title-" + id;
  const descriptionId = "glyph-description-" + id;
  const card = d[name];
  const t = useTranslations(`cards.${card.translation_key}`);
  const ct = useTranslations("common.vocabulary");
  useEffect(() => {
    adjustFontSize(titleId, 0.075);
    adjustFontSize(descriptionId, 0.042);
  }, []);
  return (
    <div
      className={cn(
        "aspect-card w-[400px] relative rounded-md z-1 overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `url(${card.cardImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute right-1/2 translate-x-1/2 w-full bg-green-700 h-[41%] top-0 z-[-1]"
        style={{
          backgroundImage: "url(/cards/spell_bkg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute font-title text-tile right-1/2 translate-x-1/2 bottom-[62%] font-bold w-2/3 text-center"
        id={titleId}
      >
        {t("name")}
      </div>
      <div
        className="absolute right-1/2 translate-x-1/2 bottom-[6%] w-[80%] h-[52%] p-[2%] flex flex-col justify-around"
        id={descriptionId}
      >
        {card.description_keys.map((key, index) => (
          <div
            key={index}
            className={`${index === 0 ? "pr-[4%]" : "border-t-2"} py-[2.5%]`}
          >
            <div className="flex items-center gap-[2%] font-semibold pb-[1%]">
              {`${cfl(ct("level"))} ${index + 1}:`}
              {index === 0 ? (
                <Image
                  src="/sigils/empty.png"
                  alt={ct("sigil")}
                  width={50}
                  height={50}
                  className="aspect-square h-auto w-[8%]"
                />
              ) : (
                Array(index)
                  .fill(null)
                  .map((_, i) => (
                    <Image
                      key={i}
                      src={`/sigils/${card.manaType}.png`}
                      alt={ct("sigil")}
                      width={50}
                      height={50}
                      className="aspect-square h-auto w-[8%]"
                    />
                  ))
              )}
            </div>
            <div>{t(key)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spell;
