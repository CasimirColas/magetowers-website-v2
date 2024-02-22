import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import {
  BookOpenText,
  GalleryHorizontalEnd,
  Home,
  LinkIcon,
  Menu,
  PencilRuler,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "@/components/layout/navbar/LanguageSelector";
import routes from "@/config/routes";
import { useTranslations } from "next-intl";

interface NavbarMobileProps {
  className?: string;
  pathname: string;
}

const routeIcons: Record<string, JSX.Element> = {
  "": <Home />,
  rules: <PencilRuler />,
  cards: <GalleryHorizontalEnd />,
  credits: <UsersRound />,
  ressources: <LinkIcon />,
};

function NavbarMobile({ className, pathname }: NavbarMobileProps) {
  const t = useTranslations("common.routes");
  const nt = useTranslations("common.navigation");
  return (
    <nav
      className={cn(
        "flex w-full h-16 bg-white justify-between items-center p-4 z-10 border border-b",
        className
      )}
    >
      <span className="flex gap-6 justify-center items-center">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0">
            <SheetHeader className="h-full flex flex-col gap-2 justify-start items-center">
              <SheetTitle className="flex justify-center items-center gap-4 border-b w-full p-4">
                <BookOpenText />
                {nt("menu")}
              </SheetTitle>
              <SheetDescription className="flex flex-col gap-2 items-center justify-center p-4 w-full">
                {routes.map((route, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="default"
                    asChild
                    className="w-fullrounded-none border-0 p-6"
                  >
                    <Link
                      href={`/${route}`}
                      className={clsx("text-xl text-center w-full", {
                        "text-view": pathname === `/${route}`,
                      })}
                    >
                      <span className="flex gap-4 justify-start w-full items-center">
                        {routeIcons[route]}
                        {t(route)}
                      </span>
                    </Link>
                  </Button>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Image
          src={"/images/logo.png"}
          alt="Mage Towers logo"
          width={50}
          height={50}
          className="h-8 w-8 border rounded-full"
        />
      </span>

      <LanguageSelector />
    </nav>
  );
}

export default NavbarMobile;
