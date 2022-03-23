import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import "@fontsource/readex-pro";
import { AppProps } from "next/app";
import { FC } from "react";
import { wrapper } from "../redux/store";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";
import "react-toastify/dist/ReactToastify.css";

const WrappedApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <NextNProgress
        color="#1A0F18"
        startPosition={0.4}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={"dark"}
      />
    </Layout>
  );
};

export default wrapper.withRedux(WrappedApp);
