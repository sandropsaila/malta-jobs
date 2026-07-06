import { Search, SlidersHorizontal, Building2 } from "lucide-react";

// Injected at build time by Vite (see vite.config.js) — auto-updates every deploy
const LAST_UPDATED = typeof __BUILD_DATE__ !== "undefined" ? __BUILD_DATE__ : "";

export default function NavBar({ onSearch, onFilterOpen, onCompaniesOpen, searchVal }) {
  const actions = (
    <div className="navbar-actions">
      <button className="filter-btn" onClick={onCompaniesOpen} aria-label="Companies">
        <Building2 size={19} />
      </button>
      <button className="filter-btn" onClick={onFilterOpen} aria-label="Filters">
        <SlidersHorizontal size={19} />
      </button>
    </div>
  );

  return (
    <header className="navbar">
      {/* Brand */}
      <div className="navbar-top">
        <div className="navbar-brand">
          <svg className="navbar-logo" width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L34 12V28L20 36L6 28V12L20 4Z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="4" fill="#FFFFFF" />
          </svg>
          <div className="navbar-brand-text">
            <span className="navbar-title">High Profile Jobs</span>
            <span className="navbar-sub">Malta Vacancies</span>
          </div>
        </div>
        {/* Actions show here on mobile */}
        <div className="navbar-actions-mobile">{actions}</div>
      </div>

      {/* Search */}
      <div className="navbar-search-row">
        <div className="search-wrap">
          <Search size={17} className="search-icon" />
          <input
            className="search-input"
            placeholder="Search roles, companies…"
            value={searchVal}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Updated + actions (actions show here on desktop) */}
      <div className="navbar-updated-row">
        <span className="navbar-updated">Updated {LAST_UPDATED}</span>
        <div className="navbar-actions-desktop">{actions}</div>
      </div>
    </header>
  );
}
