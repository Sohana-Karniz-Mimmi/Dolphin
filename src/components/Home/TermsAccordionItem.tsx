"use client";

import type React from "react";

import { useState } from "react";
import { Minus } from "lucide-react";

interface TermsAccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  isLast?: boolean;
  isFirst?: boolean;
}

const TermsAccordionItem = ({
  question,
  answer,
  isFirst,
  isLast,
}: TermsAccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={!isLast ? "border-b border-[#CFCFCF]" : ""}>
      <button
        className={`flex w-full items-center justify-between text-left focus:outline-none ${
          isFirst ? "pt-0" : "pt-[24px]"
        } ${isLast ? "pb-0" : "pb-[24px]"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-[15px] md:text-[22px] font-semibold text-main">
          {question}
        </h3>
        {isOpen ? (
          <Minus className="h-5 w-5 text-main" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M15 10V20M10 15H20M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 pb-[20px]" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-main leading-relaxed">
          {typeof answer === "string" ? (
            <p className="text-[14px] md:text-[17px]">{answer}</p>
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAccordionItem;
