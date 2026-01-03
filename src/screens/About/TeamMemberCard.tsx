import React, { useState } from "react";
import "./teamMemberCard.scss";
import facebook from "../../assets/aboutUs/team/fb.png";
import instagram from "../../assets/aboutUs/team/instagram.png";
import twitter from "../../assets/aboutUs/team/twitter.png";
//Commented Code
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

interface TeamMemberCardProps {
  id: string; //
  image?: string;
  name: string;
  role: string;
  bio?: string;
  description?: string;
  phone?: string;
  experience?: number;
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  image,
  name,
  role,
  bio,
  description = "There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available. There are many variations of passages of Lorem Ipsum available.",
  phone,
  experience,
  facebookUrl = "https://facebook.com/",
  instagramUrl = "https://instagram.com/",
  twitterUrl = "https://twitter.com/",
  linkedinUrl = "https://linkedin.com/",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="team-card" onClick={handleCardClick}>
        {/* Default card layout */}
        <div className="team-card__default">
          <img
            src={image || "/fallback.png"}
            alt={name}
            className="team-card__image"
          />
          <div className="team-card__info">
            <h3 className="team-card__name">{name}</h3>
            <p className="team-card__designation">{role}</p>
            <p className="team-card__description">{bio}</p>
            <div className="team-card__socials">
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={facebook} alt="Facebook" />
                </a>
              )}
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              )}
              {twitterUrl && (
                <a
                  href={twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={twitter} alt="Twitter" />
                </a>
              )}
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="team-modal" onClick={handleCloseModal}>
          <div
            className="team-modal__content"
            onClick={handleModalContentClick}
          >
            <button className="team-modal__close" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="team-modal__body">
              <div className="team-modal__left">
                <img
                  src={image || "/fallback.png"}
                  alt={name}
                  className="team-modal__image"
                />
              </div>
              <div className="team-modal__right">
                <h2 className="team-modal__name">{name}</h2>
                <p className="team-modal__role">{role}</p>
                <div className="team-modal__details">
                  {(phone || experience !== undefined) && (
                    <div className="team-modal__contact-info">
                      {phone && (
                        <div className="team-modal__info-item">
                          <span className="team-modal__info-label">Phone:</span>
                          <span className="team-modal__info-value">
                            {phone}
                          </span>
                        </div>
                      )}
                      {experience !== undefined && (
                        <div className="team-modal__info-item">
                          <span className="team-modal__info-label">
                            Experience:
                          </span>
                          <span className="team-modal__info-value">
                            {experience} years
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <p className="team-modal__description">{description}</p>
                  {bio && (
                    <div className="team-modal__bio">
                      <h4>Bio:</h4>
                      <p>{bio}</p>
                    </div>
                  )}
                  <div className="team-modal__socials">
                    {facebookUrl && (
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={facebook} alt="Facebook" />
                      </a>
                    )}
                    {instagramUrl && (
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={instagram} alt="Instagram" />
                      </a>
                    )}
                    {twitterUrl && (
                      <a
                        href={twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={twitter} alt="Twitter" />
                      </a>
                    )}
                    {linkedinUrl && (
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-link"
                      >
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMemberCard;

// import React from 'react';
// import './teamMemberCard.scss';
// import facebook from '../../assets/aboutUs/team/fb.png'
// import instagram from '../../assets/aboutUs/team/instagram.png'
// import twitter from '../../assets/aboutUs/team/twitter.png'
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// interface TeamMemberCardProps {
//   image: string;
//   name: string;
//   designation: string;
//   description: string;
//   facebookUrl?: string;
//   instagramUrl?: string;
//   twitterUrl?: string;
// }

// const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
//   image,
//   name,
//   designation,
//   description,
//   facebookUrl,
//   instagramUrl,
//   twitterUrl,
// }) => {
//   return (
//     <div className="team-card">
//       <img src={image} alt={name} className="team-card__image" />
//       <div className="team-card__info">
//         <h3 className="team-card__name">{name}</h3>
//         <p className="team-card__designation">{designation}</p>
//         <p className="team-card__description">{description}</p>
//         <div className="team-card__socials">
//           {facebookUrl && (
//             <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
//               {/* <FaFacebookF /> */}
//               <img src={facebook} alt="" />
//             </a>
//           )}
//           {instagramUrl && (
//             <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
//               {/* <FaInstagram /> */}
//               <img src={instagram} alt="" />
//             </a>
//           )}
//           {twitterUrl && (
//             <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
//               {/* <FaTwitter /> */}
//               <img src={twitter} alt="" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TeamMemberCard;
