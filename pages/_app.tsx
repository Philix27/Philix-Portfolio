import Layout from "../src/comps/global/Layout";
import "../src/styles/index.scss";
import { type AppType } from "next/app";

export default function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
