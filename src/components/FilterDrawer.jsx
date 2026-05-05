import { X } from "lucide-react";
import { CATEGORIES, SOURCES } from "../data/jobs";

export default function FilterDrawer({ isOpen, onClose, filters, onChange }) {
  if (!isOpen) return null;

  const update = (key, val) => onChange({ ...filters, [key]: val });

  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer">
        <div className="drawer-header">
          <h3>Filter & Sort</h3>
          <button onClick={onClose} className="drawer-close">
            <X size={20} />
          </button>
        </div>

        <div className="drawer-section">
          <label className="drawer-label">Category</label>
          <div className="drawer-options">
            <button
              className={`drawer-chip${!filters.category ? " selected" : ""}`}
              onClick={() => update("category", null)}
            >
              All
            </button>
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <button
                key={key}
                className={`drawer-chip${filters.category === key ? " selected" : ""}`}
                style={filters.category === key ? { "--cat-color": cat.color } : {}}
                onClick={() => update("category", key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="drawer-section">
          <label className="drawer-label">Source</label>
          <div className="drawer-options">
            <button
              className={`drawer-chip${!filters.source ? " selected" : ""}`}
              onClick={() => update("source", null)}
            >
              All
            </button>
            {SOURCES.map((s) => (
              <button
                key={s}
                className={`drawer-chip${filters.source === s ? " selected" : ""}`}
                onClick={() => update("source", s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="drawer-section">
          <label className="drawer-label">Sort by</label>
          <div className="drawer-options">
            {[
              { val: "date", label: "Most Recent" },
              { val: "new", label: "New First" },
              { val: "salary", label: "Salary Disclosed" },
            ].map((opt) => (
              <button
                key={opt.val}
                className={`drawer-chip${filters.sort === opt.val ? " selected" : ""}`}
                onClick={() => update("sort", opt.val)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <button className="drawer-apply" onClick={onClose}>
          Apply Filters
        </button>
      </div>
    </>
  );
}
