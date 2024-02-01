import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const { route, locale } = useRouter();

  return (
    <>
      <Link
        className={`hidden md:flex text-2xl m-[0] ${
          locale === "pl" ? "text-[var(--text-secondary)]" : ""
        }`}
        href={`${route}`}
        locale='pl'
      >
        PL
      </Link>
      <p className='hidden md:flex text-3xl m-[0] relative left-[-15px]'>/</p>
      <Link
        className={`hidden md:flex text-2xl m-[0]  relative left-[-30px] ${
          locale === "en" ? "text-[var(--text-secondary)]" : ""
        }`}
        href={`${route}`}
        locale='en'
      >
        EN
      </Link>
    </>
  );
};

export default LanguageSwitcher;
