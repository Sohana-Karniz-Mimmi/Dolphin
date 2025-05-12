import Button from "@/ui/Button";
import Card from "@/ui/Card";
import { PrimaryTowerIcon } from "@/ui/Icons/PrimaryTower";
import { SecondaryTowerIcon } from "@/ui/Icons/SecondaryTower";
import Subtitle from "@/ui/Subtitle";
import Title from "@/ui/Title";
import React from "react";

const familyEssentials = {
  title: "Family Essentials",
  price: "ZiG 1,054",
  data: "100 GB",
  features: [
    "Up to 50 Mbps",
    "15 Days + 15 Days rollover",
    "Includes 100GB data",
    "Additional modem and equipment",
  ],
  button: "see more",
};
const comeAlive = {
  title: "Come Alive",
  price: "ZiG 1,581",
  data: "150 GB",
  features: [
    "Up to 50 Mbps",
    "15 Days + 15 Days rollover",
    "Includes 100GB data",
    "Additional modem and equipment",
  ],
  button: "see more",
};

const Solution = () => {
  return (
    <section className="py-[40px] md:py-[80px]">
      <Subtitle>Experience the Best of Home Connectivity </Subtitle>
      <Title className="w-full max-w-[598px] mx-auto">
        Fibre, LTE, and Hosted VoIP Solution
      </Title>

      <div className="flex justify-center md:flex-row flex-col items-center gap-[24px] md:pt-[50px] md:pb-[40px] py-[30px]">
        <Button className="w-full max-w-[154px] h-[51px]" variant="primary">
          Managed LTE
        </Button>
        <Button className="w-full max-w-[154px] h-[51px]" variant="outline">
          Managed Fiber
        </Button>
        <Button className="w-full max-w-[154px] h-[51px]" variant="outline">
          Managed VolP
        </Button>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-center gap-[21px]">
        <Card
          icon={<SecondaryTowerIcon />}
          className="bg-primary text-white"
          data={familyEssentials}
        />
        <Card
          icon={<PrimaryTowerIcon />}
          className="bg-secondary text-black"
          data={comeAlive}
          iconColor="black"
        />
      </div>
    </section>
  );
};

export default Solution;
