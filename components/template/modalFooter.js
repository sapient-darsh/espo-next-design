import React from "react";

const ModalFooter = (props) => {
  const { children } = props;
  return (
    <div className="py-[32px] px-[48px] sticky bottom-0  w-full bg-white border-t border-dark">
      {children}
    </div>
  );
};

export default ModalFooter;
