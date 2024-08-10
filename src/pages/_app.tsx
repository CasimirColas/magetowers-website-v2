import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ContextProvider } from "@/components/context/AppContext";
import { Toaster } from "@/components/ui/toaster";
import { APIProvider } from "@vis.gl/react-google-maps";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone="Europe/Paris"
    >
      <ContextProvider>
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
          <Component {...pageProps} />
          <Toaster />
        </APIProvider>
      </ContextProvider>
      <SpeedInsights />
      <Analytics />
    </NextIntlClientProvider>
  );
}
