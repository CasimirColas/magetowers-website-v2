import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import { manaType } from "@/components/cards/types";
import GameCard from "@/components/cards/GameCard";
import { cardsDictionary as d } from "@/components/cards/dictionary";
import { parseText as pt } from "@/utils/functions/parseText";
import { cn } from "@/lib/utils";
import { CSSProperties, useState } from "react";
import DetailsDialog from "@/components/utility/DetailsDialog";

function ManaTypesCards() {
  const t = useTranslations("home.manatypes_carousel");
  const ct = useTranslations("common.vocabulary");
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      <Item
        title={cfl(ct("arcane"))}
        description={t("arcane")}
        type="arcane"
        classNameTitle="text-[#122855]"
        shadowColor="#38b6ff"
        classNameText="bg-tile"
        highlight="text-arcane"
      />
      <Item
        title={cfl(ct("destruction"))}
        description={t("destruction")}
        type="destruction"
        classNameTitle="text-[#f99e53]"
        shadowColor="#ac2430"
        classNameText="bg-black"
        highlight="text-destruction"
      />
      <Item
        title={cfl(ct("chaos"))}
        description={t("chaos")}
        type="chaos"
        classNameTitle="text-[#8b57bf]"
        shadowColor="#34014c"
        classNameText="bg-chaos"
        highlight="text-[#34014c]"
      />
      <Item
        title={cfl(ct("order"))}
        description={t("order")}
        type="order"
        classNameTitle="text-[#793600]"
        shadowColor="#79360066"
        classNameText="bg-order"
        highlight="text-[#793600]"
        popupTextClassName="text-[#793600]"
      />
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
}: {
  title: string;
  description: string;
  type: manaType;
  shadowColor?: string;
  highlight?: string;
  classNameTitle?: string;
  classNameText?: string;
  popupTextClassName?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cards = Object.values(d).filter(
    (card) => card.category === "spell" && card.manaType === type
  );

  const containerStyle: CSSProperties = {
    backgroundColor: "transparent",
    width: "calc(50% - 2rem)",
    maxWidth: "36rem",
    height: "500px",
    perspective: "2000px",
    cursor: "pointer",
  };

  const innerStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    transform: isFlipped ? "rotateY(180deg)" : "none",
  };

  const frontBackStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  };

  const frontStyle: CSSProperties = {
    color: "black",
  };

  const backStyle: CSSProperties = {
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      // onClick={() => setIsFlipped(!isFlipped)}
    >
      <div style={innerStyle}>
        <div style={{ ...frontBackStyle, ...frontStyle }}>
          <Card
            className="h-full w-full"
            style={{
              backgroundImage: `url(/backgrounds/theme/${type}-inc.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent className="flex items-center justify-between p-6 flex-col h-full gap-52 px-4 pb-0">
              <h3
                className={cn(`font-title text-5xl text-white`, classNameTitle)}
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
                      "text-center text-white text-xl p-2 rounded-md bg-opacity-80",
                      classNameText
                    ),
                    childClassName: highlight,
                  },
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        <div style={{ ...frontBackStyle, ...backStyle }}>
          <Card
            className="w-full h-full flex justify-around items-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/backgrounds/theme/${type}-inc.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {cards.map((card, index) => (
              <DetailsDialog
                key={index}
                triggerClassName="w-[40%]"
                trigger={
                  <div
                    className="w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                    style={{
                      boxShadow: "4px 4px 15px 3px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <GameCard
                      name={card.name}
                      id={card.name + "-map"}
                      className="w-full rounded"
                    />
                  </div>
                }
              >
                <GameCard
                  name={card.name}
                  id={index + "-map-detail"}
                  className="w-auto h-[80vh] rounded-xl"
                />
              </DetailsDialog>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ManaTypesCards;
