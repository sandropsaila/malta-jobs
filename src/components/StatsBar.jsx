import { CATEGORIES } from "../data/jobs";

export default function StatsBar({ jobs, activeCategory, onCategoryClick }) {
  const total = jobs.length;

  return (
    <div className="stats-bar">
      <button
        className={`stat-pill stat-pill--total${!activeCategory ? " active" : ""}`}
        onClick={() => onCategoryClick(null)}
      >
        <span className="stat-count">{total}</span>
        <span className="stat-label">All Vacancies</span>
      </button>
      {Object.entries(CATEGORIES).map(([key, cat]) => {
        const count = jobs.filter((j) => j.category === key).length;
        return (
          <button
            key={key}
            className={`stat-pill${activeCategory === key ? " active" : ""}`}
            style={{
              "--cat-color": cat.color,
              "--cat-bg": cat.bg,
              "--cat-border": cat.border,
            }}
            onClick={() => onCategoryClick(key)}
          >
            <span className="stat-count">{count}</span>
            <span className="stat-label">{cat.label}</span>
          </button>
        );
      })}
    </div>
  );
}
