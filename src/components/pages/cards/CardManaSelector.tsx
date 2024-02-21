import { CardNames, manaTypeList } from "@/components/cards/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SelectGroup } from "@radix-ui/react-select";
import Image from "next/image";

interface CardManaSelectorProps {
  className?: string;
  setState: React.Dispatch<React.SetStateAction<CardNames[]>>;
}

function CardManaSelector({ className }: CardManaSelectorProps) {
  return (
    <Select>
      <SelectTrigger className={cn("", className)}>
        <SelectValue placeholder="Select a mana type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Card Mana</SelectLabel>
          {manaTypeList.map((mana) => (
            <SelectItem key={mana} value={mana}>
              <div className="flex flex-row gap-2 justify-between w-full items-center">
                <Image
                  src={`/activated-glyphs/${mana}.png`}
                  alt={`Mana sigil`}
                  width={70}
                  height={70}
                  className="h-8 w-8"
                />
                <p>{mana}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default CardManaSelector;
