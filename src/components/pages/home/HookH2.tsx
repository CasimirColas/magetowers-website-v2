import { cn } from "@/lib/utils";

function HH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-6xl font-bold text-center font-title p-8 text-tile",
        className
      )}
      style={{
        textShadow: "0px 3px 4px #0698c5",
      }}
    >
      {children}
    </h2>
  );
}

export default HH2;
