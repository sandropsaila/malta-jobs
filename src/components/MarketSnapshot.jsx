import { CATEGORIES } from "../data/jobs";

export default function MarketSnapshot({ jobs }) {
  const newCount = jobs.filter((j) => j.isNew).length;
  const topCat = Object.entries(CATEGORIES)
    .map(([key, cat]) => ({ key, label: cat.label, count: jobs.filter((j) => j.category === key).length }))
    .sort((a, b) => b.count - a.count)[0];

  const withSalary = jobs.filter((j) => j.salary).length;

  return (
    <div className="snapshot">
      <p className="snapshot-text">
        <span className="snapshot-highlight">{jobs.length} senior vacancies</span> tracked across Malta in Consumer, Financial, Banking, iGaming, and Tech.{" "}
        <span className="snapshot-highlight">{newCount} new role{newCount !== 1 ? "s" : ""}</span> in the past 7 days.
        Most active category: <span className="snapshot-highlight">{topCat?.label}</span>{" "}
        ({topCat?.count} open).{" "}
        {withSalary > 0 && (
          <>{withSalary} listing{withSalary !== 1 ? "s" : ""} disclose salary. </>
        )}
        Sources: LinkedIn, GRS, Konnekt, Broadwing, Reed, Heroix, Accelerate, Careerjet, and direct career pages.
      </p>
    </div>
  );
}
