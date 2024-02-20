import DefaultLayout from "@/components/layout/DefaultLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getStaticPropsI18n from "@/utils/next-intl/getStaticPropsI18n";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

export default function Ressources() {
  const c = useTranslations("common");
  return (
    <DefaultLayout title={c("routes.ressources")}>
      <div className="h-full w-full bg-skyWithTower bg-cover sm:bg-center bg-right-bottom flex justify-center items-center">
        <Card>
          <CardHeader>
            <CardTitle
              className="text-3xl font-title text-center mt-4 text-tile sm:text-5xl"
              style={{
                textShadow: "-2px 2px 0px #69a0bd, -1px 2px 0px #69a0bd",
              }}
            ></CardTitle>
          </CardHeader>
          <CardContent className="sm:text-xl sm:py-8 sm:px-8"></CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return getStaticPropsI18n(["common"], locale);
}
