import { useEffect, useRef } from "react";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SCORE_COLORS = {
  green:  { stroke: "#34d399", glow: "rgba(52,211,153,0.35)",  bg: "rgba(52,211,153,0.07)"  },
  yellow: { stroke: "#fbbf24", glow: "rgba(251,191,36,0.35)",  bg: "rgba(251,191,36,0.07)"  },
  red:    { stroke: "#f87171", glow: "rgba(248,113,113,0.35)", bg: "rgba(248,113,113,0.07)" },
};

function getVariant(score) {
  if (score >= 75) return "green";
  if (score >= 50) return "yellow";
  return "red";
}

function ScoreRing({ score, label, delay = 0 }) {
  const circleRef = useRef(null);
  const variant = getVariant(score);
  const { stroke, glow, bg } = SCORE_COLORS[variant];
  const offset = CIRCUMFERENCE - (score / 100) * CIRCUMFERENCE;

  useEffect(() => {
    const el = circleRef.current;
    if (!el) return;
    // start at full offset (empty), animate to target
    el.style.strokeDashoffset = CIRCUMFERENCE;
    const t = setTimeout(() => {
      el.style.transition = `stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1) ${delay}ms`;
      el.style.strokeDashoffset = offset;
    }, 80);
    return () => clearTimeout(t);
  }, [score, offset, delay]);

  return (
    <div className="score-ring-wrap" style={{ background: bg }}>
      <svg
        className="score-ring-svg"
        width="130" height="130"
        viewBox="0 0 130 130"
      >
        {/* track */}
        <circle
          cx="65" cy="65" r={RADIUS}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="7"
        />
        {/* glow layer behind */}
        <circle
          cx="65" cy="65" r={RADIUS}
          fill="none"
          stroke={stroke}
          strokeWidth="7"
          strokeOpacity="0.15"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 65 65)"
          style={{ filter: `drop-shadow(0 0 8px ${stroke})` }}
        />
        {/* main arc */}
        <circle
          ref={circleRef}
          cx="65" cy="65" r={RADIUS}
          fill="none"
          stroke={stroke}
          strokeWidth="7"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          strokeLinecap="round"
          transform="rotate(-90 65 65)"
        />
      </svg>

      {/* number in centre */}
      <div className="score-ring-inner">
        <span className="score-ring-num" style={{ color: stroke }}>{score}</span>
        <span className="score-ring-pct" style={{ color: stroke }}>/100</span>
      </div>

      <div className="score-ring-label">{label}</div>
    </div>
  );
}

export default function Overview({ data }) {
  const m = data.match_analysis;

  return (
    <div className="card score-card">
      <p className="section-label">Match Analysis</p>
      <h2>Your Score</h2>

      <div className="score-rings-row">
        <ScoreRing score={m.overall_score} label="Overall Score"  delay={0}   />
        <ScoreRing score={m.skill_match}   label="Skill Match"    delay={150} />
        <ScoreRing score={m.context_match} label="Context Match"  delay={300} />
      </div>

      <div className="divider" />

      <div className={`status-pill ${getVariant(m.overall_score)}`}>
        <span className="status-dot" />
        {m.label}
      </div>
    </div>
  );
}