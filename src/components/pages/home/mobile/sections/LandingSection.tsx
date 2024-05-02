import { useTranslations } from "next-intl";
import LinksRow from "../../../../utility/LinksRow";
import Link from "next/link";
import { urls } from "@/config/urls";

function LandingSection() {
  const t = useTranslations("home.landing_section");
  return (
    <section className="relative w-full flex items-center flex-col h-full justify-end min-h-[100%]">
      <h1
        className="font-title font-extrabold text-white text-center text-6xl md:text-8xl absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
        style={{
          textShadow:
            "-4px 3px 0px #69a0bd, -1px 3px 0px #69a0bd,0px 0px 2px #072755",
        }}
      >
        {t("title")}
      </h1>

      <div className="flex flex-col justify-center items-center gap-4 mb-2">
        <Link
          className="p-4 rounded-full bg-green-400 text-xl font-bold text-green-800 shadow-lg mb-2 text-center"
          href={urls.kickstarterURL}
        >
          {t("available_now")}
        </Link>
        <LinksRow />
      </div>
    </section>
  );
}

export default LandingSection;
