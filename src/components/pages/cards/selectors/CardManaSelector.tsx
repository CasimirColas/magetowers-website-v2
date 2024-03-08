import { manaType, manaTypeList } from "@/components/cards/types";
import { MultiCHecks } from "@/components/utility/MultiCheck";
import { CardFilter } from "@/pages/cards";
import { useTranslations } from "next-intl";
import CardSelectOption from "./CardSelectOption";
import Image from "next/image";
import { Hexagon } from "lucide-react";

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
  const t = useTranslations("common");

  function onChange(value: string) {
    setState((prev) => {
      if (prev.mana.includes(value as manaType)) {
        return { ...prev, mana: prev.mana.filter((mana) => mana !== value) };
      }
      return { ...prev, mana: [...prev.mana, value as manaType] };
    });
  }

  const options = manaTypeList.map((mana) => {
    return {
      key: mana,
      label: (
        <CardSelectOption
          item={mana}
          addon={
            mana === "none" ? (
              <Hexagon size={20} className="rotate-90  h-6 w-6 p-[0.1rem]" />
            ) : (
              <Image
                src={`/glyphs/activated-icons/${mana}.png`}
                alt="test"
                width={100}
                height={100}
                className="h-6 w-6"
              />
            )
          }
        />
      ),
    };
  });

  return (
    <MultiCHecks
      className={className}
      trigger={
        values.length > 0 ? (
          <div className="flex gap-1 items-center">
            {values.map((e, i) => {
              if (e === "none")
                return (
                  <Hexagon
                    key={i}
                    size={20}
                    className="rotate-90  h-6 w-6 p-[0.1rem]"
                  />
                );
              return (
                <Image
                  key={i}
                  src={`/glyphs/activated-icons/${e}.png`}
                  alt="test"
                  width={100}
                  height={100}
                  className="h-6 w-6"
                />
              );
            })}
          </div>
        ) : (
          t("mana_selector.placeholder")
        )
      }
      menuLabel={t("mana_selector.label")}
      values={values}
      options={options}
      onChange={onChange}
    />
  );
}

export default CardManaSelector;
