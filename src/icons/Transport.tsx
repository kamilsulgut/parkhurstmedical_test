import React, { SVGProps } from "react";

export const Transport = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      id='Icons'
      x={0}
      y={0}
      viewBox='0 0 32 32'
      width={128}
      height={128}
      fill='#404e4d'
      {...props}
    >
      <style>
        {
          ".st1{fill:none;stroke:#404e4d;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10}"
        }
      </style>
      <path
        d='M2 8h17v15h-6'
        className='st1'
      />
      <circle
        cx={24}
        cy={23}
        r={2}
        className='st1'
      />
      <circle
        cx={8}
        cy={23}
        r={2}
        className='st1'
      />
      <path
        d='M19 23V12h6l4 5v6h-3M4 12h9M2 16h9'
        className='st1'
      />
    </svg>
  );
};
