import { useState } from "react";
import { COACH_STYLES, SKILL_ROADMAPS, TIMER_OPTIONS } from "../data/mockData.js";
import "./Setup.css";

const INTERVIEW_TYPES = [
  { key: "Technical", desc: "DSA, system design & core CS" },
  { key: "HR", desc: "Behavioral & culture-fit questions" },
  { key: "Mixed", desc: "A blend of both" },
];

export default function Setup({ pathInfo, focusSkill, onContinue }) {
  const [type, setType] = useState(focusSkill ? SKILL_ROADMAPS[focusSkill]?.interviewType || "Technical" : "Technical");
  const [coach, setCoach] = useState("Friendly");
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(60);
  const [resumeName, setResumeName] = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    setResumeName(file ? file.name : "");
  }

  function handleSubmit(e) {
    e.preventDefault();
    onContinue({ type, coach, timerEnabled, timerSeconds, resumeName });
  }

  return (
    <div className="page-narrow">
      <div className="setup-header">
        <span className="eyebrow">Interview Setup</span>
        <h1>Let's set up your practice round.</h1>
      </div>

      {pathInfo && (
        <div className="path-summary">
          <span className="path-summary-emoji">🎯</span>
          <div>
            <span className="path-summary-role">{pathInfo.role}</span>
            <span className="path-summary-sub">
              {pathInfo.category}
              {pathInfo.track ? ` · ${pathInfo.track}` : ""}
            </span>
          </div>
        </div>
      )}

      {focusSkill && (
        <div className="focus-banner">
          Focused on <strong>{focusSkill}</strong> — questions and coaching will lean toward this skill.
        </div>
      )}

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
          <label className="field-label">Interviewer Coach</label>
          <div className="coach-grid">
            {COACH_STYLES.map((c) => (
              <button
                type="button"
                key={c.key}
                className={`coach-option ${coach === c.key ? "selected" : ""}`}
                onClick={() => setCoach(c.key)}
              >
                <span className="coach-emoji">{c.emoji}</span>
                <span className="coach-name">{c.label}</span>
                <span className="coach-tagline">{c.tagline}</span>
                <span className="coach-example">{c.example}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="field-group">
          <label className="field-label">Answer Timer</label>
          <div className="timer-row">
            <button
              type="button"
              className={`chip ${!timerEnabled ? "selected" : ""}`}
              onClick={() => setTimerEnabled(false)}
            >
              Off
            </button>
            <button
              type="button"
              className={`chip ${timerEnabled ? "selected" : ""}`}
              onClick={() => setTimerEnabled(true)}
            >
              On
            </button>
            {timerEnabled && (
              <div className="timer-durations">
                {TIMER_OPTIONS.map((s) => (
                  <button
                    type="button"
                    key={s}
                    className={`chip chip-sm ${timerSeconds === s ? "selected" : ""}`}
                    onClick={() => setTimerSeconds(s)}
                  >
                    {s}s
                  </button>
                ))}
              </div>
            )}
          </div>
          <span className="field-hint">
            {timerEnabled
              ? "A gentle countdown will show near the answer box. Nothing is auto-submitted."
              : "Practice at your own pace — recommended for your first few rounds."}
          </span>
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
