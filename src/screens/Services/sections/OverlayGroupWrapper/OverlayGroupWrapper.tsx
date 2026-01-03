import React from "react";
import { Button } from "../../../../components/Services/Button";
import "./style.css";

export const OverlapGroupWrapper = (): JSX.Element => {
  return (
    <div className="overlap-group-wrapper">
      <div className="overlap-2">
        <div className="group-11">
          <div className="frame-4">
            <div className="frame-5">
              <div className="group-12">
                <div className="overlap-group-6">
                  <img loading="lazy"
                    className="ellipse"
                    alt="Ellipse"
                    src="https://c.animaapp.com/mbg4scy3uUUftI/img/ellipse-1.svg"
                  />

                  <div className="text-wrapper-14">arrow-right</div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-13">
            <div className="group-14">
              <div className="overlap-group-7">
                <div className="text-wrapper-15">Retirement Planning</div>

                <img loading="lazy"
                  className="line-4"
                  alt="Line"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
                />
              </div>

              <p className="text-wrapper-16">
                Our IT experts are delivering a range of IT services to our
                customers and alleviating technology challenges regarding core
                IT infrastructure. We help you establish a reliable IT
                infrastructure.
              </p>
            </div>
          </div>
        </div>

        <Button
          className="design-component-instance-node"
          property1="default"
        />
      </div>
    </div>
  );
};
