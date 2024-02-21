import { cardCategory, cardCategoryList } from "@/components/cards/types";
import { MultiCHecks } from "@/components/utility/MultiCheck";
import { CardFilter } from "@/pages/cards";

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
      trigger={"Select a card type"}
      menuLabel="Card Types"
      values={values}
      options={cardCategoryList.map((category) => {
        return { key: category, label: category };
      })}
      onChange={onChange}
    />
  );
}

export default CardTypeSelector;
