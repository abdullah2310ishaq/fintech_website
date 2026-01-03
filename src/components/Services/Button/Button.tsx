import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const Button = ({ property1, className }: Props): JSX.Element => {
  return (
    <button className={`button ${property1} ${className}`}>
      <div className="text-wrapper-21">Explore More</div>
    </button>
  );
};
