import useMediaQuery, { Breakpoint } from "@/utils/hooks/useMediaQuery";

export function RenderView({
  breakpoint,
  desktop,
  mobile,
  loader,
}: {
  breakpoint: Breakpoint;
  desktop: JSX.Element;
  mobile: JSX.Element;
  loader?: JSX.Element;
}) {
  const is = useMediaQuery(breakpoint);
  switch (is) {
    case true:
      return desktop;
    case false:
      return mobile;
    default:
      return loader ?? null;
  }
}
