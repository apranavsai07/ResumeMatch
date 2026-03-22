import Overview from "./Overview";
import WhyScore from "./Whyscore";
import Improvements from "./Improvements";

export default function ResultsPage({ data, onBack, onReset }) {
  const m = data.match_analysis;
  const overall = m.overall_score;
  const label = m.label;

  return (
    <div className="results-page">
      {/* ── NAV ─────────────────────────────────────── */}
      <div className="results-nav">
        <button className="back-btn" onClick={onBack}>← Analyze Again</button>
        <span style={{ fontSize: "35px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.2px" }}>
           <span className="nav-ai">Career AI</span>
        </span>
        <div className="results-nav-right">
          <button className="ghost-btn" onClick={onReset}>New Analysis</button>
        </div>
      </div>

      {/* ── HERO BANNER ─────────────────────────────── */}
      <div className="results-banner">
        <div className="results-banner-inner">
          <p className="section-label">Analysis Complete</p>
          <h1 className="results-headline">
            Your match score is{" "}
            <span
              className="results-score-inline"
              style={{
                color: overall >= 75 ? "#34d399" : overall >= 50 ? "#fbbf24" : "#f87171",
              }}
            >
              {overall}%
            </span>
          </h1>
          <p className="results-sub">{label} — Here's a full breakdown of your resume against the job description.</p>
        </div>
      </div>

      {/* ── BODY ────────────────────────────────────── */}
      <div className="results-body">

        {/* Score rings — full width */}
        <Overview data={data} />

        {/* Stacked full-width insight sections */}
        <WhyScore data={data} />
        <Improvements data={data} />

      </div>
    </div>
  );
}