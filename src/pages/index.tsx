import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";

import PageLayout from "@/components/PageLayout";

import { Card } from "@/components/Card";
import BoxImage from "@/components/BoxImage";
import mainPhoto from "../images/mainPhoto.jpg";
import mainMobilePhoto from "../images/mainMobilePhoto.jpg";
import desktopPhotoTwo from "../images/desktopPhoto_2.jpg";
import mobilePhotoTwo from "../images/mobilePhoto2.jpg";
import desktopPhotoThree from "../images/desktopPhoto_3.jpg";
import mobilePhotoThree from "../images/mobilePhoto3.jpg";
import desktopPhotoFour from "../images/desktopPhoto_4.jpg";
import mobilePhotoFour from "../images/mobilePhoto4.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import useIsMobile from "@/hook/useIsMobile";

export default function Index() {
  const t = useTranslations("Home");
  const isMobile = useIsMobile();

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
        <main className='px-[20px] md:px-[100px] md:mx:auto'>
          <section className='header-section'>
            <h1 className='text-center'>{t("title")}</h1>
          </section>
          <section className='mb-4'>
            <p className=' mt-1 text-center header-paragraph'>
              {t("description")}
            </p>
            <BoxImage
              src={isMobile ? mainMobilePhoto : mainPhoto}
              alt={t("photo1Alt")}
            />
          </section>
          <section className='flex flex-col items-center section-spacer lg:flex-row lg:items-start'>
            <div className='lg:grow lg:basis-[45%]'>
              <BoxImage
                src={isMobile ? mobilePhotoTwo : desktopPhotoTwo}
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
                src={isMobile ? mobilePhotoThree : desktopPhotoThree}
                alt='imageAlt'
                cardTitle={t("liveQuality")}
                cardDescription={t("ourProducts")}
              />
              <Card
                className='lg:basis-[45%]'
                src={isMobile ? mobilePhotoFour : desktopPhotoFour}
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
