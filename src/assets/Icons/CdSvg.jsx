import React from "react";

const CdSvg = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
        stroke="#101828"
        strokeWidth="1.5"
      />
      <path
        d="M5.4165 9.99999C5.4165 7.46874 7.46859 5.41666 9.99984 5.41666"
        stroke="#101828"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.99984 12.0833C11.1504 12.0833 12.0832 11.1506 12.0832 9.99999C12.0832 8.8494 11.1504 7.91666 9.99984 7.91666C8.84924 7.91666 7.9165 8.8494 7.9165 9.99999C7.9165 11.1506 8.84924 12.0833 9.99984 12.0833Z"
        stroke="#101828"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default CdSvg;
