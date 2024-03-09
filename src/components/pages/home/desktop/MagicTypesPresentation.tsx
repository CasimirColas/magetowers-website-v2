import { manaType } from "@/components/cards/types";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import {
  HoverCardContent,
  HoverCardTrigger,
  HoverCard,
} from "@/components/ui/hover-card";
import { parseText as pt } from "@/utils/functions/parseText";
import GameCard from "@/components/cards/GameCard";
import { cardsDictionary as d } from "@/components/cards/dictionary";

function MagicTypesPresentation() {
  const t = useTranslations("home.manatypes_carousel");
  const ct = useTranslations("common.vocabulary");
  return (
    <div className="relative grid grid-cols-2 grid-rows-2 h-3/4 aspect-square items-center justify-center">
      <Item
        className="top-1/2 hover:z-1"
        title={cfl(ct("arcane"))}
        type="arcane"
        classNameTitle="text-[#122855]"
        shadowColor="#38b6ff"
        hoverContent={t("arcane")}
      />
      <Item
        className="right-1/2 hover:z-1"
        title={cfl(ct("chaos"))}
        type="chaos"
        classNameTitle="text-[#8b57bf]"
        shadowColor="#34014c"
        hoverContent={t("chaos")}
      />
      <Item
        className="left-1/2 hover:z-1"
        title={cfl(ct("destruction"))}
        type="destruction"
        classNameTitle="text-[#f99e53]"
        shadowColor="#ac2430"
        hoverContent={t("destruction")}
      />
      <Item
        className="bottom-1/2 hover:z-1"
        title={cfl(ct("order"))}
        type="order"
        classNameTitle="text-[#793600]"
        shadowColor="#79360066"
        hoverContent={t("order")}
      />
    </div>
  );
}

function Item({
  className,
  title,
  type,
  classNameTitle,
  shadowColor,
  hoverContent,
}: {
  className?: string;
  title?: string;
  type: manaType;
  classNameTitle?: string;
  shadowColor?: string;
  hoverContent: string;
}) {
  const cards = Object.values(d).filter(
    (card) => card.category === "spell" && card.manaType === type
  );
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger
          className={cn(
            "rotate-45 rounded-lg overflow-hidden relative w-2/3 h-2/3 cursor-pointer flex items-center justify-center",
            className
          )}
        >
          <div
            className="flex flex-col justify-center items-center h-[150%] w-auto rotate-[-45deg] aspect-square"
            style={{
              backgroundImage: `url(/backgrounds/theme/${type}.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3
              className={cn(
                `font-title text-2xl text-white pt-4`,
                classNameTitle
              )}
              style={{
                textShadow: `-1px 2px 2px ${shadowColor || "#000"}`,
              }}
            >
              {title}
            </h3>
            <Image
              src={`/glyphs/stones/${type}.png`}
              alt="Mana stone"
              width={200}
              height={200}
              className="w-1/4"
            />
          </div>
        </HoverCardTrigger>
        <HoverCardContent
          className="flex flex-col items-center justify-between border-none gap-2 w-[40vw] mb-12 mt-28"
          side="left"
          align="center"
        >
          <div className="flex justify-around w-full gap-2">
            {cards.map((card, index) => (
              <GameCard
                key={index}
                name={card.name}
                id={`${type}-popup-card${index}`}
                className="rounded-md"
              />
            ))}
          </div>
          {pt({
            text: hoverContent,
            default: true,
            args: {
              childClassName: `text-${type}`,
              parentClassName: "text-center text-xl",
            },
          })}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default MagicTypesPresentation;
