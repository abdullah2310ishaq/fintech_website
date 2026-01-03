import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "./style.scss";
import main from "../../assets/about-img-main.png";
import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import about3 from "../../assets/about-3.jpg";
import about4 from "../../assets/about-4.jpg";
import finWis from "../../assets/financial-wisdom.png";
import ethics1 from "../../assets/ethics-1.png";

import Marquee from "../../components/Marquee";

import m1 from "../../assets/marquee/img1.png";
import m2 from "../../assets/marquee/img2.png";
import m3 from "../../assets/marquee/img3.png";
import m4 from "../../assets/marquee/img4.png";
import m5 from "../../assets/marquee/img5.png";
import member1 from "../../assets/aboutUs/team/team1.png";
import member2 from "../../assets/aboutUs/team/team2.png";
import member3 from "../../assets/aboutUs/team/team3.png";
import member4 from "../../assets/aboutUs/team/team4.png";

import team1 from "../../assets/team-1.jpg";
import bullet from "../../assets/bullet.png";
import { Group } from "../Homepage/sections/Group";
import Footer from "../../components/Footer";
import objects from "../../assets/OBJECTS.png";
import bg from "../../assets/common/circle-bg.png";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import { getCloudinaryUrl } from "../../utils/getCloudinaryUrl";
import AnimatedCounter from "../../components/AnimatedCounter";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  bio?: string;
  description?: string;
  experience: number;
  image?: { url?: string };
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

function About() {
  const [mainImage, setMainImage] = useState(
    getCloudinaryUrl("/about-img-main_nqehbb.png")
  );
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const currentCard = teamMembers[activeIndex];
  const navigate = useNavigate();
  const thumbnails = [
    getCloudinaryUrl("/about-1_hle2ad.jpg"),
    getCloudinaryUrl("/about-2_nq1xxy.jpg"),
    getCloudinaryUrl("/about-3_spsfki.jpg"),
    getCloudinaryUrl("/about-4_bdl3g6.jpg"),
  ];
  const thumbnailData = [
    { cloud: getCloudinaryUrl("/about-1_hle2ad.jpg"), fallback: about1 },
    { cloud: getCloudinaryUrl("/about-2_nq1xxy.jpg"), fallback: about2 },
    { cloud: getCloudinaryUrl("/about-3_spsfki.jpg"), fallback: about3 },
    { cloud: getCloudinaryUrl("/about-4_bdl3g6.jpg"), fallback: about4 },
  ];
  const teamMembersList = [
    {
      image: member1,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member2,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member3,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member4,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member1,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member3,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member4,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
    {
      image: member2,
      name: "John Doe",
      designation: "Frontend Developer",
      description:
        "Passionate about creating interactive UIs and seamless user experiences.",
      facebookUrl: "https://facebook.com/johndoe",
      instagramUrl: "https://instagram.com/johndoe",
      twitterUrl: "https://twitter.com/johndoe",
    },
  ];
  useEffect(() => {
    // More aggressive scroll-to-top fix
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Immediate scroll
    scrollToTop();

    // Additional attempts for mobile
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);

    async function fetchTeamMembers() {
      try {
        const res = await fetch(`${baseUrl}/team-members?fromAdminPanel=false`);
        if (!res.ok) throw new Error("Failed to fetch team members");
        const data: TeamMember[] = await res.json();
        setTeamMembers(data);
      } catch (err: any) {
        toast.error(err.message || "Error loading team members");
      } finally {
        setLoading(false);
      }
    }
    fetchTeamMembers();
  }, [baseUrl]);

  const items = [
    "Financial Planning",
    "Insurance Solutions",
    "Retirement Plans",
    "Wealth Management",
  ];
  const imageArray = [m1, m2, m3, m4, m5];

  const handleThumbnailClick = (imgSrc: string) => {
    setMainImage(imgSrc);
  };

  return (
    <div>
      <Header />
      <div className="bg-img">
        <img loading="lazy" src={bg} alt="bg" />
      </div>
      <div className="about-us-hero">
        <div className="left-side">
          <img loading="lazy" src={bg} alt="decor" className="circle-hero-bg" />
          <span>About Us</span>
          <span className="text-below-about">
            At FinCan Solutions Inc., we help entrepreneurs, developers, and
            investors transform business ideas into fundable, lender-ready
            projects. From startups and expansions to real estate and
            construction financing, our goal is to make your vision bankable,
            sustainable, and lender-approved. With global banking experience
            spanning the Middle East, Europe, and North America, we bring an
            international perspective to local financing — combining financial
            acumen, industry insight, and strong institutional relationships.
          </span>
          <div className="schedule-btn" onClick={() => navigate(`/contactus`)}>
            Schedule a consultation
          </div>
        </div>
        <div className="right-side">
          <img
            loading="lazy"
            src={mainImage}
            alt="main"
            className="main-image"
          />
          <div className="about-thumbnails">
            {thumbnailData.map(({ cloud, fallback }, index) => (
              <img
                loading="lazy"
                key={index}
                src={cloud}
                alt={`about${index + 1}`}
                onClick={() => handleThumbnailClick(cloud)}
                onError={(e) => ((e.target as HTMLImageElement).src = fallback)}
                className="thumbnail"
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>
      </div>

      <Marquee images={imageArray} speed={12} height="64px" />

      <div className="main-about-us-content-div">
        <div className="financial-wisdom">
          <div className="img-div">
            <img
              loading="lazy"
              src={getCloudinaryUrl("v1762205669/fincan/file_isc358.png")}
              alt="finWis"
              onError={(e) => ((e.target as HTMLImageElement).src = finWis)}
            />
          </div>
          {/* <div className="content-div">
            <span className="about-us-title">Meet Our Founder</span>
            <span className="header-fin-wis">
              Financial Wisdom from the Legacy
            </span>
            <div className="bullet-points">
              <div className="bullet">
                <img
                  loading="lazy"
                  src={bullet}
                  alt="bullet"
                  className="bullet-icon"
                />
                <div className="bullet-text">
                  <span className="bullet-title">Expertise</span>
                  <span className="bullet-subtext">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa loren ipsum
                  </span>
                </div>
              </div>
              <div className="bullet">
                <img
                  loading="lazy"
                  src={bullet}
                  alt="bullet"
                  className="bullet-icon"
                />
                <div className="bullet-text">
                  <span className="bullet-title">Successs</span>
                  <span className="bullet-subtext">
                    Et purus duis sollicitudin dignissim habitant. Egestas nulla
                    quis venenatis cras sed eu massa loren ipsum
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-us-btn">Contact Us</div>
          </div> */}
          <div className="content-div">
            <div className="about-us-title-row">
              <span className="about-us-title">Meet Our Founder</span>
              <img
                loading="lazy"
                src={objects}
                alt=""
                className="about-title-icon"
              />
            </div>
            <div className="founder-description">
              <p>
                Founded by Adeel Moghal, a seasoned finance professional with
                over two decades of global banking experience, FinCan Solutions
                bridges the gap between entrepreneurs and lenders.
              </p>
              <p>
                Before establishing FinCan, Adeel worked with leading financial
                institutions in Dubai, Saudi Arabia, Europe, and Canada,
                managing complex commercial and corporate portfolios across
                industries including construction, real estate development,
                logistics, manufacturing, and international trade.
              </p>
              <p>
                Today, FinCan applies that global expertise to help Canadian
                businesses structure deals that meet both local lending
                standards and international best practices.
              </p>
            </div>
            <div className="contact-us-btn">Contact Us</div>
          </div>
        </div>

        <div className="container-facts">
          <div className="fact">
            <div className="fact-number">
              <AnimatedCounter to={20} suffix="+" />
            </div>
            <div className="fact-text">Years of Experience</div>
          </div>
          <div className="fact">
            <div className="fact-number">
              <AnimatedCounter to={100} suffix="+" />
            </div>
            <div className="fact-text">Successful Projects</div>
          </div>
          <div className="fact">
            <div className="fact-number">
              <AnimatedCounter to={100} suffix="%" />
            </div>
            <div className="fact-text">Client Rentention Rate</div>
          </div>
          <div className="fact">
            <div className="fact-number">
              <AnimatedCounter to={30} suffix="+" />
            </div>
            <div className="fact-text">Industries Served</div>
          </div>

          {/* 🔻 Previous static version (commented out for backup) */}
          {/*
  <div className="fact-number">20+</div>
  <div className="fact-number">100+</div>
  <div className="fact-number">100%</div>
  <div className="fact-number">30+</div>
  */}
        </div>

        <div className="team-section">
          <span className="team-section__title">Meet the Team</span>
          <div className="team-section__description">
            Our team brings together diverse expertise in finance, insurance,
            and wealth management to deliver trusted guidance and long-term
            value.
          </div>
          {loading ? (
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
          ) : teamMembers.length === 0 ? (
            <div className="no-results">
              <h3>No Team Members</h3>
              <p>We currently have no visible team members to display.</p>
            </div>
          ) : (
            <div className="team-grid">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member._id}
                  id={member._id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  description={
                    member.description ||
                    "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available."
                  }
                  phone={member.phone}
                  experience={member.experience}
                  image={member.image?.url}
                  facebookUrl={member.facebookUrl}
                  instagramUrl={member.instagramUrl}
                  twitterUrl={member.twitterUrl}
                  linkedinUrl={member.linkedinUrl}
                />
              ))}
            </div>
          )}
        </div>

        {/* <div className="ethics-details">
          <div className="ethics-text-detail">
            <span className="ethics-title">Ethics and integrity</span>
            <div className="ethics-description">
              Our Shared Values, National Principles of Business Conduct, and
              Responsible Business Principles are the foundation of our culture,
              shaping who we are, what we believe and how we behave.
            </div>
          </div>
          <div className="ethics-img">
            <img
              loading="lazy"
              src={getCloudinaryUrl("ethics-1_nhxvnt.png")}
              alt="ethics"
              onError={(e) => ((e.target as HTMLImageElement).src = ethics1)}
            />
          </div>
        </div>

        <div className="ethics-details with-margin rounded">
          <div className="ethics-img">
            <img
              loading="lazy"
              src={getCloudinaryUrl("ethics-1_nhxvnt.png")}
              alt="ethics"
              onError={(e) => ((e.target as HTMLImageElement).src = ethics1)}
            />
          </div>
          <div className="ethics-text-detail">
            <span className="ethics-title">
              Environmental, social and governance
            </span>
            <div className="ethics-description">
              We are committed to driving societal change and promoting
              environmental sustainability. Working with governments, non-profit
              organizations, and civil societies, we are designing and
              delivering solutions that help build a sustainable future for all.
            </div>
          </div>
        </div> */}

        {/* <div className="profile-wrapper">
          <div className="title-our-team">Reviews</div>
          {loading ? (
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
          ) : teamMembers.length === 0 ? (
            <div className="no-results">
              <h3>No Team Members</h3>
              <p>We currently have no visible team members to display.</p>
            </div>
          ) : (
            <>
              <div className="card-container">
                <div className="left">
                  <img
                    loading="lazy"
                    src={currentCard.image?.url || team1}
                    alt={currentCard.name}
                  />
                </div>
                <div className="right">
                  <h2>{currentCard.name}</h2>
                  <h4>
                    <div className="line"></div>
                    {currentCard.role}
                  </h4>
                  <p>{currentCard.bio || "No bio available."}</p>
                  <div className="details">
                    <div className="row">
                      <span className="detail-team-title">
                        Experience: <span>{currentCard.experience} years</span>
                      </span>
                      <span className="detail-team-title">
                        Phone: <span>{currentCard.phone}</span>
                      </span>
                    </div>
                    <div className="row">
                      <span className="detail-team-title">
                        Email: <span>{currentCard.email}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dot-navigation">
                {teamMembers.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>
            </>
          )}
        </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default About;

// import React, { useState } from 'react'
// import Header from '../../components/Header'
// import './style.scss'
// import main from '../../assets/about-img-main.png'
// import about1 from '../../assets/about-1.jpg'
// import about2 from '../../assets/about-2.jpg'
// import about3 from '../../assets/about-3.jpg'
// import about4 from '../../assets/about-4.jpg'
// import finWis from '../../assets/financial-wisdom.png'
// import ethics1 from '../../assets/ethics-1.png'

// import Marquee from '../../components/Marquee'

// import m1 from '../../assets/marquee/img1.png'
// import m2 from '../../assets/marquee/img2.png'
// import m3 from '../../assets/marquee/img3.png'
// import m4 from '../../assets/marquee/img4.png'
// import m5 from '../../assets/marquee/img5.png'

// import team1 from '../../assets/team-1.jpg'
// import team2 from '../../assets/team-2.jpg'
// import team3 from '../../assets/team-3.jpg'

// import bullet from '../../assets/bullet.png'
// import { Group } from '../Homepage/sections/Group'
// import Footer from '../../components/Footer'
// import bg from "../../assets/common/circle-bg.png";

// interface CardData {
//   imgSrc: string;
//   name: string;
//   title: string;
//   description: string;
//   email: string;
//   phone: string;
//   experience: string;
// }

// function About() {
//   const cards: CardData[] = [
//   {
//     imgSrc: team1,
//     name: 'Ashikur Rahman',
//     title: 'Financial Consultant',
//     description: 'Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere, Eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere',
//     email: 'adbs@gmail.com',
//     phone: '(907) 555-0101',
//     experience: '10 years +'
//   },
//   {
//     imgSrc: team2,
//     name: 'Jane Smith',
//     title: 'Project Manager',
//     description: 'Skilled in agile project management and team leadership.',
//     email: 'jane@gmail.com',
//     phone: '(123) 456-7890',
//     experience: '8 years +'
//   },
//   {
//     imgSrc: team3,
//     name: 'Jane Smith',
//     title: 'Project Manager',
//     description: 'Skilled in agile project management and team leadership.',
//     email: 'jane@gmail.com',
//     phone: '(123) 456-7890',
//     experience: '8 years +'
//   }
// ];
//   const [activeIndex, setActiveIndex] = useState(0);
//   const currentCard = cards[activeIndex];

//       const items = ['Financial Planning', 'Insurance Solutions', 'Retirement Plans', 'Wealth Management'];
//   const imageArray = [m1, m2, m3, m4,m5];
//   const [mainImage, setMainImage] = useState(main);
//   const handleThumbnailClick = (imgSrc: string) => {
//     setMainImage(imgSrc);
//   };
//   return (
//     <div>
//         <Header/>
//         <div className="bg-img">
//         <img loading="lazy" src={bg} alt="bg" />
//       </div>
//          <div className="about-us-hero">
//         <div className="left-side">
//           <span>About <span className='blue-text'>us</span> </span>
//           <span className="text-below-about">
//             Guiding Your Financial Journey with Tailored Insurance, Retirement Planning, and Wealth-Building Strategies for Lifelong Security and Peace of Mind
//           </span>
//           <div className="schedule-btn">Schedule a consultation</div>
//         </div>
//         <div className="right-side">
//           <img loading="lazy" src={mainImage} alt="main" className="main-image" />

//           {/* New row of 4 small images */}
//           <div className="about-thumbnails">
//           {[about1, about2, about3, about4].map((img, index) => (
//             <img loading="lazy"
//               key={index}
//               src={img}
//               alt={`about${index + 1}`}
//               onClick={() => handleThumbnailClick(img)}
//               className="thumbnail"
//               style={{ cursor: "pointer" }}
//             />
//           ))}
//         </div>
//         </div>
//       </div>
//       <Marquee images={imageArray} speed={12} height="64px" />

// <div className='main-about-us-content-div'>

// {/* financial-wisdom */}
// <div className='financial-wisdom'>
//   <div className='img-div'>
//     <img loading="lazy" src={finWis} alt="finWis" />
//   </div>

//   <div className='content-div'>
//     <span className='about-us-title'>About us</span>
//     <span className='header-fin-wis'>Financial Wisdom from the Legacy</span>

//     <div className='bullet-points'>
//       <div className='bullet'>
//         <img loading="lazy" src={bullet} alt="bullet" className='bullet-icon' />
//         <div className='bullet-text'>
//           <span className='bullet-title'>Expertise</span>
//           <span className='bullet-subtext'>Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa loren ipsum</span>
//         </div>
//       </div>
//       <div className='bullet'>
//         <img loading="lazy" src={bullet} alt="bullet" className='bullet-icon' />
//         <div className='bullet-text'>
//           <span className='bullet-title'>Successs</span>
//           <span className='bullet-subtext'>Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa loren ipsum</span>
//         </div>
//       </div>
//     </div>

//     <div className='contact-us-btn'>
//         Contact Us
//     </div>
//   </div>
// </div>

// <div className='container-facts'>
//   <div className='fact'>
//     <div className='fact-number'>20+</div>
//     <div className='fact-text'>Years of Experience</div>
//   </div>
//   <div className='fact'>
//     <div className='fact-number'>100+</div>
//     <div className='fact-text'>Successful Projects</div>
//   </div>
//   <div className='fact'>
//     <div className='fact-number'>100%</div>
//     <div className='fact-text'>Client Rentention Rate</div>
//   </div>
//   <div className='fact'>
//     <div className='fact-number'>30+</div>
//     <div className='fact-text'>Industries Served</div>
//   </div>
// </div>

// <div className='ethics-details'>

//  <div className='ethics-text-detail'>
//     <span className='ethics-title'>Ethics and integrity</span>
//     <div className='ethics-description'>
//       Our Shared Values, National Principles of Business Conduct, and Responsible Business Principles are the foundation of our culture, shaping who we are, what we believe and how we behave.
//     </div>
//   </div>
//   <div className='ethics-img'>
//     <img loading="lazy" src={ethics1} alt="ethics" />
//   </div>
// </div>

// <div className='ethics-details with-margin rounded'>

//   <div className='ethics-img'>
//     <img loading="lazy" src={ethics1} alt="ethics" />
//   </div>
//  <div className='ethics-text-detail'>
//     <span className='ethics-title'>Environmental, social and governance</span>
//     <div className='ethics-description'>
//       We are committed to driving societal change and promoting environmental sustainability. Working with governments, non-profit organizations, and civil societies, we are designing and delivering solutions that help build a sustainable future for all.
//     </div>
//   </div>
// </div>

//  <div className="profile-wrapper">
//         <div className='title-our-team'>
//           Our Team
//         </div>
//       <div className="card-container">
//         <div className="left">
//           <img loading="lazy" src={currentCard.imgSrc} alt={currentCard.name} />
//         </div>
//         <div className="right">
//           <h2>{currentCard.name}</h2>
//           <h4>{currentCard.title}</h4>
//           <p>{currentCard.description}</p>
//           <div className="details">
//             <div className="row">
//               <span className='detail-team-title'>Experience: <span>{currentCard.experience}</span></span>
//               <span className='detail-team-title'>Phone: <span>{currentCard.phone}</span></span>
//             </div>
//             <div className="row">
//               <span className='detail-team-title'>Email: <span>{currentCard.email}</span></span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="dot-navigation">
//         {cards.map((_, idx) => (
//           <span
//             key={idx}
//             className={`dot ${idx === activeIndex ? 'active' : ''}`}
//             onClick={() => setActiveIndex(idx)}
//           />
//         ))}
//       </div>
//     </div>
// </div>

// <Footer/>
// </div>

//   )
// }

// export default About
