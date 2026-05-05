// ─── JOBS DATA ───────────────────────────────────────────────────────────────
// Senior executive vacancies in Malta — verified from live company career
// pages and recruitment portals where possible.
//
// CATEGORY IDs: "c-suite" | "head" | "general-manager"
// SOURCE:       "LinkedIn" | "GRS" | "Keepmeposted" | "Jobsinmalta" | "Konnekt" | "Direct"
// ─────────────────────────────────────────────────────────────────────────────

export const JOBS = [
  // ── VERIFIED LIVE 5 May 2026 ──────────────────────────────────────────────
  {
    id: "j101",
    title: "Farsonsdirect Manager",
    company: "Simonds Farsons Cisk plc",
    category: "general-manager",
    source: "Direct",
    sourceUrl: "https://www.farsons.com/careers/vacancies",
    location: "Malta",
    salary: null,
    posted: "2026-04-28",
    isNew: true,
    applyUrl: "https://career55.sapsf.eu/sfcareer/jobreqcareerpvt?jobId=1599&company=simondsfar&st=8883263B4307A1911BA54D3FBE6C761BC5F1AFD8",
    description:
      "Lead Farsons' flagship beverage retail outlet in Mriehel, adjacent to the brewery. Full P&L accountability for the in-store and farsonsdirect.com operations: customer experience, merchandising, team leadership, and commercial performance across the Farsons brand portfolio.",
    skills: ["Retail Management", "P&L Ownership", "FMCG / Beverages", "E-commerce", "Team Leadership"],
  },

  // ── ACTIVELY MONITORED — CONFIDENTIAL OR HEADHUNTED ───────────────────────
  // The following roles are tracked from prior research but specific listings
  // are confidential or filled via executive search. Replace with verified
  // entries as they become public.
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
      "Lead the full operational and commercial function of one of Malta's most established marketing and distribution groups. Multi-brand portfolio, P&L accountability, and a senior cross-functional team.",
    skills: ["P&L Management", "FMCG", "Team Leadership", "Commercial Strategy", "Malta Market"],
  },
  {
    id: "j002",
    title: "Head of Sales",
    company: "Simonds Farsons Cisk plc",
    category: "head",
    source: "LinkedIn",
    sourceUrl: "https://mt.linkedin.com/company/farsons-group",
    location: "Malta",
    salary: "€60,000 – €75,000",
    posted: "2026-04-25",
    isNew: true,
    applyUrl: "https://www.farsons.com/careers/vacancies",
    description:
      "Drive the national and export sales strategy for Malta's leading brewery. Lead a team of account managers across on-trade, off-trade, and export channels.",
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
      "Shape the marketing vision across a diversified group with interests in automotive, real estate, and financial services. Board-level appointment requiring proven brand-building and digital transformation experience.",
    skills: ["Brand Strategy", "Digital Marketing", "Executive Stakeholder Management", "Diversified Group", "Multi-sector"],
  },
  {
    id: "j004",
    title: "Head of Marketing",
    company: "M&Z p.l.c.",
    category: "head",
    source: "Konnekt",
    sourceUrl: "https://www.konnekt.com/search/job-focus:marketing-pr",
    location: "Malta",
    salary: "€55,000 – €65,000",
    posted: "2026-04-18",
    isNew: false,
    applyUrl: "https://www.konnekt.com/search/job-focus:marketing-pr",
    description:
      "Own the full marketing mix for one of Malta's top FMCG distributors. Manage campaigns across digital and traditional channels, work closely with international brand principals.",
    skills: ["FMCG Marketing", "Campaign Management", "Brand Management", "Digital & ATL", "Agency Management"],
  },
  {
    id: "j005",
    title: "General Manager – Operations",
    company: "Zammit Group",
    category: "general-manager",
    source: "GRS",
    sourceUrl: "https://www.grsrecruitment.com/jobs",
    location: "Malta",
    salary: "€70,000 – €85,000",
    posted: "2026-04-15",
    isNew: false,
    applyUrl: "https://www.grsrecruitment.com/jobs",
    description:
      "Oversee the end-to-end operations of a multi-division group including logistics, warehousing, and retail. Drive operational excellence and build scalable processes.",
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
    sourceUrl: "https://jobsinmalta.com/general-management-jobs",
    location: "Malta",
    salary: "€50,000 – €60,000",
    posted: "2026-04-08",
    isNew: false,
    applyUrl: "https://jobsinmalta.com/general-management-jobs",
    description:
      "Manage the operational backbone of a leading Maltese importer and distributor. Scope includes warehousing, supply chain coordination, and a team of 25+.",
    skills: ["Supply Chain", "Warehouse Management", "ERP Systems", "Distribution", "Team Management"],
  },
  {
    id: "j008",
    title: "Chief Operating Officer",
    company: "Confidential — Maltese Services Group",
    category: "c-suite",
    source: "Keepmeposted",
    sourceUrl: "https://keepmeposted.com.mt",
    location: "Malta",
    salary: "€80,000+",
    posted: "2026-04-05",
    isNew: false,
    applyUrl: "https://keepmeposted.com.mt",
    description:
      "Senior COO appointment at a rapidly growing Maltese services group. Full executive accountability for day-to-day operations, technology enablement, and scaling a 100+ headcount organisation. Confidential client.",
    skills: ["COO Experience", "Scaling Organisations", "Technology Enablement", "Malta-based", "Executive Leadership"],
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

// ─── COMPANIES MONITORED ────────────────────────────────────────────────────
// Career pages scanned for new senior vacancies. Send Claude any new role
// from these to add it instantly.
export const MONITORED_COMPANIES = {
  "FMCG / Beverages": [
    { name: "Simonds Farsons Cisk plc", url: "https://www.farsons.com/careers/vacancies" },
    { name: "Nestlé Malta", url: "https://www.nestle.com/jobs" },
    { name: "Coca-Cola Malta (General Soft Drinks)", url: "https://www.gsd.com.mt" },
    { name: "P. Cutajar & Co. Ltd", url: "https://pcutajar.com.mt" },
    { name: "Charles Grech & Co. Ltd", url: "https://charlesgrech.com" },
    { name: "Camilleri Wines", url: "https://camilleriwines.com" },
    { name: "Liquigas Malta", url: "https://www.liquigas.com.mt" },
  ],
  "FMCG Distribution / Marketing": [
    { name: "Alf Mizzi & Sons Marketing Group", url: "https://alfmizzigroup.com/careers" },
    { name: "Francis Busuttil & Sons (Marketing) Ltd", url: "https://www.fbs.com.mt" },
    { name: "M&Z p.l.c.", url: "https://www.mz.com.mt" },
    { name: "Vivian Corporation Ltd", url: "https://vivian.com.mt" },
    { name: "VJ Salomone Marketing", url: "https://www.vjsalomone.com" },
    { name: "MAG Distribution", url: "https://www.mag.com.mt" },
    { name: "Anchor Brand Trading", url: "https://www.anchorbrand.com.mt" },
  ],
  "Retail / Supermarket / Mall": [
    { name: "PG plc (PAVI / PAMA / Zara Malta)", url: "https://pggroup.com.mt" },
    { name: "Tigné Mall plc (The Point)", url: "https://www.thepointmalta.com" },
    { name: "Lidl Malta", url: "https://karjieri.lidl.com.mt" },
    { name: "Welbee's Supermarkets", url: "https://welbees.com" },
    { name: "Greens Supermarket", url: "https://greens.com.mt" },
    { name: "Smart Supermarkets", url: "https://smart.com.mt" },
    { name: "Scotts Supermarket", url: "https://scotts.com.mt" },
  ],
  "Diversified / Consumer Groups": [
    { name: "Gasan Group", url: "https://gasangroup.com/careers" },
    { name: "Hili Ventures", url: "https://hiliventures.com/careers" },
    { name: "Zammit Group", url: "https://zammitgroup.com" },
    { name: "Express Group", url: "https://www.expressgroup.com.mt" },
    { name: "Tumas Group", url: "https://tumas.com" },
    { name: "Eden Leisure Group", url: "https://www.edenleisuregroup.com" },
    { name: "GO plc (Consumer)", url: "https://www.go.com.mt/careers" },
    { name: "Melita Limited (Consumer)", url: "https://www.melita.com/careers" },
  ],
  "Food Service / Hospitality Retail": [
    { name: "Premier Capital (McDonald's Malta) — Hili Ventures", url: "https://hiliventures.com/careers" },
    { name: "Food Chain Limited (Burger King / KFC / Boost)", url: "https://www.farsons.com/careers/vacancies" },
    { name: "HV Hospitality", url: "https://hiliventures.com/careers" },
  ],
};

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
  "Country Manager Malta 2026",
  "Managing Director Malta 2026",
  "Commercial Director Malta FMCG",
  "Chief Commercial Officer Malta 2026",
  "Retail Director Malta 2026",
  "General Manager Malta retail 2026",
  "Brand Manager Malta consumer 2026",
];
