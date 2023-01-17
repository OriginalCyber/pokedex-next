import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EmptyLayout } from "../components/EmptyLayout";
import { NextCustomPage } from "../types/next";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextCustomPage }) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
