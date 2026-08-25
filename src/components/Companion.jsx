import "./Companion.css";

// A small original mascot — "Pip" — a friendly blob that keeps the user
// company through the app. Pure CSS shape, no external assets.
export default function Companion({ mood = "neutral", message, size = "md" }) {
  return (
    <div className={`companion companion-${size}`}>
      <div className={`pip pip-${mood}`}>
        <div className="pip-eyes">
          <span className="pip-eye" />
          <span className="pip-eye" />
        </div>
        <div className="pip-mouth" />
        <div className="pip-cheeks" />
      </div>
      {message && (
        <div className="speech-bubble">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
