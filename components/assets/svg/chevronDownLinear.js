import React from "react";

const ChevronDownLinear = () => {
  return (
    // <svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M6 9L12 15L18 9"
    //     stroke="#0E0D0D"
    //     strokeWidth="1.5"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 9L12 15L18 9"
      ></path>
    </svg>
  );
};

export default ChevronDownLinear;
