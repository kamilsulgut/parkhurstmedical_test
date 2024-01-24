import BoxImage from "@/components/BoxImage";
import { StaticImageData } from "next/image";

interface CardProps {
  src: StaticImageData;
  alt: string;
  cardTitle: string;
  cardDescription: string;
  className?: string;
}

export const Card = ({
  src,
  alt,
  cardTitle,
  cardDescription,
  className,
}: CardProps) => {
  return (
    <div
      className={`flex flex-col bg-[var(--background-card)] rounded-xl ${
        className ? className : ""
      }`}
    >
      <BoxImage
        src={src}
        alt={alt}
      />
      <div className='m-5 '>
        <h2 className='text-3xl text-[var(--text-card)] font-medium leading-relaxed'>
          {cardTitle}
        </h2>
        <p className='text-xl mt-2 text-[var(--text-card)]'>
          {cardDescription}
        </p>
      </div>
    </div>
  );
};
