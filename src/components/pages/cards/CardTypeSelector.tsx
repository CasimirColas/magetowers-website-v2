import { CardNames, cardCategoryList } from "@/components/cards/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface CardTypeSelectorProps {
  className?: string;
  setState: React.Dispatch<React.SetStateAction<CardNames[]>>;
}

function CardTypeSelector({ className }: CardTypeSelectorProps) {
  return (
    <Select>
      <SelectTrigger className={cn("", className)}>
        <SelectValue placeholder="Select a card type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Card Types</SelectLabel>
          <SelectItem value={"all"}>All</SelectItem>
          {cardCategoryList.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CardTypeSelector;
