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

// Question pools for non-CS career domains. Kept intentionally compact —
// two questions per difficulty is enough to feel tailored in a demo.
// Selected via careerData.js -> domainForCategory().
export const DOMAIN_QUESTION_BANKS = {
  Engineering: {
    Easy: [
      { topic: "Fundamentals", text: "Walk me through a project where you applied core engineering principles to solve a real problem." },
      { topic: "Tools", text: "Which design or simulation tools have you used, and what did you use them for?" },
    ],
    Medium: [
      { topic: "Design Trade-offs", text: "Describe a time you had to balance cost, performance, and safety in a design decision." },
      { topic: "Fundamentals", text: "How do you validate that a design will hold up under real-world conditions before it's built?" },
    ],
    Hard: [
      { topic: "Systems Thinking", text: "If a component fails in the field, how would you trace the root cause across a multi-part system?" },
      { topic: "Design Trade-offs", text: "How would you redesign an existing product to cut cost by 20% without compromising safety?" },
    ],
  },
  Business: {
    Easy: [
      { topic: "Fundamentals", text: "How would you explain your understanding of a target market to someone outside the business?" },
      { topic: "Communication", text: "Tell me about a group project where you helped align the team on a shared goal." },
    ],
    Medium: [
      { topic: "Strategy", text: "How would you approach launching a new product in a market with an established competitor?" },
      { topic: "Analytics", text: "How would you measure whether a marketing campaign was actually successful?" },
    ],
    Hard: [
      { topic: "Strategy", text: "Sales are declining in one region despite a growing market — how would you diagnose and fix it?" },
      { topic: "Prioritization", text: "You have three high-impact initiatives but budget for one. How do you decide?" },
    ],
  },
  Finance: {
    Easy: [
      { topic: "Fundamentals", text: "How would you explain the difference between a balance sheet and an income statement?" },
      { topic: "Fundamentals", text: "What factors would you consider before recommending an investment?" },
    ],
    Medium: [
      { topic: "Analysis", text: "How would you assess whether a company is financially healthy using its financial statements?" },
      { topic: "Risk", text: "Describe how you'd evaluate the risk of extending credit to a new client." },
    ],
    Hard: [
      { topic: "Valuation", text: "Walk me through how you'd value a company that has no profit yet but strong revenue growth." },
      { topic: "Risk", text: "How would you structure a hedge against currency risk for a business with overseas suppliers?" },
    ],
  },
  Science: {
    Easy: [
      { topic: "Method", text: "Walk me through how you'd design an experiment to test a simple hypothesis." },
      { topic: "Fundamentals", text: "Tell me about a research project or lab experience and what you learned from it." },
    ],
    Medium: [
      { topic: "Analysis", text: "How would you make sure your experimental results aren't due to bias or a confounding variable?" },
      { topic: "Method", text: "Describe a time an experiment didn't go as expected. How did you respond?" },
    ],
    Hard: [
      { topic: "Research Design", text: "How would you design a study to test a hypothesis when you can't run a controlled experiment?" },
      { topic: "Analysis", text: "How would you communicate a complex, uncertain result to a non-technical stakeholder?" },
    ],
  },
  Arts: {
    Easy: [
      { topic: "Communication", text: "Tell me about a piece of writing or content you're proud of and why it worked." },
      { topic: "Fundamentals", text: "How do you research a topic you don't know much about before writing on it?" },
    ],
    Medium: [
      { topic: "Storytelling", text: "How would you adapt your writing style for two very different audiences?" },
      { topic: "Communication", text: "Tell me about a time you had to explain a complicated idea simply." },
    ],
    Hard: [
      { topic: "Editorial Judgment", text: "How would you handle a story or piece under a tight deadline with incomplete information?" },
      { topic: "Storytelling", text: "How would you build a content strategy for a brand with no prior audience?" },
    ],
  },
  Design: {
    Easy: [
      { topic: "Process", text: "Walk me through your design process from brief to final output." },
      { topic: "Fundamentals", text: "Tell me about a design decision you made and the reasoning behind it." },
    ],
    Medium: [
      { topic: "User-Centered Design", text: "How do you balance user needs with business or technical constraints?" },
      { topic: "Feedback", text: "Describe a time you received harsh feedback on your design. How did you respond?" },
    ],
    Hard: [
      { topic: "Process", text: "How would you redesign a product experience that users find confusing, without a full rebuild?" },
      { topic: "User-Centered Design", text: "How would you validate a design decision when you can't run user testing?" },
    ],
  },
  Law: {
    Easy: [
      { topic: "Fundamentals", text: "Walk me through how you'd research a legal question you haven't encountered before." },
      { topic: "Communication", text: "How would you explain a complex legal clause to a non-legal client?" },
    ],
    Medium: [
      { topic: "Analysis", text: "How would you identify risk in a contract before it's signed?" },
      { topic: "Ethics", text: "Describe how you'd handle a situation where a client asks you to do something ethically questionable." },
    ],
    Hard: [
      { topic: "Analysis", text: "How would you build a case when the available evidence is largely circumstantial?" },
      { topic: "Negotiation", text: "Walk me through how you'd negotiate a contract term the other side refuses to move on." },
    ],
  },
  Medical: {
    Easy: [
      { topic: "Fundamentals", text: "Tell me about a time you had to stay calm and think clearly under pressure." },
      { topic: "Communication", text: "How would you explain a diagnosis or treatment plan to a worried patient?" },
    ],
    Medium: [
      { topic: "Clinical Judgment", text: "How would you handle a situation where a patient's symptoms don't match the obvious diagnosis?" },
      { topic: "Ethics", text: "Describe how you'd handle a disagreement with a colleague over a patient's care plan." },
    ],
    Hard: [
      { topic: "Clinical Judgment", text: "How would you prioritize care when multiple patients need urgent attention at once?" },
      { topic: "Ethics", text: "Walk me through how you'd handle a case with a difficult ethical trade-off in patient care." },
    ],
  },
  Hospitality: {
    Easy: [
      { topic: "Service", text: "Tell me about a time you turned a frustrated customer into a happy one." },
      { topic: "Fundamentals", text: "What does great guest experience mean to you?" },
    ],
    Medium: [
      { topic: "Operations", text: "How would you handle overbooking during a peak season with no easy fix?" },
      { topic: "Service", text: "Describe how you'd train a new team member to deliver consistent service." },
    ],
    Hard: [
      { topic: "Operations", text: "How would you manage a service failure that's affecting many guests at once, with limited staff?" },
      { topic: "Service", text: "How would you rebuild guest trust after a major service breakdown?" },
    ],
  },
  Education: {
    Easy: [
      { topic: "Fundamentals", text: "How would you explain a difficult concept to a student who's struggling with it?" },
      { topic: "Communication", text: "Tell me about a time you adapted your teaching style for a specific learner." },
    ],
    Medium: [
      { topic: "Engagement", text: "How would you keep a classroom engaged when covering a topic students find boring?" },
      { topic: "Assessment", text: "How do you measure whether students actually understood a lesson, not just memorized it?" },
    ],
    Hard: [
      { topic: "Curriculum Design", text: "How would you redesign a curriculum for a classroom with a wide range of skill levels?" },
      { topic: "Engagement", text: "How would you handle a consistently disengaged student without singling them out?" },
    ],
  },
  General: {
    Easy: [
      { topic: "Introduction", text: "Tell me about yourself and what draws you to this field." },
      { topic: "Fundamentals", text: "What's a skill you're still building, and how are you working on it?" },
    ],
    Medium: [
      { topic: "Problem Solving", text: "Tell me about a time you solved a problem with limited information or resources." },
      { topic: "Adaptability", text: "Describe a time you had to quickly learn something new to get a task done." },
    ],
    Hard: [
      { topic: "Judgment", text: "Tell me about the hardest decision you've had to make with incomplete information." },
      { topic: "Problem Solving", text: "How would you approach a completely unfamiliar problem in your field?" },
    ],
  },
};

function domainBank(domain) {
  if (domain === "Technical" || !DOMAIN_QUESTION_BANKS[domain]) return QUESTION_BANK.Technical;
  return DOMAIN_QUESTION_BANKS[domain];
}

function banksFor(interviewType, domain) {
  const tech = domainBank(domain);
  if (interviewType === "HR") return [QUESTION_BANK.HR];
  if (interviewType === "Mixed") return [tech, QUESTION_BANK.HR];
  return [tech];
}

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

// Interviewer Coach personalities — pick a Setup card, and it colors the
// tone of every AI Coach Tip and follow-up remark.
export const COACH_STYLES = [
  {
    key: "Friendly",
    label: "Friendly",
    emoji: "\u{1F91D}",
    tagline: "Supportive and encouraging",
    description: "Gentle follow-ups that keep you comfortable while you practice.",
    example: "“That's a good start. Can you tell me a little more about that?”",
  },
  {
    key: "Technical",
    label: "Technical",
    emoji: "\u{1F9E0}",
    tagline: "Focused and precise",
    description: "Digs into technical accuracy, reasoning, and depth.",
    example: "“Can you explain why you chose that approach?”",
  },
  {
    key: "Competitive",
    label: "Competitive",
    emoji: "\u{1F525}",
    tagline: "Challenging and high-pressure",
    description: "Pushes back harder to simulate a high-stakes interview.",
    example: "“That's one possible approach. Why should I choose yours over the alternatives?”",
  },
];

export const COACH_TIPS_BY_STYLE = {
  Friendly: {
    strong: [
      "Lovely answer — try adding one concrete number next time and it'll be even stronger.",
      "You clearly know this one! A quick real-world example would make it shine.",
      "Really solid. Maybe mention a trade-off you considered, just to go one layer deeper.",
    ],
    average: [
      "Nice attempt — a short concrete example would round this out nicely.",
      "You're on the right track. Try structuring it a little more clearly next time.",
      "Good effort! Keep it a touch more concise and you're set.",
    ],
    weak: [
      "No worries at all — let's revisit the basics together, gently, step by step.",
      "That's okay, this one's tricky. Try anchoring your answer in something you've actually done.",
      "Totally fine to stumble here — let's break it into smaller pieces next time.",
    ],
  },
  Technical: {
    strong: [
      "Technically sound. Quantify the impact with a metric to make it airtight.",
      "Correct and precise. State the trade-offs you weighed to show deeper reasoning.",
      "Strong technical answer. Add complexity/scale considerations for full marks.",
    ],
    average: [
      "Technically correct but underspecified — support it with a concrete example.",
      "The reasoning is there but not explicit. Walk through your logic more precisely.",
      "Accurate at a high level; go one level deeper into the mechanism.",
    ],
    weak: [
      "The fundamentals need work — define the core concept precisely before applying it.",
      "This lacks technical grounding. Anchor it in a specific, verifiable example.",
      "Not precise enough. Break the answer into explicit, checkable steps.",
    ],
  },
  Competitive: {
    strong: [
      "Good — but a competing candidate would quantify that. Bring the numbers next time.",
      "That works. Now defend it: what's the strongest counter-argument to your approach?",
      "Solid, but I've heard sharper. Push the depth further with trade-offs.",
    ],
    average: [
      "That's a starting point, not a closer. Back it with a concrete example.",
      "Average answer. Structure it tighter — lead with the point, not the buildup.",
      "You're leaving points on the table by not being concise. Tighten it up.",
    ],
    weak: [
      "That won't hold up under pressure — let's fix the fundamentals now.",
      "Too thin to be convincing. Anchor it in a real example immediately.",
      "This needs a full rebuild. Break it into clear, defensible steps.",
    ],
  },
};

// Short reactive lines shown before the next question, based on the coach
// style and how the previous answer scored — gives the interviewer a
// consistent "personality" without real generation.
export const INTERVIEWER_FOLLOWUPS = {
  Friendly: {
    strong: "Great, that gives me a lot of confidence. Let's go a bit deeper.",
    average: "Thanks for that. Let's try another one together.",
    weak: "That's alright — let's ease into the next one.",
  },
  Technical: {
    strong: "Understood. Let's increase the technical depth.",
    average: "Noted. Let's continue with the next area.",
    weak: "Let's simplify and rebuild from the fundamentals.",
  },
  Competitive: {
    strong: "Not bad. Let's see if you can keep that up under a harder question.",
    average: "That's the baseline — let's raise the bar.",
    weak: "Let's regroup on something more fundamental.",
  },
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
  Strategy: {
    concept: "Frame strategy answers around the customer problem first, then the business trade-offs — not the tactic itself.",
    example: "Instead of \"we'd run ads,\" say \"the target segment isn't aware of us yet, so we'd prioritize awareness channels before performance ones.\"",
    tip: "Name the trade-off you're making explicitly — interviewers want to see you reasoning, not just concluding.",
  },
  Valuation: {
    concept: "When there's no profit yet, value the business on forward revenue multiples and growth rate instead of earnings.",
    example: "A SaaS company growing 80% a year might be valued on 8–10x forward revenue instead of a P/E ratio.",
    tip: "State your assumptions out loud — interviewers care more about your reasoning than the exact number.",
  },
  "User-Centered Design": {
    concept: "Balance user needs and constraints by anchoring every decision back to the core user problem, then negotiating scope.",
    example: "If a feature is technically hard, ship a simpler version that solves 80% of the user's need first.",
    tip: "Reference a specific user pain point by name — it shows the decision was user-driven, not a guess.",
  },
  Ethics: {
    concept: "Walk through the stakeholders affected, then the principle you're applying, before stating your decision.",
    example: "\"The client asked me to backdate a document — I explained the risk, offered an alternative, and declined to proceed.\"",
    tip: "Name the specific value you're protecting (trust, safety, compliance) — it shows deliberate judgment, not just refusal.",
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
  teachMeRetry: "Nice! You improved on that one.",
  finishedBest: "Nice work! That's your best score yet.",
  finishedGood: "Solid round. Your consistency is showing.",
  improvement: (points) => `+${points} points! Look at you.`,
};

// Skill detail panels — opened by clicking a skill card on the dashboard.
// Roadmap templates are keyed by skill; the problem statement is picked by
// score tier rather than generated, which keeps this reliable offline.
export const SKILL_ROADMAPS = {
  "Technical Knowledge": {
    interviewType: "Technical",
    whyItMatters: "Technical depth is what tells an interviewer you can actually do the job, not just talk about it.",
    problemByTier: {
      low: "Your answers touch the right ideas but often miss the underlying mechanism — interviewers want the 'why', not just the 'what'.",
      mid: "You're technically correct most of the time, but answers could go one level deeper into trade-offs and edge cases.",
      high: "Strong technical grounding — the next gain is speaking about complexity and scale considerations even when not asked.",
    },
    roadmap: [
      { title: "Fundamentals Refresh", detail: "Revisit core concepts in your weakest topic area until you can explain them without notes." },
      { title: "Depth Over Breadth", detail: "For every answer, add one sentence on the 'why' — not just the 'what'." },
      { title: "Trade-off Framing", detail: "Practice naming at least one trade-off or alternative approach per answer." },
      { title: "Mock Practice", detail: "Complete 3 technical-focused interviews to reinforce the pattern." },
      { title: "Reassess", detail: "Take another interview and track whether your depth score improved." },
    ],
  },
  Communication: {
    interviewType: "HR",
    whyItMatters: "Good communication helps interviewers quickly understand your reasoning and experience.",
    problemByTier: {
      low: "Your answers are generally relevant, but some responses are too long and lack a clear structure.",
      mid: "You communicate clearly most of the time, but answers could lead with the main point more often.",
      high: "Clear and structured — the next gain is trimming answers to the most essential 60–90 seconds.",
    },
    roadmap: [
      { title: "Answer Structure", detail: "Practice giving the main point first." },
      { title: "Conciseness", detail: "Keep answers within 60–90 seconds." },
      { title: "Examples", detail: "Support claims with a concrete example." },
      { title: "Mock Practice", detail: "Complete 3 communication-focused interviews." },
      { title: "Reassess", detail: "Take another interview and track improvement." },
    ],
  },
  "Problem Solving": {
    interviewType: "Technical",
    whyItMatters: "Interviewers care as much about how you approach an unfamiliar problem as whether you land the exact answer.",
    problemByTier: {
      low: "You tend to jump to a solution before fully framing the problem, which can lead to missed edge cases.",
      mid: "Your approach is solid, but talking through your brute-force idea before optimizing would show more of your reasoning.",
      high: "Strong problem-solving instincts — the next gain is narrating your thought process out loud as you go.",
    },
    roadmap: [
      { title: "Clarify First", detail: "Restate the problem and ask a clarifying question before answering." },
      { title: "Brute Force, Then Optimize", detail: "State the naive solution first, then improve on it out loud." },
      { title: "Edge Cases", detail: "Name at least one edge case per problem before finishing." },
      { title: "Mock Practice", detail: "Complete 3 problem-solving-focused interviews." },
      { title: "Reassess", detail: "Take another interview and track improvement." },
    ],
  },
  Confidence: {
    interviewType: "HR",
    whyItMatters: "Confidence affects how convincing your answers sound, independent of how good the underlying content is.",
    problemByTier: {
      low: "Your answers are often hedged or trail off — stating your point directly will land much stronger.",
      mid: "You're fairly confident, but a stronger close on each answer would leave a better final impression.",
      high: "You come across confidently — the next gain is staying steady on questions outside your comfort zone.",
    },
    roadmap: [
      { title: "Lead With the Point", detail: "State your conclusion in the first sentence, then explain." },
      { title: "Cut the Hedging", detail: "Notice and remove filler phrases like 'I think maybe' or 'sort of'." },
      { title: "Strong Closes", detail: "End every answer with a clear, confident final sentence." },
      { title: "Mock Practice", detail: "Complete 3 interviews focused on unfamiliar questions." },
      { title: "Reassess", detail: "Take another interview and track improvement." },
    ],
  },
};

export function getSkillDetail(skillName, currentScore) {
  const roadmap = SKILL_ROADMAPS[skillName];
  const tier = currentScore >= 85 ? "high" : currentScore >= 70 ? "mid" : "low";
  const target = Math.min(98, currentScore + (tier === "high" ? 6 : tier === "mid" ? 11 : 16));
  return {
    ...roadmap,
    problem: roadmap.problemByTier[tier],
    target,
  };
}

export const TIMER_OPTIONS = [30, 60, 90, 120];

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function jitter(base, spread) {
  return base + (Math.random() * 2 - 1) * spread;
}

// Mock "AI scoring" of a free-text answer — biased by length/effort so the
// demo feels responsive to real input while staying reliable offline.
export function generateFeedback(answerText, coachStyle = "Friendly") {
  const words = answerText.trim().split(/\s+/).filter(Boolean).length;
  const lengthScore = clamp(3 + words / 9, 3, 9.5);

  const technical = clamp(jitter(lengthScore, 1.2), 1, 10);
  const relevance = clamp(jitter(lengthScore, 1), 1, 10);
  const clarity = clamp(jitter(lengthScore, 1.3), 1, 10);
  const confidence = clamp(jitter(lengthScore, 1.5), 1, 10);

  const avg = (technical + relevance + clarity + confidence) / 4;
  const bucket = scoreLabel(avg);
  const tips = (COACH_TIPS_BY_STYLE[coachStyle] || COACH_TIPS_BY_STYLE.Friendly)[bucket];
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
// exhausted — instead of jumping to something unrelated. `domain` selects
// the career-specific question pool (see careerData.js domainForCategory).
export function pickQuestion(interviewType, difficulty, usedTexts, hasResume, preferredTopic, domain = "Technical") {
  const banks = banksFor(interviewType, domain);

  if (preferredTopic) {
    const candidates = banks.flatMap((bank) => DIFFICULTIES.flatMap((d) => bank[d].filter((q) => q.topic === preferredTopic)));
    const unused = candidates.filter((q) => !usedTexts.includes(q.text));
    const chosen = (unused.length > 0 ? unused : candidates)[0];
    if (chosen) return personalize(chosen, hasResume);
  }

  const pools = banks.flatMap((bank) => bank[difficulty]);
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
