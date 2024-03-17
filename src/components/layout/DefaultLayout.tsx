import Head from "next/head";
import Navbar from "./navbar/Navbar";
import { cn } from "@/lib/utils";

interface DefaultLayoutProps {
  title?: string;
  description?: string;
  className?: string;
}

const defaultTitle = "Mage Towers";
const defaultDescription =
  "Strategic card game for  2-4 players comming soon to Kickstarter!";

function DefaultLayout({
  children,
  title,
  description,
  className,
}: DefaultLayoutProps & { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
        <meta
          name="description"
          content={description ? description : defaultDescription}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Navbar className="fixed top-0" />
      <main
        className={cn(
          "h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] mt-16 sm:mt-20 absolute w-full",
          className
        )}
      >
        {children}
      </main>
      <footer className="fixed bottom-0 hidden">hello footer</footer>
    </>
  );
}

export default DefaultLayout;
