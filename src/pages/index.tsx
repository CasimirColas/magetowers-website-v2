import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import MobileView from "@/components/pages/home/MobileView";
import DesktopView2 from "@/components/pages/home/DesktopView2";
import { RenderView } from "@/components/utility/RenderView";
import NewsletterSignUp from "@/components/utility/NewsletterSignup";

export default function Home() {
  return (
    <DefaultLayout className="overflow-hidden">
      {RenderView({
        breakpoint: "lg",
        desktop: <DesktopView2 />,
        mobile: <MobileView />,
      })}
      <NewsletterSignUp />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "common", "cards"], locale);
}
