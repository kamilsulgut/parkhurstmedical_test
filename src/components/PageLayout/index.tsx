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
          content=' parkhurst, parkhurst medical, Parkhurst, Parkhurst Medical,medyczna marihuana, przemysł konopny, terapia kannabinoidowa, Parkhurst Medical Poland, Medical marijuana, cannabis industry, cannabinoid therapy'
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
        <meta
          property='og:image'
          content='https://parkhurstmedical.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FdekstopPhoto_1.5b413577.jpg&w=1920&q=100'
        />
        <link
          rel='canonical'
          href='https://parkhurstmedical.pl/'
          hrefLang='pl'
        />
        <link
          rel='canonical'
          href='https://parkhurstmedical.pl/en/'
          hrefLang='en'
        />
        <meta
          property='og:type'
          content='website'
        />
      </Head>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
}
