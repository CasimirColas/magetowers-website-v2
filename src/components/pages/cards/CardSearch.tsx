import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CardFilter } from "@/pages/cards";

interface CardSearchProps {
  className?: string;
  setState: React.Dispatch<React.SetStateAction<CardFilter>>;
}

function CardSearch({ className, setState }: CardSearchProps) {
  return (
    <Input
      placeholder="Search for a card"
      className={cn("", className)}
      onChange={(e) =>
        setState((prev) => ({ ...prev, search: e.target.value }))
      }
    />
  );
}

export default CardSearch;
