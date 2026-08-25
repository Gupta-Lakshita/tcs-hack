import "./History.css";

export default function History({ history, activeId, onSelect }) {
  function toggle(id) {
    onSelect(activeId === id ? null : id);
  }

  return (
    <div className="history-wrap">
      <div className="history-header">
        <span className="eyebrow">Your Journey</span>
        <h1>Interview History</h1>
        <p className="tagline">Every practice round, summarized — not a raw transcript dump.</p>
      </div>

      <div className="history-list">
        {history.map((h) => {
          const open = activeId === h.id;
          return (
            <div className={`card history-card ${open ? "open" : ""}`} key={h.id}>
              <div className="history-summary">
                <div className="history-summary-top">
                  <div>
                    <h3>
                      {h.role} <span className="history-type">— {h.type} Interview</span>
                    </h3>
                    <p className="history-score-line">
                      <span className="history-score">{h.overallScore}/100</span>
                      {h.improvement > 0 && <span className="improvement-pill">↑ +{h.improvement}</span>}
                    </p>
                  </div>
                  <button className="btn btn-secondary" onClick={() => toggle(h.id)}>
                    {open ? "Hide Conversation" : "View Conversation"}
                  </button>
                </div>

                <p className="history-text">{h.summary}</p>

                <div className="history-facts">
                  <Fact label="Strongest Area" value={h.strongestArea} />
                  <Fact label="Main Improvement Area" value={h.improveArea} />
                  <Fact label="Teach Me Used" value={`${h.teachMeCount} times`} />
                  <Fact label="Questions" value={h.questionsCount} />
                  <Fact label="Duration" value={h.duration} />
                </div>
              </div>

              {open && (
                <div className="conversation">
                  {h.conversation.map((c) => (
                    <div className="conv-item" key={c.number}>
                      <div className="conv-top">
                        <span className="conv-number">Q{c.number}</span>
                        <span className={`badge badge-${c.difficulty.toLowerCase()}`}>{c.difficulty}</span>
                        <span className="badge badge-neutral">{c.topic}</span>
                        {c.taught && <span className="badge badge-powder">Teach Me used</span>}
                        <span className="conv-score">{c.score}/100</span>
                      </div>
                      <p className="conv-question">{c.question}</p>
                      <p className="conv-answer">
                        <span className="conv-label">Answer —</span> {c.answer}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div className="fact">
      <span className="fact-label">{label}</span>
      <span className="fact-value">{value}</span>
    </div>
  );
}
