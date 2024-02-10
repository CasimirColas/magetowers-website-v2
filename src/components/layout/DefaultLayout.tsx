import Head from "next/head";
import Navbar from "./navbar/Navbar";

interface DefaultLayoutProps {
  title?: string;
  description?: string;
}

const defaultTitle = "Mage Towers";
const defaultDescription =
  "Strategic card game for  2-4 players coming soon to Kickstarter!";

function DefaultLayout({
  children,
  title,
  description,
}: DefaultLayoutProps & { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>{title ? `${defaultTitle} | ${title}` : defaultTitle}</title>
        <meta
          name="description"
          content={description ? description : defaultDescription}
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer />
    </>
  );
}

export default DefaultLayout;
