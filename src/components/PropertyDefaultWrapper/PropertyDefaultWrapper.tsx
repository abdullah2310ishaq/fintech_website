import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "variant-3" | "default";
  className: any;
  divClassName: any;
}

export const PropertyDefaultWrapper = ({
  property1,
  className,
  divClassName,
}: Props): JSX.Element => {
  return (
    <button className={`property-default-wrapper ${className}`}>
      <div className="span">
        <div className={`text-wrapper-22 ${divClassName}`}>Contact us</div>
      </div>
    </button>
  );
};
