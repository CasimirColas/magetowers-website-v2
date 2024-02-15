import { CardNames } from "./types";
import { cardsDictionary as d } from "./dictionary";
import Glyph from "./templates/Glyph";
import Spell from "./templates/Spell";
import Block from "./templates/Block";
import Utility from "./templates/Utility";

interface CardProps {
  name: CardNames;
  id: string;
}

function Card({ name, id }: CardProps) {
  return {
    glyph: <Glyph name={name} id={id} />,
    spell: <Spell name={name} />,
    block: <Block name={name} id={id} />,
    utility: <Utility name={name} />,
  }[d[name].category];
}

export default Card;
