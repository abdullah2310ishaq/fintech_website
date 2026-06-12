import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Homepage/sections/CompleteSolution/style.scss";
import "./style.scss";
import img1 from "../../../../assets/aboutUs/img1.png";
import img2 from "../../../../assets/aboutUs/img2.jpeg";
import img3 from "../../../../assets/aboutUs/img3.jpeg";

function ProvidingRights() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  return (
    <div className="providing-rights-container">
      <div className="curved-about-wrapper">
        <div className="main-div-complete about-section">
          <div className="left-content">
            <div className="left-box-content-div">
              <div className="about-section-label">About Us</div>
              <p className="complete-solution">
                <span className="text-wrapper-31">
                  Financial Consulting That Turns Business Goals into{" "}
                </span>
                <span className="text-wrapper-32">Clear Action Plans</span>
              </p>
              <div className="text-hero">
                <p>
                  FinCan Solutions was created to help business owners make
                  better financial decisions and present stronger business
                  financing requests. We understand that many entrepreneurs have
                  strong opportunities, but they often need help organizing the
                  numbers, explaining the transaction, and preparing a
                  professional package that lenders and decision-makers can
                  clearly understand.
                </p>
                <p>
                  We support clients with business plans, financial projections,
                  loan proposals, refinancing packages, acquisition financing
                  support, real estate project summaries, construction financing
                  packages, and practical management consulting.
                </p>
                <p>
                  Our approach is practical and direct. We focus on the
                  business, the numbers, the risks, the strengths, and the
                  structure required to move the transaction forward with
                  confidence.
                </p>
              </div>
              <div className="schedule" onClick={() => navigate(`/about`)}>
                Explore More
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
                  alt={`About us slide ${index + 1}`}
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidingRights;
