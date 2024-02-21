import { manaType, manaTypeList } from "@/components/cards/types";
import { MultiCHecks } from "@/components/utility/MultiCheck";
import { CardFilter } from "@/pages/cards";

interface CardManaSelectorProps {
  className?: string;
  values: manaType[];
  setState: React.Dispatch<React.SetStateAction<CardFilter>>;
}

function CardManaSelector({
  className,
  values,
  setState,
}: CardManaSelectorProps) {
  function onChange(value: string) {
    setState((prev) => {
      if (prev.mana.includes(value as manaType)) {
        return { ...prev, mana: prev.mana.filter((mana) => mana !== value) };
      }
      return { ...prev, mana: [...prev.mana, value as manaType] };
    });
  }
  return (
    <MultiCHecks
      className={className}
      trigger={"Select a mana type"}
      menuLabel="Card Mana Types"
      values={values}
      options={manaTypeList.map((mana) => {
        return { key: mana, label: mana };
      })}
      onChange={onChange}
    />
  );
}

export default CardManaSelector;
