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

      {/* Hero Section – narrower content */}
      <section style={{ background: "linear-gradient(135deg, #1a56db 0%, #1e40af 100%)", color: "white", padding: "80px 60px 60px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <span style={{ background: "#2563eb", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 20, display: "inline-block" }}>
            About Us
          </span>
          <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.15, margin: "16px 0 24px", maxWidth: 600 }}>
            Empowering Communities Through Innovation
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, opacity: 0.85, maxWidth: 520, marginBottom: 36 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ background: "white", color: "#1a56db", border: "none", borderRadius: 6, padding: "11px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              Join Our Community <ChevronRight size={16} />
            </button>
            <button style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.5)", borderRadius: 6, padding: "11px 22px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "#f0f6ff", borderBottom: "1px solid #e2eaf5", padding: "32px 60px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: 32, fontWeight: 600, color: "#1a56db" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are – replaced round bullets with ticks */}
      <section style={{ padding: "80px 60px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 20 }}>Who We Are</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#475569", marginBottom: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#475569", marginBottom: 24 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {checkItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "#334155" }}>
                <Check size={18} color="#1a56db" strokeWidth={2.5} />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#1e293b", borderRadius: 16, aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Users size={64} color="#334155" />
        </div>
      </section>

      {/* Our Foundation */}
      <section style={{ background: "#f8fafc", padding: "80px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Our Foundation</h2>
          <p style={{ fontSize: 14, color: "#64748b", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {foundation.map(({ icon: Icon, title, description }) => (
            <div key={title} style={{ background: "white", borderRadius: 12, padding: "32px 28px", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div style={{ width: 48, height: 48, background: "#eff6ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                <Icon size={22} color="#1a56db" />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1a56db", marginBottom: 12 }}>{title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "#64748b" }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Core Values */}
      <section style={{ padding: "80px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Our Core Values</h2>
          <p style={{ fontSize: 14, color: "#64748b", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {coreValues.map(({ icon: Icon, title, description }) => (
            <div key={title} style={{ padding: "8px 0" }}>
              <div style={{ width: 48, height: 48, background: "#eff6ff", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <Icon size={22} color="#1a56db" />
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#64748b" }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section style={{ background: "#1a56db", color: "white", padding: "80px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 12 }}>Our Journey</h2>
          <p style={{ fontSize: 14, opacity: 0.8, maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {journey.map(({ year, title, description }) => (
            <div key={year} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "28px 24px" }}>
              <div style={{ fontSize: 26, fontWeight: 600, marginBottom: 4 }}>{year}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#bfdbfe", marginBottom: 12 }}>{title}</div>
              <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.8 }}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Making a Global Impact */}
      <section style={{ padding: "80px 60px", maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 20 }}>Making a Global Impact</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#475569", marginBottom: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#475569", marginBottom: 32 }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <button style={{ background: "#1a56db", color: "white", border: "none", borderRadius: 6, padding: "12px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            View Our Impact Report <ChevronRight size={16} />
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {impactStats.map(({ icon: Icon, value, label }) => (
            <div key={label} style={{ background: "#f8fafc", borderRadius: 12, padding: "28px 24px", border: "1px solid #e2e8f0" }}>
              <Icon size={28} color="#1a56db" style={{ marginBottom: 12 }} />
              <div style={{ fontSize: 28, fontWeight: 600, color: "#1a1a2e" }}>{value}</div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#1e293b", color: "white", padding: "80px 60px", textAlign: "center" }}>
        <h2 style={{ fontSize: 32, fontWeight: 600, marginBottom: 16 }}>Ready to Join Our Community?</h2>
        <p style={{ fontSize: 14, opacity: 0.75, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{ background: "#1a56db", color: "white", border: "none", borderRadius: 6, padding: "12px 24px", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
            Get Started Today <ArrowRight size={16} />
          </button>
          <button style={{ background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 6, padding: "12px 24px", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}