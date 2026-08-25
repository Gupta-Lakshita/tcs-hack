import { getSkillDetail } from "../data/mockData.js";
import "./SkillModal.css";

export default function SkillModal({ skillId, domain, score, onClose, onPractice }) {
  const detail = getSkillDetail(skillId, score, domain);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel skill-modal" onClick={(e) => e.stopPropagation()}>
        <button className="skill-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <span className="skill-modal-eyebrow">{detail.label}</span>
        <div className="skill-modal-score">
          {score}
          <span>/ 100</span>
        </div>

        <p className="skill-modal-problem">{detail.problem}</p>

        <div className="skill-modal-block">
          <span className="skill-modal-block-label">Why This Matters</span>
          <p>{detail.whyItMatters}</p>
        </div>

        <div className="skill-modal-block">
          <span className="skill-modal-block-label">Roadmap</span>
          <div className="roadmap-list">
            {detail.roadmap.map((step, i) => (
              <div className="roadmap-step" key={step.title}>
                <span className="roadmap-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="roadmap-title">{step.title}</span>
                  <p className="roadmap-detail">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skill-modal-target">
          <div className="target-row">
            <span className="target-current">{score}</span>
            <span className="target-arrow">→</span>
            <span className="target-goal">{detail.target}</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${(score / detail.target) * 100}%` }} />
          </div>
        </div>

        <button className="btn btn-primary skill-modal-cta" onClick={() => onPractice(skillId)}>
          Practice {detail.label} →
        </button>
      </div>
    </div>
  );
}
