import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "variant-3" | "default";
  className: any;
  divClassName: any;
}

export const Button = ({
  property1,
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <button className={`button ${className}`}>
      <div className="span-2">
        <div className={`text-wrapper-33 ${divClassName}`}>Contact us</div>
      </div>
    </button>
  );
};
