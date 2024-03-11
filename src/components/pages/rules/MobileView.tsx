import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";
import SectionSelector from "./SectionSelector";
import { RulesSection, sections } from "./sections";
import useIntersectionObserver from "@/utils/hooks/useIntersectionObserver";
import { Blockquote, H1, H2, H3 } from "@/components/ui/typography";
import { parseText } from "@/utils/functions/parseText";
import Image from "next/image";
import GameCard from "@/components/cards/GameCard";
import DetailsDialog from "@/components/utility/DetailsDialog";
import { CardNames } from "@/components/cards/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import { capitalizeFirstLetter as cfl } from "@/utils/functions/other";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MobileView() {
  const [currentSection, setCurrentSection] = useState<RulesSection>(
    sections[0]
  );
  const t = useTranslations("rules");
  const ct = useTranslations("common.vocabulary");
  useIntersectionObserver([...sections], 0.5, (id: string) =>
    setCurrentSection(id as RulesSection)
  );

  const isSm = useMediaQuery("sm");

  function pr(
    translationKey: string,
    parentClassName?: string,
    childClassName?: string
  ) {
    return parseText({
      text: t(translationKey),
      args: {
        parentClassName: cn("w-full", parentClassName),
        childClassName: cn("text-red-950", childClassName),
      },
      default: true,
    });
  }

  function handleSectionChange(value: RulesSection) {
    setCurrentSection(value);
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function GameCardPopup({ name }: { name: CardNames }) {
    return (
      <DetailsDialog
        triggerClassName="w-10/12 flex justify-center"
        trigger={
          <GameCard
            name={name}
            id={name + "-cards-section-trigger"}
            className="w-full h-auto rounded-md"
          />
        }
      >
        <GameCard
          name={name}
          id={name + "-cards-section-detail"}
          className="w-auto h-[80vh] rounded-md"
        />
      </DetailsDialog>
    );
  }

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const sectionStyle = "w-full pb-8 flex flex-col items-center gap-4";
  const h2Style = "border-red-950 text-red-950 w-full";
  const h3Style = "text-red-950";
  const cardsBlockStyle =
    "w-full flex flex-col items-center justify-start gap-4 sm:border-none border-b border-paperGray pb-2 sm:pb-0 last:border-none";
  const linkStyle =
    "underline text-red-950 hover:text-red-950 hover:no-underline hover:font-semibold";
  const carouselItemStyle =
    "flex justify-start flex-col items-center gap-2 h-72 sm:h-96";
  const carouselTitleStyle = "text-center text-red-950 py-4";

  return (
    <div className="w-full h-full bg-book overflow-auto bg-center bg-contain sm:bg-cover flex flex-col gap-4 items-center px-6 scroll-smooth">
      <div className="absolute z-10 w-full p-4 bg-red-900 bg-opacity-90 drop-shadow-md">
        <SectionSelector
          className="w-full"
          value={currentSection}
          onChange={handleSectionChange}
        />
      </div>
      <div className="flex flex-col items-center w-[85%] sm:w-[80%] mt-20 bg-paper rounded-sm shadow-sm px-4">
        <H1 className="font-title py-12 text-red-950 sm:text-5xl">
          {t("title")}
        </H1>
        <section id={sections[0]} className={sectionStyle}>
          <H2 className={h2Style}>{t("history.title")}</H2>
          <Blockquote className="border-red-950 pl-4">
            {t("history.lore")}
          </Blockquote>
          {pr("history.goal")}
          <Image
            src="/illustrations/necroFire.png"
            className="max-h-72 w-auto"
            alt="Lore"
            width={400}
            height={300}
          />
        </section>
        <section id={sections[1]} className={sectionStyle}>
          <H2 className={h2Style}>{t("cards.title")}</H2>
          {pr("cards.text")}
          <div className="flex flex-col items-center w-full gap-4 sm:grid grid-cols-2 grid-rows-2 sm:items-start">
            <div className={cardsBlockStyle}>
              <H3 className={h3Style}>{t("cards.blocks_title")}</H3>
              <GameCardPopup name="catalyst" />
              {pr("cards.blocks", "px-4 ")}
            </div>
            <div className={cardsBlockStyle}>
              <H3 className={h3Style}>{t("cards.glyphs_title")}</H3>
              <GameCardPopup name="creation" />
              <Link href="#mana" className={linkStyle}>
                {t("cards.learn_mana")}
              </Link>
              {pr("cards.glyphs", "px-4")}
            </div>
            <div className={cardsBlockStyle}>
              <H3 className={h3Style}>{t("cards.spells_title")}</H3>
              <GameCardPopup name="ignite" />
              <Link href="#spells" className={linkStyle}>
                {t("cards.learn_spells")}
              </Link>
              {pr("cards.spells", "px-4 ")}
            </div>
            <div className={cardsBlockStyle}>
              <H3 className={h3Style}>{t("cards.utilities_title")}</H3>
              <GameCardPopup name="renovation" />
              {pr("cards.utilities", "px-4 ")}
            </div>
          </div>
          <Button asChild variant={"outline"} className="mt-2 w-full">
            <Link href="/cards" className="flex justify-between items-center">
              {isSm ? t("cards.look_cards_long") : t("cards.look_cards")}
              <Eye className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </section>
        <section id={sections[2]} className={sectionStyle}>
          <H2 className={h2Style}>{t("setup.title")}</H2>
          {pr("setup.intro")}
          <Image
            src="/compositions/countingSheetEmpty.png"
            alt="counting sheet"
            width={400}
            height={300}
          />
          <Link href="#composition" className={linkStyle}>
            {t("setup.look_deck")}
          </Link>
          {pr("setup.setup")}
          <div className="flex flex-col gap-2 items-center w-full">
            <b>{cfl(ct("street"))}</b>
            <div className="flex w-full items-center gap-2">
              <Image
                src="/compositions/board.png"
                alt="board"
                className="grow w-0 h-auto"
                width={400}
                height={300}
              />
              <b className="pl-2 border-l-2 border-red-950 h-full flex items-center w-min">
                {cfl(ct("bench"))}
              </b>
            </div>
            <b>{cfl(ct("market"))}</b>
          </div>
          {pr("setup.distribution")}
          <div className="flex items-center gap-2 w-full">
            <div className="flex flex-col items-center h-full justify-between grow">
              <Image
                src="/compositions/openhand.png"
                alt={`${ct("player")} 1`}
                width={200}
                height={200}
                className="w-auto h-auto"
              />
              <p>{`${ct("player")} 1 - (5)`}</p>
            </div>
            <div className="flex flex-col items-center h-full justify-between grow">
              <Image
                src="/compositions/closehand.png"
                alt={`${ct("player")} 2`}
                width={200}
                height={200}
                className="w-auto h-auto"
              />
              <p>{`${ct("player")} 2 - (6)`}</p>
              <p></p>
            </div>
          </div>
        </section>
        <section id={sections[3]} className={sectionStyle}>
          <H2 className={h2Style}>{t("gameplay.title")}</H2>
          {pr("gameplay.text")}
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            setApi={setApi}
            className="w-2/3 h-full scroll-smooth"
          >
            <CarouselContent>
              <CarouselItem className={carouselItemStyle}>
                <b className={carouselTitleStyle}>{t("gameplay.pick_cards")}</b>
                <div className="flex flex-col h-full rotate-[-45deg] w-9/12">
                  <Image
                    src={"/compositions/pickFromMarket.png"}
                    alt={"picking"}
                    width={200}
                    height={200}
                    className="h-1/2 rotate-180 w-auto object-contain"
                  />

                  <Image
                    src={"/compositions/pickFromStreet.png"}
                    alt={"picking"}
                    width={200}
                    height={200}
                    className="h-1/2 w-auto object-contain"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className={carouselItemStyle}>
                <b className={carouselTitleStyle}>{t("gameplay.play_cards")}</b>
                <Image
                  src={"/compositions/playCards.png"}
                  alt={"play"}
                  width={200}
                  height={200}
                  className="h-0 grow w-auto object-contain"
                />
              </CarouselItem>
              <CarouselItem className={carouselItemStyle}>
                <b className={carouselTitleStyle}>
                  {t("gameplay.convert_mana")}
                </b>
                <Image
                  src={"/compositions/convertMana.png"}
                  alt={"convert"}
                  width={200}
                  height={200}
                  className="h-0 grow w-auto object-contain"
                />
              </CarouselItem>
              <CarouselItem className={carouselItemStyle}>
                <b className={carouselTitleStyle}>
                  {t("gameplay.place_block")}
                </b>
                <Image
                  src={"/compositions/placeBlock.png"}
                  alt={"block"}
                  width={200}
                  height={200}
                  className="h-0 grow w-auto object-contain p-8"
                />
              </CarouselItem>
              <CarouselItem className={carouselItemStyle}>
                <b className={carouselTitleStyle}>{t("gameplay.end")}</b>
                <Image
                  src={"/compositions/drawFromPile.png"}
                  alt={"draw"}
                  width={200}
                  height={200}
                  className="h-0 grow w-auto object-contain"
                />
              </CarouselItem>
              <CarouselItem className={carouselItemStyle}>
                <b className={carouselTitleStyle}>{t("gameplay.count")}</b>
                <Image
                  src={"/compositions/counting.png"}
                  alt={"counting"}
                  width={200}
                  height={200}
                  className="h-0 grow w-auto object-contain"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            {current} / {count}
          </div>
        </section>
        <section id={sections[4]} className={sectionStyle}>
          <H2 className={h2Style}>{t("mana.title")}</H2>
        </section>
        <section id={sections[5]} className={sectionStyle}>
          <H2 className={h2Style}>{t("spells.title")}</H2>
        </section>
        <section id={sections[6]} className={sectionStyle}>
          <H2 className={h2Style}>{t("incantations.title")}</H2>
        </section>
        <section id={sections[7]} className={sectionStyle}>
          <H2 className={h2Style}>{t("composition.title")}</H2>
        </section>
        <section id={sections[8]} className={sectionStyle}>
          <H2 className={h2Style}>{t("faq.title")}</H2>
        </section>
      </div>
    </div>
  );
}

export default MobileView;
