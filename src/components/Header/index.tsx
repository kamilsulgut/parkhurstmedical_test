import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Logo from "@/icons/Logo";
import { useRouter } from "next/router";
import Hambuger from "@/icons/Hambuger";
import { CloseIcon } from "@/icons/CloseIcon";
import LanguageSwitcher from "./languageSwitcher";
import { headerElements } from "./headerElemetns";

const Header = () => {
  const t = useTranslations("Header");
  const { locale, route } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const createNavBarItems = () => {
    return headerElements.map((el) => {
      if (el.href === "/") {
        return (
          <Link
            key={el.id}
            href={`/${locale === "pl" ? "" : "en"}`}
            className={`text-3xl lg:text-2xl text-center navElement py-[20px] ${
              el.href === route ? "text-[var(--text-secondary)]" : ""
            }`}
          >
            {t(el.translationCode)}
          </Link>
        );
      }
      return (
        <Link
          key={el.id}
          href={`${locale === "pl" ? "" : "/en"}${el.href}`}
          className={`text-3xl lg:text-2xl text-center navElement py-[20px] ${
            el.href === route ? "text-[var(--text-secondary)]" : ""
          }`}
        >
          {t(el.translationCode)}
        </Link>
      );
    });
  };
  return (
    <header
      className='sticky top-0 block z-10 px-[10px] max-w-[1400px]'
      style={{ margin: "0 auto" }}
    >
      <nav className='flex items-center justify-between uppercase'>
        <Link
          className='hidden md:flex justify-start w-full text-xl'
          style={{ width: "12rem" }}
          href={`/${locale === "pl" ? "" : "en"}`}
        >
          <Logo />
        </Link>

        <div className='hidden md:flex justify-end space-x-5 w-full'>
          {createNavBarItems()}
          <LanguageSwitcher />
        </div>

        {/*Mobile menu*/}
        <div className='mobileNav min-h-[60px] bg-[var(--background)]'>
          {/*Hamburger button*/}

          <button
            data-collapse-toggle='navbar-default'
            type='button'
            className='md:hidden absolute top-[15px] right-[10px] p-[10px] items-center p-2 w-10 h-10 justify-center text-sm rounded-lg z-10'
            aria-controls='navbar-default'
            aria-expanded='false'
            onClick={() => toggleIsOpen()}
          >
            {isOpen ? <CloseIcon /> : <Hambuger />}
          </button>

          <div
            className={
              isOpen
                ? "md:hidden absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-start w-full h-screen bg-[var(--background)] ease-in-out duration-300"
                : "md:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-start w-full h-screen bg-[var(--background)] ease-in-out duration-300"
            }
          >
            <div className='flex flex-col justify-start items-center mt-[50px]'>
              {createNavBarItems()}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.messages = ["Header"];

export default Header;
