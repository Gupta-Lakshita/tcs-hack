// Career tree: Category -> Track (degree/branch) -> Role.
// Kept intentionally compact — enough breadth to feel real without
// becoming an unmaintainable data dump.

export const CAREER_CATEGORIES = [
  {
    key: "cs",
    label: "Computer Science & Technology",
    emoji: "\u{1F4BB}",
    trackLabel: "Degree",
    tracks: ["BCA", "B.Tech Computer Science", "B.Tech IT", "B.Sc Computer Science", "B.Sc IT", "MCA", "M.Tech"],
    roles: [
      "Software Developer", "Web Developer", "Full Stack Developer", "Data Analyst",
      "Data Scientist", "AI/ML Engineer", "Cybersecurity Analyst", "Cloud Engineer",
      "QA Engineer", "UI/UX Designer", "Product Manager",
    ],
  },
  {
    key: "business",
    label: "Business & Management",
    emoji: "\u{1F4BC}",
    trackLabel: "Degree",
    tracks: ["BBA", "BMS", "BBM", "MBA", "PGDM"],
    roles: [
      "Business Analyst", "Marketing Associate", "HR", "Sales", "Product Manager",
      "Operations", "Finance", "Management Consultant", "Business Development", "Digital Marketing",
    ],
  },
  {
    key: "commerce",
    label: "Commerce & Finance",
    emoji: "\u{1F4B0}",
    trackLabel: "Degree",
    tracks: ["B.Com", "M.Com", "CA", "CMA", "CS", "ACCA", "BBA Finance"],
    roles: [
      "Financial Analyst", "Accountant", "Investment Analyst", "Auditor",
      "Tax Consultant", "Banking", "Finance Associate", "Business Analyst",
    ],
  },
  {
    key: "engineering",
    label: "Engineering",
    emoji: "\u{2699}\u{FE0F}",
    trackLabel: "Branch",
    tracks: [
      "Computer Science", "Information Technology", "Electronics & Communication", "Electrical",
      "Mechanical", "Civil", "Chemical", "Biotechnology", "Aerospace", "Automobile", "Production", "Instrumentation",
    ],
    rolesByTrack: {
      Mechanical: ["Mechanical Engineer", "Design Engineer", "Manufacturing Engineer", "Operations"],
      Civil: ["Civil Engineer", "Structural Engineer", "Site Engineer", "Project Engineer"],
      "Electronics & Communication": ["Embedded Engineer", "Electronics Engineer", "VLSI Engineer", "Telecom Engineer", "Hardware Engineer"],
      Electrical: ["Electrical Engineer", "Power Systems Engineer", "Control Systems Engineer", "Electrical Design Engineer"],
      "Computer Science": ["Software Developer", "Full Stack Developer", "Data Engineer", "Cloud Engineer"],
      "Information Technology": ["Software Developer", "Systems Engineer", "IT Consultant", "Cloud Engineer"],
      default: ["Design Engineer", "Project Engineer", "Quality Engineer", "R&D Engineer", "Operations"],
    },
  },
  {
    key: "science",
    label: "Science",
    emoji: "\u{1F52C}",
    trackLabel: "Branch",
    tracks: ["Physics", "Chemistry", "Mathematics", "Biology", "Biotechnology", "Statistics", "Computer Science", "Environmental Science"],
    roles: ["Research Associate", "Data Analyst", "Lab Technician", "Scientific Officer", "Analytics Associate", "Teaching / Academia"],
  },
  {
    key: "arts",
    label: "Arts & Humanities",
    emoji: "\u{1F4DA}",
    trackLabel: "Branch",
    tracks: ["English", "Psychology", "Economics", "Political Science", "History", "Sociology", "Journalism", "Mass Communication", "Public Relations", "Languages"],
    roles: ["Content Writer", "Journalist", "PR Associate", "Research Associate", "HR", "Marketing", "Communications", "Social Media Manager", "Teaching", "Civil Services Aspirant"],
  },
  {
    key: "design",
    label: "Design & Creative",
    emoji: "\u{1F3A8}",
    trackLabel: "Degree",
    tracks: ["B.Des", "M.Des", "Fine Arts", "Animation", "Multimedia"],
    roles: ["UI/UX Designer", "Product Designer", "Graphic Designer", "Visual Designer", "Motion Designer", "Animator", "Creative Strategist"],
  },
  {
    key: "law",
    label: "Law",
    emoji: "\u{2696}\u{FE0F}",
    trackLabel: "Degree",
    tracks: ["LLB", "BA LLB", "BBA LLB", "LLM"],
    roles: ["Corporate Lawyer", "Legal Associate", "Legal Analyst", "Compliance Officer", "Legal Operations"],
  },
  {
    key: "medical",
    label: "Medical & Healthcare",
    emoji: "\u{1FA7A}",
    trackLabel: "Degree",
    tracks: ["MBBS", "BDS", "B.Pharm", "BPT", "B.Sc Nursing", "BAMS", "BHMS", "Allied Health Sciences"],
    rolesByTrack: {
      MBBS: ["Junior Doctor", "Medical Officer", "Clinical Resident", "Public Health Associate"],
      BDS: ["Dentist", "Dental Surgeon", "Oral Health Consultant"],
      "B.Pharm": ["Pharmacist", "Clinical Research Associate", "Drug Safety Associate"],
      BPT: ["Physiotherapist", "Rehabilitation Specialist", "Sports Physiotherapist"],
      "B.Sc Nursing": ["Staff Nurse", "Clinical Nurse", "Community Health Nurse"],
      BAMS: ["Ayurvedic Physician", "Wellness Consultant"],
      BHMS: ["Homeopathic Physician", "Wellness Consultant"],
      default: ["Healthcare Associate", "Allied Health Professional", "Clinical Coordinator"],
    },
  },
  {
    key: "hospitality",
    label: "Hospitality & Travel",
    emoji: "\u{1F3E8}",
    trackLabel: "Degree",
    tracks: ["BHM", "Hotel Management", "Travel & Tourism"],
    roles: ["Hotel Operations", "Hospitality Management", "Event Management", "Travel Management", "Customer Experience"],
  },
  {
    key: "education",
    label: "Education",
    emoji: "\u{1F3EB}",
    trackLabel: "Degree",
    tracks: ["B.Ed", "M.Ed", "Integrated Education Programs"],
    roles: ["Teacher", "Academic Coordinator", "Education Consultant", "Curriculum Designer", "EdTech Associate"],
  },
  {
    key: "other",
    label: "Other / Not Listed",
    emoji: "\u{2728}",
    custom: true,
  },
  {
    key: "undecided",
    label: "Undecided",
    emoji: "\u{1F914}",
    undecided: true,
    roles: ["General Professional Role", "Internship / Entry-level Role", "Explore Multiple Fields"],
  },
];

export function getCategory(key) {
  return CAREER_CATEGORIES.find((c) => c.key === key);
}

export function getRolesForTrack(category, track) {
  if (!category) return [];
  if (category.rolesByTrack) return category.rolesByTrack[track] || category.rolesByTrack.default || [];
  return category.roles || [];
}

// Maps a career category to the question-domain used to pick interview
// questions (see mockData.js DOMAIN_QUESTION_BANKS).
export function domainForCategory(categoryKey) {
  const map = {
    cs: "Technical",
    engineering: "Engineering",
    business: "Business",
    commerce: "Finance",
    science: "Science",
    arts: "Arts",
    design: "Design",
    law: "Law",
    medical: "Medical",
    hospitality: "Hospitality",
    education: "Education",
    other: "General",
    undecided: "General",
  };
  return map[categoryKey] || "General";
}

// Interview Type card copy, keyed by domain. The underlying `key` values
// (Technical/HR/Mixed) stay stable — only the label/description shown to
// the user changes — so a Marketing student never sees "DSA & core CS".
const INTERVIEW_TYPE_META = {
  Technical: { Technical: ["Technical", "DSA, system design & core CS"], HR: ["HR", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Engineering: { Technical: ["Technical", "Core engineering concepts & problem solving"], HR: ["HR", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Business: { Technical: ["Business", "Business, marketing & case questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Finance: { Technical: ["Finance", "Finance & analytical case questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Science: { Technical: ["Domain", "Core scientific/domain questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Arts: { Technical: ["Domain", "Writing, media & domain questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Design: { Technical: ["Portfolio", "Design thinking & case questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Law: { Technical: ["Legal", "Legal knowledge & case questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Medical: { Technical: ["Clinical", "Clinical knowledge & scenario questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Hospitality: { Technical: ["Operations", "Service & operations scenarios"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  Education: { Technical: ["Subject", "Subject knowledge & classroom scenarios"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
  General: { Technical: ["Practice", "General role-relevant questions"], HR: ["Behavioral", "Behavioral & culture-fit questions"], Mixed: ["Mixed", "A blend of both"] },
};

export function getInterviewTypeOptions(domain) {
  const meta = INTERVIEW_TYPE_META[domain] || INTERVIEW_TYPE_META.General;
  return ["Technical", "HR", "Mixed"].map((key) => ({
    key,
    label: meta[key][0],
    desc: meta[key][1],
  }));
}

// Which interview type best exercises a given skill id — used when a user
// clicks "Practice X" from a skill roadmap so Setup pre-selects sensibly.
export const SKILL_ID_TO_INTERVIEW_TYPE = {
  technical: "Technical",
  problemSolving: "Technical",
  communication: "HR",
  confidence: "HR",
};
