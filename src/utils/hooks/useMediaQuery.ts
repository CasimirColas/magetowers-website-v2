import { useState, useEffect } from "react";

type Breakpoint = keyof typeof defaultBreakpoints;

const defaultBreakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1400px",
};

export default function useMediaQuery(query: Breakpoint) {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(min-width:${defaultBreakpoints[query]})`);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}
