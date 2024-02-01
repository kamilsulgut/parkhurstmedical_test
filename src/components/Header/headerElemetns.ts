interface IHeaderelements {
  id: number;
  href: string;
  translationCode: "home" | "about" | "contact" | "products";
}

export const headerElements: IHeaderelements[] = [
  {
    id: 1,
    href: "/",
    translationCode: "home",
  },
  {
    id: 2,
    href: "/about",
    translationCode: "about",
  },
  {
    id: 3,
    href: "/products",
    translationCode: "products",
  },
  {
    id: 4,
    href: "/contact",
    translationCode: "contact",
  },
];
