import React from "react";

const SuitcaseBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3552_47890)">
        <path
          d="M8.875 4.6875V6.25H15.125V4.6875C15.125 4.51562 14.9844 4.375 14.8125 4.375H9.1875C9.01562 4.375 8.875 4.51562 8.875 4.6875ZM7 6.25V4.6875C7 3.48047 7.98047 2.5 9.1875 2.5H14.8125C16.0195 2.5 17 3.48047 17 4.6875V6.25V7.5V21.25H7V7.5V6.25ZM4.5 6.25H5.75V21.25H4.5C3.12109 21.25 2 20.1289 2 18.75V8.75C2 7.37109 3.12109 6.25 4.5 6.25ZM19.5 21.25H18.25V6.25H19.5C20.8789 6.25 22 7.37109 22 8.75V18.75C22 20.1289 20.8789 21.25 19.5 21.25Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3552_47890">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SuitcaseBold;
