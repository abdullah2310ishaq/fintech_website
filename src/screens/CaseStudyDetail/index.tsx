import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import "./style.scss";
import Header from "../../components/Header";
// import detail1 from "../../assets/caseStudy/detail1.jpg";
// import detail2 from "../../assets/caseStudy/detail2.png";
// import detail3 from "../../assets/caseStudy/detail3.jpg";
// import detail4 from "../../assets/caseStudy/detail4.jpg";
import fb from "../../assets/blog/fb.png";
import x from "../../assets/blog/x.png";
import pinterest from "../../assets/blog/pinterest.png";
import linkedin from "../../assets/blog/in.png";
import Footer from "../../components/Footer";
import bg from "../../assets/common/circle-bg.png";

interface CaseStudy {
  _id: string;
  title: string;
  createdAt: string;
  detailedDescription?: string;
  subImages?: string[];
  masterImage?: string;
  visible: boolean;
}

function CaseStudyDetail() {
  const { id } = useParams();
  const [study, setStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCaseStudy = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/case-studies/${id}`);
        const result = await res.json();

        if (!res.ok)
          throw new Error(result.message || "Failed to fetch case study");

        setStudy(result);
      } catch (err: any) {
        toast.error(
          err?.message || "An error occurred while loading case study"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

  if (loading) {
    return (
      <div className="loader-overlay">
        <Oval
          height={80}
          width={80}
          color="#007bff"
          secondaryColor="#ccc"
          strokeWidth={4}
          strokeWidthSecondary={2}
          visible
        />
      </div>
    );
  }

  if (!study) {
    return (
      <div className="no-results">
        <h3>Case Study Not Found</h3>
      </div>
    );
  }

  const { title, createdAt, detailedDescription, subImages = [] } = study;

  const [beforeText, afterText] = (detailedDescription || "").split(
    "[#SEPARATOR TEXT BEFORE IMAGE#]"
  );

  return (
    <div>
      <Header />
      <div className="bg-img">
        <img loading="lazy" src={bg} alt="bg" />
      </div>
      <div className="blog-main">
        <span className="blog-title">Recent Case Studies</span>
        <span className="blog-subtitle">
          Guiding Your Financial Journey with Tailored Insurance, Retirement
          Planning, and Wealth-Building Strategies for Lifelong Security and
          Peace of Mind
        </span>
        <div className="schedule-btn" onClick={() => navigate(`/contactus`)}>
          Schedule a consultation
        </div>
      </div>

      {/* <div className='blog-img-main'>
                <img loading="lazy" src={blog1} alt="blog1" />
            </div> */}

      <div className="blue-box">
        <div
          className="blue-box-content"
          onClick={() => navigate(`/casestudy`)}
        >
          <span className="back-arrow">&#8592;</span> {/* Unicode left arrow */}
          <span className="blue-box-text">Back to Case Studies</span>
        </div>
      </div>

      <div className="casestudy-detail-div">
        <div className="left">
          <span className="date">
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="right">
          <p>{beforeText?.trim()}</p>

          {subImages.length > 0 && (
            <div className="image-grid">
              {subImages.map((imgUrl, idx) => (
                <img loading="lazy" key={idx} src={imgUrl} alt={`detail-${idx}`} />
              ))}
            </div>
          )}

          {afterText && <p>{afterText?.trim()}</p>}

          <div className="text-card-box">
            {/* <img loading="lazy" src="" alt="" /> */}
            <div className="quote-circle"> &ldquo;</div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat .
            </span>
            <div className="describe">
              <span className="author">Stanio lainto</span> <br />
              <span className="dummy">Authore</span>
            </div>
          </div>

          <div className="tabs-div">
            <div className="tabs-left">
              <div className="tab">Tab 1</div>
              <div className="tab">Tab 2</div>
              <div className="tab">Tab 3</div>
            </div>
            <div className="tabs-right">
              <img loading="lazy" src={fb} alt="Facebook" />
              <img loading="lazy" src={x} alt="X" />
              <img loading="lazy" src={pinterest} alt="Pinterest" />
              <img loading="lazy" src={linkedin} alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CaseStudyDetail;

// import React from "react";
// import "./style.scss";
// import Header from "../../components/Header";
// import detail1 from "../../assets/caseStudy/detail1.jpg";
// import detail2 from "../../assets/caseStudy/detail2.png";
// import detail3 from "../../assets/caseStudy/detail3.jpg";
// import detail4 from "../../assets/caseStudy/detail4.jpg";
// import fb from "../../assets/blog/fb.png";
// import x from "../../assets/blog/x.png";
// import pinterest from "../../assets/blog/pinterest.png";
// import linkedin from "../../assets/blog/in.png";
// import Footer from "../../components/Footer";
// import bg from '../../assets/common/circle-bg.png'
// function CaseStudyDetail() {
//   return (
//     <div>
//       <Header />
//       <div className="bg-img"><img loading="lazy" src={bg} alt="bg" /></div>
//       <div className="blog-main">
//         <span className="blog-title">
//            Recent Case Studies
//         </span>
//         <span className="blog-subtitle">
//           Guiding Your Financial Journey with Tailored Insurance, Retirement
//           Planning, and Wealth-Building Strategies for Lifelong Security and
//           Peace of Mind
//         </span>
//         <div className="schedule-btn">Schedule a consultation</div>
//       </div>

//       {/* <div className='blog-img-main'>
//                 <img loading="lazy" src={blog1} alt="blog1" />
//             </div> */}

//       <div className="blue-box">
//   <div className="blue-box-content">
//     <span className="back-arrow">&#8592;</span> {/* Unicode left arrow */}
//     <span className="blue-box-text">Back to Case Studies</span>
//   </div>
// </div>

//       <div className="casestudy-detail-div">
//         <div className="left">
//           <span className="date">June 9, 2025</span>
//         </div>
//         <div className="right">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat.Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//             ea commodo consequat.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//             ea commodo consequat.Duis aute irure dolor in reprehenderit in
//             voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//             officia deserunt mollit anim id est laborum
//           </p>

//           <div className="image-grid">
//             <img loading="lazy" src={detail1} alt="1" />
//             <img loading="lazy" src={detail2} alt="2" />
//             <img loading="lazy" src={detail3} alt="3" />
//             <img loading="lazy" src={detail4} alt="4" />
//           </div>

//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//             ea commodo consequat. Duis aute irure dolor in reprehenderit in
//             voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//             officia deserunt mollit anim id est laborum.
//           </p>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
//             incididunt ut labore et dolore magna aliqua. Ut enim ad minim
//             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//             ea commodo consequat. Duis aute irure dolor in reprehenderit in
//             voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
//             officia deserunt mollit anim id est laborum.
//           </p>

//           <div className="text-card-box">
//             {/* <img loading="lazy" src="" alt="" /> */}
//             <div className="quote-circle"> &ldquo;</div>
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat .
//             </span>
//             <div className="describe">
//               <span className="author">Stanio lainto</span> <br />
//               <span className="dummy">Authore</span>
//             </div>
//           </div>

//           <div className="tabs-div">
//             <div className="tabs-left">
//               <div className="tab">Tab 1</div>
//               <div className="tab">Tab 2</div>
//               <div className="tab">Tab 3</div>
//             </div>
//             <div className="tabs-right">
//               <img loading="lazy" src={fb} alt="Facebook" />
//               <img loading="lazy" src={x} alt="X" />
//               <img loading="lazy" src={pinterest} alt="Pinterest" />
//               <img loading="lazy" src={linkedin} alt="LinkedIn" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default CaseStudyDetail;
