"use client";

import {
  PlaceholderValue,
  StaticImageData,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { memo } from "react";

type BoxImageProps = {
  src: string | StaticImageData;
  alt: string;
  width?: `${number}` | number;
  height?: `${number}` | number;
  placeholder?: PlaceholderValue;
  fill?: boolean;
  quality?: number | `${number}` | undefined;
  sizes?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  className?: string;
  borderRadius?: string;
};

const BoxImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  placeholder,
  quality = 100,
  sizes,
  objectFit = "fill",
  className,
  borderRadius,
}: BoxImageProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      placeholder={placeholder}
      quality={quality}
      fill={fill}
      sizes={sizes ? sizes : ""}
      width={width}
      height={height}
      style={
        borderRadius
          ? {
              objectFit: objectFit,
              borderRadius: borderRadius,
            }
          : { borderTopLeftRadius: "0.6rem", borderTopRightRadius: "0.6rem" }
      }
      className={className ? className : ""}
    />
  );
};

export default memo(BoxImage);
