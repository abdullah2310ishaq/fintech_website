import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
//import img1 from "../../../../assets/team-1.jpg";
// import img2 from "../../../../assets/team-2.jpg";
// import img3 from "../../../../assets/team-3.jpg";
import { getCloudinaryUrl } from "../../../../utils/getCloudinaryUrl";

function OurTeam() {
  const [positions, setPositions] = useState(["img-1", "img-2", "img-3"]);
  const img1 = getCloudinaryUrl("v1767125910/fincan/file_qtbbtd.png");
  const img2 = getCloudinaryUrl("v1767125848/fincan/file_ixjss0.png");
  const img3 = getCloudinaryUrl("v1767125493/fincan/file_xt78wn.png");
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) => {
        // Rotate the array: [a, b, c] => [c, a, b]
        const [first, second, third] = prev;
        return [third, first, second];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const positionClass = (imgKey: string) => {
    const index = positions.indexOf(imgKey);
    if (index === 0) return "pos-1";
    if (index === 1) return "pos-2";
    return "pos-3";
  };

  return (
    <div className="our-team-main">
      <div className="our-team-imgs">
        <div className={`img-wrapper ${positionClass("img-1")}`}>
          <img loading="lazy" src={img1} alt="Team 1" />
        </div>
        <div className={`img-wrapper ${positionClass("img-2")}`}>
          <img loading="lazy" src={img2} alt="Team 2" />
        </div>
        <div className={`img-wrapper ${positionClass("img-3")}`}>
          <img loading="lazy" src={img3} alt="Team 3" />
        </div>
      </div>

      <div className="our-team-detail-div">
        <span className="our-team-text">Our Team</span>
        <div className="meet-the-face">
          <span>Meet the faces </span>
          <span>
            Behind <span className="blue-text"> Fincan Inc.</span>
          </span>
        </div>
        <div className="meet-face-para">
          Our team of experienced financial consultants, investment advisors,
          and business funding specialists work together to deliver real
          results. With a client-first mindset and deep industry knowledge,
          we’re here to guide your financial journey with personalized
          strategies and honest advice you can rely on.
        </div>
        <div className="explore-more-team" onClick={() => navigate(`/about`)}>
          Explore More
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
