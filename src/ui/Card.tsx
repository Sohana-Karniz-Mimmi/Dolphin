// components/Card.tsx
import React from "react";
import { CardProps } from "@/types/card";

const Card: React.FC<CardProps> = ({
  data,
  icon,
  iconColor = "text-white",
  className,
}) => {
  return (
    <div
      className={`flex flex-col p-[30px] md:p-[50px] w-full max-w-[392px] h-[504px] rounded-[10px] ${className}`}
    >
      {/* Icon */}
      <div className="flex justify-center">{icon}</div>

      <p className="text-center text-[16px] font-normal leading-normal pt-[14px]">
        {data.title}
      </p>

      <h1 className="text-center text-[24px] md:text-[38px] font-bold leading-normal">
        {data.price}
      </h1>
      <p className="text-center text-[16px] font-normal leading-normal">
        {data.data}
      </p>

      <ul className="flex flex-col gap-[21px] w-full pt-[14px]">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className={iconColor}
            >
              <path
                d="M17.1666 5L7.99992 14.1667L3.83325 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[16px] font-normal">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <button className="text-[16px] font-normal leading-normal mt-[21px] cursor-pointer text-start">
        {data.button}
      </button>
    </div>
  );
};

export default Card;
