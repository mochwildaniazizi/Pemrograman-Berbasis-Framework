import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-8 py-6">{children}</main>
      <Footer />
    </>
  );
}
