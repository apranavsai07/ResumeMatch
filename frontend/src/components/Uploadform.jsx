import { useState } from "react";
import { JOB_CATEGORIES, JOB_DESCRIPTIONS } from "./Jobdescriptions";

// step: "choose" | "paste" | "pick" | "upload"
export default function UploadForm({ setData, onBack }) {
  const [step, setStep] = useState("choose");
  const [jd, setJd] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(JOB_CATEGORIES[0].category);
  const [selectedRole, setSelectedRole] = useState("");

  const currentCategory = JOB_CATEGORIES.find(c => c.category === selectedCategory);

  const handleRolePick = (role) => {
    setSelectedRole(role);
    setJd(JOB_DESCRIPTIONS[role] || "");
  };

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("jd_text", jd);
    formData.append("file", file);
    const res = await fetch("http://127.0.0.1:8000/analyze/", {
      method: "POST", body: formData,
    });
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  const wordCount = jd.trim().split(/\s+/).filter(Boolean).length;
  const canSubmit = !loading && file && jd && wordCount >= 30;

  return (
    <div className="upload-page">
      {/* NAV */}
      <div className="upload-nav">
        <button className="back-btn" onClick={step === "choose" ? onBack : () => setStep("choose")}>
          ← {step === "choose" ? "Back" : "Change"}
        </button>
        <span style={{ fontSize: "35px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.2px" }}>
           <span className="nav-ai">Career AI</span>
        </span>
        <span />
      </div>

      <div className="upload-center">

        {/* ── STEP 1: CHOOSE ────────────────────────────── */}
        {step === "choose" && (
          <div className="choose-screen">
            <div className="upload-heading">
              <p className="section-label">Step 1 of 2</p>
              <h2 className="upload-title">How would you like to add the job?</h2>
              <p className="upload-sub">Choose how you want to provide the job description for your resume analysis.</p>
            </div>

            <div className="choose-cards">
              {/* Paste own */}
              <button className="choose-card" onClick={() => setStep("paste")}>
                <div className="choose-card-icon" style={{ background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.25)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div className="choose-card-body">
                  <div className="choose-card-title">Paste Your Own JD</div>
                  <div className="choose-card-desc">Copy the job description from any job portal and paste it here for the most accurate match.</div>
                </div>
                <div className="choose-card-arrow">→</div>
              </button>

              {/* Select field */}
              <button className="choose-card" onClick={() => setStep("pick")}>
                <div className="choose-card-icon" style={{ background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                  </svg>
                </div>
                <div className="choose-card-body">
                  <div className="choose-card-title">Select a Field & Role</div>
                  <div className="choose-card-desc">Browse 25 roles across 7 industries. We'll load a detailed, structured JD for you instantly.</div>
                </div>
                <div className="choose-card-arrow">→</div>
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2A: PASTE ────────────────────────────── */}
        {step === "paste" && (
          <div className="upload-card-compact card">
            <p className="section-label">Step 2 of 2 — Paste Job Description</p>
            <h2 style={{ marginBottom: "16px" }}>Paste the job description</h2>

            <textarea
              className="jd-textarea"
              placeholder="Paste the full job description here — include responsibilities, required skills, and qualifications for best results…"
              value={jd}
              onChange={(e) => setJd(e.target.value)}
            />
            <div className="word-count" style={{
              color: wordCount < 80 ? "var(--yellow)" : "var(--green)",
              marginBottom: "20px"
            }}>
              {wordCount} words{wordCount < 80 && " — add more detail for better results"}
            </div>

            <div className="upload-divider" />
            <ResumeUpload file={file} setFile={setFile} />
            <SubmitBtn loading={loading} disabled={!canSubmit} onClick={handleSubmit} />
          </div>
        )}

        {/* ── STEP 2B: PICK ─────────────────────────────── */}
        {step === "pick" && (
          <div className="upload-card-compact card">
            <p className="section-label">Step 2 of 2 — Select Your Target Role</p>
            <h2 style={{ marginBottom: "20px" }}>Pick your field and role</h2>

            {/* Industry tabs */}
            <label className="field-label" style={{ marginBottom: "10px", display: "block" }}>Industry</label>
            <div className="category-tabs">
              {JOB_CATEGORIES.map((cat) => (
                <button
                  key={cat.category}
                  className={`cat-tab ${selectedCategory === cat.category ? "cat-tab-active" : ""}`}
                  style={selectedCategory === cat.category
                    ? { borderColor: cat.color, color: cat.color, background: `${cat.color}18` }
                    : {}}
                  onClick={() => { setSelectedCategory(cat.category); setSelectedRole(""); setJd(""); }}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Role chips */}
            <label className="field-label" style={{ margin: "18px 0 10px", display: "block" }}>Role</label>
            <div className="role-grid">
              {currentCategory?.roles.map((role) => (
                <button
                  key={role}
                  className={`role-chip ${selectedRole === role ? "role-chip-active" : ""}`}
                  style={selectedRole === role ? {
                    background: `${currentCategory.color}18`,
                    borderColor: currentCategory.color,
                    color: currentCategory.color,
                  } : {}}
                  onClick={() => handleRolePick(role)}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* JD preview */}
            {selectedRole && (
              <div className="jd-preview">
                <div className="jd-preview-header">
                  <span className="jd-preview-label">JD loaded — {selectedRole}</span>
                  <span className="jd-preview-check">✓ Ready</span>
                </div>
                <p className="jd-preview-text">{jd.slice(0, 320)}…</p>
              </div>
            )}

            <div className="upload-divider" />
            <ResumeUpload file={file} setFile={setFile} />
            <SubmitBtn loading={loading} disabled={!canSubmit} onClick={handleSubmit} />
          </div>
        )}

      </div>
    </div>
  );
}

/* ── Shared sub-components ─────────────────────────────────── */
function ResumeUpload({ file, setFile }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label className="field-label" style={{ marginBottom: "8px", display: "block" }}>Resume File</label>
      <label className="file-label">
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0])} />
        {file ? (
          <>
            <div className="file-icon-uploaded">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <div className="file-text-wrap">
              <div className="primary" style={{ color: "#34d399" }}>{file.name}</div>
              <div className="secondary">{(file.size / 1024).toFixed(1)} KB · Ready</div>
            </div>
          </>
        ) : (
          <>
            <div className="file-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <polyline points="9 15 12 12 15 15"/>
              </svg>
            </div>
            <div className="file-text-wrap">
              <div className="primary">Click to upload resume</div>
              <div className="secondary">PDF, DOC or DOCX</div>
            </div>
          </>
        )}
      </label>
    </div>
  );
}

function SubmitBtn({ loading, disabled, onClick }) {
  return (
    <button className="btn-block analyze-btn" onClick={onClick} disabled={disabled}>
      {loading ? <><span className="spinner" /> Analyzing…</> : <>Analyze Resume →</>}
    </button>
  );
}