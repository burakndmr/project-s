import React from "react";

// COMPONENTS
import ColorBox from "./ColorBox";

const Card = (props) => {
  console.log("PROPS CARD", props.data);
  return (
    <div>
      <ColorBox />
      Card
    </div>
  );
};

export default Card;
