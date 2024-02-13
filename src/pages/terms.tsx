import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { pick } from "lodash";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import React from "react";

// ”
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
        <section className='py-[20px]'>
          <p className='pb-[30px]'>{t("firstSection")}</p>
          <p className='pb-[30px]'>{t("secondSection")}</p>
          <p className='pb-[10px]'>{t("thirdSection")}</p>
          <div className='pl-[50px]'>
            <p className='pb-[10px]'>- {t("purposesFirs")}</p>
            <p className='pb-[30px]'>- {t("purposesFirs")}</p>
          </div>
          <p className='pb-[30px]'>{t("fourthSection")}</p>
          <p className='pb-[10px]'>{t("fifthSection")}</p>
          <div className='pl-[50px]'>
            <p className='pb-[10px]'>- {t("email")}</p>
            <p className='pb-[10px]'>- {t("fullName")}</p>
            <p className='pb-[30px]'>- {t("telephone")}</p>
          </div>
          <p className='pb-[30px]'>{t("sixthSection")}</p>
          <p className='pb-[10px]'>{t("seventhSection")}</p>
          <div className='pl-[50px]'>
            <p className='pb-[10px]'>- {t("recipientsFirts")}</p>
            <p className='pb-[10px]'>- {t("recipientsSecond")}</p>
            <p className='pb-[30px]'>- {t("recipientsThird")}</p>
          </div>
          <p className='pb-[30px]'>{t("eighthSection")}</p>
          <p className='pb-[30px]'>{t("ninethSection")}</p>
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
