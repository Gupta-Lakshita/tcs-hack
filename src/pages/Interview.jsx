import { useState } from "react";
import Companion from "../components/Companion.jsx";
import AnswerTimer from "../components/AnswerTimer.jsx";
import {
  generateFeedback,
  nextDifficulty,
  pickQuestion,
  scoreLabel,
  getTeachMeContent,
  COMPANION_LINES,
  INTERVIEWER_FOLLOWUPS,
} from "../data/mockData.js";
import "./Interview.css";

function pickLine(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function initialQuestion(interviewType, hasResume, domain) {
  return { ...pickQuestion(interviewType, "Medium", [], hasResume, undefined, domain), difficulty: "Medium" };
}

export default function Interview({ config, domain, totalQuestions, onFinish }) {
  const interviewType = config?.type || "Technical";
  const coachStyle = config?.coach || "Friendly";
  const hasResume = Boolean(config?.resumeName);
  const timerEnabled = Boolean(config?.timerEnabled);
  const timerSeconds = config?.timerSeconds || 60;

  const [question, setQuestion] = useState(() => initialQuestion(interviewType, hasResume, domain));
  const [usedTexts, setUsedTexts] = useState(() => [question.text]);
  const [qIndex, setQIndex] = useState(1);
  const [answer, setAnswer] = useState("");
  const [phase, setPhase] = useState("answering"); // answering | feedback | teach | retry-feedback
  const [feedback, setFeedback] = useState(null);
  const [beforeScore, setBeforeScore] = useState(null);
  const [companionLine, setCompanionLine] = useState("");
  const [sessionLog, setSessionLog] = useState([]);
  const [lastBucket, setLastBucket] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!answer.trim()) return;
    const fb = generateFeedback(answer, coachStyle);
    setFeedback(fb);

    const bucket = scoreLabel(fb.average);
    setCompanionLine(
      pickLine(
        bucket === "strong"
          ? COMPANION_LINES.strongAnswer
          : bucket === "average"
          ? COMPANION_LINES.averageAnswer
          : COMPANION_LINES.weakAnswer
      )
    );

    setPhase(beforeScore !== null ? "retry-feedback" : "feedback");
  }

  function handleTeachMe() {
    setBeforeScore(Math.round(feedback.average));
    setPhase("teach");
  }

  function handleTryAgain() {
    setAnswer("");
    setTimeUp(false);
    setPhase("answering");
  }

  function finalize(taught) {
    const bucket = scoreLabel(feedback.average);
    const entry = {
      number: qIndex,
      topic: question.topic,
      difficulty: question.difficulty,
      question: question.text,
      answer,
      score: Math.round(feedback.average * 10),
      taught,
    };
    const updatedLog = [...sessionLog, entry];
    setSessionLog(updatedLog);

    if (qIndex >= totalQuestions) {
      onFinish(updatedLog);
      return;
    }

    const newDifficulty = nextDifficulty(question.difficulty, feedback.average);
    const preferredTopic = taught ? question.topic : undefined;
    const nextQ = pickQuestion(interviewType, newDifficulty, usedTexts, hasResume, preferredTopic, domain);

    setUsedTexts((u) => [...u, nextQ.text]);
    setQuestion({ ...nextQ, difficulty: newDifficulty });
    setQIndex((i) => i + 1);
    setAnswer("");
    setFeedback(null);
    setBeforeScore(null);
    setLastBucket(bucket);
    setTimeUp(false);
    setPhase("answering");
  }

  const teachContent = phase === "teach" ? getTeachMeContent(question.topic) : null;
  const followupLine = qIndex > 1 && lastBucket && phase === "answering" ? INTERVIEWER_FOLLOWUPS[coachStyle]?.[lastBucket] : null;

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

      {followupLine && <p className="interviewer-followup">“{followupLine}”</p>}

      <div className="card question-card">
        <div className="question-tags">
          <span className={`badge badge-${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
          <span className="badge badge-neutral">{question.topic}</span>
          {question.personalized && <span className="badge badge-powder">From your resume</span>}
        </div>
        <h2 className="question-text">{question.text}</h2>

        {(phase === "answering") && (
          <form onSubmit={handleSubmit} className="answer-form">
            <div className="answer-box-wrap">
              <textarea
                className="answer-input"
                placeholder="Type your answer here&hellip; be as detailed as you would in a real interview."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={8}
                autoFocus
              />
              {timerEnabled && (
                <AnswerTimer key={`${qIndex}-${beforeScore !== null}`} seconds={timerSeconds} onTimeUp={() => setTimeUp(true)} />
              )}
            </div>
            {timeUp && <p className="timer-message">Time's up — finish your thought or submit your answer.</p>}
            <button type="submit" className="btn btn-primary" disabled={!answer.trim()}>
              Submit Answer
            </button>
          </form>
        )}

        {phase === "feedback" && feedback && (
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
            <Companion size="sm" mood={scoreLabel(feedback.average) === "strong" ? "excited" : "neutral"} message={companionLine} />
            <div className="feedback-actions">
              <button className="btn btn-secondary teach-cta" onClick={handleTeachMe}>
                I Can Teach You Too
              </button>
              <button className="btn btn-primary next-btn" onClick={() => finalize(false)}>
                {qIndex >= totalQuestions ? "View Performance Report →" : "Continue Interview →"}
              </button>
            </div>
          </div>
        )}

        {phase === "teach" && teachContent && (
          <div className="teach-panel">
            <span className="teach-label">I Can Teach You Too</span>
            <p className="teach-support">Not sure about this one? No problem. I'll break it down, then you can try again.</p>
            <p className="teach-concept">{teachContent.concept}</p>

            <div className="teach-block">
              <span className="teach-block-label">Simple Example</span>
              <p>{teachContent.example}</p>
            </div>

            <div className="teach-block teach-tip-block">
              <span className="teach-block-label">Interview Tip</span>
              <p>{teachContent.tip}</p>
            </div>

            <button className="btn btn-primary" onClick={handleTryAgain}>
              Try Again →
            </button>
          </div>
        )}

        {phase === "retry-feedback" && feedback && (
          <div className="feedback-panel">
            <div className="before-after">
              <div className="ba-item">
                <span className="ba-label">Before</span>
                <span className="ba-value ba-before">{beforeScore}/10</span>
              </div>
              <span className="ba-arrow">→</span>
              <div className="ba-item">
                <span className="ba-label">After</span>
                <span className="ba-value ba-after">{Math.round(feedback.average)}/10</span>
              </div>
            </div>
            <Companion size="sm" mood="excited" message={COMPANION_LINES.teachMeRetry} />

            <div className="feedback-scores">
              <ScoreItem label="Technical Accuracy" value={feedback.technical} />
              <ScoreItem label="Relevance" value={feedback.relevance} />
              <ScoreItem label="Clarity" value={feedback.clarity} />
              <ScoreItem label="Confidence" value={feedback.confidence} />
            </div>

            <button className="btn btn-primary next-btn" onClick={() => finalize(true)}>
              {qIndex >= totalQuestions ? "View Performance Report →" : "Continue Interview →"}
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
