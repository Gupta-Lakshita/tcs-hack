import { useState } from "react";
import "./Setup.css";

const INTERVIEW_TYPES = [
  { key: "Technical", desc: "DSA, system design & core CS" },
  { key: "HR", desc: "Behavioral & culture-fit questions" },
  { key: "Mixed", desc: "A blend of both" },
];

export default function Setup({ onStart }) {
  const [type, setType] = useState("Technical");
  const [role, setRole] = useState("");
  const [resumeName, setResumeName] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onStart({ type, role: role.trim() || "Software Engineer", resumeName });
  }

  return (
    <div>
      <div className="hero-copy">
        <span className="eyebrow">AI-Powered Adaptive Interviewer</span>
        <h1>Practice. Adapt. Improve.</h1>
        <p className="tagline">
          A personalized interview simulator that reads your answers and reacts like a real
          interviewer &mdash; getting harder when you shine, and refocusing on fundamentals when
          you don&apos;t.
        </p>
      </div>

      <form className="card setup-card" onSubmit={handleSubmit}>
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
          <label className="field-label" htmlFor="role">
            Target Role / Domain
          </label>
          <input
            id="role"
            className="text-input"
            type="text"
            placeholder="e.g. Frontend Engineer, Data Analyst, SDE-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="resume">
            Resume Upload <span className="optional">(optional)</span>
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
          Start Interview &rarr;
        </button>
      </form>
    </div>
  );
}
