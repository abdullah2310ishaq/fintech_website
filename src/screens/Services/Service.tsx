import React from "react";
import { Button } from "../../components/Services/Button";
import { Group1000009640 } from "../../components/Group1000009640";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import { Div } from "./sections/Div";
import { DivWrapper } from "./sections/DivWrapper";
import { Footer } from "./sections/Footer";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import { OverlapGroupWrapper } from "./sections/OverlayGroupWrapper";
import { OverlapWrapper } from "./sections/OverlayWrapper";
import { SectionComponentNode } from "./sections/SectionComponentNode";
import "./style.css";

export const Services = (): JSX.Element => {
  return (
    <div className="services">
      <div className="div-3">
        <div className="overlap-4">
          <div className="rectangle-5" />

          <Footer />
          <div className="div-4">
            <div className="div-5">
              <div className="walmart-index-only">
                <img loading="lazy"
                  className="walmart-index-only-2"
                  alt="Walmart index only"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/walmart-index-only-svg.svg"
                />
              </div>

              <div className="cisco-svg">
                <img loading="lazy"
                  className="img-2"
                  alt="Cisco svg"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/cisco-svg.svg"
                />
              </div>

              <div className="volvo-index-only-svg">
                <img loading="lazy"
                  className="volvo-index-only-svg-2"
                  alt="Volvo index only svg"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/volvo-index-only-svg.svg"
                />
              </div>

              <div className="deloitte-svg">
                <img loading="lazy"
                  className="img-2"
                  alt="Deloitte svg"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/deloitte-svg.svg"
                />
              </div>

              <div className="okta-svg">
                <img loading="lazy"
                  className="okta-svg-2"
                  alt="Okta svg"
                  src="https://c.animaapp.com/mbg4scy3uUUftI/img/okta-svg.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="overlap-5">
          <div className="rectangle-6" />

          <div className="rectangle-7" />

          <div className="group-19">
            <div className="ellipse-wrapper">
              <div className="ellipse-3" />
            </div>
          </div>

          <Group />
          <GroupWrapper />
          <DivWrapper />
          <OverlapWrapper />
          <OverlapGroupWrapper />
          <Button className="button-4" property1="default" />
          <Button className="button-5" property1="default" />
        </div>

        <div className="overlap-6">
          <div className="overlap-7">
            <div className="rectangle-8" />

            <div className="text-wrapper-23">Home</div>

            <div className="text-wrapper-24">About Us</div>

            <div className="text-wrapper-25">Services</div>

            <div className="text-wrapper-26">Blog</div>

            <PropertyDefaultWrapper
              className="button-6"
              divClassName="button-7"
              property1="default"
            />
            <div className="frame-16">
              <div className="text-wrapper-27">Our Services</div>

              <p className="we-provide-perfect">
                We Provide Perfect It Solutions For Your Business
              </p>
            </div>

            <div className="group-20">
              <div className="overlap-group-9">
                <div className="ellipse-4" />
              </div>
            </div>

            <div className="text-wrapper-28">
              Best Financial Consultant Servicesde
            </div>

            <Div />
            <div className="text-wrapper-29">Management Consulting</div>

            <img loading="lazy"
              className="line-6"
              alt="Line"
              src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
            />

            <img loading="lazy"
              className="line-7"
              alt="Line"
              src="https://c.animaapp.com/mbg4scy3uUUftI/img/line-4.svg"
            />

            <SectionComponentNode />
            <Button className="button-8" property1="default" />
            <Group1000009640 className="group-instance" property1="default" />
          </div>

          <img loading="lazy"
            className="group-21"
            alt="Group"
            src="https://c.animaapp.com/mbg4scy3uUUftI/img/group-52--6--1.png"
          />
        </div>
      </div>
    </div>
  );
};
