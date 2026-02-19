"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  ArrowRight,
  User,
  Calendar,
  Clock,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const categories = [
  "All", "Technology", "Business Strategy", "Data & Analytics",
  "AI & Machine Learning", "Cybersecurity", "Cloud Computing", "Digital Transformation",
];

const featuredArticle = {
  image: "/images/featured.png",
  category: "Technology",
  title: "The Future of Digital Innovation: Trends Shaping 2026",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  author: "Sarah Mitchell",
  date: "Feb 15, 2026",
  readTime: "8 min read",
};

const articles = [
  {
    id: 1,
    image: "/images/article1.png",
    category: "Business Strategy",
    title: "Building Effective Business Strategies in a Digital World",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Michael Clark",
    date: "Feb 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    image: "/images/article2.png",
    category: "Data & Analytics",
    title: "Data Analytics: Transforming Raw Data Into Business Insights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jennifer Rodriguez",
    date: "Feb 10, 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    image: "/images/article3.png",
    category: "AI & Machine Learning",
    title: "AI and Machine Learning: Practical Applications for Businesses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Dr. Lisa Wang",
    date: "Feb 8, 2026",
    readTime: "9 min read",
  },
  {
    id: 4,
    image: "/images/article4.png",
    category: "Cybersecurity",
    title: "Cybersecurity Best Practices for Modern Enterprises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Sophia Thompson",
    date: "Feb 5, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    image: "/images/article5.png",
    category: "Cloud Computing",
    title: "Cloud Computing: Scaling Your Infrastructure Efficiently",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Robert Williams",
    date: "Feb 5, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    image: "/images/article6.png",
    category: "Technology",
    title: "Fintech Revolution: How Technology is Reshaping Finance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Emma Davis",
    date: "Feb 1, 2026",
    readTime: "7 min read",
  },
  {
    id: 7,
    image: "/images/article7.png",
    category: "Business Strategy",
    title: "Startup Growth Strategies: From Launch to Scale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Alex Johnson",
    date: "Jan 29, 2026",
    readTime: "8 min read",
  },
  {
    id: 8,
    image: "/images/article8.png",
    category: "Digital Transformation",
    title: "Digital Transformation: A Complete Guide for Enterprises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Robert Taylor",
    date: "Jan 28, 2026",
    readTime: "10 min read",
  },
];

const categoryColors = {
  Technology:           { bg: "#eff6ff", color: "#1d4ed8" },
  "Business Strategy":  { bg: "#f0fdf4", color: "#15803d" },
  "Data & Analytics":   { bg: "#fef3c7", color: "#b45309" },
  "AI & Machine Learning": { bg: "#f5f3ff", color: "#7c3aed" },
  Cybersecurity:        { bg: "#fff7ed", color: "#c2410c" },
  "Cloud Computing":    { bg: "#ecfdf5", color: "#047857" },
  "Digital Transformation": { bg: "#fdf4ff", color: "#9333ea" },
};

function CategoryBadge({ category }) {
  const colors = categoryColors[category] || { bg: "#f1f5f9", color: "#475569" };
  return (
    <span
      style={{
        background: colors.bg,
        color: colors.color,
        fontSize: "11px",
        fontWeight: 700,
        padding: "4px 12px",
        borderRadius: 999,
        letterSpacing: "0.4px",
        display: "inline-block",
      }}
    >
      {category}
    </span>
  );
}

function ArticleMeta({ author, date, readTime }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        fontSize: "12.5px",
        color: "#64748b",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <User size={13} /> {author}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Calendar size={13} /> {date}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <Clock size={13} /> {readTime}
      </span>
    </div>
  );
}

function CardImage({ src, alt, height = 190 }) {
  return (
    <div
      style={{
        height,
        background: "#0f172a",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.4s ease",
        }}
        className="card-image"
        onError={(e) => (e.target.style.display = "none")}
      />
    </div>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((a) => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#0f172a",
        background: "#f8fafc",
        minHeight: "100vh",
      }}
    >

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a56db 0%, #1e40af 100%)",
          color: "white",
          padding: "clamp(60px, 12vw, 110px) 5vw 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, opacity: 0.9, fontWeight: 600 }}>
            <TrendingUp size={18} /> INSIGHTS
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 20, maxWidth: 680 }}>
            Expert Insights & Industry Trends
          </h1>
          <p style={{ fontSize: "clamp(15px, 2.5vw, 17px)", lineHeight: 1.7, opacity: 0.9, maxWidth: 540, marginBottom: 36 }}>
            Stay informed with the latest research, trends and expert perspectives on technology, business and digital transformation.
          </p>

          {/* Search */}
          <div style={{ position: "relative", maxWidth: 600 }}>
            <Search
              size={18}
              color="#cbd5e1"
              style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
            />
            <input
              type="text"
              placeholder="Search articles, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 18px 14px 52px",
                borderRadius: 10,
                border: "none",
                fontSize: 15,
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                color: "#0f172a",
                outline: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                transition: "all 0.25s ease",
              }}
              onFocus={(e) => (e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.18)")}
              onBlur={(e) => (e.target.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)")}
            />
          </div>
        </div>
      </section>

      {/* Sticky Category Filter */}
      <section
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 5vw",
            display: "flex",
            alignItems: "center",
            gap: 12,
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          <Filter size={16} color="#64748b" style={{ flexShrink: 0, marginRight: 4 }} />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "13px 18px",
                border: "none",
                background: "transparent",
                color: activeCategory === cat ? "#1d4ed8" : "#475569",
                fontWeight: activeCategory === cat ? 700 : 500,
                fontSize: 13.5,
                whiteSpace: "nowrap",
                cursor: "pointer",
                position: "relative",
                transition: "color 0.2s ease",
              }}
            >
              {cat}
              {activeCategory === cat && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "60%",
                    height: 3,
                    background: "#1d4ed8",
                    borderRadius: 4,
                    transition: "width 0.35s ease",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      <main style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(40px, 6vw, 64px) 5vw" }}>

        {/* Featured */}
        <section style={{ marginBottom: "clamp(50px, 8vw, 80px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, fontSize: 16, fontWeight: 700, color: "#1e40af" }}>
            <TrendingUp size={18} /> Featured Article
          </div>

          <div
            className="featured-card"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 32,
              background: "#ffffff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 10px 38px rgba(0,0,0,0.08)",
              transition: "transform 0.35s ease, box-shadow 0.35s ease",
            }}
          >
            <CardImage src={featuredArticle.image} alt="Featured" height="100%" />

            <div style={{ padding: "clamp(28px, 4vw, 44px) 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <CategoryBadge category={featuredArticle.category} />
              <h2 style={{ fontSize: "clamp(20px, 3.5vw, 26px)", fontWeight: 700, lineHeight: 1.3, margin: "16px 0 16px", color: "#0f172a" }}>
                {featuredArticle.title}
              </h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#475569", marginBottom: 24 }}>
                {featuredArticle.description}
              </p>
              <ArticleMeta {...featuredArticle} />
              <button
                style={{
                  marginTop: 28,
                  background: "#1d4ed8",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 26px",
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.28s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1e40af";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1d4ed8";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section>
          <h2 style={{ fontSize: "clamp(20px, 4vw, 24px)", fontWeight: 700, marginBottom: 32, color: "#0f172a" }}>
            Latest Articles
          </h2>

          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px", color: "#94a3b8", fontSize: 16 }}>
              No articles found. Try adjusting your search or category.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "clamp(20px, 3vw, 28px)",
              }}
            >
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="article-card"
                  style={{
                    background: "#ffffff",
                    borderRadius: 14,
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                    transition: "all 0.32s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <CardImage src={article.image} alt={article.title} />

                  <div style={{ padding: "20px 22px 28px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <CategoryBadge category={article.category} />
                    <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.4, margin: "14px 0 12px", color: "#0f172a" }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#475569", marginBottom: 20, flex: 1 }}>
                      {article.description}
                    </p>
                    <ArticleMeta {...article} />
                    <button
                      style={{
                        marginTop: 20,
                        background: "transparent",
                        color: "#1d4ed8",
                        border: "1px solid #d1d5db",
                        borderRadius: 8,
                        padding: "10px 20px",
                        fontWeight: 600,
                        fontSize: 13.5,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        width: "fit-content",
                        transition: "all 0.28s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#1d4ed8";
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.borderColor = "#1d4ed8";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#1d4ed8";
                        e.currentTarget.style.borderColor = "#d1d5db";
                      }}
                    >
                      Read More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: 60 }}>
            <button
              style={{
                background: "#1d4ed8",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "14px 36px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(29,78,216,0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 28px rgba(29,78,216,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(29,78,216,0.25)";
              }}
            >
              Load More Articles
            </button>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a56db 0%, #1e40af 100%)",
          color: "white",
          padding: "clamp(70px, 12vw, 110px) 5vw",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(24px, 5vw, 30px)", fontWeight: 700, marginBottom: 16 }}>
            Stay Updated with Our Newsletter
          </h2>
          <p style={{ fontSize: "clamp(15px, 2.5vw, 16.5px)", opacity: 0.85, lineHeight: 1.7, marginBottom: 36 }}>
            Get the latest insights, trends and expert analysis delivered straight to your inbox.
          </p>

          <form style={{ display: "flex", maxWidth: 520, margin: "0 auto", gap: 0 }}>
            <input
              type="email"
              placeholder="your.email@company.com"
              style={{
                flex: 1,
                padding: "14px 20px",
                border: "none",
                borderRadius: "10px 0 0 10px",
                fontSize: 15,
                outline: "none",
                background: "rgba(255,255,255,0.95)",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "0 10px 10px 0",
                padding: "0 32px",
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1e293b")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0f172a")}
            >
              Subscribe
            </button>
          </form>

          <p style={{ fontSize: 13, opacity: 0.65, marginTop: 16 }}>
            Join 10,000+ professionals • Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Quick CSS for hover animations */}
      <style jsx global>{`
        .featured-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.14) !important;
        }

        .article-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 44px rgba(0,0,0,0.12) !important;
          border-color: #cbd5e1;
        }

        .article-card:hover .card-image {
          transform: scale(1.06);
        }

        @media (max-width: 840px) {
          .featured-card {
            grid-template-columns: 1fr !important;
          }
          .featured-card > div:first-child {
            height: 240px !important;
          }
        }

        @media (max-width: 560px) {
          section > div {
            padding-left: 5vw !important;
            padding-right: 5vw !important;
          }
        }
      `}</style>
    </div>
  );
}