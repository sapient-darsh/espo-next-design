import React from "react";

const FacebookBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1263 13.375L17.7382 9.39352H13.9123V6.8098C13.9123 5.72055 14.4468 4.65879 16.1603 4.65879H17.8996V1.26898C17.8996 1.26898 16.3212 1 14.8121 1C11.6614 1 9.60191 2.90695 9.60191 6.35906V9.39352H6.09961V13.375H9.60191V23H13.9123V13.375H17.1263Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookBold;
