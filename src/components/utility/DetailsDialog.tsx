import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

interface DetailsDialogProps {
  children: React.ReactNode;
  triggerClassName?: string;
  trigger: JSX.Element;
  className?: string;
}

function DetailsDialog({
  children,
  className,
  trigger,
  triggerClassName,
}: DetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
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
