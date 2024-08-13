import GameCard from "@/components/cards/GameCard";
import Image from "next/image";
import DetailsDialog from "@/components/utility/DetailsDialog";
import { CardNames } from "@/components/cards/types";
import { useTranslations } from "next-intl";

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-6xl font-bold text-center font-title p-8 text-tile"
    style={{
      textShadow: "0px 3px 4px #0698c5",
    }}
  >
    {children}
  </h2>
);

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
  return (
    <div className="flex flex-col gap-52 items-center py-24">
      <div className="flex justify-around items-center w-full">
        <H2>{t("build")}</H2>
        <div className="flex relative">
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

      <div className="flex justify-around px-24 items-center w-full">
        <div className="flex w-full max-w-4xl min-w-max ml-12">
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
        <H2>{t("collect")}</H2>
      </div>

      <div className="flex justify-around px-24 items-center w-full">
        <div className="flex flex-col justify-center items-center">
          <H2>{t("spells")}</H2>
          <i className="text-view">{t("combos")}</i>
        </div>

        <div className="flex w-full max-w-6xl mr-12 justify-end">
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

      <div className="flex justify-around px-24 items-center flex-col w-full">
        <H2>{t("win")}</H2>
        <Image
          src="/illustrations/necroFire.png"
          width={400}
          height={400}
          alt="Tower building"
        />
      </div>
    </div>
  );
}

export default GameplayHook;
