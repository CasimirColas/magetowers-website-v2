import { manaType } from "@/components/cards/types";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import { parseText as pt } from "@/utils/functions/parseText";
import GameCard from "@/components/cards/GameCard";
import { cardsDictionary as d } from "@/components/cards/dictionary";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

function MagicTypesPresentation() {
  const t = useTranslations("home.manatypes_carousel");
  const ct = useTranslations("common.vocabulary");
  function Item({
    type,
    classNameTitle,
    shadowColor,
  }: {
    type: manaType;
    classNameTitle?: string;
    shadowColor?: string;
  }) {
    const cards = Object.values(d).filter(
      (card) => card.category === "spell" && card.manaType === type
    );
    return (
      <TabsContent value={type} className="h-full">
        <div className="w-full h-full flex flex-col justify-start items-center gap-4">
          <div className="relative flex flex-col w-full aspect-square items-center rounded-md overflow-hidden justify-between p-4">
            <Image
              src={`/backgrounds/theme/${type}-inc.png`}
              alt={`${type} background`}
              fill
              style={{
                zIndex: 0,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            <h3
              className={cn(
                `font-title text-6xl text-white z-10 mt-4`,
                classNameTitle
              )}
              style={{
                textShadow: `-1px 2px 2px ${shadowColor || "#000"}`,
              }}
            >
              {cfl(ct(type))}
            </h3>
            <div className="flex justify-between gap-4 h-1/2 w-full">
              {cards.map((card, index) => (
                <HoverCard key={index} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild className="cursor-pointer">
                    <div className="h-full aspect-card">
                      <GameCard
                        name={card.name}
                        id={`${type}-trigger-card${index}`}
                        className="rounded-md h-full w-auto"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    side="left"
                    align="center"
                    className="w-fit"
                  >
                    <GameCard
                      name={card.name}
                      id={`${type}-popup-card${index}`}
                      className="rounded-md h-[60vh] w-auto"
                    />
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
          <CardDescription className="text-md">
            {t("hover")}{" "}
            <Link href="/cards" className="underline">
              {ct("here")}
            </Link>
            .
          </CardDescription>
          <div className="flex flex-col w-full gap-1">
            <h4 className="text-xl border-b border-tile text-tile">
              {t("speciality")}:
            </h4>
            {pt({
              text: t(type),
              default: true,
              args: {
                childClassName: `text-${type}`,
                parentClassName: "text-xl w-full",
              },
            })}
          </div>
        </div>
      </TabsContent>
    );
  }
  return (
    <Card className="bg-opacity-95 rounded-lg flex flex-col items-center w-1/2 max-w-xl border-0 max-h-[800px] p-6 h-full">
      <Tabs defaultValue="destruction" className="w-full">
        <TabsList className="w-full justify-evenly">
          <TabsTrigger
            value="destruction"
            className="w-full flex justify-center gap-2 text-lg"
          >
            {cfl(ct("destruction"))}
            <Image
              src="/glyphs/activated-icons/destruction.png"
              alt="Destruction"
              width={20}
              height={20}
            />
          </TabsTrigger>
          <TabsTrigger
            value="arcane"
            className="w-full flex justify-center gap-2 text-lg"
          >
            {cfl(ct("arcane"))}
            <Image
              src="/glyphs/activated-icons/arcane.png"
              alt="Arcane"
              width={20}
              height={20}
            />
          </TabsTrigger>
          <TabsTrigger
            value="chaos"
            className="w-full flex justify-center gap-2 text-lg"
          >
            {cfl(ct("chaos"))}
            <Image
              src="/glyphs/activated-icons/chaos.png"
              alt="Chaos"
              width={20}
              height={20}
            />
          </TabsTrigger>
          <TabsTrigger
            value="order"
            className="w-full flex justify-center gap-2 text-lg"
          >
            {cfl(ct("order"))}
            <Image
              src="/glyphs/activated-icons/order.png"
              alt="Order"
              width={20}
              height={20}
            />
          </TabsTrigger>
        </TabsList>
        <Item
          type="destruction"
          classNameTitle="text-[#f99e53]"
          shadowColor="#ac2430"
        />
        <Item
          type="arcane"
          classNameTitle="text-[#122855]"
          shadowColor="#38b6ff"
        />
        <Item
          type="chaos"
          classNameTitle="text-[#8b57bf]"
          shadowColor="#34014c"
        />
        <Item
          type="order"
          classNameTitle="text-[#793600]"
          shadowColor="#79360066"
        />
      </Tabs>
    </Card>
  );
}

export default MagicTypesPresentation;
