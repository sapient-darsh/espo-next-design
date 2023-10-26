import React from "react";
import CrossBold from "../assets/svg/crossBold";

const ModalHeader = (props) => {
  const { label, onClose } = props;
  return (
    <div className="w-full h-[96px] p-[32px] flex justify-start items-center gap-4 border-b border-dark ">
      <div className="cursor-pointer" onClick={onClose}>
        <CrossBold color="#111" />
      </div>
      <div>{label}</div>
    </div>
  );
};

export default ModalHeader;
