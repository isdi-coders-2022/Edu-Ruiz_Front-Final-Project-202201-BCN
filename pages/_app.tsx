import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import "@fontsource/readex-pro";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
