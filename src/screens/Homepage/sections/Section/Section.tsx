import React from "react";
import "./style.css";

export const Section = (): JSX.Element => {
  return (
    <div className="section">
      <div className="overlap-5">
        <div className="frame-4">
          <div className="image-box">
            <div className="overlap-group-6">
              <img loading="lazy"
                className="bakground"
                alt="Bakground"
                src="https://c.animaapp.com/mbg35a3lsFgGqz/img/bakground.svg"
              />

              <img loading="lazy"
                className="image"
                alt="Image"
                src="https://c.animaapp.com/mbg35a3lsFgGqz/img/image-.svg"
              />

              <div className="rectangle-2" />
            </div>
          </div>

          <div className="curcle-icon">
            <div className="curcle-icon-2" />

            <div className="curcle-icon-3" />
          </div>
        </div>

        <div className="frame-5">
          <div className="text-wrapper-25">Explore More</div>

          <div className="text-wrapper-26">arrow-right-long</div>
        </div>

        <p className="text-wrapper-27">
          Lorem Ipsum is simply dummy text the printing and provide best visa
          ever. Lorem Ipsum is simply dummy text the printing and provide best
          visa everLorem Ipsum is simply dummy text the printing and provide
          best visa everLorem Ipsum is simply dummy text the printing and
          provide best visa ever
        </p>

        <div className="text-wrapper-28">Financial Consultancy</div>
      </div>

      <p className="our-success-stories">
        <span className="text-wrapper-29">
          our success <br />
        </span>

        <span className="text-wrapper-30">stories</span>
      </p>
    </div>
  );
};
