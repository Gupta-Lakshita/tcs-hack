import { useState } from "react";
import Setup from "./pages/Setup.jsx";
import Interview from "./pages/Interview.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./App.css";

const TOTAL_QUESTIONS = 5;

export default function App() {
  const [view, setView] = useState("setup"); // setup | interview | dashboard
  const [config, setConfig] = useState(null);
  const [report, setReport] = useState(null);

  function handleStart(setupConfig) {
    setConfig(setupConfig);
    setView("interview");
  }

  function handleFinish(interviewReport) {
    setReport(interviewReport);
    setView("dashboard");
  }

  function handleRestart() {
    setView("setup");
    setConfig(null);
    setReport(null);
  }

  function handlePracticeAgain() {
    setView("interview");
    setReport(null);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span>INTERVIEW</span>
          <span className="slashes">//</span>
          <span>MODE</span>
          <span className="brand-dot" />
        </div>
      </header>

      {view === "setup" && <Setup onStart={handleStart} />}
      {view === "interview" && (
        <Interview
          config={config}
          totalQuestions={TOTAL_QUESTIONS}
          onFinish={handleFinish}
        />
      )}
      {view === "dashboard" && (
        <Dashboard
          report={report}
          onPracticeAgain={handlePracticeAgain}
          onNewInterview={handleRestart}
        />
      )}
    </div>
  );
}
