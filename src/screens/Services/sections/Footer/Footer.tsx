import React from "react";
import "./style.css";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="text-box">
        <p className="lorem-ipsum-is">Lorem Ipsum is Simply Dummy Text Of</p>

        <p className="text-wrapper">
          Lorem Ipsum is Simply Dummy Text Of The Printing And
        </p>
      </div>

      <img loading="lazy"
        className="divider"
        alt="Divider"
        src="https://c.animaapp.com/mbg4scy3uUUftI/img/divider.svg"
      />

      <div className="element">
        <button className="button-2">
          <div className="butto-n">
            <div className="text-wrapper-2">Lorem Ipsum is</div>
          </div>

          <button className="button-3">
            <div className="overlap-group">
              <div className="text-wrapper-3">Lorem Ipsum is</div>
            </div>
          </button>
        </button>

        <p className="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="text-wrapper-4">Lorem Has</div>
      </div>

      <div className="element-2">
        <p className="lorem-ipsum-is-2">
          Lorem Ipsum is Simply <br />
          dummy Text Of The Printing <br />
          and Typesetting Industry
          <br />
          lorem Ipsum Has Been
        </p>

        <div className="text-wrapper-5">Lorem Has</div>
      </div>

      <div className="element-3">
        <p className="lorem-ipsum-is-3">
          Lorem Ipsum 
          <br />
          is Simply Dum
          <br />
          text Of The <br />
          printing
        </p>

        <div className="text-wrapper-6">Lorem Ipsum</div>
      </div>

      <div className="element-4">
        <img loading="lazy"
          className="social-media-icon"
          alt="Social media icon"
          src="https://c.animaapp.com/mbg4scy3uUUftI/img/social-media-icon-.png"
        />

        <p className="lorem-ipsum-is-4">
          Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry&#39;s Standard Dummy Text
          Ever Since The 1500s, When An Unknown Printer Took A Galley
        </p>
      </div>
    </footer>
  );
};
