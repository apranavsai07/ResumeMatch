export default function Improvements({ data }) {
  return (
    <section className="insight-section insight-section-imp">

      <div className="insight-header">
        <span className="insight-tag insight-tag-yellow">Action Plan</span>
        <h2 className="insight-title">How to improve</h2>
        <p className="insight-subtitle">
          Specific changes that will meaningfully raise your match score for this role.
        </p>
      </div>

      <div className="insight-items">
        {data.advice.improvements.map((item, i) => (
          <div className="insight-item insight-item-imp" key={i}>
            <span className="insight-num insight-num-yellow">{String(i + 1).padStart(2, "0")}</span>
            <p className="insight-text">{item}</p>
          </div>
        ))}
      </div>

      {data.advice.message && (
        <div className="insight-note">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{flexShrink:0}}>
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p>{data.advice.message}</p>
        </div>
      )}

    </section>
  );
}