import { useState } from "react";
import "./Setup.css";

const INTERVIEW_TYPES = [
  { key: "Technical", desc: "DSA, system design & core CS" },
  { key: "HR", desc: "Behavioral & culture-fit questions" },
  { key: "Mixed", desc: "A blend of both" },
];

const DIFFICULTY_PREFS = ["Adaptive", "Easy", "Medium", "Hard"];

export default function Setup({ onContinue }) {
  const [type, setType] = useState("Technical");
  const [role, setRole] = useState("");
  const [difficultyPref, setDifficultyPref] = useState("Adaptive");
  const [resumeName, setResumeName] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onContinue({
      type,
      role: role.trim() || "Software Engineer",
      difficultyPref,
      resumeName,
    });
  }

  return (
    <div className="page-narrow">
      <div className="setup-header">
        <span className="eyebrow">Interview Setup</span>
        <h1>Let's set up your practice round.</h1>
      </div>

      <form className="card setup-card" onSubmit={handleSubmit}>
        <div className="field-group">
          <label className="field-label" htmlFor="role">
            Target Role
          </label>
          <input
            id="role"
            className="text-input"
            type="text"
            placeholder="e.g. Software Engineer, Data Analyst, SDE-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="field-group">
          <label className="field-label">Interview Type</label>
          <div className="type-grid">
            {INTERVIEW_TYPES.map((t) => (
              <button
                type="button"
                key={t.key}
                className={`type-option ${type === t.key ? "selected" : ""}`}
                onClick={() => setType(t.key)}
              >
                <span className="type-name">{t.key}</span>
                <span className="type-desc">{t.desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="field-group">
          <label className="field-label">Difficulty Preference</label>
          <div className="chip-row">
            {DIFFICULTY_PREFS.map((d) => (
              <button
                type="button"
                key={d}
                className={`chip ${difficultyPref === d ? "selected" : ""}`}
                onClick={() => setDifficultyPref(d)}
              >
                {d}
              </button>
            ))}
          </div>
          {difficultyPref === "Adaptive" && (
            <span className="field-hint">Recommended — questions adjust to how you're performing.</span>
          )}
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="resume">
            Resume <span className="optional">(optional — personalizes your questions)</span>
          </label>
          <label className="upload-box" htmlFor="resume">
            <span className="upload-icon">&#8593;</span>
            <span>{resumeName || "Click to upload your resume (PDF/DOCX)"}</span>
          </label>
          <input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            style={{ display: "none" }}
          />
        </div>

        <button type="submit" className="btn btn-primary start-btn">
          Continue →
        </button>
      </form>
    </div>
  );
}
