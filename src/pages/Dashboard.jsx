import { FALLBACK_REPORT } from "../data/mockData.js";
import "./Dashboard.css";

export default function Dashboard({ report, onPracticeAgain, onNewInterview }) {
  const data = report || FALLBACK_REPORT;
  const maxScore = Math.max(...data.questions.map((q) => q.score));

  return (
    <div className="dashboard-wrap">
      <div className="dash-header">
        <h1>Interview Performance</h1>
        <p className="tagline">Your AI-generated interview readiness report.</p>
      </div>

      <section className="card hero-section">
        <div className="overall-block">
          <span className="overall-score">{data.overallScore}</span>
          <span className="overall-max">/ 100</span>
          <span className="overall-label">Interview Readiness</span>
        </div>
        <div className="skill-cards">
          <SkillCard label="Technical Knowledge" value={data.technical} />
          <SkillCard label="Communication" value={data.communication} />
          <SkillCard label="Problem Solving" value={data.problemSolving} />
          <SkillCard label="Confidence" value={data.confidence} />
        </div>
      </section>

      <section className="card trend-section">
        <h2 className="section-title">Performance Across Interview</h2>
        <div className="trend-chart">
          {data.questions.map((q) => (
            <div className="trend-col" key={q.number}>
              <span className="trend-score">{q.score}</span>
              <div className="trend-bar-track">
                <div
                  className="trend-bar-fill"
                  style={{ height: `${(q.score / maxScore) * 100}%` }}
                />
              </div>
              <span className={`badge badge-${q.difficulty.toLowerCase()} trend-badge`}>
                {q.difficulty}
              </span>
              <span className="trend-q">Q{q.number}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="two-col">
        <section className="card list-section">
          <h2 className="section-title">Your Strengths</h2>
          <ul className="pill-list">
            {data.strengths.map((s) => (
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
            {data.improvements.map((s) => (
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
        <p className="rec-text">{data.recommendation}</p>
      </section>

      <div className="final-actions">
        <button className="btn btn-secondary" onClick={onPracticeAgain}>
          Practice Again
        </button>
        <button className="btn btn-primary" onClick={onNewInterview}>
          Start New Interview
        </button>
      </div>
    </div>
  );
}

function SkillCard({ label, value }) {
  return (
    <div className="skill-card">
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
