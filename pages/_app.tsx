import Layout from "comps/global/Layout";
import "styles/index.scss";
import { type AppType } from "next/app";

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
