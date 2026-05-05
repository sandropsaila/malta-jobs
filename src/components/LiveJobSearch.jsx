import { useState } from "react";
import { Search, RefreshCw, ExternalLink, X, Sparkles, AlertCircle } from "lucide-react";
import { SEARCH_QUERIES } from "../data/jobs";

const SYSTEM_PROMPT = `You are a job search assistant specialising in senior executive vacancies in Malta.
Your task is to search for and return ONLY real, currently open senior executive job vacancies in Malta.

Rules:
- Only return roles at Chief, Head of Function, General Manager, Managing Director, or Director level
- Only Malta-based roles
- Only return jobs you can find evidence for via web search — do NOT invent or hallucinate listings
- If you cannot find verified current vacancies, return an empty array
- Focus on: FMCG, Retail, Consumer, Financial Services, iGaming, and Technology sectors

Respond ONLY with a valid JSON array (no markdown, no preamble, no explanation). Example format:
[
  {
    "title": "Head of Marketing",
    "company": "Company Name",
    "category": "head",
    "source": "LinkedIn",
    "location": "Malta",
    "salary": "€60,000 – €75,000",
    "posted": "2026-05-05",
    "applyUrl": "https://...",
    "description": "2-3 sentence description of the role.",
    "skills": ["Skill 1", "Skill 2", "Skill 3"]
  }
]

Category values: "c-suite" (CEO/COO/CMO/CFO/Chief X), "head" (Head of X, VP, Director), "general-manager" (GM, Country Manager, MD)
If salary unknown use null. If posted date unknown use today's date.`;

const CATEGORY_LABELS = {
  "c-suite": "Chief / C-Suite",
  "head": "Head of Function",
  "general-manager": "General Manager",
};

const CATEGORY_COLORS = {
  "c-suite": "#F59E0B",
  "head": "#8B5CF6",
  "general-manager": "#10B981",
};

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function LiveJobSearch() {
  const [status, setStatus] = useState("idle"); // idle | searching | done | error
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) => setExpanded((e) => ({ ...e, [i]: !e[i] }));

  const runSearch = async () => {
    setStatus("searching");
    setResults([]);
    setErrorMsg("");

    // Use a random sample of search queries to keep it varied
    const queries = SEARCH_QUERIES
      .sort(() => Math.random() - 0.5)
      .slice(0, 6)
      .join(", ");

    const userPrompt = `Search for currently open senior executive vacancies in Malta using these queries: ${queries}

Also check these career pages for live senior roles:
- https://hiliventures.com/careers/
- https://www.farsons.com/careers/vacancies
- https://amsm.com.mt/careers/
- https://careers.smartrecruiters.com/GasanGroup1
- https://www.grsrecruitment.com/jobs-in-malta/
- https://www.konnekt.com/jobs

Return only verified, currently open roles at Chief / Head of / General Manager / Director level in Malta. JSON array only.`;

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

      if (!response.ok) {
        throw new Error(data.error?.message || "API error");
      }

      // Extract text from response
      const textBlock = data.content?.find((b) => b.type === "text");
      const raw = textBlock?.text?.trim() || "[]";

      // Strip any markdown fences
      const clean = raw.replace(/```json|```/g, "").trim();

      let jobs = [];
      try {
        jobs = JSON.parse(clean);
        if (!Array.isArray(jobs)) jobs = [];
      } catch {
        jobs = [];
      }

      setResults(jobs);
      setStatus("done");
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className="live-search">
      {/* Trigger button */}
      <div className="live-search-bar">
        <div className="live-search-info">
          <Sparkles size={15} className="live-search-sparkle" />
          <span className="live-search-label">AI-powered live search</span>
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

      {/* Searching state */}
      {status === "searching" && (
        <div className="live-search-progress">
          <div className="progress-bar">
            <div className="progress-fill" />
          </div>
          <p className="progress-label">Scanning career pages and job boards across Malta…</p>
        </div>
      )}

      {/* Error state */}
      {status === "error" && (
        <div className="live-search-error">
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Results */}
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
                  <span className="live-badge-cat">
                    {CATEGORY_LABELS[job.category] || job.category}
                  </span>
                  <span className="live-badge-source">{job.source}</span>
                  {job.salary && <span className="live-badge-salary">{job.salary}</span>}
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
                    <a
                      href={job.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-apply-btn"
                    >
                      Apply Now <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          {results.length > 0 && (
            <p className="live-results-footer">
              Tap any card to expand. Send Claude a screenshot to add these permanently to the board.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
