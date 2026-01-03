import React, { useEffect, useState } from "react";
import "./style.scss";

import img1 from "../../../../assets/success1.png";
import img2 from "../../../../assets/success2.jpg";
import img3 from "../../../../assets/about-1.jpg";
import img4 from "../../../../assets/about-2.jpg";

const slides = [
  {
    id: 1,
    src: img1,
    title: "Financial Consultancy",
    text: "Lorem Ipsum is simply dummy text the printing and provide best visa ever. Lorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa ever",
  },
  {
    id: 2,
    src: img2,
    title: "Tax Planning",
    text: "Lorem Ipsum is simply dummy text the printing and provide best visa ever. Lorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa ever",
  },
  {
    id: 3,
    src: img3,
    title: "Retirement Plans",
    text: "Lorem Ipsum is simply dummy text the printing and provide best visa ever. Lorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa ever",
  },
  {
    id: 4,
    src: img4,
    title: "Investment Strategy",
    text: "Lorem Ipsum is simply dummy text the printing and provide best visa ever. Lorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa everLorem Ipsum is simply dummy text the printing and provide best visa ever.",
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Changed from 2000ms to 5000ms (5 seconds)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-div-success">
      <header className="success-header">
        <h2>our success <br /><span className="blue-text">stories</span></h2>

        <div className="right-side-box">

        <p>
          Guiding Your Financial Journey with Tailored Insurance, Retirement
          Planning
        </p>
        <button className="primary-cta">Explore More</button>
        </div>
      </header>

      <div className="image-stack-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`image-layer ${
              index === activeIndex ? "active" : "inactive"
            }`}
            style={{
              backgroundImage: `url(${slide.src})`,
              zIndex: index === activeIndex ? slides.length : index,
            }}
            onClick={() => setActiveIndex(index)}
          >
            {index === activeIndex && (
              <div className="overlay-success">
                <h3 className="title-slider">{slide.title}</h3>
                <p className="text-slider">{slide.text}</p>
                <button>Explore More</button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="dot-nav">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
