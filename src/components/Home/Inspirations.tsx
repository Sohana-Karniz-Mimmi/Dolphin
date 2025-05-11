"use client";
import Button from "@/ui/Button";
import { DashIcon } from "@/ui/icons/DashIcon";
import Image from "next/image";
import { useState } from "react";

export default function Inspirations() {
  const [firstImageIndex, setFirstImageIndex] = useState(0);
  const [secondImageIndex, setSecondImageIndex] = useState(0);

  // First image
  const firstImages = [
    {
      id: 1,
      number: "01",
      roomType: "Bed Room",
      title: "Inner Peace",
      image: "/images/inspirations/bed-room.png",
    },
    {
      id: 2,
      number: "02",
      roomType: "Living Room",
      title: "Cozy Corner",
      image: "/images/inspirations/bed-room2.png",
    },
    {
      id: 3,
      number: "03",
      roomType: "Kitchen",
      title: "Culinary Haven",
      image: "/images/inspirations/bed-room.png",
    },
    {
      id: 4,
      number: "04",
      roomType: "Bathroom",
      title: "Serene Spa",
      image: "/images/inspirations/bed-room2.png",
    },
  ];

  // Second image
  const secondImages = [
    {
      id: 1,
      image: "/images/inspirations/bed-room2.png",
    },
    {
      id: 2,
      image: "/images/inspirations/bed-room.png",
    },
    {
      id: 3,
      image: "/images/inspirations/bed-room2.png",
    },
    {
      id: 4,
      image: "/images/inspirations/bed-room.png",
    },
  ];

  //  navigate first image
  const navigateFirstImage = () => {
    setFirstImageIndex((prev) =>
      prev === firstImages.length - 1 ? 0 : prev + 1
    );
  };

  //  navigate second image
  const navigateSecondImage = () => {
    setSecondImageIndex((prev) =>
      prev === secondImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-[20px] md:py-[34px] lg:py-[44px] px-4 md:px-8 lg:pl-[100px] w-full bg-[#FCF8F3] mt-[30px] mb-[30px] md:mt-[40px] md:mb-[40px] lg:mt-[69px] lg:mb-[67px] min-h-[500px] md:min-h-[600px] lg:h-[670px] flex flex-col lg:flex-row items-center gap-[20px] md:gap-[30px] lg:gap-[42px] overflow-hidden">
      {/*Content */}
      <div className="w-full lg:w-auto">
        <h2 className="text-gray-1 text-[28px] md:text-[36px] lg:text-[40px] font-bold leading-[120%] w-full md:w-[380px] lg:w-[422px]">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-gray-2 text-[14px] md:text-[14px] font-medium leading-[150%] w-full md:max-w-[320px] lg:max-w-[368px] mt-[5px] md:mt-[7px] mb-[15px] md:mb-[20px] lg:mb-[25px]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Button className="max-w-[176px] h-[48px] font-semibold leading-[150%]">
          Explore More
        </Button>
      </div>

      {/* Images - Desktop and Tablet */}
      <div className="hidden md:flex flex-1 gap-[12px] md:gap-[24px] mt-[16px] md:mt-0">
        {/* First Image */}
        <div className="relative">
          <Image
            src={
              firstImages[firstImageIndex].image ||
              "/images/inspirations/bed-room.png"
            }
            alt={firstImages[firstImageIndex].roomType}
            width={404}
            height={582}
            className="w-[280px] md:w-[320px] lg:w-[404px] h-auto md:h-[450px] lg:h-[582px] object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-[24px] left-[24px] w-[180px] md:w-[200px] lg:w-[217px] h-auto md:h-[110px] lg:h-[130px] bg-[rgba(255,255,255,0.72)] backdrop-blur-[1.5px] pt-[20px] md:pt-[25px] lg:pt-[32px] pr-[15px] md:pr-[17px] pb-[20px] md:pb-[25px] lg:pb-[32px] pl-[20px] md:pl-[25px] lg:pl-[32px]">
            <div className="flex items-center gap-2">
              <span className="text-gray-2 text-[14px] md:text-[16px] font-medium">
                {firstImages[firstImageIndex].number}
              </span>
              <DashIcon />
              <span className="text-gray-2 text-[14px] md:text-[16px] font-medium">
                {firstImages[firstImageIndex].roomType}
              </span>
            </div>
            <p className="text-gray-1 text-[16px] md:text-[18px] lg:text-[28px] mt-[6px] md:mt-[8px] font-semibold leading-[120%] truncate whitespace-nowrap overflow-hidden">
              {firstImages[firstImageIndex].title}
            </p>
          </div>
          <button
            onClick={navigateFirstImage}
            className="absolute bottom-[24px] right-[24px] md:right-[70px] lg:right-[116px] w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-primary flex items-center justify-center hover:bg-[#a17a29] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12H3M21 12L15 6M21 12L15 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Second Image */}
        <div className="relative">
          <Image
            src={
              secondImages[secondImageIndex].image ||
              "/images/inspirations/bed-room2.png" ||
              "/placeholder.svg"
            }
            alt="room-inspiration"
            width={372}
            height={486}
            className="w-[240px] md:w-[280px] lg:w-[372px] h-auto max-h-[350px] md:max-h-[400px] lg:max-h-[486px] object-cover transition-opacity duration-500"
          />
          <button
            onClick={navigateSecondImage}
            className="absolute bottom-[180px] md:bottom-[220px] lg:bottom-[270px] -right-[15px] md:-right-[20px] lg:-right-[23px] w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.00006 5L16.0001 12L9.00006 19"
                stroke="#B88E2F"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots Navigation for second image */}
          <div className="absolute bottom-[20px] md:bottom-[30px] lg:bottom-[40px] flex gap-3 md:gap-4 lg:gap-5">
            {secondImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSecondImageIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                  secondImageIndex === index
                    ? "bg-primary border border-primary"
                    : "bg-white border border-gray-300"
                }`}
                aria-label={`go-to-slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Images - Mobile Only */}
      <div className="flex md:hidden flex-col w-full gap-[24px] mt-[16px]">
        {/* First Image */}
        <div className="relative w-full">
          <Image
            src={
              firstImages[firstImageIndex].image ||
              "/images/inspirations/bed-room.png" ||
              "/placeholder.svg"
            }
            alt={firstImages[firstImageIndex].roomType}
            width={404}
            height={582}
            className="w-full h-[350px] object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-[24px] left-[24px] w-[180px] h-auto bg-[rgba(255,255,255,0.72)] backdrop-blur-[1.5px] pt-[20px] pr-[15px] pb-[20px] pl-[20px]">
            <div className="flex items-center gap-2">
              <span className="text-gray-2 text-[14px] font-medium">
                {firstImages[firstImageIndex].number}
              </span>
              <DashIcon />
              <span className="text-gray-2 text-[14px] font-medium">
                {firstImages[firstImageIndex].roomType}
              </span>
            </div>
            <p className="text-gray-1 text-[16px] mt-[6px] font-semibold leading-[120%] truncate whitespace-nowrap overflow-hidden">
              {firstImages[firstImageIndex].title}
            </p>
          </div>
          <button
            onClick={navigateFirstImage}
            className="absolute bottom-[24px] right-[24px] w-[40px] h-[40px] bg-primary flex items-center justify-center hover:bg-[#a17a29] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12H3M21 12L15 6M21 12L15 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Second Image */}
        <div className="relative w-full">
          <Image
            src={
              secondImages[secondImageIndex].image ||
              "/images/inspirations/bed-room2.png" ||
              "/placeholder.svg"
            }
            alt="room-inspiration"
            width={372}
            height={486}
            className="w-full h-[300px] object-cover transition-opacity duration-500"
          />
          <button
            onClick={navigateSecondImage}
            className="absolute top-1/2 -translate-y-1/2 -right-[15px] w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9.00006 5L16.0001 12L9.00006 19"
                stroke="#B88E2F"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dots Navigation for second image */}
          <div className="absolute bottom-[20px] flex gap-[12px] left-1/2 -translate-x-1/2">
            {secondImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setSecondImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  secondImageIndex === index
                    ? "bg-primary border border-primary"
                    : "bg-white border border-gray-300"
                }`}
                aria-label={`go-to-slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
