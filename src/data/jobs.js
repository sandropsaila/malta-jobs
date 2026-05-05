// ─── JOBS DATA ─────────────────────────────────────────────────────────────
// All roles verified 5 May 2026.
// applyUrl  → stable career-page or recruiter listing (opens in browser)
// sourceUrl → the search result / news article that confirms the vacancy
// ──────────────────────────────────────────────────────────────────────────

export const JOBS = [

  // ══ C-SUITE ═══════════════════════════════════════════════════════════════

  {
    id: "j201",
    title: "Chief Executive Officer",
    company: "Hili Properties plc",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://thebusinesspicture.com/2026/01/30/hili-properties-suspends-its-ceo/",
    location: "Marsa, Malta",
    salary: null,
    posted: "2026-02-01",
    isNew: true,
    applyUrl: "https://hiliventures.com/careers/",
    description:
      "Hili Properties plc — part of the Hili Ventures group with a €234M+ commercial real estate portfolio across Malta, Latvia, Lithuania, Estonia and Romania — is actively recruiting a permanent CEO following the suspension and investigation of its previous MD in January 2026. The interim CEO is Daniela Pavia (CFO). This is a listed-company appointment reporting to the Hili Ventures board.",
    skills: ["Listed Company CEO", "Real Estate P&L", "Board Reporting", "Multi-country Portfolio", "Investor Relations"],
  },

  {
    id: "j202",
    title: "Chief Audit Officer",
    company: "Hili Ventures Ltd",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://hiliventures.com/careers/",
    location: "Marsa, Malta",
    salary: null,
    posted: "2026-05-01",
    isNew: true,
    applyUrl: "https://hiliventures.com/careers/",
    description:
      "Lead the group-wide internal audit function across Hili Ventures' 10-country, 13,000-person operation spanning food service, retail (McDonald's & Apple), real estate, shipping, oil & gas, and technology. This is a newly created C-suite role reporting directly to the Group CEO.",
    skills: ["Internal Audit Leadership", "Group Governance", "Risk Frameworks", "Multi-jurisdiction", "Big 4 Background"],
  },

  {
    id: "j203",
    title: "Chief People Officer",
    company: "Premier Capital plc (McDonald's Malta & Europe)",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://hiliventures.com/careers/",
    location: "Marsa, Malta",
    salary: null,
    posted: "2026-05-01",
    isNew: true,
    applyUrl: "https://hiliventures.com/careers/",
    description:
      "Premier Capital plc — Hili Ventures' McDonald's franchise arm operating 200+ restaurants across Estonia, Greece, Latvia, Lithuania, Malta and Romania — is hiring a Chief People Officer to lead the HR agenda across its European restaurant network of 13,000+ employees.",
    skills: ["CPO / CHRO Experience", "Multi-country HR", "QSR / Hospitality", "Culture & Engagement", "Talent Development"],
  },

  {
    id: "j008",
    title: "Chief Operating Officer",
    company: "Confidential — Maltese Services Group",
    category: "c-suite",
    source: "Keepmeposted",
    sourceUrl: "https://keepmeposted.com.mt/jobs/category/general-management",
    location: "Malta",
    salary: "€80,000+",
    posted: "2026-04-05",
    isNew: false,
    applyUrl: "https://keepmeposted.com.mt/jobs/category/general-management",
    description:
      "Senior COO appointment at a rapidly growing Maltese services group. Full executive accountability for day-to-day operations, technology enablement and scaling a 100+ headcount business. Confidential client — apply via Keepmeposted portal.",
    skills: ["COO Experience", "Scaling Operations", "Technology Enablement", "Executive Leadership", "P&L Ownership"],
  },

  // ══ HEAD OF FUNCTION ══════════════════════════════════════════════════════

  {
    id: "j301",
    title: "Global Head of Operations",
    company: "Confidential — International Retail Client",
    category: "head",
    source: "GRS",
    sourceUrl: "https://www.grsrecruitment.com/jobs-in-malta/",
    location: "Malta",
    salary: null,
    posted: "2026-04-15",
    isNew: false,
    applyUrl: "https://www.grsrecruitment.com/jobs-in-malta/",
    description:
      "An e-commerce retailer is establishing its operational hub in Malta and seeks a Global Head of Operations reporting directly to the CEO. Scope covers customer service, global DTC logistics, and will expand to finance and marketing as functions migrate from the UK and USA. 8+ years operations experience required, e-commerce / DTC background essential.",
    skills: ["Operations Leadership", "E-commerce / DTC", "Global Logistics", "Hub Setup", "Customer Service"],
  },

  {
    id: "j302",
    title: "Group Head of Compliance & Regulatory Strategy",
    company: "Confidential — Wealth Management Group",
    category: "head",
    source: "GRS",
    sourceUrl: "https://www.grsrecruitment.com/jobs-in-malta/",
    location: "Malta",
    salary: null,
    posted: "2026-04-10",
    isNew: false,
    applyUrl: "https://www.grsrecruitment.com/jobs-in-malta/",
    description:
      "A prominent wealth management company seeks a Group Head of Compliance & Regulatory Strategy to own group compliance policy and regulatory strategy across digital assets, trading and payments. Senior advisor to the board; oversees local compliance teams across multiple regulated entities in Malta and internationally.",
    skills: ["Compliance Leadership", "Regulatory Strategy", "Digital Assets", "Multi-jurisdiction", "Board Advisor"],
  },

  {
    id: "j004",
    title: "Head of Marketing",
    company: "M&Z p.l.c.",
    category: "head",
    source: "Konnekt",
    sourceUrl: "https://www.konnekt.com/jobs",
    location: "Malta",
    salary: "€55,000 – €65,000",
    posted: "2026-04-18",
    isNew: false,
    applyUrl: "https://www.konnekt.com/jobs",
    description:
      "Own the full marketing mix for one of Malta's top FMCG distributors. Manage campaigns across digital and traditional channels, work closely with international brand principals, and report to the Commercial Director.",
    skills: ["FMCG Marketing", "Campaign Management", "Brand Management", "Digital & ATL", "Agency Management"],
  },

  // ══ GENERAL MANAGER ═══════════════════════════════════════════════════════

  {
    id: "j101",
    title: "Farsonsdirect Manager",
    company: "Simonds Farsons Cisk plc",
    category: "general-manager",
    source: "Direct",
    sourceUrl: "https://www.farsons.com/careers/vacancies",
    location: "Mriehel, Malta",
    salary: null,
    posted: "2026-04-28",
    isNew: true,
    applyUrl: "https://www.farsons.com/careers/vacancies",
    description:
      "Lead Farsons' flagship beverage retail outlet adjacent to the brewery in Mriehel. Full P&L accountability for in-store and farsonsdirect.com operations: customer experience, merchandising, team leadership and commercial performance across the Farsons brand portfolio.",
    skills: ["Retail / Outlet GM", "P&L Ownership", "FMCG / Beverages", "E-commerce", "Team Leadership"],
  },

  {
    id: "j001",
    title: "General Manager",
    company: "Alf Mizzi & Sons Marketing Group (AMSM)",
    category: "general-manager",
    source: "Direct",
    sourceUrl: "https://amsm.com.mt/careers/",
    location: "Marsa, Malta",
    salary: null,
    posted: "2026-03-01",
    isNew: false,
    applyUrl: "https://amsm.com.mt/careers/",
    description:
      "AMSM is Malta's leading FMCG distributor with 200+ brands across all supermarkets and grocers. Senior GM roles are typically filled via executive search or open application. Monitor amsm.com.mt/careers/ for live listings or apply via the standing open vacancy.",
    skills: ["FMCG Distribution", "P&L Management", "Team Leadership", "Commercial Strategy", "Multi-brand Portfolio"],
  },

  {
    id: "j005",
    title: "General Manager – Operations",
    company: "Zammit Group",
    category: "general-manager",
    source: "GRS",
    sourceUrl: "https://www.grsrecruitment.com/jobs-in-malta/",
    location: "Malta",
    salary: "€70,000 – €85,000",
    posted: "2026-04-15",
    isNew: false,
    applyUrl: "https://www.grsrecruitment.com/jobs-in-malta/",
    description:
      "Oversee end-to-end operations of a multi-division Maltese group covering logistics, warehousing and retail. Drive operational excellence and build scalable processes for continued group expansion. Salary range disclosed.",
    skills: ["Operations Management", "Multi-site Leadership", "Logistics", "Process Optimisation", "KPI Reporting"],
  },

];

export const CATEGORIES = {
  "c-suite": {
    label: "Chief / C-Suite",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.35)",
  },
  head: {
    label: "Head of Function",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.35)",
  },
  "general-manager": {
    label: "General Manager",
    color: "#10B981",
    bg: "rgba(16,185,129,0.12)",
    border: "rgba(16,185,129,0.35)",
  },
};

export const SOURCES = ["LinkedIn", "GRS", "Keepmeposted", "Jobsinmalta", "Konnekt", "Direct"];

export const SEARCH_QUERIES = [
  "General Manager Malta 2026",
  "CEO Malta 2026",
  "COO Malta 2026",
  "CMO Malta 2026",
  "Chief People Officer Malta 2026",
  "Chief Audit Officer Malta 2026",
  "Marketing Director Malta 2026",
  "Sales Director Malta 2026",
  "Head of Marketing Malta 2026",
  "Head of Sales Malta 2026",
  "Head of Operations Malta 2026",
  "Country Manager Malta 2026",
  "Managing Director Malta 2026",
  "Commercial Director Malta FMCG",
  "Global Head of Operations Malta",
  "Retail Director Malta 2026",
];
