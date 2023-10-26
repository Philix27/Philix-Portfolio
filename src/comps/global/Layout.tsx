import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Eligbue Felix</title>
        <meta name="portfolio" content="Created by Eligbue" />
      </Head>
      {props.children}
    </>
  );
}
