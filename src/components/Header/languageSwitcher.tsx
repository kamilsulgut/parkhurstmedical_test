import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const { route, locale } = useRouter();

  return (
    <div className='flex'>
      <Link
        className={`flex text-xl lg:text-2xl m-[0] ${
          locale === "pl" ? "text-[var(--text-secondary)]" : ""
        }`}
        href={`${route}`}
        locale='pl'
      >
        PL
      </Link>
      <p className='flex text-2xl lg:text-3xl mx-[5px] '>/</p>
      <Link
        className={`flex text-xl lg:text-2xl m-[0]   ${
          locale === "en" ? "text-[var(--text-secondary)]" : ""
        }`}
        href={`${route}`}
        locale='en'
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
