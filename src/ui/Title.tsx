import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  return (
    <h2
      className={` text-[30px] md:text-[48px] font-extrabold text-main text-center leading-normal ${className}`}
    >
      {children}
    </h2>
  );
};

export default Title;
