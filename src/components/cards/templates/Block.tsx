import { cn } from "@/lib/utils";
import { CardNames } from "../types";
import { cardsDictionary as d } from "../dictionary";

interface BlockProps {
  name: CardNames;
  className?: string;
}

function Block({ name, className }: BlockProps) {
  const card = d[name];
  return <div className={cn("", className)}>block</div>;
}

export default Block;
