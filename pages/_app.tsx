import "styles/index.scss";
import { type AppType } from "next/app";


const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
