import React from "react";

const Dot = (props) => {
  const { color, size } = props;
  return (
    <svg
      width={size || "5"}
      height={size || "5"}
      viewBox="0 0 5 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.49998 -1e-05C3.88075 -1e-05 4.99998 1.11928 4.99998 2.50009C4.99998 3.88068 3.88075 4.99997 2.49998 4.99997C1.11932 4.99997 0 3.88068 0 2.50009C0 1.11928 1.11932 -1e-05 2.49998 -1e-05Z"
        fill={color || "#BABBBD"}
      />
    </svg>
  );
};

export default Dot;
