import { useState } from "react";
import "./LineChart.css";

const WIDTH = 640;
const HEIGHT = 180;
const PAD_X = 24;
const PAD_TOP = 20;
const PAD_BOTTOM = 30;

function smoothPath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midX = (p0.x + p1.x) / 2;
    d += ` C ${midX} ${p0.y}, ${midX} ${p1.y}, ${p1.x} ${p1.y}`;
  }
  return d;
}

// Small, dependency-free SVG line chart. Real-time driven by `data`
// (re-renders automatically whenever the trend array changes).
export default function LineChart({ data, labelPrefix = "Interview" }) {
  const [hoverIdx, setHoverIdx] = useState(null);

  const scores = data.map((d) => d.score);
  const min = Math.min(...scores);
  const max = Math.max(...scores);
  const range = Math.max(1, max - min);

  const innerW = WIDTH - PAD_X * 2;
  const innerH = HEIGHT - PAD_TOP - PAD_BOTTOM;

  const points = data.map((d, i) => ({
    x: PAD_X + (data.length === 1 ? innerW / 2 : (i / (data.length - 1)) * innerW),
    y: PAD_TOP + innerH - ((d.score - min) / range) * innerH,
    ...d,
  }));

  const linePath = smoothPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${PAD_TOP + innerH} L ${points[0].x} ${PAD_TOP + innerH} Z`;

  return (
    <div className="line-chart-wrap">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="line-chart-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#lineFill)" stroke="none" />
        <path d={linePath} fill="none" stroke="var(--accent-strong)" strokeWidth="3" strokeLinecap="round" />
        {points.map((p, i) => (
          <g key={p.number} onMouseEnter={() => setHoverIdx(i)} onMouseLeave={() => setHoverIdx(null)}>
            <circle cx={p.x} cy={p.y} r="14" fill="transparent" />
            <circle
              cx={p.x}
              cy={p.y}
              r={hoverIdx === i ? 6 : 4.5}
              fill="#fff"
              stroke="var(--accent-strong)"
              strokeWidth="2.5"
              className="line-chart-dot"
            />
          </g>
        ))}
      </svg>

      {hoverIdx !== null && (
        <div
          className="line-chart-tooltip"
          style={{ left: `${(points[hoverIdx].x / WIDTH) * 100}%`, top: `${(points[hoverIdx].y / HEIGHT) * 100}%` }}
        >
          <span className="lct-score">{points[hoverIdx].score}</span>
          <span className="lct-label">
            {labelPrefix} {points[hoverIdx].number}
          </span>
        </div>
      )}

      <div className="line-chart-axis">
        {data.map((d) => (
          <span key={d.number} className="line-chart-axis-label">
            {d.number}
          </span>
        ))}
      </div>
    </div>
  );
}
