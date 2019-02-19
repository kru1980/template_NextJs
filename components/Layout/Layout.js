import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/index";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Hello World</title>
      </Head>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
