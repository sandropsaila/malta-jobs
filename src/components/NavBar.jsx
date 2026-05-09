import { Search, SlidersHorizontal, Building2 } from "lucide-react";

const LAST_UPDATED = "9 May 2026, 17:30";

export default function NavBar({ onSearch, onFilterOpen, onCompaniesOpen, searchVal }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#F59E0B" strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="4" fill="#F59E0B" />
          </svg>
          <div>
            <span className="navbar-title">High Profile Jobs</span>
            <span className="navbar-sub">Malta Vacancies</span>
          </div>
        </div>

        {/* Desktop-only inline search */}
        <div className="search-wrap">
          <Search size={16} className="search-icon" />
          <input
            className="search-input"
            placeholder="Search roles, companies…"
            value={searchVal}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="navbar-updated">Updated {LAST_UPDATED}</span>
          <button className="filter-btn" onClick={onCompaniesOpen} aria-label="Companies monitored" title="Companies monitored">
            <Building2 size={18} />
          </button>
          <button className="filter-btn" onClick={onFilterOpen} aria-label="Filters">
            <SlidersHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Mobile-only search row */}
      <div className="navbar-search-row">
        <div className="search-wrap">
          <Search size={16} className="search-icon" />
          <input
            className="search-input"
            placeholder="Search roles, companies…"
            value={searchVal}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <button className="filter-btn" onClick={onCompaniesOpen} aria-label="Companies monitored">
          <Building2 size={18} />
        </button>
        <button className="filter-btn" onClick={onFilterOpen} aria-label="Filters">
          <SlidersHorizontal size={18} />
        </button>
      </div>
    </header>
  );
}
