import { useState } from "react";
import { CAREER_CATEGORIES, getCategory, getRolesForTrack } from "../data/careerData.js";
import "./Setup.css";
import "./ChoosePath.css";

export default function ChoosePath({ onChoose }) {
  const [step, setStep] = useState("category");
  const [categoryKey, setCategoryKey] = useState(null);
  const [track, setTrack] = useState(null);
  const [search, setSearch] = useState("");
  const [customDegree, setCustomDegree] = useState("");
  const [customRole, setCustomRole] = useState("");

  const category = categoryKey ? getCategory(categoryKey) : null;
  const searchLower = search.toLowerCase();

  const filteredCategories = CAREER_CATEGORIES.filter((c) => c.label.toLowerCase().includes(searchLower));

  const roles = category ? getRolesForTrack(category, track) : [];
  const filteredRoles = roles.filter((r) => r.toLowerCase().includes(searchLower));

  function pickCategory(key) {
    const cat = getCategory(key);
    setCategoryKey(key);
    setSearch("");
    if (cat.custom) {
      setStep("custom");
    } else if (cat.undecided) {
      setStep("role");
    } else {
      setStep("track");
    }
  }

  function pickTrack(t) {
    setTrack(t);
    setSearch("");
    setStep("role");
  }

  function pickRole(role) {
    onChoose({ category: category.label, categoryKey, track, role });
  }

  function submitCustom(e) {
    e.preventDefault();
    onChoose({
      category: "Other",
      categoryKey: "other",
      track: customDegree.trim() || "Not specified",
      role: customRole.trim() || "Not specified",
    });
  }

  function goBack() {
    if (step === "role" && category && !category.undecided) {
      setStep("track");
      setSearch("");
    } else {
      setStep("category");
      setCategoryKey(null);
      setTrack(null);
      setSearch("");
    }
  }

  return (
    <div className="path-wrap">
      <div className="path-header">
        <span className="eyebrow">Choose Your Path</span>
        <h1>What are you preparing for?</h1>
        <p className="tagline">A few quick picks, then every question is tailored to your field.</p>
      </div>

      <div className="path-breadcrumb">
        <Crumb active={step === "category"} done={Boolean(categoryKey)} label={category?.label || "Category"} />
        {category && !category.custom && !category.undecided && (
          <>
            <span className="crumb-sep">→</span>
            <Crumb active={step === "track"} done={Boolean(track)} label={track || category.trackLabel} />
          </>
        )}
        {category && (
          <>
            <span className="crumb-sep">→</span>
            <Crumb active={step === "role" || step === "custom"} done={false} label="Role" />
          </>
        )}
      </div>

      {step !== "category" && (
        <button className="btn btn-ghost back-link" onClick={goBack}>
          ← Back
        </button>
      )}

      {step === "category" && (
        <>
          <input
            className="path-search"
            type="text"
            placeholder="Search a field&hellip; e.g. Design, Finance, Nursing"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="path-grid">
            {filteredCategories.map((c) => (
              <button className="card card-interactive path-card" key={c.key} onClick={() => pickCategory(c.key)}>
                <span className="path-emoji">{c.emoji}</span>
                <span className="path-label">{c.label}</span>
              </button>
            ))}
          </div>
        </>
      )}

      {step === "track" && category && (
        <div className="path-grid path-grid-tracks">
          {category.tracks.map((t) => (
            <button className="card card-interactive path-chip" key={t} onClick={() => pickTrack(t)}>
              {t}
            </button>
          ))}
        </div>
      )}

      {step === "role" && category && (
        <>
          {roles.length > 6 && (
            <input
              className="path-search"
              type="text"
              placeholder="Search a role&hellip;"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
          <div className="path-grid path-grid-tracks">
            {filteredRoles.map((r) => (
              <button className="card card-interactive path-chip path-role" key={r} onClick={() => pickRole(r)}>
                {r}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "custom" && (
        <form className="card path-custom-form" onSubmit={submitCustom}>
          <div className="field-group">
            <label className="field-label" htmlFor="customDegree">
              Your Degree / Course
            </label>
            <input
              id="customDegree"
              className="text-input"
              type="text"
              placeholder="e.g. B.Voc Data Science"
              value={customDegree}
              onChange={(e) => setCustomDegree(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label className="field-label" htmlFor="customRole">
              Target Role
            </label>
            <input
              id="customRole"
              className="text-input"
              type="text"
              placeholder="e.g. Sustainability Analyst"
              value={customRole}
              onChange={(e) => setCustomRole(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary start-btn">
            Continue →
          </button>
        </form>
      )}
    </div>
  );
}

function Crumb({ active, done, label }) {
  return <span className={`crumb ${active ? "active" : ""} ${done ? "done" : ""}`}>{label}</span>;
}
