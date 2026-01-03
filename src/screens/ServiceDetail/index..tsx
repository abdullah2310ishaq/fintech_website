import { useEffect, useState } from "react";
import "./style.scss";
import Header from "../../components/Header";
import blog1 from "../../assets/blog/blog-1.jpg";
import blog3 from "../../assets/blog/blog-3.jpg";
import blog4 from "../../assets/blog/blog-4.jpg";

import bullet from "../../assets/bullet2.png";
import fb from "../../assets/blog/fb.png";
import x from "../../assets/blog/x.png";
import pinterest from "../../assets/blog/pinterest.png";
import linkedin from "../../assets/blog/in.png";

import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { getCloudinaryUrl } from "../../utils/getCloudinaryUrl";
import bg from "../../assets/common/circle-bg.png";
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  bio?: string;
  experience: number;
  image?: { url?: string };
}

interface Service {
  _id: string;
  title: string;
  description: string;
  detailedDescription: string;
  masterImage?: string;
  specialist?: TeamMember;
}

function ServiceDetail() {
  const { id } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await fetch(`${baseUrl}/services/public/${id}`);
        const resJson = await res.json();

        if (!res.ok) throw new Error("Failed to fetch service");

        const data: Service = resJson.data;
        setService(data);
      } catch (error: any) {
        toast.error(error.message || "Error loading service details");
      } finally {
        setLoading(false);
      }
    }

    fetchService();
  }, [baseUrl, id]);
  function renderDetailedDescription(text?: string) {
    if (!text) return null;

    // normalize Windows CRLF to LF
    const normalized = text.replace(/\r\n/g, "\n");

    // split into lines, preserve bullets
    const lines = normalized
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean);

    const elements: JSX.Element[] = [];
    let currentList: JSX.Element[] = [];

    const flushList = () => {
      if (currentList.length) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="service-bullet-list">
            {currentList}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, i) => {
      if (/^[-*]\s*/.test(line)) {
        // dash/hyphen bullet line → push to current list with bold styling
        const cleaned = line.replace(/^[-*]\s*/, "").trim();
        currentList.push(
          <li key={`li-${i}`} className="service-bullet-item">
            <strong>{cleaned}</strong>
          </li>
        );
      } else if (/^(?:●|•)\s*/.test(line)) {
        // other bullet types → push to current list without bold
        const cleaned = line.replace(/^(?:●|•)\s*/, "").trim();
        currentList.push(
          <li key={`li-${i}`} className="service-bullet-item">
            {cleaned}
          </li>
        );
      } else {
        // normal paragraph → flush list before it
        flushList();
        elements.push(<p key={`p-${i}`}>{line}</p>);
      }
    });

    // flush any list left at the end
    flushList();

    return elements;
  }
  return (
    <div className="">
      <Header />

      {loading ? (
        <div className="loader-overlay">
          <Oval height={50} width={50} color="#007bff" visible />
        </div>
      ) : !service ? (
        <div className="no-results">
          <h3>Service not found</h3>
          <p>
            The service you're looking for could not be loaded or doesn't exist.
          </p>
        </div>
      ) : (
        <>
          <div className="blog-main">
            <div className="bg-img bg-test-back">
              <img loading="lazy" src={bg} alt="bg" />
            </div>
            <span className="blog-title">{service.title}</span>
            <span className="blog-subtitle">{service.description}</span>
            <div
              className="schedule-btn"
              onClick={() => navigate(`/contactus`)}
            >
              Schedule a consultation
            </div>
          </div>

          <div className="blog-img-main-1">
            <img
              loading="lazy"
              src={getCloudinaryUrl("blog-1_uiuvjq.jpg")}
              alt="blog1"
              onError={(e) => ((e.target as HTMLImageElement).src = blog1)}
            />
          </div>

          <div className="main-block">
            <div className="blue-box"></div>

            <div className="blog-detail-div">
              <img
                loading="lazy"
                src={service.masterImage}
                alt="blog2"
                className="blog-2-img"
              />
              <span className="blog-title-second">{service.title}</span>
              <div className="blog-content">
                {renderDetailedDescription(service.detailedDescription)}
              </div>

              {/* Commented out - everything after bullet points removed */}
              {/* <div className="explore-beyond">
                <img
                  loading="lazy"
                  src={getCloudinaryUrl("blog-3_c3numb.jpg")}
                  alt="blog3"
                  className="explore-beyond-img"
                  onError={(e) => ((e.target as HTMLImageElement).src = blog3)}
                />
                <div className="explore-beyond-detail">
                  <span className="explore-heading">
                    Explore Beyond Boundaries <br /> Wanderlust Unleashed
                  </span>
                  <span className="explore-beyond-text">
                    True financial growth begins when you step beyond limits and
                    explore smarter opportunities. Our mission is to empower
                    individuals and businesses with knowledge, strategies, and
                    tools that help them confidently navigate new horizons in
                    wealth and investment.
                  </span>

                  <ul className="explore-bullets">
                    <li>
                      <img loading="lazy" src={bullet} alt="bullet" /> Common
                      pitfalls to avoid in financial planning
                    </li>
                    <li>
                      <img loading="lazy" src={bullet} alt="bullet" /> Building
                      a stronger foundation for your business
                    </li>
                    <li>
                      <img loading="lazy" src={bullet} alt="bullet" /> Insights
                      successful investors already know
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-card-box">
                <div className="quote-circle"> &ldquo;</div>
                <span className="text-card-detail">
                  Sound financial advice is not about quick fixes, but about
                  building long-term confidence. Every decision we guide is
                  backed by research, experience, and a commitment to helping
                  clients secure their future. With the right support, financial
                  challenges turn into opportunities for growth.
                </span>
                <div className="describe">
                  <span className="authorTeam">Stanio Lainto</span> <br />
                  <span className="dummy">Advisor</span>
                </div>
              </div>

              <div className="get-consultancy">
                <div className="get-consultancy-title">Get Consultancy</div>
                <div className="get-consultancy-subText">
                  Whether you're planning for retirement, seeking funding for
                  your startup, or managing complex business finances, our
                  consultancy team provides personalized guidance at every
                  stage. We believe in practical, actionable advice that not
                  only solves immediate concerns but also sets you up for
                  long-term success. Reach out today and take the first step
                  toward a more secure financial future.
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
              <div className="person-info-wrapper">
                <div className="meet-team-heading">Meet Our Team Member</div>
                {service.specialist ? (
                  <div className="person-info-div">
                    <img
                      loading="lazy"
                      src={service.specialist.image?.url || blog4}
                      alt={service.specialist.name}
                      className="explore-beyond-img"
                    />
                    <div className="explore-beyond-detail">
                      <h2 className="specialist-name">
                        {service.specialist.name}
                      </h2>
                      <div className="specialist-title">
                        <div className="title-line"></div>
                        <span>{service.specialist.role}</span>
                      </div>
                      <p className="specialist-bio">
                        {service.specialist.bio || "No bio available."}
                      </p>
                      <div className="specialist-details">
                        <div className="detail-item">
                          <span className="detail-label">Experience:</span>
                          <span className="detail-value">
                            {service.specialist.experience} years
                          </span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Email:</span>
                          <span className="detail-value">
                            {service.specialist.email}
                          </span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Phone:</span>
                          <span className="detail-value">
                            {service.specialist.phone}
                          </span>
                        </div>
                      </div>
                      <button className="contact-me-person">Contact Me</button>
                    </div>
                  </div>
                ) : (
                  <div className="no-results">
                    No specialist assigned to this service.
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default ServiceDetail;

//Commented on 17 June

// import React, { useEffect, useState } from "react";
// import "./style.scss";
// import Header from "../../components/Header";
// import blog1 from "../../assets/blog/blog-1.jpg";
// import blog2 from "../../assets/blog/blog-2.jpg";
// import blog3 from "../../assets/blog/blog-3.jpg";
// import blog4 from "../../assets/blog/blog-4.jpg";

// import bullet from "../../assets/bullet2.png";
// import fb from "../../assets/blog/fb.png";
// import x from "../../assets/blog/x.png";
// import pinterest from "../../assets/blog/pinterest.png";
// import linkedin from "../../assets/blog/in.png";

// import { Oval } from "react-loader-spinner";
// import { toast } from "react-toastify";
// import Footer from "../../components/Footer";

// interface TeamMember {
//   _id: string;
//   name: string;
//   role: string;
//   email: string;
//   phone: string;
//   bio?: string;
//   experience: number;
//   image?: { url?: string };
// }

// function ServiceDetail() {
//   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
//   const [loading, setLoading] = useState(true);
//   const baseUrl = import.meta.env.VITE_API_BASE_URL;
//   const people = [
//     {
//       name: "Ashikur Rahman",
//       title: "Financial Consultant",
//       description:
//         "Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere",
//       responsibility: "Lorem ipsum",
//       experience: "10 years +",
//       email: "adbs@gmail.com",
//       phone: "(907) 555-0101",
//       image: blog4,
//     },
//     {
//       name: "Sophia Lee",
//       title: "Wealth Manager",
//       description:
//         "Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere",
//       responsibility: "Retirement Planning",
//       experience: "8 years",
//       email: "sophia@example.com",
//       phone: "(310) 555-0241",
//       image: blog4,
//     },
//     {
//       name: "Marcus Zhang",
//       title: "Investment Advisor",
//       description:
//         "Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere",
//       responsibility: "Portfolio Management",
//       experience: "12 years",
//       email: "marcus@example.com",
//       phone: "(408) 555-0132",
//       image: blog4,
//     },
//     {
//       name: "Lena Patel",
//       title: "Insurance Specialist",
//       description:
//         "Vivamus eros justo, posuere lobortis laoreet matti ullamcorper...",
//       responsibility: "Insurance Planning",
//       experience: "6 years",
//       email: "lena@example.com",
//       phone: "(212) 555-0142",
//       image: blog4,
//     },
//   ];

//   useEffect(() => {
//     async function fetchTeamMembers() {
//       try {
//         const res = await fetch(`${baseUrl}/team-members?fromAdminPanel=false`);
//         const data: TeamMember[] = await res.json();
//         if (!res.ok) throw new Error("Failed to fetch team members");

//         setTeamMembers(data);
//       } catch (error: any) {
//         toast.error(error.message || "Error loading team members");
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchTeamMembers();
//   }, [baseUrl]);

//   return (
//     <div className="">
//       <Header />
//       <div className="blog-main">
//         <span className="blog-title">Financial Consultancy</span>
//         <span className="blog-subtitle">
//           Guiding Your Financial Journey with Tailored Insurance, Retirement
//           Planning, and Wealth-Building Strategies for Lifelong Security and
//           Peace of Mind
//         </span>
//         <div className="schedule-btn">Schedule a consultation</div>
//       </div>

//       <div className="blog-img-main-1">
//         <img loading="lazy" src={blog1} alt="blog1" />
//       </div>

//       <div className="main-block">
//         <div className="blue-box"></div>

//         <div className="blog-detail-div">
//           <img loading="lazy" src={blog2} alt="blog2" className="blog-2-img" />
//           <span className="blog-title-second">Financial Consultancy</span>
//           <span className="blog-content">
//             {/* Content unchanged */}
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
//             viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
//             justo, posuere loborti viverra laoreet matti ullamcorper posuere
//             viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue
//             mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//             posuere loborti viverra laoreet matti ullamcorper posuere viverra
//             .Aliquam eros justo, posu
//             <br /> <br />
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
//             viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
//             justo, posuere loborti viverra laoreet matti ullamcorper posuere
//             viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue
//             mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//             posuere loborti viverra laoreet matti ullamcorper posuere viverra
//             .Aliquam eros justo, posu
//             <br />
//             <br />
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
//             viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
//             justo, posuere loborti viverra laoreet matti ullamcorper posuere
//             viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue
//             mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//             posuere loborti viverra laoreet matti ullamcorper posuere viverra
//             .Aliquam eros justo, posu
//           </span>

//           <br />
//           <br />
//           <span>{/* More content */}</span>

//           <div className="explore-beyond">
//             <img loading="lazy" src={blog3} alt="blog3" className="explore-beyond-img" />
//             <div className="explore-beyond-detail">
//               <span className="explore-heading">
//                 Explore Beyond Boundaries <br /> Wanderlust Unleashed
//               </span>
//               <span className="explore-beyond-text">
//                 Aliquam eros justo, posuere loborti viverra laoreet mat ti
//                 ullamcorper posuere viverra .Aliquam eros justo, po suere
//                 lobortis viverra laoreet augue mattis fmentum ullamcorper
//                 viverra laoreet Aliquam
//               </span>

//               <ul className="explore-bullets">
//                 <li>
//                   <img loading="lazy" src={bullet} alt="bullet" /> Mistakes To Avoid
//                 </li>
//                 <li>
//                   <img loading="lazy" src={bullet} alt="bullet" /> Your Startup
//                 </li>
//                 <li>
//                   <img loading="lazy" src={bullet} alt="bullet" /> Knew About Fonts
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="text-card-box">
//             <div className="quote-circle"> &ldquo;</div>
//             <span className="text-card-detail">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat .
//             </span>
//             <div className="describe">
//               <span className="authorTeam">Stanio lainto</span> <br />
//               <span className="dummy">Authore</span>
//             </div>
//           </div>

//           <div className="get-consultancy">
//             <div className="get-consultancy-title">Get Consultancy</div>
//             <div className="get-consultancy-subText">
//               Aliquam eros justo, posuere loborti viverra laoreet matti
//               ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
//               viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
//               Aliquam eros justo, posuere loborti viverra laoreet matti
//               ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
//               justo, posuere loborti viverra laoreet matti ullamcorper posuere
//               viverra .Aliquam eros justo, posuere lobortis viverra laoreet
//               augue mattis fmentum ullamcorper viverra laoreet Aliquam eros
//               justo, posuere loborti viverra laoreet matti ullamcorper posuere
//               viverra .Aliquam eros justo, posu
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

//           <div className="person-info-wrapper">
//             <div className="meet-team-heading">Meet Our Team Members</div>
//             {people.map((person, index) => (
//               <div className="person-info-div" key={index}>
//                 <img loading="lazy"
//                   src={person.image}
//                   alt={person.name}
//                   className="explore-beyond-img"
//                 />
//                 <div className="explore-beyond-detail">
//                   <span className="nameTeamMember">{person.name}</span>
//                   <div className="person-occup">{person.title}</div>
//                   <span className="explore-beyond-text-1">
//                     {person.description}
//                   </span>
//                   <div>
//                     <span className="bold-heading">Responsibility: </span>{" "}
//                     <span className="simple-heading">
//                       {person.responsibility}
//                     </span>
//                   </div>
//                   <div>
//                     <span className="bold-heading">Experience: </span>{" "}
//                     <span className="simple-heading">{person.experience}</span>
//                   </div>
//                   <div>
//                     <span className="bold-heading">Email: </span>{" "}
//                     <span className="simple-heading">{person.email}</span>
//                   </div>
//                   <div>
//                     <span className="bold-heading">Phone: </span>{" "}
//                     <span className="simple-heading">{person.phone}</span>
//                   </div>
//                   <div className="contact-me-person">Contact me</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* <div className="person-info-div">
//            <img loading="lazy" src={blog4} alt="blog3" className="explore-beyond-img" />
//            <div className="explore-beyond-detail">
//              <span>Ashikur Rahman</span>
//              <div>Financial Consultant</div>
//              <span className="explore-beyond-text">
//                Eros justo, posuere loborti viverra laoreet matti ullamcorper
//                posuere viverra .Aliquam eros justo, posuere lobortis, viverra
//                laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam
//                eros justo, posuere loborti viverra laoreet matti ullamcorper
//                posuere
//              </span>

//              <div>
//                <span>Responsibilty: </span> <span>Lorem ipsum </span>
//              </div>
//              <div>
//                <span>Experience: </span> <span>10 years + </span>
//              </div>
//              <div>
//                <span>Email: </span> <span>adbs@gmail.com </span>
//              </div>
//              <div>
//                <span>Phone: </span> <span>(907) 555-0101 </span>
//              </div>

//              <div className="contact-me-person">Contact me</div>
//            </div>
//          </div> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default ServiceDetail;

// import React from "react";
// import "./style.scss";
// import Header from "../../components/Header";
// import blog1 from "../../assets/blog/blog-1.jpg";
// import blog2 from "../../assets/blog/blog-2.jpg";
// import blog3 from "../../assets/blog/blog-3.jpg";
// import blog4 from "../../assets/blog/blog-4.jpg";

// import bullet from "../../assets/bullet2.png";
// import fb from "../../assets/blog/fb.png";
// import x from "../../assets/blog/x.png";
// import pinterest from "../../assets/blog/pinterest.png";
// import linkedin from "../../assets/blog/in.png";

// function Blog() {
//   return (
//     <div className="">
//       <Header />
//       <div className="blog-main">
//         <span className="blog-title">Financial Consultancy</span>
//         <span className="blog-subtitle">
//           Guiding Your Financial Journey with Tailored Insurance, Retirement
//           Planning, and Wealth-Building Strategies for Lifelong Security and
//           Peace of Mind
//         </span>
//         <div className="schedule-btn">Schedule a consultation</div>
//       </div>

//       <div className="blog-img-main">
//         <img loading="lazy" src={blog1} alt="blog1" />
//       </div>

//       <div className="blog-detail-div">
//         <img loading="lazy" src={blog2} alt="blog2" />
//         <span>Financial Consultancy</span>
//         <span>
//           Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
//           posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet
//           augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//           posuere loborti viverra laoreet matti ullamcorper posuere viverra
//           .Aliquam eros justo, posu Aliquam eros justo, posuere loborti viverra
//           laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere
//           lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
//           laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
//           ullamcorper posuere viverra .Aliquam eros justo, posu
//         </span>
//         <br />
//         <br />
//         <span>
//           Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
//           posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet
//           augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//           posuere loborti viverra laoreet matti ullamcorper posuere viverra
//           .Aliquam eros justo, posu Aliquam eros justo, posuere loborti viverra
//           laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere
//           lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
//           laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
//           ullamcorper posuere viverra .Aliquam eros justo, posu
//         </span>
//         <br />
//         <br />
//         <span>
//           Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
//           posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet
//           augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//           posuere loborti viverra laoreet matti ullamcorper posuere viverra
//           .Aliquam eros justo, posu Aliquam eros justo, posuere loborti viverra
//           laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere
//           lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
//           laoreet Aliquam eros justo, posuere loborti viverra laoreet matti
//           ullamcorper posuere viverra .Aliquam eros justo, posu
//         </span>

//         <div className="explore-beyond">
//           <img loading="lazy" src={blog3} alt="blog3" className="explore-beyond-img" />
//           <div className="explore-beyond-detail">
//             <span>
//               Explore Beyond Boundaries <br /> Wanderlust Unleashed
//             </span>
//             <span className="explore-beyond-text">
//               Aliquam eros justo, posuere loborti viverra laoreet mat ti
//               ullamcorper posuere viverra .Aliquam eros justo, po suere lobortis
//               viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
//               Aliquam
//             </span>

//             <ul className="explore-bullets">
//               <li>
//                 <img loading="lazy" src={bullet} alt="bullet" /> Adventure in the Wild
//               </li>
//               <li>
//                 <img loading="lazy" src={bullet} alt="bullet" /> Cultures Worth Discovering
//               </li>
//               <li>
//                 <img loading="lazy" src={bullet} alt="bullet" /> Scenic Hidden Treasures
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-card-box">
//           {/* <img loading="lazy" src="" alt="" /> */}
//           <div className="quote-circle"> &ldquo;</div>
//           <span>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat .
//           </span>
//           <div className="describe">
//             <span className="author">Stanio lainto</span> <br />
//             <span className="dummy">Authore</span>
//           </div>
//         </div>

//         <div className="get-consultancy">
//           <div className="get-consultancy-title">Get Consultancy</div>
//           <div className="get-consultancy-subText">
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis
//             viverra laoreet augue mattis fmentum ullamcorper viverra laoreet
//             Aliquam eros justo, posuere loborti viverra laoreet matti
//             ullamcorper posuere viverra .Aliquam eros justo, posu Aliquam eros
//             justo, posuere loborti viverra laoreet matti ullamcorper posuere
//             viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue
//             mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
//             posuere loborti viverra laoreet matti ullamcorper posuere viverra
//             .Aliquam eros justo, posu
//           </div>
//         </div>

//         <div className="tabs-div">
//           <div className="tabs-left">
//             <div className="tab">Tab 1</div>
//             <div className="tab">Tab 2</div>
//             <div className="tab">Tab 3</div>
//           </div>
//           <div className="tabs-right">
//             <img loading="lazy" src={fb} alt="Facebook" />
//             <img loading="lazy" src={x} alt="X" />
//             <img loading="lazy" src={pinterest} alt="Pinterest" />
//             <img loading="lazy" src={linkedin} alt="LinkedIn" />
//           </div>
//         </div>

//         <div className="person-info-div">
//           <img loading="lazy" src={blog4} alt="blog3" className="explore-beyond-img" />
//           <div className="explore-beyond-detail">
//             <span>Ashikur Rahman</span>
//             <div>Financial Consultant</div>
//             <span className="explore-beyond-text">
//               Eros justo, posuere loborti viverra laoreet matti ullamcorper
//               posuere viverra .Aliquam eros justo, posuere lobortis, viverra
//               laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam
//               eros justo, posuere loborti viverra laoreet matti ullamcorper
//               posuere
//             </span>

//             <div>
//               <span>Responsibilty: </span> <span>Lorem ipsum </span>
//             </div>
//             <div>
//               <span>Experience: </span> <span>10 years + </span>
//             </div>
//             <div>
//               <span>Email: </span> <span>adbs@gmail.com </span>
//             </div>
//             <div>
//               <span>Phone: </span> <span>(907) 555-0101 </span>
//             </div>

//             <div className="contact-me-person">Contact me</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog;
