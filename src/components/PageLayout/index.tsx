import Head from "next/head";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import Header from "../Header";
import Footer from "../Footer";
import a from "../../icons/favicon.ico";

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
        <link
          rel='alternate'
          hrefLang='pl'
          href='https://parkhurstmedical.pl/'
        />
        <meta
          name='keywords'
          content=' parkhurst, parkhurst medical, Parkhurst, Parkhurst Medical,medyczna marihuana, przemysł konopny, terapia kannabinoidowa, Parkhurst Medical Poland, Medical marijuana, cannabis industry, cannabinoid therapy'
        ></meta>
        <meta
          property='og:locale'
          content='pl_pl'
        ></meta>
        <meta
          property='og:site_name'
          content='Parkhurst Medical'
        ></meta>
        <meta
          property='og:title'
          content='Parkhurst Medical'
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
        <meta
          property='og:type'
          content='website'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x106'
          href='../../images/LogoPng.png'
        ></link>

        <link
          rel='manifest'
          href='../../../manifest.json'
        />
      </Head>
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
}
