import { useTranslations } from "next-intl";
import { useAppContext } from "../context/AppContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThumbsUp, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

function NewsletterSignUp() {
  const { newsletter, changeNewsletterStatus } = useAppContext();
  const c = useTranslations("common.newsletter");
  const { toast } = useToast();
  const [email, setEmail] = useState<string>("");

  async function subscribeToNewsletter() {
    try {
      const response = await fetch("/api/newsletterSignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        changeNewsletterStatus("subbed");
        toast({
          variant: "default",
          title: "Mage Towers",
          description: c("notSpam"),
          avatar: "images/logo.png",
          action: (
            <ToastAction
              altText="next"
              onClick={() =>
                toast({
                  variant: "success",
                  title: c("success"),
                  description: c("thanks"),
                  action: (
                    <ToastAction
                      altText="next"
                      onClick={() => changeNewsletterStatus("subbed")}
                    >
                      <ThumbsUp />
                    </ToastAction>
                  ),
                })
              }
            >
              {c("continue")}
            </ToastAction>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: c("error"),
          description: data.message,
        });
      }
    } catch (error: any) {
      console.error("An error occurred:", error);
    }
  }
  return (
    <>
      <dialog
        open={newsletter.status === "open"}
        className="sm:max-w-md max-w-[95vw] bg-white absolute bottom-0 sm:mr-4 mb-4 sm:mt-0 flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-4 shadow-lg dark:border-slate-800"
        style={{
          transition: "translate 0.5s",
          translate: newsletter.status === "open" ? "0 0" : "105% 0",
        }}
      >
        <Avatar className="mt-4 mb-auto">
          <AvatarImage src="images/logo.png" alt="@magetowers" />
          <AvatarFallback>MT</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <h2 className="font-bold">Mage Towers</h2>
          <p>{c("newsletterHook")}</p>
          <form
            className="flex flex-col gap-2"
            method="dialog"
            onSubmit={(e) => {
              e.preventDefault();
              subscribeToNewsletter();
            }}
          >
            <Input
              placeholder={c("placeholder")}
              type="email"
              aria-label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">{c("subscribe")}</Button>
          </form>
          <button
            className="absolute top-0 right-0 mt-2 mr-2"
            onClick={() => changeNewsletterStatus("closed")}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </dialog>

      <button
        className="w-full bg-white animate-fade-up animate-once absolute bottom-0 text-sky-500 hover:bg-sky-500 hover:text-white p-1 border-t z-50"
        onClick={() => changeNewsletterStatus("open")}
        style={{
          transition: "translate 0.5s",
          translate: newsletter.status === "open" ? "0 100%" : "0 0",
          display: newsletter.status === "subbed" ? "none" : "block",
        }}
      >
        {c("subscribeToNewsletter")}
      </button>
    </>
  );
}

export default NewsletterSignUp;
