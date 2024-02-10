import { useRouter } from "next/router";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import useMediaQuery from "@/utils/hooks/useMediaQuery";

function Navbar() {
  const { pathname } = useRouter();
  const isSm = useMediaQuery("sm");
  const className = "sticky top-0";
  return isSm ? (
    <NavbarDesktop pathname={pathname} className={className} />
  ) : (
    <NavbarMobile pathname={pathname} className={className} />
  );
}

export default Navbar;
