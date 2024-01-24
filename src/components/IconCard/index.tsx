"use client";

interface IIconCard {
  icon: JSX.Element;
  children: React.ReactNode;
  className?: string;
}

export const IconCard = ({ icon, children, className }: IIconCard) => {
  return (
    <div
      className={`flex flex-col py-4 items-center text-center bg-[var(--background-card)] mb-2 w-[100%] ${
        className ? className : ""
      }`}
    >
      {icon}
      <p className=' mt-1 text-2xl mt-2 text-[var(--text-card)] px-1 '>
        {children}
      </p>
    </div>
  );
};
