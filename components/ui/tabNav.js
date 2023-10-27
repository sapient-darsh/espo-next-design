import React from "react";

const TabNav = (props) => {
  const { children } = props;
  return (
    <div className="w-auto h-fit border border-dark rounded-lg py-[12px] px-[16px] sm:px-[24px]  active:text-white cursor-pointer hover:text-accessiblePurple hover:border-accessiblePurple">
      <span className="flex whitespace-nowrap justify-start items-center gap-2">{children}</span>
    </div>
  );
};

export default TabNav;
