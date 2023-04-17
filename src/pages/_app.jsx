import "@/styles/globals.css";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [isSSR, setIsSSr] = useState(true);

  useEffect(() => {
    setIsSSr(false);
  }, []);

  if (isSSR) return null;

  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
