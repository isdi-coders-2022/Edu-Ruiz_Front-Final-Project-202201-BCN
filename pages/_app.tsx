import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import "@fontsource/readex-pro";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
