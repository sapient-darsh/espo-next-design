import CalenderBold from "@/components/assets/svg/calenderBold";
import DollarBold from "@/components/assets/svg/dollarBold";
import LocationBold from "@/components/assets/svg/locationBold";
import Tag from "@/components/ui/tag";
import React, { useState } from "react";

const tagsData = [
  { label: "GENERAL LABOURER" },
  { label: "WEDDING" },
  { label: "MUSIC" },
  { label: "+10" },
];

const JobPostCard = () => {
  return (
    <div className="font-slussen flex gap-3 sm:gap-6 md:gap-8 flex-col sm:flex-row  w-full items-center">
      <div className="w-full">
        <div className="flex justify-between text-left mb-[8px] sm:mb-[16px] items-center ">
          <p className=" text-[17px] xs:text-[20px] sm:text-[24px] text-[#0E0D0D] font-bold ">
            Audio-Visual Technician{" "}
          </p>

          <div className="flex gap-[8px] items-center">
            <p className="text-[16px] text-[#0E0D0D]">Hiring</p>
            <div className="w-[12px] h-[12px] bg-[#4FBB92]"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-row gap-4 md:gap-6  mb-[12px] sm:mb-[16px]">
          <div className="flex items-center">
            <CalenderBold color="#4FBB92" />
            <p className="ml-[8px] text-[14px] text-dark md:text-[16px]">
              10.03.23
            </p>
          </div>
          <div className="flex items-center">
            <LocationBold color="#4BA0D7" />
            <p className="ml-[8px] text-[14px] text-dark md:text-[16px]">
              Las Vegas, NV, USA
            </p>
          </div>
          <div className="flex items-center">
            <DollarBold color="#8390F5" />
            <p className="ml-[8px] text-[14px] text-dark md:text-[16px]">
              $15/h
            </p>
          </div>
        </div>
        <p className="p-info  text-[#0E0D0D] text-left text-[14px] sm:text-[16px]  mb-[16px] sm:mb-[24px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor labore et dolore magna aliqua. Ut enim ad nostrud.
        </p>

        <div className="flex sm:flex-row flex-col sm:justify-between sm:gap-0  gap-4 items-center">
          <div className="flex flex-wrap items-center gap-4">
            {tagsData?.map((tag, index) => {
              return (
                <Tag
                  key={index}
                  label={tag?.label}
                  color="#0E0D0D"
                  bgColor="#F3F3F3"
                />
              );
            })}
          </div>
          <p className="text-[12px] text-[#0E0D0D]  font-semibold">
            POSTED 1H AGO
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
