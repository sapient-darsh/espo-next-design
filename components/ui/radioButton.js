import React from "react";

const RadioButton = (props) => {
  const { name, checked, value, label, onChange, ...rest } = props;

  return (
    <>
      <div className="flex items-center">
        <div className="w-[24px] h-[24px] relative ">
          <input
            checked={checked}
            id="radioButton"
            type="radio"
            value={value}
            onChange={onChange}
            name={name}
            className={`appearance-none w-[24px] h-[24px] rounded-full outline-none 
           ${
             checked
               ? "bg-accessiblePurple  border border-accessiblePurple focus:border-accessiblePurple "
               : "border border-dark  bg-white"
           }    `}
          />
          <div
            onClick={onChange}
            className="flex justify-center items-center absolute inset-0 top-2 left-2 bg-white w-2 h-2 rounded-full"
          ></div>
        </div>
        <label
          htmlFor="radioButton"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default RadioButton;
