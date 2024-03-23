import { useTranslations } from "next-intl";
import { ThanksCardProps } from "./ThanksCard";
import Link from "next/link";
import {
  ArtStation,
  Instagram,
  Twitter,
} from "@/components/visuals/BrandLogos";
import { Code2, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

function ThxCardsData() {
  const t = useTranslations("credits.helpers");
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
            <Code2 size="20px" className="hover:text-view" />
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
            <Send size="20px" className="hover:text-view" />
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
            <Code2 size="20px" className="hover:text-view" />
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
      //         <ScrollText size="20px" className="hover:text-view" />
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
  return thanks;
}

export default ThxCardsData;
