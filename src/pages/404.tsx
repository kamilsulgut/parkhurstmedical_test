import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const { locale } = useRouter();
  return (
    <PageLayout
      title={t("title")}
      pageTitle={t("pageTitle")}
      metaDescription={t("description")}
    >
      {t("pageNotFound")}
    </PageLayout>
  );
}

NotFound.messages = ["NotFound", ...Header.messages, ...Footer.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        NotFound.messages
      ),
    },
  };
}
