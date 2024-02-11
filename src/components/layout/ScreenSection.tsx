import { cn } from "@/lib/utils";

interface ScreenSectionProps {
  className?: string;
}

function ScreenSection({
  className,
  children,
}: ScreenSectionProps & { children: React.ReactNode }) {
  return (
    <section className={cn("w-full h-full p-6 snap-start", className)}>
      {children}
    </section>
  );
}

export default ScreenSection;
