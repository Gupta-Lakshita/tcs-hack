import "./Novi.css";

// Novi — the user's tiny study-buddy mascot. Original SVG illustration
// (curly dark hair, round glasses, pencil behind ear, headphones, purple
// sweater) kept consistent across every pose; only expression + a small
// sticker badge change to signal context.
const BADGES = {
  greeting: "\u{1F44B}",
  thinking: "\u{1F4AD}",
  strong: "\u{1F4A1}",
  encourage: "\u{1F44D}",
  teach: "\u{1F4D3}",
  celebrate: "\u{1F389}",
  personalBest: "\u{2B50}",
};

export default function Novi({ pose = "greeting", message, size = "md" }) {
  return (
    <div className={`novi novi-${size}`}>
      <div className={`novi-avatar novi-pose-${pose}`}>
        <svg viewBox="0 0 100 100" className="novi-svg">
          <path className="novi-hair-back" d="M20 46 C14 20, 34 4, 50 6 C68 4, 88 20, 80 48 C82 60, 76 62, 72 56 C74 40, 62 26, 50 26 C38 26, 26 40, 28 56 C24 62, 18 58, 20 46 Z" />
          <circle className="novi-cup novi-cup-l" cx="17" cy="52" r="8" />
          <circle className="novi-cup novi-cup-r" cx="83" cy="52" r="8" />
          <path className="novi-band" d="M17 48 C17 26, 83 26, 83 48" fill="none" />
          <circle className="novi-face" cx="50" cy="52" r="30" />
          <circle className="novi-ear novi-ear-l" cx="21" cy="54" r="5" />
          <circle className="novi-ear novi-ear-r" cx="79" cy="54" r="5" />
          <g className="novi-glasses">
            <circle cx="38" cy="52" r="11" />
            <circle cx="62" cy="52" r="11" />
            <path d="M49 52 H51" />
            <path d="M27 50 C24 48, 22 49, 20 52" />
          </g>
          <g className="novi-eyes">
            <circle className="novi-eye" cx="38" cy="52" r="2.6" />
            <circle className="novi-eye" cx="62" cy="52" r="2.6" />
            <path className="novi-eye-happy left" d="M34 51 Q38 46, 42 51" />
            <path className="novi-eye-happy right" d="M58 51 Q62 46, 66 51" />
          </g>
          <path className="novi-mouth novi-mouth-smile" d="M42 62 Q50 68, 58 62" />
          <path className="novi-mouth novi-mouth-open" d="M42 61 Q50 74, 58 61 Q50 66, 42 61 Z" />
          <path className="novi-mouth novi-mouth-flat" d="M42 64 Q50 62, 57 65" />
          <path className="novi-pencil" d="M24 22 L34 34 L31 37 L21 25 Z" />
          <path className="novi-hair-front" d="M18 44 C16 24, 32 8, 50 10 C50 10, 44 20, 40 30 C36 22, 24 30, 24 44 Z M82 44 C84 24, 68 8, 50 10 C50 10, 58 22, 60 30 C66 22, 78 30, 78 44 Z" />
          <path className="novi-sweater" d="M14 100 C14 78, 30 70, 50 70 C70 70, 86 78, 86 100 Z" />
          <path className="novi-collar" d="M40 71 L50 82 L60 71" fill="none" />
        </svg>
        <span className="novi-badge">{BADGES[pose]}</span>
      </div>
      {message && (
        <div className="novi-bubble">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
