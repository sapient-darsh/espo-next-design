import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import EyeBold from "../assets/svg/eyeBold";
import EyeSlashBold from "../assets/svg/eyeSlashBold";

const Input = (props) => {
  const {
    children,
    label,
    size,
    variant,
    block,
    className,
    disabled,
    type,
    placeholder,
    value,
    onChange,
    error,
    errorMessage,

    ...rest
  } = props;

  const defaultClass = `button`;
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  const getButtonSize = () => {
    let sizeClass = "";
    switch (size) {
      case "large":
        sizeClass = classNames(`w-full h-[56px] text-base rounded-lg `);
        break;
      case "medium":
        sizeClass = classNames(`w-full h-[48px]  text-[14px] rounded-lg `);
        break;
      case "small":
        sizeClass = classNames(`w-full h-[40px] text-[14px] rounded-[5px] `);
        break;
      default:
        sizeClass = classNames(``);
        break;
    }
    return sizeClass;
  };

  const classes = classNames(
    defaultClass,
    getButtonSize(),
    className,
    disabled ? "opacity-50 cursor-not-allowed border border-[#6B6775]" : ""
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <label className="mb-2 text-[12px]">{label}</label>
      <div className="relative">
        <input
          ref={inputRef}
          className={`${classes} outline-none py-4 px-5   active:border-accessiblePurple focus:border-accessiblePurple ${
            error ? "border border-accentRed" : ""
          }`}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
          disabled={disabled ? true : false}
        />
        {type === "password" && (
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeSlashBold /> : <EyeBold />}
          </button>
        )}
      </div>
      {error && <span className="text-accentRed mt-8">{errorMessage}</span>}
    </>
  );
};

export default Input;
