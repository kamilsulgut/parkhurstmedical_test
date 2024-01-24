import CustomSwiper from "@/components/CustomSwiper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconCard } from "@/components/IconCard";
import PageLayout from "@/components/PageLayout";
import { Ferry } from "@/icons/Ferry";
import { Security } from "@/icons/Security";
import { Transport } from "@/icons/Transport";
import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function About() {
  const t = useTranslations("About");
  const { locale } = useRouter();

  return (
    <PageLayout
      title={t("title")}
      metaDescription={t("metaDescription")}
      pageTitle={t("pageTitle")}
    >
      <main className='px-[10px] md:px-[40px]'>
        <section className='header-section'>
          <h1 className='text-center'>{t("pageTitle")}</h1>
        </section>
        <section className='mb-4 text-[var(--text-card)]'>
          <p className=' mt-1 text-2xl mt-2'>{t("firstSection")}</p>
          <p className=' mt-1 text-2xl mt-2'>{t("secondSection")}</p>
          <p className=' mt-1 text-2xl mt-2'>{t("thirdSection")}</p>
          <p className=' mt-1 text-2xl mt-2'>{t("fourthSection")}</p>
        </section>
        <section className='flex flex-col lg:flex-row mb-4  section-spacer w-full'>
          <IconCard icon={<Ferry />}>{t("ferry")}</IconCard>
          <IconCard
            icon={<Security />}
            className='lg:mx-2'
          >
            {t("security")}
          </IconCard>
          <IconCard icon={<Transport />}>{t("transport")}</IconCard>
        </section>
        <section>
          <CustomSwiper />
        </section>
      </main>
    </PageLayout>
  );
}

About.messages = ["About", ...Header.messages, ...Footer.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        About.messages
      ),
    },
  };
}
