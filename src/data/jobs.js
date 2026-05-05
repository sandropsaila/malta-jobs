// ─── JOBS DATA ───────────────────────────────────────────────────────────────
// To add a new job, copy one of the blocks below and paste at the top of the
// array, then push to GitHub — Vercel will auto-deploy within ~60 seconds.
//
// CATEGORY IDs: "c-suite" | "head" | "general-manager"
// SOURCE:       "LinkedIn" | "GRS" | "Keepmeposted" | "Jobsinmalta" | "Konnekt" | "Direct"
// ─────────────────────────────────────────────────────────────────────────────

export const JOBS = [
  {
    id: "j001",
    title: "General Manager",
    company: "Alf Mizzi & Sons Marketing Group",
    category: "general-manager",
    source: "Direct",
    sourceUrl: "https://alfmizzigroup.com/careers",
    location: "Malta",
    salary: null,
    posted: "2026-04-28",
    isNew: true,
    applyUrl: "https://alfmizzigroup.com/careers",
    description:
      "Lead the full operational and commercial function of one of Malta's most established marketing and distribution groups. You will oversee multi-brand portfolios, P&L accountability, and a senior cross-functional team.",
    skills: ["P&L Management", "FMCG", "Team Leadership", "Commercial Strategy", "Malta Market"],
  },
  {
    id: "j002",
    title: "Head of Sales",
    company: "Simonds Farsons Cisk plc",
    category: "head",
    source: "LinkedIn",
    sourceUrl: "https://linkedin.com/company/simonds-farsons-cisk",
    location: "Malta",
    salary: "€60,000 – €75,000",
    posted: "2026-04-25",
    isNew: true,
    applyUrl: "https://www.farsons.com/en/about-us/careers",
    description:
      "Drive the national and export sales strategy for Malta's leading brewery. Lead a team of account managers across on-trade, off-trade, and export channels. Report to the CEO and contribute to overall group strategy.",
    skills: ["Sales Leadership", "Beverages / FMCG", "Channel Management", "Budget Ownership", "Team Development"],
  },
  {
    id: "j003",
    title: "Chief Marketing Officer",
    company: "Gasan Group",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://gasangroup.com/careers",
    location: "Malta",
    salary: null,
    posted: "2026-04-20",
    isNew: false,
    applyUrl: "https://gasangroup.com/careers",
    description:
      "Shape the marketing vision across a diversified group with interests in automotive, real estate, and financial services. This is a board-level appointment requiring proven brand-building and digital transformation experience.",
    skills: ["Brand Strategy", "Digital Marketing", "Executive Stakeholder Management", "Diversified Group", "Multi-sector"],
  },
  {
    id: "j004",
    title: "Head of Marketing",
    company: "M&Z p.l.c.",
    category: "head",
    source: "Konnekt",
    sourceUrl: "https://konnekt.com.mt",
    location: "Malta",
    salary: "€55,000 – €65,000",
    posted: "2026-04-18",
    isNew: false,
    applyUrl: "https://konnekt.com.mt/jobs",
    description:
      "Own the full marketing mix for one of Malta's top FMCG distributors. Manage campaigns across digital and traditional channels, work closely with international brand principals, and report to the Commercial Director.",
    skills: ["FMCG Marketing", "Campaign Management", "Brand Management", "Digital & ATL", "Agency Management"],
  },
  {
    id: "j005",
    title: "General Manager – Operations",
    company: "Zammit Group",
    category: "general-manager",
    source: "GRS",
    sourceUrl: "https://grsrecruitment.com",
    location: "Malta",
    salary: "€70,000 – €85,000",
    posted: "2026-04-15",
    isNew: false,
    applyUrl: "https://grsrecruitment.com/jobs",
    description:
      "Oversee the end-to-end operations of a multi-division group including logistics, warehousing, and retail. Drive operational excellence and build scalable processes for continued group expansion.",
    skills: ["Operations Management", "Logistics", "Process Optimisation", "Multi-site", "KPI Reporting"],
  },
  {
    id: "j006",
    title: "Country Manager – Malta",
    company: "Nestlé",
    category: "general-manager",
    source: "Direct",
    sourceUrl: "https://nestle.com/jobs",
    location: "Malta",
    salary: null,
    posted: "2026-04-10",
    isNew: false,
    applyUrl: "https://www.nestle.com/jobs",
    description:
      "Lead Nestlé Malta's commercial, supply chain, and regulatory agenda. Represent the business with local partners, distributors, and government bodies. Full P&L responsibility within a structured global framework.",
    skills: ["Country Management", "P&L Accountability", "FMCG / Nestlé", "Government Relations", "Distributor Management"],
  },
  {
    id: "j007",
    title: "Head of Operations",
    company: "Francis Busuttil & Sons (Marketing) Ltd.",
    category: "head",
    source: "Jobsinmalta",
    sourceUrl: "https://jobsinmalta.com",
    location: "Malta",
    salary: "€50,000 – €60,000",
    posted: "2026-04-08",
    isNew: false,
    applyUrl: "https://jobsinmalta.com/jobs",
    description:
      "Manage the operational backbone of a leading Maltese importer and distributor. Scope includes warehousing, supply chain coordination, and a team of 25+. Strong systems mindset and local distribution knowledge required.",
    skills: ["Supply Chain", "Warehouse Management", "ERP Systems", "Distribution", "Team Management"],
  },
  {
    id: "j008",
    title: "Chief Operating Officer",
    company: "Keepmeposted.com.mt (Confidential Client)",
    category: "c-suite",
    source: "Keepmeposted",
    sourceUrl: "https://keepmeposted.com.mt",
    location: "Malta",
    salary: "€80,000+",
    posted: "2026-04-05",
    isNew: false,
    applyUrl: "https://keepmeposted.com.mt/jobs",
    description:
      "Senior COO appointment at a rapidly growing Maltese services group. Full executive accountability for day-to-day operations, technology enablement, and scaling a 100+ headcount organisation. Confidential client — apply via portal.",
    skills: ["COO Experience", "Scaling Organisations", "Technology Enablement", "Malta-based", "Executive Leadership"],
  },
];

export const CATEGORIES = {
  "c-suite": {
    label: "Chief / C-Suite",
    color: "#F59E0B",        // amber
    bg: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.35)",
  },
  head: {
    label: "Head of Function",
    color: "#8B5CF6",        // violet
    bg: "rgba(139,92,246,0.12)",
    border: "rgba(139,92,246,0.35)",
  },
  "general-manager": {
    label: "General Manager",
    color: "#10B981",        // emerald
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
  "Marketing Director Malta 2026",
  "Sales Director Malta 2026",
  "Head of Marketing Malta 2026",
  "Head of Sales Malta 2026",
  "Head of Operations Malta 2026",
];
