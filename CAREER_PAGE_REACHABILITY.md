# Career Page Reachability Audit
# Classifies each company/source by how it can actually be searched.
# Re-run the audit as Step 0 of every "update searches".

## ✅ DIRECTLY REACHABLE — specific job pages fetchable & verifiable
These serve static HTML; I fetch the specific job URL to confirm live (not 410/closed).
- GRS Recruitment      — jobs.grsrecruitment.com  (fetch job URL, check "advert closed"/410)
- Konnekt              — konnekt.com/jobs/...       (fetch job URL, check 410, unavailable_after)
- OKX (Greenhouse)     — job-boards.greenhouse.io/okx
- Betsson (Greenhouse) — job-boards.greenhouse.io/betsson
- The Mill Adventure   — apply.workable.com/the-mill-adventure
- B2Spin (Breezy)      — b2spin.breezy.hr
- StablR / web3 roles  — web3.career

## 🟡 INDEXED-ONLY — reachable via Google, not by direct fetch of the careers page
The careers page itself is JS/bot-walled, but Google indexes individual roles.
Search site: or company-name queries; fetch whatever specific URL Google returns.
- Hili Ventures — jobs.hiliventures.com indexed by Google (role snippets visible) but job
  DETAIL pages bot-block direct fetch, so verify live status from snippet dates/deadlines
- Farsons, AMSM, Gasan, Argus, CMA CGM, Premier Capital (via jobs.hiliventures.com or bebee)
- Reed Malta, Broadwing, AIMS, Manpower, Outreach, Heroix, Accelerate
- BOV, HSBC Malta, GO, Corinthia, Malta Airport

## 🔴 JS-WALLED / BOT-BLOCKED — cannot extract specific URLs by any automated means
Only surface catalog pages; individual job URLs never appear in fetchable HTML.
- Jobhound.mt          — fully JS-rendered (empty HTML shell)
- Careerjet.com.mt     — bot-blocks with "unusual traffic" verification page
- LinkedIn direct posts— login wall
→ For these: rely on user screenshots, or a role surfacing on a reachable mirror.

## AUDIT PROCEDURE (Step 0 of update searches)
For each ✅ source: run its site: query, fetch top specific results, verify live.
For each 🟡 source: run company-name + role query, fetch any specific URL returned.
For each 🔴 source: note it's walled; skip unless a user screenshot/URL is provided.
If a 🟡 or 🔴 source is found to newly expose crawlable job URLs (like Hili did via
jobs.hiliventures.com), promote it to ✅ and correct its URL in DIRECT_CAREER_PAGES.
