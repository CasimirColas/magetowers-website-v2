import { cardCategory, cardCategoryList } from "@/components/cards/types";
import { MultiCHecks } from "@/components/utility/MultiCheck";
import { CardFilter } from "@/pages/cards";
import { useTranslations } from "next-intl";
import CardSelectOption from "./CardSelectOption";
import { Castle, Wand, Hexagon, Wrench } from "lucide-react";

interface CardTypeSelectorProps {
  className?: string;
  values: cardCategory[];
  setState: React.Dispatch<React.SetStateAction<CardFilter>>;
}

function CardTypeSelector({
  className,
  values,
  setState,
}: CardTypeSelectorProps) {
  const t = useTranslations("common");

  const size = "h-4";
  const typeLabels = {
    block: <Castle size={24} className={size} key={"block"} />,
    spell: <Wand size={24} className={size} key={"spell"} />,
    glyph: <Hexagon size={24} className={size + " rotate-90"} key={"glyph"} />,
    utility: <Wrench size={24} className={size} key={"utility"} />,
  };

  function onChange(value: string) {
    setState((prev) => {
      if (prev.type.includes(value as cardCategory)) {
        return { ...prev, type: prev.type.filter((type) => type !== value) };
      }
      return { ...prev, type: [...prev.type, value as cardCategory] };
    });
  }

  return (
    <MultiCHecks
      className={className}
      trigger={
        values.length > 0 ? (
          <div className="flex gap-1">{values.map((e) => typeLabels[e])} </div>
        ) : (
          t("type_selector.placeholder")
        )
      }
      menuLabel={t("type_selector.label")}
      values={values}
      options={cardCategoryList.map((category) => {
        return {
          key: category,
          label: (
            <CardSelectOption item={category} addon={typeLabels[category]} />
          ),
        };
      })}
      onChange={onChange}
    />
  );
}

export default CardTypeSelector;
