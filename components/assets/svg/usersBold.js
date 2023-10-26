import React from "react";

const UsersBold = ({ color = "#0E0D0D" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2C17.8288 2 18.6237 2.32924 19.2097 2.91529C19.7958 3.50134 20.125 4.2962 20.125 5.125C20.125 5.9538 19.7958 6.74866 19.2097 7.33471C18.6237 7.92076 17.8288 8.25 17 8.25C16.1712 8.25 15.3763 7.92076 14.7903 7.33471C14.2042 6.74866 13.875 5.9538 13.875 5.125C13.875 4.2962 14.2042 3.50134 14.7903 2.91529C15.3763 2.32924 16.1712 2 17 2ZM12.832 14.5C12.8242 14.5 12.8164 14.5 12.8047 14.5C13.8438 13.582 14.4961 12.2422 14.4961 10.75C14.4961 10.4531 14.4688 10.1641 14.4219 9.87891C14.9531 9.63281 15.543 9.5 16.1641 9.5H17.832C20.1328 9.5 22 11.3672 22 13.668C22 14.1289 21.625 14.5 21.168 14.5H12.832ZM5.75 10.75C5.75 9.75544 6.14509 8.80161 6.84835 8.09835C7.55161 7.39509 8.50544 7 9.5 7C10.4946 7 11.4484 7.39509 12.1516 8.09835C12.8549 8.80161 13.25 9.75544 13.25 10.75C13.25 11.7446 12.8549 12.6984 12.1516 13.4017C11.4484 14.1049 10.4946 14.5 9.5 14.5C8.50544 14.5 7.55161 14.1049 6.84835 13.4017C6.14509 12.6984 5.75 11.7446 5.75 10.75ZM2 20.957C2 18.082 4.33203 15.75 7.20703 15.75H11.793C14.668 15.75 17 18.082 17 20.957C17 21.5312 16.5352 22 15.957 22H3.04297C2.46875 22 2 21.5352 2 20.957Z"
        fill={color}
      />
    </svg>
  );
};

export default UsersBold;