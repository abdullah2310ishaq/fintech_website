import { useNavigate } from "react-router-dom";
import {
  FileText,
  LineChart,
  Landmark,
  Building2,
  Compass,
} from "lucide-react";
import "./style.scss";

const benefits = [
  {
    icon: FileText,
    title: "Lender-Ready Packages",
    text: "Clear, structured presentations lenders can review quickly.",
  },
  {
    icon: LineChart,
    title: "Stronger Financial Story",
    text: "Organize numbers, identify gaps, and strengthen requests.",
  },
  {
    icon: Landmark,
    title: "Business Plans & Projections",
    text: "Practical plans and realistic forecasts for confident decisions.",
  },
  {
    icon: Building2,
    title: "Loan & Refinancing Support",
    text: "Structured packages built around your transaction.",
  },
  {
    icon: Compass,
    title: "Strategic Guidance",
    text: "Direction for acquisitions, expansions, and growth financing.",
  },
];

function WhyFinCan() {
  const navigate = useNavigate();

  return (
    <div className="why-fincan-container">
      <section className="why-fincan-section">
        <h2 className="why-fincan-banner-title">Why FinCan</h2>

        <div className="why-fincan-inner">
          <div className="why-fincan-layout">
            <div className="why-fincan-content">
              <h2 className="why-fincan-heading">
                <span className="heading-light">
                  We Bring Clarity to Complex{" "}
                </span>
                <span className="heading-accent">
                  Business Financing Decisions
                </span>
              </h2>
              <div className="why-fincan-copy">
                <p>
                  Business owners are often strong operators, but financing
                  requests require a different type of presentation. Lenders
                  look for repayment ability, cash flow, equity, security,
                  management strength, risks, and a clear explanation of the
                  transaction.
                </p>
                <p>
                  FinCan Solutions helps business owners organize these details
                  in a professional and practical way. We help identify what
                  matters, address the gaps, and prepare a package that makes
                  the business case easier for lenders and decision-makers to
                  review.
                </p>
              </div>
              <div className="why-fincan-cta">
                <button
                  type="button"
                  className="why-fincan-btn"
                  onClick={() => navigate("/ourservices")}
                >
                  Explore Our Services
                </button>
              </div>
            </div>

            <div className="why-fincan-cards-row">
              <div className="why-fincan-grid">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="why-fincan-card">
                    <div className="why-fincan-card__face">
                      <div className="why-fincan-card__icon">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <h3 className="why-fincan-card__title">{title}</h3>
                      <p className="why-fincan-card__text">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyFinCan;
