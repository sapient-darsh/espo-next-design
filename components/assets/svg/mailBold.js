import React from "react";

const MailBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_3554_49833)">
        <path
          d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM13.3564 10.5612C12.6104 11.2067 11.5052 11.2119 10.7532 10.5733L6.40994 6.88503C5.98909 6.52765 5.35824 6.579 5.00072 6.99974C4.64304 7.42068 4.69443 8.05191 5.11551 8.40944L9.45937 12.0978C10.9633 13.3748 13.1738 13.3645 14.6658 12.0734L18.8981 8.41106C19.3156 8.04978 19.3614 7.41851 19.0003 7.00084C18.639 6.5829 18.0072 6.53713 17.5894 6.89862L13.3564 10.5612Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_3554_49833">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MailBold;
