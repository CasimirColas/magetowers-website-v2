import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import Image from "next/image";
import { useTranslations } from "next-intl";

const nativeLocaleNames: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

function LanguageSelector() {
  const { locale, locales, pathname, asPath, query, push } = useRouter();
  const t = useTranslations("common.language_selector");
  return (
    <Select
      defaultValue={locale}
      name="language selector"
      onValueChange={(newLocale) => {
        push({ pathname, query }, asPath, { locale: newLocale });
      }}
    >
      <SelectTrigger className="w-[180px]" aria-label="language selector">
        <SelectValue placeholder={t("select_a_language")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("available")}</SelectLabel>
          {locales?.map((locale) => (
            <SelectItem value={locale} key={locale}>
              <div className="flex flex-row gap-2 justify-between w-full">
                <Image
                  src={`/flags/${locale}.svg`}
                  alt={`Flag of ${nativeLocaleNames[locale]}`}
                  width={20}
                  height={20}
                  className="rounded-md"
                />
                <p>{nativeLocaleNames[locale]}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelector;
