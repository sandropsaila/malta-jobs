import { useState, useMemo } from "react";
import { Search, X, Building2 } from "lucide-react";
import { COMPANIES, INDUSTRIES } from "../data/companies";

export default function CompaniesDirectory({ onClose }) {
  const [search, setSearch] = useState("");
  const [activeIndustry, setActiveIndustry] = useState(null);

  const counts = useMemo(() => {
    const c = { all: COMPANIES.length };
    for (const k of Object.keys(INDUSTRIES)) {
      c[k] = COMPANIES.filter((co) => co.industry === k).length;
    }
    return c;
  }, []);

  const filtered = useMemo(() => {
    let list = COMPANIES;
    if (activeIndustry) list = list.filter((c) => c.industry === activeIndustry);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [search, activeIndustry]);

  return (
    <div className="dir-overlay">
      <div className="dir-panel">
        <header className="dir-header">
          <div className="dir-title-wrap">
            <Building2 size={18} />
            <h2 className="dir-title">Companies Monitored</h2>
            <span className="dir-count-badge">{COMPANIES.length}</span>
          </div>
          <button className="dir-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </header>

        <div className="dir-search-wrap">
          <Search size={16} className="dir-search-icon" />
          <input
            className="dir-search-input"
            placeholder="Search 927 companies…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        </div>

        <div className="dir-industry-pills">
          <button
            className={`dir-pill${!activeIndustry ? " active" : ""}`}
            onClick={() => setActiveIndustry(null)}
          >
            All <span className="dir-pill-count">{counts.all}</span>
          </button>
          {Object.entries(INDUSTRIES).map(([key, ind]) => (
            <button
              key={key}
              className={`dir-pill${activeIndustry === key ? " active" : ""}`}
              style={{ "--ind-color": ind.color }}
              onClick={() => setActiveIndustry(key)}
            >
              <span className="dir-pill-dot" style={{ background: ind.color }} />
              {ind.label}
              <span className="dir-pill-count">{counts[key]}</span>
            </button>
          ))}
        </div>

        <div className="dir-list">
          {filtered.length === 0 ? (
            <div className="dir-empty">No companies match your search.</div>
          ) : (
            filtered.map((c, i) => (
              <div key={`${c.name}-${i}`} className="dir-row">
                <span className="dir-row-name">{c.name}</span>
                <span
                  className="dir-row-tag"
                  style={{ color: INDUSTRIES[c.industry]?.color }}
                >
                  {INDUSTRIES[c.industry]?.label}
                </span>
              </div>
            ))
          )}
        </div>

        <footer className="dir-footer">
          Showing {filtered.length.toLocaleString()} of {COMPANIES.length.toLocaleString()} companies
        </footer>
      </div>
    </div>
  );
}
