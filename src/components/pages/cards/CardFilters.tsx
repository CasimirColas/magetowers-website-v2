import { Button } from "@/components/ui/button";
import CardManaSelector from "./selectors/CardManaSelector";
import CardSearch from "./selectors/CardSearch";
import CardTypeSelector from "./selectors/CardTypeSelector";
import { RotateCcw } from "lucide-react";
import { CardFilter } from "@/pages/cards";
import { cardCategoryList, manaTypeList } from "@/components/cards/types";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

interface CardFiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<CardFilter>>;
  filters: CardFilter;
  className?: string;
}

function CardFilters({ setFilters, filters, className }: CardFiltersProps) {
  const c = useTranslations("common");
  return (
    <div
      className={cn(
        "flex-none flex p-6 gap-4 md:flex-row flex-col justify-center items-center fixed w-full z-10 bg-slate-200 bg-opacity-90 drop-shadow-md",
        className
      )}
    >
      <div className="flex gap-4 sm:flex-row flex-col w-full md:justify-end sm:justify-center">
        <CardTypeSelector
          className="w-full sm:max-w-56"
          setState={setFilters}
          values={filters.type}
        />
        <CardManaSelector
          className="w-full sm:max-w-56"
          setState={setFilters}
          values={filters.mana}
        />
      </div>
      <div className="flex gap-4 w-full sm:justify-center md:justify-start">
        <CardSearch className="w-2/3 sm:max-w-56" setState={setFilters} />
        <Button
          variant={"sky"}
          className="w-1/3 sm:max-w-56 flex justify-center items-center gap-2"
          onClick={() =>
            setFilters({
              type: cardCategoryList,
              mana: manaTypeList,
              search: null,
            })
          }
        >
          {c("buttons.reset")}
          <RotateCcw size={24} className="p-1" />
        </Button>
      </div>
    </div>
  );
}

export default CardFilters;
