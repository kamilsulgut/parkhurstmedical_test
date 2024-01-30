import { StaticImageData } from "next/image";

import desktopPhoto1 from "./dekstopPhoto_1.jpg";
import desktopPhoto2 from "./desktopPhoto_2.jpg";
import desktopPhoto3 from "./desktopPhoto_3.jpg";
import desktopPhoto4 from "./desktopPhoto_4.jpg";
import desktopPhoto5 from "./desktopPhoto5.jpg";
import desktopPhoto6 from "./desktopPhoto6.jpg";
import desktopPhoto7 from "./desktopPhoto7.jpg";
import desktopPhoto8 from "./desktopPhoto8.jpg";
import desktopPhoto9 from "./desktopPhoto9.jpg";
import desktopPhoto10 from "./desktopPhoto10.jpg";

import productPhoto1 from "./productPhoto1.jpg";
import productPhoto2 from "./productPhoto2.jpg";
import productPhoto3 from "./productPhoto3.jpg";
import productPhoto4 from "./productPhoto4.jpeg";

export type TSwiperImagesData = {
  src: StaticImageData;
  alt: string;
}[];

export const desktopImagesToSwiper: TSwiperImagesData = [
  {
    src: desktopPhoto1,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto2,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach bezpieczeństwo",
  },
  {
    src: desktopPhoto3,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto4,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto5,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto6,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto7,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto8,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto9,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
  {
    src: desktopPhoto10,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach",
  },
];

export const productsPhotosToSwiper: TSwiperImagesData = [
  {
    src: productPhoto1,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach produkty najlepszej jakości",
  },
  {
    src: productPhoto2,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach produkty najlepszej jakości",
  },
  {
    src: productPhoto3,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach produkty najlepszej jakości",
  },
  {
    src: productPhoto4,
    alt: "medyczna marihuana Parkhurst Medical terapia oparta na badaniach produkty najlepszej jakości",
  },
];
