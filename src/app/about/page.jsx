"use client";

import {
  Users,
  CalendarDays,
  Globe,
  ThumbsUp,
  Target,
  Eye,
  Heart,
  Handshake,
  Lightbulb,
  Shield,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";

const stats = [
  { value: "15K+", label: "Members" },
  { value: "200+", label: "Events Hosted" },
  { value: "50+", label: "Countries" },
  { value: "95%", label: "Satisfaction Rate" },
];

const foundation = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const coreValues = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: TrendingUp,
    title: "Global Impact",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];

const journey = [
  {
    year: "2018",
    title: "Foundation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prum vel magna quis.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prum vel magna quis.",
  },
  {
    year: "2023",
    title: "Digital Transformation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prum vel magna quis.",
  },
  {
    year: "2026",
    title: "Future Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prum vel magna quis.",
  },
];

const impactStats = [
  { icon: Globe, value: "50+", label: "Countries Reached" },
  { icon: Users, value: "15K+", label: "Active Members" },
  { icon: CalendarDays, value: "200+", label: "Events Hosted" },
  { icon: ThumbsUp, value: "95%", label: "Satisfaction" },
];

const checkItems = [
  "Lorem ipsum dolor sit amet consectetur",
  "Sed do eiusmod tempor incididunt labore",
  "Ut enim ad minim veniam quis nostrud",
  "Duis aute irure dolor in reprehenderit",
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#1a1a2e", margin: 0, padding: 0 }}>
      {/* Inject responsive styles */}
      <style>{`
        /* Base responsive adjustments */
        .responsive-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: clamp(1rem, 5vw, 4rem);
          padding-right: clamp(1rem, 5vw, 4rem);
        }

        /* Tablet and below */
        @media (max-width: 768px) {
          h1 { font-size: clamp(2rem, 8vw, 3rem) !important; }
          h2 { font-size: clamp(1.75rem, 6vw, 2.5rem) !important; }
          
          .grid-4, .grid-3, .grid-2 {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          
          .two-col-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .button-group {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          section {
            padding: clamp(2.5rem, 10vw, 5rem) clamp(1rem, 5vw, 2rem) !important;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .grid-4, .grid-3, .grid-2 {
            grid-template-columns: 1fr !important;
          }
          
          .two-col-layout {
            gap: 1.5rem !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          
          .hero-buttons button {
            width: 100%;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #1a56db 0%, #1e40af 100%)", color: "white", padding: "clamp(3rem, 10vw, 5rem) 0" }}>
        <div className="responsive-container" style={{ position: "relative", zIndex: 2 }}>
          <span style={{ background: "#2563eb", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 20, padding: "4px 14px", fontSize: "clamp(0.7rem, 2vw, 0.85rem)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20, display: "inline-block" }}>
            About Us
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 600, lineHeight: 1.15, margin: "16px 0 24px", maxWidth: 600 }}>
            Empowering Communities Through Innovation
          </h1>
          <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", lineHeight: 1.7, opacity: 0.85, maxWidth: 520, marginBottom: 36 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="hero-buttons button-group" style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "white", color: "#1a56db", border: "none", borderRadius: 6, padding: "11px 22px", fontWeight: 700, fontSize: "clamp(0.8rem, 2vw, 0.9rem)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              Join Our Community <ChevronRight size={16} />
            </button>
            <button style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.5)", borderRadius: 6, padding: "11px 22px", fontWeight: 600, fontSize: "clamp(0.8rem, 2vw, 0.9rem)", cursor: "pointer" }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#f0f6ff", borderBottom: "1px solid #e2eaf5", padding: "clamp(2rem, 6vw, 3rem) 0" }}>
        <div className="responsive-container stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 600, color: "#1a56db" }}>{s.value}</div>
              <div style={{ fontSize: "clamp(0.75rem, 2vw, 0.9rem)", color: "#64748b", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: "clamp(3rem, 10vw, 5rem) 0" }}>
        <div className="responsive-container two-col-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 6vw, 4rem)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 600, marginBottom: 20 }}>Who We Are</h2>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: 1.8, color: "#475569", marginBottom: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: 1.8, color: "#475569", marginBottom: 24 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {checkItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#334155" }}>
                  <Check size={18} color="#1a56db" strokeWidth={2.5} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#1e293b", borderRadius: 16, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Users size={64} color="#334155" />
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section style={{ background: "#f8fafc", padding: "clamp(3rem, 10vw, 5rem) 0" }}>
        <div className="responsive-container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vw, 3rem)" }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 600, marginBottom: 12 }}>Our Foundation</h2>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#64748b", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(1.5rem, 3vw, 2rem)" }}>
            {foundation.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: "white", borderRadius: 12, padding: "clamp(1.5rem, 4vw, 2rem)", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ width: 48, height: 48, background: "#eff6ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={22} color="#1a56db" />
                </div>
                <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1.1rem)", fontWeight: 700, color: "#1a56db", marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: 1.75, color: "#64748b" }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section style={{ padding: "clamp(3rem, 10vw, 5rem) 0" }}>
        <div className="responsive-container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vw, 3rem)" }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 600, marginBottom: 12 }}>Our Core Values</h2>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "#64748b", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(1.5rem, 3vw, 2rem)" }}>
            {coreValues.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ padding: "8px 0" }}>
                <div style={{ width: 48, height: 48, background: "#eff6ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <Icon size={22} color="#1a56db" />
                </div>
                <h3 style={{ fontSize: "clamp(1rem, 2.5vw, 1.1rem)", fontWeight: 700, marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: "clamp(0.85rem, 2vw, 0.95rem)", lineHeight: 1.7, color: "#64748b" }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section style={{ background: "#1a56db", color: "white", padding: "clamp(3rem, 10vw, 5rem) 0" }}>
        <div className="responsive-container">
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 6vw, 3.5rem)" }}>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 600, marginBottom: 12 }}>Our Journey</h2>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", opacity: 0.8, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(1rem, 2vw, 1.5rem)" }}>
            {journey.map(({ year, title, description }) => (
              <div key={year} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "clamp(1.5rem, 3vw, 2rem)" }}>
                <div style={{ fontSize: "clamp(1.8rem, 4vw, 2rem)", fontWeight: 600, marginBottom: 4 }}>{year}</div>
                <div style={{ fontSize: "clamp(0.9rem, 2.2vw, 1rem)", fontWeight: 700, color: "#bfdbfe", marginBottom: 12 }}>{title}</div>
                <p style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", lineHeight: 1.7, opacity: 0.8 }}>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Making a Global Impact */}
      <section style={{ padding: "clamp(3rem, 10vw, 5rem) 0" }}>
        <div className="responsive-container two-col-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem, 6vw, 5rem)", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 600, marginBottom: 20 }}>Making a Global Impact</h2>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: 1.8, color: "#475569", marginBottom: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", lineHeight: 1.8, color: "#475569", marginBottom: 32 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button style={{ background: "#1a56db", color: "white", border: "none", borderRadius: 6, padding: "12px 22px", fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              View Our Impact Report <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(1rem, 2vw, 1.5rem)" }}>
            {impactStats.map(({ icon: Icon, value, label }) => (
              <div key={label} style={{ background: "#f8fafc", borderRadius: 12, padding: "clamp(1.5rem, 4vw, 2rem)", border: "1px solid #e2e8f0" }}>
                <Icon size={28} color="#1a56db" style={{ marginBottom: 12 }} />
                <div style={{ fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: 600, color: "#1a1a2e" }}>{value}</div>
                <div style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", color: "#64748b", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1e293b", color: "white", padding: "clamp(3rem, 10vw, 5rem) 0", textAlign: "center" }}>
        <div className="responsive-container">
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: 600, marginBottom: 16 }}>Ready to Join Our Community?</h2>
          <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", opacity: 0.75, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="button-group hero-buttons" style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button style={{ background: "#1a56db", color: "white", border: "none", borderRadius: 6, padding: "12px 24px", fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              Get Started Today <ArrowRight size={16} />
            </button>
            <button style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 6, padding: "12px 24px", fontWeight: 600, fontSize: "clamp(0.85rem, 2vw, 0.95rem)", cursor: "pointer" }}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}