import React from "react";
import { NextComponentType } from "next";
import { AppContext, AppInitialProps, AppProps } from "next/app";

import "../styles/globals.css";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default MyApp;
