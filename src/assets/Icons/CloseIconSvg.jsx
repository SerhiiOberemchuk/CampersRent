import React from "react";

const CloseIconSvg = ({ size = 32 }) => {
  return (
    <svg
      width={size}
      height="34"
      viewBox="0 0 32 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_58_538)">
        <path
          d="M24 8L8 24"
          stroke="#101828"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 8L24 24"
          stroke="#101828"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CloseIconSvg;
