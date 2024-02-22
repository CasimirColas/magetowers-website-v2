import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface DetailsDialogProps {
  children: React.ReactNode;
  trigger: JSX.Element;
  className?: string;
}

function DetailsDialog({ children, className, trigger }: DetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        className={cn(
          "bg-opacity-0 border-none max-w-max h-full flex justify-center items-center",
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DetailsDialog;
