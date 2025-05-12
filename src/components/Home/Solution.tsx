import Button from "@/ui/Button";
import Subtitle from "@/ui/Subtitle";
import Title from "@/ui/Title";
import React from "react";

const Solution = () => {
  return (
    <section className="py-[40px] md:py-[80px]">
      <Subtitle>Experience the Best of Home Connectivity </Subtitle>
      <Title className="w-full max-w-[598px] mx-auto">
        Fibre, LTE, and Hosted VoIP Solution
      </Title>

      <div className="flex justify-center md:flex-row flex-col items-center gap-[24px] md:pt-[50px] md:pb-[40px] py-[30px]">
        <Button className="w-full max-w-[154px] h-[51px]" variant="primary">Managed LTE</Button>
        <Button className="w-full max-w-[154px] h-[51px]" variant="outline">Managed Fiber</Button>
        <Button className="w-full max-w-[154px] h-[51px]" variant="outline">Managed VolP</Button>
      </div>
    </section>
  );
};

export default Solution;
