"use client";

import React, { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { TSwiperImagesData } from "@/images/imagesToSwipper";

interface ICustomSwiper {
  images: TSwiperImagesData;
  alt: string;
}

const CustomSwiper = ({ images, alt }: ICustomSwiper) => {
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
            key={idx}
          >
            <Image
              src={el.src}
              alt={alt}
              height={400}
              quality={70}
              object-fit='cover'
              placeholder='blur'
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default memo(CustomSwiper);
