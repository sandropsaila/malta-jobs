import { useState, useMemo } from "react";
import PinLock from "./components/PinLock";
import NavBar from "./components/NavBar";
import StatsBar from "./components/StatsBar";
import MarketSnapshot from "./components/MarketSnapshot";
import FilterDrawer from "./components/FilterDrawer";
import DesktopSidebar from "./components/DesktopSidebar";
import JobCard from "./components/JobCard";
import CompaniesDirectory from "./components/CompaniesDirectory";
import LiveJobSearch from "./components/LiveJobSearch";
import RequestUpdate from "./components/RequestUpdate";
import { JOBS, jobMatchesCategory } from "./data/jobs";
import "./styles/global.css";
import "./styles/pinlock.css";
import "./styles/navbar.css";
import "./styles/stats.css";
import "./styles/snapshot.css";
import "./styles/jobcard.css";
import "./styles/drawer.css";
import "./styles/sidebar.css";
import "./styles/directory.css";
import "./styles/livesearch.css";
import "./styles/requpdate.css";

const SESSION_KEY = "malta_jobs_auth";
const COMPANIES_PIN_KEY = "malta_companies_auth";

export default function App() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(SESSION_KEY) === "1");
  const [companiesOpen, setCompaniesOpen] = useState(false);
  const [companiesUnlocked, setCompaniesUnlocked] = useState(() => sessionStorage.getItem(COMPANIES_PIN_KEY) === "1");
  const [search, setSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filters, setFilters] = useState({ category: null, source: null, func: null, sort: "date" });

  const handleUnlock = () => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setUnlocked(true);
  };

  const handleCompaniesUnlock = () => {
    sessionStorage.setItem(COMPANIES_PIN_KEY, "1");
    setCompaniesUnlocked(true);
  };

  const handleCompaniesOpen = () => {
    setCompaniesOpen(true);
  };

  const filtered = useMemo(() => {
    let jobs = [...JOBS];
    if (filters.category) jobs = jobs.filter((j) => jobMatchesCategory(j, filters.category));
    if (filters.source) jobs = jobs.filter((j) => j.source === filters.source);
    if (filters.func) jobs = jobs.filter((j) => j.func === filters.func);
    if (search.trim()) {
      const q = search.toLowerCase();
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.description.toLowerCase().includes(q) ||
          j.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    if (filters.sort === "new") {
      jobs = jobs.sort((a, b) => (isJobNew(b) - isJobNew(a)) || new Date(b.posted) - new Date(a.posted));
    } else if (filters.sort === "salary") {
      jobs = jobs.sort((a, b) => (b.salary ? 1 : 0) - (a.salary ? 1 : 0) || new Date(b.posted) - new Date(a.posted));
    } else {
      jobs = jobs.sort((a, b) => new Date(b.posted) - new Date(a.posted));
    }
    return jobs;
  }, [search, filters]);

  // Main app PIN
  if (!unlocked) return <PinLock onUnlock={handleUnlock} />;

  // Companies directory — separate PIN-protected overlay
  if (companiesOpen) {
    if (!companiesUnlocked) {
      return <PinLock onUnlock={handleCompaniesUnlock} subtitle="Companies Directory" />;
    }
    return <CompaniesDirectory onClose={() => setCompaniesOpen(false)} />;
  }

  return (
    <div className="app">
      <NavBar
        onSearch={setSearch}
        onFilterOpen={() => setDrawerOpen(true)}
        onCompaniesOpen={handleCompaniesOpen}
        searchVal={search}
      />
      <main className="main">
        <StatsBar
          jobs={JOBS}
          activeCategory={filters.category}
          onCategoryClick={(cat) => setFilters((f) => ({ ...f, category: cat }))}
        />
        <MarketSnapshot jobs={JOBS} />
        <RequestUpdate />
        <DesktopSidebar jobs={JOBS} filters={filters} onChange={setFilters} />
        <div className="jobs-list">
          <div className="jobs-list-label">Curated vacancies</div>
          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No vacancies match your search.</p>
              <button onClick={() => { setSearch(""); setFilters({ category: null, source: null, func: null, sort: "date" }); }}>
                Clear filters
              </button>
            </div>
          ) : (
            filtered.map((job) => <JobCard key={job.id} job={job} />)
          )}
        </div>
      </main>
      <footer className="footer">
        <p>High Profile Jobs — Malta Executive Vacancies</p>
        <p>LinkedIn · GRS · Konnekt · Broadwing · Reed Malta · AIMS · Manpower · Outreach · Heroix · Accelerate · Careerjet · Jobhound · COREcruitment · Pentasia</p>
      </footer>

      <FilterDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        filters={filters}
        onChange={setFilters}
      />
    </div>
  );
}
