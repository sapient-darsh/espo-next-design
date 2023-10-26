import CalenderBold from "@/components/assets/svg/calenderBold";
import LocationBold from "@/components/assets/svg/locationBold";
import StarBold from "@/components/assets/svg/starBold";
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

const DiscoverCardEvent = () => {
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
          <div className="abc w-full sm:w-[200px] flex items-center justify-between sm:justify-center absolute top-3.5 left-[13px] sm:left-[-62px]">
            <FavoriteHeart
              touch={heartClick}
              onClick={() => setHeartClick(!heartClick)}
            />
          </div>
        </div>
      </div>
      <div className="w-full font-slussen">
        <div className="flex justify-between text-left mb-[8px] sm:mb-[16px] items-center ">
          <p className=" text-[20px] sm:text-[24px] text-dark font-bold ">
            Health and Harmony Expo
          </p>
        </div>
        <div className="flex flex-wrap sm:flex-row gap-4 md:gap-6  mb-[16px]">
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

export default DiscoverCardEvent;
