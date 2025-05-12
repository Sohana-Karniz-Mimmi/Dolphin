// components/FeatureSection.tsx

import React from "react";
import Button from "./Button";
import PhoneIcon from "./Icons/Phone";

interface FeatureCardProps {
  subtitle: string;
  title: string;
  description: string;
  features: string[];
  className?:string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  subtitle,
  title,
  description,
  features,
  className
}) => {
  return (
    <div className={`${className}`}>
      <p className="text-secondary text-[16px] text-center md:text-start uppercase">{subtitle}</p>
      <h2 className="text-[24px] md:text-[38px] font-semibold text-main py-[8px] text-center md:text-start">
        {title}
      </h2>
      <p className="text-[16px] text-primary text-center md:text-start">{description}</p>
      <ul className="flex flex-col gap-[21px] w-full py-[16px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M16.6666 5.5L7.49992 14.6667L3.33325 10.5"
                stroke="#333333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[16px] font-normal">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className="w-full mx-auto md:ml-0 max-w-[165px] h-[52px]" variant="primary" icon={<PhoneIcon strokeColor="white" />} >Contact Us</Button>
    </div>
  );
};

export default FeatureCard;
