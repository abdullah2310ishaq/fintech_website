import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import img1 from "../../../../assets/aboutUs/img1.png";
import img2 from "../../../../assets/aboutUs/img2.jpeg";
import img3 from "../../../../assets/aboutUs/img3.jpeg";

function ProvidingRights() {
  const navigate = useNavigate();
  return (
    <div className="providing-rights-container">
      <div className="curved-about-wrapper">
        <div className="mainProviding">
          <div className="left-side">
            <div className="section-title">About Us</div>
            <div>
              <div className="heading-providing">
                We Help You Prepare, Structure, and Present Your{" "}
                <span className="blue-text">Business Financing Request</span>
              </div>
            </div>
            <div className="detail">
              <p>
                Many strong business opportunities do not move forward because
                the financing request is not presented properly. The numbers may
                be unclear, the business plan may be weak, or the lender package
                may not explain the transaction in the right way.
              </p>
              <p>
                FinCan helps close that gap. We work with business owners to
                prepare professional business plans, financial projections, loan
                proposals, refinancing packages, and practical advisory support
                so the transaction is easier to understand and stronger to
                present.
              </p>
            </div>
            <div
              className="explore-more-team"
              onClick={() => navigate(`/about`)}
            >
              Explore More
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
