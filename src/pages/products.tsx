"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { CooperationPharmaceutical } from "@/icons/CooperationPharmaceutical";
import { Warehouse } from "@/icons/Warehouse";
import { pick } from "lodash";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Products() {
  const t = useTranslations("Products");
  const { locale } = useRouter();
  return (
    <PageLayout
      title={t("title")}
      metaDescription={t("description")}
      pageTitle={t("pageTitle")}
    >
      <main className='px-[10px] md:px-[40px]'>
        <section className='header-section section-spacer'>
          <h1 className='text-center'>{t("pageTitle")}</h1>
        </section>
        <section className='text-center lg:text-left section-spacer'>
          <p className=' mt-1 text-2xl mt-2 text-[var(--text-card)]'>
            {t("firstSection")}
          </p>
          <p className=' mt-1 text-2xl mt-2 text-[var(--text-card)]'>
            {t("secondSection")}
          </p>
          <p className=' mt-1 text-2xl mt-2 text-[var(--text-card)]'>
            {t("thirdSection")}
          </p>
        </section>
        <section className='section-spacer flex'>
          <div className='text-center lg:text-left lg:grow lg:basis-[60%]'>
            <h2 className='lg:text-left section-header mb-1'>
              {t("cooperationPharmaceuticalHeader")}
            </h2>
            <p className=' mt-1 text-2xl mt-2 text-[var(--text-card)]'>
              {t("cooperationPharmaceuticalBody")}
            </p>
          </div>
          <div className='hidden lg:grow lg:basis-[30%] lg:flex items-center justify-end '>
            <Warehouse />
          </div>
        </section>
        <section className='section-spacer flex '>
          <div className='hidden lg:grow lg:basis-[30%] lg:flex items-center'>
            <CooperationPharmaceutical />
          </div>

          <div className='text-center lg:text-left lg:grow lg:basis-[60%] '>
            <h2 className='lg:text-left section-header mb-1'>
              {t("cooperationPharmacyHeader")}
            </h2>
            <p className=' mt-1 text-2xl mt-2 text-[var(--text-card)]'>
              {t("cooperationPharmacyBody")}
            </p>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}

Products.messages = ["Products", ...Header.messages, ...Footer.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        Products.messages
      ),
    },
  };
}
