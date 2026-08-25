import Companion from "../components/Companion.jsx";
import { COMPANION_LINES } from "../data/mockData.js";
import "./Report.css";

export default function Report({ report, onPracticeAgain, onBackToDashboard }) {
  const maxScore = Math.max(...report.questions.map((q) => q.score));
  const companionMsg = report.overallScore >= 80 ? COMPANION_LINES.finishedBest : COMPANION_LINES.finishedGood;

  return (
    <div className="report-wrap">
      <div className="report-header">
        <div>
          <h1>Interview Performance</h1>
          <p className="tagline">Your AI-generated interview readiness report.</p>
        </div>
        <Companion mood="excited" size="sm" message={companionMsg} />
      </div>

      <section className="card hero-section">
        <div className="overall-block">
          <span className="overall-score">{report.overallScore}</span>
          <span className="overall-max">/ 100</span>
          <span className="overall-label">Interview Readiness</span>
        </div>
        <div className="skill-cards">
          <SkillCard label="Technical Knowledge" value={report.technical} tone="lavender" />
          <SkillCard label="Communication" value={report.communication} tone="mint" />
          <SkillCard label="Problem Solving" value={report.problemSolving} tone="peach" />
          <SkillCard label="Confidence" value={report.confidence} tone="powder" />
        </div>
      </section>

      <section className="card trend-section">
        <h2 className="section-title">Performance Per Question</h2>
        <div className="trend-chart">
          {report.questions.map((q) => (
            <div className="trend-col" key={q.number}>
              <span className="trend-score">{q.score}</span>
              <div className="trend-bar-track">
                <div className="trend-bar-fill" style={{ height: `${(q.score / maxScore) * 100}%` }} />
              </div>
              <span className={`badge badge-${q.difficulty.toLowerCase()} trend-badge`}>{q.difficulty}</span>
              <span className="trend-q">
                Q{q.number}
                {q.taught && <span className="taught-dot" title="Teach Me was used" />}
              </span>
            </div>
          ))}
        </div>
        <p className="trend-note">The interview adapted as your performance changed.</p>
      </section>

      <div className="two-col">
        <section className="card list-section">
          <h2 className="section-title">Your Strengths</h2>
          <ul className="pill-list">
            {report.strengths.map((s) => (
              <li key={s} className="pill pill-good">
                <span className="pill-icon">&#10003;</span>
                {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="card list-section">
          <h2 className="section-title">Areas to Improve</h2>
          <ul className="pill-list">
            {report.improvements.map((s) => (
              <li key={s} className="pill pill-warn">
                <span className="pill-icon">&#9888;</span>
                {s}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="card recommendation-card">
        <span className="rec-eyebrow">AI Coach Recommendation</span>
        <p className="rec-text">{report.recommendation}</p>
      </section>

      <div className="final-actions">
        <button className="btn btn-secondary" onClick={onPracticeAgain}>
          Practice Again
        </button>
        <button className="btn btn-primary" onClick={onBackToDashboard}>
          Back to Dashboard
        </button>
      </div>
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
