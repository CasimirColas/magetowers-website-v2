import { H3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import GameCard from "@/components/cards/GameCard";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

type LevelUpAction = "spell" | "mana" | "glyph" | "creation_glyph" | "reset";

function LevelUpGameDesktop() {
  const t = useTranslations("rules.spells.level_up_game");
  const [usedForLevel, setUsedForLevel] = useState<LevelUpAction[]>([]);

  function handleLevelUp(action: LevelUpAction) {
    if (action === "reset") {
      setUsedForLevel([]);
      return;
    }
    if (usedForLevel.length > 1) return;
    setUsedForLevel([...usedForLevel, action]);
  }

  const framePositions = ["38%", "55.5%", "73%"];
  const buttonStyle =
    "w-full flex items-center justify-between gap-2 border-sky-900 border p-1";
  return (
    <>
      <H3>{t("title")}</H3>
      <b
        className={`text-center text-lg ${
          usedForLevel.length === 2 ? "text-sky-900" : "text-sky-500"
        }`}
      >
        {t("msg" + usedForLevel.length)}
      </b>
      <div className="w-full flex gap-2 justify-center">
        <div className="h-96 relative">
          <div
            className="absolute z-10 w-full transition-all duration-1000"
            style={{ top: framePositions[usedForLevel.length] }}
          >
            <Image
              src="/compositions/frame.png"
              alt="frame"
              width={100}
              height={50}
              className="w-full h-auto absolute top-0 left-0 p-2"
            />
            <Image
              src="/compositions/cog.png"
              alt="cog"
              width={25}
              height={25}
              className="transition-transform duration-1000 absolute top-0 left-0 w-[10%] h-auto"
              style={{ transform: `rotate(${usedForLevel.length * 360}deg)` }}
            />
          </div>
          <GameCard
            name="sacrifice"
            id="sacrifice-levelup-game"
            className="h-full w-auto rounded-md"
          />
        </div>
        <div className="flex flex-col items-center justify-start">
          <Image
            src={`/compositions/countingSheet${
              usedForLevel.filter((action) => action === "mana").length === 0
                ? ""
                : -usedForLevel.filter((action) => action === "mana").length
            }.png`}
            alt="Counting sheet"
            width={250}
            height={250}
            className="w-9/12 max-w-96"
          />

          <div className="flex items-center h-full justify-center w-full gap-4">
            {usedForLevel.map((action, i) => {
              if (action === "mana") return null;
              if (action === "reset") return null;
              return (
                <div key={i} className="relative">
                  <Image
                    src="/compositions/x.png"
                    alt="cross"
                    width={100}
                    height={100}
                    className="h-full w-auto absolute z-10 rounded-sm"
                  />
                  <Image
                    src={
                      {
                        spell: "/cards/ignite.png",
                        glyph: "/cards/destruction.png",
                        creation_glyph: "/cards/creation.png",
                      }[action]
                    }
                    alt="crossed out card"
                    width={100}
                    height={100}
                    className="h-36 w-auto animate-jump-in aspect-card rounded-sm"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-3 gap-2">
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("spell")}
        >
          {t("spell")}
          <Image
            src="/cards/ignite.png"
            alt="Destruction spell"
            width={25}
            height={25}
            className="h-full w-auto object-contain"
          />
        </Button>
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("mana")}
        >
          {t("mana")}
          <Image
            src="/glyphs/stones/destruction.png"
            alt="Mana of destruction"
            width={50}
            height={50}
            className="h-full w-auto object-contain"
          />
        </Button>
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("glyph")}
        >
          {t("glyph")}
          <Image
            src="/cards/destruction.png"
            alt="Glyph of destruction"
            width={25}
            height={25}
            className="h-full w-auto object-contain"
          />
        </Button>
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("creation_glyph")}
        >
          {t("creation_glyph")}
          <Image
            src="/cards/creation.png"
            alt="Glyph of creation"
            width={25}
            height={25}
            className="h-full w-auto object-contain"
          />
        </Button>
        <Button
          className={cn(
            buttonStyle,
            "w-full text-white bg-sky-900 hover:bg-sky-900 col-span-2 p-2"
          )}
          variant={"secondary"}
          onClick={() => handleLevelUp("reset")}
        >
          {t("reset")}
          <RotateCcw className="h-full w-auto p-1" />
        </Button>
      </div>
    </>
  );
}

export default LevelUpGameDesktop;
