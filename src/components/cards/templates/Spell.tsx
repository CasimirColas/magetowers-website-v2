import { cn } from "@/lib/utils";
import { CardNames } from "../types";
import { cardsDictionary as d } from "../dictionary";

interface SpellProps {
  name: CardNames;
  className?: string;
}

function Spell({ name, className }: SpellProps) {
  const card = d[name];
  return <div className={cn("", className)}>spell</div>;
}

export default Spell;
