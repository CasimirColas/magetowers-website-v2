import { CardNames } from "./types";
import { cardsDictionary as d } from "./dictionary";
import Glyph from "./templates/Glyph";
import Spell from "./templates/Spell";
import Block from "./templates/Block";
import Utility from "./templates/Utility";

interface CardProps {
  name: CardNames;
  id: string;
  className?: string;
}

function Card({ name, id, className }: CardProps) {
  return {
    glyph: <Glyph name={name} id={id} className={className} />,
    spell: <Spell name={name} id={id} className={className} />,
    block: <Block name={name} id={id} className={className} />,
    utility: <Utility name={name} id={id} className={className} />,
  }[d[name].category];
}

export default Card;
