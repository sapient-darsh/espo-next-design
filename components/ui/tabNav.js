import React from "react";

const TabNav = (props) => {
  const { children } = props;
  return (
    <div className="w-fit border border-dark rounded-lg py-[12px] px-[16px]  active:text-white cursor-pointer hover:text-accessiblePurple hover:border-accessiblePurple">
      <span className="flex justify-start items-center gap-2">{children}</span>
    </div>
  );
};

export default TabNav;
