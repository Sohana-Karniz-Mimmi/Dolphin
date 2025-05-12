import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className = "" }) => {
  return (
    <h3
      className={`text-[15px] md:text-[22px] font-semibold text-center text-main ${className}`}
    >
      {children}
    </h3>
  );
};

export default Subtitle;
