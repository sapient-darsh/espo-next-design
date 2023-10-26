import React from "react";
import Button from "../ui/button";
import CheckLinear from "../assets/svg/checkLinear";

const PremiumCard = () => {
  return (
    <div className="border-dark border rounded-2xl px-[16px] py-[24px] max-w-[280px] font-slussen">
      <p className="text-dark text-[18px] font-medium text-left mb-[24px]">
        3 Months Plan
      </p>
      <h1 className="text-dark text-[32px] text-left font-normal mb-[16px]">
        $29 <span className="text-[#6B6775] text-[18px]"> /month</span>
      </h1>
      <p className="text-[#ABABAB] text-[16px] font-normal text-left pb-[24px] border-b border-[black]">
        All the basics for businesses that are just getting started.
      </p>
      <div className="min-h-[267px] h-fit">
        <div className="flex text-left gap-2.5 items-center mt-[18px]">
          <CheckLinear color="#8390F5" />
          <p>Wide range of workout video</p>
        </div>
      </div>
      <Button className="rounded-2xl" block variant="outlined">
        Go Premium
      </Button>

      {/* <Btn /> */}
    </div>
  );
};

export default PremiumCard;
