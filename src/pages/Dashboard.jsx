import { useState } from "react";
import Companion from "../components/Companion.jsx";
import LineChart from "../components/LineChart.jsx";
import SkillModal from "../components/SkillModal.jsx";
import { COMPANION_LINES } from "../data/mockData.js";
import "./Dashboard.css";

export default function Dashboard({ trend, history, onStartPractice, onPracticeSkill, onViewHistoryItem, onViewAllHistory }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const latest = history[0];
  const firstScore = trend[0].score;
  const pointsGainedTotal = Math.max(0, trend[trend.length - 1].score - firstScore);
  const readinessLabel = latest.role ? `${latest.role} Readiness` : "Interview Readiness";

  const skillScores = {
    "Technical Knowledge": latest.technical,
    Communication: latest.communication,
    "Problem Solving": latest.problemSolving,
    Confidence: latest.confidence,
  };

  return (
    <div className="dashboard">
      <div className="dash-greeting">
        <div>
          <h1>Good to see you.</h1>
          <p className="tagline">Let's see how your interview skills are growing.</p>
        </div>
        <button className="btn btn-primary" onClick={onStartPractice}>
          Start Practice →
        </button>
      </div>

      <Companion
        mood="happy"
        size="sm"
        message={history.length > 2 ? COMPANION_LINES.dashboardReturning : COMPANION_LINES.dashboardFirstTime}
      />

      <section className="card hero-section">
        <div className="overall-block">
          <span className="overall-score gradient-text">{latest.overallScore}</span>
          <span className="overall-max">/ 100</span>
          <span className="overall-label">{readinessLabel}</span>
          <span className="overall-sub">+{pointsGainedTotal} points since your first interview</span>
        </div>
        <div className="skill-cards">
          {Object.entries(skillScores).map(([label, value], i) => (
            <SkillCard
              key={label}
              label={label}
              value={value}
              tone={["lavender", "mint", "peach", "powder"][i]}
              onClick={() => setSelectedSkill(label)}
            />
          ))}
        </div>
      </section>

      <section className="card trend-section">
        <div className="trend-header">
          <h2 className="section-title">Your Progress</h2>
          <div className="trend-current">
            <span className="trend-current-score">{trend[trend.length - 1].score}</span>
            <span className="trend-current-sub">+{pointsGainedTotal} since your first interview</span>
          </div>
        </div>
        <LineChart data={trend} />
        <p className="trend-note">You're improving consistently.</p>
      </section>

      <section className="recent-section">
        <div className="recent-header">
          <h2 className="section-title">Recent Interviews</h2>
          <button className="btn btn-ghost" onClick={onViewAllHistory}>
            View all →
          </button>
        </div>
        <div className="recent-grid">
          {history.slice(0, 4).map((h) => (
            <button className="card card-interactive recent-card" key={h.id} onClick={() => onViewHistoryItem(h.id)}>
              <div className="recent-top">
                <div>
                  <h3>{h.role}</h3>
                  <span className="recent-type">{h.type} Interview</span>
                </div>
                {h.improvement > 0 && <span className="improvement-pill">↑ +{h.improvement}</span>}
              </div>
              <div className="recent-score">{h.overallScore}<span>/100</span></div>
              <div className="recent-meta">
                <span>{h.questionsCount} Questions</span>
                <span className="dot">&middot;</span>
                <span>{h.duration}</span>
              </div>
              <span className="recent-link">View Report →</span>
            </button>
          ))}
        </div>
      </section>

      {selectedSkill && (
        <SkillModal
          skillName={selectedSkill}
          score={skillScores[selectedSkill]}
          onClose={() => setSelectedSkill(null)}
          onPractice={(skill) => {
            setSelectedSkill(null);
            onPracticeSkill(skill);
          }}
        />
      )}
    </div>
  );
}

function SkillCard({ label, value, tone, onClick }) {
  return (
    <button className={`skill-card card-interactive tone-${tone}`} onClick={onClick}>
      <div className="skill-top">
        <span className="skill-label">{label}</span>
        <span className="skill-value">{value}</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${value}%` }} />
      </div>
      <span className="skill-cta">View roadmap →</span>
    </button>
  );
}
