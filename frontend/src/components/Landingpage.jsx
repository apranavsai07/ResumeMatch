import { useEffect, useState } from "react";

// Clean stroke-based SVG icons — 24×24, 1.5px stroke, round caps
const Icons = {
  upload: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="12" y1="18" x2="12" y2="12"/>
      <polyline points="9 15 12 12 15 15"/>
    </svg>
  ),
  score: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  insight: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="11"/>
      <line x1="11" y1="14" x2="11.01" y2="14"/>
    </svg>
  ),
  improve: (color) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
};

const STEPS = [
  {
    iconKey: "upload",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.18)",
    hoverGlow: "rgba(167,139,250,0.35)",
    hoverBorder: "rgba(167,139,250,0.7)",
    hoverShadow: "0 0 40px rgba(167,139,250,0.25), 0 20px 50px rgba(0,0,0,0.4)",
    num: "01",
    title: "Upload Your Resume",
    desc: "Drop your PDF or DOCX resume and paste the job description you're targeting.",
  },
  {
    iconKey: "score",
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.18)",
    hoverGlow: "rgba(96,165,250,0.35)",
    hoverBorder: "rgba(96,165,250,0.7)",
    hoverShadow: "0 0 40px rgba(96,165,250,0.25), 0 20px 50px rgba(0,0,0,0.4)",
    num: "02",
    title: "Know Your Match Score",
    desc: "Get an instant score — Overall, Skill Match, and Context Match — with a live status.",
  },
  {
    iconKey: "insight",
    color: "#34d399",
    glow: "rgba(52,211,153,0.18)",
    hoverGlow: "rgba(52,211,153,0.35)",
    hoverBorder: "rgba(52,211,153,0.7)",
    hoverShadow: "0 0 40px rgba(52,211,153,0.25), 0 20px 50px rgba(0,0,0,0.4)",
    num: "03",
    title: "Understand Why",
    desc: "See exactly what drove your score — strengths, gaps, and keyword alignment.",
  },
  {
    iconKey: "improve",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.18)",
    hoverGlow: "rgba(244,114,182,0.35)",
    hoverBorder: "rgba(244,114,182,0.7)",
    hoverShadow: "0 0 40px rgba(244,114,182,0.25), 0 20px 50px rgba(0,0,0,0.4)",
    num: "04",
    title: "Get Improvements",
    desc: "Receive actionable advice to boost your resume for this specific role.",
  },
];

export default function LandingPage({ onStart }) {
  const [phase, setPhase] = useState(0);
  // phase 0 = nothing, 1 = chars animating, 2 = eyebrow+sub, 3 = steps, 4 = cta
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    // small initial delay so browser has painted before animation fires
    const t0 = setTimeout(() => setPhase(1), 120);
    const t1 = setTimeout(() => setPhase(2), 900);
    const t2 = setTimeout(() => setPhase(3), 1300);
    const t3 = setTimeout(() => setPhase(4), 1900);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const title = "ResumeMatch";

  return (
    <div className="landing">
      {/* ── HERO ──────────────────────────────────────────── */}
      <div className="landing-hero">
        <div className={`landing-eyebrow ${phase >= 2 ? "lp-visible" : ""}`}>
          <span className="eyebrow-dot" /> AI-Powered Resume Analyzer
        </div>

        {/* Title — chars rendered only once phase >= 1 */}
        <h1 className="landing-title" aria-label={title}>
          {title.split("").map((ch, i) => (
            <span
              key={i}
              className={`reveal-char ${phase >= 1 ? "char-go" : ""}`}
              style={{ "--delay": `${i * 75}ms` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </h1>

        <p className={`landing-sub ${phase >= 2 ? "lp-visible" : ""}`}>
          Match your resume to any job description in seconds.<br />
          Get a score, understand why, and level up.
        </p>
      </div>

      {/* ── STEPS ─────────────────────────────────────────── */}
      <div className={`steps-row ${phase >= 3 ? "lp-visible" : ""}`}>
        {STEPS.map((s, i) => {
          const isHovered = hoveredStep === i;
          return (
            <div
              key={i}
              className={`step-card ${phase >= 3 ? "step-in" : ""}`}
              style={{
                "--step-delay": `${i * 100}ms`,
                borderColor: isHovered ? s.hoverBorder : "rgba(255,255,255,0.10)",
                boxShadow: isHovered ? s.hoverShadow : "0 2px 4px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.35)",
                background: isHovered
                  ? `linear-gradient(145deg, rgba(15,17,30,0.95), ${s.hoverGlow})`
                  : "rgba(15,17,30,0.82)",
                transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
              }}
              onMouseEnter={() => setHoveredStep(i)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {i < STEPS.length - 1 && <div className="step-arrow">›</div>}

              <div
                className="step-icon-wrap"
                style={{
                  background: isHovered ? s.hoverGlow : s.glow,
                  border: `1px solid ${isHovered ? s.hoverBorder : "rgba(255,255,255,0.08)"}`,
                  boxShadow: isHovered ? `0 0 20px ${s.hoverGlow}` : "none",
                  transform: isHovered ? "scale(1.12)" : "scale(1)",
                }}
              >
                {Icons[s.iconKey](s.color)}
              </div>

              <div className="step-num" style={{
                color: s.color,
                opacity: isHovered ? 1 : 0.7,
                textShadow: isHovered ? `0 0 12px ${s.color}` : "none",
              }}>
                {s.num}
              </div>

              <div className="step-title" style={{
                color: isHovered ? "#e8eaff" : "var(--text-primary)",
              }}>
                {s.title}
              </div>

              <div className="step-desc" style={{
                color: isHovered ? "#9ba3c2" : "#6b7494",
              }}>
                {s.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── CTA ───────────────────────────────────────────── */}
      <div className={`landing-cta ${phase >= 4 ? "lp-visible" : ""}`}>
        <button className="cta-btn" onClick={onStart}>
          <span>Analyze My Resume</span>
          <span className="cta-arrow">→</span>
        </button>
        <p className="cta-note">Free · No sign-up · Instant results</p>
      </div>
    </div>
  );
}