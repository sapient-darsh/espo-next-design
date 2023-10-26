import React, { useState } from "react";
import ChevronUpLinear from "../assets/svg/chevronUpLinear";
import ChevronDownLinear from "../assets/svg/chevronDownLinear";

const FilterDropDown = (props) => {
  const { label, children } = props;

  const [openDropdowns, setOpenDropdowns] = useState(false);

  return (
    <>
      <div className="relative main-d border-b border-dark ">
        <button
          onClick={() => setOpenDropdowns(!openDropdowns)}
          className={`text-[16px] font-semibold flex justify-between transition w-full py-4 text-dark items-center text-sm px-5 text-left ${
            openDropdowns ? "block" : ""
          } `}
          type="button"
        >
          {label}
          {openDropdowns ? <ChevronUpLinear /> : <ChevronDownLinear />}
        </button>

        <div
          className={`z-10 ${
            openDropdowns ? "open" : "hidden"
          } text-dark pb-[20px] transition divide-y w-full  text-left px-5`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default FilterDropDown;
