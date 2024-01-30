"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className='w-full section-spacer py-[60px] px-[10px] md:px-[40px] flex min-h-[100px]'>
      <div className='flex flex-col basis-1/4 '>
        <p>LOGO</p>
      </div>
      <div className='flex flex-col md:flex-row basis-3/4 flex-wrap'>
        <div className='flex flex-col md:basis-1/3'>
          <p className='font-bold'>{t("address")}</p>
          <p>{t("companyName")}</p>
          <p>{t("companyStreet")}</p>
          <p>{t("companyCity")}</p>
        </div>
        <div className='flex flex-col md:basis-1/3 my-[10px] md:m-[0]'>
          <p className='font-bold'>{t("telephone")}</p>
          <p>
            Ernest:
            <a href='tel:+48731973183'>+48 731 973 183</a>
          </p>
          <p>
            Marcin:
            <a href='tel:+48793932693'>+48 793 932 693</a>
          </p>
          <p>
            Seth:
            <a href='tel:+27769118919'>+27 76 911 89 19</a>
          </p>
          <p>
            Marco:
            <a href='tel:+48793932693'>+27 82 953 4753</a>
          </p>
        </div>
        <div className='flex flex-col md:basis-1/3 mt-[10px] md:m-[0]'>
          <p className='font-bold'>{t("contact")}</p>
          <p>
            <a href='mailto:biuro@parkhurstmedical.pl'>
              biuro@parkhurstmedical.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

Footer.messages = ["Footer"];
