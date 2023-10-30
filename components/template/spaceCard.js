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
        {title} NAME OF THE SPACE IN THE HOTEL
      </p>

      <div className="flex gap-4 mb-[12px]">
        <div className="flex items-center">
          <div>
            <CubeBold color="#4FBB92" /> 
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{type} Small</p>
        </div>
        <div className="flex items-center">
          <div>
            <SquareBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{size} 80m2</p>
        </div>
        <div className="flex items-center">
          <div>
            <UsersBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{seatCapacity} 60</p>
        </div>
        <div className="flex items-center">
          <div>
            <ChairBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{standCapacity} 25</p>
        </div>
      </div>
      <div className="mb-[24px]">
        <p
          className={` text-[14px] sm:text-[16px] font-normal text-dark ${
            viewMore ? "line-clamp-none" : "line-clamp-2"
          }  sm:line-clamp-none`}
        >
          {description} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliq.
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
