import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { entries } from "lodash";

const Textarea = (props) => {
  const {
    children,
    label,
    size,
    rows = 1,
    charLimit = 1000,
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

  const inputRef = useRef(null);

  const [textCount, setTextCount] = useState(0);

  useEffect(() => {
    if (error && inputRef.current) {
      inputRef.current.focus();
    }
  }, [error]);

  const getInputSize = () => {
    let sizeClass = "";
    switch (size) {
      case "large":
        sizeClass = classNames(`w-full  text-base rounded-lg py-4 px-5`);
        break;
      case "medium":
        sizeClass = classNames(`w-full  text-[14px] rounded-lg py-3 px-4`);
        break;
      default:
        sizeClass = classNames(``);
        break;
    }
    return sizeClass;
  };

  const classes = classNames(
    defaultClass,
    getInputSize(),
    className,
    disabled ? "opacity-50 cursor-not-allowed border border-[#6B6775]" : ""
  );

  const onCharChange = (e) => {
    const text = e.target.value;
    var regex = /\s+/gi;
    var charCount = text.replace(regex, "").length;
    if (charLimit >= charCount) {
      onChange(e);
      setTextCount(charCount);
    } else {
      if (text === " " || text === null) {
        e.preventDefault();
        return;
      }
    }
  };

  return (
    <>
      <label className="mb-2 text-[12px]">{label}</label>
      <textarea
        ref={inputRef}
        className={`${classes} outline-none   active:border-accessiblePurple focus:border-accessiblePurple ${
          error ? "border border-accentRed" : ""
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onCharChange}
        rows={rows}
        // maxLength={charLimit}
        {...rest}
        disabled={disabled ? true : false}
      />
      {error && <span className="text-accentRed ">{errorMessage}</span>}
      <div className="flex justify-end items-center" id="the-count">
        <span id="current">{textCount}</span>
        <span id="maximum">/ {charLimit}</span>
      </div>
    </>
  );
};

export default Textarea;
