import Head from "next/head";
import { FunctionComponent } from "react";
import Navigation from "../Navigation/Navigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head key={"main-header"}>
        <title>A4ME</title>
        <link rel="apple-touch-icon" href="/"></link>
        <meta name="description" content="Anime4me Web page" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/A4ME.png" />
        <meta name="theme-color" content="#FF006A" />
      </Head>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
