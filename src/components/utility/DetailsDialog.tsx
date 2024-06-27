import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Description, DialogTitle } from "@radix-ui/react-dialog";

interface DetailsDialogProps {
  children: React.ReactNode;
  triggerClassName?: string;
  trigger: JSX.Element;
  className?: string;
  onOpenChange?: () => void;
}

function DetailsDialog({
  children,
  className,
  trigger,
  triggerClassName,
  onOpenChange,
}: DetailsDialogProps) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger className={triggerClassName}>{trigger}</DialogTrigger>
      <DialogTitle className="sr-only">Details</DialogTitle>
      <Description className="sr-only">Details</Description>
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
