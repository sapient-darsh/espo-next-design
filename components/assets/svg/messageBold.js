import React from "react";

const MessageBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.50011 3C3.12114 3 2 4.12114 2 5.50011V16.7506C2 18.1296 3.12114 19.2507 4.50011 19.2507H8.25027V22.3758C8.25027 22.6141 8.38309 22.829 8.59403 22.9345C8.80498 23.0399 9.0589 23.0165 9.25031 22.8759L14.0826 19.2507H19.5008C20.8797 19.2507 22.0009 18.1296 22.0009 16.7506V5.50011C22.0009 4.12114 20.8797 3 19.5008 3H4.50011Z"
        fill={color}
      />
    </svg>
  );
};

export default MessageBold;
