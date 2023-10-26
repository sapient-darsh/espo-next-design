import React from "react";

const InfoCard = (props) => {
  const { title, subTitle, icon } = props;
  return (
    <div>
      <div className="font-slussen flex gap-3 items-center">
        <button className=" btn  w-[56px] h-[56px] border border-dark  rounded-lg  p-[17px]">
          {/* <CalenderBold color="#4FBB92" /> */}
          {icon}
        </button>
        <div className="text-left ">
          <p className="text-dark text-[14px] font-semibold">{title}</p>
          <p className="text-dark text-[12px] font-normal">{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
