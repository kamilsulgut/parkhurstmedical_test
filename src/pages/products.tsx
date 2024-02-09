"use client";

import CustomSwiper from "@/components/CustomSwiper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import { CooperationPharmaceutical } from "@/icons/CooperationPharmaceutical";
import { Warehouse } from "@/icons/Warehouse";
import { productsPhotosToSwiper } from "@/images/imagesToSwipper";
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
      <main className='px-[20px] max-w-[1400px]'>
        <section className='header-section'>
          <h1 className='text-center'>{t("pageTitle")}</h1>
        </section>
        <section className='mt-4 text-center lg:text-left'>
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
          <div className='hidden lg:grow lg:basis-[30%] lg:flex items-center justify-center '>
            <Warehouse />
          </div>
        </section>
        <section className='section-spacer flex '>
          <div className='hidden lg:grow lg:basis-[30%] lg:flex items-center justify-center'>
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

        <section className='section-spacer flex '>
          <CustomSwiper
            images={productsPhotosToSwiper}
            alt={t("productsCarouselAlt")}
          />
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
