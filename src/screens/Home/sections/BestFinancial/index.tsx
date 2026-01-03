import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";

interface ServiceCard {
  _id?: string;
  title: string;
  description: string;
  masterImage?: string;
}

export default function BestFinancial() {
  const [services, setServices] = useState<ServiceCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeId, setActiveId] = useState<number | null>(null);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}/services/public`);
        const data = await res.json();

        if (!res.ok)
          throw new Error(data.message || "Failed to fetch services");

        const fetchedServices = data.services || [];
        setServices(fetchedServices);
        
        // Set initial activeId to first service index (0-based)
        if (fetchedServices.length > 0) {
          setActiveId(0);
        }
      } catch (err: any) {
        toast.error(err?.message || "An error occurred while loading services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [baseUrl]);

  const handlePrev = () => {
    if (services.length === 0) return;
    setActiveId((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? services.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    if (services.length === 0) return;
    setActiveId((prev) => {
      if (prev === null) return 0;
      return prev === services.length - 1 ? 0 : prev + 1;
    });
  };

  const handleExploreMore = (serviceId?: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (serviceId) {
      navigate(`/servicedetail/${serviceId}`);
    }
  };

  if (loading) {
    return (
      <div className="best-financial-main" style={{ minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
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

  if (services.length === 0) {
    return (
      <div className="best-financial-main" style={{ padding: "50px", textAlign: "center" }}>
        <h3 style={{ color: "#fff" }}>No Services Available</h3>
      </div>
    );
  }

  return (
    <div className="best-financial-main">
      <div className="best-upper-part-div">
        <div className="best-heading-div">
          <div className="service-heading">Services</div>

          <div className="best-financial-heading">
            <span>Best Financial</span>
            <span>Consultant Services</span>
          </div>
        </div>

        {/* Arrows container */}
        <div className="arrow-controls">
          <button className="arrow-btn" onClick={handlePrev}>
            <ArrowLeft />
          </button>
          <button className="arrow-btn arrow-btn-next" onClick={handleNext}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="pic-div-best">
        {services.map((service, index) => {
          const isOpen = index === activeId;
          const imageUrl = service.masterImage || "https://via.placeholder.com/400x422?text=No+Image";
          return (
            <button
              key={service._id || index}
              className={`pic-1 ${isOpen ? "active" : ""}`}
              style={{ backgroundImage: `url(${imageUrl})` }}
              onMouseEnter={() => setActiveId(index)}
              // onMouseLeave={() => setActiveId(null)}
            >
              {/* <img loading="lazy" src={circle} alt="" className="circle-service-card" /> */}
              <div className="detail-box-best-fin">
                <span>{service.title || "Untitled Service"}</span>
                <span>{service.description || "No description available."}</span>
                <div 
                  className="btn-explore-more"
                  onClick={(e) => handleExploreMore(service._id, e)}
                >
                  Explore More
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
