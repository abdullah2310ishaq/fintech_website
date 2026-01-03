import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const Group1000009640 = ({
  property1,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`group-1000009640 property-1-${property1} ${className}`}>
      <div className="frame-12" />

      <div className="frame-13" />

      <div className="frame-14" />

      <div className="frame-15" />
    </div>
  );
};
