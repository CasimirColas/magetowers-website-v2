import { useRouter } from "next/router";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

function Navbar({ className }: { className?: string }) {
  const { pathname } = useRouter();
  const isSm = useMediaQuery("sm");
  return isSm ? (
    <NavbarDesktop pathname={pathname} className={className} />
  ) : (
    <NavbarMobile pathname={pathname} className={className} />
  );
}

export default Navbar;
