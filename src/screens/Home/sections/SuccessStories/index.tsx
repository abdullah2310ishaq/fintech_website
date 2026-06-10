import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import "./style.scss";
import fallbackImg from "../../../../assets/success1.png";

interface CaseStudySlide {
  _id: string;
  title: string;
  description: string;
  masterImage?: string;
}

function truncateText(text: string, max = 220) {
  if (!text) return "";
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export default function SuccessStories() {
  const [slides, setSlides] = useState<CaseStudySlide[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function fetchStories() {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/case-studies?page=1&limit=10`);
        const json = await res.json();
        if (!res.ok) throw new Error(json.message);

        setSlides(json.data || []);
        setActiveIndex(0);
      } catch {
        setSlides([]);
      } finally {
        setLoading(false);
      }
    }

    fetchStories();
  }, [baseUrl]);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="main-div-success">
      <header className="success-header">
        <h2>
          our success <br />
          <span className="blue-text">stories</span>
        </h2>

        <div className="right-side-box">
          <p>
            Guiding Your Financial Journey with Tailored Insurance, Retirement
            Planning
          </p>
          <button
            className="primary-cta"
            onClick={() => navigate("/casestudy")}
          >
            Explore More
          </button>
        </div>
      </header>

      {loading ? (
        <div className="success-stories-loader">
          <Oval height={50} width={50} color="#005D9A" visible />
        </div>
      ) : slides.length === 0 ? (
        <div className="success-stories-empty">
          <p>Success stories coming soon.</p>
        </div>
      ) : (
        <>
          <div className="image-stack-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide._id}
                className={`image-layer ${
                  index === activeIndex ? "active" : "inactive"
                }`}
                style={{
                  backgroundImage: `url(${slide.masterImage || fallbackImg})`,
                  zIndex: index === activeIndex ? slides.length : index,
                }}
                onClick={() => setActiveIndex(index)}
              >
                {index === activeIndex && (
                  <div className="overlay-success">
                    <h3 className="title-slider">{slide.title}</h3>
                    <p className="text-slider">
                      {truncateText(slide.description)}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/casestudydetail/${slide._id}`);
                      }}
                    >
                      Explore More
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {slides.length > 1 && (
            <div className="dot-nav">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show success story ${i + 1}`}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
