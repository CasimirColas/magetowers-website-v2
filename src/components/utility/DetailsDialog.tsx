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
          "bg-opacity-0 border-none max-w-max max-h-max flex justify-center items-center shadow-none p-2",
          className
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default DetailsDialog;
