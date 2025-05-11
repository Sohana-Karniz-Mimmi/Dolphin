import React from "react";
import Image from "next/image";

const BrowseTheRange = () => {
  const categories = [
    {
      image: "/images/browse-the-range/dining.png",
      title: "Dining",
    },
    {
      image: "/images/browse-the-range/living.png",
      title: "Living",
    },
    {
      image: "/images/browse-the-range/bedroom.png",
      title: "Bedroom",
    },
  ];

  return (
    <section className="py-14 md:py-[56px] w-full flex justify-center">
      <div className="w-full max-w-[1183px] flex flex-col items-center">
        {/* Title */}
        <h2 className="text-[24px] md:text-[32px] font-bold text-center">
          Browse The Range
        </h2>

        {/* Description */}
        <p className="text-gray-1 text-[16px] md:text-[20px] text-center max-w-full md:max-w-[559px] pb-[48px] md:pb-[62px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Category Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-[16px] sm:gap-[19px]">
          {categories.map((category, index) => (
            <div key={index} className="cursor-pointer">
              <div className="relative w-full h-[300px] sm:h-[480px] rounded-[10px] bg-gray-900 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center mt-[16px] md:mt-[30px] text-[18px] md:text-[24px] font-semibold">
                {category.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
