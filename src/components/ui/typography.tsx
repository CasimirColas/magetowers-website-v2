import { cn } from "@/lib/utils";

export const H1 = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <h1
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
    style={style}
  >
    {children}
  </h1>
);

export const H2 = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <h2
    className={cn(
      "scroll-m-20 border-b pb-0 sm:pb-1 text-xl sm:text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
    id={id}
  >
    {children}
  </h2>
);

export const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
  >
    {children}
  </h3>
);

export const Blockquote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
    {children}
  </blockquote>
);
