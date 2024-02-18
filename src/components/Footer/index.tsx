"use client";

import WhiteLogo from "@/icons/WhiteLogo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const t = useTranslations("Footer");
  const { locale } = useRouter();

  return (
    <>
      <footer className='w-full section-spacer py-[60px] px-[10px] flex min-h-[100px]'>
        <div
          className='flex flex-col '
          style={{ margin: "0 auto", maxWidth: "1400px", width: "100%" }}
        >
          <div className='flex flex-col md:flex-row items-start md:items-start'>
            <div className='flex flex-col basis-1/4 justify-center items-start mx-[5px]'>
              <Link
                className='flex justify-start w-full text-xl'
                style={{ width: "10rem" }}
                href={`/${locale === "pl" ? "" : "en"}`}
              >
                <WhiteLogo />
              </Link>
            </div>
            <div className='flex flex-col md:flex-row items-start basis-3/4 mx-[5px] mt-6 md:mt-[0]'>
              <div className='flex flex-col md:basis-1/3 m-[10px] md:m-[0]'>
                <div>
                  <p className='font-bold'>{t("address")}</p>
                  <p>{t("companyName")}</p>
                  <p>{t("companyStreet")}</p>
                  <p>{t("companyCity")}</p>
                  <p>{t("country")}</p>
                </div>
                <div className='mt-[5px]'>
                  <p>{t("NIP")}: 8842823226</p>
                  <p>{t("KRS")}: 0001074394</p>
                  <p>REGON: 527161672</p>
                </div>
              </div>
              <div className='flex flex-col items-start md:basis-1/3 m-[10px] md:mx-[5px] md:my-[0]'>
                <p className='font-bold'>{t("telephone")}</p>
                <p>
                  Ernest:
                  <a href='tel:+48731973183'> +48 731 973 183</a>
                </p>
                <p>
                  Marcin:
                  <a href='tel:+48793932693'> +48 793 932 693</a>
                </p>
                <p>
                  Seth:
                  <a href='tel:+27769118919'> +27 76 911 89 19</a>
                </p>
                <p>
                  Marco:
                  <a href='tel:+48793932693'> +27 82 953 4753</a>
                </p>
              </div>
              <div className='flex flex-col md:basis-1/3 m-[10px] md:m-[0]'>
                <p className='font-bold'>{t("contact")}</p>
                <p>
                  <a href='mailto:biuro@parkhurstmedical.pl'>
                    biuro@parkhurstmedical.pl
                  </a>
                </p>
              </div>
            </div>
            <Link
              target='blank'
              href='https://kamilsulgut.com/'
              style={{ margin: "0 auto", fontSize: "10px" }}
              className='md:hidden font-light md:m-[0] relative bottom-[-57px]'
            >
              Created by Kamil Sułgut
            </Link>
          </div>
          <Link
            target='blank'
            href='https://kamilsulgut.com/'
            style={{ margin: "0 auto", fontSize: "10px" }}
            className='hidden md:flex font-light m-[15px] md:m-[0] relative bottom-[-57px]'
          >
            Created by Kamil Sułgut
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

Footer.messages = ["Footer"];
