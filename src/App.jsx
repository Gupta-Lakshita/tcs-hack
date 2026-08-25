import { useState } from "react";
import Dashboard from "./pages/Dashboard.jsx";
import ChoosePath from "./pages/ChoosePath.jsx";
import Setup from "./pages/Setup.jsx";
import Intro from "./pages/Intro.jsx";
import Interview from "./pages/Interview.jsx";
import Report from "./pages/Report.jsx";
import History from "./pages/History.jsx";
import { READINESS_TREND, INTERVIEW_HISTORY, buildReport } from "./data/mockData.js";
import { domainForCategory } from "./data/careerData.js";
import "./App.css";

const TOTAL_QUESTIONS = 5;

export default function App() {
  const [view, setView] = useState("dashboard");
  const [pathInfo, setPathInfo] = useState(null);
  const [config, setConfig] = useState(null);
  const [focusSkill, setFocusSkill] = useState(null);
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState(INTERVIEW_HISTORY);
  const [trend, setTrend] = useState(READINESS_TREND);
  const [activeHistoryId, setActiveHistoryId] = useState(null);

  function goDashboard() {
    setView("dashboard");
  }

  function handleStartPractice() {
    setFocusSkill(null);
    setView(pathInfo ? "setup" : "path");
  }

  function handlePracticeSkill(skillName) {
    setFocusSkill(skillName);
    setView(pathInfo ? "setup" : "path");
  }

  function handlePathChosen(info) {
    setPathInfo(info);
    setView("setup");
  }

  function handleSetupContinue(setupExtras) {
    setConfig({ ...pathInfo, ...setupExtras });
    setView("intro");
  }

  function handleBeginInterview() {
    setView("interview");
  }

  function handleFinishInterview(sessionQuestions) {
    const newReport = buildReport(sessionQuestions, config);
    const previousBest = history.reduce((max, h) => Math.max(max, h.overallScore), 0);
    newReport.isPersonalBest = newReport.overallScore > previousBest;
    setReport(newReport);
    setFocusSkill(null);

    setTrend((prev) => {
      const nextNumber = prev[prev.length - 1].number + 1;
      const updated = [...prev, { number: nextNumber, score: newReport.overallScore }];
      return updated.length > 8 ? updated.slice(-8) : updated;
    });

    setHistory((prev) => [
      {
        id: `h-${Date.now()}`,
        role: newReport.role,
        type: newReport.type,
        overallScore: newReport.overallScore,
        technical: newReport.technical,
        communication: newReport.communication,
        problemSolving: newReport.problemSolving,
        confidence: newReport.confidence,
        improvement: Math.max(0, newReport.overallScore - (prev[0]?.overallScore ?? newReport.overallScore - 5)),
        questionsCount: newReport.questions.length,
        duration: newReport.duration,
        teachMeCount: newReport.teachMeCount,
        summary: `Practiced ${newReport.questions.length} ${newReport.type.toLowerCase()} questions for the ${newReport.role} role, landing at ${newReport.overallScore}/100.`,
        strongestArea: newReport.strengths[0],
        improveArea: newReport.improvements[0],
        conversation: newReport.questions,
      },
      ...prev,
    ]);

    setView("report");
  }

  function handlePracticeAgain() {
    setReport(null);
    setView("setup");
  }

  function handleViewHistoryItem(id) {
    setActiveHistoryId(id);
    setView("history");
  }

  const domain = pathInfo ? domainForCategory(pathInfo.categoryKey) : "Technical";

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand" onClick={goDashboard}>
          <span>INTERVIEW</span>
          <span className="slashes">//</span>
          <span>MODE</span>
        </div>
        {view !== "dashboard" && (
          <button className="btn btn-ghost" onClick={goDashboard}>
            ← Dashboard
          </button>
        )}
      </header>

      {view === "dashboard" && (
        <Dashboard
          trend={trend}
          history={history}
          onStartPractice={handleStartPractice}
          onPracticeSkill={handlePracticeSkill}
          onViewHistoryItem={handleViewHistoryItem}
          onViewAllHistory={() => {
            setActiveHistoryId(null);
            setView("history");
          }}
        />
      )}
      {view === "path" && <ChoosePath onChoose={handlePathChosen} />}
      {view === "setup" && (
        <Setup pathInfo={pathInfo} focusSkill={focusSkill} onContinue={handleSetupContinue} />
      )}
      {view === "intro" && <Intro config={config} onBegin={handleBeginInterview} />}
      {view === "interview" && (
        <Interview config={config} domain={domain} totalQuestions={TOTAL_QUESTIONS} onFinish={handleFinishInterview} />
      )}
      {view === "report" && (
        <Report report={report} onPracticeAgain={handlePracticeAgain} onBackToDashboard={goDashboard} />
      )}
      {view === "history" && (
        <History history={history} activeId={activeHistoryId} onSelect={setActiveHistoryId} />
      )}
    </div>
  );
}
