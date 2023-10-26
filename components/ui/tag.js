import React from "react";

const Tag = (props) => {
  const { label, color, bgColor } = props;

  return (
    <div
      style={{ color: color, backgroundColor: bgColor }}
      className={`m-1 w-fit h-[32px]  uppercase flex justify-center items-center p-4 rounded text-[12px] font-semibold`}
    >
      {label}
    </div>
  );
};

export default Tag;
