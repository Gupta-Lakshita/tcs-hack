// Mock adaptive question bank, teach-me content, companion lines and
// interview history. Structured so it can later be swapped for real AI
// responses without touching the UI.

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const QUESTION_BANK = {
  Technical: {
    Easy: [
      { topic: "Data Structures", text: "What is the difference between an array and a linked list?" },
      { topic: "Web Basics", text: "Explain the difference between HTTP and HTTPS." },
      { topic: "OOP", text: "What is the difference between a class and an object?" },
    ],
    Medium: [
      { topic: "OOP", text: "You mentioned using object-oriented programming in your project. Can you explain where polymorphism was useful?" },
      { topic: "Data Structures", text: "How would you find duplicate elements in an array efficiently?" },
      { topic: "SQL", text: "Explain the difference between SQL joins: INNER, LEFT, and RIGHT." },
    ],
    Hard: [
      { topic: "System Design", text: "How would you design a URL shortening service like bit.ly?" },
      { topic: "Problem Solving", text: "Given a stream of numbers, how would you find the median at any point efficiently?" },
      { topic: "System Design", text: "How would you design a rate limiter for a high-traffic API?" },
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

// Mock "resume" used for personalization once a file is uploaded.
export const MOCK_RESUME = {
  project: "Smart Waste Management System",
  stack: "React and Node.js",
};

// Personalized variants shown when a resume is attached, keyed by topic.
const PERSONALIZED_QUESTIONS = {
  OOP: `You mentioned building the ${MOCK_RESUME.project}. Where did object-oriented design — like polymorphism — come in handy there?`,
  "Data Structures": `In the ${MOCK_RESUME.project}, which data structure did you rely on most, and why did it fit the problem?`,
  "System Design": `If you had to scale the ${MOCK_RESUME.project} to handle 10x the users, what would you redesign first?`,
  "Web Basics": `You listed ${MOCK_RESUME.stack} on your resume — why did you choose that stack for the frontend?`,
};

export const COACH_TIPS = {
  strong: [
    "Solid answer — try quantifying the impact with a specific number or metric next time.",
    "Great depth. Push it further by mentioning trade-offs you considered.",
    "Well structured. Adding a brief real-world example would make it even sharper.",
  ],
  average: [
    "Your explanation is technically correct, but try supporting it with a concrete example.",
    "Good start — structure it more clearly, e.g. using a STAR format.",
    "Decent answer, but try to be more concise and get to the point faster.",
  ],
  weak: [
    "Let's revisit the fundamentals here — try explaining the core concept in simple terms first.",
    "This answer felt thin. Anchor it with a specific example from your experience.",
    "Try breaking your answer into clear steps before diving into details.",
  ],
};

// Bite-sized "Teach Me" explanations, kept under a minute to read.
export const TEACH_ME_CONTENT = {
  OOP: {
    concept: "Polymorphism means the same interface can be used for different underlying forms — each object responds to the same call in its own way.",
    example: "A draw() method can behave differently for a Circle, a Rectangle, and a Triangle — same method name, different behavior.",
    tip: "In an interview, explain the concept first, then give a simple real-world or code example.",
  },
  "Data Structures": {
    concept: "Pick a data structure based on the operation you do most often — lookups favor hash maps, ordered access favors arrays or trees.",
    example: "Finding duplicates? A hash set gives O(1) lookups instead of comparing every pair, which is O(n²).",
    tip: "Name the time complexity out loud — interviewers want to hear you reasoning about trade-offs.",
  },
  SQL: {
    concept: "A JOIN combines rows from two tables based on a related column. INNER keeps only matches; LEFT keeps everything from the left table too.",
    example: "LEFT JOIN customers with orders to see every customer, even ones with zero orders — unmatched columns just come back NULL.",
    tip: "Draw two overlapping circles in your head (or on the whiteboard) — it makes JOIN types easy to explain.",
  },
  "System Design": {
    concept: "Start broad: clients, a load balancer, app servers, a database, then a cache. Add detail only where the interviewer probes.",
    example: "For a URL shortener: hash the long URL to a short code, store the mapping in a key-value store, cache hot lookups.",
    tip: "Say your assumptions out loud (scale, read/write ratio) before diving into the design.",
  },
  "Problem Solving": {
    concept: "Break a hard problem into a brute-force solution first, then look for the bottleneck to optimize.",
    example: "For a running median, two heaps (one max-heap, one min-heap) keep the middle accessible in O(log n) per insert.",
    tip: "Talk through your brute-force idea before optimizing — it shows your reasoning, not just the answer.",
  },
  "Web Basics": {
    concept: "HTTPS is HTTP layered with TLS encryption, so data in transit can't be read or tampered with by a third party.",
    example: "Logging in over HTTP would send your password in plain text; HTTPS encrypts it before it leaves the browser.",
    tip: "Mention both the 'what' (encryption) and the 'why' (integrity + confidentiality) — interviewers like the why.",
  },
  default: {
    concept: "Structure behavioral answers with STAR: Situation, Task, Action, Result — it keeps you concise and complete.",
    example: "\"Our launch was delayed (Situation), I owned the fix (Task), reprioritized the backlog (Action), shipped 2 days early (Result).\"",
    tip: "Lead with the Result in one sentence, then back it up with the S-T-A — it keeps interviewers engaged.",
  },
};

export function getTeachMeContent(topic) {
  return TEACH_ME_CONTENT[topic] || TEACH_ME_CONTENT.default;
}

// Companion ("Pip") lines shown across the app.
export const COMPANION_LINES = {
  dashboardReturning: "Ready for another round?",
  dashboardFirstTime: "Good to see you. Let's find out where you stand.",
  preInterview: "Don't worry about getting everything right. This is practice.",
  strongAnswer: ["Okayyy, that was good 👀", "Nice, you really know this one.", "That's the answer I wanted to hear!"],
  averageAnswer: ["Not bad — a little more detail next time.", "Solid attempt, let's sharpen it.", "You're close, keep going."],
  weakAnswer: ["No worries, this is exactly what practice is for.", "Let's slow down and rebuild this one.", "Everyone stumbles on this — let's fix it."],
  teachMeRetry: "Nice improvement.",
  finishedBest: "Nice work! That's your best score yet.",
  finishedGood: "Solid round. Your consistency is showing.",
  improvement: (points) => `+${points} points! Look at you.`,
};

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function jitter(base, spread) {
  return base + (Math.random() * 2 - 1) * spread;
}

// Mock "AI scoring" of a free-text answer — biased by length/effort so the
// demo feels responsive to real input while staying reliable offline.
export function generateFeedback(answerText) {
  const words = answerText.trim().split(/\s+/).filter(Boolean).length;
  const lengthScore = clamp(3 + words / 9, 3, 9.5);

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

export function scoreLabel(score) {
  if (score >= 8) return "strong";
  if (score >= 5) return "average";
  return "weak";
}

// Adaptive difficulty: strong answer -> harder, weak answer -> easier.
export function nextDifficulty(currentDifficulty, avgScore) {
  const idx = DIFFICULTIES.indexOf(currentDifficulty);
  if (avgScore >= 8 && idx < DIFFICULTIES.length - 1) return DIFFICULTIES[idx + 1];
  if (avgScore <= 5 && idx > 0) return DIFFICULTIES[idx - 1];
  return currentDifficulty;
}

function personalize(question, hasResume) {
  if (hasResume && PERSONALIZED_QUESTIONS[question.topic]) {
    return { ...question, text: PERSONALIZED_QUESTIONS[question.topic], personalized: true };
  }
  return question;
}

// Picks the next question. When `preferredTopic` is set (after a Teach Me),
// it re-tests the same concept — or a closely related one if that topic is
// exhausted — instead of jumping to something unrelated.
export function pickQuestion(interviewType, difficulty, usedTexts, hasResume, preferredTopic) {
  if (preferredTopic) {
    const banks = interviewType === "Mixed" ? [QUESTION_BANK.Technical, QUESTION_BANK.HR] : [QUESTION_BANK[interviewType]];
    const candidates = banks.flatMap((bank) =>
      DIFFICULTIES.flatMap((d) => bank[d].filter((q) => q.topic === preferredTopic))
    );
    const unused = candidates.filter((q) => !usedTexts.includes(q.text));
    const chosen = (unused.length > 0 ? unused : candidates)[0];
    if (chosen) return personalize(chosen, hasResume);
  }

  const pools =
    interviewType === "Mixed"
      ? [...QUESTION_BANK.Technical[difficulty], ...QUESTION_BANK.HR[difficulty]]
      : QUESTION_BANK[interviewType][difficulty];

  const available = pools.filter((q) => !usedTexts.includes(q.text));
  const pool = available.length > 0 ? available : pools;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  return personalize(picked, hasResume);
}

// --- Interview history (mock, seeded so the dashboard/history feel alive) ---

export const READINESS_TREND = [
  { number: 1, score: 64 },
  { number: 2, score: 69 },
  { number: 3, score: 74 },
  { number: 4, score: 78 },
  { number: 5, score: 82 },
];

export const INTERVIEW_HISTORY = [
  {
    id: "h1",
    role: "Software Engineer",
    type: "Technical",
    overallScore: 82,
    technical: 86,
    communication: 74,
    problemSolving: 84,
    confidence: 79,
    improvement: 8,
    questionsCount: 5,
    duration: "8 min",
    teachMeCount: 2,
    summary: "Strong performance on OOP and data structures. The candidate struggled initially with system design but improved after guided feedback.",
    strongestArea: "Technical fundamentals",
    improveArea: "Explaining concepts with concrete examples",
    conversation: [
      { number: 1, topic: "OOP", difficulty: "Easy", question: "What is the difference between a class and an object?", answer: "A class is a blueprint, an object is an instance of that blueprint with actual values.", score: 72, taught: false },
      { number: 2, topic: "Data Structures", difficulty: "Medium", question: "How would you find duplicate elements in an array efficiently?", answer: "You could use a hash set to track seen elements in one pass.", score: 78, taught: true },
      { number: 3, topic: "SQL", difficulty: "Medium", question: "Explain the difference between SQL joins: INNER, LEFT, and RIGHT.", answer: "INNER only returns matching rows, LEFT keeps all rows from the left table, RIGHT keeps all from the right.", score: 81, taught: false },
      { number: 4, topic: "Problem Solving", difficulty: "Hard", question: "Given a stream of numbers, how would you find the median at any point efficiently?", answer: "Maintain two heaps, a max-heap for the lower half and a min-heap for the upper half.", score: 86, taught: false },
      { number: 5, topic: "System Design", difficulty: "Hard", question: "How would you design a rate limiter for a high-traffic API?", answer: "I'd use a token bucket algorithm backed by Redis for shared state across servers.", score: 82, taught: true },
    ],
  },
  {
    id: "h2",
    role: "Software Engineer",
    type: "Mixed",
    overallScore: 74,
    technical: 79,
    communication: 68,
    problemSolving: 75,
    confidence: 70,
    improvement: 5,
    questionsCount: 5,
    duration: "10 min",
    teachMeCount: 1,
    summary: "Good technical grounding, but behavioral answers lacked structure. STAR framing would sharpen the HR responses.",
    strongestArea: "Problem-solving approach",
    improveArea: "Structuring behavioral answers",
    conversation: [
      { number: 1, topic: "Introduction", difficulty: "Easy", question: "Tell me about yourself and why you're interested in this role.", answer: "I'm a CS student who's built a few full-stack projects and I like solving real problems.", score: 68, taught: false },
      { number: 2, topic: "OOP", difficulty: "Medium", question: "Can you explain where polymorphism was useful in a project?", answer: "I used it for different shape classes that all implemented a draw method.", score: 75, taught: false },
      { number: 3, topic: "Conflict Resolution", difficulty: "Medium", question: "Tell me about a time you disagreed with a teammate.", answer: "We disagreed on a library choice, so we prototyped both quickly and compared.", score: 70, taught: true },
      { number: 4, topic: "Data Structures", difficulty: "Medium", question: "How would you find duplicate elements in an array efficiently?", answer: "Sort it first, then scan for adjacent matches.", score: 74, taught: false },
      { number: 5, topic: "Leadership", difficulty: "Medium", question: "Describe a situation where you had to take initiative.", answer: "I noticed our deploy process was manual so I scripted it without being asked.", score: 82, taught: false },
    ],
  },
];

export function buildReport(sessionQuestions, config) {
  const scores = sessionQuestions.map((q) => q.score);
  const overall = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const teachMeCount = sessionQuestions.filter((q) => q.taught).length;

  return {
    role: config?.role || "Software Engineer",
    type: config?.type || "Technical",
    overallScore: clampScore(overall),
    technical: clampScore(overall + 4),
    communication: clampScore(overall - 8),
    problemSolving: clampScore(overall + 2),
    confidence: clampScore(overall - 3),
    questions: sessionQuestions,
    teachMeCount,
    duration: `${sessionQuestions.length * 2} min`,
    strengths: pickStrengths(overall),
    improvements: pickImprovements(overall),
    recommendation:
      "Focus on structuring behavioral answers using STAR and keep technical explanations concise.",
  };
}

function clampScore(n) {
  return Math.max(35, Math.min(98, n));
}

function pickStrengths(overall) {
  const all = [
    "Strong technical fundamentals",
    "Good relevance to questions",
    "Good problem-solving approach",
    "Clear and structured communication",
    "Handled harder follow-ups well",
  ];
  return overall >= 70 ? all.slice(0, 3) : all.slice(2, 5);
}

function pickImprovements(overall) {
  const all = [
    "Keep answers more concise",
    "Use stronger STAR structure",
    "Provide more concrete examples",
    "Slow down and structure thoughts before answering",
    "Dig deeper into core fundamentals",
  ];
  return overall >= 70 ? all.slice(0, 3) : all.slice(2, 5);
}
