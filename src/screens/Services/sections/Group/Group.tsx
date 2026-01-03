import React from "react";
import "./style.css";

export const Group = (): JSX.Element => {
  return (
    <div className="group">
      <div className="frame">
        <div className="frame-2" />
      </div>

      <div className="group-wrapper-2">
        <div className="div-2">
          <div className="overlap-group-2">
            <div className="text-wrapper-7">Insurance Services</div>

            <img loading="lazy"
              className="line"
              alt="Line"
              src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
            />
          </div>

          <p className="text-wrapper-8">
            Our IT experts are delivering a range of IT services to our
            customers and alleviating technology challenges regarding core IT
            infrastructure. We help you establish a reliable IT infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};
