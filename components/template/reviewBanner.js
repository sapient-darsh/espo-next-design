import React from "react";
import StarBold from "../assets/svg/starBold";
import MessageBold from "../assets/svg/messageBold";

const ReviewBanner = (props) => {
  const { title, rating, reviews } = props;
  return (
    <div className="font-slussen flex sm:flex-row flex-col justify-between border border-[black] rounded-lg p-[16px] sm:p-[37px] items-center">
      <div className="mb-[20px] sm:mb-0 text-left w-full">
        <p className=" text-[14px] sm:text-[24px] font-bold mb-[16px]">
          {title}
        </p>
        <div className="flex">
          <div className="flex mr-[24px] items-center">
            <div className="mr-[8px]">
              <StarBold color="#E3A75A" />
            </div>
            <p className="text-dark text-[14px] sm:text-[16px] font-normal">
              {rating}
            </p>
          </div>
          <div className="flex items-center">
            <div className="mr-[8px] ">
              <MessageBold color="#4FBB92" />
            </div>
            <p className="text-dark text-[14px] sm:text-[16px] font-normal">
              {reviews} Reviews
            </p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[177px]">
        <button className=" w-[100%] sm:w-[177px] h-[44px] sm:h-[56px] border border-[#8390F5] text-[14px] sm:text-[16px] font-bold rounded-lg">
          LEAVE REVIEW
        </button>
      </div>
    </div>
  );
};

export default ReviewBanner;
