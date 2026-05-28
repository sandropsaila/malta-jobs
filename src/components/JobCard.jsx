import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, MapPin, Calendar, Briefcase } from "lucide-react";
import { CATEGORIES } from "../data/jobs";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function daysSince(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / 86400000);
}

export default function JobCard({ job }) {
  const [open, setOpen] = useState(false);
  const cat = CATEGORIES[job.category];
  const age = daysSince(job.posted);

  return (
    <article
      className="job-card"
      style={{ "--cat-color": cat.color, "--cat-bg": cat.bg, "--cat-border": cat.border }}
    >
      {/* Header row */}
      <button className="job-card-header" onClick={() => setOpen((o) => !o)}>
        <div className="job-card-top">
          <div className="job-badges">
            {job.isNew && <span className="badge-new">NEW</span>}
            <span className="badge-cat">{cat.label}</span>
            <span className="badge-source">{job.source}</span>
          </div>
          {job.salary && <span className="badge-salary">{job.salary}</span>}
        </div>

        <div className="job-card-main">
          <div className="job-info">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-company">{job.company}</p>
            <div className="job-meta">
              <span className="job-meta-item">
                <MapPin size={12} /> {job.location}
              </span>
              <span className="job-meta-item">
                <Calendar size={12} /> {formatDate(job.posted)}
                {age <= 7 && <em className="age-tag"> · {age}d ago</em>}
              </span>
            </div>
          </div>
          <span className="expand-icon">
            {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </div>
      </button>

      {/* Expandable body */}
      {open && (
        <div className="job-card-body">
          <p className="job-description">{job.description}</p>

          {job.skills.length > 0 && (
            <div className="job-skills">
              {job.skills.map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          )}

          <div className="job-actions">
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apply"
            >
              {job.linkType === "category" ? "View Listing" : "Apply Now"}{" "}
              <ExternalLink size={13} />
            </a>
            {job.sourceUrl !== job.applyUrl && (
              <a
                href={job.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-source"
              >
                View on {job.source}
              </a>
            )}
          </div>
          {job.linkType === "category" && (
            <p className="link-note">
              Link opens the recruiter's listing page (no stable per-role URL) —
              search the role title there.
            </p>
          )}
        </div>
      )}
    </article>
  );
}
