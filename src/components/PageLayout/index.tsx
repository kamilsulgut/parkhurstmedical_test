import Head from "next/head";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import Header from "../Header";
import Footer from "../Footer";

type Props = {
  children?: ReactNode;
  title: string;
  metaDescription: string;
  pageTitle: string;
};

export default function PageLayout({
  children,
  title,
  pageTitle,
  metaDescription,
}: Props) {
  return (
    <>
      <Head>
        <title>{[title, pageTitle].join(" - ")}</title>
        <meta
          name='description'
          content={metaDescription}
        />
        <link
          rel='alternate'
          hrefLang='en'
          href='https://parkhurstmedical.pl/en/'
        />
        <meta
          name='keywords'
          content='medyczna marihuana, przemysł konopny, terapia kannabinoidowa, Parkhurst Medical Poland'
        ></meta>
        <meta
          property='og:title'
          content='Parkhurst Medical Poland'
        />
        <meta
          property='og:description'
          content='Shaping the Future of Cannabinoid Therapy'
        />
        <meta
          property='og:url'
          content='https://parkhurstmedical.pl/'
        />
      </Head>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
}
