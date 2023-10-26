import React from "react";
import classNames from "classnames";

const Switcher = (props) => {
  const { checked, variant, className, disabled, onChange, ...rest } = props;
  const defaultClass = `button`;

  const inputClasses = classNames(
    defaultClass,
    className,
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  const getSwitcherVariant = () => {
    let variantClass = "";
    switch (variant) {
      case "contained":
        variantClass = classNames(
          `w-[80px] h-[48px] bg-bgGray  peer-checked:bg-accessiblePurple`
        );
        break;
      case "outlined":
        variantClass = classNames(
          `w-[88px] h-[56px] border-4 border-[#EBEBEB] peer-checked:border-[#F2F4FC] rounded-xl bg-bgGray  peer-checked:bg-accessiblePurple`
        );
        break;
      default:
        variantClass = classNames(
          `w-[80px] h-[48px] bg-bgGray  peer-checked:bg-accessiblePurple`
        );
        break;
    }
    return variantClass;
  };

  const divClasses = classNames(
    getSwitcherVariant(),
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  return (
    <>
      <label className="flex items-center cursor-pointer ">
        <input
          type="checkbox"
          className={`${inputClasses} sr-only peer `}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          {...rest}
        />
        <div
          className={`${divClasses} block relative p-2 rounded-lg before:absolute peer-checked:before:bg-white before:bg-dark before:w-[32px] before:h-[32px] before:p-2 before:rounded before:transition-all before:duration-300 before:left-2 peer-checked:before:left-10 `}
        ></div>
      </label>
    </>
  );
};

export default Switcher;
