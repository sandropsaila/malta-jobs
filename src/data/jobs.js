// ─── JOBS DATA ─────────────────────────────────────────────────────────────
// All roles verified from live sources — 6 May 2026.
// applyUrl  → direct application page (opens in browser, bot-protected URLs
//             point to recruiter listing page which always works)
// sourceUrl → the search-indexed URL confirming the vacancy
// ──────────────────────────────────────────────────────────────────────────

export const JOBS = [

  // ══ C-SUITE ════════════════════════════════════════════════════════════════

  {
    id: "j401",
    title: "Chief Operating Officer",
    company: "Confidential — Financial Services Leader",
    category: "c-suite",
    source: "Konnekt",
    sourceUrl: "https://www.konnekt.com/jobs/general-management-jobs/chief-operating-officer/83978",
    location: "Central Malta",
    salary: null,
    posted: "2025-11-26",
    isNew: false,
    applyUrl: "https://www.konnekt.com/jobs/apply/83978/general-management-jobs/chief-operating-officer",
    description:
      "A leading MFSA-regulated financial services firm is seeking a Chief Operating Officer to lead and coordinate core operational areas including IT, risk, payments, and customer service. The COO will drive digital transformation, shape operational strategy alongside the CEO, and oversee business continuity and risk controls. Closing date 31 May 2026. Ref: BZ096 — contact Therisa Gambin at Konnekt (+356 2258 8038).",
    skills: ["Financial Services Ops", "MFSA / EU Regulation", "Digital Transformation", "Risk & Continuity", "C-Suite Leadership"],
  },

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
    isNew: false,
    applyUrl: "https://hiliventures.com/careers/",
    description:
      "Hili Properties plc — part of Hili Ventures with a €234M+ commercial real estate portfolio across Malta, Latvia, Lithuania, Estonia and Romania — is recruiting a permanent CEO following the suspension of its previous MD in January 2026. Daniela Pavia (CFO) serves as interim CEO. Listed-company appointment reporting to the Hili Ventures board. Apply via hiliventures.com/careers.",
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
      "Lead the group-wide internal audit function across Hili Ventures' 10-country, 13,000-person operation spanning food service, retail (McDonald's & Apple), real estate, shipping, oil & gas, and technology. Newly created C-suite role reporting to the Group CEO.",
    skills: ["Internal Audit Leadership", "Group Governance", "Risk Frameworks", "Multi-jurisdiction", "Big 4 Background"],
  },

  {
    id: "j203",
    title: "Chief People Officer",
    company: "Premier Capital plc (McDonald's Europe)",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://hiliventures.com/careers/",
    location: "Marsa, Malta",
    salary: null,
    posted: "2026-05-01",
    isNew: true,
    applyUrl: "https://hiliventures.com/careers/",
    description:
      "Premier Capital plc — Hili Ventures' McDonald's franchise arm with 200+ restaurants across Estonia, Greece, Latvia, Lithuania, Malta and Romania — is hiring a Chief People Officer to lead the HR agenda across its European restaurant network of 13,000+ employees.",
    skills: ["CPO / CHRO Experience", "Multi-country HR", "QSR / Hospitality", "Culture & Engagement", "Talent Development"],
  },

  // ══ HEAD OF FUNCTION ═══════════════════════════════════════════════════════

  {
    id: "j501",
    title: "Head of Sales and Marketing",
    company: "Confidential — FMCG Company",
    category: "head",
    source: "GRS",
    sourceUrl: "https://jobs.grsrecruitment.com/job/head-of-sales-and-marketing-10942.aspx",
    location: "Malta",
    salary: null,
    posted: "2026-04-30",
    isNew: true,
    applyUrl: "https://jobs.grsrecruitment.com/job/head-of-sales-and-marketing-10942/apply.aspx",
    description:
      "A Malta-based FMCG company is seeking a Head of Sales and Marketing to lead both departments and drive the overall growth strategy. The role reports to the General Manager and is responsible for planning, organising and directing Marketing and Sales in support of the company's business strategy — growing revenue, increasing market share, and executing strategies in collaboration with brand principals. 7+ years in FMCG sales and marketing required, with at least 3 in senior leadership. Ref #10942 — contact Sarah Miceli at sarah@grsrecruitment.com.",
    skills: ["FMCG Sales Leadership", "Brand & Marketing Strategy", "P&L / Budget Management", "Market Expansion", "Principal Management"],
  },

  {
    id: "j502",
    title: "Head of Tax Advisory",
    company: "Confidential — Corporate Services Provider",
    category: "head",
    source: "GRS",
    sourceUrl: "https://jobs.grsrecruitment.com/job/head-of-tax-advisory-10494.aspx",
    location: "Malta",
    salary: null,
    posted: "2026-04-10",
    isNew: false,
    applyUrl: "https://jobs.grsrecruitment.com/job/head-of-tax-advisory-10494/apply.aspx",
    description:
      "A leading Malta-based Corporate Services provider is hiring a Head of Tax Advisory to build and grow its Tax Advisory line of business. The role involves leading a team of tax professionals, providing advanced advisory to corporates, international groups and HNWIs, and developing compliance frameworks covering FATCA, CRS, DAC, ATAD, Transfer Pricing and Pillar 2. Business development and client pitching also in scope. Ref #10494 — contact Michelle Cooper at michellec@grsrecruitment.com.",
    skills: ["Tax Advisory Leadership", "International Tax Law", "FATCA / CRS / Pillar 2", "Client Development", "Team Leadership"],
  },

  {
    id: "j301",
    title: "Global Head of Operations",
    company: "Confidential — International Retail Client",
    category: "head",
    source: "GRS",
    sourceUrl: "https://jobs.grsrecruitment.com/job/global-head-of-operations-10304.aspx",
    location: "Malta",
    salary: null,
    posted: "2026-04-15",
    isNew: false,
    applyUrl: "https://jobs.grsrecruitment.com/job/global-head-of-operations-10304/apply.aspx",
    description:
      "An e-commerce retailer is establishing its operational hub in Malta and seeks a Global Head of Operations reporting to the CEO. Initial focus on customer service and global DTC logistics, expanding to finance and marketing as functions migrate from the UK and USA. 8+ years operations experience, strong e-commerce / DTC background essential. Ref #10304 — contact Michelle Cooper at michellec@grsrecruitment.com.",
    skills: ["Operations Leadership", "E-commerce / DTC", "Global Logistics", "Hub Setup", "Customer Service"],
  },

  {
    id: "j302",
    title: "Group Head of Compliance & Regulatory Strategy",
    company: "Confidential — Wealth Management Group",
    category: "head",
    source: "GRS",
    sourceUrl: "https://jobs.grsrecruitment.com/job/group-head-of-compliance-and-regulatory-strategy-10489.aspx",
    location: "Malta",
    salary: null,
    posted: "2026-04-10",
    isNew: false,
    applyUrl: "https://jobs.grsrecruitment.com/job/group-head-of-compliance-and-regulatory-strategy-10489/apply.aspx",
    description:
      "A prominent wealth management company seeks a Group Head of Compliance & Regulatory Strategy to own group compliance policy and regulatory strategy across digital assets, trading and payments. Senior advisor to the board; oversees local compliance teams across multiple regulated entities. Ref #10489 — contact Michelle Cooper at michellec@grsrecruitment.com.",
    skills: ["Compliance Leadership", "Regulatory Strategy", "Digital Assets", "Multi-jurisdiction", "Board Advisor"],
  },

  // ══ GENERAL MANAGER ════════════════════════════════════════════════════════

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
      "Lead Farsons' flagship beverage retail outlet adjacent to the brewery in Mriehel. Full P&L accountability for in-store and farsonsdirect.com operations — customer experience, merchandising, team leadership, and commercial performance across the full Farsons brand portfolio.",
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
      "AMSM is Malta's leading FMCG importer and distributor with 200+ brands across all supermarket and grocery channels. Senior GM roles at AMSM are typically filled via executive search or standing open application. Apply at amsm.com.mt/careers or approach directly.",
    skills: ["FMCG Distribution", "P&L Management", "Multi-brand Portfolio", "Commercial Strategy", "Team Leadership"],
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
