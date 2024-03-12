import GameCard from "@/components/cards/GameCard";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/typography";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { RotateCcw } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LevelUpGameMobileProps {
  h3Style?: string;
}

type LevelUpAction = "spell" | "mana" | "glyph" | "creation_glyph" | "reset";

function LevelUpGameMobile({ h3Style }: LevelUpGameMobileProps) {
  const t = useTranslations("rules.spells.level_up_game");
  const isSm = useMediaQuery("sm");

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
    "w-full flex items-center justify-center sm:justify-between gap-2 sm:w-[calc(50%-0.25rem)] border-red-900 border";
  return (
    <>
      <H3
        className={cn(
          h3Style,
          "sm:border-none border-t border-paperGray pt-4 w-full text-center"
        )}
      >
        {t("title")}
      </H3>
      <p className="text-center text-xs sm:text-base">
        {t("msg" + usedForLevel.length)}
      </p>
      <div className="w-full flex gap-2 justify-between">
        <div className="h-56 sm:h-96 relative">
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
        <div className="flex flex-col items-center justify-start w-[calc(100%-9rem)] sm:w-[calc(100%-14rem)]">
          <Image
            src={`/compositions/countingSheet${
              usedForLevel.filter((action) => action === "mana").length === 0
                ? ""
                : -usedForLevel.filter((action) => action === "mana").length
            }.png`}
            alt="Counting sheet"
            width={250}
            height={250}
            className="w-full"
          />

          <div className="flex flex-row items-center h-full justify-around w-full">
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
                    className="h-full w-auto absolute z-10"
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
                    className="h-20 sm:h-36 w-auto rounded-sm animate-jump-in aspect-card"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:flex-wrap justify-center">
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("spell")}
        >
          {isSm ? t("spell") : null}
          <Image
            src="/cards/ignite.png"
            alt="Destruction spell"
            width={25}
            height={25}
            className="w-full h-auto sm:h-full sm:w-auto"
          />
        </Button>
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("mana")}
        >
          {isSm ? t("mana") : null}
          <Image
            src="/glyphs/stones/destruction.png"
            alt="Mana of destruction"
            width={25}
            height={25}
            className="w-full h-auto sm:h-full sm:w-auto"
          />
        </Button>
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("glyph")}
        >
          {isSm ? t("glyph") : null}
          <Image
            src="/cards/destruction.png"
            alt="Glyph of destruction"
            width={25}
            height={25}
            className="w-full h-auto sm:h-full sm:w-auto"
          />
        </Button>
        <Button
          className={buttonStyle}
          variant={"secondary"}
          onClick={() => handleLevelUp("creation_glyph")}
        >
          {isSm ? t("creation_glyph") : null}
          <Image
            src="/cards/creation.png"
            alt="Glyph of creation"
            width={25}
            height={25}
            className="w-full h-auto sm:h-full sm:w-auto"
          />
        </Button>
        <Button
          className={cn(
            buttonStyle,
            "sm:w-full  text-order bg-red-900 hover:bg-red-900"
          )}
          variant={"secondary"}
          onClick={() => handleLevelUp("reset")}
        >
          {isSm ? t("reset") : null}
          <RotateCcw className="w-full h-auto sm:h-full sm:w-auto sm:p-1" />
        </Button>
      </div>
    </>
  );
}

export default LevelUpGameMobile;
