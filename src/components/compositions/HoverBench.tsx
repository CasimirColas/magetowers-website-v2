import { cn } from "@/lib/utils";
import followCursor from "@/utils/functions/followCursor";
import Image from "next/image";
import { useEffect, useState } from "react";

type Cursors =
  | "/compositions/pickStreet.png"
  | "/compositions/pickMarket.png"
  | "/images/void.png";

interface HoverBenchProps {
  className?: string;
}

function HoverBench({ className }: HoverBenchProps) {
  const [cursorImage, setCursorImage] = useState<Cursors>("/images/void.png");
  useEffect(() => {
    return followCursor("cursor-image", -50, -50);
  }, []);
  return (
    <div
      className={cn(
        "group flex flex-col w-full hover:cursor-none items-center justify-center",
        className
      )}
    >
      <Image
        id="cursor-image"
        width={500}
        height={500}
        src={cursorImage}
        alt="pick street"
        className="fixed h-[100px] w-[100px] object-contain z-50 pointer-events-none group-hover:opacity-100 opacity-0"
      />
      <Image
        src="/compositions/street.png"
        quality={100}
        width={800}
        height={400}
        alt="street"
        className="w-full"
        onMouseEnter={() => setCursorImage("/compositions/pickStreet.png")}
      />
      <Image
        src="/compositions/market.png"
        quality={100}
        width={800}
        height={400}
        alt="market"
        className="w-full"
        onMouseEnter={() => setCursorImage("/compositions/pickMarket.png")}
      />
    </div>
  );
}

function HoverCompleteBench() {
  return (
    <div className="w-1/2 max-w-lg gap-8 flex flex-col justify-center items-center pb-8">
      <Image
        src="/compositions/closehand.png"
        alt="opponent's hand"
        className="rotate-180"
        width={300}
        height={300}
        quality={100}
      />
      <HoverBench className="gap-4" />
      <Image
        src="/compositions/openhand.png"
        alt="your hand of cards"
        width={300}
        height={300}
        quality={100}
      />
    </div>
  );
}

export default HoverBench;
