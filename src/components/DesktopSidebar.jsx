import { CATEGORIES, SOURCES, jobMatchesCategory } from "../data/jobs";

export default function DesktopSidebar({ jobs, filters, onChange }) {
  const update = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <aside className="desktop-sidebar">

      {/* Category filter */}
      <div className="sidebar-panel">
        <h3 className="sidebar-heading">Category</h3>
        <div className="sidebar-options">
          <button
            className={`sidebar-chip${!filters.category ? " active" : ""}`}
            onClick={() => update("category", null)}
          >
            <span className="chip-dot" style={{ background: "var(--amber)" }} />
            All Categories
            <span className="chip-count">{jobs.length}</span>
          </button>
          {Object.entries(CATEGORIES).map(([key, cat]) => {
            const count = jobs.filter((j) => jobMatchesCategory(j, key)).length;
            return (
              <button
                key={key}
                className={`sidebar-chip${filters.category === key ? " active" : ""}`}
                style={{ "--cat-color": cat.color }}
                onClick={() => update("category", key)}
              >
                <span className="chip-dot" style={{ background: cat.color }} />
                {cat.label}
                <span className="chip-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Function filter */}
      <div className="sidebar-panel">
        <h3 className="sidebar-heading">Function</h3>
        <div className="sidebar-options">
          <button
            className={`sidebar-chip${!filters.func ? " active" : ""}`}
            onClick={() => update("func", null)}
          >
            All Functions
          </button>
          <button
            className={`sidebar-chip${filters.func === "finance" ? " active" : ""}`}
            onClick={() => update("func", "finance")}
          >
            Finance
            <span className="chip-count">{jobs.filter((j) => j.func === "finance").length}</span>
          </button>
          <button
            className={`sidebar-chip${filters.func === "legal" ? " active" : ""}`}
            onClick={() => update("func", "legal")}
          >
            Legal & Compliance
            <span className="chip-count">{jobs.filter((j) => j.func === "legal").length}</span>
          </button>
        </div>
      </div>

      {/* Source filter */}
      <div className="sidebar-panel">
        <h3 className="sidebar-heading">Source</h3>
        <div className="sidebar-options">
          <button
            className={`sidebar-chip${!filters.source ? " active" : ""}`}
            onClick={() => update("source", null)}
          >
            All Sources
          </button>
          {SOURCES.map((s) => (
            <button
              key={s}
              className={`sidebar-chip${filters.source === s ? " active" : ""}`}
              onClick={() => update("source", s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="sidebar-panel">
        <h3 className="sidebar-heading">Sort by</h3>
        <div className="sidebar-options">
          {[
            { val: "date", label: "Most Recent" },
            { val: "new", label: "New First" },
            { val: "salary", label: "Salary Disclosed" },
          ].map((opt) => (
            <button
              key={opt.val}
              className={`sidebar-chip${filters.sort === opt.val ? " active" : ""}`}
              onClick={() => update("sort", opt.val)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(filters.category || filters.source || filters.func || filters.sort !== "date") && (
        <button
          className="sidebar-clear"
          onClick={() => onChange({ category: null, source: null, func: null, sort: "date" })}
        >
          Clear all filters
        </button>
      )}
    </aside>
  );
}
