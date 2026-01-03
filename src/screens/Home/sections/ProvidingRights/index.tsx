import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import img1 from "../../../../assets/aboutUs/img1.png";
import img2 from "../../../../assets/aboutUs/img2.jpeg";
import img3 from "../../../../assets/aboutUs/img3.jpeg";
import AnimatedCounter from "../../../../components/AnimatedCounter";

function ProvidingRights() {
  const navigate = useNavigate();
  return (
    <div className="providing-rights-container">
      <div className="curved-about-wrapper">
        <div className="mainProviding">
          <div className="left-side">
            <div className="section-title">About us</div>
            <div>
              <div className="heading-providing">
                Providing the <span className="blue-text">Right</span>
              </div>
              <div className="heading-providing blue-text">
                Financial Solution
              </div>
            </div>
            <div className="detail">
              At FinCan Solutions Inc., we help entrepreneurs, developers, and
              investors transform business ideas into fundable, lender-ready
              projects. From startups and expansions to real estate and
              construction financing, our goal is to make your vision bankable,
              sustainable, and lender-approved.
            </div>
            <div
              className="explore-more-team"
              onClick={() => navigate(`/about`)}
            >
              Explore More
            </div>
          </div>

          <div className="right-side">
            <div className="right-side-grid">
              <div className="right-side-content-500">
                <span className="number">
                  <AnimatedCounter to={200} suffix="+" />
                </span>
                <span className="label">Satisfied Customers</span>
              </div>
              <div className="right-side-content-500">
                <span className="number">
                  <AnimatedCounter to={50} suffix="+" />
                </span>
                <span className="label">Projects Completed</span>
              </div>
              <div className="right-side-content-500">
                <span className="number">
                  <AnimatedCounter to={100} suffix="%" />
                </span>
                <span className="label">Client Retention</span>
              </div>
              <div className="right-side-content-500">
                <span className="number">
                  <AnimatedCounter to={100} suffix="%" />
                </span>
                <span className="label">Trust & Reliability</span>
              </div>

              {/* 🔻 Previous static block (commented for backup) */}
              {/*
              <div className="right-side-content-500">
                <span className="number">500+</span>
                <span className="label">Satisfied Customers</span>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>

      <div className="image-slider">
        <img loading="lazy" src={img1} alt="Slider 1" />
        <img loading="lazy" src={img2} alt="Slider 2" />
        <img loading="lazy" src={img3} alt="Slider 3" />
      </div>
    </div>
  );
}

export default ProvidingRights;
