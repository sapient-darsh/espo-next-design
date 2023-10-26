import React from "react";

const CalenderBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 3.25V4.5H5.125C4.08984 4.5 3.25 5.33984 3.25 6.375V8.25H20.75V6.375C20.75 5.33984 19.9102 4.5 18.875 4.5H17V3.25C17 2.55859 16.4414 2 15.75 2C15.0586 2 14.5 2.55859 14.5 3.25V4.5H9.5V3.25C9.5 2.55859 8.94141 2 8.25 2C7.55859 2 7 2.55859 7 3.25ZM20.75 9.5H3.25V20.125C3.25 21.1602 4.08984 22 5.125 22H18.875C19.9102 22 20.75 21.1602 20.75 20.125V9.5Z"
        fill={color}
      />
    </svg>
  );
};

export default CalenderBold;
