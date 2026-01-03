import React from "react";
import { Link } from "react-router-dom";
import map from "../../assets/contact/map.jpg";
import social from "../../assets/contact/Socialaccounts.png";
import phone from "../../assets/contact/phone1.png";
import time from "../../assets/contact/time1.png";
import location from "../../assets/contact/location1.png";
import logo from "../../assets/footer.png";
import facebookIcon from "../../assets/aboutUs/team/fb.png";
import instagramIcon from "../../assets/aboutUs/team/instagram.png";
import whatsappIcon from "../../assets/aboutUs/team/whatsapp.png";
import linkedinIcon from "../../assets/aboutUs/team/twitter.png";
import "./style.scss";

interface FooterProps {
  blueSection?: boolean;
  homeTightSpacing?: boolean; // apply tighter spacing on landing page only
}

function Footer({ blueSection = true, homeTightSpacing = false }: FooterProps) {
  return (
    <div>
      {blueSection && (
        <div className={`consultancy-wrapper ${homeTightSpacing ? 'home-tight' : ''}`}>
          <div className="consultancy-left">
            <h2 className="title">Contact us For <span className="blue-text">Expert Financial Advisory</span></h2>
            <p className="subtitle">
              We help entrepreneurs become bankable — with clarity, strategy and the right funding pathways. Speak to a FinCan Specialist today and get guidance tailored to your business goals.
            </p>

            <div className="points-container">
              <div className="point">
                <img loading="lazy" src={time} alt="" className="point-icon" />
                <div className="point-text">
                  <span className="primary">Open Hours:</span>
                  <span className="secondary">9 am - 5 pm</span>
                </div>
              </div>

              <div className="point">
                <img loading="lazy" src={phone} alt="" className="point-icon" />
                <div className="point-text">
                  <span className="primary">Requesting A Call:</span>
                  <span className="secondary">+1-587-4389361</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="consultancy-right">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="name">NAME</label>
                <input id="name" type="text" placeholder="" />
              </div>
              <div className="input-group">
                <label htmlFor="lastname">LAST NAME</label>
                <input id="lastname" type="text" placeholder="" />
              </div>
            </div>

            <div className="input-group email-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder=""
              />
            </div>

            <button className="submit-btn">Send Message</button>
          </div>
        </div>
      )}

      {/* ----- FOOTER ----- */}
      <div className="black-footer">
        <div className="footer-content">
          <div className="footer-section first">
            <div className="footer-logo">
              <img loading="lazy" src={logo} alt="FinCan Logo" className="logo" />
            </div>
          </div>

          <div className="footer-section second">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/ourservices" className="footer-link">Services</Link>
              <Link to="/contactus" className="footer-link">Contact</Link>
            </div>
          </div>

          <div className="footer-section third">
            <div className="footer-column">
              <h4>Our Team</h4>
              <Link to="/about" className="footer-link">Meet Our Team</Link>
              <Link to="/ourservices" className="footer-link">Our Services</Link>
              <Link to="/casestudy" className="footer-link">Case Studies</Link>
              <Link to="/contactus" className="footer-link">Get In Touch</Link>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={facebookIcon} alt="Facebook" style={{ width: 35, height: 35 }} />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={whatsappIcon} alt="WhatsApp" style={{ width: 40, height: 40 }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={instagramIcon} alt="Instagram" style={{ width: 70, height: 70 }} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <img loading="lazy" src={linkedinIcon} alt="LinkedIn" style={{ width: 30, height: 30 }} />
          </a>
        </div>

        <hr className="footer-divider" />
      </div>
    </div>
  );
}

export default Footer;
