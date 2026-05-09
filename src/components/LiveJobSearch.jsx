import { useState } from "react";
import { Search, RefreshCw, ExternalLink, X, Sparkles, AlertCircle } from "lucide-react";
import { SEARCH_QUERIES } from "../data/jobs";

// ── Recruiter career pages to scan on every live search ─────────────────────
const RECRUITER_PAGES = [
  // Malta-based agencies
  { name: "GRS Recruitment",   url: "https://jobs.grsrecruitment.com/vacancies.aspx" },
  { name: "Konnekt",           url: "https://www.konnekt.com/search/job-focus:general-management" },
  { name: "Broadwing",         url: "https://broadwing.jobs/careers/job-location/malta/" },
  { name: "Reed Malta",        url: "https://www.reedglobal.com.mt/jobs" },
  { name: "Manpower Malta",    url: "https://www.manpowergroup.com.mt/jobs" },
  { name: "Outreach",          url: "https://outreachrecruitment.net/vacancies/" },
  { name: "AIMS International",url: "https://www.aims-malta.com/jobs" },
  // International agencies with Malta mandates
  { name: "COREcruitment",     url: "https://www.corecruitment.com/vacancies" },
  // Direct company career pages
  { name: "Hili Ventures",     url: "https://hiliventures.com/careers/" },
  { name: "Farsons",           url: "https://www.farsons.com/careers/vacancies" },
  { name: "AMSM",              url: "https://amsm.com.mt/careers/" },
  { name: "Gasan Group",       url: "https://careers.smartrecruiters.com/GasanGroup1" },
];

const SYSTEM_PROMPT = `You are an executive recruitment researcher specialising in senior management vacancies in Malta.

Your task: search the web and scan the recruiter career pages provided. Return ONLY currently open, verified senior executive vacancies in Malta at Chief, Head of Function, General Manager, Managing Director, or Director level.

STRICT RULES:
- Only return roles that exist right now — do NOT invent or hallucinate listings
- Only Malta-based or Malta-relocating roles
- Minimum seniority: Head of Function / General Manager / Director / C-Suite
- Sectors: FMCG, Retail, Consumer, Financial Services, iGaming, Technology, Hospitality, Construction
- If you find nothing verifiable, return an empty array []

Recruiter pages to scan:
${RECRUITER_PAGES.map(r => `- ${r.name}: ${r.url}`).join('\n')}

Respond ONLY with a valid JSON array (no markdown, no preamble). Format:
[
  {
    "title": "Head of Sales",
    "company": "Company Name or Confidential",
    "category": "head",
    "source": "GRS",
    "location": "Malta",
    "salary": "€60,000 – €75,000 or null",
    "posted": "2026-05-09",
    "applyUrl": "https://...",
    "description": "2-3 sentence factual description.",
    "skills": ["Skill 1", "Skill 2", "Skill 3"]
  }
]

category values: "c-suite" (CEO/COO/CFO/CMO/CTO/Chief X), "head" (Head of X, VP, Director), "general-manager" (GM, Country Manager, MD)
source values: "GRS" | "Konnekt" | "Reed Malta" | "Broadwing" | "COREcruitment" | "AIMS" | "Manpower" | "Outreach" | "LinkedIn" | "Direct"`;

const CATEGORY_LABELS = {
  "c-suite": "Chief / C-Suite",
  head: "Head of Function",
  "general-manager": "General Manager",
};
const CATEGORY_COLORS = {
  "c-suite": "#F59E0B",
  head: "#8B5CF6",
  "general-manager": "#10B981",
};

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch { return d; }
}

export default function LiveJobSearch() {
  const [status, setStatus] = useState("idle");
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) => setExpanded((e) => ({ ...e, [i]: !e[i] }));

  const runSearch = async () => {
    setStatus("searching");
    setResults([]);
    setErrorMsg("");

    // Rotate through all query types — pick 8 varied ones each run
    const shuffled = [...SEARCH_QUERIES].sort(() => Math.random() - 0.5);
    const querySet = shuffled.slice(0, 8).join(", ");

    const userPrompt = `Search for currently open senior executive vacancies in Malta using these search queries: ${querySet}

Also scan these recruiter career pages for live senior roles:
${RECRUITER_PAGES.map(r => `- ${r.name}: ${r.url}`).join('\n')}

Return only verified, currently open roles at Chief / Head of / General Manager / Director level in Malta. JSON array only — no text before or after.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [{ role: "user", content: userPrompt }],
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error?.message || "API error");

      const textBlock = data.content?.find((b) => b.type === "text");
      const raw = textBlock?.text?.trim() || "[]";
      const clean = raw.replace(/```json|```/g, "").trim();

      let jobs = [];
      try {
        jobs = JSON.parse(clean);
        if (!Array.isArray(jobs)) jobs = [];
      } catch { jobs = []; }

      setResults(jobs);
      setStatus("done");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="live-search">
      <div className="live-search-bar">
        <div className="live-search-info">
          <Sparkles size={15} className="live-search-sparkle" />
          <span className="live-search-label">
            Live search · {RECRUITER_PAGES.length} sources
          </span>
        </div>
        <button
          className={`live-search-btn${status === "searching" ? " loading" : ""}`}
          onClick={runSearch}
          disabled={status === "searching"}
        >
          <RefreshCw size={14} className={status === "searching" ? "spin" : ""} />
          {status === "searching" ? "Searching…" : "Check for new jobs"}
        </button>
      </div>

      {/* Source pills — always visible */}
      <div className="live-source-pills">
        {RECRUITER_PAGES.map((r) => (
          <span key={r.name} className="live-source-pill">{r.name}</span>
        ))}
      </div>

      {status === "searching" && (
        <div className="live-search-progress">
          <div className="progress-bar"><div className="progress-fill" /></div>
          <p className="progress-label">
            Scanning {RECRUITER_PAGES.length} recruiter pages and job boards across Malta…
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="live-search-error">
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {status === "done" && (
        <div className="live-results">
          <div className="live-results-header">
            <span className="live-results-count">
              {results.length === 0
                ? "No new verified senior vacancies found right now"
                : `${results.length} live role${results.length !== 1 ? "s" : ""} found`}
            </span>
            <button className="live-results-close" onClick={() => setStatus("idle")}>
              <X size={14} />
            </button>
          </div>

          {results.map((job, i) => (
            <div
              key={i}
              className="live-card"
              style={{ "--cat-color": CATEGORY_COLORS[job.category] || "#F59E0B" }}
            >
              <button className="live-card-header" onClick={() => toggleExpand(i)}>
                <div className="live-card-badges">
                  <span className="live-badge-cat">{CATEGORY_LABELS[job.category] || job.category}</span>
                  <span className="live-badge-source">{job.source}</span>
                  {job.salary && job.salary !== "null" && (
                    <span className="live-badge-salary">{job.salary}</span>
                  )}
                </div>
                <div className="live-card-title-row">
                  <div>
                    <p className="live-card-title">{job.title}</p>
                    <p className="live-card-company">{job.company}</p>
                    {job.posted && (
                      <p className="live-card-date">{formatDate(job.posted)} · {job.location}</p>
                    )}
                  </div>
                </div>
              </button>

              {expanded[i] && (
                <div className="live-card-body">
                  {job.description && <p className="live-card-desc">{job.description}</p>}
                  {job.skills?.length > 0 && (
                    <div className="live-card-skills">
                      {job.skills.map((s) => (
                        <span key={s} className="live-skill">{s}</span>
                      ))}
                    </div>
                  )}
                  {job.applyUrl && (
                    <a href={job.applyUrl} target="_blank" rel="noopener noreferrer" className="live-apply-btn">
                      Apply Now <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          {results.length > 0 && (
            <p className="live-results-footer">
              Send a screenshot to Claude to add any of these permanently to the board.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
