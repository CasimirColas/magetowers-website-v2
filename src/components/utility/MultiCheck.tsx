import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export type Options = { key: string; label: string | JSX.Element };

interface MultiCHecksProps {
  className?: string;
  values: string[];
  options: Options[];
  onChange: (value: string) => void;
  trigger: JSX.Element | string;
  menuLabel?: string;
}

export function MultiCHecks({
  className,
  values,
  options,
  onChange,
  trigger,
  menuLabel,
}: MultiCHecksProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full flex justify-between items-center", className)}
        >
          {trigger}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuLabel ? (
          <>
            <DropdownMenuLabel>{menuLabel}</DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        ) : null}
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.key}
            checked={values.includes(option.key)}
            onClick={(e) => {
              e.preventDefault();
              onChange(option.key);
            }}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
