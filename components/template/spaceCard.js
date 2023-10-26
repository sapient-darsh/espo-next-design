import React, { useState } from "react";
import CubeBold from "../assets/svg/cubeBold";
import SquareBold from "../assets/svg/squareBold";
import ChairBold from "../assets/svg/chairBold";
import UsersBold from "../assets/svg/usersBold";

const SpaceCard = (props) => {
  const { title, description, type, size, standCapacity, seatCapacity } = props;
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="font-slussen text-left">
      <p className="text-dark text-[16px] sm:text-[20px] font-bold mb-[12px]">
        {title}
      </p>

      <div className="flex gap-4 mb-[12px]">
        <div className="flex items-center">
          <div>
            <CubeBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{type}</p>
        </div>
        <div className="flex items-center">
          <div>
            <SquareBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{size}</p>
        </div>
        <div className="flex items-center">
          <div>
            <UsersBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{seatCapacity}</p>
        </div>
        <div className="flex items-center">
          <div>
            <ChairBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{standCapacity}</p>
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
          className="text-accessiblePurple font-bold inline sm:hidden cursor-pointer"
        >
          {viewMore ? "LESS" : "MORE"}
        </b>
      </div>
    </div>
  );
};

export default SpaceCard;
