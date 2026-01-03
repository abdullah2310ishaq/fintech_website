import React from "react";
import "./style.css";

export const GroupWrapper = (): JSX.Element => {
  return (
    <div className="group-wrapper">
      <div className="group-2">
        <div className="rectangle-wrapper">
          <img loading="lazy"
            className="rectangle"
            alt="Rectangle"
            src="https://c.animaapp.com/mbg4scy3uUUftI/img/rectangle-5332.svg"
          />
        </div>

        <div className="group-3">
          <div className="group-4">
            <div className="overlap-group-3">
              <div className="text-wrapper-9">Management Consultancy</div>

              <img loading="lazy"
                className="img"
                alt="Line"
                src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
              />
            </div>

            <p className="text-wrapper-10">
              Our IT experts are delivering a range of IT services to our
              customers and alleviating technology challenges regarding core IT
              infrastructure. We help you establish a reliable IT
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
