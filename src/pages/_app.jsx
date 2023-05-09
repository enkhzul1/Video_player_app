import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import { MantineProvider, createEmotionCache, rem } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
const appendCache = createEmotionCache({ key: "mantine", prepend: false });
import { ModalsProvider } from "@mantine/modals";

export default function App(props) {
  const [isSSR, setIsSSr] = useState(true);

  const { Component, pageProps } = props;

  useEffect(() => {
    setIsSSr(false);
  }, []);

  if (isSSR) return null;

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        emotionCache={appendCache}
        theme={{
          colorScheme: "light",
          focusRingStyles: {
            styles: (theme) => ({ outline: `${rem(2)} solid #f9bc609d` }),
            inputStyles: (theme) => ({ outline: `${rem(2)} solid #f9bc609d` }),
          },
        }}
      >
        <Notifications />
        <ModalsProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
}
