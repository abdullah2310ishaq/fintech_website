import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import Header from "../../components/Header";
import blog1 from "../../assets/blog/blog-1.jpg";
import * as FaIcons from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import { toast } from "react-toastify";
import case1 from "../../assets/caseStudy/case1.jpg";
import case2 from "../../assets/caseStudy/case2.jpg";
import case3 from "../../assets/caseStudy/case3.jpg";
import Footer from "../../components/Footer";
import { getCloudinaryUrl } from "../../utils/getCloudinaryUrl";
import bg from "../../assets/common/circle-bg.png";
interface CaseStudy {
  _id: string;
  masterImage: string;
  title: string;
  createdAt: string;
}

function CaseStudy() {
  const [posts, setPosts] = useState([]);
  const [popularCaseStudies, setPopularCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const navigate = useNavigate();
  const sidebarCards = [
    {
      id: 1,
      img: case1,
      title: "Market Outlook 2025",
      date: "01 Jun 2025",
    },
    {
      id: 2,
      img: case2,
      title: "Tax Tips for Freelancers",
      date: "28 May 2025",
    },
    {
      id: 3,
      img: case3,
      title: "Best Budgeting Apps",
      date: "21 May 2025",
    },
  ];

  const tags = [
    "Finance",
    "Investment",
    "Tax",
    "Retirement",
    "Budget",
    "Crypto",
  ];

  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchCaseStudies = async (page = 1, query = "") => {
    setLoading(true);
    try {
      const [visibleRes, popularRes] = await Promise.all([
        fetch(
          `${baseUrl}/case-studies?page=${page}&limit=6&title=${encodeURIComponent(
            query
          )}`
        ),
        fetch(`${baseUrl}/case-studies/popular`),
      ]);

      const visibleData = await visibleRes.json();
      const popularData = await popularRes.json();

      if (!visibleRes.ok) {
        toast.error(visibleData.message || "Failed to fetch case studies");
        throw new Error(visibleData.message || "Failed to fetch case studies");
      }

      if (!popularRes.ok) {
        toast.error(
          popularData.message || "Failed to fetch popular case studies"
        );
        throw new Error(
          popularData.message || "Failed to fetch popular case studies"
        );
      }

      setPosts(visibleData.data || []);
      setTotalPages(visibleData.pages || 1);
      setPopularCaseStudies(popularData || []);
    } catch (err) {
      console.error("Error loading case studies:", err);
      // optionally: show toast here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies(page, searchQuery);
  }, [page, searchQuery]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearchSubmit = () => {
    setSelectedTag("");
    setPage(1); // Reset to first page on new search
    setSearchQuery(search);
  };

  const handleTagClick = (tag: string) => {
    if (tag === selectedTag) {
      // Unselect tag if already selected
      setSelectedTag("");
      setSearchQuery(""); // Reset filter
    } else {
      setSelectedTag(tag);
      setSearch(""); // Clear input
      setSearchQuery(tag); // Apply tag as search
      setPage(1);
    }
  };

  return (
    <div>
      <Header />
      <div className="blog-main">
        <div className="bg-img bg-test-back">
          <img loading="lazy" src={bg} alt="bg" />
        </div>
        <span className="blog-title">
          <span className="title-part1">Financial</span>{" "}
          <span className="title-part2">Consultancy</span>
        </span>
        <span className="blog-subtitle">
          Guiding Your Financial Journey with Tailored Insurance, Retirement
          Planning, and Wealth-Building Strategies for Lifelong Security and
          Peace of Mind
        </span>
        <div className="schedule-btn" onClick={() => navigate(`/contactus`)}>
          Schedule a consultation
        </div>
      </div>

      <div className="blog-img-main">
        <img
          loading="lazy"
          src={getCloudinaryUrl("blog-1_uiuvjq.JPG")}
          alt="blog1"
          onError={(e) => ((e.target as HTMLImageElement).src = blog1)}
        />
      </div>

      <div className="main-block">
        <div className="blue-box"></div>

        <div className="case-study-div-content">
          <div className="blog-wrapper">
            {/* ---------- CENTERED CASE STUDIES ---------- */}
            <div className="left-col">
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
              ) : posts.length === 0 ? (
                <div className="no-results">
                  <h3>No Case Studies Found</h3>
                  <p>
                    Try adjusting your search or filters to find what you're
                    looking for.
                  </p>
                </div>
              ) : (
                posts.map((p: any) => (
                  <article className="post-card" key={p._id}>
                    <img
                      loading="lazy"
                      src={p.masterImage}
                      alt={p.title}
                      className="post-img"
                    />
                    <div className="meta-row">
                      <span>Admin</span>
                      <span>{new Date(p.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h3 className="post-title">{p.title}</h3>
                    <p className="post-desc">{p.description}</p>
                    <button
                      className="read-more"
                      onClick={() => navigate(`/casestudydetail/${p._id}`)}
                    >
                      Learn More
                    </button>
                  </article>
                ))
              )}

              {/* ---------- PAGINATION ---------- */}
              {!loading && totalPages > 1 && (
                <div className="pagination-wrapper">
                  <div className="pagination">
                    <button
                      className="nav-btn"
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                    >
                      Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        className={`page-btn ${page === i + 1 ? "active" : ""}`}
                        onClick={() => handlePageChange(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      className="nav-btn"
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default CaseStudy;
