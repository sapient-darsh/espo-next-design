import React from "react";
import classNames from "classnames";

const Button = (props) => {
  const {
    children,
    size,
    variant,
    block,
    className,
    loading,
    disabled,
    startIcon,
    endIcon,

    ...rest
  } = props;

  const defaultClass = `button`;

  const getButtonSize = () => {
    let sizeClass = "";
    switch (size) {
      case "large":
        sizeClass = classNames(
          `w-fit h-[64px] px-[28px] py-[20px]  text-base rounded-[12px]`
        );
        break;
      case "medium":
        sizeClass = classNames(
          `w-fit h-[56px] px-[24px] py-[16px] text-base rounded-[8px]`
        );
        break;
      case "small":
        sizeClass = classNames(
          `w-fit h-[48px] px-[20px] py-[12px] text-[14px] rounded-[8px]`
        );
        break;
      default:
        sizeClass = classNames(
          `w-[120px] h-[56px] px-[24px] py-[16px] rounded-[8px] `
        );
        break;
    }
    return sizeClass;
  };

  const getButtonVariant = () => {
    let variantClass = "";
    switch (variant) {
      case "contained":
        variantClass = classNames(
          `bg-purple  hover:bg-[#7283F4] focus:bg-[#7283F4]`
        );
        break;
      case "outlined":
        variantClass = classNames(
          `border-purple border  hover:bg-purpleAlpha hover:text-purple  focus:bg-purpleAlpha`
        );
        break;
      default:
        variantClass = classNames(
          `bg-[#F9F9F9]  hover:bg-purpleAlpha hover:text-purple focus:bg-purpleAlpha`
        );
        break;
    }
    return variantClass;
  };

  const classes = classNames(
    defaultClass,
    getButtonSize(),
    getButtonVariant(),
    className,
    block ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  const handleClick = (e) => {
    const { onClick } = props;
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`${classes} font-bold`}
        {...rest}
      >
        <div className="flex justify-center items-center gap-2 text-dark uppercase">
          {startIcon && <span>{startIcon}</span>}
          <span>{children}</span>
          {endIcon && <span>{endIcon}</span>}
        </div>
      </button>
    </>
  );
};

export default Button;
