import { useTranslations } from "next-intl";
import { capitalizeFirstLetter as cf } from "@/utils/functions/other";

interface CardSelectOptionProps {
  item: string;
  addon?: JSX.Element;
}

function CardSelectOption({ item, addon }: CardSelectOptionProps) {
  const t = useTranslations("common");
  function ml(key: string) {
    return cf(t(`vocabulary.${key}`));
  }

  return (
    <div className="flex justify-between items-center w-full gap-2">
      {ml(item)}
      {addon}
    </div>
  );
}

export default CardSelectOption;
