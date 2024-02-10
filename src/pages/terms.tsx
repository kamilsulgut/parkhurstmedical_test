import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { pick } from "lodash";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import React from "react";

const Terms = () => {
  const t = useTranslations("Terms");
  return (
    <PageLayout
      title={t("title")}
      metaDescription={t("description")}
      pageTitle={t("pageTitle")}
    >
      <main className='px-[20px] max-w-[1400px]'>
        <section className='header-section'>
          <h1 className='text-center'>{t("pageTitle")}</h1>
        </section>
      </main>
    </PageLayout>
  );
};

export default Terms;

Terms.messages = ["Terms", ...Header.messages, ...Footer.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        Terms.messages
      ),
    },
  };
}
