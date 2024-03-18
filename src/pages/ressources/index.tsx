import DefaultLayout from "@/components/layout/DefaultLayout";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import LinksCard from "@/components/utility/LinksCard";
import Image from "next/image";

export default function Ressources() {
  const c = useTranslations("common");
  return (
    <DefaultLayout
      title={c("routes.ressources")}
      className="relative flex justify-center items-center p-6"
    >
      <Image
        src={"/backgrounds/skyWithTower.png"}
        alt="Background Image"
        layout="fill"
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
      />
      <LinksCard />
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common", "ressources"], locale);
}
