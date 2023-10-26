import React from "react";
import CalenderBold from "../assets/svg/calenderBold";
import ArrowNarrowUpRightBold from "../assets/svg/arrowNarrowUpRightBold";
import Image from "next/image";

const EventCard = (props) => {
  const { image, eventName, location, date } = props;
  return (
    <div className="font-slussen hovercss">
      <div className="d1 flex flex-col sm:flex-row justify-between sm:items-center pt-[24px]   sm:p-[24px] border  border-dark rounded-lg">
        <div className=" mb-[24px] sm:mb-0 sm:pl-[0px] sm:pr-[0px] pr-[24px] pl-[24px]">
          <div className="flex items-center  w-full text-left">
            <div className="rounded-lg w-[56px] mr-[16px]">
              <Image
                className="rounded-lg w-[56px] h-[56px] border object-contain"
                alt=""
                src={image}
                width={56}
                height={56}
              />
            </div>
            <div className="text-left">
              <p className="mp abctext-[16px] text-dark font-semibold mb-[4px] ">
                {eventName}
              </p>
              <p className="  text-[12px] text-dark font-normal">{location}</p>
            </div>
          </div>
        </div>
        <div className="datef flex justify-between sm:justify-end items-center px-6 sm:px-0 pb-[24px] sm:pb-[0px]  border-[black] pt-[16px] sm:pt-0">
          <div className="hh mr-[24px]  ">
            <div className=" ">
              <div className="flex gap-3 items-center">
                <button className=" btn  w-[56px] h-[56px] border border-accessiblePurple  rounded-lg  p-[17px]">
                  <CalenderBold color="#4FBB92" />
                </button>
                <div className="text-left ">
                  <p className="text-dark text-[14px] font-semibold">Date</p>
                  <p className="text-dark text-[12px] font-normal">{date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" hb  mr-[24px]">
            <div className="flex ">
              <p className="text-dark text-[16px] font-normal">{date}</p>
              <div className="ml-[8px] ">
                <CalenderBold color="#4FBB92" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="d1 sm:border-l border-dark absolute top-[-24px] bottom-[-24px]  w-[0px] "></div>
            <button className=" btn w-[56px] h-[56px] border border-accessiblePurple  rounded-lg ml-[24px] p-[15px]">
              <ArrowNarrowUpRightBold color="black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
