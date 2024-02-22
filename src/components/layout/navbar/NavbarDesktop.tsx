import LanguageSelector from "@/components/layout/navbar/LanguageSelector";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import routes from "@/config/routes";
import { useTranslations } from "next-intl";

interface NavbarDesktopProps {
  className?: string;
  pathname: string;
}

function NavbarDesktop({ className, pathname }: NavbarDesktopProps) {
  const t = useTranslations("common.routes");
  return (
    <nav
      className={cn(
        "flex w-full h-20 bg-white gap-3 justify-center items-center z-10 border-b",
        className
      )}
    >
      <Image
        src={"/images/logo.png"}
        alt="Mage Towers logo"
        width={50}
        height={50}
        className="h-10 w-10 border rounded-full"
      />
      {routes.map((route, i) => (
        <Button
          key={i}
          variant="link"
          size="default"
          asChild
          className={clsx("text-xl hover:text-tile", {
            "text-view": pathname === `/${route}`,
          })}
        >
          <Link href={`/${route}`} className="text-lg">
            {t(route)}
          </Link>
        </Button>
      ))}
      <LanguageSelector />
    </nav>
  );
}

export default NavbarDesktop;
