import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const testimonials = [
  {
    id: 1,
    img: "https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-6-1.svg",
    message:
      "“Working with Robert has been a game changer for me. He takes the time to explain everything in simple terms and makes sure I understand my options. His son is just as committed and professional — together they bring amazing energy and trust to the table.”",
    author: "William",
    rating: 3,
  },
  {
    id: 2,
    img: "https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-7.svg",
    message:
      "“Robert’s guidance has given me so much peace of mind. He always goes the extra mile to make sure things are done right. His son adds a fresh perspective and is incredibly reliable. I truly feel supported by both of them and couldn’t ask for better service.”",
    author: "Mark",
    rating: 4,
  },
  {
    id: 3,
    img: "https://c.animaapp.com/mbg35a3lsFgGqz/img/rectangle-6.svg",
    message:
      "“I can’t say enough good things about Robert and his son. They’re knowledgeable, approachable, and genuinely care about helping people. Every interaction has been smooth and professional, and I’ve already recommended them to several of my friends.”",
    author: "Susan",
    rating: 5,
  },
];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`star-full-${i}`}>&#9733;</span>);
  }
  if (hasHalfStar) {
    stars.push(<span key="star-half">&#9734;</span>);
  }
  return stars;
};

export const Testimonial = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="testimonial">
      <header className="success-header">
        <div className="testimonial-header-div">
          <span>Testimonial</span>
          <h2>
            What our clients <br />
            <span className="blue-text">are saying</span>
          </h2>
        </div>

        <div className="right-side-box">
          {/* <p>
          Guiding Your Financial Journey with Tailored Insurance, Retirement
          Planning
        </p> */}
          <button
            className="primary-cta"
            onClick={() => navigate(`/contactus`)}
          >
            Book Your Free Consultation
          </button>
        </div>
      </header>

      <div className="cards">
        {testimonials.map((item) => (
          <div>
            <div className="card" key={item.id}>
              <img
                loading="lazy"
                src={item.img}
                alt={`testimonial-${item.id}`}
              />
              <div className="overlay">
                <div className="stars">{renderStars(item.rating)}</div>
                <div className="message">{item.message}</div>
              </div>
            </div>
            <div className="author">- {item.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
