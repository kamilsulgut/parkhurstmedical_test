import { StaticImageData } from "next/image";

import productPhoto1 from "./productPhoto1.jpeg";
import productPhoto2 from "./productPhoto2.jpeg";
import productPhoto3 from "./productPhoto3.jpeg";
import productPhoto4 from "./productPhoto4.jpeg";
import productPhoto5 from "./productPhoto5.jpeg";
import productPhoto6 from "./productPhoto6.jpg";

export type TSwiperImagesData = {
  src: StaticImageData;
}[];

export const productsPhotosToSwiper: TSwiperImagesData = [
  {
    src: productPhoto1,
  },
  {
    src: productPhoto2,
  },
  {
    src: productPhoto3,
  },
  {
    src: productPhoto4,
  },
  {
    src: productPhoto5,
  },
  {
    src: productPhoto6,
  },
];
