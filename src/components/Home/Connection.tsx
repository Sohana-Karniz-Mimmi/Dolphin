import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import React from "react";

const Connection = () => {
  const features = [
    "Uncapped and Capped packages",
    "SIM only or SIM and Router Purchase options ",
    "Fiber-like Speeds",
  ];

  return (
    <div className="w-full max-w-[1284px] mx-auto flex md:flex-row flex-col justify-between gap-[20px] md:gap-0 pt-[30px]">
      <FeatureCard
        subtitle="RELIABLE HOME CONNECTION"
        title="FAST AND SMOOTH CONNECTION"
        description="Dolphin Fixed LTE wireless internet get you connected to fibre-like speeds without waiting for a fixed-line"
        features={features}
        className="w-full max-w-[636px]"
      />
      <div className="w-full md:w-1/2 lg:w-[50%] max-w-[579px] h-auto aspect-[579/399]">
        <Image
          src="/images/home/connection.png"
          alt="fibre-to-the-home"
          width={579}
          height={399}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Connection;
