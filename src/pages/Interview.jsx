import { useState } from "react";
import { generateFeedback, nextDifficulty, pickQuestion } from "../data/mockData.js";
import "./Interview.css";

function initialQuestion(interviewType) {
  return { ...pickQuestion(interviewType, "Medium", []), difficulty: "Medium" };
}

export default function Interview({ config, totalQuestions, onFinish }) {
  const interviewType = config?.type || "Technical";

  const [question, setQuestion] = useState(() => initialQuestion(interviewType));
  const [usedTexts, setUsedTexts] = useState(() => [question.text]);
  const [qIndex, setQIndex] = useState(1);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLast, setIsLast] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!answer.trim()) return;
    const fb = generateFeedback(answer);
    setFeedback(fb);
    setHistory((h) => [
      ...h,
      { number: qIndex, score: Math.round(fb.average * 10), difficulty: question.difficulty },
    ]);
    setIsLast(qIndex >= totalQuestions);
  }

  function handleNext() {
    if (isLast) {
      const scores = [...history];
      const overall = Math.round(
        scores.reduce((sum, s) => sum + s.score, 0) / scores.length
      );
      const technical = Math.round(
        scores.reduce((sum, s, i) => sum + s.score + (i % 2 === 0 ? 2 : -2), 0) / scores.length
      );
      onFinish({
        overallScore: clampScore(overall),
        technical: clampScore(technical),
        communication: clampScore(overall - 6),
        problemSolving: clampScore(overall + 2),
        confidence: clampScore(overall - 3),
        questions: scores,
        strengths: pickStrengths(overall),
        improvements: pickImprovements(overall),
        recommendation:
          "Focus on structuring behavioral answers using STAR and keep technical explanations concise.",
      });
      return;
    }

    const newDifficulty = nextDifficulty(question.difficulty, feedback.average);
    const nextQ = pickQuestion(interviewType, newDifficulty, usedTexts);
    setUsedTexts((u) => [...u, nextQ.text]);
    setQuestion({ ...nextQ, difficulty: newDifficulty });
    setQIndex((i) => i + 1);
    setAnswer("");
    setFeedback(null);
  }

  return (
    <div className="interview-wrap">
      <div className="interview-meta">
        <span className="q-count">
          Question {qIndex} <span className="of">/ {totalQuestions}</span>
        </span>
        <div className="bar-track meta-bar">
          <div className="bar-fill" style={{ width: `${(qIndex / totalQuestions) * 100}%` }} />
        </div>
      </div>

      <div className="card question-card">
        <div className="question-tags">
          <span className={`badge badge-${question.difficulty.toLowerCase()}`}>
            {question.difficulty}
          </span>
          <span className="badge badge-neutral">{question.topic}</span>
        </div>
        <h2 className="question-text">{question.text}</h2>

        {!feedback && (
          <form onSubmit={handleSubmit} className="answer-form">
            <textarea
              className="answer-input"
              placeholder="Type your answer here&hellip; be as detailed as you would in a real interview."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={8}
              autoFocus
            />
            <button type="submit" className="btn btn-primary" disabled={!answer.trim()}>
              Submit Answer
            </button>
          </form>
        )}

        {feedback && (
          <div className="feedback-panel">
            <div className="feedback-scores">
              <ScoreItem label="Technical Accuracy" value={feedback.technical} />
              <ScoreItem label="Relevance" value={feedback.relevance} />
              <ScoreItem label="Clarity" value={feedback.clarity} />
              <ScoreItem label="Confidence" value={feedback.confidence} />
            </div>
            <div className="coach-tip">
              <span className="coach-label">AI Coach Tip</span>
              <p>{feedback.tip}</p>
            </div>
            <button className="btn btn-primary next-btn" onClick={handleNext}>
              {isLast ? "View Performance Report →" : "Next Question →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ScoreItem({ label, value }) {
  return (
    <div className="score-item">
      <div className="score-item-top">
        <span>{label}</span>
        <span className="score-value">{value}/10</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${value * 10}%` }} />
      </div>
    </div>
  );
}

function clampScore(n) {
  return Math.max(35, Math.min(98, n));
}

function pickStrengths(overall) {
  const all = [
    "Strong technical fundamentals",
    "Good relevance to questions",
    "Good problem-solving approach",
    "Clear and structured communication",
    "Handled harder follow-ups well",
  ];
  return overall >= 70 ? all.slice(0, 3) : all.slice(2, 5);
}

function pickImprovements(overall) {
  const all = [
    "Keep answers more concise",
    "Use stronger STAR structure",
    "Provide more concrete examples",
    "Slow down and structure thoughts before answering",
    "Dig deeper into core fundamentals",
  ];
  return overall >= 70 ? all.slice(0, 3) : all.slice(2, 5);
}
