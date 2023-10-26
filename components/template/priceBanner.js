import React from "react";
import CrossBold from "../assets/svg/crossBold";

const PriceBanner = (props) => {
  const { children, onClose, ...rest } = props;
  return (
    <div
      {...rest}
      className="h-[40px] flex justify-between items-center bg-dark p-4 font-slussen"
    >
      <div></div>
      <div className="flex justify-start items-center gap-2">{children}</div>
      <div onClick={onClose} className="cursor-pointer">
        <CrossBold color="#fff" />
      </div>
    </div>
  );
};

export default PriceBanner;
