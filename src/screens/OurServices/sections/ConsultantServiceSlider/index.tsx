import React, { useRef } from 'react';
import './style.scss';
import img1 from '../../../../assets/aboutUs/img1.png'
import img2 from '../../../../assets/aboutUs/img2.jpg'
import img3 from '../../../../assets/aboutUs/img3.jpg'
import img4 from '../../../../assets/aboutUs/img1.png'
import img5 from '../../../../assets/aboutUs/img2.jpg'
import img6 from '../../../../assets/aboutUs/img3.jpg'

const images = [
  { src: img1, detail: 'Retirement Planning' },
  { src: img2, detail: 'Insurance Consulting' },
  { src: img3, detail: 'Wealth Management' },
  { src: img4, detail: 'Tax Optimization' },
  { src: img5, detail: 'Estate Planning' },
  { src: img6, detail: 'Investment Advice' },
//   { src: img, detail: 'Business Consulting' },
];

function ConsultantSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth / 1.2;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="consultant-slider-container">
      <h2 className="slider-heading">Best Financial Consultant Services</h2>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={() => scroll('left')}>
          &#10094;
        </button>

        <div className="slider" ref={sliderRef}>
          {images.map((img, idx) => (
            <div className="slider-item" key={idx}>
              <img loading="lazy" className='slider-img' src={img.src} alt={`slide-${idx}`} />
              <div className="overlay-consultant">
                <p className='text-slider-detail'>{img.detail}</p>
                <div className='line-slider'/>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll('right')}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default ConsultantSlider;
