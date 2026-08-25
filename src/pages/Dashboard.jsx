import { useState } from "react";
import Novi from "../components/Novi.jsx";
import LineChart from "../components/LineChart.jsx";
import SkillModal from "../components/SkillModal.jsx";
import { NOVI_LINES } from "../data/mockData.js";
import { useCountUp } from "../hooks/useCountUp.js";
import "./Dashboard.css";

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const CALENDAR_EVENTS = [
  { offset: 1, label: "Practice", tone: "mint" },
  { offset: 3, label: "Mock Interview", tone: "lavender" },
  { offset: 5, label: "Technical Round", tone: "peach" },
];

function greetingWord() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function Dashboard({ trend, history, onStartPractice, onPracticeSkill, onViewHistoryItem, onViewAllHistory }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const latest = history[0];
  const firstScore = trend[0].score;
  const pointsGainedTotal = Math.max(0, trend[trend.length - 1].score - firstScore);
  const readinessLabel = latest.role ? `${latest.role} Readiness` : "Interview Readiness";
  const readinessCount = useCountUp(latest.overallScore);

  const skillScores = {
    "Technical Knowledge": latest.technical,
    Communication: latest.communication,
    "Problem Solving": latest.problemSolving,
    Confidence: latest.confidence,
  };

  const weakestEntry = Object.entries(skillScores).sort((a, b) => a[1] - b[1])[0];
  const [weakestSkill, weakestScore] = weakestEntry;

  const insight =
    weakestScore >= 82
      ? "You're well-rounded across every skill area — keep the streak going with another round."
      : `Your ${weakestSkill.toLowerCase()} is your biggest opportunity right now. One more focused session this week could push your readiness higher.`;

  const today = new Date();

  return (
    <div className="dashboard">
      <div className="dash-greeting">
        <div>
          <h1>{greetingWord()}, Niharika 👋</h1>
          <p className="dash-insight">{insight}</p>
        </div>
        <button className="btn btn-primary" onClick={onStartPractice}>
          Start Practice →
        </button>
      </div>

      <div className="dash-grid">
        <div className="dash-main">
          <section className="card dash-hero-section stagger" style={{ "--d": "0ms" }}>
            <div className="dash-overall-block">
              <span className="dash-overall-score gradient-text">{readinessCount}</span>
              <span className="dash-overall-max">/ 100</span>
              <span className="dash-overall-label">{readinessLabel}</span>
              <span className="overall-sub">+{pointsGainedTotal} points since your first interview</span>
            </div>
            <div className="dash-skill-cards">
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

          <section className="card dash-trend-section stagger" style={{ "--d": "80ms" }}>
            <div className="trend-header">
              <h2 className="section-title">Progress Over Time</h2>
              <div className="trend-current">
                <span className="trend-current-score">{trend[trend.length - 1].score}</span>
                <span className="trend-current-sub">+{pointsGainedTotal} since your first interview</span>
              </div>
            </div>
            <LineChart data={trend} />
            <p className="dash-trend-note">You're improving consistently.</p>
          </section>

          <section className="recent-section stagger" style={{ "--d": "160ms" }}>
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
                  <div className="recent-notes">
                    <span className="recent-note recent-note-good">+ {h.strongestArea}</span>
                    <span className="recent-note recent-note-warn">→ {h.improveArea}</span>
                  </div>
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

        <div className="dash-side">
          <section className="card focus-card stagger" style={{ "--d": "40ms" }}>
            <span className="focus-eyebrow">Today's Focus</span>
            <h3 className="focus-title">{weakestSkill}</h3>
            <span className="focus-duration">15 min</span>
            <p className="focus-copy">Practice concise, structured answers to sharpen this skill.</p>
            <button className="btn btn-primary focus-btn" onClick={() => onPracticeSkill(weakestSkill)}>
              Start Practice
            </button>
            <Novi pose="encourage" size="sm" message={NOVI_LINES.focusNudge} />
          </section>

          <section className="card calendar-card stagger" style={{ "--d": "120ms" }}>
            <span className="section-title">This Week</span>
            <div className="mini-calendar">
              {Array.from({ length: 7 }).map((_, i) => {
                const d = new Date(today);
                d.setDate(today.getDate() + i);
                const event = CALENDAR_EVENTS.find((e) => e.offset === i);
                return (
                  <div className={`cal-day ${i === 0 ? "cal-today" : ""} ${event ? "cal-has-event" : ""}`} key={i} title={event?.label}>
                    <span className="cal-dow">{DAY_LABELS[d.getDay()]}</span>
                    <span className="cal-date">{d.getDate()}</span>
                    {event && <span className={`cal-dot tone-${event.tone}`} />}
                  </div>
                );
              })}
            </div>
            <div className="cal-legend">
              {CALENDAR_EVENTS.map((e) => (
                <span className="cal-legend-item" key={e.label}>
                  <span className={`cal-dot tone-${e.tone}`} /> {e.label}
                </span>
              ))}
            </div>
          </section>

          <section className="card upcoming-card stagger" style={{ "--d": "200ms" }}>
            <span className="section-title">Upcoming</span>
            <h3 className="upcoming-role">{latest.role}</h3>
            <span className="upcoming-type">Behavioral + Case</span>
            <span className="upcoming-time">Friday, 5:30 PM</span>
            <div className="upcoming-prep">
              <div className="upcoming-prep-top">
                <span>Preparation</span>
                <span>{latest.overallScore}%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${latest.overallScore}%` }} />
              </div>
            </div>
            <button className="btn btn-secondary upcoming-btn" onClick={onStartPractice}>
              Prepare
            </button>
          </section>
        </div>
      </div>

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
    <button className={`dash-skill-card card-interactive tone-${tone}`} onClick={onClick}>
      <div className="dash-skill-top">
        <span className="dash-skill-label">{label}</span>
        <span className="dash-skill-value">{value}</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill skill-bar-animate" style={{ "--w": `${value}%` }} />
      </div>
      <span className="skill-cta">View roadmap →</span>
    </button>
  );
}
