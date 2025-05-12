import FeatureCard from "@/ui/FeatureCard";
import Subtitle from "@/ui/Subtitle";
import Title from "@/ui/Title";
import Image from "next/image";
import React from "react";

const ConnectivityProducts = () => {
  const features = [
    "Unlimited data, no more data top-ups",
    "Super-Fast speeds that range from 4Mbps to 1 Gbps",
    "Free to user router, Installation & Activation on selected packaged",
    "Save up to R5500 with Volp",
  ];

  return (
    <section className="w-full bg-[#F9F9F9]">
      <div className="w-full max-w-[1040px] mx-auto py-[40px] md:py-[50px]">
        <Title>Discover our connectivity products</Title>
        <Subtitle className="w-full max-w-[804px] mx-auto">
          Get the best connectivity and voice solutions with Vox to suit
          your everyday home or business needs
        </Subtitle>

        <div className="flex md:flex-row flex-col justify-between gap-[20px] md:gap-0 pt-[30px]">
          <FeatureCard
            subtitle="NEXT LEVEL HOME INTERNET"
            title="Fibre to the Home"
            description="Super - Fast, reliable and affordable Internet is now a reality!"
            features={features}
          />
          <div className="w-full md:w-1/2 lg:w-[50%] max-w-[480px] h-auto aspect-[480/332]">
            <Image
              src="/images/home/fibre-home.png"
              alt="fibre-to-the-home"
              width={480}
              height={332}
              className="w-full h-full rounded-[14.745px] object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectivityProducts;
