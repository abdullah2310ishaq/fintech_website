import React from "react";
import { Button } from "../../../../components/Services/Button";
import "./style.css";

export const OverlapWrapper = (): JSX.Element => {
  return (
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="group-8">
          <div className="frame-wrapper">
            <div className="frame-3" />
          </div>

          <div className="group-9">
            <div className="group-10">
              <div className="overlap-group-5">
                <div className="text-wrapper-12">Insurance Services</div>

                <img loading="lazy"
                  className="line-3"
                  alt="Line"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
                />
              </div>

              <p className="text-wrapper-13">
                Our IT experts are delivering a range of IT services to our
                customers and alleviating technology challenges regarding core
                IT infrastructure. We help you establish a reliable IT
                infrastructure.
              </p>
            </div>
          </div>
        </div>

        <Button className="button-instance" property1="default" />
      </div>
    </div>
  );
};
