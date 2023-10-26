import DollarBold from "@/components/assets/svg/dollarBold";
import LocationBold from "@/components/assets/svg/locationBold";
import StarBold from "@/components/assets/svg/starBold";
import SuitcaseBold from "@/components/assets/svg/suitcaseBold";
import FavoriteHeart from "@/components/template/favoriteHeart";
import Tag from "@/components/ui/tag";
import Image from "next/image";
import React, { useState } from "react";

const tagsData = [
  { label: "GENERAL LABOURER" },
  { label: "WEDDING" },
  { label: "MUSIC" },
  { label: "+10" },
];

const DiscoverCardTalent = () => {
  const [heartClick, setHeartClick] = useState(false);
  return (
    <div className="flex gap-3 sm:gap-6 md:gap-8 flex-col sm:flex-row  w-full items-center">
      <div className="w-full sm:w-[200px]">
        <div className=" h-[224px]  sm:mb-0  w-full sm:w-[200px] rounded-lg relative">
          <Image
            src="https://healcap-bucket.s3.ap-south-1.amazonaws.com/content/images/gallery/81710041263447758369.pexels-photo-262047.jpeg"
            className=" rounded-lg w-full h-full object-cover"
            alt=""
            priority
            width={200}
            height={224}
          />
          <div className=" w-full sm:w-[200px] flex items-center justify-between sm:justify-center absolute top-3.5 left-[13px] sm:left-[-62px]">
            <FavoriteHeart
              touch={heartClick}
              onClick={() => setHeartClick(!heartClick)}
            />
            <button className="hh absolute right-[25px] flex items-center justify-center w-[70px]  h-[40px] sm:h-[48px] bg-dark rounded-lg p-[10px]">
              <div className="flex  items-center">
                <p className="text-[white] text-[14px] font-normal ">5.0</p>
                <div className="ml-[6px] ">
                  <StarBold color="#E3A75A" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full font-slussen">
        <div className="flex justify-between text-left mb-[8px] sm:mb-[16px] items-center ">
          <p className=" text-[20px] sm:text-[24px] text-dark font-bold ">
            Cameron Williamson
          </p>

          <div className="hidden sm:flex ">
            <p className="text-dark text-[16px] font-normal btn-p">5.0</p>
            <div className="ml-[6px] btn-p">
              <StarBold color="#E3A75A" />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-row gap-4 md:gap-6  mb-[16px]">
          <div className="flex items-center">
            <SuitcaseBold color="#4FBB92" />
            <p className="ml-[8px] text-[14px] text-dark md:text-[16px]">
              Brand Ambassador
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
        <p className=" btn-p p-info  text-dark text-left text-[16px]  mb-[16px] sm:mb-[24px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor labore et dolore magna aliqua. Ut enim ad nostrud.
        </p>
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
      </div>
    </div>
  );
};

export default DiscoverCardTalent;
