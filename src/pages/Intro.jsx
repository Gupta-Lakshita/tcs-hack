import Novi from "../components/Novi.jsx";
import { NOVI_LINES } from "../data/mockData.js";
import "./Intro.css";

export default function Intro({ config, onBegin }) {
  const role = config?.role || "Software Engineer";
  const type = config?.type || "Technical";
  const coach = config?.coach || "Friendly";

  return (
    <div className="page-narrow intro-wrap">
      <span className="eyebrow">Before we start</span>
      <h1>Ready for your {role} interview?</h1>
      <p className="intro-sub">
        Your interview will adapt to your performance. Strong answers will lead to deeper
        questions, while weaker areas may trigger simpler follow-ups.
      </p>

      <div className="card intro-stats">
        <div className="intro-stat">
          <span className="intro-stat-value">5</span>
          <span className="intro-stat-label">Questions</span>
        </div>
        <div className="intro-stat">
          <span className="intro-stat-value">~8</span>
          <span className="intro-stat-label">Minutes</span>
        </div>
        <div className="intro-stat">
          <span className="intro-stat-value">{type}</span>
          <span className="intro-stat-label">Format</span>
        </div>
        <div className="intro-stat">
          <span className="intro-stat-value">Adaptive</span>
          <span className="intro-stat-label">Difficulty</span>
        </div>
        <div className="intro-stat">
          <span className="intro-stat-value">{coach}</span>
          <span className="intro-stat-label">Your Coach</span>
        </div>
      </div>

      <div className="intro-companion">
        <Novi pose="encourage" size="md" message={NOVI_LINES.preInterview} />
      </div>

      <button className="btn btn-primary begin-btn" onClick={onBegin}>
        Let's Begin →
      </button>
    </div>
  );
}
