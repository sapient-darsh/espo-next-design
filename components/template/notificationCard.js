import Image from "next/image";
import React from "react";

const NotificationCard = (props) => {
  const { image, user, message, time } = props;
  return (
    <div className=" flex  w-full gap-3 md:gap-4 items-center">
      <div className="rounded-lg w-[56px] ">
        <Image
          className="rounded-lg w-[48px] md:w-[56px] h-[48px] md:h-[56px]"
          alt=""
          src={image}
          width={56}
          height={56}
        />
      </div>
      <div className="text-left">
        <div className="flex justify-between">
          <div>
            <p className="text-dark font-normal md:text-[16px] text-[14px] ">
              <b className="hover:text-[#5a6dd8] hover:cursor-pointer  hover:border-b border-transparent border-[#5a6dd8] hover:border-[#5a6dd8]">
                {user}
              </b>{" "}
              {message}
            </p>
            <p className="text-dark text-[12px]">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
