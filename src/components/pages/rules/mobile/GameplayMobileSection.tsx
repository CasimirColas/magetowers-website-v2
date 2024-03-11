import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2 } from "@/components/ui/typography";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { parseText } from "@/utils/functions/parseText";
import { cn } from "@/lib/utils";

interface GameplayMobileSectionProps {
  id: string;
  className: string;
  h2Style: string;
}

function GameplayMobileSection({
  id,
  className,
  h2Style,
}: GameplayMobileSectionProps) {
  const t = useTranslations("rules.gameplay");

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

  const carouselItemStyle =
    "flex justify-start flex-col items-center gap-2 h-72 sm:h-96";
  const carouselTitleStyle = "text-center text-red-950 py-4";
  return (
    <section className={className}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("text")}
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
            <b className={carouselTitleStyle}>{t("pick_cards")}</b>
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
            <b className={carouselTitleStyle}>{t("play_cards")}</b>
            <Image
              src={"/compositions/playCards.png"}
              alt={"play"}
              width={200}
              height={200}
              className="h-0 grow w-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem className={carouselItemStyle}>
            <b className={carouselTitleStyle}>{t("convert_mana")}</b>
            <Image
              src={"/compositions/convertMana.png"}
              alt={"convert"}
              width={200}
              height={200}
              className="h-0 grow w-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem className={carouselItemStyle}>
            <b className={carouselTitleStyle}>{t("place_block")}</b>
            <Image
              src={"/compositions/placeBlock.png"}
              alt={"block"}
              width={200}
              height={200}
              className="h-0 grow w-auto object-contain p-8"
            />
          </CarouselItem>
          <CarouselItem className={carouselItemStyle}>
            <b className={carouselTitleStyle}>{t("end")}</b>
            <Image
              src={"/compositions/drawFromPile.png"}
              alt={"draw"}
              width={200}
              height={200}
              className="h-0 grow w-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem className={carouselItemStyle}>
            <b className={carouselTitleStyle}>{t("count")}</b>
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
  );
}

export default GameplayMobileSection;
