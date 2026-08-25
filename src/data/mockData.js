// Mock adaptive question bank, teach-me content, companion lines and
// interview history. Structured so it can later be swapped for real AI
// responses without touching the UI.

import { domainForCategory } from "./careerData.js";

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const QUESTION_BANK = {
  Technical: {
    Easy: [
      { topic: "Data Structures", text: "What is the difference between an array and a linked list?" },
      { topic: "Web Basics", text: "Explain the difference between HTTP and HTTPS." },
      { topic: "OOP", text: "What is the difference between a class and an object?" },
      { topic: "Data Structures", text: "When would you use a stack instead of a queue?" },
      { topic: "Web Basics", text: "What happens, step by step, when you type a URL into a browser and hit enter?" },
    ],
    Medium: [
      { topic: "OOP", text: "You mentioned using object-oriented programming in your project. Can you explain where polymorphism was useful?" },
      { topic: "Data Structures", text: "How would you find duplicate elements in an array efficiently?" },
      { topic: "SQL", text: "Explain the difference between SQL joins: INNER, LEFT, and RIGHT." },
      { topic: "OOP", text: "What's the difference between inheritance and composition, and when would you prefer one over the other?" },
      { topic: "Data Structures", text: "How would you check if a string of brackets is balanced?" },
    ],
    Hard: [
      { topic: "System Design", text: "How would you design a URL shortening service like bit.ly?" },
      { topic: "Problem Solving", text: "Given a stream of numbers, how would you find the median at any point efficiently?" },
      { topic: "System Design", text: "How would you design a rate limiter for a high-traffic API?" },
      { topic: "Problem Solving", text: "How would you detect a cycle in a linked list without using extra memory?" },
      { topic: "System Design", text: "How would you design a notification system that fans out to millions of users?" },
    ],
  },
  HR: {
    Easy: [
      { topic: "Introduction", text: "Tell me about yourself and why you're interested in this role." },
      { topic: "Motivation", text: "Why do you want to work at this company?" },
      { topic: "Teamwork", text: "Describe a time you worked well as part of a team." },
      { topic: "Introduction", text: "What are you looking for in your next role?" },
      { topic: "Motivation", text: "What draws you to this particular field?" },
    ],
    Medium: [
      { topic: "Conflict Resolution", text: "Tell me about a time you disagreed with a teammate. How did you handle it?" },
      { topic: "Leadership", text: "Describe a situation where you had to take initiative without being asked." },
      { topic: "Failure", text: "Tell me about a time you failed at something. What did you learn?" },
      { topic: "Conflict Resolution", text: "Describe a time you had to give someone feedback they didn't want to hear." },
      { topic: "Leadership", text: "Tell me about a time you had to motivate a team through a difficult period." },
    ],
    Hard: [
      { topic: "Pressure Handling", text: "Describe a high-pressure situation with a tight deadline and conflicting priorities. How did you navigate it?" },
      { topic: "Difficult Stakeholders", text: "Tell me about a time you had to influence someone who strongly disagreed with you, without any formal authority." },
      { topic: "Ethical Judgment", text: "Describe a time you faced an ethical dilemma at work or during a project. How did you resolve it?" },
      { topic: "Pressure Handling", text: "Tell me about a time everything that could go wrong did. How did you keep things moving?" },
      { topic: "Difficult Stakeholders", text: "Describe a time you had to say no to someone more senior than you. How did you handle it?" },
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
      { topic: "Fundamentals", text: "How do you decide which specifications actually matter most for a given design?" },
      { topic: "Tools", text: "Tell me about a time a tool or measurement gave you an unexpected result. What did you do?" },
    ],
    Medium: [
      { topic: "Design Trade-offs", text: "Describe a time you had to balance cost, performance, and safety in a design decision." },
      { topic: "Fundamentals", text: "How do you validate that a design will hold up under real-world conditions before it's built?" },
      { topic: "Design Trade-offs", text: "Tell me about a time you had to choose between two materials or methods with different trade-offs." },
      { topic: "Systems Thinking", text: "How do you make sure a change in one part of a system doesn't break another part?" },
    ],
    Hard: [
      { topic: "Systems Thinking", text: "If a component fails in the field, how would you trace the root cause across a multi-part system?" },
      { topic: "Design Trade-offs", text: "How would you redesign an existing product to cut cost by 20% without compromising safety?" },
      { topic: "Systems Thinking", text: "How would you design for a failure mode that only shows up after months of continuous use?" },
      { topic: "Design Trade-offs", text: "You inherit a design with a known flaw close to a deadline — how do you decide whether to fix it now or ship and patch later?" },
    ],
  },
  Business: {
    Easy: [
      { topic: "Fundamentals", text: "How would you explain your understanding of a target market to someone outside the business?" },
      { topic: "Communication", text: "Tell me about a group project where you helped align the team on a shared goal." },
      { topic: "Fundamentals", text: "What makes a brand memorable to you, and why?" },
      { topic: "Communication", text: "Describe a time you had to pitch an idea to someone who wasn't convinced at first." },
    ],
    Medium: [
      { topic: "Strategy", text: "How would you approach launching a new product in a market with an established competitor?" },
      { topic: "Analytics", text: "How would you measure whether a marketing campaign was actually successful?" },
      { topic: "Strategy", text: "How would you decide which customer segment to prioritize with limited budget?" },
      { topic: "Analytics", text: "A campaign got a lot of clicks but few conversions — how would you investigate why?" },
    ],
    Hard: [
      { topic: "Strategy", text: "Sales are declining in one region despite a growing market — how would you diagnose and fix it?" },
      { topic: "Prioritization", text: "You have three high-impact initiatives but budget for one. How do you decide?" },
      { topic: "Strategy", text: "A competitor just undercut your pricing significantly — how would you respond?" },
      { topic: "Prioritization", text: "Two stakeholders want conflicting things from the same campaign — how do you resolve it?" },
    ],
  },
  Finance: {
    Easy: [
      { topic: "Fundamentals", text: "How would you explain the difference between a balance sheet and an income statement?" },
      { topic: "Fundamentals", text: "What factors would you consider before recommending an investment?" },
      { topic: "Fundamentals", text: "How would you explain compound interest to someone with no finance background?" },
      { topic: "Fundamentals", text: "What's the difference between a fixed and a variable cost, with an example?" },
    ],
    Medium: [
      { topic: "Analysis", text: "How would you assess whether a company is financially healthy using its financial statements?" },
      { topic: "Risk", text: "Describe how you'd evaluate the risk of extending credit to a new client." },
      { topic: "Analysis", text: "Two companies have similar revenue but very different profit margins — how would you investigate why?" },
      { topic: "Risk", text: "How would you decide whether a business should take on new debt to fund growth?" },
    ],
    Hard: [
      { topic: "Valuation", text: "Walk me through how you'd value a company that has no profit yet but strong revenue growth." },
      { topic: "Risk", text: "How would you structure a hedge against currency risk for a business with overseas suppliers?" },
      { topic: "Valuation", text: "How would you explain a sharp drop in a company's valuation to a non-finance stakeholder?" },
      { topic: "Risk", text: "How would you stress-test a financial model against a sudden market downturn?" },
    ],
  },
  Science: {
    Easy: [
      { topic: "Method", text: "Walk me through how you'd design an experiment to test a simple hypothesis." },
      { topic: "Fundamentals", text: "Tell me about a research project or lab experience and what you learned from it." },
      { topic: "Method", text: "Why is a control group important in an experiment?" },
      { topic: "Fundamentals", text: "How do you decide which variable to measure when testing an idea?" },
    ],
    Medium: [
      { topic: "Analysis", text: "How would you make sure your experimental results aren't due to bias or a confounding variable?" },
      { topic: "Method", text: "Describe a time an experiment didn't go as expected. How did you respond?" },
      { topic: "Analysis", text: "How would you decide if a surprising result is worth reporting or likely an error?" },
      { topic: "Method", text: "How would you design a follow-up experiment based on an inconclusive result?" },
    ],
    Hard: [
      { topic: "Research Design", text: "How would you design a study to test a hypothesis when you can't run a controlled experiment?" },
      { topic: "Analysis", text: "How would you communicate a complex, uncertain result to a non-technical stakeholder?" },
      { topic: "Research Design", text: "How would you design research to test something that plays out over years, on a tight timeline?" },
      { topic: "Analysis", text: "How would you handle a result that contradicts a well-established finding in your field?" },
    ],
  },
  Arts: {
    Easy: [
      { topic: "Communication", text: "Tell me about a piece of writing or content you're proud of and why it worked." },
      { topic: "Fundamentals", text: "How do you research a topic you don't know much about before writing on it?" },
      { topic: "Communication", text: "How do you know when a piece of writing is actually finished?" },
      { topic: "Fundamentals", text: "What makes a piece of content stand out to you as a reader?" },
    ],
    Medium: [
      { topic: "Storytelling", text: "How would you adapt your writing style for two very different audiences?" },
      { topic: "Communication", text: "Tell me about a time you had to explain a complicated idea simply." },
      { topic: "Storytelling", text: "How would you turn a dry, factual topic into something people want to read?" },
      { topic: "Communication", text: "Describe a time an editor or peer pushed back hard on your work. How did you respond?" },
    ],
    Hard: [
      { topic: "Editorial Judgment", text: "How would you handle a story or piece under a tight deadline with incomplete information?" },
      { topic: "Storytelling", text: "How would you build a content strategy for a brand with no prior audience?" },
      { topic: "Editorial Judgment", text: "How would you handle publishing something you personally disagreed with editorially?" },
      { topic: "Storytelling", text: "How would you keep a long-running series fresh after the initial idea runs out?" },
    ],
  },
  Design: {
    Easy: [
      { topic: "Process", text: "Walk me through your design process from brief to final output." },
      { topic: "Fundamentals", text: "Tell me about a design decision you made and the reasoning behind it." },
      { topic: "Process", text: "How do you know when to stop iterating on a design?" },
      { topic: "Fundamentals", text: "What makes a design feel intuitive to you?" },
    ],
    Medium: [
      { topic: "User-Centered Design", text: "How do you balance user needs with business or technical constraints?" },
      { topic: "Feedback", text: "Describe a time you received harsh feedback on your design. How did you respond?" },
      { topic: "User-Centered Design", text: "How would you design for a user who isn't like you at all?" },
      { topic: "Feedback", text: "How would you push back on a stakeholder's design request you disagree with?" },
    ],
    Hard: [
      { topic: "Process", text: "How would you redesign a product experience that users find confusing, without a full rebuild?" },
      { topic: "User-Centered Design", text: "How would you validate a design decision when you can't run user testing?" },
      { topic: "Process", text: "How would you design for accessibility when it wasn't considered from the start?" },
      { topic: "User-Centered Design", text: "How would you resolve conflicting feedback from two different user groups?" },
    ],
  },
  Law: {
    Easy: [
      { topic: "Fundamentals", text: "Walk me through how you'd research a legal question you haven't encountered before." },
      { topic: "Communication", text: "How would you explain a complex legal clause to a non-legal client?" },
      { topic: "Fundamentals", text: "What does 'due diligence' mean to you in practice?" },
      { topic: "Communication", text: "How would you deliver bad legal news to a client?" },
    ],
    Medium: [
      { topic: "Analysis", text: "How would you identify risk in a contract before it's signed?" },
      { topic: "Ethics", text: "Describe how you'd handle a situation where a client asks you to do something ethically questionable." },
      { topic: "Analysis", text: "How would you handle a contract with a clause that's ambiguous?" },
      { topic: "Ethics", text: "How would you handle discovering a conflict of interest partway through a case?" },
    ],
    Hard: [
      { topic: "Analysis", text: "How would you build a case when the available evidence is largely circumstantial?" },
      { topic: "Negotiation", text: "Walk me through how you'd negotiate a contract term the other side refuses to move on." },
      { topic: "Analysis", text: "How would you argue a position you personally think is legally weak, but must represent?" },
      { topic: "Negotiation", text: "How would you keep a negotiation moving when talks have completely stalled?" },
    ],
  },
  Medical: {
    Easy: [
      { topic: "Fundamentals", text: "Tell me about a time you had to stay calm and think clearly under pressure." },
      { topic: "Communication", text: "How would you explain a diagnosis or treatment plan to a worried patient?" },
      { topic: "Fundamentals", text: "How do you stay current with best practices in your field?" },
      { topic: "Communication", text: "How would you handle a patient who doesn't trust your recommendation?" },
    ],
    Medium: [
      { topic: "Clinical Judgment", text: "How would you handle a situation where a patient's symptoms don't match the obvious diagnosis?" },
      { topic: "Ethics", text: "Describe how you'd handle a disagreement with a colleague over a patient's care plan." },
      { topic: "Clinical Judgment", text: "How would you decide when to escalate a case to a specialist?" },
      { topic: "Ethics", text: "How would you handle a patient who refuses a treatment you believe they need?" },
    ],
    Hard: [
      { topic: "Clinical Judgment", text: "How would you prioritize care when multiple patients need urgent attention at once?" },
      { topic: "Ethics", text: "Walk me through how you'd handle a case with a difficult ethical trade-off in patient care." },
      { topic: "Clinical Judgment", text: "How would you handle a case where the standard treatment isn't working and you're running out of options?" },
      { topic: "Ethics", text: "How would you handle a mistake you made that affected a patient's care?" },
    ],
  },
  Hospitality: {
    Easy: [
      { topic: "Service", text: "Tell me about a time you turned a frustrated customer into a happy one." },
      { topic: "Fundamentals", text: "What does great guest experience mean to you?" },
      { topic: "Service", text: "How do you read what a guest needs before they ask?" },
      { topic: "Fundamentals", text: "Tell me about a great service experience you had as a customer. What made it great?" },
    ],
    Medium: [
      { topic: "Operations", text: "How would you handle overbooking during a peak season with no easy fix?" },
      { topic: "Service", text: "Describe how you'd train a new team member to deliver consistent service." },
      { topic: "Operations", text: "How would you keep service standards consistent across a large team?" },
      { topic: "Service", text: "Describe a time you had to say no to a guest request. How did you handle it?" },
    ],
    Hard: [
      { topic: "Operations", text: "How would you manage a service failure that's affecting many guests at once, with limited staff?" },
      { topic: "Service", text: "How would you rebuild guest trust after a major service breakdown?" },
      { topic: "Operations", text: "How would you handle a staffing shortage during your busiest period of the year?" },
      { topic: "Service", text: "How would you handle a guest complaint that's gone public online?" },
    ],
  },
  Education: {
    Easy: [
      { topic: "Fundamentals", text: "How would you explain a difficult concept to a student who's struggling with it?" },
      { topic: "Communication", text: "Tell me about a time you adapted your teaching style for a specific learner." },
      { topic: "Fundamentals", text: "What makes a lesson memorable for students, in your experience?" },
      { topic: "Communication", text: "How would you explain a student's progress to a concerned parent?" },
    ],
    Medium: [
      { topic: "Engagement", text: "How would you keep a classroom engaged when covering a topic students find boring?" },
      { topic: "Assessment", text: "How do you measure whether students actually understood a lesson, not just memorized it?" },
      { topic: "Engagement", text: "How would you handle a classroom with a very wide range of ability levels?" },
      { topic: "Assessment", text: "How would you redesign an assessment that most students failed?" },
    ],
    Hard: [
      { topic: "Curriculum Design", text: "How would you redesign a curriculum for a classroom with a wide range of skill levels?" },
      { topic: "Engagement", text: "How would you handle a consistently disengaged student without singling them out?" },
      { topic: "Curriculum Design", text: "How would you adapt a curriculum for a group with limited access to resources or technology?" },
      { topic: "Engagement", text: "How would you rebuild trust with a class after a lesson went badly?" },
    ],
  },
  General: {
    Easy: [
      { topic: "Introduction", text: "Tell me about yourself and what draws you to this field." },
      { topic: "Fundamentals", text: "What's a skill you're still building, and how are you working on it?" },
      { topic: "Introduction", text: "What kind of work energizes you most?" },
      { topic: "Fundamentals", text: "Tell me about something you taught yourself outside of school." },
    ],
    Medium: [
      { topic: "Problem Solving", text: "Tell me about a time you solved a problem with limited information or resources." },
      { topic: "Adaptability", text: "Describe a time you had to quickly learn something new to get a task done." },
      { topic: "Problem Solving", text: "Describe a time your first approach to a problem didn't work. What did you do next?" },
      { topic: "Adaptability", text: "Tell me about a time plans changed suddenly and you had to adjust." },
    ],
    Hard: [
      { topic: "Judgment", text: "Tell me about the hardest decision you've had to make with incomplete information." },
      { topic: "Problem Solving", text: "How would you approach a completely unfamiliar problem in your field?" },
      { topic: "Judgment", text: "Describe a time you had to choose between two options that were both imperfect." },
      { topic: "Problem Solving", text: "Tell me about a time you had to solve a problem outside your usual area of expertise." },
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

// Novi's lines, shown across the app — at most once per screen/state.
export const NOVI_LINES = {
  greeting: "Hey! Ready?",
  focusNudge: "Nailed this next?",
  preInterview: "Don't worry about getting everything right. This is practice.",
  teachIntro: "Don't worry — I can teach you too!",
  thinkingHard: "Hmm... let's think.",
  strongAnswer: ["Okayyy, I see you 👀", "That's a good one!", "Nice, you really know this one!"],
  averageAnswer: ["You've got this — keep going.", "Solid attempt, let's sharpen it.", "You're close, keep going."],
  weakAnswer: ["No worries, this is exactly what practice is for.", "Let's slow down and rebuild this one.", "Everyone stumbles on this — let's fix it."],
  teachMeRetry: "Nice! You improved on that one.",
  celebrate: "OKAYYY! That was good!",
  celebrateSolid: "Solid round. Your consistency is showing.",
  personalBest: "NEW PERSONAL BEST!",
};

// Skill dimension labels change per career domain so the dashboard/report
// never shows a CS-flavored skill name to a non-CS student. Internal ids
// (technical/communication/problemSolving/confidence) stay stable so the
// rest of the app (scores, roadmaps, history) doesn't need to change shape.
export const DOMAIN_SKILL_LABELS = {
  Technical: { technical: "Technical Knowledge", communication: "Communication", problemSolving: "Problem Solving", confidence: "Confidence" },
  Engineering: { technical: "Technical Knowledge", communication: "Communication", problemSolving: "Problem Solving", confidence: "Confidence" },
  Business: { technical: "Business Knowledge", communication: "Communication", problemSolving: "Business Thinking", confidence: "Confidence" },
  Finance: { technical: "Finance Knowledge", communication: "Communication", problemSolving: "Analytical Thinking", confidence: "Confidence" },
  Science: { technical: "Domain Knowledge", communication: "Communication", problemSolving: "Analytical Thinking", confidence: "Confidence" },
  Arts: { technical: "Domain Knowledge", communication: "Communication", problemSolving: "Critical Thinking", confidence: "Confidence" },
  Design: { technical: "Design Thinking", communication: "Communication", problemSolving: "Creativity", confidence: "Confidence" },
  Law: { technical: "Legal Knowledge", communication: "Communication", problemSolving: "Analytical Thinking", confidence: "Confidence" },
  Medical: { technical: "Clinical Knowledge", communication: "Communication", problemSolving: "Clinical Judgment", confidence: "Confidence" },
  Hospitality: { technical: "Service Knowledge", communication: "Communication", problemSolving: "Problem Solving", confidence: "Confidence" },
  Education: { technical: "Subject Knowledge", communication: "Communication", problemSolving: "Classroom Judgment", confidence: "Confidence" },
  General: { technical: "Domain Knowledge", communication: "Communication", problemSolving: "Problem Solving", confidence: "Confidence" },
};

export function getSkillLabels(domain) {
  return DOMAIN_SKILL_LABELS[domain] || DOMAIN_SKILL_LABELS.General;
}

// Skill detail panels — opened by clicking a skill card on the dashboard.
// Keyed by stable id. "communication" and "confidence" generalize fine
// across domains as-is; "technical" and "problemSolving" get a per-domain
// override below since their meaning shifts the most between careers.
export const SKILL_ROADMAPS = {
  technical: {
    whyItMatters: "Domain depth is what tells an interviewer you can actually do the job, not just talk about it.",
    problemByTier: {
      low: "Your answers touch the right ideas but often miss the underlying reasoning — interviewers want the 'why', not just the 'what'.",
      mid: "You're mostly accurate, but answers could go one level deeper into trade-offs and specifics.",
      high: "Strong grounding — the next gain is speaking about scale/impact considerations even when not asked.",
    },
    roadmap: [
      { title: "Fundamentals Refresh", detail: "Revisit core concepts in your weakest area until you can explain them without notes." },
      { title: "Depth Over Breadth", detail: "For every answer, add one sentence on the 'why' — not just the 'what'." },
      { title: "Trade-off Framing", detail: "Practice naming at least one trade-off or alternative approach per answer." },
      { title: "Mock Practice", detail: "Complete 3 focused interviews to reinforce the pattern." },
      { title: "Reassess", detail: "Take another interview and track whether your depth score improved." },
    ],
  },
  communication: {
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
  problemSolving: {
    whyItMatters: "Interviewers care as much about how you approach an unfamiliar problem as whether you land the exact answer.",
    problemByTier: {
      low: "You tend to jump to a conclusion before fully framing the problem, which can lead to missed considerations.",
      mid: "Your approach is solid, but talking through your reasoning before concluding would show more of your thinking.",
      high: "Strong problem-solving instincts — the next gain is narrating your thought process out loud as you go.",
    },
    roadmap: [
      { title: "Clarify First", detail: "Restate the problem and name the goal before answering." },
      { title: "Structure the Approach", detail: "Lay out your reasoning step by step before landing on an answer." },
      { title: "Name Trade-offs", detail: "Mention at least one alternative you considered before finishing." },
      { title: "Mock Practice", detail: "Complete 3 problem-solving-focused interviews." },
      { title: "Reassess", detail: "Take another interview and track improvement." },
    ],
  },
  confidence: {
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

// Domain-specific overrides for the two skills whose content is most
// domain-dependent. Falls back to the generic SKILL_ROADMAPS above when a
// domain has no override — still correct, just less flavored.
export const DOMAIN_SKILL_OVERRIDES = {
  Business: {
    technical: {
      whyItMatters: "Business knowledge shows you connect decisions to real outcomes — revenue, users, cost or retention — not just activity.",
      problemByTier: {
        low: "Your answers describe activities but don't connect them to a business outcome.",
        mid: "You understand the context, but could go deeper into the trade-offs between options.",
        high: "Strong business grounding — the next gain is quantifying impact with numbers even when not asked.",
      },
      roadmap: [
        { title: "Connect to Outcomes", detail: "Tie every answer back to a metric — revenue, users, cost or retention." },
        { title: "Know the Fundamentals", detail: "Revisit core concepts: positioning, segmentation, funnels, unit economics." },
        { title: "Trade-off Framing", detail: "Name the option you didn't choose and why." },
        { title: "Mock Practice", detail: "Complete 3 business/case-focused interviews." },
        { title: "Reassess", detail: "Take another interview and track improvement." },
      ],
    },
    problemSolving: {
      whyItMatters: "Business thinking shows you can structure an ambiguous problem the way a real strategy discussion would.",
      problemByTier: {
        low: "You tend to jump to a solution before framing the problem — the goal, the audience, the constraint.",
        mid: "Your structure is solid, but naming 2-3 options before picking one would show more range.",
        high: "Strong structured thinking — the next gain is explicitly prioritizing what matters most, and why.",
      },
      roadmap: [
        { title: "Frame First", detail: "State the goal and constraint before proposing a solution." },
        { title: "Generate Options", detail: "Name at least two approaches before picking one." },
        { title: "Prioritize", detail: "Explicitly say what you'd do first and why." },
        { title: "Mock Practice", detail: "Complete 3 case-style interviews." },
        { title: "Reassess", detail: "Take another interview and track improvement." },
      ],
    },
  },
  Finance: {
    technical: {
      whyItMatters: "Finance knowledge shows you can reason about numbers, risk and value the way the role actually requires.",
      problemByTier: {
        low: "You name the right concepts but don't yet connect them to a number or a decision.",
        mid: "You're mostly accurate — go further by stating the actual metric or figure you'd look at.",
        high: "Strong technical grounding — the next gain is discussing risk and assumptions explicitly.",
      },
      roadmap: [
        { title: "Ground in Numbers", detail: "Reference a specific metric or ratio in every answer." },
        { title: "Core Concepts", detail: "Revisit fundamentals: statements, valuation, risk, time value of money." },
        { title: "State Assumptions", detail: "Say what you're assuming out loud before concluding." },
        { title: "Mock Practice", detail: "Complete 3 finance-focused interviews." },
        { title: "Reassess", detail: "Take another interview and track improvement." },
      ],
    },
    problemSolving: {
      whyItMatters: "Analytical thinking shows you can break down a numerical or ambiguous problem methodically.",
      problemByTier: {
        low: "You reach a conclusion quickly without showing the steps that got you there.",
        mid: "Your logic is sound — narrate it more explicitly, step by step.",
        high: "Strong analytical rigor — the next gain is sanity-checking your answer out loud.",
      },
      roadmap: [
        { title: "Show Your Work", detail: "Narrate each step of your reasoning, not just the conclusion." },
        { title: "Sanity Check", detail: "State whether your answer feels reasonable and why." },
        { title: "Consider Risk", detail: "Name one thing that could make your answer wrong." },
        { title: "Mock Practice", detail: "Complete 3 analytical case interviews." },
        { title: "Reassess", detail: "Take another interview and track improvement." },
      ],
    },
  },
  Design: {
    technical: {
      whyItMatters: "Design thinking shows you can reason from a user problem to a decision, not just describe a nice-looking output.",
      problemByTier: {
        low: "You describe the output but not the user problem it solves.",
        mid: "You reference the user, but could justify decisions with more specific reasoning.",
        high: "Strong design reasoning — the next gain is discussing trade-offs with constraints explicitly.",
      },
      roadmap: [
        { title: "Start With the Problem", detail: "State the user need before describing the solution." },
        { title: "Justify Decisions", detail: "Explain why, not just what — for every design choice." },
        { title: "Reference Process", detail: "Mention research, iteration, or feedback that shaped the outcome." },
        { title: "Mock Practice", detail: "Complete 3 portfolio/case-style interviews." },
        { title: "Reassess", detail: "Take another interview and track improvement." },
      ],
    },
    problemSolving: {
      whyItMatters: "Creativity shows you can generate and evaluate multiple design directions, not settle on the first idea.",
      problemByTier: {
        low: "You tend to present one idea without showing alternatives you considered.",
        mid: "You show some range — go further by explaining why you rejected other directions.",
        high: "Strong creative range — the next gain is tying the chosen idea back to constraints explicitly.",
      },
      roadmap: [
        { title: "Generate Options", detail: "Mention at least two directions before settling on one." },
        { title: "Explain Rejections", detail: "Say why you didn't go with the other option." },
        { title: "Tie to Constraints", detail: "Connect your final choice back to a real constraint (time, tech, user)." },
        { title: "Mock Practice", detail: "Complete 3 creative problem-solving interviews." },
        { title: "Reassess", detail: "Take another interview and track improvement." },
      ],
    },
  },
};

export function getSkillDetail(skillId, currentScore, domain) {
  const base = SKILL_ROADMAPS[skillId];
  const override = DOMAIN_SKILL_OVERRIDES[domain]?.[skillId];
  const roadmap = override || base;
  const tier = currentScore >= 85 ? "high" : currentScore >= 70 ? "mid" : "low";
  const target = Math.min(98, currentScore + (tier === "high" ? 6 : tier === "mid" ? 11 : 16));
  const labels = getSkillLabels(domain);
  return {
    ...roadmap,
    label: labels[skillId],
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

// Behavioral questions (from QUESTION_BANK.HR) are checked for STAR
// structure — Situation, Task, Action, Result — via keyword heuristics.
// Not true NLP, but it reads the actual answer instead of guessing.
const HR_TOPICS = new Set([
  "Introduction", "Motivation", "Teamwork", "Conflict Resolution", "Leadership",
  "Failure", "Pressure Handling", "Difficult Stakeholders", "Ethical Judgment",
]);

export function isBehavioralTopic(topic) {
  return HR_TOPICS.has(topic);
}

const STAR_PATTERNS = {
  situation: /\b(when|during|while|at (my|the)|in (my|a) (previous|last|recent)|situation|context|background)\b/i,
  task: /\b(needed to|had to|was responsible|my (role|task|goal) was|goal was to|objective was)\b/i,
  action: /\bI (built|created|implemented|led|organized|decided|designed|analyzed|proposed|fixed|wrote|managed|coordinated|resolved|developed|launched|negotiated|presented|escalated|prioritized|reduced|increased|improved|delivered|reached out)\b/i,
  result: /\b(result(ed)?( in)?|as a result|which led to|increased|decreased|reduced|improved|successfully|outcome|we (achieved|delivered|shipped)|\d+%|percent)\b/i,
};

export function analyzeStar(answerText) {
  return {
    situation: STAR_PATTERNS.situation.test(answerText),
    task: STAR_PATTERNS.task.test(answerText),
    action: STAR_PATTERNS.action.test(answerText),
    result: STAR_PATTERNS.result.test(answerText),
  };
}

export const STAR_LABELS = { situation: "Situation", task: "Task", action: "Action", result: "Result" };

function starTip(star) {
  const missing = Object.entries(star).filter(([, present]) => !present).map(([key]) => key);
  if (missing.length === 0) {
    return "Great STAR structure — every part is there. Tighten the wording and this is interview-ready.";
  }
  const first = missing[0];
  const messages = {
    situation: "Set the scene first — briefly say when/where this happened before jumping into what you did.",
    task: "Name what you were specifically responsible for, not just what happened around you.",
    action: "Say what YOU did, using 'I' statements — right now it reads like something happened, not something you drove.",
    result: "End with a measurable result or what changed because of your action — that's the part that's missing.",
  };
  return messages[first];
}

// Mock "AI scoring" of a free-text answer — biased by length/effort so the
// demo feels responsive to real input while staying reliable offline.
// Reads real (if shallow) signals out of the answer text so scoring
// responds to what was actually written, not just how long it is.
function analyzeAnswerSignals(text) {
  const trimmed = text.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const sentenceCount = trimmed.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean).length;
  const normalized = words.map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, "")).filter(Boolean);
  const uniqueRatio = normalized.length > 0 ? new Set(normalized).size / normalized.length : 0;
  return {
    wordCount,
    sentenceCount,
    uniqueRatio,
    hasNumbers: /\d/.test(trimmed),
    hasExample: /\b(for example|such as|for instance|e\.g\.|specifically)\b/i.test(trimmed),
    hasReasoning: /\b(because|since|therefore|as a result|which (led|resulted)|due to)\b/i.test(trimmed),
  };
}

// Jaccard similarity on word sets — used to catch "pasted the same answer
// again" so the feedback can call that out instead of scoring it fresh.
function textSimilarity(a, b) {
  const setA = new Set(a.toLowerCase().split(/\s+/).filter(Boolean));
  const setB = new Set(b.toLowerCase().split(/\s+/).filter(Boolean));
  if (setA.size === 0 || setB.size === 0) return 0;
  let overlap = 0;
  for (const w of setA) if (setB.has(w)) overlap += 1;
  return overlap / new Set([...setA, ...setB]).size;
}

const METRIC_TIPS = {
  technical: {
    strong: "Your grasp of the details is strong — try quantifying the impact with a number next time.",
    average: "The core idea is right, but back it with a specific fact, figure, or mechanism.",
    weak: "This needs more grounding — anchor your answer in something concrete you actually know, not a general impression.",
  },
  relevance: {
    strong: "You stayed tightly on-topic — that focus is working well.",
    average: "Good relevance overall, but part of the answer drifted — tie every sentence back to the actual question.",
    weak: "The answer doesn't fully address what was asked — re-read the question and respond to it directly first.",
  },
  clarity: {
    strong: "Clear and easy to follow — that structure is a real strength.",
    average: "Mostly clear, but tighten it — lead with your main point, then support it.",
    weak: "This is hard to follow as written — break it into a couple of short, ordered points.",
  },
  confidence: {
    strong: "You sound confident and decisive — keep that tone.",
    average: "Reasonably confident, but a stronger closing sentence would leave a better final impression.",
    weak: "This reads hesitant — state your point directly instead of hedging around it.",
  },
};

function pickMetricTip(metrics) {
  const entries = Object.entries(metrics);
  const weakest = entries.slice().sort((a, b) => a[1] - b[1])[0];
  const bucket = scoreLabel(weakest[1]);
  return METRIC_TIPS[weakest[0]][bucket];
}

// `context` optionally carries { topic, isBehavioral, previousAnswer } for
// a small dose of question-aware analysis instead of pure generic scoring.
export function generateFeedback(answerText, coachStyle = "Friendly", context = {}) {
  const signals = analyzeAnswerSignals(answerText);
  const baseline = clamp(3 + signals.wordCount / 10, 3, 8.5);

  let technical = clamp(baseline + (signals.hasNumbers ? 1 : 0) + (signals.hasReasoning ? 0.6 : 0) + jitter(0, 0.6), 1, 10);
  let relevance = clamp(baseline + (signals.uniqueRatio > 0.55 ? 0.8 : -0.3) + jitter(0, 0.5), 1, 10);
  let clarity = clamp(baseline + (signals.sentenceCount >= 2 ? 0.8 : -0.6) + (signals.uniqueRatio < 0.4 ? -1.2 : 0) + jitter(0, 0.5), 1, 10);
  let confidence = clamp(baseline + (signals.hasExample ? 0.9 : 0) + jitter(0, 0.7), 1, 10);

  const repeat = context.previousAnswer ? textSimilarity(answerText, context.previousAnswer) : 0;
  if (repeat > 0.6) {
    technical = clamp(technical - 3, 1, 10);
    relevance = clamp(relevance - 3, 1, 10);
    clarity = clamp(clarity - 2, 1, 10);
    confidence = clamp(confidence - 2, 1, 10);
  }

  let star = null;
  if (context.isBehavioral) {
    star = analyzeStar(answerText);
    const completeness = Object.values(star).filter(Boolean).length / 4;
    const structureScore = clamp(3 + completeness * 7, 1, 10);
    clarity = clamp((clarity + structureScore) / 2, 1, 10);
  }

  const avg = (technical + relevance + clarity + confidence) / 4;
  const bucket = scoreLabel(avg);

  let tip;
  if (repeat > 0.6) {
    tip = "This looks very close to your last answer — try a different angle: a specific example, a number, or a new detail this time.";
  } else if (star) {
    tip = starTip(star);
  } else {
    const tips = (COACH_TIPS_BY_STYLE[coachStyle] || COACH_TIPS_BY_STYLE.Friendly)[bucket];
    const useMetricTip = Math.random() < 0.5;
    tip = useMetricTip
      ? pickMetricTip({ technical, relevance, clarity, confidence })
      : tips[Math.floor(Math.random() * tips.length)];
  }

  return {
    technical: Math.round(technical * 10) / 10,
    relevance: Math.round(relevance * 10) / 10,
    clarity: Math.round(clarity * 10) / 10,
    confidence: Math.round(confidence * 10) / 10,
    average: Math.round(avg * 10) / 10,
    tip,
    star,
    isRepeat: repeat > 0.6,
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
  if (available.length > 0) {
    return personalize(available[Math.floor(Math.random() * available.length)], hasResume);
  }

  // This difficulty tier is exhausted — try any other unused question in
  // the same domain(s) before ever repeating one already asked.
  const everything = banks.flatMap((bank) => DIFFICULTIES.flatMap((d) => bank[d]));
  const anyUnused = everything.filter((q) => !usedTexts.includes(q.text));
  const pool = anyUnused.length > 0 ? anyUnused : pools;
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
    domain: "Technical",
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
    domain: "Technical",
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
  const domain = domainForCategory(config?.categoryKey);
  const labels = getSkillLabels(domain);

  return {
    role: config?.role || "Candidate",
    type: config?.type || "Technical",
    domain,
    overallScore: clampScore(overall),
    technical: clampScore(overall + 4),
    communication: clampScore(overall - 8),
    problemSolving: clampScore(overall + 2),
    confidence: clampScore(overall - 3),
    questions: sessionQuestions,
    teachMeCount,
    duration: `${sessionQuestions.length * 2} min`,
    strengths: pickStrengths(overall, domain),
    improvements: pickImprovements(overall, domain),
    recommendation: `Focus on structuring behavioral answers using STAR and keep ${labels.technical.toLowerCase()} explanations concise.`,
  };
}

function clampScore(n) {
  return Math.max(35, Math.min(98, n));
}

function pickStrengths(overall, domain) {
  const labels = getSkillLabels(domain);
  const all = [
    `Strong ${labels.technical.toLowerCase()}`,
    "Good relevance to questions",
    `Good ${labels.problemSolving.toLowerCase()}`,
    "Clear and structured communication",
    "Handled harder follow-ups well",
  ];
  return overall >= 70 ? all.slice(0, 3) : all.slice(2, 5);
}

function pickImprovements(overall, domain) {
  const labels = getSkillLabels(domain);
  const all = [
    "Keep answers more concise",
    "Use stronger STAR structure",
    "Provide more concrete examples",
    "Slow down and structure thoughts before answering",
    `Dig deeper into core ${labels.technical.toLowerCase()}`,
  ];
  return overall >= 70 ? all.slice(0, 3) : all.slice(2, 5);
}
