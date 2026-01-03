import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Logos } from "../../icons/Logos";
import { CompleteSolution } from "./sections/CompleteSolution";
import { Group } from "./sections/Group";
import { GroupWrapper } from "./sections/GroupWrapper";
import { Section } from "./sections/Section";
import { Testimonial } from "./sections/Testimonial";
import "./style.css";

export const Homepage = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <div className="div-9">
        <div className="overlap-6">
          <Group />
          <div className="rectangle-3" />

          <Logos className="logos-instance" />
          <div className="rectangle-4" />

          <div className="element-9">
            <div className="ellipse-3" />
          </div>

          <button className="button-3" onClick={() => navigate(`/contactus`)}>
            <div className="text-wrapper-34">Schedule a consultation</div>
          </button>

          <button className="button-4">
            <div className="text-wrapper-35">Explore More</div>
          </button>

          <button className="button-5">
            <div className="text-wrapper-35">Explore More</div>now
          </button>

          <p className="providing-the-right">
            <span className="text-wrapper-36">Providing the </span>

            <span className="text-wrapper-37">Right</span>

            <span className="text-wrapper-36">
              {" "}
              <br />
            </span>

            <span className="text-wrapper-37">Financial Solution</span>
          </p>

          <p className="text-wrapper-38">
            Guiding Your Financial Journey with Tailored Insurance, Retirement
            Planning, and Wealth-Building Strategies for Lifelong Security and
            Peace of Mind
          </p>

          <p className="text-wrapper-39">
            Guiding Your Financial Journey with Tailored Insurance, Retirement
            Planning
          </p>

          <p className="guiding-your">
            Guiding Your Financial Journey with Tailored Insurance, Retirement
            Planning, and Wealth-Building Strategies for Lifelong Security and
            Peace of Mind.
            <br />
            Guiding Your Financial Journey with Tailored Insurance, Retirement
            Planning, and Wealth-Building Strategies for Lifelong Security and
            Peace of Mind.
          </p>

          <div className="text-wrapper-40">About us</div>

          <div className="text-wrapper-41">Testimonial</div>

          <div className="rectangle-5" />

          <div className="group-4">
            <div className="overlap-7">
              <div className="text-wrapper-42">200+</div>

              <div className="text-wrapper-43">Satisfied Customer</div>
            </div>
          </div>

          <div className="group-5">
            <div className="overlap-7">
              <div className="text-wrapper-42">200+</div>

              <div className="text-wrapper-43">Satisfied Customer</div>
            </div>
          </div>

          <div className="group-6">
            <div className="overlap-7">
              <div className="text-wrapper-42">200+</div>

              <div className="text-wrapper-43">Satisfied Customer</div>
            </div>
          </div>

          <div className="group-7">
            <div className="overlap-7">
              <div className="text-wrapper-42">200+</div>

              <div className="text-wrapper-43">Satisfied Customer</div>
            </div>
          </div>

          <Testimonial />
          <p className="what-our-clients-are">
            <span className="text-wrapper-44">
              What our clients <br />
            </span>

            <span className="text-wrapper-45">Are saying</span>
          </p>

          <p className="best-financial">
            <span className="text-wrapper-46">Best Financial Consultant </span>

            <span className="text-wrapper-45">Services</span>
          </p>

          <p className="meet-the-faces">
            <span className="text-wrapper-44">
              Meet the faces <br />
              Behind
            </span>

            <span className="text-wrapper-45"> Consultancy</span>
          </p>

          <img loading="lazy"
            className="rectangle-6"
            alt="Rectangle"
            src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-27.svg"
          />

          <img loading="lazy"
            className="rectangle-7"
            alt="Rectangle"
            src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-28.svg"
          />

          <img loading="lazy"
            className="rectangle-8"
            alt="Rectangle"
            src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-29.svg"
          />

          <GroupWrapper />
          <div className="images">
            <div className="overlap-8">
              <img loading="lazy"
                className="rectangle-9"
                alt="Rectangle"
                src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-5335.svg"
              />

              <img loading="lazy"
                className="rectangle-10"
                alt="Rectangle"
                src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-5336.svg"
              />

              <img loading="lazy"
                className="rectangle-11"
                alt="Rectangle"
                src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-5334.svg"
              />
            </div>
          </div>

          <div className="text-wrapper-47">Services</div>

          <div className="text-wrapper-48">Our Team</div>

          <Section />
          <div className="rectangle-12" />

          <div className="rectangle-13" />
        </div>

        <CompleteSolution />
        <div className="left-text">
          <p className="text-wrapper-49">
            Guiding Your Financial Journey with Tailored Insurance, Retirement
            Planning, and Wealth-Building Strategies for Lifelong Security and
            Peace of Mind
          </p>
        </div>

        <button className="button-6" onClick={() => navigate(`/contactus`)}>
          <div className="text-wrapper-34">Schedule a consultation</div>
        </button>

        <div className="group-8">
          <div className="overlap-9">
            <img loading="lazy"
              className="arrow"
              alt="Arrow"
              src="https://c.animaapp.com/mbg35a3lsFgGqz/img/arrow-1.svg"
            />

            <div className="ellipse-4" />

            <div className="ellipse-5" />

            <div className="ellipse-6" />
          </div>
        </div>

        <div className="overlap-10">
          <div className="ellipse-7" />

          <div className="ellipse-8" />

          <div className="ellipse-9" />
        </div>

        <div className="overlap-11">
          <div className="text-wrapper-50">200+</div>

          <div className="text-wrapper-51">Satisfied Customer</div>
        </div>

        <div className="text-wrapper-52">Home</div>

        <div className="text-wrapper-53">About Us</div>

        <div className="text-wrapper-54">Services</div>

        <div className="text-wrapper-55">Blog</div>

        <Button
          className="button-instance"
          divClassName="design-component-instance-node"
          property1="default"
        />
        <img loading="lazy"
          className="group-9"
          alt="Group"
          src="https://c.animaapp.com/mbg35a3lsFgGqz/img/group-52--6--1.png"
        />

        <div className="image-slider">
          <img loading="lazy"
            className="rectangle-14"
            alt="Rectangle"
            src="https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-24.svg"
          />

          <div className="curcle-icon-4">
            <div className="curcle-icon-5" />

            <div className="curcle-icon-6" />

            <div className="curcle-icon-7" />

            <div className="curcle-icon-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
