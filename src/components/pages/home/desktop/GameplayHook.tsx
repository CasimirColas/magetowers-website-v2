import GameCard from "@/components/cards/GameCard";
import Image from "next/image";
import DetailsDialog from "@/components/utility/DetailsDialog";
import { CardNames } from "@/components/cards/types";
import { useTranslations } from "next-intl";
import ManaTypesCards from "./ManaTypesCards";
import HH2 from "@/components/pages/home/HookH2";
import { useRef } from "react";
import { useIsVisible } from "@/utils/hooks/useIsVisible";
const CardDetails = ({
  name,
  className,
  id,
}: {
  name: CardNames;
  className: string;
  id: string;
}) => (
  <DetailsDialog
    triggerClassName={className}
    trigger={
      <div
        className="w-full hover:scale-105 transition-transform duration-300 ease-in-out rounded-md"
        style={{
          boxShadow: "4px 4px 15px 3px rgba(0, 0, 0, 0.3)",
        }}
      >
        <GameCard name={name} id={id + "-card"} className="w-full rounded" />
      </div>
    }
  >
    <GameCard
      name={name}
      id={id + "-card-detail"}
      className="w-auto h-[80vh] rounded-xl"
    />
  </DetailsDialog>
);

function GameplayHook() {
  const t = useTranslations("home.hook_section");
  //Tower
  const towerRef = useRef(null);
  const towerIsVisible = useIsVisible(towerRef);
  //Mana
  const manaRef = useRef(null);
  const manaIsVisible = useIsVisible(manaRef);
  //Spells
  const spellsRef = useRef(null);
  const spellsIsVisible = useIsVisible(spellsRef);
  //Annimation
  function annimateEntry(
    className: string,
    visible: boolean,
    side: "left" | "right"
  ) {
    return visible
      ? className +
          ` animate-fade-${side} animate-once animate-delay-400 animate-duration-[1500ms]`
      : className + " opacity-0";
  }
  return (
    <div className="flex flex-col gap-52 items-center pt-24">
      <div className="flex justify-around items-center w-full">
        <div
          className={annimateEntry(
            "flex flex-col items-center",
            towerIsVisible,
            "right"
          )}
        >
          <HH2>{t("build")}</HH2>
          <Image
            className="scale-x-[-1]"
            src={"/illustrations/pink-wiz.png"}
            alt="pink wizard"
            width={300}
            height={300}
            quality={100}
          />
        </div>
        <div
          className={annimateEntry("flex relative", towerIsVisible, "left")}
          ref={towerRef}
        >
          <Image
            src="/illustrations/tower.png"
            width={200}
            height={200}
            alt="Tower building"
            className="mr-[300px]"
          />
          <div
            className="flex gap-2"
            style={{
              position: "absolute",
              width: "600px",
              transform: "rotate(90deg)",
              transformOrigin: "top left",
              top: "5%",
              height: "200px",
              left: "95%",
            }}
          >
            <CardDetails
              id="hook-observatory"
              name="observatory"
              className="w-full h-auto rounded-md"
            />
            <CardDetails
              id="hook-catalyst1"
              name="catalyst"
              className="w-full h-auto rounded-md"
            />
            <CardDetails
              id="hook-generator"
              name="generator"
              className="w-full h-auto rounded-md"
            />
            <CardDetails
              id="hook-catalyst0"
              name="catalyst"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
      <span className="w-[20vw] border border-tile" />
      <div className="flex justify-around px-24 items-center w-full">
        <div
          className={annimateEntry(
            "flex w-full max-w-4xl min-w-max ml-12",
            manaIsVisible,
            "right"
          )}
          ref={manaRef}
        >
          <CardDetails
            name="arcane"
            id="arcane-hook"
            className="h-auto w-1/5 rotate-[-20deg] relative top-[40px] mx-[-50px] rounded-md"
          />
          <CardDetails
            name="destruction"
            id="destruction-hook"
            className="h-auto w-1/5 rotate-[-10deg] mx-[-20px] rounded-md"
          />
          <CardDetails
            name="creation"
            id="creation-hook"
            className="h-auto w-1/5 rotate-[0deg] z-20 relative bottom-[20px] mx-[-8px] rounded-md"
          />
          <CardDetails
            name="chaos"
            id="chaos-hook"
            className="h-auto w-1/5 rotate-[10deg] mx-[-20px] rounded-md z-10"
          />
          <CardDetails
            name="order"
            id="order-hook"
            className="h-auto w-1/5 rotate-[20deg] relative top-[40px] mx-[-50px] rounded-md"
          />
        </div>
        <HH2 className={annimateEntry("", manaIsVisible, "left")}>
          {t("collect")}
        </HH2>
      </div>
      <span className="w-[20vw] border border-tile" />
      <div
        className={annimateEntry(
          "flex justify-around px-24 items-center w-full",
          spellsIsVisible,
          "right"
        )}
      >
        <div className="flex flex-col justify-center items-center">
          <HH2 className="w-[90%]">{t("spells")}</HH2>
          <i className="text-view">{t("combos")}</i>
        </div>

        <div
          className={annimateEntry(
            "flex w-full max-w-6xl mr-12 justify-end",
            spellsIsVisible,
            "left"
          )}
          ref={spellsRef}
        >
          <CardDetails
            name="benevolence"
            id="benevolence-hook"
            className="h-auto w-1/4 rotate-[-20deg] relative top-[40px] mx-[-40px] rounded-md shadow-lg"
          />
          <CardDetails
            name="sacrifice"
            id="sacrifice-hook"
            className="h-auto w-1/4 rotate-[-10deg] mx-[-20px] rounded-md shadow-lg"
          />
          <CardDetails
            name="apotheosis"
            id="apotheosis-hook"
            className="h-auto w-1/4 rotate-[0deg] relative bottom-[20px] mx-[-8px] rounded-md shadow-lg"
          />
          <CardDetails
            name="mindControl"
            id="mindControl-hook"
            className="h-auto w-1/4 rotate-[10deg] mx-[-20px] rounded-md shadow-lg"
          />
          <CardDetails
            name="clearsight"
            id="clearsight-hook"
            className="h-auto w-1/4 rotate-[20deg] relative top-[40px] mx-[-40px] rounded-md shadow-lg"
          />
        </div>
      </div>
      <span className="w-[20vw] border border-tile" />
      <div className="flex justify-around px-24 items-center flex-col w-full">
        <HH2 className="pb-24">{t("win")}</HH2>
        <ManaTypesCards />
      </div>
    </div>
  );
}

export default GameplayHook;
