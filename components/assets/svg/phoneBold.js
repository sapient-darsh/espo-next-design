import React from "react";

const PhoneBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.44112 2.96178C8.14035 2.23525 7.34742 1.84854 6.58964 2.05557L3.15229 2.99302C2.47264 3.18052 2 3.79768 2 4.50077C2 14.1644 9.83559 22 19.4992 22C20.2023 22 20.8195 21.5274 21.007 20.8477L21.9444 17.4104C22.1515 16.6526 21.7648 15.8596 21.0382 15.5589L17.2884 13.9964C16.6517 13.7308 15.9134 13.9144 15.4799 14.4496L13.9018 16.3752C11.1519 15.0745 8.92548 12.8481 7.62475 10.0982L9.55045 8.52403C10.0856 8.08655 10.2692 7.35221 10.0036 6.71552L8.44112 2.96568V2.96178Z"
        fill={color}
      />
    </svg>
  );
};

export default PhoneBold;
