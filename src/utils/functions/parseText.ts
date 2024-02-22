import { cn } from "@/lib/utils";
import { createElement } from "react";

type DefaultParserProps = {
  default: true;
  text: string;
  args?: {
    parentClassName?: string;
    childClassName?: string;
  };
};

type CustomParserProps = {
  default: false;
  text: string;
  args: {
    splitter: string;
    parent: string;
    parentClassName?: string;
    child: string;
    childClassName?: string;
  };
};

type ParserProps = DefaultParserProps | CustomParserProps;

export function parseText(props: ParserProps) {
  // default behaviour
  if (props.default) {
    const splitText = props.text.split("||");
    return createElement(
      "p",
      { className: props?.args?.parentClassName },
      splitText.map((text, i) => {
        if (i % 2 === 0) return text;
        return createElement(
          "b",
          { key: i, className: cn("text-view", props?.args?.childClassName) },
          text
        );
      })
    );
  } else {
    // custom behaviour
    const splitText = props.text.split(props.args.splitter);
    return createElement(
      props.args.parent,
      { className: props.args.parentClassName },
      splitText.map((text, i) => {
        if (i % 2 === 0) return text;
        return createElement(
          props.args.child,
          { key: i, className: props.args.childClassName },
          text
        );
      })
    );
  }
}
