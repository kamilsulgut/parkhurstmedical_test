import Link from "next/link";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const { route, locale } = useRouter();

  return (
    <div className='flex'>
      <Link
        className={`flex text-3xl lg:text-2xl m-[0] py-[20px] ${
          locale === "pl" ? "text-[var(--text-secondary)]" : ""
        }`}
        href={`${route}`}
        locale='pl'
      >
        PL
      </Link>
      <p className='flex text-4xl lg:text-3xl mx-[5px] py-[20px]'>/</p>
      <Link
        className={`flex text-3xl lg:text-2xl m-[0] py-[20px]  ${
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
