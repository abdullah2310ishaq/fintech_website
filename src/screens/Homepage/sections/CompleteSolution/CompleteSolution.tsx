import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
//import img1 from "../../../../assets/hero-img1.png";
//import img2 from "../../../../assets/about-2.jpg";
//import img3 from "../../../../assets/about-3.jpg";
import { getCloudinaryUrl } from "../../../../utils/getCloudinaryUrl";

export const CompleteSolution = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const img1 = getCloudinaryUrl("Homepage-New-4_v52uij.jpg");
  const img2 = getCloudinaryUrl("Homepage-New-2_ir53rr.jpg");
  const img3 = getCloudinaryUrl("v1767401881/home-hero-new_muieyo.jpg");
  const navigate = useNavigate();
  const images = [img1, img2, img3];

  return (
    <div className="main-div-complete">
      <div className="left-content">
        {/* All your existing content goes here */}
        <div className="left-box-content-div">
          <div className="overlap-9">
            <img
              loading="lazy"
              className="arrow"
              alt="Arrow"
              src="https://c.animaapp.com/mbg35a3lsFgGqz/img/arrow-1.svg"
            />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
          </div>
          <p className="complete-solution">
            <span className="text-wrapper-31">Building Bankable </span>
            <span className="text-wrapper-32">Entrepreneurs</span>
          </p>
          <p className="text-hero">
            We craft tailored financial strategies that align your business's
            growth trajectory with your personal financial security. Leveraging
            over two decades of global expertise, we cut through complexity to
            provide the clarity and structure needed to turn ambitious
            challenges into decisive, bankable solutions.
          </p>
          <div className="schedule" onClick={() => navigate(`/contactus`)}>
            Book Your Free Consultation
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
        </div>
      </div>

      <div className="right-slider">
        <div className="slider">
          {images.map((img, index) => (
            <img
              loading="lazy"
              key={index}
              src={img}
              alt={`slide-${index}`}
              className={`slide ${currentIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
