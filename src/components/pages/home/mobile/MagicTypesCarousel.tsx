import { manaType } from "@/components/cards/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import { useTranslations } from "next-intl";
import { parseText as pt } from "@/utils/functions/parseText";
import DetailsDialog from "@/components/utility/DetailsDialog";
import GameCard from "@/components/cards/GameCard";
import { cardsDictionary as d } from "@/components/cards/dictionary";

function MagicTypesCarousel() {
  const t = useTranslations("home.manatypes_carousel");
  const ct = useTranslations("common.vocabulary");
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-2/3 pb-6"
    >
      <CarouselContent>
        <Item
          title={cfl(ct("destruction"))}
          description={t("destruction")}
          type="destruction"
          classNameTitle="text-[#f99e53]"
          shadowColor="#ac2430"
          classNameText="bg-black"
          highlight="text-destruction"
          popupText={t("look")}
          popupContent={<Popup type="destruction" />}
        />
        <Item
          title={cfl(ct("arcane"))}
          description={t("arcane")}
          type="arcane"
          classNameTitle="text-[#122855]"
          shadowColor="#38b6ff"
          classNameText="bg-tile"
          highlight="text-arcane"
          popupText={t("look")}
          popupContent={<Popup type="arcane" />}
        />
        <Item
          title={cfl(ct("chaos"))}
          description={t("chaos")}
          type="chaos"
          classNameTitle="text-[#8b57bf]"
          shadowColor="#34014c"
          classNameText="bg-chaos"
          highlight="text-[#34014c]"
          popupText={t("look")}
          popupContent={<Popup type="chaos" />}
        />
        <Item
          title={cfl(ct("order"))}
          description={t("order")}
          type="order"
          classNameTitle="text-[#793600]"
          shadowColor="#79360066"
          classNameText="bg-order"
          highlight="text-[#793600]"
          popupText={t("look")}
          popupTextClassName="text-[#793600]"
          popupContent={<Popup type="order" />}
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function Popup({ type }: { type: manaType }) {
  const cards = Object.values(d).filter(
    (card) => card.category === "spell" && card.manaType === type
  );
  return (
    <div className="flex justify-around w-screen sm:gap-2 gap-4 p-4">
      {cards.map((card, index) => (
        <GameCard
          key={index}
          name={card.name}
          id={`${type}-popup-card${index}`}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}

function Item({
  title,
  description,
  type,
  shadowColor,
  highlight,
  classNameTitle,
  classNameText,
  popupText,
  popupTextClassName,
  popupContent,
}: {
  title: string;
  description: string;
  type: manaType;
  shadowColor?: string;
  highlight?: string;
  classNameTitle?: string;
  classNameText?: string;
  popupTextClassName?: string;
  popupText?: string;
  popupContent?: JSX.Element;
}) {
  return (
    <CarouselItem className="md:basis-full">
      <div className="p-1 h-full">
        <Card
          className="h-full"
          style={{
            backgroundImage: `url(/backgrounds/theme/${type}-inc.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <CardContent className="flex items-center justify-between p-6 flex-col h-full gap-52 px-4 pb-0">
            <h3
              className={cn(
                `font-title text-3xl sm:text-5xl text-white`,
                classNameTitle
              )}
              style={{
                textShadow: `-1px 2px 2px ${shadowColor || "#000"}`,
              }}
            >
              {title}
            </h3>
            <div className="flex flex-col items-center gap-2 pb-4">
              {pt({
                text: description,
                default: true,
                args: {
                  parentClassName: cn(
                    "text-center text-white sm:text-xl p-2 rounded-md bg-opacity-80",
                    classNameText
                  ),
                  childClassName: highlight,
                },
              })}
              <DetailsDialog
                trigger={
                  <u className={cn("text-white", popupTextClassName)}>
                    {popupText}
                  </u>
                }
              >
                {popupContent}
              </DetailsDialog>
            </div>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}

export default MagicTypesCarousel;
