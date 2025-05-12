import FeatureCard from "@/ui/FeatureCard";
import Image from "next/image";
import React from "react";

const FibreBusiness = () => {
  const features = [
    "Light, Premium and dedicated fibre options",
    "Tailored network design",
    "Flexible contract terms",
    "24/7 support, monitoring & maintenance",
  ];

  return (
    <section className="w-full max-w-[1040px] mx-auto flex md:flex-row flex-col-reverse gap-[20px] md:gap-[44px] py-[40px] md:py-[80px]">
      <div className="max-w-[500px] h-auto aspect-[500/333]">
        <Image
          src="/images/home/fibre-business.png"
          alt="fibre-to-the-home"
          width={500}
          height={333.74}
          className="w-full h-full rounded-[20px] object-contain"
          priority
        />
      </div>
      <FeatureCard
        subtitle="FIRST CLASS BUSINESS CONNECTIVITY"
        title="Fibre to the Business"
        description="Build your business on the most reliable, scalable, versatile, and cost-effective connective solutions"
        features={features}
        className="w-full max-w-[447px]"
      />
    </section>
  );
};

export default FibreBusiness;
