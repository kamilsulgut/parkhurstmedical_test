"use client";

import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import {
  TSwiperImagesData,
  desktopImagesToSwiper,
  productsPhotosToSwiper,
} from "@/images/imagesToSwipper";

interface ICustomSwiper {
  images: TSwiperImagesData;
}

const CustomSwiper = ({ images }: ICustomSwiper) => {
  return (
    <Swiper
      modules={[A11y, Navigation, Autoplay, Pagination]}
      slidesPerView={1}
      loop
      navigation
      spaceBetween={30}
      autoplay
      style={{
        maxWidth: "80vw",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {images.map((el, idx) => {
        return (
          <SwiperSlide
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            key={el.alt + idx}
          >
            <Image
              src={el.src}
              alt={el.alt}
              width={650}
              height={400}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default memo(CustomSwiper);
