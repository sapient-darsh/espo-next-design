import React, { useState } from "react";
import StarBold from "../assets/svg/starBold";
import Image from "next/image";

const ReviewDetailsBanner = (props) => {
  const { image, user, userDescription, description, rating, date } = props;
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="font-slussen flex gap-3 sm:gap-4">
      <div className="rounded-lg w-[56px] mr-[16px]">
        <Image
          className="rounded-lg w-[48px] sm:w-[56px]  h-[48px] sm:h-[56px] border object-contain"
          alt=""
          src={image}
          width={56}
          height={56}
        />
      </div>
      <div className="w-full text-left">
        <div className="flex mb-[16px] justify-between">
          <div>
            <p className="text-dark font-bold text-[14px] sm:text-[16px]">
              {user}
            </p>
            <p className="text-dark text-[12px]">{userDescription}</p>
          </div>
          <div className="flex  items-center">
            <p className="text-dark text-[14px] sm:text-[16px] font-normal mr-[8px]">
              {rating}
            </p>
            <div>
              <StarBold color="#E3A75A" />
            </div>
          </div>
        </div>

        <div className="mb-[24px]">
          <p
            className={` text-[14px] sm:text-[16px] font-normal text-dark ${
              viewMore ? "line-clamp-none" : "line-clamp-2"
            }  sm:line-clamp-none`}
          >
            {description}
          </p>
          <b
            onClick={() => setViewMore(!viewMore)}
            className=" text-accessiblePurple font-bold inline cursor-pointer sm:hidden"
          >
            {viewMore ? "LESS" : "MORE"}
          </b>
        </div>
        <p className=" text-[14px] sm:text-[16px] text-[#6B6775] pb-[32px] border-b border-dark">
          {date}
        </p>
      </div>
    </div>
  );
};

export default ReviewDetailsBanner;
