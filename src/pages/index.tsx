import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

import PageLayout from "@/components/PageLayout";

import { Card } from "@/components/Card";
import BoxImage from "@/components/BoxImage";
import photoOne from "../images/photo_1.jpg";
import photoTwo from "../images/photo_2.jpg";
import photoThree from "../images/photo_3.jpg";
import photoFour from "../images/photo_4.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Index() {
  const t = useTranslations("Home");
  const { locale } = useRouter();

  return (
    <>
      <Head key={"index_head"}>
        <meta
          name='robots'
          content='index, follow'
        />
      </Head>
      <PageLayout
        title={t("title")}
        pageTitle={t("pageTitle")}
        metaDescription={t("description")}
      >
        <main className='px-[10px] md:px-[40px]'>
          <section className='header-section'>
            <h1 className='text-center'>{t("title")}</h1>
          </section>
          <section className='mb-4'>
            <p className=' mt-1 text-center header-paragraph'>
              {t("description")}
            </p>
            <BoxImage
              src={photoOne}
              alt={t("photo1Alt")}
            />
          </section>
          <section className='flex flex-col items-center section-spacer lg:flex-row lg:items-start'>
            <div className='lg:grow lg:basis-[45%]'>
              <BoxImage
                src={photoTwo}
                alt={t("photo2Alt")}
                width={661}
              />
            </div>
            <div className='lg:grow-0 lg:basis-[45%] lg:mt-[0] mt-[15px] flex flex-col justify-between align-center px-[10px] '>
              <h2 className='text-left section-header mb-1'>{t("for")}</h2>
              <p className='text-2xl my-1 text-left'>{t("more_1")}</p>
              <p className='text-2xl mt-1 text-left'>{t("more_2")}</p>
            </div>
          </section>
          <section className='flex flex-col section-spacer'>
            <h2 className='section-header text-center mb-[3.5rem]'>
              {t("ourValues")}
            </h2>
            <div className='flex flex-col lg:flex-row lg:justify-between '>
              <Card
                className='mb-[15px] lg:mb-0 lg:basis-[45%]'
                src={photoThree}
                alt='imageAlt'
                cardTitle={t("liveQuality")}
                cardDescription={t("ourProducts")}
              />
              <Card
                className='lg:basis-[45%]'
                src={photoFour}
                alt='imageAlt'
                cardTitle={t("basedTherapies")}
                cardDescription={t("ourConcentration")}
              />
            </div>
          </section>
        </main>
      </PageLayout>
    </>
  );
}

// The namespaces can be generated based on used components. `PageLayout` in
// turn requires messages for `Navigation` and therefore a recursive list of
// namespaces is created dynamically, where the owner of a component doesn't
// have to know which nested components are rendered. Note that this approach
// is limited to components which are not lazy loaded.
Index.messages = ["Home", ...Header.messages, ...Footer.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        Index.messages
      ),
    },
  };
}
