import React from "react";

const IconUserProfile = () => {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_521_26)">
        <circle cx="27.5" cy="27.5" r="17.5" fill="white" />
        <circle cx="27.5" cy="27.5" r="17" stroke="black" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6035 23.4103C21.6035 19.87 24.2923 17 27.609 17C30.9257 17 33.6145 19.87 33.6145 23.4103C33.6145 26.9505 30.9257 29.8205 27.609 29.8205C24.2923 29.8205 21.6035 26.9505 21.6035 23.4103Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4258 31.554C23.0522 30.8262 25.2216 30.5897 28.0008 30.5897C30.7743 30.5897 32.9404 30.8252 34.5654 31.5493C36.3096 32.3264 37.3802 33.6467 37.9509 35.567C38.1629 36.2807 37.6614 37 36.9682 37H19.0272C18.3368 37 17.8383 36.2839 18.0486 35.5741C18.6176 33.654 19.6844 32.3331 21.4258 31.554Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_521_26"
          x="0"
          y="0"
          width="55"
          height="55"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.441667 0 0 0 0 0.441667 0 0 0 0 0.441667 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_521_26"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_521_26"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default IconUserProfile;
