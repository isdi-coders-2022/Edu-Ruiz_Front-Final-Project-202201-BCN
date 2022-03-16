import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import "@fontsource/readex-pro";
import { AppProps } from "next/app";
import { FC } from "react";
import { wrapper } from "../redux/store";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(WrappedApp);
