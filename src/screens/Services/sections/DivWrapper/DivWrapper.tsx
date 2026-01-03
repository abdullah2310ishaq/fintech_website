import React from "react";
import "./style.css";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="div-wrapper">
      <div className="group-5">
        <div className="img-wrapper">
          <img loading="lazy"
            className="rectangle-2"
            alt="Rectangle"
            src="https://c.animaapp.com/mbg4scy3uUUftI/img/rectangle-5332.svg"
          />
        </div>

        <div className="group-6">
          <div className="group-7">
            <div className="overlap-group-4">
              <div className="bussiness-services">Bussiness Services</div>

              <img loading="lazy"
                className="line-2"
                alt="Line"
                src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
              />
            </div>

            <p className="text-wrapper-11">
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
