import { useEffect, useState } from "react";

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

// Mount a fresh instance (via a `key` on the question/attempt) to reset the
// countdown — keeps state initialization synchronous instead of resetting
// it from inside an effect.
export default function AnswerTimer({ seconds, onTimeUp }) {
  const [secondsLeft, setSecondsLeft] = useState(seconds);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          onTimeUp();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className={`timer-pill ${secondsLeft <= 10 ? "timer-low" : ""}`}>⏱ {formatTime(secondsLeft)}</span>;
}
