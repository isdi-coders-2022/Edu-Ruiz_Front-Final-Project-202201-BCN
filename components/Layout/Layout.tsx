import Head from "next/head";
import { FunctionComponent } from "react";
import Navigation from "../Navigation/Navigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head key={"main-header"}>
        <title>A4ME</title>
      </Head>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
