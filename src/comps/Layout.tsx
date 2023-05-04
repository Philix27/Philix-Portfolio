import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Eligbue Felix</title>
        <meta name="portfolio" content="Created by Eligbue" />
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
