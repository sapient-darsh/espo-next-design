import Image from "next/image";
import React from "react";
import StarBold from "../assets/svg/starBold";

const PersonCard = (props) => {
  const { image, title, subTitle, rating } = props;
  return (
    <div className="p-5 font-slussen">
      <div className="w-full border border-[black] rounded-lg  p-[24px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="rounded-lg w-[56px] mr-[16px]">
              <Image
                className="border rounded-lg w-[56px] h-[56px] object-contain"
                alt=""
                src={image}
                width={56}
                height={56}
              />
            </div>
            <div className="text-left">
              <p className="text-[16px] text-[#0E0D0D] font-semibold mb-[4px]">
                {title}
              </p>
              <p className="text-[12px] text-[#0E0D0D] font-normal">
                {subTitle}
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="text-[#0E0D0D] text-[16px] font-normal">{rating}</p>
            <div className="ml-[10px]">
              <StarBold color="#E3A75A" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
