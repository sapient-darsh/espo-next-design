import React from "react";
import classNames from "classnames";

const IconButton = (props) => {
  const {
    children,
    size,
    variant,
    block,
    className,
    loading,
    disabled,
    icon,
    ...rest
  } = props;

  const defaultClass = `button `;

  const getButtonSize = () => {
    let sizeClass = "";
    switch (size) {
      case "large":
        sizeClass = classNames(
          `w-[64px] h-[64px] px-[28px] py-[20px] font-bold text-[24px] rounded-[12px]`
        );
        break;
      case "medium":
        sizeClass = classNames(
          `w-[56px] h-[56px] px-[24px] py-[16px] font-bold text-[24px] rounded-[8px]`
        );
        break;
      case "small":
        sizeClass = classNames(
          `w-[48px] h-[48px] px-[20px] py-[12px] font-bold text-[14px] rounded-[8px]`
        );
        break;
      default:
        sizeClass = classNames(
          `w-[56px] h-[56px] px-[24px] py-[16px] rounded-[8px]`
        );
        break;
    }
    return sizeClass;
  };

  const getButtonVariant = () => {
    let variantClass = "";
    switch (variant) {
      case "contained":
        variantClass = classNames(`bg-purple  hover:bg-[#7283F4]`);
        break;
      case "outlined":
        variantClass = classNames(
          `border-purple border hover:bg-purpleAlpha hover:text-purple focus:bg-purpleAlpha`
        );
        break;
      default:
        variantClass = classNames(
          `bg-[#F9F9F9] hover:bg-purpleAlpha hover:text-purple focus:bg-purpleAlpha`
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
      <div className="my-4 mx-2">
        <button onClick={handleClick} className={`${classes}`} {...rest}>
          <div className="flex justify-center items-center gap-2">
            <span>{icon}</span>
          </div>
        </button>
      </div>
    </>
  );
};

export default IconButton;
