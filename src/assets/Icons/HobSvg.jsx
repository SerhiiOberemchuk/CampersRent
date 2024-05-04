import React from "react";

const HobSvg = ({ size = 20 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49984 4.16669H17.4998C17.7209 4.16669 17.9328 4.25448 18.0891 4.41076C18.2454 4.56705 18.3332 4.77901 18.3332 5.00002V15.8334C18.3332 16.0544 18.2454 16.2663 18.0891 16.4226C17.9328 16.5789 17.7209 16.6667 17.4998 16.6667H7.49984M7.49984 4.16669H2.49984C2.27882 4.16669 2.06686 4.25448 1.91058 4.41076C1.7543 4.56705 1.6665 4.77901 1.6665 5.00002V15.8334C1.6665 16.0544 1.7543 16.2663 1.91058 16.4226C2.06686 16.5789 2.27882 16.6667 2.49984 16.6667H7.49984M7.49984 4.16669V16.6667"
        stroke="#101828"
        strokeWidth="1.5"
      />
      <path
        d="M4.58301 7.08335V8.75002M15.4163 6.66669L10.4163 13.75"
        stroke="#101828"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.41667 11.25C5.41667 10.7898 5.04357 10.4167 4.58333 10.4167C4.1231 10.4167 3.75 10.7898 3.75 11.25C3.75 11.7103 4.1231 12.0834 4.58333 12.0834C5.04357 12.0834 5.41667 11.7103 5.41667 11.25Z"
        fill="#101828"
      />
      <path
        d="M5.41667 13.75C5.41667 13.2898 5.04357 12.9167 4.58333 12.9167C4.1231 12.9167 3.75 13.2898 3.75 13.75C3.75 14.2103 4.1231 14.5834 4.58333 14.5834C5.04357 14.5834 5.41667 14.2103 5.41667 13.75Z"
        fill="#101828"
      />
    </svg>
  );
};

export default HobSvg;
