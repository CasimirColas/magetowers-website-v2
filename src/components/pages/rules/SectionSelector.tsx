import { useTranslations } from "next-intl";
import { RulesSection, sections } from "./sections";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SectionSelectorProps {
  className?: string;
  value: string;
  onChange: (value: RulesSection) => void;
}

function SectionSelector({ className, onChange, value }: SectionSelectorProps) {
  const t = useTranslations("rules");
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className}>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {sections.map((section) => (
          <SelectItem key={section} value={section}>
            {t(section + ".title")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SectionSelector;
