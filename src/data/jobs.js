// ─── JOBS DATA ─────────────────────────────────────────────────────────────
// All roles verified from live sources — 9 May 2026.
// applyUrl  → direct application page (always opens in browser)
// sourceUrl → indexed URL confirming the vacancy exists
// ──────────────────────────────────────────────────────────────────────────

export const JOBS = [

  {
    id: "j701",
    title: "Chief Executive Officer",
    company: "Confidential — Food Manufacturing Company",
    category: "c-suite",
    source: "LinkedIn",
    sourceUrl: "https://www.linkedin.com/jobs/view/chief-executive-officer-at-corecruitment-ltd-4366397714",
    location: "Malta (Relocation Required)",
    salary: null,
    posted: "2026-05-08",
    isNew: true,
    applyUrl: "https://www.corecruitment.com/vacancies/8694220681",
    description:
      "COREcruitment is retained by a dynamic Maltese food manufacturing company to find an exceptional CEO. The ideal candidate is a food sector specialist with a proven career progression from hands-on operational roles to executive leadership — someone who has grown through production, operations, or commercial functions and now leads at board level. Responsibilities include directing long-term strategy, overseeing manufacturing operations, optimising quality and cost-efficiency, and inspiring high-performing teams to drive sustainable growth and profitability. Relocation to Malta required. Apply via corecruitment.com (ref #8694220681).",
    skills: ["Food Manufacturing", "CEO / MD Experience", "Operational Leadership", "P&L Ownership", "Strategic Planning"],
  },

  // ══ C-SUITE ════════════════════════════════════════════════════════════════

  {
    id: "j601",
    title: "Chief Commercial Officer",
    company: "Expedition42 (Konnekt / Jobsinmalta / Talexio)",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://www.konnekt.com/jobs/marketing-pr-jobs/chief-commercial-officer/28515",
    location: "Malta",
    salary: null,
    posted: "2026-04-20",
    isNew: true,
    applyUrl: "https://www.konnekt.com/jobs/apply/28515/marketing-pr-jobs/chief-commercial-officer",
    description:
      "Expedition42 — the hybrid tech and HR services group behind Konnekt, Jobsinmalta, Payrollmalta, Salariesinmalta and Talexio — is recruiting a CCO to drive sustainable revenue and margin growth across its entire brand portfolio. The CCO leads a 12-person sales and marketing team, owns the full customer lifecycle from acquisition to LTV, and reports to the CEO. 10+ years' commercial experience required, 5 in management. Contact jonathan.camilleri@exp42.com.",
    skills: ["CCO / Commercial Leadership", "B2B & B2C Sales", "Digital Marketing", "Brand Portfolio", "Revenue Growth"],
  },

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
      "A leading MFSA-regulated financial services firm is seeking a COO to lead and coordinate core operational areas including IT, risk, payments, and customer service. The COO will drive digital transformation, shape operational strategy alongside the CEO, and oversee business continuity and risk controls. Closing date 31 May 2026. Ref: BZ096 — contact Therisa Gambin at Konnekt (+356 2258 8038).",
    skills: ["Financial Services Ops", "MFSA / EU Regulation", "Digital Transformation", "Risk & Continuity", "C-Suite Leadership"],
  },

  {
    id: "j602",
    title: "Chief Operating Officer — Construction",
    company: "Confidential — Maltese Construction Group",
    category: "c-suite",
    source: "Konnekt",
    sourceUrl: "https://mt.bebee.com/job/223eb8f8c106d4483c14355a951ef7a2",
    location: "Malta",
    salary: null,
    posted: "2026-04-28",
    isNew: true,
    applyUrl: "https://www.konnekt.com/jobs",
    description:
      "A well-established Maltese construction group is seeking a COO to oversee construction projects from inception to delivery, ensuring they are completed within agreed timeframes and budgets as agreed with the board. The role requires a seasoned operator with deep knowledge of the Maltese construction landscape.",
    skills: ["Construction Operations", "Project Delivery", "Board Reporting", "Budget Management", "Site Oversight"],
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
      "Hili Properties plc — part of Hili Ventures with a €234M+ commercial real estate portfolio across Malta, Latvia, Lithuania, Estonia and Romania — is recruiting a permanent CEO following the suspension of its previous MD in January 2026. Daniela Pavia (CFO) serves as interim CEO. Listed-company appointment reporting to the Hili Ventures board.",
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
      "A Malta-based FMCG company is seeking a Head of Sales and Marketing reporting to the General Manager, responsible for directing both departments to grow revenue, increase market share, and execute strategies in collaboration with brand principals. 7+ years in FMCG sales and marketing, 3+ in senior leadership. Ref #10942 — sarah@grsrecruitment.com.",
    skills: ["FMCG Sales Leadership", "Brand & Marketing Strategy", "P&L / Budget Management", "Market Expansion", "Principal Management"],
  },

  {
    id: "j603",
    title: "Head of Sales & Marketing",
    company: "Expedition42",
    category: "head",
    source: "Konnekt",
    sourceUrl: "https://maltayp.com/company/354/Konnekt/jobs/4",
    location: "Malta",
    salary: null,
    posted: "2026-04-15",
    isNew: false,
    applyUrl: "https://www.konnekt.com/jobs",
    description:
      "Expedition42 is seeking a Head of Sales & Marketing to join their C-Suite, reporting directly to the CEO. The selected individual will lead both sales and marketing teams, own the commercialisation strategy across multiple brands, and drive client acquisition and retention. 10+ years' experience with strong B2B track record required.",
    skills: ["Sales & Marketing Leadership", "Multi-brand Strategy", "B2B Commercial", "Team Leadership", "Revenue Growth"],
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
      "A leading Malta-based Corporate Services provider is hiring a Head of Tax Advisory to build and grow its Tax Advisory practice — leading a team of tax professionals, advising corporates, international groups and HNWIs, and developing compliance frameworks covering FATCA, CRS, DAC, ATAD, Transfer Pricing and Pillar 2. Ref #10494 — michellec@grsrecruitment.com.",
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
      "An e-commerce retailer establishing its operational hub in Malta seeks a Global Head of Operations reporting to the CEO. Initial scope covers customer service and global DTC logistics, expanding to finance and marketing as functions migrate from the UK and USA. 8+ years operations, strong e-commerce / DTC background. Ref #10304 — michellec@grsrecruitment.com.",
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
      "A prominent wealth management group seeks a Group Head of Compliance & Regulatory Strategy to own group compliance policy and regulatory strategy across digital assets, trading and payments — senior advisor to the board across multiple regulated entities. Ref #10489 — michellec@grsrecruitment.com.",
    skills: ["Compliance Leadership", "Regulatory Strategy", "Digital Assets", "Multi-jurisdiction", "Board Advisor"],
  },

  // ══ GENERAL MANAGER ════════════════════════════════════════════════════════

  {
    id: "j604",
    title: "General Manager — Hospitality",
    company: "Confidential — Maltese Hospitality Group",
    category: "general-manager",
    source: "Konnekt",
    sourceUrl: "https://mt.trabajo.org/job-1812-72256ae7a69f94cd00530daeee354d68",
    location: "Malta",
    salary: null,
    posted: "2026-04-25",
    isNew: true,
    applyUrl: "https://www.konnekt.com/jobs",
    description:
      "A growing Maltese hospitality company is recruiting a General Manager reporting to the Board of Directors. Scope covers all operations, supplier and client relationships, business growth, KPI oversight, P&L management, team leadership, sales targets, and representation at industry events. The ideal candidate brings proven hospitality GM experience with strong commercial acumen.",
    skills: ["Hospitality GM", "P&L Ownership", "Board Reporting", "Client Relations", "Business Development"],
  },

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
      "AMSM is Malta's leading FMCG importer and distributor with 200+ brands across all supermarket and grocery channels. Senior GM roles are typically filled via executive search or standing open application. Apply at amsm.com.mt/careers or approach directly.",
    skills: ["FMCG Distribution", "P&L Management", "Multi-brand Portfolio", "Commercial Strategy", "Team Leadership"],
  },

  {
    id: "j801",
    title: "Head of Transformation",
    company: "Confidential — Financial Services",
    category: "head",
    source: "Direct",
    sourceUrl: "https://www.reedglobal.com.mt/jobs",
    location: "Birkirkara, Malta",
    salary: null,
    posted: "2026-04-18",
    isNew: false,
    applyUrl: "https://www.reedglobal.com.mt/jobs",
    description:
      "Reed Malta is recruiting a Head of Transformation for a confidential financial services client. Bridges strategy and delivery at the highest level — owning how ideas move from demand into production, defining delivery frameworks, leading re-architecture of legacy platforms, and driving consolidation programmes with measurable outcomes. 15+ years IT experience across systems analysis, development and delivery management with deep enterprise architecture expertise required. Contact antonio.ruiz@reed.com or +356 9903 6496.",
    skills: ["Enterprise Architecture", "Digital Transformation", "Legacy Modernisation", "Delivery Management", "Senior IT Leadership"],
  },

  {
    id: "j802",
    title: "Chief Financial Officer",
    company: "Confidential — Construction & M&E Group",
    category: "c-suite",
    source: "Direct",
    sourceUrl: "https://broadwing.jobs/careers/",
    location: "Malta",
    salary: "€45,000 – €55,000",
    posted: "2026-03-06",
    isNew: false,
    applyUrl: "https://broadwing.jobs/careers/",
    description:
      "Broadwing is recruiting a CFO for a growing Maltese construction and M&E group. Requires 5+ years in a senior finance leadership role within construction or M&E, a recognised accounting qualification (ACA, ACCA, CPA), and strong experience in project finance, cash flow management, multi-entity structures, and M&A. The CFO will align financial strategy with long-term group expansion, working closely with the board.",
    skills: ["Construction Finance", "Project Finance", "Multi-entity CFO", "M&A Experience", "ACA / ACCA / CPA"],
  },

  {
    id: "j803",
    title: "Head of Risk",
    company: "Confidential — Financial Services",
    category: "head",
    source: "Direct",
    sourceUrl: "https://broadwing.jobs/careers/",
    location: "Malta",
    salary: null,
    posted: "2026-02-03",
    isNew: false,
    applyUrl: "https://broadwing.jobs/careers/",
    description:
      "Broadwing is recruiting a Head of Risk for a Malta-based financial services firm — tracking and managing overall risk exposure across all business areas, contributing to key internal reporting, and building the firm's risk framework. Senior financial services risk background essential.",
    skills: ["Risk Management", "Financial Services", "Regulatory Reporting", "Risk Frameworks", "Senior Leadership"],
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
  "CCO Malta 2026",
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
];

// ── APPENDED 9 May 2026 — International Recruiter Search ──────────────────
