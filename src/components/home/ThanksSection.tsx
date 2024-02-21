import Link from "next/link";
import ScreenSection from "../layout/ScreenSection";
import ThanksCard, { ThanksCardProps } from "./components/ThanksCard";
import { ArtStation, Instagram, Twitter } from "../visuals/BrandLogos";
import { Code2, Send, ScrollText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useTranslations } from "next-intl";
import { useToast } from "../ui/use-toast";

function FutureSection() {
  const t = useTranslations("home.thanks_section");
  const ct = useTranslations("common.actions");
  const { toast } = useToast();

  const thanks: ThanksCardProps[] = [
    {
      title: "Santiago Hertzan",
      subText: t("santiago"),
      image: "/avatars/santiagoHpp.jpg",
      alt: "Santiago Hertzan",
      description: (
        <div className="flex items-center justify-center gap-2 flex-col h-full">
          <Link
            href={"https://www.artstation.com/santiagohertzan"}
            target="_blank"
          >
            <ArtStation w="25px" />
          </Link>
          <Link
            href={"https://www.instagram.com/santiagohertzan/"}
            target="_blank"
          >
            <Instagram w="25px" />
          </Link>
          <Link
            href={"https://twitter.com/SantiagoHertzan"}
            target="_blank"
            className="mt-1"
          >
            <Twitter w="25px" />
          </Link>
        </div>
      ),
    },
    {
      title: "Cardboardnaut",
      subText: t("cardboardnaut"),
      image: "/avatars/astrobox.png",
      alt: "Cardboardnaut",
      description: (
        <div className="flex items-center justify-around gap-1 flex-col h-full">
          <Link href={"https://www.cardboardnaut.com"} target="_blank">
            <Code2 size="20px" className="hover:text-sky" />
          </Link>
          <Link
            href={"mailto:levithornton@gmail.com"}
            onClick={() => {
              if (navigator.clipboard)
                navigator.clipboard.writeText("levithornton@gmail.com");
              toast({
                description: ct("copied_email"),
              });
            }}
          >
            <Send size="20px" className="hover:text-sky" />
          </Link>
        </div>
      ),
    },
    {
      title: "Trash Cat Music",
      subText: t("trash_cat_music"),
      image: "/avatars/trashCatMusic.png",
      alt: "Trash Cat Music",
      description: (
        <div className="flex items-center justify-around gap-1 flex-col h-full">
          <Link href={"https://www.trashcatmusic.com"} target="_blank">
            <Code2 size="20px" className="hover:text-sky" />
          </Link>
        </div>
      ),
    },
    {
      title: t("community"),
      subText: t("community_text"),
      image: "/avatars/d6.png",
      alt: "The community",
      // description: (
      //   <div className="flex items-center justify-around gap-1 flex-col h-full">
      //     <Sheet>
      //       <SheetTrigger>
      //         <ScrollText size="20px" className="hover:text-sky" />
      //       </SheetTrigger>
      //       <SheetContent side={"bottom"}>
      //         <SheetHeader>
      //           <SheetTitle>Are you absolutely sure?</SheetTitle>
      //           <SheetDescription>
      //             This action cannot be undone. This will permanently delete
      //             your account and remove your data from our servers.
      //           </SheetDescription>
      //         </SheetHeader>
      //       </SheetContent>
      //     </Sheet>
      //   </div>
      // ),
    },
  ];
  return (
    <ScreenSection className="flex flex-col items-center sm:flex-row bg-white gap-8 justify-around bg-lakeBox bg-cover bg-center">
      <span className="hidden sm:block" />
      <div className="flex flex-col gap-4 h-full justify-center">
        <h3
          className="text-3xl font-title text-center text-white sm:text-5xl sm:pb-12 pb-4"
          style={{
            textShadow: "-2px 2px 0px #072755, -1px 2px 0px #072755",
          }}
        >
          {t("title")}
        </h3>
        {thanks.map((thank) => (
          <ThanksCard
            key={thank.title}
            title={thank.title}
            subText={thank.subText}
            image={thank.image}
            alt={thank.alt}
            description={thank.description}
          />
        ))}
      </div>
    </ScreenSection>
  );
}

export default FutureSection;
