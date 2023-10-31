import React, { useState } from "react";
import CubeBold from "../assets/svg/cubeBold";
import SquareBold from "../assets/svg/squareBold";
import ChairBold from "../assets/svg/chairBold";
import UsersBold from "../assets/svg/usersBold";
import CalendarStarBold from "../assets/svg/calendarStarBold";
import CalenderBold from "../assets/svg/calenderBold";

const EventPlannerspacecard = (props) => {
  const { title, description, soirees, date } = props;
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="font-slussen text-left">
      <p className="text-dark text-[16px] sm:text-[20px] font-bold mb-[12px]">
        {title} PHOTOGRAPHER
      </p>

      <div className="flex flex-wrap gap-4 mb-[12px]">
        <div className="flex items-center">
          <div>
            <CubeBold color="#4FBB92" /> 
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{soirees} Spectacular Soirees</p>
        </div>
        <div className="flex items-center">
          <div>
            <CalenderBold color="#4FBB92" />
          </div>
          <p className="ml-[8px] text-[14px] sm:text-[16px]">{date} Feb 2023 - Present</p>
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

export default EventPlannerspacecard;
 
