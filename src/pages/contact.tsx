import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import pick from "lodash/pick";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Contact() {
  const t = useTranslations("Contact");
  const { locale } = useRouter();

  return (
    <PageLayout
      title={t("title")}
      metaDescription={t("description")}
      pageTitle={t("pageTitle")}
    >
      <main
        className='items-center px-[20px] max-w-[1400px] md:mx:auto min-full'
        style={{ minHeight: "100%" }}
      >
        <section className='header-section text-center'>
          <h1>{t("pageTitle")}</h1>
        </section>

        <ContactForm
          fullName={t("fullName")}
          message={t("message")}
          phone={t("phone")}
          checkbox={t("checkbox")}
          email={t("email")}
          buttonText={t("buttonText")}
          acceptTermsRequired={t("acceptTermsRequired")}
          emailRequired={t("emailRequired")}
          fullNameRequired={t("fullNameRequired")}
          messageRequired={t("messageRequired")}
          phoneRequired={t("phoneRequired")}
          successMessage={t("successMessage")}
        />
      </main>
    </PageLayout>
  );
}

Contact.messages = ["Contact", ...Header.messages, ...Footer.messages];

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick(
        (await import(`../../messages/${locale}.json`)).default,
        Contact.messages
      ),
    },
  };
}
