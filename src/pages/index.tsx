import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t = useTranslations("home");
  const c = useTranslations("comon");

  return (
    <main className=" flex gap-4">
      <p>{t("hello")}</p>
      <Link href="/" locale="en">
        en
      </Link>
      <Link href="/" locale="fr">
        fr
      </Link>
      <Link href="/" locale="es">
        es
      </Link>
      <p>{c("water")}</p>
    </main>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["home", "comon"], locale);
}
