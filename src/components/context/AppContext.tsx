import { createContext, useContext, useState, useEffect } from "react";
import { isToday, parseISO } from "date-fns";
import type { ReactNode } from "react";

export type NewsletterStatus = "open" | "closed" | "subbed";

export interface MageTowersContext {
  newsletterStatus: { status: NewsletterStatus; lastClosed?: string };
}

interface appContextType {
  newsletterStatus: { status: NewsletterStatus; lastClosed?: string };
  changeNewsletterStatus: (status: NewsletterStatus) => void;
}

const contextDefaultValues: appContextType = {
  newsletterStatus: { status: "closed" },
  changeNewsletterStatus: () => {},
};

const AuthContext = createContext<appContextType>(contextDefaultValues);

export function useAppContext(): appContextType {
  return useContext(AuthContext);
}

interface Props {
  children: ReactNode;
}

export function ContextProvider({ children }: Props): JSX.Element {
  const defaultContext: MageTowersContext = {
    newsletterStatus: { status: "closed" },
  };

  const initial = (): MageTowersContext => {
    const data = window.localStorage.getItem("magetowers.com");
    if (data != null) {
      const context = JSON.parse(data) as MageTowersContext;
      if (
        context.newsletterStatus.status === "closed" &&
        !isToday(parseISO(context.newsletterStatus.lastClosed ?? ""))
      ) {
        context.newsletterStatus.status = "open";
      }
      return context;
    } else {
      window.localStorage.setItem(
        "magetowers.com",
        JSON.stringify(defaultContext)
      );
      return defaultContext;
    }
  };
  const [context, setContext] = useState<MageTowersContext>(defaultContext);
  useEffect(() => {
    setContext(initial);
  }, []);
  function changeNewsletterStatus(status: NewsletterStatus): void {
    const newStatus: { status: NewsletterStatus; lastClosed?: Date } = {
      status,
    };
    if (status === "closed") {
      newStatus.lastClosed = new Date();
      newStatus.status = "closed";
    }
    const saveString = JSON.stringify({
      ...context,
      newsletterStatus: newStatus,
    });
    setContext(JSON.parse(saveString));
    window.localStorage.setItem("magetowers.com", saveString);
  }

  const value = {
    newsletterStatus: context.newsletterStatus,
    changeNewsletterStatus,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
