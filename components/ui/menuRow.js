import React from "react";

const MenuRow = (props) => {
  const { children } = props;
  return (
    <div className="w-full rounded-md flex p-[12px] justify-start items-center gap-2 hover:bg-purpleAlpha active:bg-dark focus:text-white focus:bg-dark active:text-white cursor-pointer">
      {children}
    </div>
  );
};

export default MenuRow;
