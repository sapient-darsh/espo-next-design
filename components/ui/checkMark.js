import React from "react";
import CheckLinear from "../assets/svg/checkLinear";

const CheckMark = (props) => {
  const { checked, onChange, disabled, ...rest } = props;

  return (
    <>
      <div className="w-[24px] h-[24px] relative">
        <input
          className={`appearance-none w-[24px] h-[24px] outline-none cursor-pointer rounded  active:border-accessiblePurple focus:border-accessiblePurple hover:border-accessiblePurple
           ${checked ? "bg-accessiblePurple" : "border border-dark"}    `}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        {checked === true && (
          <span
            className="flex justify-center absolute inset-0 text-white"
            onClick={onChange}
          >
            <CheckLinear color="#fff" />
          </span>
        )}
      </div>
    </>
  );
};

export default CheckMark;
