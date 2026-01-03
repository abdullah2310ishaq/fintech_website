import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";
import "./style.scss";
import Header from "../../components/Header";

// Image imports
import Footer from "../../components/Footer";

export default function ContactUs() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // More aggressive scroll-to-top fix
  useEffect(() => {
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
  }, []);

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { fullName, email, phone, message, serviceType } = formData;

    if (!fullName || !email || !phone || !message || !serviceType) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${baseUrl}/user-inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      toast.success("Your message has been sent!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        serviceType: "",
      });
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} />
      <Header />
      {/* Full-screen loader when loading */}
      {isLoading && (
        <div className="loader-overlay">
          <Oval
            height={80}
            width={80}
            color="#007bff"
            secondaryColor="#ccc"
            strokeWidth={4}
            strokeWidthSecondary={2}
            visible={true}
          />
        </div>
      )}
      <section className="contact-section">
        {/* Mobile: Title at top */}
        <div className="mobile-title">
          <h2>Contact us For Expert Financial Advisory</h2>
          <div className="info-description">
            <p>
              At FinCan Solutions, every conversation begins with understanding your goals. We work with entrepreneurs, investors and business owners across Canada and internationally to build lender-ready, fundable financial outcomes.
            </p>
            <p>
              We can assist you with Business Financing, Commercial Real Estate Funding, Debt & Credit Advisory, Startup Funding, and Investment Planning.
            </p>
            <p>
              Submit your details below and our advisory team will respond within 24–48 hours to book your consultation.
            </p>
            <p>
              Your information remains fully confidential and secure.
            </p>
          </div>
        </div>

        {/* ------- LEFT INFO (Desktop) --------- */}
        <div className="contact-info">
          <h2 className="info-title">
            Get In Touch
            <br />
            <span className="info-title-fincan">with FinCan Solutions</span>
          </h2>
          <div className="info-description">
            <p>
              At FinCan Solutions, every conversation begins with understanding your goals. We work with entrepreneurs, investors and business owners across Canada and internationally to build lender-ready, fundable financial outcomes.
            </p>
            <p>
              We can assist you with Business Financing, Commercial Real Estate Funding, Debt & Credit Advisory, Startup Funding, and Investment Planning.
            </p>
            <p>
              Submit your details below and our advisory team will respond within 24–48 hours to book your consultation.
            </p>
            <p>
              Your information remains fully confidential and secure.
            </p>
          </div>
        </div>

        {/* ------- RIGHT FORM -------- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          {/* NEW SERVICE TYPE DROPDOWN */}
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="input-like"
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="Retirement Planning">Retirement Planning</option>
            <option value="Management Consultancy">
              Management Consultancy
            </option>
            <option value="Insurance Services">Insurance Services</option>
            <option value="Financial Advisory">Financial Advisory</option>
            <option value="Custom Request">Custom Request</option>
          </select>
          <button type="submit" disabled={isLoading}>
            Submit
          </button>
        </form>

      </section>

      <Footer blueSection={false} />
      {/* ----- CONSULTANCY SECTION ----- */}
      {/* <div className="consultancy-wrapper">
        <div className="consultancy-left">
          <h2 className="title">Contact Us for the Consultancy</h2>
          <p className="subtitle">
            We’re here to answer questions and guide you every step of the way.
          </p>

          <div className="point">
            <img loading="lazy" src={phone} alt="" className="point-icon" />
            <div className="point-text">
              <span className="primary">Fast Response</span>
              <span className="secondary">Within 24 hours</span>
            </div>
          </div>

          <div className="point">
            <img loading="lazy" src={time} alt="" className="point-icon" />
            <div className="point-text">
              <span className="primary">Expert Advice</span>
              <span className="secondary">Certified consultants</span>
            </div>
          </div>

          <div className="point">
            <img loading="lazy" src={location} alt="" className="point-icon" />
            <div className="point-text">
              <span className="primary">Tailored Plans</span>
              <span className="secondary">For every budget</span>
            </div>
          </div>
        </div>

       
        <div className="consultancy-right">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" placeholder="+886 912 345 678" />
            </div>
          </div>

          <div className="input-group address-group">
            <label htmlFor="address">Your Address</label>
            <input id="address" type="text" placeholder="123 Main St, Taipei" />
          </div>

          <button className="submit-btn">Send Message</button>
        </div>
      </div> */}

      {/* ----- FOOTER ----- */}
      {/* <div className="black-footer">
        <div className="footer-content">
          <div className="footer-section first">
            <div className="text-box">
              <span>Lorem Ipsum</span>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry...
              </div>
            </div>
            <div className="text-box">
              Lorem Ipsum is simply dummy text of the printing
            </div>
          </div>

          <div className="footer-section second">
            <p>Lorem Ipsum is simply dummy text of the printing...</p>
          </div>

          <div className="footer-section third">
            <p className="top-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="button-column">
              <button className="white-btn">White Button</button>
              <button className="blue-btn">Blue Button</button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2025 Your Company</span>
          <span>Lorem Ipsum is simply dummy text of</span>
        </div>
      </div> */}
    </>
  );
}
