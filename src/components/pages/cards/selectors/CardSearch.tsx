import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CardFilter } from "@/pages/cards";
import { useTranslations } from "next-intl";

interface CardSearchProps {
  className?: string;
  setState: React.Dispatch<React.SetStateAction<CardFilter>>;
}

function CardSearch({ className, setState }: CardSearchProps) {
  const t = useTranslations("common");
  return (
    <Input
      placeholder={t("search.card_placeholder")}
      className={cn("", className)}
      onChange={(e) =>
        setState((prev) => ({ ...prev, search: e.target.value }))
      }
    />
  );
}

export default CardSearch;
