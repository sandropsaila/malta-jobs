import { JOBS, CATEGORIES } from "../data/jobs";

export default function MarketSnapshot({ jobs }) {
  const newCount = jobs.filter((j) => j.isNew).length;
  const topCat = Object.entries(CATEGORIES)
    .map(([key, cat]) => ({ key, label: cat.label, count: jobs.filter((j) => j.category === key).length }))
    .sort((a, b) => b.count - a.count)[0];

  const withSalary = jobs.filter((j) => j.salary).length;

  return (
    <div className="snapshot">
      <p className="snapshot-text">
        <span className="snapshot-highlight">{jobs.length} senior vacancies</span> currently tracked across Malta's executive job market.{" "}
        <span className="snapshot-highlight">{newCount} new role{newCount !== 1 ? "s" : ""}</span> added in the past 7 days.
        The most active category is <span className="snapshot-highlight">{topCat?.label}</span> with{" "}
        {topCat?.count} open position{topCat?.count !== 1 ? "s" : ""}.{" "}
        {withSalary > 0 && (
          <>
            {withSalary} listing{withSalary !== 1 ? "s" : ""} include{withSalary === 1 ? "s" : ""} a disclosed salary range.{" "}
          </>
        )}
        Sourced from LinkedIn, GRS, Keepmeposted, Jobsinmalta, Konnekt, and direct company career pages.
      </p>
    </div>
  );
}
