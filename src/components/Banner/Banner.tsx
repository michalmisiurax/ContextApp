import React from "react";
type Props = {
  text: string;
};

export const Banner = (props: Props) => {
  return (
    <div className="banner">
      <h1>{props.text}</h1>
    </div>
  );
};
