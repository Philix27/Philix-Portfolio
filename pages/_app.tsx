import Layout from "../views/Layout";
import "../styles/index.scss";
import { type AppType } from "next/app";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
