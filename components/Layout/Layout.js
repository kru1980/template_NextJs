import React from "react";
import Head from "next/head";
import Navbar from "../Navbar/index";

export default ({ children, title = "Ты забыл передать заголовок" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div>{children}</div>
      <footer>{"I`m here to stay"}</footer>
    </div>
  );
};
