import React from "react";
import StarBold from "../assets/svg/starBold";
import Image from "next/image";
import MailBold from "../assets/svg/mailBold";
import PhoneBold from "../assets/svg/phoneBold";

const PlannerBanner = (props) => {
  const { image, plannerName, rating, phoneNumber, email } = props;
  return (
    <div className="font-slussen hover:border-accessiblePurple flex flex-col md:flex-row border border-dark rounded-lg ">
      <div className="w-full ">
        <div className="flex justify-between items-center p-[16px]  md:p-[24px]">
          <div className="flex items-center">
            <div className="rounded-lg w-[56px] mr-[16px]">
              <Image
                className="rounded-lg w-[56px] h-[56px]"
                alt=""
                src={image}
                width={56}
                height={56}
              />
            </div>
            <div className="text-left">
              <p className="mp text-[16px] text-dark font-semibold mb-[4px]">
                {plannerName} Brooklyn Simmons
              </p>
              <p className=" text-[12px] text-dark font-normal">
                Event Planner
              </p>
            </div>
          </div>
          <div className="flex">
            <p className="text-dark text-[16px] font-normal">{rating} 5.0</p>
            <div className="ml-[10px]">
              <StarBold color="#E3A75A" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex-row  flex-col flex justify-between hover:border-accessiblePurple border-t md:border-none border-dark">
        <div className=" md:border-r md:border-l  border-dark hover:border-accessiblePurple  p-[16px]  md:p-[24px]">
          <div className="flex justify-start md:justify-between items-center flex-row-reverse md:flex-row  ">
            <div className="text-left w-full md:w-[130px] lg:w-[160px] ml-[23px] md:ml-[0px] md:mr-[23px]">
              <p className=" text-[14px] md:text-[16px] text-dark font-semibold mb-[4px]">
                Phone Number
              </p>
              <p className=" text-[12px] text-dark font-normal">
                {phoneNumber} +1-613-555-0157
              </p>
            </div>
            <div className="rounded-lg w-[56px]  border border-dark p-[15px]">
              <PhoneBold color="#4BA0D7" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-start md:justify-between items-center flex-row-reverse md:flex-row pt-[0px] p-[16px]  md:p-[24px]  ">
            <div className="text-left w-full md:w-[130px] lg:w-[160px] ml-[23px] md:ml-[0px] md:mr-[23px] ">
              <p className="text-[14px] md:text-[16px] text-dark font-semibold  mb-[4px]">
                Email Address
              </p>
              <p className=" text-[12px] text-dark font-normal">
                {email}companyname@mail.com{" "}
              </p>
            </div>
            <div className="rounded-lg w-[56px] border border-dark p-[15px]">
              <MailBold color="#4BA0D7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlannerBanner;
