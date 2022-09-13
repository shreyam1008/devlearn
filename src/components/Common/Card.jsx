import React from "react";

const Card = (CardProps) => {
  // Object Destructure
  const { name, address } = CardProps;

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        border: "solid 1px red",
      }}
    >
      Name: {name} Location: {address}
    </div>
  );
};

export default Card;
