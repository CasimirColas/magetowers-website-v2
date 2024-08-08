import { createContext, useContext, useState, useEffect } from "react";
import { isToday, parseISO } from "date-fns";
import type { ReactNode } from "react";

export type NewsletterStatus = "open" | "closed" | "subbed";

export interface MageTowersContext {
  newsletter: { status: NewsletterStatus; lastClosed?: string };
}

interface appContextType {
  newsletter: { status: NewsletterStatus; lastClosed?: string };
  changeNewsletterStatus: (status: NewsletterStatus) => void;
}

const contextDefaultValues: appContextType = {
  newsletter: { status: "closed" },
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
    newsletter: { status: "closed" },
  };

  const initial = (): MageTowersContext => {
    const data = window.localStorage.getItem("magetowers.com");
    if (data != null) {
      const context = JSON.parse(data) as MageTowersContext;
      console.log(context);
      try {
        if (
          context.newsletter.status === "closed" &&
          !isToday(parseISO(context.newsletter.lastClosed ?? ""))
        ) {
          context.newsletter.status = "open";
        }
      } catch (error) {
        window.localStorage.setItem(
          "magetowers.com",
          JSON.stringify(defaultContext)
        );
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
      newsletter: newStatus,
    });
    setContext(JSON.parse(saveString));
    window.localStorage.setItem("magetowers.com", saveString);
  }

  const value = {
    newsletter: context.newsletter,
    changeNewsletterStatus,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
