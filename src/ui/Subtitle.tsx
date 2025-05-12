import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className = "" }) => {
  return (
    <p
      className={`text-[15px] md:text-[22px] font-semibold text-center text-main ${className}`}
    >
      {children}
    </p>
  );
};

export default Subtitle;
