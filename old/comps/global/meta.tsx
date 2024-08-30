import Head from "next/head";
import React from "react";
import { NextSeo } from "next-seo";

interface IProps {
  title: string;
  content?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}
export function MetaHeader(props: IProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content="Doow Inc." />
        <meta name="company" content="Doow Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/Doow.png" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: "en",
          site_name: "philix.dev",
        }}
      />
    </>
  );
}
