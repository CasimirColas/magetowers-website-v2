import { useTranslations } from "next-intl";
import { RulesSection } from "../sections";
import { cardsDictionary } from "@/components/cards/dictionary";
import { useState } from "react";
import adaptCount from "@/components/cards/adaptCount";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { H2 } from "@/components/ui/typography";
import { DesktopRulesSectionPr } from "../DesktopView";

interface CompositionDesktopSectionProps {
  id: RulesSection;
  pr: DesktopRulesSectionPr;
  className: string;
  h2Style: string;
}

function CompositionDesktopSection({
  id,
  pr,
  className,
  h2Style,
}: CompositionDesktopSectionProps) {
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
  const col1 = tableMapper.slice(0, Math.ceil(tableMapper.length / 2));
  const col2 = tableMapper.slice(Math.ceil(tableMapper.length / 2));

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

  function DesktopTable({
    data,
    className,
    total,
  }: {
    total?: boolean;
    className?: string;
    data: { name: string; count: number }[];
  }) {
    return (
      <Table className={className}>
        <TableHeader>
          <TableRow className="border-sky-900">
            <TableHead className="font-bold text-sky-900">
              {t("card_names")}
            </TableHead>
            <TableHead className="font-bold text-sky-900">
              {t("count")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((line, i) => (
            <TableRow key={"table_row-" + i} className="border-paperGray">
              {Object.values(line).map((value, j) => (
                <TableCell key={"table_row-" + i + "-cell-" + j}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {total && (
          <TableFooter>
            <TableRow className="bg-sky-900 hover:bg-sky-900">
              <TableCell className="text-white">{t("total")}</TableCell>
              <TableCell className="text-white">{totalCards}</TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    );
  }

  return (
    <section className={className} id={id}>
      <H2 className={h2Style}>{t("title")}</H2>
      {pr("intro", t)}
      <i>{pr("warning", t)}</i>
      <div className="grid grid-cols-2 grid-rows-2 w-full p-4 gap-y-2 border border-black rounded-md">
        <label htmlFor="player-count" className="text-base flex items-center">
          {t("number_of_players")}
        </label>
        <div className="flex justify-end items-center">
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
        <label htmlFor="game-speed" className="text-base flex items-center">
          {t("fast_config")}
        </label>
        <div className="flex justify-end items-center mr-10">
          <Switch
            className="data-[state=checked]:bg-sky-900 data-[state=unchecked]:bg-slate-900"
            checked={isFast}
            onCheckedChange={() => setIsFast((prev) => !prev)}
            id="game-speed"
          />
        </div>
      </div>
      <p className="text-base">
        {t("number_of_pack")}{" "}
        <b className="text-sky-900">{Math.ceil(playerCount / 2)}</b>
      </p>
      <div className="flex w-full gap-4">
        <DesktopTable data={col1} />
        <DesktopTable data={col2} total />
      </div>
    </section>
  );
}

export default CompositionDesktopSection;
