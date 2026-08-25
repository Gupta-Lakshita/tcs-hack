import Companion from "../components/Companion.jsx";
import { COMPANION_LINES } from "../data/mockData.js";
import "./Dashboard.css";

export default function Dashboard({ trend, history, onStartPractice, onViewHistoryItem, onViewAllHistory }) {
  const latest = history[0];
  const maxTrend = Math.max(...trend.map((t) => t.score));
  const compareIdx = Math.max(0, trend.length - 4);
  const pointsGained = Math.max(0, trend[trend.length - 1].score - trend[compareIdx].score);

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
          <span className="overall-score">{latest.overallScore}</span>
          <span className="overall-max">/ 100</span>
          <span className="overall-label">Interview Readiness</span>
          <span className="overall-sub">+{pointsGained} points over your last {Math.min(3, trend.length - 1)} interviews</span>
        </div>
        <div className="skill-cards">
          <SkillCard label="Technical Knowledge" value={latest.technical} tone="lavender" />
          <SkillCard label="Communication" value={latest.communication} tone="mint" />
          <SkillCard label="Problem Solving" value={latest.problemSolving} tone="peach" />
          <SkillCard label="Confidence" value={latest.confidence} tone="powder" />
        </div>
      </section>

      <section className="card trend-section">
        <h2 className="section-title">Your Progress</h2>
        <div className="trend-chart">
          {trend.map((t) => (
            <div className="trend-col" key={t.number}>
              <span className="trend-score">{t.score}</span>
              <div className="trend-bar-track">
                <div className="trend-bar-fill" style={{ height: `${(t.score / maxTrend) * 100}%` }} />
              </div>
              <span className="trend-label">Interview {t.number}</span>
            </div>
          ))}
        </div>
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
            <button className="card recent-card" key={h.id} onClick={() => onViewHistoryItem(h.id)}>
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
    </div>
  );
}

function SkillCard({ label, value, tone }) {
  return (
    <div className={`skill-card tone-${tone}`}>
      <div className="skill-top">
        <span className="skill-label">{label}</span>
        <span className="skill-value">{value}</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
