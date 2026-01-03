import React from "react";
import "./style.scss";

interface MarqueeProps {
  images: string[];
  speed?: number; // animation duration in seconds
  height?: string;
  width?: string;
  borderRadius?: string;
  padding?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  images,
  speed = 20,
  height = "64px",
  width = "auto",
  borderRadius = 0,
  padding = "auto",
}) => {
  return (
    <div
      className="marquee-wrapper"
      style={{
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        padding: padding,
      }}
    >
      <div className="marquee" style={{ animationDuration: `${speed}s` }}>
        {/* {images.concat(images).map((src, index) => (
          <div className="marquee-image-wrapper" key={index}>
            <img loading="lazy" src={src} alt={`marquee-img-${index}`} style={{ height, width }} />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Marquee;
