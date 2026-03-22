export default function WhyScore({ data }) {
  return (
    <section className="insight-section">

      <div className="insight-header">
        <span className="insight-tag insight-tag-cyan">Score Breakdown</span>
        <h2 className="insight-title">Why this score?</h2>
        <p className="insight-subtitle">
          Here's what the AI found when matching your resume against the job description.
        </p>
      </div>

      <div className="insight-items">
        {data.why_this_score.map((item, i) => (
          <div className="insight-item" key={i}>
            <span className="insight-num">{String(i + 1).padStart(2, "0")}</span>
            <p className="insight-text">{item}</p>
          </div>
        ))}
      </div>

    </section>
  );
}