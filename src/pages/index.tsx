import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { Toaster } from "@/components/ui/toaster";
import MobileView from "@/components/pages/home/mobile/MobileView";
import DesktopView from "@/components/pages/home/desktop/DesktopView";
import { RenderView } from "@/components/utility/RenderView";

export default function Home() {
  return (
    <DefaultLayout className="snap-y snap-mandatory overflow-scroll sm:overflow-visible">
      {RenderView({
        breakpoint: "lg",
        desktop: <DesktopView />,
        mobile: <MobileView />,
      })}
      <Toaster />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common", "cards"], locale);
}
