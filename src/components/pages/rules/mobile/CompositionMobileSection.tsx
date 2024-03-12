import { H2 } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { MobileRulesSectionPr } from "../MobileView";
import { cardsDictionary } from "@/components/cards/dictionary";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import adaptCount from "@/components/cards/adaptCount";
import { Switch } from "@/components/ui/switch";
import { RulesSection } from "../sections";

interface CompositionMobileSectionProps {
  id: RulesSection;
  className: string;
  h2Style: string;
  pr: MobileRulesSectionPr;
}

function CompositionMobileSection({
  id,
  className,
  h2Style,
  pr,
}: CompositionMobileSectionProps) {
  const [playerCount, setPlayerCount] = useState(2);
  const [isFast, setIsFast] = useState(true);
  const t = useTranslations("rules.composition");
  const cardt = useTranslations("cards");

  const tableMapper = Object.values(cardsDictionary).map((card) => {
    return {
      name: cardt(card.translation_key + ".name"),
      count: adaptCount(
        playerCount,
        isFast,
        card.name,
        card.category,
        card.count
      ),
    };
  });
  const totalCards = tableMapper.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  );
  function handleAdd() {
    if (playerCount < 8) {
      setPlayerCount(playerCount + 1);
    }
  }
  function handleSubtract() {
    if (playerCount > 2) {
      setPlayerCount(playerCount - 1);
    }
  }

  return (
    <section className={className} id={"observerId-" + id}>
      <H2 className={h2Style} id={id}>
        {t("title")}
      </H2>
      {pr("intro", t)}
      <i>{pr("warning", t)}</i>
      <div className="grid grid-cols-2 grid-rows-2 w-full p-2 gap-y-2 border border-paperGray rounded-md">
        <label
          htmlFor="player-count"
          className="text-sm sm:text-base flex items-center"
        >
          {t("number_of_players")}
        </label>
        <div className="flex justify-center items-center">
          <Button
            variant={"link"}
            className="rounded-full aspect-square p-0"
            onClick={handleSubtract}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            id="player-count"
            type="number"
            value={playerCount}
            min="2"
            max="8"
            className="w-min"
            onChange={(e) => {
              const number = e.target.valueAsNumber;
              if (number >= 2 && number <= 8) {
                setPlayerCount(number);
              }
            }}
          />
          <Button
            variant={"link"}
            className="rounded-full aspect-square p-0"
            onClick={handleAdd}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <label
          htmlFor="game-speed"
          className="text-sm sm:text-base flex items-center"
        >
          {t("fast_config")}
        </label>
        <div className="flex justify-center items-center">
          <Switch
            className="data-[state=checked]:bg-red-950 data-[state=unchecked]:bg-slate-900"
            checked={isFast}
            onCheckedChange={() => setIsFast((prev) => !prev)}
            id="game-speed"
          />
        </div>
      </div>
      <p className="text-sm sm:text-base">
        {t("number_of_pack")}{" "}
        <b className="text-red-950">{Math.ceil(playerCount / 2)}</b>
      </p>

      <Table>
        <TableHeader>
          <TableRow className="border-red-950">
            <TableHead className="font-bold text-red-950">
              {t("card_names")}
            </TableHead>
            <TableHead className="font-bold text-red-950">
              {t("count")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableMapper.map((line, i) => (
            <TableRow key={"table_row-" + i} className="border-paperGray">
              {Object.values(line).map((value, j) => (
                <TableCell key={"table_row-" + i + "-cell-" + j}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="bg-red-900">
            <TableCell className="text-order hover:text-black">
              {t("total")}
            </TableCell>
            <TableCell className="text-order hover:text-black">
              {totalCards}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </section>
  );
}

export default CompositionMobileSection;
