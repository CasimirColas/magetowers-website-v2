import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        avatar,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            {avatar && (
              <Avatar className="mt-4 mb-auto w-1/2">
                <AvatarImage src={avatar} alt="@magetowers" />
                <AvatarFallback>MT</AvatarFallback>
              </Avatar>
            )}
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
