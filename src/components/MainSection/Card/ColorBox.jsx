import React from "react";

const ColorBox = (props) => {
  const { statusArray, status, cardLogo } = props;

  console.log("CardLogo", cardLogo);

  return statusArray.map((stat, i) =>
    stat.id === status ? (
      <div key={i} className={`w-10 h-full bg-${stat.color}`}></div>
    ) : null
  );
  // ></div> ) : null)
};

export default ColorBox;
