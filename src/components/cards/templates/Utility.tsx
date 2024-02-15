import { cn } from "@/lib/utils";
import { CardNames } from "../types";
import { cardsDictionary as d } from "../dictionary";

interface UtilityProps {
  name: CardNames;
  className?: string;
}

function Utility({ name, className }: UtilityProps) {
  const card = d[name];
  return <div className={cn("", className)}>utility</div>;
}

export default Utility;
