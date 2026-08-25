// Mock adaptive question bank + fallback report data.
// Structured so it can later be swapped for real AI-generated content.

export const QUESTION_BANK = {
  Technical: {
    Easy: [
      { topic: "Data Structures", text: "What is the difference between an array and a linked list?" },
      { topic: "Web Basics", text: "Explain the difference between HTTP and HTTPS." },
      { topic: "Programming Basics", text: "What is the difference between == and === in JavaScript?" },
    ],
    Medium: [
      { topic: "Algorithms", text: "How would you find duplicate elements in an array efficiently?" },
      { topic: "Databases", text: "Explain the difference between SQL joins: INNER, LEFT, and RIGHT." },
      { topic: "System Design", text: "How would you design a URL shortening service like bit.ly?" },
    ],
    Hard: [
      { topic: "System Design", text: "How would you design a rate limiter for a high-traffic API?" },
      { topic: "Algorithms", text: "Given a stream of numbers, how would you find the median at any point efficiently?" },
      { topic: "Distributed Systems", text: "How would you handle eventual consistency in a distributed database?" },
    ],
  },
  HR: {
    Easy: [
      { topic: "Introduction", text: "Tell me about yourself and why you're interested in this role." },
      { topic: "Motivation", text: "Why do you want to work at this company?" },
      { topic: "Teamwork", text: "Describe a time you worked well as part of a team." },
    ],
    Medium: [
      { topic: "Conflict Resolution", text: "Tell me about a time you disagreed with a teammate. How did you handle it?" },
      { topic: "Leadership", text: "Describe a situation where you had to take initiative without being asked." },
      { topic: "Failure", text: "Tell me about a time you failed at something. What did you learn?" },
    ],
    Hard: [
      { topic: "Pressure Handling", text: "Describe a high-pressure situation with a tight deadline and conflicting priorities. How did you navigate it?" },
      { topic: "Difficult Stakeholders", text: "Tell me about a time you had to influence someone who strongly disagreed with you, without any formal authority." },
      { topic: "Ethical Judgment", text: "Describe a time you faced an ethical dilemma at work or during a project. How did you resolve it?" },
    ],
  },
};
// Mixed pulls from both pools at interview time.

export const COACH_TIPS = {
  strong: [
    "Solid answer — try quantifying the impact with a specific number or metric next time.",
    "Great depth. Push it further by mentioning trade-offs you considered.",
    "Well structured. Adding a brief real-world example would make it even sharper.",
  ],
  average: [
    "Your answer is technically correct, but try giving a concrete example.",
    "Good start — structure it more clearly, e.g. using a STAR format.",
    "Decent answer, but try to be more concise and get to the point faster.",
  ],
  weak: [
    "Let's revisit the fundamentals here — try explaining the core concept in simple terms first.",
    "This answer felt thin. Anchor it with a specific example from your experience.",
    "Try breaking your answer into clear steps before diving into details.",
  ],
};

export function scoreLabel(score) {
  if (score >= 8) return "strong";
  if (score >= 5) return "average";
  return "weak";
}

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function jitter(base, spread) {
  return base + (Math.random() * 2 - 1) * spread;
}

// Mock "AI scoring" of a free-text answer. Deterministic-ish, biased by
// answer length/effort so the demo feels responsive to real input while
// staying reliable (no external API calls).
export function generateFeedback(answerText) {
  const words = answerText.trim().split(/\s+/).filter(Boolean).length;
  const lengthScore = clamp(3 + words / 10, 3, 9.5);

  const technical = clamp(jitter(lengthScore, 1.2), 1, 10);
  const relevance = clamp(jitter(lengthScore, 1), 1, 10);
  const clarity = clamp(jitter(lengthScore, 1.3), 1, 10);
  const confidence = clamp(jitter(lengthScore, 1.5), 1, 10);

  const avg = (technical + relevance + clarity + confidence) / 4;
  const bucket = scoreLabel(avg);
  const tips = COACH_TIPS[bucket];
  const tip = tips[Math.floor(Math.random() * tips.length)];

  return {
    technical: Math.round(technical * 10) / 10,
    relevance: Math.round(relevance * 10) / 10,
    clarity: Math.round(clarity * 10) / 10,
    confidence: Math.round(confidence * 10) / 10,
    average: Math.round(avg * 10) / 10,
    tip,
  };
}

// Adaptive difficulty: strong answer -> harder, weak answer -> easier.
export function nextDifficulty(currentDifficulty, avgScore) {
  const idx = DIFFICULTIES.indexOf(currentDifficulty);
  if (avgScore >= 8 && idx < DIFFICULTIES.length - 1) return DIFFICULTIES[idx + 1];
  if (avgScore <= 5 && idx > 0) return DIFFICULTIES[idx - 1];
  return currentDifficulty;
}

export function pickQuestion(interviewType, difficulty, usedTexts) {
  const pools =
    interviewType === "Mixed"
      ? [...QUESTION_BANK.Technical[difficulty], ...QUESTION_BANK.HR[difficulty]]
      : QUESTION_BANK[interviewType][difficulty];

  const available = pools.filter((q) => !usedTexts.includes(q.text));
  const pool = available.length > 0 ? available : pools;
  return pool[Math.floor(Math.random() * pool.length)];
}

// Fallback dashboard data (used if something goes wrong / for quick preview).
export const FALLBACK_REPORT = {
  overallScore: 82,
  technical: 86,
  communication: 74,
  problemSolving: 84,
  confidence: 79,
  questions: [
    { number: 1, score: 72, difficulty: "Easy" },
    { number: 2, score: 78, difficulty: "Medium" },
    { number: 3, score: 81, difficulty: "Medium" },
    { number: 4, score: 86, difficulty: "Hard" },
    { number: 5, score: 82, difficulty: "Hard" },
  ],
  strengths: [
    "Strong technical fundamentals",
    "Good relevance to questions",
    "Good problem-solving approach",
  ],
  improvements: [
    "Keep answers more concise",
    "Use stronger STAR structure",
    "Provide more concrete examples",
  ],
  recommendation:
    "Focus on structuring behavioral answers using STAR and keep technical explanations concise.",
};
